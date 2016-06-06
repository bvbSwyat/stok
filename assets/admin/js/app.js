/**
 * Created by swyat on 17.05.15.
 */
var AdminApp = angular.module("AdminApp", [
    "ui.bootstrap",
    "ngRoute",
    'ng-admin',
    'colorpicker.module',
    'AppConfig',
    'authProvider'
]);

AdminApp.config(function (NgAdminConfigurationProvider, AppConfigProvider) {

    function truncate(value) {
        if (!value) {
            return '';
        }

        return value.length > 50 ? value.substr(0, 50) + '...' : value;
    }

    var nga = NgAdminConfigurationProvider;
    var admin = nga.application('Sails') // application main title
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath + '/');
        //.baseApiUrl(AppConfigProvider.defaults.serviceBasePath); // main API endpoint

    var shopsList = nga.entity('list')
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath + '/shop/')
        .identifier(nga.field('id'));
        //.queryParams({
        //    list: ['list']
        //});

    var shopImages = nga.entity('shop_images')
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath + '/media/')
        .identifier(nga.field('id'));

    var chainStores = nga.entity('chain_stores')
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath +'/')
        .identifier(nga.field('id'));

    var goods = nga.entity('goods')
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath + '/')
        .identifier(nga.field('id'));

    var seo = nga.entity('seo')
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath +'/')
        .identifier(nga.field('id'));

    var comment = nga.entity('comments')
        .baseApiUrl(AppConfigProvider.defaults.serviceBasePath +'/')
        .identifier(nga.field('id'));

    admin
        .addEntity(shopsList)
        .addEntity(shopImages)
        .addEntity(chainStores)
        .addEntity(goods)
        .addEntity(seo)
        .addEntity(comment);

    function forSelectData(adminGroupIds) {
        var preparedObj = [];
        adminGroupIds.filter(function (adminGroupId) {
            preparedObj.push({value: adminGroupId, label: adminGroupId})
        });
        return preparedObj;
    }

// ---------------------------------------------start shopsList--------------------------------------------------------//

    shopsList.listView()
        .title('Список всіх магазинів')
        .infinitePagination(false) // by default, the list view uses infinite pagination. Set to false to use regulat pagination
        .fields([
            nga.field('id'),
            nga.field('name'),
            nga.field('type'),
            nga.field('address'),

            nga.field('p_mo')
                .label('Mon price'),
            nga.field('p_tu')
                .label('Tue price'),
            nga.field('p_we')
                .label('Wed price'),
            nga.field('p_th')
                .label('Thu price'),
            nga.field('p_fr')
                .label('Fri price'),
            nga.field('p_su')
                .label('Sat price'),
            nga.field('p_sa')
                .label('Sun price'),

            nga.field('size'),
            nga.field('wide', 'reference')
                .label('Chain Store')
                .targetEntity(chainStores)
                .targetField(nga.field('name').map(truncate)),
            nga.field('goods', 'reference_many')
                .targetEntity(goods)
                .targetField(nga.field('name')),
            nga.field('email'),
            nga.field('telephone', 'number'),
            nga.field('site')
        ])
        .sortField('id')
        .sortDir('ASC')
        .filters([
            nga.field('type'),
            nga.field('address'),
            nga.field('size')
        ])
        .batchActions([]) // disable checkbox column and batch delete
        .listActions(['show', 'edit', 'delete']);

    shopsList.editionView()
        .title('Редагування інформації магазину "{{ entry.values.name }}"') // title() accepts a template string, which has access to the entry
        .actions(['list', 'show', 'delete']) // choose which buttons appear in the top action bar. Show is disabled by default
        .fields([
            nga.field('name', 'string'),
            nga.field('color', 'template')
                .template('<color-select entry="entry"></color-select>'),
            nga.field('type', 'choice')
                .choices([{value: "sh", label: "Секонд Хенд"},
                    {value: "st", label: "Сток"},
                    {value: "ss", label: "Секонд Хенд + Cток"}])
                .validation({required: true}),
            nga.field('address', 'string').validation({required: true}),

            nga.field('p_mo')
                .label('Monday price', 'string'),
            nga.field('p_tu')
                .label('Tuesday price', 'string'),
            nga.field('p_we')
                .label('Wednesday price', 'string'),
            nga.field('p_th')
                .label('Thursday price', 'string'),
            nga.field('p_fr')
                .label('Friday price', 'string'),
            nga.field('p_su')
                .label('Saturday price', 'string'),
            nga.field('p_sa')
                .label('Sunday price', 'string'),

            nga.field('size', 'choice')
                .choices([{value: "b", label: "Великий"},
                    {value: "m", label: "Середній"},
                    {value: "s", label: "Малий"}])
                .validation({required: true}),
            nga.field('wide', 'reference')
                .label('Chain Store')
                .targetEntity(chainStores)
                .targetField(nga.field('name').map(truncate)),
            nga.field('goods', 'reference_many') // ReferenceMany translates to a select multiple
                .targetEntity(goods)
                .targetField(nga.field('name'))
                .cssClasses('col-sm-4'),
            nga.field('email', 'email'),
            nga.field('telephone'),
            nga.field('site'),
            nga.field('title'),
            nga.field('description'),
            nga.field('comments', 'referenced_list') // display list of related comments
                .targetEntity(comment)
                .targetReferenceField('id')
                .targetFields([
                    nga.field('id'),
                    nga.field('email').label('Email'),
                    nga.field('rating').label('Rating'),
                    nga.field('comment').label('Comment'),
                    nga.field('accept').label('Accept')
                ]),
        ]);

    shopsList.showView()
        .actions(['list', 'edit', 'delete'])
        .title('Перегляд інформації магазину "{{ entry.values.name }}"')
        .fields([
            nga.field('id'),
            shopsList.editionView().fields()
        ]);

    shopsList.creationView()
        .title('Cтворення нового магазину')
        .actions(['list'])
        .fields([
            nga.field('name', 'string'),
            nga.field('color', 'template')
                .template('<color-select entry="entry"></color-select>'),
            nga.field('type', 'choice')
                .choices([{value: "sh", label: "Секонд Хенд"},
                            {value: "st", label: "Сток"},
                            {value: "ss", label: "Секонд Хенд + Cток"}])
                .validation({required: true}),
            nga.field('address', 'string').validation({required: true}),

            nga.field('p_mo')
                .label('Monday price'),
            nga.field('p_tu')
                .label('Tuesday price'),
            nga.field('p_we')
                .label('Wednesday price'),
            nga.field('p_th')
                .label('Thursday price'),
            nga.field('p_fr')
                .label('Friday price'),
            nga.field('p_su')
                .label('Saturday price'),
            nga.field('p_sa')
                .label('Sunday price'),

            nga.field('size', 'choice')
                .choices([{value: "b", label: "Великий"},
                    {value: "m", label: "Середній"},
                    {value: "s", label: "Малий"}])
                .validation({required: true}),
            nga.field('email', 'email'),
            nga.field('telephone'),
            nga.field('site'),
            nga.field('title'),
            nga.field('description')
        ]);

