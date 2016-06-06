!function (AV, window, document) {
    AV.build = {
        contentShouldUseStaging: !1,
        version: "1.0",
        bundled: !1,
        feather_baseURL: "http://feather.aviary.com/csdk/4.1.1.29/",
        feather_baseURL_SSL: "https://dme0ih8comzn4.cloudfront.net/csdk/4.1.1.29/",
        feather_stickerURL: "http://feather.aviary.com/stickers/",
        feather_stickerURL_SSL: "https://dme0ih8comzn4.cloudfront.net/stickers/",
        imgrecvBase: "http://featherservices.aviary.com/",
        imgrecvBase_SSL: "https://featherservices.aviary.com/",
        featherTargetAnnounce: "http://featherservices.aviary.com/feather_target_announce_v3.html",
        featherTargetAnnounce_SSL: "https://featherservices.aviary.com/feather_target_announce_v3.html",
        imgrecvServer: "http://featherservices.aviary.com/FeatherReceiver.aspx",
        imgrecvServer_SSL: "https://featherservices.aviary.com/FeatherReceiver.aspx",
        jsonp_imgserver: "http://featherservices.aviary.com/imgjsonpserver.aspx",
        jsonp_imgserver_SSL: "https://featherservices.aviary.com/imgjsonpserver.aspx",
        proxyServer: "http://featherservices.aviary.com/proxy.aspx",
        proxyServer_SSL: "https://featherservices.aviary.com/proxy.aspx",
        asyncImgrecvBase: "http://cc-api-aviary-cds.adobe.io/",
        asyncImgrecvBase_SSL: "https://cc-api-aviary-cds.adobe.io/",
        manifestURL: "http://cd.aviary.com",
        manifestURL_SSL: "https://d42hh4005hpu.cloudfront.net",
        gatewayAssetURL: "http://cc-api-aviary-cds.adobe.io",
        gatewayAssetURL_SSL: "https://cc-api-aviary-cds.adobe.io",
        cdsContentURL: "http://cd.aviary.com",
        cdsContentURL_SSL: "https://d42hh4005hpu.cloudfront.net",
        asyncFeatherTargetAnnounce: "http://cc-api-aviary-cds.adobe.io/feather_target_announce_v3.html",
        asyncFeatherTargetAnnounce_SSL: "https://cc-api-aviary-cds.adobe.io/feather_target_announce_v3.html",
        asyncImgrecvCreateJob: "http://cc-api-aviary-cds.adobe.io/createjob",
        asyncImgrecvCreateJob_SSL: "https://cc-api-aviary-cds.adobe.io/createjob",
        asyncImgrecvGetJobStatus: "http://cc-api-aviary-cds.adobe.io/getjobstatus",
        asyncImgrecvGetJobStatus_SSL: "https://cc-api-aviary-cds.adobe.io/getjobstatus",
        googleTracker: "UA-84575-22",
        inAppPurchaseFrameURL: "http://purchases.viary.com/gateway.aspx?p=flickr",
        MINIMUM_FLASH_PLAYER_VERSION: "10.2.0"
    };
    var avpw_swfobject = function () {
        function e() {
            if (!B) {
                try {
                    var e = k.getElementsByTagName("body")[0].appendChild(v("span"));
                    e.parentNode.removeChild(e)
                } catch (t) {
                    return
                }
                B = !0;
                for (var n = U.length, a = 0; n > a; a++)U[a]()
            }
        }

        function t(e) {
            B ? e() : U[U.length] = e
        }

        function n(e) {
            if (typeof O.addEventListener != D)O.addEventListener("load", e, !1); else if (typeof k.addEventListener != D)k.addEventListener("load", e, !1); else if (typeof O.attachEvent != D)m(O, "onload", e); else if ("function" == typeof O.onload) {
                var t = O.onload;
                O.onload = function () {
                    t(), e()
                }
            } else O.onload = e
        }

        function a() {
            F ? i() : o()
        }

        function i() {
            var e = k.getElementsByTagName("body")[0], t = v(E);
            t.setAttribute("type", V);
            var n = e.appendChild(t);
            if (n) {
                var a = 0;
                !function () {
                    if (typeof n.GetVariable != D) {
                        var i = n.GetVariable("$version");
                        i && (i = i.split(" ")[1].split(","), G.pv = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])
                    } else if (10 > a)return a++, void setTimeout(arguments.callee, 10);
                    e.removeChild(t), n = null, o()
                }()
            } else o()
        }

        function o() {
            var e = M.length;
            if (e > 0)for (var t = 0; e > t; t++) {
                var n = M[t].id, a = M[t].callbackFn, i = {success: !1, id: n};
                if (G.pv[0] > 0) {
                    var o = f(n);
                    if (o)if (!y(M[t].swfVersion) || G.wk && G.wk < 312)if (M[t].expressInstall && s()) {
                        var u = {};
                        u.data = M[t].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                        for (var d = {}, h = o.getElementsByTagName("param"), p = h.length, g = 0; p > g; g++)"movie" != h[g].getAttribute("name").toLowerCase() && (d[h[g].getAttribute("name")] = h[g].getAttribute("value"));
                        l(u, d, n, a)
                    } else c(o), a && a(i); else b(n, !0), a && (i.success = !0, i.ref = r(n), a(i))
                } else if (b(n, !0), a) {
                    var v = r(n);
                    v && typeof v.SetVariable != D && (i.success = !0, i.ref = v), a(i)
                }
            }
        }

        function r(e) {
            var t = null, n = f(e);
            if (n && "OBJECT" == n.nodeName)if (typeof n.SetVariable != D)t = n; else {
                var a = n.getElementsByTagName(E)[0];
                a && (t = a)
            }
            return t
        }

        function s() {
            return !H && y("6.0.65") && (G.win || G.mac) && !(G.wk && G.wk < 312)
        }

        function l(e, t, n, a) {
            H = !0, S = a || null, W = {success: !1, id: n};
            var i = f(n);
            if (i) {
                "OBJECT" == i.nodeName ? (_ = u(i), A = null) : (_ = i, A = n), e.id = N, (typeof e.width == D || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == D || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), k.title = k.title.slice(0, 47) + " - Flash Player Installation";
                var o = G.ie && G.win ? "ActiveX" : "PlugIn", r = "MMredirectURL=" + encodeURI(window.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + k.title;
                if (typeof t.flashvars != D ? t.flashvars += "&" + r : t.flashvars = r, G.ie && G.win && 4 != i.readyState) {
                    var s = v("div");
                    n += "SWFObjectNew", s.setAttribute("id", n), i.parentNode.insertBefore(s, i), i.style.display = "none", function () {
                        4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
                    }()
                }
                d(e, t, n)
            }
        }

        function c(e) {
            if (G.ie && G.win && 4 != e.readyState) {
                var t = v("div");
                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(u(e), t), e.style.display = "none", function () {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                }()
            } else e.parentNode.replaceChild(u(e), e)
        }

        function u(e) {
            var t = v("div");
            if (G.win && G.ie)t.innerHTML = e.innerHTML; else {
                var n = e.getElementsByTagName(E)[0];
                if (n) {
                    var a = n.childNodes;
                    if (a)for (var i = a.length, o = 0; i > o; o++)1 == a[o].nodeType && "PARAM" == a[o].nodeName || 8 == a[o].nodeType || t.appendChild(a[o].cloneNode(!0))
                }
            }
            return t
        }

        function d(e, t, n) {
            var a, i = f(n);
            if (G.wk && G.wk < 312)return a;
            if (i)if (typeof e.id == D && (e.id = n), G.ie && G.win) {
                var o = "";
                for (var r in e)e[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? t.movie = e[r] : "styleclass" == r.toLowerCase() ? o += ' class="' + e[r] + '"' : "classid" != r.toLowerCase() && (o += " " + r + '="' + e[r] + '"'));
                var s = "";
                for (var l in t)t[l] != Object.prototype[l] && (s += '<param name="' + l + '" value="' + t[l] + '" />');
                i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + s + "</object>", j[j.length] = e.id, a = f(e.id)
            } else {
                var c = v(E);
                c.setAttribute("type", V);
                for (var u in e)e[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? c.setAttribute("class", e[u]) : "classid" != u.toLowerCase() && c.setAttribute(u, e[u]));
                for (var d in t)t[d] != Object.prototype[d] && "movie" != d.toLowerCase() && h(c, d, t[d]);
                i.parentNode.replaceChild(c, i), a = c
            }
            return a
        }

        function h(e, t, n) {
            var a = v("param");
            a.setAttribute("name", t), a.setAttribute("value", n), e.appendChild(a)
        }

        function p(e) {
            var t = f(e);
            t && "OBJECT" == t.nodeName && (G.ie && G.win ? (t.style.display = "none", function () {
                4 == t.readyState ? g(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        }

        function g(e) {
            var t = f(e);
            if (t) {
                for (var n in t)"function" == typeof t[n] && (t[n] = null);
                t.parentNode.removeChild(t)
            }
        }

        function f(e) {
            var t = null;
            try {
                t = k.getElementById(e)
            } catch (n) {
            }
            return t
        }

        function v(e) {
            return k.createElement(e)
        }

        function m(e, t, n) {
            e.attachEvent(t, n), $[$.length] = [e, t, n]
        }

        function y(e) {
            var t = G.pv, n = e.split(".");
            return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
        }

        function w(e, t, n, a) {
            if (!G.ie || !G.mac) {
                var i = k.getElementsByTagName("head")[0];
                if (i) {
                    var o = n && "string" == typeof n ? n : "screen";
                    if (a && (T = null, C = null), !T || C != o) {
                        var r = v("style");
                        r.setAttribute("type", "text/css"), r.setAttribute("media", o), T = i.appendChild(r), G.ie && G.win && typeof k.styleSheets != D && k.styleSheets.length > 0 && (T = k.styleSheets[k.styleSheets.length - 1]), C = o
                    }
                    G.ie && G.win ? T && typeof T.addRule == E && T.addRule(e, t) : T && typeof k.createTextNode != D && T.appendChild(k.createTextNode(e + " {" + t + "}"))
                }
            }
        }

        function b(e, t) {
            if (z) {
                var n = t ? "visible" : "hidden";
                B && f(e) ? f(e).style.visibility = n : w("#" + e, "visibility:" + n)
            }
        }

        function I(e) {
            var t = /[\\\"<>\.;]/, n = null != t.exec(e);
            return n && typeof encodeURIComponent != D ? encodeURIComponent(e) : e
        }

        {
            var _, A, S, W, T, C, D = "undefined", E = "object", R = "Shockwave Flash", L = "ShockwaveFlash.ShockwaveFlash", V = "application/x-shockwave-flash", N = "SWFObjectExprInst", P = "onreadystatechange", O = window, k = document, x = navigator, F = !1, U = [a], M = [], j = [], $ = [], B = !1, H = !1, z = !0, G = function () {
                var e = typeof k.getElementById != D && typeof k.getElementsByTagName != D && typeof k.createElement != D, t = x.userAgent.toLowerCase(), n = x.platform.toLowerCase(), a = /win/.test(n ? n : t), i = /mac/.test(n ? n : t), o = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, r = !1, s = [0, 0, 0], l = null;
                if (typeof x.plugins != D && typeof x.plugins[R] == E)l = x.plugins[R].description, !l || typeof x.mimeTypes != D && x.mimeTypes[V] && !x.mimeTypes[V].enabledPlugin || (F = !0, r = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), s[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), s[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof O.ActiveXObject != D)try {
                    var c = new ActiveXObject(L);
                    c && (l = c.GetVariable("$version"), l && (r = !0, l = l.split(" ")[1].split(","), s = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
                } catch (u) {
                }
                return {w3: e, pv: s, wk: o, ie: r, win: a, mac: i}
            }();
            !function () {
                G.w3 && ((typeof k.readyState != D && "complete" == k.readyState || typeof k.readyState == D && (k.getElementsByTagName("body")[0] || k.body)) && e(), B || (typeof k.addEventListener != D && k.addEventListener("DOMContentLoaded", e, !1), G.ie && G.win && (k.attachEvent(P, function () {
                    "complete" == k.readyState && (k.detachEvent(P, arguments.callee), e())
                }), O == top && !function () {
                    if (!B) {
                        try {
                            k.documentElement.doScroll("left")
                        } catch (t) {
                            return void setTimeout(arguments.callee, 0)
                        }
                        e()
                    }
                }()), G.wk && !function () {
                    return B ? void 0 : /loaded|complete/.test(k.readyState) ? void e() : void setTimeout(arguments.callee, 0)
                }(), n(e)))
            }(), function () {
                G.ie && G.win && window.attachEvent("onunload", function () {
                    for (var e = $.length, t = 0; e > t; t++)$[t][0].detachEvent($[t][1], $[t][2]);
                    for (var n = j.length, a = 0; n > a; a++)p(j[a]);
                    for (var i in G)G[i] = null;
                    G = null;
                    for (var o in avpw_swfobject)avpw_swfobject[o] = null;
                    avpw_swfobject = null
                })
            }()
        }
        return {
            registerObject: function (e, t, n, a) {
                if (G.w3 && e && t) {
                    var i = {};
                    i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = a, M[M.length] = i, b(e, !1)
                } else a && a({success: !1, id: e})
            }, getObjectById: function (e) {
                return G.w3 ? r(e) : void 0
            }, embedSWF: function (e, n, a, i, o, r, c, u, h, p) {
                var g = {success: !1, id: n};
                G.w3 && !(G.wk && G.wk < 312) && e && n && a && i && o ? (b(n, !1), t(function () {
                    a += "", i += "";
                    var t = {};
                    if (h && typeof h === E)for (var f in h)t[f] = h[f];
                    t.data = e, t.width = a, t.height = i;
                    var v = {};
                    if (u && typeof u === E)for (var m in u)v[m] = u[m];
                    if (c && typeof c === E)for (var w in c)typeof v.flashvars != D ? v.flashvars += "&" + w + "=" + c[w] : v.flashvars = w + "=" + c[w];
                    if (y(o)) {
                        var I = d(t, v, n);
                        t.id == n && b(n, !0), g.success = !0, g.ref = I
                    } else {
                        if (r && s())return t.data = r, void l(t, v, n, p);
                        b(n, !0)
                    }
                    p && p(g)
                })) : p && p(g)
            }, switchOffAutoHideShow: function () {
                z = !1
            }, ua: G, getFlashPlayerVersion: function () {
                return {major: G.pv[0], minor: G.pv[1], release: G.pv[2]}
            }, hasFlashPlayerVersion: y, createSWF: function (e, t, n) {
                return G.w3 ? d(e, t, n) : void 0
            }, showExpressInstall: function (e, t, n, a) {
                G.w3 && s() && l(e, t, n, a)
            }, removeSWF: function (e) {
                G.w3 && p(e)
            }, createCSS: function (e, t, n, a) {
                G.w3 && w(e, t, n, a)
            }, addDomLoadEvent: t, addLoadEvent: n, getQueryParamValue: function (e) {
                var t = k.location.search || k.location.hash;
                if (t) {
                    if (/\?/.test(t) && (t = t.split("?")[1]), null == e)return I(t);
                    for (var n = t.split("&"), a = 0; a < n.length; a++)if (n[a].substring(0, n[a].indexOf("=")) == e)return I(n[a].substring(n[a].indexOf("=") + 1))
                }
                return ""
            }, expressInstallCallback: function () {
                if (H) {
                    var e = f(N);
                    e && _ && (e.parentNode.replaceChild(_, e), A && (b(A, !0), G.ie && G.win && (_.style.display = "block")), S && S(W)), H = !1
                }
            }
        }
    }(), eventSplitter = /\s+/, Events = AV.Events = {
        on: function (e, t, n) {
            var a, i, o;
            if (!t)return this;
            for (e = e.split(eventSplitter), a = this._callbacks || (this._callbacks = {}); i = e.shift();)o = a[i] || (a[i] = []), o.push(t, n);
            return this
        }, off: function (e, t, n) {
            var a, i, o, r;
            if (!(i = this._callbacks))return this;
            if (!(e || t || n))return delete this._callbacks, this;
            for (e = e ? e.split(eventSplitter) : _.keys(i); a = e.shift();)if ((o = i[a]) && (t || n))for (r = o.length - 2; r >= 0; r -= 2)t && o[r] !== t || n && o[r + 1] !== n || o.splice(r, 2); else delete i[a];
            return this
        }, trigger: function (e) {
            var t, n, a, i, o, r, s, l;
            if (!(n = this._callbacks))return this;
            for (l = [], e = e.split(eventSplitter), i = 1, o = arguments.length; o > i; i++)l[i - 1] = arguments[i];
            for (; t = e.shift();) {
                if ((s = n.all) && (s = s.slice()), (a = n[t]) && (a = a.slice()), a)for (i = 0, o = a.length; o > i; i += 2)a[i].apply(a[i + 1] || this, l);
                if (s)for (r = [t].concat(l), i = 0, o = s.length; o > i; i += 2)s[i].apply(s[i + 1] || this, r)
            }
            return this
        }
    };
    "undefined" == typeof AV && (AV = {}), AV.JSON = {}, function () {
        "use strict";
        function f(e) {
            return 10 > e ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, a, i, o, r, s = gap, l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case"string":
                    return quote(l);
                case"number":
                    return isFinite(l) ? String(l) : "null";
                case"boolean":
                case"null":
                    return String(l);
                case"object":
                    if (!l)return "null";
                    if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (o = l.length, n = 0; o > n; n += 1)r[n] = str(n, l) || "null";
                        return i = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + s + "]" : "[" + r.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)for (o = rep.length, n = 0; o > n; n += 1)a = rep[n], "string" == typeof a && (i = str(a, l), i && r.push(quote(a) + (gap ? ": " : ":") + i)); else for (a in l)Object.hasOwnProperty.call(l, a) && (i = str(a, l), i && r.push(quote(a) + (gap ? ": " : ":") + i));
                    return i = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + s + "}" : "{" + r.join(",") + "}", gap = s, i
            }
        }

        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        "function" != typeof AV.JSON.stringify && (AV.JSON.stringify = function (e, t, n) {
            var a;
            if (gap = "", indent = "", "number" == typeof n)for (a = 0; n > a; a += 1)indent += " "; else"string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))throw new Error("AV.JSON.stringify");
            return str("", {"": e})
        }), "function" != typeof AV.JSON.parse && (AV.JSON.parse = function (text, reviver) {
            function walk(e, t) {
                var n, a, i = e[t];
                if (i && "object" == typeof i)for (n in i)Object.hasOwnProperty.call(i, n) && (a = walk(i, n), void 0 !== a ? i[n] = a : delete i[n]);
                return reviver.call(e, t, i)
            }

            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
            throw new SyntaxError("AV.JSON.parse")
        })
    }(), "undefined" == typeof AV && (AV = {}), AV.validLanguages = {
        en: !0,
        android: !0,
        bg: !0,
        ca: !0,
        zh_hans: !0,
        zh_hant: !0,
        cs: !0,
        da: !0,
        nl: !0,
        fi: !0,
        fr: !0,
        de: !0,
        he: !0,
        id: !0,
        it: !0,
        ja: !0,
        ko: !0,
        lv: !0,
        lt: !0,
        pl: !0,
        pt: !0,
        pt_br: !0,
        ru: !0,
        es: !0,
        sv: !0,
        tr: !0,
        vi: !0,
        el: !0,
        hu: !0,
        no: !0,
        sk: !0,
        uk: !0
    }, AV.util = {
        getX: function (e) {
            for (var t = 0; null != e;)t += e.offsetLeft, e = e.offsetParent;
            return t
        }, getY: function (e) {
            for (var t = 0; null != e;)t += e.offsetTop, e = e.offsetParent;
            return t
        }, getTouch: function (e) {
            var t;
            return e.originalEvent && (e = e.originalEvent), t = e.changedTouches && 1 == e.changedTouches.length ? e.changedTouches[0] : e.touches && 1 == e.touches.length ? e.touches[0] : !1
        }, getScaledDims: function (e, t, n, a) {
            a = a || n;
            var i = e, o = t, r = e / t;
            return (e > n || t > a) && (e - n > r * (t - a) ? (i = n, o = n * t / e + .5 | 0) : (i = a * r + .5 | 0, o = a)), {
                width: i,
                height: o
            }
        }, nextFrame: function (e) {
            setTimeout(e, 1)
        }, getDomain: function (e, t) {
            var n, a, i, o, r, s, l;
            return n = "http://" == e.substr(0, 7) ? 7 : "https://" == e.substr(0, 8) ? 8 : "ftp://" == e.substr(0, 6) ? 6 : 0, i = e.indexOf("/", n), -1 == i && (i = e.length), t ? a = n : (s = e, l = e.lastIndexOf(":"), s = l > n ? e.substring(n, l) : e.substring(n, i), s.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/) ? a = n : (o = e.lastIndexOf(".", i), r = e.lastIndexOf(".", o - 1), a = -1 == r ? n : r + 1)), e.substring(a, i)
        }, extend: function () {
            var e, t, n, a, i, o, r = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[1] || {}, s = 2), "object" == typeof r || jQuery.isFunction(r) || (r = {}), l === s && (r = this, --s); l > s; s++)if (null != (e = arguments[s]))for (t in e)n = r[t], a = e[t], r !== a && (c && a && (jQuery.isPlainObject(a) || (i = jQuery.isArray(a))) ? (i ? (i = !1, o = n && jQuery.isArray(n) ? n : []) : o = n && jQuery.isPlainObject(n) ? n : {}, r[t] = jQuery.extend(c, o, a)) : void 0 !== a && (r[t] = a));
            return r
        }, findItemByKeyValueFromArray: function (e, t, n) {
            {
                var a, i;
                n.length
            }
            for (a = 0; a < n.length; a++)if (n[a] && n[a][e] && n[a][e] === t) {
                i = n[a];
                break
            }
            return i
        }, loadFile: function () {
            var e, t, n, a, i = 0, o = function (e, t) {
                function n(e) {
                    (4 == this.readyState || "complete" == this.readyState || "loaded" == this.readyState) && t(e)
                }

                t && ("Microsoft Internet Explorer" == navigator.appName ? e.onreadystatechange = n : e.onload = t)
            };
            return e = o, function (o, r, s) {
                var l;
                return "js" == r ? (l = document.createElement("script"), l.setAttribute("type", "text/javascript"), e(l, s), l.setAttribute("src", o)) : "css" == r ? document.createStyleSheet ? document.createStyleSheet(o, i++) : (l = document.createElement("link"), l.setAttribute("rel", "stylesheet"), l.setAttribute("type", "text/css"), l.setAttribute("href", o)) : "img" == r && (l = document.createElement("img"), e(l, s), l.setAttribute("src", o)), l && (t = t || document.getElementsByTagName("head")[0], "js" == r ? t.appendChild(l) : "css" == r && (n = n || document.createDocumentFragment(), n.appendChild(l), t.insertBefore(l, a))), l
            }
        }(), getImageElem: function (e) {
            return "string" == typeof e ? document.getElementById(e) : e.length ? e[0] : e
        }, getImageId: function (e) {
            return "string" == typeof e ? e : e.id
        }, imgOnLoad: function (e, t) {
            var n = avpw$(e);
            n.load(t), (1 == n[0].complete || 4 == n[0].readyState || "complete" == n[0].readyState || "loaded" == n[0].readyState) && n.trigger("load")
        }, color_is_white: function (e) {
            return e = e.toLowerCase(), "#fff" == e || "#ffffff" == e || "white" == e || "rgb(255,255,255)" == e || "rgb(255, 255, 255)" == e
        }, color_is_light: function (e) {
            var t, n, a, i, o;
            return t = n = a = 0, o = AV.util.color_to_array(e), t = o[0], n = o[1], a = o[2], i = .2 * t + .7 * n + .1 * a, i > 127.5
        }, color_expand: function (e) {
            var t, n, a;
            return 4 == e.length && (t = e.charAt(1), n = e.charAt(2), a = e.charAt(3), e = "#" + t + t + n + n + a + a), e
        }, color_to_array: function (e) {
            var t, n, a;
            return "#" == e.charAt(0) ? (e = AV.util.color_expand(e), t = parseInt(e.substr(1, 2), 16), n = parseInt(e.substr(3, 2), 16), a = parseInt(e.substr(5, 2), 16)) : "r" == e.charAt(0).toLowerCase() && (e = AV.util.rgb_to_color(e), t = parseInt(e.substr(1, 2), 16), n = parseInt(e.substr(3, 2), 16), a = parseInt(e.substr(5, 2), 16)), e = [t, n, a, 1]
        }, array_to_color: function (e) {
            var t = AV.util.array_to_rgb(e);
            return t = AV.util.rgb_to_color(t)
        }, array_to_rgb: function (e) {
            var t = "rgb(0,0,0)";
            return e.join && (e.length > 3 && (e = e.slice(0, 3)), t = "rgb(" + e.join(",") + ")"), t
        }, color_to_rgb: function (e) {
            return e = AV.util.color_to_array(e), e = AV.util.array_to_rgb(e)
        }, rgb_to_color: function (e) {
            var t, n, a, i = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/, o = e.match(i);
            return o ? (t = parseInt(o[1]).toString(16), 1 == t.length && (t = "0" + t), n = parseInt(o[2]).toString(16), 1 == n.length && (n = "0" + n), a = parseInt(o[3]).toString(16), 1 == a.length && (a = "0" + a), "#" + t + n + a) : e
        }, color_to_int: function (e) {
            return e = AV.util.color_expand(e), e = AV.util.rgb_to_color(e), parseInt(e.substr(1), 16)
        }, getSafeAssetBaseURL: function (e) {
            return e = e.replace("http://cd-test.aviary.com:1338", AV.build.cdsContentURL), "https:" == window.location.protocol && (e = AV.build.contentShouldUseStaging ? e.replace("http://testassets.aviary.com.s3.amazonaws.com", "https://s3.amazonaws.com/testassets.aviary.com") : e.replace("http://assets.aviary.com", "https://d2q6aqs27yssdp.cloudfront.net")), e
        }, loadImagesSync: function (e, t, n) {
            var a = 0, i = e.length, o = function () {
                t && a == e.length && AV.util.nextFrame(t)
            }, r = avpw$.support.cors && !("Microsoft Internet Explorer" == navigator.appName) || n;
            -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && (r = !1);
            for (var s = 0; i > s; s++)!function (t) {
                var n = e[t].img, i = e[t].src;
                n.onload = function () {
                    e[t].mappingObject && (e[t].mappingObject.w = n.width, e[t].mappingObject.h = n.height), a++, o()
                }, r ? (n.crossOrigin = "Anonymous", n.src = i) : avpw$.ajax({
                    type: "GET",
                    dataType: "json",
                    url: AV.build.jsonp_imgserver + "?callback=?",
                    data: {url: escape(i)},
                    success: function (e) {
                        n.src = e.data
                    }
                })
            }(s)
        }, getApiVersion: function (e) {
            return e && e.apiVersion ? parseInt(e.apiVersion, 10) : 1
        }, getUserFriendlyToolName: function (e) {
            var t = {
                overlay: "Stickers",
                drawing: "Draw",
                textwithfont: "Text",
                colorsplash: "Splash",
                tiltshift: "Tilt Shift",
                forcecrop: "Crop"
            }, n = "";
            return e && (n = t[e] || e.substr(0, 1).toUpperCase() + e.substr(1)), n
        }, keyDownHandlerNumber: function (e, t) {
            9 == e.keyCode || 27 == e.keyCode || 65 == e.keyCode && (e.ctrlKey === !0 || e.metaKey === !0) || e.keyCode >= 35 && e.keyCode <= 39 || ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && 46 !== e.keyCode && 8 !== e.keyCode ? e.preventDefault() : t && t.apply(this, [e]))
        }, addFontToPage: function (e, t) {
            e || t && t();
            var n = e.value;
            if (e.system)t && t(e); else if (AV.WebFont) {
                var a = {
                    loading: function () {
                        AV.controlsWidgetInstance && AV.controlsWidgetInstance.showWaitThrobber(!0)
                    }, active: function () {
                        AV.controlsWidgetInstance && AV.controlsWidgetInstance.showWaitThrobber(!1), t && t(e)
                    }, inactive: function () {
                        AV.controlsWidgetInstance && AV.controlsWidgetInstance.showWaitThrobber(!1), AV.errorNotify("UNSUPPORTED_FONT", [n]), t && t()
                    }
                };
                e.custom ? (a.custom = {families: [n], urls: [e.url]}, a.active = function () {
                    AV.controlsWidgetInstance && AV.controlsWidgetInstance.showWaitThrobber(!1), t && AV.util.nextFrame(function () {
                        t(e)
                    }, 500)
                }) : a.google = {families: [n]}, AV.WebFont.load(a)
            }
        }, getBrowserVersion: function () {
            var e, t = navigator.userAgent, n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(n[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE " + (e[1] || "")) : "Chrome" === n[1] && (e = t.match(/\bOPR\/(\d+)/), null != e) ? "Opera " + e[1] : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), n[1])
        }
    }, "undefined" == typeof AV && (AV = {}), AV.FlashAPI = function () {
        var e = "avpw_canvas_swf", t = null, n = function () {
            var e = function (e, t, n) {
                var a = document.createElement("param");
                a.setAttribute("name", t), a.setAttribute("value", n), e.appendChild(a)
            }, t = function (t, n, a) {
                var i = document.getElementById(a);
                if (i)if ("undefined" == typeof t.id && (t.id = a), AV.msie) {
                    var o = "";
                    for (var r in t)t[r] != Object.prototype[r] && ("data" == r.toLowerCase() ? n.movie = t[r] : "styleclass" == r.toLowerCase() ? o += ' class="' + t[r] + '"' : "classid" != r.toLowerCase() && (o += " " + r + '="' + t[r] + '"'));
                    var s = "";
                    for (var l in n)n[l] != Object.prototype[l] && (s += '<param name="' + l + '" value="' + n[l] + '" />');
                    i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + s + "</object>", "undefined" == typeof objIdArr && (objIdArr = []), objIdArr[objIdArr.length] = t.id
                } else {
                    var c = document.createElement("object");
                    c.setAttribute("type", "application/x-shockwave-flash");
                    for (var u in t)t[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? c.setAttribute("class", t[u]) : "classid" != u.toLowerCase() && c.setAttribute(u, t[u]));
                    for (var d in n)n[d] != Object.prototype[d] && "movie" != d.toLowerCase() && e(c, d, n[d]);
                    i.parentNode.replaceChild(c, i)
                }
            }, n = function (e, n, a, i, o, r, s, l, c) {
                a += "", i += "";
                var u = {};
                if (c && "object" == typeof c)for (var d in c)u[d] = c[d];
                u.data = e, u.width = a, u.height = i;
                var h = {};
                if (l && "object" == typeof l)for (var p in l)h[p] = l[p];
                if (s && "object" == typeof s)for (var g in s)"undefined" != typeof h.flashvars ? h.flashvars += "&" + g + "=" + s[g] : h.flashvars = g + "=" + s[g];
                t(u, h, n)
            };
            return function (e, t, a, i, o) {
                o = o || {};
                var r = {};
                r.quality = "high", r.bgcolor = "#808080", r.allowscriptaccess = "always", r.allowfullscreen = "true";
                var s = {};
                s.id = e, s.name = e, AV.msie && AV.msie < 9 && (s.align = "center"), n(t, e + "_replace", a || "100%", i || "100%", "10.0.32", "", o, r, s)
            }
        }(), a = function () {
        };
        a.prototype = function () {
            return {
                getPlugins: function () {
                    return []
                }, createCanvas: function () {
                    this.initsize ? n(e, AV.build.feather_baseURL + "canvas.swf", this.initsize.width, this.initsize.height) : n(e, AV.build.feather_baseURL + "canvas.swf")
                }, _onComponentLoaded: function (t) {
                    switch (t) {
                        case"canvas":
                            var n = document.getElementById(e);
                            AV.FlashAPI._onCanvasLoaded(n);
                            break;
                        case"controls":
                    }
                }, _onComponentReady: function (e) {
                    var t = AV.paintWidgetInstance;
                    "canvas" === e && t.canvasReadyCallback && t.canvasReadyCallback.resolve()
                }
            }
        }();
        var i = function () {
            var e = [], t = function () {
                for (var t = 0; 256 > t; t++)e[t] = String.fromCharCode(t);
                e[0] = String.fromCharCode(1) + String.fromCharCode(1), e[1] = String.fromCharCode(1) + String.fromCharCode(2)
            }, n = function (t) {
                for (var n = "", a = 0; a < t.length; a += 4)n += e[t[a + 3]], n += e[t[a]], n += e[t[a + 1]], n += e[t[a + 2]];
                return n
            }, a = function (e) {
                for (var t, n = [], a = 0, i = 0, o = [0, 0, 1]; i < e.length;)n[a++] = 1 != (t = e.charCodeAt(i++)) ? t : o[e.charCodeAt(i++)];
                return n
            }, i = {};
            return i.init = t, i.shutdown = function () {
                e = []
            }, i.decode = a, i.encode = n, i
        }();
        return function () {
            var e = !1, n = !1;
            return {
                mapToFlashToolName: function (e) {
                    switch (e) {
                        case"rotate":
                            return "rotate90"
                    }
                    return e
                }, mapFromFlashToolName: function (e) {
                    switch (e) {
                        case"rotate90":
                            return "rotate"
                    }
                    return e
                }, customBridge: function (e) {
                    var t = function () {
                    };
                    t.prototype = new a, t.prototype.constructor = a;
                    for (var n in e)t.prototype[n] = e[n];
                    return t
                }, activate: function (e) {
                    this.bridge = e || new a, this.goldenEggCallback = null
                }, setHiresSize: function (e, t) {
                    this.canvas && this.canvas.setHiresSize(e, t)
                }, hiresSizeChanged: function (e, t) {
                    AV.paintWidgetInstance && AV.paintWidgetInstance.actions && AV.paintWidgetInstance.actions.setDims(e, t)
                }, startEditing: function (e) {
                    this.canvas = null, this.active_target = e, this.bridge.createCanvas()
                }, restartEditing: function (e) {
                    this.active_target = e, this._setupEditing()
                }, close: function () {
                }, runGoldenEgg: function (e, t, n, a) {
                    this.goldenEggCallback = a, this.canvas.renderGoldenEgg(e, t, n)
                }, doCrop: function () {
                    this.canvas.executeCrop()
                }, activatePlugin: function (e) {
                    this.canvas.activatePlugin(e)
                }, deactivatePlugin: function (e) {
                    this.canvas.deactivatePlugin(e)
                }, changeProperty: function (e, t) {
                    this.canvas.changeProperty(e, t)
                }, applyPreviewFromPlugin: function (e) {
                    this.canvas.applyPreviewFromPlugin(e)
                }, commitChangesFromPlugin: function (e) {
                    this.canvas.commitChangesFromPlugin(e)
                }, discardChangesFromPlugin: function (e) {
                    this.canvas.discardChangesFromPlugin(e)
                }, resizeCanvas: function (e, t) {
                    var n = this.canvas;
                    n.width = e + "px", n.height = t + "px", AV.paintWidgetInstance && AV.paintWidgetInstance.setDimensions(e, t)
                }, hideCanvas: function () {
                    this.canvas && (this.canvas.style.visibility = "hidden")
                }, showCanvas: function () {
                    this.canvas && (this.canvas.style.visibility = "visible")
                }, executePlugin: function () {
                    this.canvas.executePlugin()
                }, renderPreview: function (e, t) {
                    this.canvas.renderPreview(e, t)
                }, getDynamicPropertyDefaultValue: function (e) {
                    return this.canvas.getDynamicPropertyDefaultValue(e)
                }, syncProperty: function () {
                }, syncPreview: function () {
                }, setCanvasDataArray: function (e, t, n) {
                    AV.canvasDataReceiver && AV.canvasDataReceiver.apply(this, [e, t, n])
                }, setThumb: function () {
                }, getHistory: function () {
                    return this.canvas.getHistory()
                }, getHiResStickerUrl: function (e) {
                    return AV.paintWidgetInstance && AV.paintWidgetInstance.overlayRegistry ? AV.paintWidgetInstance.overlayRegistry.getHiRes(e) : null
                }, getImageData: function (e, n) {
                    n && "function" == typeof n && (t = n), this.canvas.commit({})
                }, getMaxSize: function () {
                    var e = AV.launchData.maxEditSize || AV.launchData.maxSize;
                    return e
                }, getMaxBitmapSize: function () {
                    return AV.launchData.maxSize
                }, _cropSelectionStarted: function () {
                }, _onPreviewRendered: function () {
                }, _onPluginLoaded: function (e) {
                    var t = AV.paintWidgetInstance;
                    t.moduleLoadedCallback && t.moduleLoadedCallback[e] && t.moduleLoadedCallback[e].resolve()
                }, _onImageLoaded: function (e, t) {
                    AV.paintWidgetLauncher_Flash_stage2 && AV.paintWidgetLauncher_Flash_stage2(e, t)
                }, _onGoldenEggComplete: function () {
                    this.goldenEggCallback && this.goldenEggCallback()
                }, _onCanvasLoaded: function (e) {
                    this.canvas = e, this._setupEditing(AV.launchData.url || null)
                }, _onGetImageDataComplete: function (e) {
                    t && (t.apply(this, [e]), t = null)
                }, _setupEditing: function (e) {
                    var t = this.bridge.getPlugins();
                    e = e || this.active_target.src, this.canvas.setup(e, AV.build.proxyServer, t)
                }, _canUndo: function () {
                    return e
                }, _onUndo: function () {
                    this.canvas.undo()
                }, _canRedo: function () {
                    return n
                }, _onRedo: function () {
                    this.canvas.redo()
                }, _onHistoryChange: function (t, a) {
                    e = t, n = a, AV.controlsWidgetInstance && AV.controlsWidgetInstance.layoutNotify(AV.launchData.openType, "updateUndoRedo", [t, a])
                }, setCheckpoint: function (e) {
                    this.canvas.setCheckpoint(e)
                }, isACheckpoint: function (e) {
                    return this.canvas.isACheckpoint(e)
                }, undoToCheckpoint: function () {
                    this.canvas.undoToCheckpoint()
                }, redoToCheckpoint: function () {
                    return this.canvas.redoToCheckpoint()
                }, truncateActionList: function () {
                    this.canvas.truncateActionList()
                }, _onError: function (e, t) {
                    "BAD_IMAGE" === e && (AV.paintWidgetCloser(!0), AV.launchData.url && (e = "BAD_URL")), AV.errorNotify(e, t)
                }, init: function (e) {
                    function t() {
                        if (!e)return new a;
                        if (e.plugins) {
                            for (var t = [], n = e.plugins, i = 0; i < n.length; ++i) {
                                var o = AV.FlashAPI.mapToFlashToolName(n[i]), r = AV.toolDefaults[n[i]];
                                r && r.files && t.push({id: o, presets: r.presetsFlash, files: r.files})
                            }
                            t.length > 0 && (e.getPlugins = function () {
                                return t
                            }), delete e.plugins
                        }
                        var s = function () {
                        };
                        s.prototype = new a, s.prototype.constructor = a;
                        for (var l in e)s.prototype[l] = e[l];
                        return new s
                    }

                    AV.FlashAPI.activate(t()), i.init()
                }, pibeca: i
            }
        }()
    }(), function (e) {
        e.AV = e.AV || {};
        var t = e.AV;
        return t.ImageSizeTracker = function () {
            var e = this;
            e.setImageScaledIndicator = function () {
                t.controlsWidgetInstance.layoutNotify(t.launchData.openType, "updateImageScaledIndicator")
            }, e.setOrigSize = function (n, a, i) {
                var o, r;
                if (n.hiresWidth && n.hiresHeight)o = parseInt(n.hiresWidth, 10), r = parseInt(n.hiresHeight, 10); else if (n.hiresUrl)o = a.width, r = a.height; else {
                    if (!n.displayImageSize)return null;
                    o = i.width, r = i.height
                }
                return t.paintWidgetInstance.actions.setOrigSize(o, r), e.setImageScaledIndicator(), {
                    width: o,
                    height: r
                }
            }, e.isDisplayingImageSize = function (e) {
                return e.hiresWidth || e.hiresHeight || e.displayImageSize
            }, e.isUsingHiResDimensions = function (e) {
                return e.hiresWidth || e.hiresHeight || e.displayImageSize && e.hiresUrl
            }
        }, e
    }(this, "undefined" != typeof window ? window : {}, "undefined" != typeof document ? document : {}), function (e, t, n) {
        e.AV = e.AV || {};
        var a = e.AV, i = a.Events;
        return a.ToolManager = function (e) {
            var o = null, r = function (t) {
                var n, i, o = e.activeTools, r = !1;
                if (o)for (i = o.length, n = 0; i > n; n++)if (o[n] === t) {
                    r = !0;
                    break
                }
                return "forcecrop" === t && a.launchData.forceCropPreset ? !0 : (r || a.errorNotify("UNSUPPORTED_TOOL", [t]), r)
            }, s = function (t, n, a) {
                return e.objectNotify("tool", t, n, a)
            }, l = function (e) {
                null != e && (avpw$(".avpw_controlpanel").each(function () {
                    avpw$(this).hide()
                }), avpw$("#avpw_controlpanel_" + e).show())
            }, c = function () {
                var n, r = function (r) {
                    s(o, "panelWillClose"), s(r, "panelWillOpen"), i.trigger("canvas:activate", e.panelMode2WidgetMode(r)), l(r), s(r, "resetUI"), t.setTimeout(function (e) {
                        return function () {
                            s(e, "panelDidClose"), o = r, s(r, "panelDidOpen"), n = !1
                        }
                    }(o), 200), o = r, e.layoutNotify(a.launchData.openType, "disableZoomMode")
                };
                return function (e) {
                    n || (n = !0, r(e))
                }
            }(), u = function (t) {
                if (!e.paintWidget || !e.paintWidget.busy) {
                    if (e.layoutNotify(a.launchData.openType, "showView", ["editpanel"]), c(t), a.controlsWidgetInstance.onEggWaitThrobber.stop(), "mobile" == a.launchData.openType) {
                        var i, o = n.getElementById("avpw_main_" + t);
                        o && (i = o.getAttribute("data-header"), i && (n.getElementById("avpw_control_toolname").innerHTML = i))
                    }
                    a.usageTracker.addUsage(t)
                }
            }, d = function () {
                i.on("tool:open", g), i.on("tool:close", p), i.on("tool:init", f), i.on("tool:shutdown", y), i.on("tool:commit", v), i.on("tool:cancel", m), i.on("tool:undo", A), i.on("tool:redo", S)
            }, h = function () {
                i.off("tool:open", g), i.off("tool:close", p), i.off("tool:init", f), i.off("tool:shutdown", y), i.off("tool:commit", v), i.off("tool:cancel", m), i.off("tool:undo", A), i.off("tool:redo", S)
            }, p = function () {
                e.layoutNotify(a.launchData.openType, "showView", ["main"]), c(null)
            }, g = function (t, n) {
                t = a.publicName2PanelMode(t), (r(t) || a.launchData.forceCropPreset) && e.paintWidget && !e.paintWidget.moduleLoaded(t, u) && n && (e.onEggWaitThrobber.stop(), e.onEggWaitThrobber.spin(avpw$(n).children(".avpw_icon_waiter")[0])), i.trigger("usage:tool", t, "opened"), i.trigger("usage:firstclick", t)
            }, f = function (t) {
                s(t, "init", [e])
            }, v = function () {
                var e, t = o;
                t && (e = s(o, "commit"), e !== !1 && (i.trigger("usage:tool", t, "applied", e !== !0 ? e : ""), i.trigger("tool:commitDone")))
            }, m = function () {
                s(o, "cancel"), i.trigger("usage:tool", o, "canceled"), a.featherGLEnabled && (e.paintWidget.moaGL.createEffect(), e.paintWidget.moaGL.renderIdentity(), e.paintWidget.moaGL.finalizeEffect(), e.paintWidget.moaGL.commit())
            }, y = function (e) {
                s(e, "shutdown")
            }, w = function () {
                return e.paintWidget.busy ? !1 : s(o, "onUndo") === !1 ? !1 : (e.paintWidget.actions.undo(), s(o, "onUndoComplete"), !1)
            }, b = function () {
                return e.paintWidget.busy ? !1 : s(o, "onUndo", [{global: !0}]) === !1 ? !1 : (e.paintWidget.actions.undoToCheckpoint(), s(o, "onUndoComplete", [{global: !0}]), !1)
            }, I = function () {
                return e.paintWidget.busy ? !1 : s(o, "onRedo") === !1 ? !1 : (e.paintWidget.actions.redo(), s(o, "onRedoComplete"), !1)
            }, _ = function () {
                if (e.paintWidget.busy)return !1;
                if (s(o, "onRedo", [{global: !0}]) === !1)return !1;
                var t = e.paintWidget.actions.redoToCheckpoint();
                return t && s(o, "onRedoComplete", [{global: !0}]), t
            }, A = function () {
                i.trigger("usage:tool", "undo", "applied", o || ""), e.paintWidget.actions.isACheckpoint() ? b() : w()
            }, S = function () {
                i.trigger("usage:tool", "redo", "applied", o || ""), _() || I()
            }, W = this;
            return W.init = d, W.shutdown = h, W.notify = s, W.getActiveTool = function () {
                return o
            }, d(), W
        }, e
    }(this, "undefined" != typeof window ? window : {}, "undefined" != typeof document ? document : {}), AV.AssetManager = function (e, t) {
        "use strict";
        var n, a = {
            EFFECT: "effects",
            STICKER: "stickers",
            IMAGEBORDER: "frames",
            PERMISSION: "permissions",
            FONTPACK: "fontpack"
        }, i = {}, o = function (e) {
            return n[a[e]] || []
        }, r = function (e, t) {
            n ? t && t.apply(this, [o(e), a[e]]) : (i.getPartnerAssets || (i.getPartnerAssets = [], u.authenticate()), i.getPartnerAssets.push(function (i) {
                i && i.status && "Ok" === i.status ? n = i : (AV.errorNotify("ERROR_AUTHENTICATING"), s()), AV.util.nextFrame(function () {
                    n && t && t.apply(this, [o(e), a[e]])
                })
            }))
        }, s = function (e, t) {
            return n = [{
                needsPurchase: !1,
                assetId: "default_effects",
                assetType: "effect",
                displayName: "Default",
                resourceUrl: "js/proclist_default_effects.js"
            }, {
                needsPurchase: !1,
                assetId: "original_effects",
                assetType: "effect",
                displayName: "Original",
                resourceUrl: "js/proclist_original_effects.js"
            }, {
                needsPurchase: !1,
                assetId: "original_stickers",
                assetType: "sticker",
                displayName: "Original",
                resourceUrl: "js/stickers_original_stickers.js"
            }, {
                needsPurchase: !1,
                assetId: "borders",
                assetType: "imageborder",
                displayName: "Default Image Borders",
                resourceUrl: "js/borders_original.js"
            }], t && AV.util.nextFrame(function () {
                t.apply(this, [o(e)])
            }), !0
        }, l = function (e) {
            var t, n, a;
            if (e.messageName && (a = i[e.messageName])) {
                if ("function" == typeof a)a.apply(this, [e.data]); else for (n = a.length, t = 0; n > t; t++)a[t].apply(this, [e.data]);
                a = null
            }
        }, c = e ? r : s, u = this;
        return u.getAssets = c, u.getById = function (e) {
            for (var t = 0; t < n.length; t++)if (n[t].assetId === e)return n[t]
        }, u.getManifestURL = function () {
            var e, t = AV.build.contentShouldUseStaging;
            if (AV.launchData.apiKey && AV.launchData.timestamp && AV.launchData.signature && AV.launchData.salt && AV.launchData.encryptionMethod) {
                e = AV.build.gatewayAssetURL;
                var n = ["&timestamp=", AV.launchData.timestamp, "&signature=", AV.launchData.signature, "&salt=", AV.launchData.salt, "&encryptionMethod=", AV.launchData.encryptionMethod].join("")
            } else e = AV.build.manifestURL;
            return [e, "/hires/assets", "?platform=web", "&apiKey=", AV.launchData.apiKey || "", "&resolution=", window.devicePixelRatio > 1 ? "high" : "low", "&sdkVersion=4.0.0", t ? "&staging=2" : "", n ? n : ""].join("")
        }, u.getContentURLByVersionKey = function (e) {
            var t = AV.build.contentShouldUseStaging;
            return AV.build.cdsContentURL + "/v1/content?versionKey=" + e + (t ? "&staging=2" : "")
        }, u.authenticate = function () {
            var e = function (e) {
                var t = {messageName: "getPartnerAssets", data: e};
                l(t)
            };
            return function () {
                return AV.controlsWidgetInstance.serverMessaging.sendMessage({
                    id: "avpw_auth_form",
                    action: u.getManifestURL(),
                    method: "GET",
                    dataType: "json",
                    announcer: AV.build.asyncFeatherTargetAnnounce,
                    origin: AV.build.asyncImgrecvBase,
                    callback: e,
                    onError: function (e) {
                        AV.errorNotify(e.status && 403 == e.status ? "ERROR_AUTHENTICATING" : "ERROR_GET_ASSETS")
                    }
                })
            }
        }(), u.types = a, t && _buildFrame(), u
    }, AV.ServerMessaging = function () {
        var e = [], t = function (t, n) {
            var a, i, o = !0, r = e.shift();
            if (r && (n && r.origin && (o = n === AV.util.getDomain(r.origin)), r.id && (a = avpw$("#" + r.id), i = a.attr("target"), avpw$("#" + i).unbind("load"), avpw$("#" + r.id + "_target_holder").empty(), a.remove()), o && r.callback)) {
                if (r.dataType && "json" === r.dataType && "string" == typeof t)try {
                    t = AV.JSON.parse(t)
                } catch (s) {
                }
                r.callback.call(this, t)
            }
            e.length > 0 && u()
        }, n = function (e, t, n, a, i, o) {
            return avpw$.ajax({
                url: e, type: t, data: n, dataType: a, error: function (t) {
                    o ? o.call(this, t) : AV.errorNotify("ERROR_SERVER_MESSAGING", [e])
                }, success: i
            })
        }, a = function (e, t, n, a, i, o) {
            var r = new XDomainRequest;
            r.onload = function () {
                var e = r.responseText;
                window.setTimeout(function () {
                    i(AV.JSON.parse(e))
                }, 0)
            }, r.onerror = function (t) {
                o ? o.call(this, t) : AV.errorNotify("ERROR_SERVER_MESSAGING", [e]), AV.errorNotify("ERROR_SERVER_MESSAGING", [e])
            }, r.ontimeout = function () {
            }, r.onprogress = function () {
            }, r.open(t, e), n ? r.send(avpw$.param(n)) : r.send()
        }, i = function (e, t, n, a, i) {
            var o = avpw$("<form></form>").attr({
                id: e,
                action: t,
                target: n,
                method: a || "POST"
            }).css({display: "none"}), r = document.createDocumentFragment();
            for (var s in i)i.hasOwnProperty(s) && r.appendChild(avpw$("<input></input>").attr({
                name: s,
                value: i[s],
                type: "hidden"
            })[0]);
            return o.html(r), o.appendTo("#avpw_holder"), o
        }, o = function (e, t, n) {
            return n || (n = AV.build.feather_baseURL + "blank.html"), t || (t = e), ['<iframe width="1" height="1" ', 'style="position:absolute;left:-9999px;" ', 'id="' + e + '" name="' + t + '" src="' + n + '">', "</iframe>"].join("")
        }, r = function (e, t, n) {
            if (!e)return null;
            var a = e + "_target_holder", i = Math.floor(4294967295 * Math.random()).toString(16), r = "avpw_form_target_" + i, s = avpw$("#" + a);
            return s && s.length || (s = avpw$('<div id="' + a + '"></div>').css({
                position: "absolute",
                top: 0,
                left: 0
            }).appendTo("#avpw_holder")), s.html(o(r)), avpw$("#" + r).load(t ? function () {
                l(r, e, t)
            } : n), r
        }, s = function (e, t, n, a, o, s, l) {
            var c = r(e, s, l);
            t += "?responsecontenttypeheader=" + escape("text/html");
            var u = i(e, t, c, n, o);
            return u.submit(), u
        }, l = function (e, n, a) {
            var i, r = n + "_announcer";
            if (window.postMessage)window[r] ? window[r].postMessage("avpw_load:" + e, "*") : (i = avpw$(o(r, r, a)), i.load(function () {
                AV.util.nextFrame(function () {
                    window[r].postMessage("avpw_load:" + e, "*")
                })
            }), avpw$("#avpw_holder").append(i)); else {
                var s, l = function () {
                    avpw$(s).unbind().remove()
                }, c = n + "_observer", u = c, d = 0, h = function () {
                    var e;
                    try {
                        if ("about:blank" == s.contentWindow.location)return
                    } catch (n) {
                    }
                    2 === d && (e = s.contentWindow.name, e && (d = 3, e !== u && e.substr && "avpw:" == e.substr(0, 5) ? (e = e.substr(5), t(e)) : (AV.errorNotify("ERROR_SAVING", [AV.build.imgrecvServer]), t()), l())), 1 === d && (d = 2, s.contentWindow.location = ""), d || (d = 1)
                };
                s = avpw$(o(c, u, a + "#" + e))[0], avpw$(s).load(h), avpw$(s).appendTo("#avpw_holder")
            }
        }, c = function (e) {
            var n = e.data, a = AV.util.getDomain(e.origin);
            n.substr && "avpw:" == n.substr(0, 5) && (n = n.substr(5), t(n, a))
        }, u = function () {
            var t = e[0];
            t && s(t.id, t.action, t.method, t.origin, t.keyValues, t.announcer)
        }, d = function (t) {
            t.announcer ? (e.push(t), 1 === e.length && u()) : s(t.id, t.action, t.method, t.origin, t.keyValues, t.announcer, t.callback)
        }, h = function (e) {
            var t, i = e.transport || "xhr";
            "xhr" === i && avpw$.support.cors && (!AV.firefox || AV.firefox >= 4) ? (t = n(e.action, e.method, e.keyValues, e.dataType, e.callback, e.onError), t || d(e)) : "function" == typeof XDomainRequest ? a(e.action, e.method, e.keyValues, e.dataType, e.callback, e.onError) : d(e)
        }, p = function () {
            window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent && window.attachEvent("onmessage", c)
        }, g = this;
        return g.shutdown = function () {
            window.removeEventListener ? window.removeEventListener("message", c, !1) : window.detachEvent && window.detachEvent("onmessage", c), e = []
        }, g.sendMessage = h, p(), g
    }, function (e, t, n) {
        e.AV = e.AV || {};
        var a = e.AV, i = a.Events;
        return a.usageTracker = function () {
            var e, o = null, r = {}, s = 0, l = [], c = 0, u = -1, d = !1, h = {}, p = function () {
                a.controlsWidgetInstance && h.submit("close")
            }, g = function () {
                d || (!function (e, t, n, a, i, o, r) {
                    e.GoogleAnalyticsObject = i, e[i] = e[i] || function () {
                        (e[i].q = e[i].q || []).push(arguments)
                    }, e[i].l = 1 * new Date, o = t.createElement(n), r = t.getElementsByTagName(n)[0], o.async = 1, o.src = a, r.parentNode.insertBefore(o, r)
                }(t, n, "script", ("https:" == n.location.protocol ? "https://www" : "http://www") + ".google-analytics.com/analytics.js", "AV_ga"), AV_ga("create", a.build.googleTracker, "auto", {allowLinker: !0}), AV_ga("set", "dimension1", a.launchData.apiKey), AV_ga("set", "dimension2", a.build.version), AV_ga("set", "dimension3", this.getUUID()), AV_ga("set", "dimension4", a.launchData.language), AV_ga("set", "dimension5", a.launchData.apiVersion + ""), d = !0, AV_ga("send", "event", "editor", "isWebGLUsed", a.featherGLEnabled.toString()))
            }, f = function (e, t, n) {
                AV_ga("send", "event", "tool", e + ":" + t, n ? n + "" : "")
            }, v = function (e, t, n) {
                AV_ga("send", "event", "interaction", e + ":" + t, n ? n + "" : "")
            }, m = function (e) {
                h.submit("firstclick", e), i.off("usage:firstclick")
            };
            return h.setup = function () {
                avpw$(t).bind("unload", p), i.on("usage:submit", h.submit, h), i.on("usage:tool", f, h), i.on("usage:firstclick", m, h), i.on("usage:interact", v)
            }, h.shutdown = function () {
                avpw$(t).unbind("unload", p), i.off("usage:submit", h.submit), i.off("usage:tool", f), i.off("usage:firstclick", m), i.off("usage:interact", v)
            }, h.clear = function () {
                o = null, r = {}, s = 0, l = [], c = 0, u = -1
            }, h.getUUID = function () {
                return o ? o : o = Math.floor(4294967295 * Math.random()).toString(16) + Math.floor(4294967295 * Math.random()).toString(16)
            }, h.addUsage = function (e, t) {
                t || (t = 1), void 0 === r[e] ? r[e] = t : r[e] += t, s += t
            }, h.setPageCount = function (e) {
                var t;
                for (c = e, l = new Array(e), t = 0; e > t; t++)l[t] = 0
            }, h.addPageHit = function (t) {
                t !== e && l[t]++, e = t
            }, h.submit = function (e, n) {
                g.call(this), "launch" === e ? AV_ga("send", "pageview", (t.location || "").toString()) : AV_ga("send", "event", "submit", e, n)
            }, h
        }(), a.getActiveTools = function (e) {
            var t = a.featherUseFlash ? a.flashSupportedTools : a.featherGLEnabled ? a.glSupportedTools : a.defaultTools, n = e;
            n && "all" !== n && "All" !== n && "ALL" !== n && "" !== n || (n = t), "string" == typeof n && (n = e.split(","));
            var i, o, r = [], s = {};
            for (o = 0; o < t.length; o++)i = t[o], s[i] = !0;
            var l = !0;
            for (o = 0; o < n.length; o++)(!a.launchData.forceCropPreset || "resize" !== n[o] && "orientation" !== n[o] && "crop" !== n[o]) && (i = a.publicName2PanelMode(n[o]), i in s && (r.push(i), l = !1));
            return a.launchData.forceCropPreset && l && a.errorNotify("BAD_FORCECROP_TOOLS"), r
        }, a.paintWidgetGetPopupEmbedDiv = function (e) {
            var t = avpw$("#avpw_canvas_embed_popup");
            if (e) {
                var a, i, o, r = avpw$(e), s = ["top", "left", "bottom", "right", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-top", "border-right", "border-bottom", "border-left", "padding-top", "padding-right", "padding-bottom", "padding-left"], l = {position: "relative"};
                for (i = 0; i < s.length; i++)o = s[i], l[o] = r.css(o);
                a = avpw$(e).css("display"), ("" == a || "inline" == a) && (a = "inline-block"), l.display = a, 0 == t.length && (t = n.createElement("div"), t.id = "avpw_canvas_embed_popup"), avpw$(t).hide().css(l).insertBefore(e)
            }
            return t
        }, a.paintWidgetLauncher = function (e, t) {
            return a.paintWidgetInstance ? void 0 : (a.usageTracker.clear(), a.featherUseFlash ? a.paintWidgetLauncher_Flash(e, t) : a.paintWidgetLauncher_HTML(e, t))
        }, a.paintWidgetLauncher_Flash = function (e, o) {
            function r() {
                avpw$(l).unbind("load", r), a.msie && 7 == a.msie && (avpw$("#avpw_controls").css("visibility", "hidden"), avpw$("#avpw_controls").show()), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "placeControls_Flash", [a.util.getApiVersion(a.launchData) > 1 ? a.launchData.appendTo : void 0]), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls"), u = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getScaledImageDims_Flash", [l]), d = u.width, h = u.height, p = d > h ? d : h, a.launchData.maxEditSize = p, a.paintWidgetInstance = new a.PaintWidget(d, h, new a.Actions, new a.ModeManager, new a.FilterManager, new a.OverlayRegistry, new a.ImageBorderManager), a.paintWidgetInstance.setOrigSize(d, h);
                var n = a.template[a.launchData.layout].flashCanvasBox({id: "avpw_canvas_swf_replace"});
                avpw$(c).append(n), a.controlsWidgetInstance.initAllTools.call(a.controlsWidgetInstance);
                var s = {
                    initsize: u,
                    plugins: f,
                    action: {
                        origUrl_: o ? o : y.src,
                        sessionID_: a.usageTracker.getUUID(),
                        referrerUrl_: t.location.href,
                        url: a.build.imgrecvServer,
                        name: "file"
                    }
                };
                a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "hideOriginalImage", [y]), a.util.nextFrame(function () {
                    a.controlsWidgetInstance.setupScrollPanels()
                }), a.msie && 7 == a.msie && (avpw$("#avpw_controls").hide(), avpw$("#avpw_controls").css("visibility", "visible")), avpw$("#avpw_controls").fadeIn(m), a.launchData.noCloseButton && avpw$("#avpw_control_cancel_pane").css("display", "none");
                setTimeout(function () {
                    a.FlashAPI.init(s), a.FlashAPI.startEditing(e), a.controlsWidgetInstance.initWithPaintWidget(a.paintWidgetInstance), i.trigger("tool:close"), a.controlsWidgetInstance.loaderPhase = 1
                }, m)
            }

            function s() {
                a.util.imgOnLoad(l, r), avpw$(l).attr("src", o ? o : w)
            }

            var l, c, u, d, h, p, g, f, v, m = a.launchData.launchDelay, y = a.util.getImageElem(e), w = y.src;
            f = a.getActiveTools(a.launchData.tools), v = new a.AssetManager(a.launchData.isPremiumPartner, a.launchData.allowInAppPurchase), a.controlsWidgetInstance = new a.ControlsWidget(null, e, f, v, new a.ServerMessaging), a.controlsWidgetInstance.origURL = o ? o : avpw$(y).attr("src"), avpw$(".avpw_isa_previewcanvas").hide(), c = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement", [y]), avpw$(c).show(), g = "js/featherpaint_flash.js", l = n.createElement("img"), avpw$(l).css({
                display: "block",
                visibility: "hidden",
                position: "absolute"
            }).attr("src", o ? o : y.src), a.build.bundled ? s() : a.util.loadFile(a.build.feather_baseURL + g, "js", s)
        }, a.paintWidgetLauncher_Flash_stage2 = function (e, t) {
            a.controlsWidgetInstance.loaderPhase = 2, a.controlsWidgetInstance.imageSizeTracker.setOrigSize(a.launchData, {
                width: e,
                height: t
            }, {
                width: a.paintWidgetInstance.width,
                height: a.paintWidgetInstance.height
            }), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "launchStage2_Flash"), a.controlsWidgetInstance.showWaitThrobber(!1), avpw$(a.controlsWidgetInstance.onEggWaitThrobber).hide(), i.trigger("usage:submit", "launch"), a.fireLaunchComplete()
        }, a.paintWidgetLauncher_HTML = function (e, t) {
            var i, o, r, s, l, c, u = a.launchData.launchDelay, d = a.util.getImageElem(e);
            return l = a.getActiveTools(a.launchData.tools), a.isRelaunched && "undefined" != typeof d.avpw_prevURL && (t = d.avpw_prevURL), c = new a.AssetManager(a.launchData.isPremiumPartner, a.launchData.allowInAppPurchase), a.controlsWidgetInstance = new a.ControlsWidget(null, e, l, c, new a.ServerMessaging), a.launchData.image instanceof HTMLImageElement && !t && (t = e.src), t && 0 === t.indexOf("//") && (t = n.location.protocol + t), a.controlsWidgetInstance.origURL = t ? t : avpw$(d).attr("src"), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "placeControls", [a.util.getApiVersion(a.launchData) > 1 ? a.launchData.appendTo : void 0]), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls"), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "bindEvents"), avpw$("#avpw_controls").fadeIn(u), a.util.nextFrame(function () {
                "mobile" == a.launchData.openType && a.setPageWidth(avpw$("#avpw_controls").width()), a.controlsWidgetInstance.setupScrollPanels()
            }), a.launchData.noCloseButton && avpw$("#avpw_control_cancel_pane").css("display", "none"), d && "canvas" === d.nodeName.toLowerCase() ? void a.mockLauncher(d) : (r = a.featherGLEnabled ? "js/featherpaint_glass.js" : "js/featherpaint.js", o = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement", [d]), i = n.createElement("img"), i.id = "avpw_temp_loading_image", a.tempLoadingImageSrc = i.src, avpw$(i).load(function () {
                s = a.controlsWidgetInstance.getScaledDims(avpw$(d).width(), avpw$(d).height()), i.width = s.width, i.height = s.height, a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getScaledImageDims", [i]), avpw$(i).unbind(), i.style.display = "block", avpw$(o).append(i), a.controlsWidgetInstance.showWaitThrobber(!0), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "hideOriginalImage", [d]), avpw$(o).show(), a.util.nextFrame(function () {
                    a.build.bundled ? a.paintWidgetLauncher_stage2(e, t) : a.util.loadFile(a.build.feather_baseURL + r, "js", function () {
                        a.paintWidgetLauncher_stage2(e, t)
                    })
                })
            }).error(function () {
                a.paintWidgetCloser(!0), a.errorNotify("BAD_IMAGE", [t])
            }), i.src = d.src, !1)
        }, a.mockLauncher = function (e) {
            var t = a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement", [e]);
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getScaledImageDims", [e]), avpw$(e).detach(), avpw$(t).append(e), avpw$(t).show(), a.controlsWidgetInstance.showWaitThrobber(!0), a.util.nextFrame(function () {
                var e = function () {
                };
                a.controlsWidgetInstance.initAllTools = function () {
                    for (var e in this.activeTools) {
                        var t = this.activeTools[e];
                        this.tool.hasOwnProperty(t) && i.trigger("tool:init", t)
                    }
                }, a.controlsWidgetInstance.initWithPaintWidget = function (e) {
                    this.paintWidget = e, this.initAllTools(), this.bindControls(), this.paintWidget.showWaitThrobber = this.showWaitThrobber.AV_bindInst(this)
                }, a.controlsWidgetInstance.loaderPhase = 1, a.paintWidgetInstance = {
                    moduleLoaded: function (e, t) {
                        return t.call(this)
                    }, setMode: e, setCurrentLayerByName: e, shutdown: e, actions: {setCheckpoint: e}
                }, a.controlsWidgetInstance.initWithPaintWidget(a.paintWidgetInstance), a.controlsWidgetInstance.showWaitThrobber(!1), a.controlsWidgetInstance.loaderPhase = 2, a.fireLaunchComplete()
            })
        }, a.paintWidgetLauncher_stage2 = function (e, t) {
            var n, o, r = a.util.getImageElem(e), s = function (e) {
                a.controlsWidgetInstance && a.paintWidgetInstance && (n = new Image, avpw$.support.cors && a.launchData.enableCORS && -1 === e.indexOf("data:") && (n.crossOrigin = "Anonymous"), avpw$(n).load(function () {
                    if (a.controlsWidgetInstance && a.paintWidgetInstance) {
                        if (o = a.controlsWidgetInstance.getScaledDims(n.width, n.height), a.controlsWidgetInstance.imageSizeTracker.setOrigSize(a.launchData, n, o), n.width = o.width, n.height = o.height, a.paintWidgetInstance.setDimensions(o.width, o.height), !a.paintWidgetInstance.setBackground(n))return a.paintWidgetCloser(!0), a.errorNotify("IMAGE_NOT_CLEAN", [t]), !1;
                        a.paintWidgetInstance.setOrigSize(o.width, o.height), r.src !== t && a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "scaleCanvas"), avpw$(a.paintWidgetInstance.canvas).insertBefore("#avpw_temp_loading_image"), l.remove(), a.tempLoadingImageSrc = t, a.controlsWidgetInstance.showWaitThrobber(!1), a.controlsWidgetInstance.loaderPhase = 2, a.launchData.actionListJSON && a.paintWidgetInstance.actions.importJSON(a.launchData.actionListJSON, a.fireLaunchComplete)
                    }
                }).attr("src", e))
            };
            o = a.controlsWidgetInstance.getScaledDims(avpw$(r).width(), avpw$(r).height()), a.controlsWidgetInstance.loaderPhase = 1, a.paintWidgetInstance = new a.PaintWidget(o.width, o.height, new a.Actions, new a.ModeManager, new a.FilterManager, new a.OverlayRegistry, new a.ImageBorderManager), a.controlsWidgetInstance.canvasUI = new a.PaintUI(a.paintWidgetInstance.canvas, a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "getEmbedElement")), a.controlsWidgetInstance.initWithPaintWidget(a.paintWidgetInstance), a.paintWidgetInstance.setOrigSize(o.width, o.height), a.controlsWidgetInstance.imageSizeTracker.setOrigSize(a.launchData, r, o);
            var l = avpw$("#avpw_temp_loading_image");
            if (a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "scaleCanvas"), null != t)if (!a.launchData.enableCORS || !avpw$.support.cors || avpw$.browser.msie || avpw$.browser.safari && -1 === navigator.userAgent.indexOf("Chrome") && parseInt(a.util.getBrowserVersion()) < 7)if (-1 === t.indexOf("data:")) {
                if (!t || !t.match(/^http(s|):\/\//))return void a.errorNotify("BAD_URL", [t]);
                avpw$.ajax({
                    type: "GET",
                    dataType: "json",
                    url: a.build.jsonp_imgserver + "?callback=?",
                    data: {url: escape(t)},
                    success: function (e) {
                        s(e.data)
                    },
                    error: function (e, n) {
                        200 === e.status && "parsererror" === n && a.controlsWidgetInstance && (a.controlsWidgetInstance.showWaitThrobber(!1), a.util.nextFrame(function () {
                            a.paintWidgetCloser(!0), a.errorNotify("BAD_URL", [t])
                        }))
                    }
                })
            } else s(t); else s(t); else {
                if (!a.paintWidgetInstance.setBackground(r))return a.paintWidgetCloser(!0), a.launchData.enableCORS && avpw$.support.cors ? a.errorNotify("ERROR_BAD_IMAGE_WITHOUT_CORS") : a.errorNotify("IMAGE_NOT_CLEAN", [t]), !1;
                avpw$("#avpw_controls").insertAfter(a.paintWidgetInstance.canvas), avpw$(a.paintWidgetInstance.canvas).insertBefore(l), l.remove(), a.tempLoadingImageSrc = r.src, a.controlsWidgetInstance.showWaitThrobber(!1), a.controlsWidgetInstance.loaderPhase = 2, a.launchData.actionListJSON && a.paintWidgetInstance.actions.importJSON(a.launchData.actionListJSON, a.fireLaunchComplete)
            }
            return i.trigger("usage:submit", "launch"), a.launchData.actionListJSON || a.fireLaunchComplete(), !1
        }, a.fireLaunchComplete = function () {
            var e = a.launchData.initTool;
            a.Events.trigger("layout:resize"), e && (a.util.nextFrame(function () {
                i.trigger("tool:open", e)
            }), a.paintWidgetInstance.moduleLoaded(e, function () {
                a.util.nextFrame(function () {
                    avpw$("#avpw_holder").removeClass("avpw_init_hide")
                })
            })), "function" == typeof a.launchData.onReady && a.launchData.onReady()
        }, a.paintWidgetShutdown = function () {
            i.trigger("usage:submit", "close"), a.paintWidgetInstance && a.paintWidgetInstance.shutdown(), a.controlsWidgetInstance && (a.controlsWidgetInstance.serverMessaging && (a.controlsWidgetInstance.serverMessaging.shutdown(), a.controlsWidgetInstance.serverMessaging = null), a.controlsWidgetInstance.shutdown()), a.featherUseFlash && a.FlashAPI.close(), avpw$("#avpw_controls").hide(), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "onShutdown"), "function" == typeof a.launchData.onClose && a.launchData.onClose(a.paintWidgetInstance.dirty), a.paintWidgetInstance = null, a.controlsWidgetInstance = null, a.tempLoadingImageSrc = null
        }, a.paintWidgetCloser = function (e) {
            var t = a.launchData.closeDelay;
            a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "onClose", [e]), e || 0 === t ? (avpw$("#avpw_controls").hide(), a.paintWidgetShutdown()) : avpw$("#avpw_controls").fadeOut(t, function () {
                a.paintWidgetInstance && a.paintWidgetShutdown()
            })
        }, a.controlsWidget_saveResponder = function (e, t, o) {
            "https:" === n.location.protocol && ("string" == typeof t && (t = t.replace("http:", "https:")), "string" == typeof o && (o = o.replace("http:", "https:")));
            var r;
            if ("function" == typeof e && (r = e.apply(a.launchData, [a.util.getImageId(a.controlsWidgetInstance.paintImgIdElem), t, o])), a.controlsWidgetInstance) {
                var s = a.util.getImageElem(a.controlsWidgetInstance.paintImgIdElem);
                s.avpw_prevURL = t, i.trigger("tool:close"), r && a.controlsWidgetInstance.messager.show("avpw_aviary_beensaved", !0), a.controlsWidgetInstance.paintWidget.dirty = !1, a.controlsWidgetInstance.saving = !1
            }
        }, a.controlsWidget_onImageSaved = function (e, t) {
            a.controlsWidget_saveResponder(a.launchData.onSave, e, t)
        }, a.controlsWidget_onHiResImageSaved = function (e) {
            a.controlsWidget_saveResponder(a.launchData.onSaveHiRes, e)
        }, a.ControlsWidget = function (e, t, n, o, r) {
            this.maxWidth = parseInt(a.launchData.maxSize), this.maxHeight = this.maxWidth, this.saving = !1, this.origURL = null, this.activeTools = n, this.quitCount = 0, a.usageTracker.setup(), this.paintImgIdElem = t, i.on("layout:resize", this.setupScrollPanels, this), this.layoutNotify(a.launchData.openType, "showView", ["main"]), e && this.initWithPaintWidget(e);
            var s = {
                className: "avpw_canvas_spinner",
                lines: 12,
                length: 6,
                width: 2,
                radius: 6,
                color: "#fff",
                speed: .5,
                trail: 70
            }, l = {
                className: "avpw_tool_spinner",
                lines: 12,
                length: 6,
                width: 2,
                radius: 6,
                color: "#fff",
                speed: .5,
                trail: 70
            };
            "mobile" != a.launchData.openType && (l.color = "#555", l.length = 4), this.waitThrobber = new a.Spinner(s), this.onEggWaitThrobber = new a.Spinner(l), this.toolManager = new a.ToolManager(this), this.assetManager = o, this.serverMessaging = r
        }, a.ControlsWidget.prototype.tool = {}, a.ControlsWidget.prototype.layout = {}, a.ControlsWidget.prototype.layoutNotify = function (e, t, n) {
            return this.objectNotify("layout", e, t, n)
        }, a.ControlsWidget.prototype.objectNotify = function (e, t, n, a) {
            if ("object" == typeof this[e][t]) {
                var i = this[e][t];
                if ("function" == typeof i[n]) {
                    var o = i[n];
                    return a || (a = []), o.apply(i, a)
                }
            }
            return !0
        }, a.ControlsWidget.prototype.shutdown = function () {
            this.canvasUI && this.canvasUI.shutdown(), this.messager && this.messager.hide(), i.off("layout:resize", this.setupScrollPanels), this.shutdownAllTools(), this.unbindControls(), this.toolsPager && (this.toolsPager.shutdown(), this.toolsPager = null), this.paintWidget && (this.paintWidget.showWaitThrobber = null), a.usageTracker.shutdown(), this.waitThrobber.stop(), this.onEggWaitThrobber.stop(), this.waitThrobber = null, this.onEggWaitThrobber = null, this.showPanel(null), this.toolManager.shutdown(), this.toolManager = null
        }, a.ControlsWidget.prototype.initAllTools = function () {
            for (var e in this.activeTools) {
                var t = this.activeTools[e];
                this.tool.hasOwnProperty(t) && a.paintWidgetInstance.moduleLoaded(t, function (e) {
                    i.trigger("tool:init", e)
                }.AV_bindInst(this))
            }
            a.launchData.forceCropPreset && a.paintWidgetInstance.moduleLoaded("forcecrop", function () {
                i.trigger("tool:init", "forcecrop")
            }.AV_bindInst(this))
        }, a.ControlsWidget.prototype.shutdownAllTools = function () {
            for (var e in this.activeTools) {
                var t = this.activeTools[e];
                i.trigger("tool:shutdown", t)
            }
            a.launchData && a.launchData.forceCropPreset && i.trigger("tool:shutdown", "forcecrop")
        }, a.ControlsWidget.prototype.bindControls = function () {
        }, a.ControlsWidget.prototype.unbindControls = function () {
        }, a.ControlsWidget.prototype.initWithPaintWidget = function (e) {
            this.paintWidget = e, this.imageSizeTracker = new a.ImageSizeTracker(e.actions), a.featherUseFlash || this.initAllTools(), this.bindControls(), this.paintWidget.showWaitThrobber = this.showWaitThrobber.AV_bindInst(this)
        }, a.ControlsWidget.prototype.showWaitThrobber = function (e, n) {
            var i = 300, o = this;
            if (e) {
                var r = this.layoutNotify(a.launchData.openType, "getEmbedElement");
                r.is(":visible") && (this.waitThrobber.spin(r[0]), avpw$(this.waitThrobber).fadeIn(i))
            } else avpw$(o.waitThrobber.el).fadeOut(i, o.waitThrobber.stop);
            n && t.setTimeout(n, 5)
        }, a.publicName2PanelMode = function (e) {
            return "stickers" === e && (e = "overlay"), "draw" === e && (e = "drawing"), "text" !== e || a.featherUseFlash || (e = "textwithfont"), e
        }, a.ControlsWidget.prototype.panelMode2WidgetMode = function (e) {
            switch (e) {
                case"rotate":
                    return "rotate90";
                case"greeneye":
                    return "redeye";
                case"pinch":
                    return "bulge"
            }
            return e
        }, a.ControlsWidget.prototype.setupScrollPanels = function () {
            if (this.activeTools && this.activeTools.length) {
                var e, t, n, i = this, o = {}, r = this.layoutNotify(a.launchData.openType, "getDims").TOOLS_BROWSER_WIDTH, s = function () {
                    i.toolsPager = new a.Pager(l), i.toolsPager.changePage()
                }, l = {
                    itemCount: this.activeTools.length,
                    itemsPerPage: this.layoutNotify(a.launchData.openType, "getToolsPerPage"),
                    pageWidth: r,
                    leftArrow: avpw$("#avpw_lftArrow"),
                    rightArrow: avpw$("#avpw_rghtArrow"),
                    itemBuilder: function (n) {
                        return e = i.activeTools[n], t = a.util.getUserFriendlyToolName(e), t = a.getLocalizedString(t), a.template[a.launchData.layout].eggIcon({
                            optionName: e,
                            capOptionName: t
                        })
                    },
                    pageTemplate: a.template[a.launchData.layout].genericScrollPanel,
                    pipTemplate: a.template[a.launchData.layout].scrollPanelPip,
                    lastPageTemplate: n,
                    lastPageContents: o,
                    pageContainer: avpw$("#avpw_control_main_scrolling_region"),
                    pipContainer: avpw$("#avpw_tools_pager ul"),
                    onPageChange: function (e) {
                        a.usageTracker.addPageHit(e)
                    }
                };
                s(), avpw$("#avpw_control_main_scrolling_region").css("width", i.toolsPager.getPageCount() * r + "px"), this.assetManager.getAssets("PERMISSION", function (e) {
                    var t = !0;
                    if (e)for (var n = 0; n < e.length; n++)if ("whitelabel" === e[n]) {
                        t = !1;
                        break
                    }
                    t ? (avpw$("#avpw_powered_branding").html(a.template[a.launchData.layout].poweredByFooterLogo).find("a").css("cursor", "default"), i.toolsPager.shutdown(), s(), avpw$("#avpw_control_main_scrolling_region").css("width", i.toolsPager.getPageCount() * r + "px"), i.toolsPager.changePage()) : avpw$("#avpw_controls").addClass("avpw_white_label")
                }), a.usageTracker.setPageCount(i.toolsPager.getPageCount())
            }
        }, a.ControlsWidget.prototype.messager = function () {
            var e, n, o, r = {}, s = 1e3, l = {
                show: function (i, o, l) {
                    e = e || avpw$("#avpw_messaging"), n = n || avpw$("#avpw_messaging_inner");
                    var c = r[i] || (r[i] = avpw$("#" + i));
                    n.append(c), e.fadeIn(150), o ? (e.data("needsConfirmation", !0), a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "disableControls")) : (e.data("needsConfirmation", !1), l || t.setTimeout(this.hide, s))
                }, hide: function (n, i) {
                    if (e = e || avpw$("#avpw_messaging"), o = o || avpw$("#avpw_messages"), n) {
                        var s = r[n];
                        s && o.append(s)
                    } else avpw$.each(r, function (e, t) {
                        o.append(t)
                    });
                    e.data("needsConfirmation") ? (t.setTimeout(function () {
                        i && i()
                    }, 400), a.controlsWidgetInstance && a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls")) : (e.hide(), i && i())
                }, addMessage: function (e) {
                    o = o || avpw$("#avpw_messages"), e && (o[0].innerHTML += e)
                }
            };
            return i.on("modal:show", l.show), i.on("modal:hide", l.hide), l
        }(), a.ControlsWidget.prototype.orientationChanged = function () {
        }, a.ControlsWidget.prototype.windowResized = function () {
            var e = null;
            return function () {
                t.clearTimeout(e), e = t.setTimeout(function () {
                    i.trigger("layout:resize"), e = null
                }, 500)
            }
        }(), a.ControlsWidget.prototype.Slider = function (e) {
            var t = !1, n = function (n, a) {
                !t && e.onstart && e.onstart.apply(this, [n, a])
            }, a = function (n, a) {
                !t && e.onchange && e.onchange.apply(this, [n, a])
            }, i = function (n, a) {
                !t && e.onslide && e.onslide.apply(this, [n, a])
            }, o = avpw$(e.element).slider({
                range: "min",
                max: e.max,
                min: e.min,
                value: e.defaultValue || e.max / 2,
                delay: e.delay
            });
            return this.getValue = function () {
                return o.slider("value")
            }, this.setValue = function (e) {
                return o.slider("value", e)
            }, this.reset = function () {
                t = !0, this.setValue(e.defaultValue), t = !1
            }, this.addListeners = function () {
                o.bind("slidestart", n).bind("slidechange", a).bind("slide", i)
            }, this.removeListeners = function () {
                o.unbind("slidestart").unbind("slide").unbind("slidechange")
            }, this.shutdown = function () {
                o.slider("destroy")
            }, this
        }, a.ControlsWidget.prototype._drawUICircle = function (e, t, n, i, o) {
            a.featherUseFlash || this._drawUICircle_HTML(e, t, n, i, o)
        }, a.ControlsWidget.prototype._drawUICircle_HTML = function (e, t, n, i, o) {
            var r, s = avpw$(e)[0], l = s.getContext("2d");
            l.clearRect(0, 0, s.width, s.height), o && "transparent" !== i && this._drawUIGrid(l, s.width, s.height), l.globalCompositeOperation = "source-over", null != n ? (l.strokeStyle = o && ("transparent" == n || a.util.color_is_white(n) || null == i) ? "#444" : n, r = 3) : (l.strokeStyle = "rgba(0,0,0,0)", r = 1), l.lineWidth = r, l.beginPath(), l.arc(s.width / 2, s.height / 2, t, 0, 2 * Math.PI, !0), l.stroke(), l.closePath(), null != i && (l.save(), l.clip(), o && "transparent" == i ? this._drawUIGrid(l, s.width, s.height) : (l.fillStyle = i, l.fillRect(0, 0, s.width, s.height)), l.restore())
        }, a.ControlsWidget.prototype._drawUIGrid = function (e, t, n, a) {
            var i, o;
            for (a || (a = 5), o = 0; n + a > o; o += a)for (i = 0; n + a > i; i += a)e.fillStyle = 1 == (i + o & 1) ? "#fff" : "#ddd", e.fillRect(i, o, a, a)
        }, a.ControlsWidget.prototype.showPanel = function (e) {
            null != e && (avpw$(".avpw_controlpanel").each(function () {
                avpw$(this).hide()
            }), avpw$("#avpw_controlpanel_" + e).show())
        }, a.ControlsWidget.prototype.save = function () {
            var e = null, n = !0, o = 1e3, r = function () {
                return {
                    apikey: a.launchData.apiKey,
                    timestamp: a.launchData.timestamp,
                    signature: a.launchData.signature,
                    salt: a.launchData.salt,
                    encryptionMethod: a.launchData.encryptionMethod
                }
            }, s = function (e, t, n) {
                var i = a.controlsWidgetInstance;
                if (i.layoutNotify(a.launchData.openType, "enableControls", [!0]), i.paintWidget.showWaitThrobber(!1), e) {
                    var o = avpw$(a.util.getImageElem(i.paintImgIdElem));
                    o.avpw_prevURL = e, a.controlsWidget_onImageSaved(e, t)
                } else a.errorNotify("ERROR_SAVING", [a.build.imgrecvServer, n]), a.controlsWidgetInstance.saving = !1
            }, l = function (e, t) {
                var n = a.controlsWidgetInstance;
                if (n.layoutNotify(a.launchData.openType, "enableControls", [!0]), n.paintWidget.showWaitThrobber(!1), e) {
                    var i = avpw$(a.util.getImageElem(n.paintImgIdElem));
                    i.avpw_prevURL = e, a.controlsWidget_onHiResImageSaved(e)
                } else a.errorNotify("ERROR_SAVING", [a.build.asyncImgrecvBase, t]), a.controlsWidgetInstance.saving = !1
            }, c = function (e, t) {
                var n, a, i, o, r = "";
                if ("string" == typeof e)n = e.split("---FEATHER-POSTMESSAGE---"), a = n[0], i = n[1]; else if (o = avpw$(e).find("error"), o.length > 0)r = o.text(); else {
                    var l = avpw$(e).find("url");
                    l && (a = l.text(), a = a.replace(/^\s+|\s+$/g, ""));
                    var c = avpw$(e).find("hiresurl");
                    c && (i = c.text(), i = i.replace(/^\s+|\s+$/g, ""))
                }
                var u = [a, i, r];
                "function" == typeof t ? t.apply(this, u) : s.apply(this, u)
            }, u = function (e) {
                var t = this;
                t.paintWidget.exportImage(null, function (n) {
                    var i, o, s = n.indexOf(";", 0), l = n.indexOf(",", s);
                    i = n.slice(5, s), o = n.slice(l + 1), n = "";
                    var u = t.origURL;
                    u && 0 === u.indexOf("data:") && (u = ""), a.controlsWidgetInstance.serverMessaging.sendMessage({
                        id: "avpw_save_form",
                        action: a.build.imgrecvServer,
                        method: "POST",
                        announcer: a.build.featherTargetAnnounce,
                        origin: a.build.imgrecvBase,
                        keyValues: a.util.extend(r(), {
                            file: o,
                            sessionid: a.usageTracker.getUUID(),
                            actionlist: t.paintWidget.actions.exportJSON(!0),
                            origurl: u,
                            hiresurl: a.launchData.hiresUrl,
                            contenttype: a.launchData.fileFormat,
                            jpgquality: a.launchData.jpgQuality,
                            debug: a.launchData.debug,
                            asyncsave: a.launchData.asyncSave,
                            usecustomfileexpiration: a.launchData.useCustomFileExpiration,
                            encodedas: "base64text"
                        }),
                        callback: e || c
                    })
                })
            }, d = function (e, t, n) {
                var a = Math.round(t * n / 1e6 * 10) / 10, o = ["didHitAzure:" + (e ? "Yes" : "No"), " width:" + t, " height:" + n, " megaPixels:" + a].join("");
                i.trigger("usage:submit", "saveHiRes", o)
            }, h = function () {
                var i = a.paintWidgetInstance.getScaledSize(), s = function () {
                    if (d(!0, i.hiresWidth, i.hiresHeight), !a.launchData.hiresUrl)return void a.errorNotify("ERROR_MISSING_HI_RES_URL");
                    var s = a.util.extend(r(), {
                        actionlist: this.paintWidget.actions.exportJSON(!0),
                        origurl: a.launchData.hiresUrl,
                        fileformat: a.launchData.fileFormat,
                        notificationmethod: "GET",
                        backgroundcolor: "0xffffffff",
                        jpgquality: a.launchData.jpgQuality
                    }), c = function (a) {
                        !a || a && "JobFailed" === a.JobStatusCode ? (l(null, a), t.clearInterval(e)) : a && "JobCompleted" === a.JobStatusCode && (t.clearInterval(e), l(a.JobStatus)), n = !0
                    }, u = function (i) {
                        var s;
                        i && i.JobId ? (s = i.JobId, e = t.setInterval(function () {
                            n && a.controlsWidgetInstance.serverMessaging.sendMessage({
                                id: "avpw_save_form",
                                action: a.build.asyncImgrecvGetJobStatus,
                                method: "POST",
                                dataType: "json",
                                announcer: a.build.asyncFeatherTargetAnnounce,
                                origin: a.build.asyncImgrecvBase,
                                keyValues: a.util.extend(r(), {jobid: s}),
                                callback: c
                            }), n = !1
                        }, o)) : l(null, i)
                    };
                    a.controlsWidgetInstance.serverMessaging.sendMessage({
                        id: "avpw_save_form",
                        action: a.build.asyncImgrecvCreateJob,
                        method: "POST",
                        dataType: "json",
                        announcer: a.build.asyncFeatherTargetAnnounce,
                        origin: a.build.asyncImgrecvBase,
                        keyValues: s,
                        callback: u
                    })
                }, h = this, p = function () {
                    u.apply(h, [function (e) {
                        d(!1, i.hiresWidth, i.hiresHeight), c.apply(this, [e, l])
                    }])
                }, g = -1 !== navigator.userAgent.indexOf("MSIE");
                if (g || a.launchData.forceHiResSave || a.launchData.hiresUrl !== a.launchData.url)s.call(this); else {
                    var i = a.paintWidgetInstance.getScaledSize(), f = a.launchData.maxSize, v = a.launchData.hiresWidth, m = a.launchData.hiresHeight;
                    v && m ? v > f && m > f ? s.call(this) : i.hiresWidth < f && i.hiresHeight < f ? p.call(this) : s.call(this) : s.call(this)
                }
            }, p = function (e, t, n) {
                var i = this;
                i.paintWidget.exportImage(n, function (n) {
                    var i = a.controlsWidgetInstance;
                    i.saving = !1, i.layoutNotify(a.launchData.openType, "enableControls", [!0]), i.paintWidget.showWaitThrobber(!1), e && "function" == typeof e && (t ? t = e(n) === !1 ? !1 : !0 : e(n)), t && a.util.nextFrame(function () {
                        a.controlsWidget_onImageSaved(i.origURL)
                    })
                })
            }, g = function (e, t, n, i) {
                var o = !a.featherUseFlash;
                o && this.layoutNotify(a.launchData.openType, "disableControls"), this.paintWidget.showWaitThrobber(o, function () {
                    switch (e) {
                        case"saveHiRes":
                            h.call(r);
                            break;
                        case"getImageData":
                            p.call(r, t, n, i);
                            break;
                        default:
                            u.call(r)
                    }
                });
                var r = this;
                return !1
            };
            return function (e, t, n, o) {
                return a.controlsWidgetInstance.loaderPhase < 2 ? !1 : this.saving ? !1 : (i.trigger("tool:commit"), i.trigger("tool:close"), this.saving = !0, a.prevActionList = this.paintWidget.actions.exportJSON(!0), a.launchData.postData && "string" != typeof a.launchData.postData && (a.launchData.postData = a.JSON.stringify(a.launchData.postData)), g.apply(this, [e, t, n, o]))
            }
        }(), a.ControlsWidget.prototype.onSaveButtonClicked = function () {
            if (i.trigger("usage:submit", "saveclicked"), "function" == typeof a.launchData.onSaveButtonClicked) {
                var e = a.launchData.onSaveButtonClicked.apply(a.launchData, [a.util.getImageId(a.controlsWidgetInstance.paintImgIdElem)]);
                if (e === !1)return !1
            }
            return a.controlsWidgetInstance.save()
        }, a.ControlsWidget.prototype.showAreYouSure = function () {
            this.messager.show("avpw_aviary_quitareyousure", !0)
        }, a.ControlsWidget.prototype.cancel = function () {
            this.quitCount++;
            var e = this.quitCount > 0 && this.paintWidget && this.paintWidget.dirty;
            if ("function" == typeof a.launchData.onCloseButtonClicked) {
                var t = a.launchData.onCloseButtonClicked.apply(a.launchData, [e]);
                if (t === !1)return !1
            }
            return e ? this.showAreYouSure() : a.paintWidgetCloser(), !1
        }, a.ControlsWidget.prototype.getScaledDims = function (e, t) {
            return a.util.getScaledDims(e, t, this.maxWidth, this.maxHeight)
        }, a.TransformStyle = function (e) {
            var t = this, n = e || "";
            return t.set = function (e) {
                if (n)for (var t in e) {
                    var a = t + "\\([^\\)]*", i = new RegExp(a), o = !1, r = function () {
                        return o = !0, t + "(" + e[t]
                    };
                    n = n.replace(i, r), o || (n += " " + t + "(" + e[t] + ")")
                } else for (var t in e)n += " " + t + "(" + e[t] + ")"
            }, t.serialize = function () {
                return n
            }, t
        }, e
    }(this, "undefined" != typeof window ? window : {}, "undefined" != typeof document ? document : {}), AV.errorNotify = function (e, t) {
        var n = {
            BAD_IMAGE: {
                code: 1,
                message: "There was a problem loading your image provided to the `image` config key. Either it's not actually an image file or it doesn't really exist."
            },
            UNSUPPORTED: {
                code: 2,
                message: "It looks like you're using a browser that doesn't support the HTML canvas element (and also doesn't have Flash installed either). Please try accessing this page through a modern browser like Chrome, Firefox, Safari, or Internet Explorer (version 9 or higher). Your internets will thank you."
            },
            BAD_URL: {
                code: 3,
                message: "There was a problem loading your image provided by URI to the `url` config key. It is not reachable by the public (and our service at " + (AV.featherUseFlash ? AV.build.proxyServer : AV.build.imgrecvBase) + ")"
            },
            UNSUPPORTED_TOOL: {
                code: 4,
                message: "So sorry, but this tool is not available because it is not part of the set chosen with the `tools` config key. It's alternatively possible that your browser does not support this specific tool."
            },
            IMAGE_NOT_CLEAN: {
                code: 5,
                message: "Uh oh! We can't edit this image because the editor wasn't set up correctly to load external files via their address. You must either provide images from the same domain as the web page with the editor OR pass the external image address via the `url` config key in order for Aviary to be able to get permission from the browser to open it for editing. Sorry for the inconvenience!"
            },
            UNSUPPORTED_FONT: {
                code: 6,
                message: "So sorry, but this font looks to be unsupported by your browser or platform"
            },
            ERROR_SAVING: {code: 7, message: "There was a problem saving your photo. Please try again."},
            NO_APIKEY: {
                code: 8,
                message: "apiKey is required and not provided. See http://www.aviary.com/web-documentation#constructor-config-apikey."
            },
            ERROR_AUTHENTICATING: {
                code: 9,
                message: "There was a problem retrieving access to content from our server. Please ensure all authentication keys are present or do not attempt premium partner authentication."
            },
            ERROR_BAD_THEME: {
                code: 10,
                message: "Selected theme does not exist. Please use 'dark', 'light' or 'minimum' or see aviary.com/web for more info."
            },
            ERROR_BAD_IMAGE_WITHOUT_CORS: {
                code: 11,
                message: "The image URL you are trying to use is either not on the same domain or is not configured for CORS. See http://enable-cors.org/ for more info."
            },
            ERROR_SERVER_MESSAGING: {code: 12, message: "Error reaching Aviary services."},
            ERROR_BAD_AUTHENTICATION_PARAMETERS: {
                code: 13,
                message: "Invalid authenticationURL response. Please check the formatting the response."
            },
            BAD_FORCECROP_TOOLS: {
                code: 14,
                message: "If you're using the 'Force Crop' tool, the editor will disable the resize, orientation and crop tools so the user cannot change the intended forced size. It looks like the only tools you have enabled disabled by 'Force Crop'.."
            },
            ERROR_GET_ASSETS: {code: 15, message: "Error getting assets. Please check your authentication parameters."},
            ERROR_MISSING_HI_RES_URL: {code: 16, message: "Missing 'hiresUrl' from launch() method"}
        }, a = function () {
        }, i = n[e], o = i.message;
        return "function" == typeof AV.launchData.onError && (i.args = t, o = AV.launchData.onError(i) || o), o && a(o), o
    }, function (e, t, n) {
        "use strict";
        e.AV = e.AV || {};
        var a = e.AV, i = a.Events;
        e.Aviary = a, a.feather_loaded = !1, a.feather_loading = !1, a.build = a.build || {
            version: "",
            imgrecvServer: "imgrecvserver",
            flashGatewayServer: "",
            imgrecvBase: "",
            inAppPurchaseFrameURL: "",
            imgtrackServer: "imgtrackserver",
            filterServer: "",
            jsonp_imgserver: "",
            featherTargetAnnounce: "feather_target_announce_v3.html",
            proxyServer: "",
            feather_baseURL: "",
            feather_stickerURL: "",
            googleTracker: "",
            MINIMUM_FLASH_PLAYER_VERSION: "10.2.0"
        }, a.defaultTools = ["enhance", "effects", "frames", "overlay", "crop", "resize", "orientation", "focus", "brightness", "contrast", "saturation", "warmth", "sharpness", "colorsplash", "drawing", "textwithfont", "redeye", "whiten", "blemish"], a.glSupportedTools = ["enhance", "effects", "frames", "overlay", "crop", "resize", "orientation", "focus", "brightness", "contrast", "saturation", "warmth", "sharpness", "colorsplash", "drawing", "textwithfont", "redeye", "whiten", "blemish"], a.flashSupportedTools = ["enhance", "effects", "overlay", "crop", "resize", "orientation", "brightness", "contrast", "saturation", "sharpness", "drawing", "text", "redeye", "blemish"];
        var o = {};
        return o.image = null, o.apiKey = void 0, o.apiVersion = 4, o.appendTo = null, o.language = "en", o.theme = null, o.minimumStyling = !1, o.maxSize = 1024, o.noCloseButton = !1, o.launchDelay = 300, o.closeDelay = 300, o.forceCropPreset = null, o.forceHiResSave = !1, o.authenticationURL = null, o.tools = void 0, o.initTool = "", o.cropPresets = ["Custom", "Original", ["Square", "1:1"], "3:2", "3:5", "4:3", "4:5", "4:6", "5:7", "8:10", "16:9"], o.cropPresetDefault = "Custom", o.cropPresetsStrict = !1, o.url = null, o.enableCORS = !1, o.postUrl = void 0, o.postData = null, o.fileFormat = "", o.jpgQuality = 100, o.displayImageSize = !1, o.hiresMaxSize = 1e4, o.hiresWidth = null, o.hiresHeight = null, o.onLoad = void 0, o.onReady = void 0, o.onSaveButtonClicked = void 0, o.onSave = void 0, o.onSaveHiRes = void 0, o.onClose = void 0, o.onError = void 0, o.signature = null, o.timestamp = null, o.hiresUrl = void 0, o.isPremiumPartner = !0, o.useCustomFileExpiration = !1, o.allowInAppPurchase = !1, o.disableWebGL = !1, o.forceFlash = !1, o.forceSupport = !1, o.poweredByURL = "http://www.aviary.com", o.giveFeedbackURL = "http://support.aviary.com/", o.getWidgetURL = "https://creativesdk.adobe.com", o.debug = !1, o.asyncSave = !0, a.baseConfig = o, function (e) {
            var t = function (e) {
                return {
                    language: e.Feather_Language,
                    forceFlash: e.Feather_ForceFlash,
                    forceSupport: e.AV_Feather_ForceSupport,
                    onLoad: e.Feather_OnLoad,
                    onReady: e.Feather_OnLaunchComplete,
                    onClose: e.Feather_OnClose,
                    onSave: e.Feather_OnSave,
                    noCloseButton: e.Feather_NoCloseButton,
                    maxSize: e.Feather_MaxSize || e.Feather_MaxDisplaySize,
                    tools: e.Feather_EditOptions,
                    cropPresets: e.Feather_CropSizes,
                    resizePresets: e.Feather_ResizeSizes,
                    apiKey: e.Feather_APIKey,
                    hiresUrl: e.Feather_HiResURL,
                    postUrl: e.Feather_PostURL,
                    fileFormat: e.Feather_FileFormat || e.Feather_ContentType,
                    jpgQuality: e.Feather_FileQuality,
                    signature: e.Feather_Signature,
                    timestamp: e.Feather_Timestamp
                }
            };
            if (a.baseConfig = a.util.extend(a.baseConfig, t(e)), "https:" === e.location.protocol || "chrome-extension:" === e.location.protocol) {
                var n, i;
                for (var o in a.build)a.build.hasOwnProperty(o) && (i = o.split("_SSL"), 2 === i.length && a.build[o] && (n = i[0], a.build[n] = a.build[o]))
            }
            (e.Feather_Theme || e.Feather_OpenType || e.Feather_APIKey) && a.util.nextFrame(function () {
                var n = new a.Feather(a.baseConfig);
                e.aviaryeditor = function (i, o, r, s) {
                    a.launchData = a.util.extend(a.baseConfig, t(e));
                    var l = a.util.extend(a.launchData, {image: i, url: o, postData: r, appendTo: s});
                    n.launch(l)
                }, e.aviaryeditor_close = n.close, e.aviaryeditor_relaunch = n.relaunch, e.aviaryeditor_activatetool = n.activateTool, e.aviarynewimage = n.replaceImage
            })
        }(t), a.getLocalizedString = function (e) {
            try {
                var t = a.lang[a.launchData.language][e];
                return void 0 === t && (t = e), t
            } catch (n) {
            }
            return e
        }, Function.prototype.AV_bindInst = function (e) {
            var t = this;
            return function () {
                return t.apply(e, arguments)
            }
        }, a.injectControls = function () {
            var e, t;
            if ("popup" === a.launchData.openType ? (e = "", t = a.template[a.launchData.layout].saveBlock()) : (e = a.template[a.launchData.layout].saveBlock(), t = ""), a.criticalLayoutStyles && !a.feather_loaded) {
                var i = n.createElement("style");
                i.type = "text/css";
                var o = n.createTextNode(a.criticalLayoutStyles);
                i.styleSheet ? i.styleSheet.cssText = o.nodeValue : i.appendChild(o);
                var r = n.getElementsByTagName("head")[0];
                r.appendChild(i)
            }
            var s = a.template[a.launchData.layout].controls({
                internalSaveBlock: e,
                externalSaveBlock: t
            }), l = n.createElement("div");
            l.id = "avpw_holder";
            var c = "";
            a.featherUseFlash && (c = "avpw_flash "), a.msie && (c += "avpw_ie" + a.msie), c && (l.className = c);
            var u = n.getElementsByTagName("body");
            u && (u = u[0]), u || (u = n.documentElement), u.appendChild(l), l.innerHTML = s
        }, a.Feather = function (e) {
            e || (e = {});
            var o = this;
            e.authenticationURL && (e.isPremiumPartner = !0, i.on("auth:update", function (e) {
                r(e)
            }));
            var r = function (n) {
                t.avpw$.ajax({
                    url: e.authenticationURL,
                    cache: !1,
                    type: "GET",
                    contentType: "application/json"
                }).done(function (e) {
                    for (var t, i = ["salt", "timestamp", "signature", "encryptionMethod"], r = [], s = 0; s < i.length; s++)t = i[s], e[t] || r.push(t);
                    r.length > 0 && a.errorNotify("ERROR_BAD_AUTHENTICATION_PARAMETERS", [r.join(", ")]), o.updateConfig({
                        salt: e.salt,
                        timestamp: e.timestamp,
                        signature: e.signature,
                        encryptionMethod: e.encryptionMethod
                    }), n && n()
                })
            }, s = function () {
                a.injectControls(), a.util.nextFrame(a.loadStageFinal)
            }, l = function () {
                "undefined" != typeof avpw$ ? t.avpw$(n).ready(s) : s()
            };
            e && (e.openType = "aviary", e.layout = "desktop"), e = e || {}, a.launchData = a.util.extend(a.baseConfig, e);
            var c = function () {
                function e(e) {
                    var t = a.build.feather_baseURL + "css/" + e;
                    a.util.loadFile(t + ".css", "css")
                }

                var t, n;
                if (a.featherUseFlash = !a.featherCanvasOk() && a.featherFlashOk(), a.featherGLEnabled = a.launchData.forceGL || a.shouldUseWebGL(), a.featherUseFlash && (a.launchData.forceHiResSave = !0), a.launchData.language = a.launchData.language.toLowerCase(), !a.feather_loaded && !a.feather_loading) {
                    switch (a.feather_loading = !0, t = a.launchData.language || "en", n = "js/feathercontrols_desktop", n += a.validLanguages && a.validLanguages[t] ? "_" + t + ".js" : "_en.js", !a.launchData.theme && a.launchData.minimumStyling && (a.launchData.theme = "minimum"), "minimum" === a.launchData.theme && (a.launchData.minimumStyling = !0), a.launchData.theme || (a.launchData.theme = "dark"), a.launchData.theme) {
                        case"dark":
                        case"light":
                        case"minimum":
                            break;
                        default:
                            a.errorNotify("ERROR_BAD_THEME")
                    }
                    var i;
                    i = a.launchData.minimumStyling ? "feather_core_" : "feather_theme_aviary_", i += a.launchData.theme, e(i), a.build.bundled ? l() : a.util.loadFile(a.build.feather_baseURL + n, "js", l)
                }
            };
            c();
            var u = function () {
                return a.paintWidgetInstance ? !1 : void a.paintWidgetLauncher(a.launchData.image, a.launchData.url)
            };
            return o.launch = function (e) {
                if (!a.feather_loaded)return !1;
                var t = n.getElementById("avpw_holder");
                if (t || a.injectControls(), a.paintWidgetInstance) {
                    if (t)return !1;
                    o.close(!0)
                }
                if (a.launchData && (a.launchData.hiresWidth || a.launchData.hiresHeight) && (a.launchData.hiresWidth = null, a.launchData.hiresHeight = null), e && e.language && delete e.language, a.launchData = e ? a.util.extend(a.launchData, e) : a.launchData, !a.launchData.image)return a.errorNotify("BAD_IMAGE"), !1;
                if ("object" == typeof e.forceCropPreset ? (a.launchData.forceCropPreset = [e.forceCropPreset], a.launchData.initTool = "forcecrop") : a.launchData.forceCropPreset = null, a.launchData.initTool && (t.className += " avpw_init_hide"), a.featherUseFlash)u(); else {
                    if (!a.featherSupported())return a.errorNotify("UNSUPPORTED") && (a.controlsWidgetInstance = new a.ControlsWidget, a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "placeControls", [a.util.getApiVersion(a.launchData) > 1 ? a.launchData.appendTo : void 0]), a.controlsWidgetInstance.bindControls(), n.getElementById("avpw_controls").style.display = "block", a.controlsWidgetInstance.messager.show("avpw_aviary_unsupported", !0)), !0;
                    a.util.nextFrame(u)
                }
                return !0
            }, o.showWaitIndicator = function () {
                return a.controlsWidgetInstance && a.controlsWidgetInstance.showWaitThrobber ? (a.controlsWidgetInstance.showWaitThrobber(!0), !0) : !1
            }, o.hideWaitIndicator = function () {
                return a.controlsWidgetInstance && a.controlsWidgetInstance.showWaitThrobber ? (a.controlsWidgetInstance.showWaitThrobber(!1), !0) : !1
            }, o.getImageDimensions = function () {
                var e = null;
                return a.paintWidgetInstance && (e = a.paintWidgetInstance.getScaledSize(), a.launchData.hiresWidth && a.launchData.hiresHeight || (delete e.hiresWidth, delete e.hiresHeight)), e
            }, o.save = function () {
                return a.paintWidgetInstance ? a.controlsWidgetInstance.save() : !1
            }, o.saveHiRes = function () {
                return a.paintWidgetInstance ? a.launchData.authenticationURL ? (i.trigger("auth:update", function () {
                    a.controlsWidgetInstance.save("saveHiRes")
                }), !0) : a.controlsWidgetInstance.save("saveHiRes") : !1
            }, o.getImageData = function (e, t, n) {
                return a.paintWidgetInstance ? a.controlsWidgetInstance.save("getImageData", e, t, n) : !1
            }, o.close = function (e) {
                return a.paintWidgetInstance ? void a.paintWidgetCloser(e) : !1
            }, o.relaunch = function () {
                return i.trigger("usage:interact", "api", "relaunch"), a.isRelaunched = !0, a.launchData ? void o.launch(a.launchData) : !1
            }, o.activateTool = function (e) {
                i.trigger("tool:open", e, a.controlsWidgetInstance)
            }, o.replaceImage = function (e) {
                return i.trigger("usage:interact", "api", "replaceImage"), a.launchData ? (o.close(!0), void a.util.nextFrame(function () {
                    a.launchData.url = e, o.launch(a.launchData)
                })) : !1
            }, o.updateConfig = function (e, t) {
                if (!a.launchData)return !1;
                if (e && "object" == typeof e)for (var n in e)e.hasOwnProperty(n) && (a.launchData[n] = e[n]); else {
                    if (!e || "string" != typeof e)return !1;
                    a.launchData[e] = t
                }
            }, o.getIsDirty = function () {
                return a.paintWidgetInstance ? a.paintWidgetInstance.dirty : !1
            }, o.getActionList = function () {
                return a.paintWidgetInstance ? (i.trigger("tool:commit"), a.paintWidgetInstance.actions.exportJSON(!0)) : void 0
            }, o.disableControls = function () {
                a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "disableControls")
            }, o.enableControls = function () {
                a.controlsWidgetInstance.layoutNotify(a.launchData.openType, "enableControls")
            }, o.on = function (e, t) {
                i && e && t && "function" == typeof t && i.on(e, t)
            }, o.off = function (e, t) {
                i && e && t && "function" == typeof t && i.off(e, t)
            }, o
        }, a.loadStageFinal = function () {
            a.feather_loaded = !0;
            var e = function () {
                "function" == typeof a.launchData.onLoad && a.launchData.onLoad()
            };
            a.launchData.authenticationURL ? i.trigger("auth:update", e) : e()
        }, a.featherSupported = function () {
            return a.featherCanvasOk() || a.featherFlashOk() || a.launchData.forceSupport
        }, a.featherFlashOk = function () {
            return a.launchData.forceFlash ? !0 : t.avpw_swfobject && t.avpw_swfobject.hasFlashPlayerVersion(a.build.MINIMUM_FLASH_PLAYER_VERSION)
        }, a.featherCanvasOk = function () {
            if (a.launchData.forceFlash)return !1;
            var e = !!n.createElement("canvas").getContext, i = "function" == typeof t.postMessage;
            return e && i
        }, a.shouldUseWebGL = function () {
            if (a.launchData.disableWebGL)return !1;
            if (-1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Firefox"))return !1;
            if (-1 !== navigator.userAgent.indexOf("Firefox")) {
                var e = parseInt(navigator.userAgent.toLowerCase().split("firefox/")[1]);
                if (!e || 33 > e)return !1
            }
            var i = n.createElement("canvas");
            if ("undefined" == typeof t.WebGLRenderingContext)return !1;
            if (!i || !i.getContext)return !1;
            var o = i.getContext("webgl") || i.getContext("experimental-webgl");
            if (!o)return !1;
            var r = o.getParameter(o.MAX_TEXTURE_SIZE);
            return a.launchData.maxSize > r ? !1 : !0
        }, a.getFlashMovie = function (e) {
            var a = t[e] || n[e];
            return a
        }, a.msie = function () {
            for (var e, t = 3, a = n.createElement("div"), i = a.getElementsByTagName("i"); a.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0];);
            return t > 4 ? t : e
        }(), a.firefox = function () {
            var e;
            return "Gecko" === t.navigator.product && (e = navigator.userAgent.split("Firefox/")[1], e = parseInt(e, 10)), e
        }(), a.PAGE_WIDTH = 360, a.setPageWidth = function (e) {
            a.PAGE_WIDTH = e
        }, e
    }(this, "undefined" != typeof window ? window : {}, "undefined" != typeof document ? document : {}), AV.support = function (e) {
        var t, n = e.navigator.userAgent, a = e.screen.width, i = (e.screen.height, {
            0: /Android/i,
            1: /webOS/i,
            2: /iPhone/i,
            3: /iPod/i,
            4: /BlackBerry/i,
            5: /iPad/i
        }), o = 0, r = 0, s = 0, l = 0;
        for (var c in i)n.match(i[c]) && (o = 1, t = parseInt(c));
        if (n.match(/AppleWebKit/i) && (r = 1), 0 === t && (s = 1), 1 === s) {
            var u = n.match(/Android [0-9].[0-9]/).toString();
            u && (l = parseFloat(u.split("Android ")[1]))
        }
        var d = {};
        return d.isAppleWebkit = function () {
            return 1 === r
        }, d.isMobileWebkit = function () {
            return 1 === r && a && (480 >= a || l > 0 && 2.3 >= l)
        }, d.isIPhoneOrIPod = function () {
            return 2 === t || 3 === t
        }, d.isAndroid = function () {
            return 1 === s
        }, d.getAndroidVersion = function () {
            return l
        }, d.getVendorProperty = function () {
            var e = {}, t = function (e, t) {
                var n, a, i = ["webkit", "ms", "Moz", "O"], o = e.style;
                if (void 0 !== o[t])return t;
                for (t = t.charAt(0).toUpperCase() + t.slice(1), a = 0; a < i.length; a++)if (n = i[a] + t, void 0 !== o[n])return n
            };
            return function (n) {
                return e[n] || (e[n] = t(document.createElement("div"), n))
            }
        }(), d
    }(window)
}(window.AV || (window.AV = {}), window, document);
