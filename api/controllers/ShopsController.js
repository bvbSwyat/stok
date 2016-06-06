/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        var hasFilters = req.param('filters') != undefined && req.param('filters') != "";
        var hasPagination = req.param('page') != undefined && req.param('page') != "" && !isNaN(parseInt(req.param('page')));
        var pageNumber = hasPagination === true ? parseInt(req.param('page')) : 1;

        var filters = FiltersService.getFiltersObj(req.param('filters'));
        var filtersObj = FiltersService.getRequestFilterObj(filters);

        var searchObj = FiltersService.getSearchObj(filters.search);

        async.parallel({
            shops: function(callback) {
                Shop.find(filtersObj)
                    .populate('media')
                    .populate('rating')
                    .sort('id DESC')
                    .where(searchObj)
                    .exec(function (err, shops) {
                        callback(err, shops);
                    })
            },
            paginator: function (callback) {
                Shop.count(filtersObj).where(searchObj).exec(function (err, count) {
                    var pagesArray = [];
                    var i = 0;
                    var baseUrl = ConfigsService.getBaseUrl();
                    var pagesCount = Math.ceil(count / ConfigsService.shopsPerPage);
                    while (i < pagesCount) {
                        i++;
                        pagesArray.push(baseUrl + "/page/" + i);
                    }
                    callback(err, {total: count, current: pageNumber, links: pagesArray})
                })
            }
        }, function (err, results) {
            async.parallel(FiltersService.getAllFilters(err, results), function (err, filter_data) {

                //if didn't find any
                if (results.shops.length == 0) {
                    Shop.find()
                        .sort('id DESC')
                        .exec(function (err, shops) {
                            results.filter_data = FiltersService.setFiltersVisibility(filter_data, shops);
                            //add search value to filter data results
                            results.filter_data.search = FiltersService.setSearchVisibility(filters.search);
                            res.seo(results, 'main');
                        });

                } else {
                    results.filter_data = FiltersService.setFiltersVisibility(filter_data, results.shops);
                    //add search value to filter data results
                    results.filter_data.search = FiltersService.setSearchVisibility(filters.search);
                    results.shops = FiltersService.hasMinMaxPriceDays(filters)
                        ? FiltersService.getMinMaxPriceShops(filters, results.shops)
                        : results.shops;
                    results.shops = FiltersService.hasRatingFilter(filters)
                        ? FiltersService.getRatingShops(filters, results.shops)
                        : results.shops;
                    // set total count with max/minPrice or rating
                    if (FiltersService.hasMinMaxPriceDays(filters) || FiltersService.hasRatingFilter(filters)) {
                        results.paginator.total = results.shops.length;
                    }

                    results.shops = TransitionalService.getShopsPerPage(pageNumber, results.shops);
                    res.seo(results, 'main');
                }


            });
        });
    }
};