////-----------------------------------------end shopsList------------------------------------------------------------//

// ---------------------------------------------start seo-------------------------------------------------------------//

    seo.listView()
        .title('SEO')
        .fields([
            nga.field('id'),
            nga.field('page'),
            nga.field('title'),
            nga.field('description')
        ])
        .listActions(['edit', 'delete']);

    seo.creationView()
        .fields([
            nga.field('page'),
            nga.field('title'),
            nga.field('description', 'text')
        ]);

    seo.editionView()
        .fields(seo.creationView().fields());

// ---------------------------------------------end seo---------------------------------------------------------------//

// ---------------------------------------------start comments--------------------------------------------------------//

    comment.listView()
        .title('Comments')
        .fields([
            nga.field('updatedAt', 'datetime')
                .label('CreatedAt'),
            nga.field('email'),
            nga.field('rating'),
            nga.field('comment'),
            nga.field('accept', 'boolean'),
            nga.field('shop', 'reference')
                .label('Shop')
                .map(truncate)
                .targetEntity(shopsList)
                .targetField(nga.field('name').map(truncate))

        ])
        .listActions(['edit', 'delete']);

    comment.creationView()
        .fields([
            nga.field('email', 'email'),
            nga.field('rating', 'number'),
            nga.field('comment', 'text'),
            nga.field('accept', 'boolean'),
            nga.field('shop', 'reference')
                .label('Shop')
                .map(truncate)
                .targetEntity(shopsList)
                .targetField(nga.field('name').map(truncate))
        ]);

    comment.editionView()
        .fields(comment.creationView().fields());

// ---------------------------------------------end comments--------------------------------------------------------//

// ---------------------------------------------start shopImages-------------------------------------------------------//

    shopImages.listView()
        .actions([])
        .title('Список картинок для магазинів')
        .infinitePagination(false) // by default, the list view uses infinite pagination. Set to false to use regulat pagination
        .fields([
            nga.field('id'),
            nga.field('shop', 'reference')
                .label('Shop')
                .map(truncate)
                .targetEntity(shopsList)
                .targetField(nga.field('name').map(truncate)),
            nga.field('logo', 'template')
                .template('<logo-image entry="entry"></logo-image>'),
            nga.field('images', 'template')
                .template('<images-list entry="entry"></images-list>')
        ])
        .sortField('id')
        .sortDir('ASC')
        .filters([
            nga.field('shop_id'),
        ])
        .batchActions([]) // disable checkbox column and batch delete
        .listActions(['edit', 'delete']);

    shopImages.editionView()
        .title('Добавлення, редагування картинок магазину "{{ entry.values.shop_id }}"') // title() accepts a template string, which has access to the entry
        .actions(['list']) // choose which buttons appear in the top action bar. Show is disabled by default
        .fields([
            nga.field(' ', 'template')
                .template('<images-template entry="entry"></images-template>')
        ]);

// ------------------------------------------end shopImages------------------------------------------------------------//

// ---------------------------------------------start chainStores--------------------------------------------------------//

    chainStores.listView()
        .title('Список назв мереж магазинів')
        .infinitePagination(false) // by default, the list view uses infinite pagination. Set to false to use regulat pagination
        .fields([
            nga.field('id'),
            nga.field('name')
        ])
        .sortField('id')
        .sortDir('ASC')
        .batchActions([]) // disable checkbox column and batch delete
        .listActions(['show', 'edit', 'delete']);

    chainStores.showView()
        .actions(['list', 'edit', 'delete'])
        .title('Перегляд інформації магазину "{{ entry.values.name }}"')
        .fields([
            nga.field('id'),
            nga.field('name')
        ]);

    chainStores.editionView()
        .title('Редагування мережі магазинів "{{ entry.values.name }}"') // title() accepts a template string, which has access to the entry
        .actions(['list', 'show', 'delete']) // choose which buttons appear in the top action bar. Show is disabled by default
        .fields([
            nga.field('name', 'string').validation({required: true})
        ]);

    chainStores.creationView()
        .title('Cтворення нової мережі магазинів')
        .actions(['list'])
        .fields([
            nga.field('name', 'string').validation({required: true})
        ]);

////-----------------------------------------end chainStores------------------------------------------------------------//

// ---------------------------------------------start Goods--------------------------------------------------------//

    goods.listView()
        .title('Список назв всіх товарів')
        .infinitePagination(false) // by default, the list view uses infinite pagination. Set to false to use regulat pagination
        .fields([
            nga.field('id'),
            nga.field('name')
        ])
        .sortField('id')
        .sortDir('ASC')
        .batchActions([]) // disable checkbox column and batch delete
        .listActions(['show', 'edit', 'delete']);

    goods.showView()
        .actions(['list', 'edit', 'delete'])
        .title('Перегляд товару "{{ entry.values.name }}"')
        .fields([
            nga.field('id'),
            nga.field('name')
        ]);

    goods.editionView()
        .title('Редагування назви товару "{{ entry.values.name }}"') // title() accepts a template string, which has access to the entry
        .actions(['list', 'show', 'delete']) // choose which buttons appear in the top action bar. Show is disabled by default
        .fields([
            nga.field('name', 'string').validation({required: true})
        ]);

    goods.creationView()
        .title('Cтворення нового товару')
        .actions(['list'])
        .fields([
            nga.field('name', 'string').validation({required: true})
        ]);

////-----------------------------------------end Goods------------------------------------------------------------//

    admin.menu(nga.menu()
        .addChild(nga.menu()
            .title('Dashboard')
            .icon('<span class="glyphicon glyphicon-file"></span>')
            .link('/dashboard'))
        .addChild(nga.menu()
            .title('Shops data')
            .icon('<span class="glyphicon glyphicon-list"></span>')
            .addChild(nga.menu(shopsList))
            .addChild(nga.menu(shopImages))
            .addChild(nga.menu(chainStores))
            .addChild(nga.menu(goods))
            .addChild(nga.menu(comment).icon('<span class="glyphicon glyphicon-comment"></span>'))
            .addChild(nga.menu(seo).icon('<span class="glyphicon glyphicon-globe"></span>'))
        )
        .addChild(nga.menu()
            .title('Logs')
            .icon('<span class="glyphicon glyphicon-file"></span>')
        )
        .addChild(nga.menu()
            .title('Settings')
            .icon('<span class="glyphicon glyphicon-file"></span>')
            .link('/settings'))
        .addChild(nga.menu()
            .title('Logout')
            .icon('<span class="glyphicon glyphicon-file"></span>')
            .link('/logout'))
    );

    nga.configure(admin);
});
