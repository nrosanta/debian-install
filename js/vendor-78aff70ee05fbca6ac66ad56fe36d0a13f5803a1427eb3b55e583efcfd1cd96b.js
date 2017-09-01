/*! jQuery v1.12.1 | (c) jQuery Foundation | jquery.org/license */
function updateNav() {
    var e = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
    $vlinks.width() > e ? (breaks.push($vlinks.width()), $vlinks.children().last().prependTo($hlinks), $btn.hasClass("hidden") && $btn.removeClass("hidden")) : (e > breaks[breaks.length - 1] && ($hlinks.children().first().appendTo($vlinks), breaks.pop()), breaks.length < 1 && ($btn.addClass("hidden"), $hlinks.addClass("hidden"))), $btn.attr("count", breaks.length), $vlinks.width() > e && updateNav()
}
/**
 * AnchorJS - v3.1.1 - 2016-04-30
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2016 Bryan Braun; Licensed MIT
 */
function AnchorJS(e) {
    "use strict";

    function t(e) {
        e.icon = e.hasOwnProperty("icon") ? e.icon : "\ue9cb", e.visible = e.hasOwnProperty("visible") ? e.visible : "hover", e.placement = e.hasOwnProperty("placement") ? e.placement : "right", e["class"] = e.hasOwnProperty("class") ? e["class"] : "", e.truncate = e.hasOwnProperty("truncate") ? Math.floor(e.truncate) : 64
    }

    function n(e) {
        var t;
        if ("string" == typeof e || e instanceof String) t = [].slice.call(document.querySelectorAll(e));
        else {
            if (!(Array.isArray(e) || e instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
            t = [].slice.call(e)
        }
        return t
    }

    function i() {
        if (null === document.head.querySelector("style.anchorjs")) {
            var e, t = document.createElement("style"),
                n = " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",
                i = " *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",
                r = ' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',
                o = " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";
            t.className = "anchorjs", t.appendChild(document.createTextNode("")), e = document.head.querySelector('[rel="stylesheet"], style'), void 0 === e ? document.head.appendChild(t) : document.head.insertBefore(t, e), t.sheet.insertRule(n, t.sheet.cssRules.length), t.sheet.insertRule(i, t.sheet.cssRules.length), t.sheet.insertRule(o, t.sheet.cssRules.length), t.sheet.insertRule(r, t.sheet.cssRules.length)
        }
    }
    this.options = e || {}, this.elements = [], t(this.options), this.isTouchDevice = function() {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
    }, this.add = function(e) {
        var r, o, a, s, l, c, u, d, p, f, h, m, v = [];
        if (t(this.options), m = this.options.visible, "touch" === m && (m = this.isTouchDevice() ? "always" : "hover"), e || (e = "h1, h2, h3, h4, h5, h6"), r = n(e), 0 === r.length) return !1;
        for (i(), o = document.querySelectorAll("[id]"), a = [].map.call(o, function(e) {
                return e.id
            }), l = 0; l < r.length; l++)
            if (this.hasAnchorJSLink(r[l])) v.push(l);
            else {
                if (r[l].hasAttribute("id")) s = r[l].getAttribute("id");
                else {
                    d = this.urlify(r[l].textContent), p = d, u = 0;
                    do void 0 !== c && (p = d + "-" + u), c = a.indexOf(p), u += 1; while (-1 !== c);
                    c = void 0, a.push(p), r[l].setAttribute("id", p), s = p
                }
                f = s.replace(/-/g, " "), h = document.createElement("a"), h.className = "anchorjs-link " + this.options["class"], h.href = "#" + s, h.setAttribute("aria-label", "Anchor link for: " + f), h.setAttribute("data-anchorjs-icon", this.options.icon), "always" === m && (h.style.opacity = "1"), "\ue9cb" === this.options.icon && (h.style.fontFamily = "anchorjs-icons", h.style.fontStyle = "normal", h.style.fontVariant = "normal", h.style.fontWeight = "normal", h.style.lineHeight = 1, "left" === this.options.placement && (h.style.lineHeight = "inherit")), "left" === this.options.placement ? (h.style.position = "absolute", h.style.marginLeft = "-1em", h.style.paddingRight = "0.5em", r[l].insertBefore(h, r[l].firstChild)) : (h.style.paddingLeft = "0.375em", r[l].appendChild(h))
            }
        for (l = 0; l < v.length; l++) r.splice(v[l] - l, 1);
        return this.elements = this.elements.concat(r), this
    }, this.remove = function(e) {
        for (var t, i, r = n(e), o = 0; o < r.length; o++) i = r[o].querySelector(".anchorjs-link"), i && (t = this.elements.indexOf(r[o]), -1 !== t && this.elements.splice(t, 1), r[o].removeChild(i));
        return this
    }, this.removeAll = function() {
        this.remove(this.elements)
    }, this.urlify = function(e) {
        var n, i = /[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;
        return this.options.truncate || t(this.options), n = e.trim().replace(/\'/gi, "").replace(i, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
    }, this.hasAnchorJSLink = function(e) {
        var t = e.firstChild && (" " + e.firstChild.className + " ").indexOf(" anchorjs-link ") > -1,
            n = e.lastChild && (" " + e.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
        return t || n || !1
    }
}

function hexToRgb(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(t, function(e, t, n, i) {
        return t + t + n + n + i + i
    });
    var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return n ? {
        r: parseInt(n[1], 16),
        g: parseInt(n[2], 16),
        b: parseInt(n[3], 16)
    } : null
}

function clamp(e, t, n) {
    return Math.min(Math.max(e, t), n)
}

function isInArray(e, t) {
    return t.indexOf(e) > -1
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = fe.type(e);
        return "function" === n || fe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (fe.isFunction(t)) return fe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return fe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ce.test(t)) return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function(e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return fe.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), fe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ie, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : De.test(n) ? fe.parseJSON(n) : n
                } catch (r) {}
                fe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, n, i) {
        if (Me(e)) {
            var r, o, a = fe.expando,
                s = e.nodeType,
                l = s ? fe.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || fe.guid++ : a), l[c] || (l[c] = s ? {} : {
                toJSON: fe.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = fe.extend(l[c], t) : l[c].data = fe.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[fe.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[fe.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, n) {
        if (Me(e)) {
            var i, r, o = e.nodeType,
                a = o ? fe.cache : e,
                s = o ? e[fe.expando] : fe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !c(i) : !fe.isEmptyObject(i)) return
                }(n || (delete a[s].data, c(a[s]))) && (o ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function p(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return fe.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
            u = (fe.cssNumber[t] || "px" !== c && +l) && He.exec(fe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do o = o || ".5", u /= o, fe.style(e, t, u + c); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function f(e) {
        var t = $e.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, i, r = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || fe.nodeName(i, t) ? o.push(i) : fe.merge(o, h(i, t));
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
    }

    function v(e) {
        ze.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t, n, i, r) {
        for (var o, a, s, l, c, u, d, p = e.length, g = f(t), y = [], A = 0; p > A; A++)
            if (a = e[A], a || 0 === a)
                if ("object" === fe.type(a)) fe.merge(y, a.nodeType ? [a] : a);
                else if (Xe.test(a)) {
            for (l = l || g.appendChild(t.createElement("div")), c = (qe.exec(a) || ["", ""])[1].toLowerCase(), d = Qe[c] || Qe._default, l.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!de.leadingWhitespace && We.test(a) && y.push(t.createTextNode(We.exec(a)[0])), !de.tbody)
                for (a = "table" !== c || Ye.test(a) ? "<table>" !== d[1] || Ye.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) fe.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
            for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = g.lastChild
        } else y.push(t.createTextNode(a));
        for (l && g.removeChild(l), de.appendChecked || fe.grep(h(y, "input"), v), A = 0; a = y[A++];)
            if (i && fe.inArray(a, i) > -1) r && r.push(a);
            else if (s = fe.contains(a.ownerDocument, a), l = h(g.appendChild(a), "script"), s && m(l), n)
            for (o = 0; a = l[o++];) Re.test(a.type || "") && n.push(a);
        return l = null, g
    }

    function y() {
        return !0
    }

    function A() {
        return !1
    }

    function b() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function x(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) x(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = A;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return fe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, r, i, n)
        })
    }

    function w(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
    }

    function k(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function T(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, i, r, o = fe._data(e),
                a = fe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) fe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = fe.extend({}, a.data))
        }
    }

    function _(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[fe.expando]) {
                r = fe._data(t);
                for (i in r.events) fe.removeEvent(t, i, r.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function E(e, t, n, i) {
        t = oe.apply([], t);
        var r, o, a, s, l, c, u = 0,
            d = e.length,
            p = d - 1,
            f = t[0],
            m = fe.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !de.checkClone && it.test(f)) return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = f.call(this, r, o.html())), E(o, t, n, i)
        });
        if (d && (c = g(t, e[0].ownerDocument, !1, e, i), r = c.firstChild, 1 === c.childNodes.length && (c = r), r || i)) {
            for (s = fe.map(h(c, "script"), C), a = s.length; d > u; u++) o = c, u !== p && (o = fe.clone(o, !0, !0), a && fe.merge(s, h(o, "script"))), n.call(e[u], o, u);
            if (a)
                for (l = s[s.length - 1].ownerDocument, fe.map(s, k), u = 0; a > u; u++) o = s[u], Re.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(l, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            c = r = null
        }
        return e
    }

    function S(e, t, n) {
        for (var i, r = t ? fe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || fe.cleanData(h(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function N(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body),
            i = fe.css(n[0], "display");
        return n.detach(), i
    }

    function L(e) {
        var t = ie,
            n = ct[e];
        return n || (n = N(e, t), "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = N(e, t), lt.detach()), ct[e] = n), n
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        if (e in kt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;)
            if (e = Ct[n] + t, e in kt) return e
    }

    function D(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = fe._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (o[a] = fe._data(i, "olddisplay", L(i.nodeName)))) : (r = Pe(i), (n && "none" !== n || !r) && fe._data(i, "olddisplay", r ? n : fe.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function I(e, t, n) {
        var i = bt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function B(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += fe.css(e, n + Fe[o], !0, r)), i ? ("content" === n && (a -= fe.css(e, "padding" + Fe[o], !0, r)), "margin" !== n && (a -= fe.css(e, "border" + Fe[o] + "Width", !0, r))) : (a += fe.css(e, "padding" + Fe[o], !0, r), "padding" !== n && (a += fe.css(e, "border" + Fe[o] + "Width", !0, r)));
        return a
    }

    function H(t, n, i) {
        var r = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            a = ht(t),
            s = de.boxSizing && "border-box" === fe.css(t, "boxSizing", !1, a);
        if (ie.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = mt(t, n, a), (0 > o || null == o) && (o = t.style[n]), dt.test(o)) return o;
            r = s && (de.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + B(t, n, i || (s ? "border" : "content"), r, a) + "px"
    }

    function F(e, t, n, i, r) {
        return new F.prototype.init(e, t, n, i, r)
    }

    function P() {
        return e.setTimeout(function() {
            Tt = void 0
        }), Tt = fe.now()
    }

    function O(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Fe[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function z(e, t, n) {
        for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function q(e, t, n) {
        var i, r, o, a, s, l, c, u, d = this,
            p = {},
            f = e.style,
            h = e.nodeType && Pe(e),
            m = fe._data(e, "fxshow");
        n.queue || (s = fe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = fe.css(e, "display"), u = "none" === c ? fe._data(e, "olddisplay") || L(e.nodeName) : c, "inline" === u && "none" === fe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Et.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || fe.style(e, i)
            } else c = void 0;
        if (fe.isEmptyObject(p)) "inline" === ("none" === c ? L(e.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = fe._data(e, "fxshow", {}), o && (m.hidden = !h), h ? fe(e).show() : d.done(function() {
                fe(e).hide()
            }), d.done(function() {
                var t;
                fe._removeData(e, "fxshow");
                for (t in p) fe.style(e, t, p[t])
            });
            for (i in p) a = z(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function R(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = fe.camelCase(n), r = t[i], o = e[n], fe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = fe.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function W(e, t, n) {
        var i, r, o = 0,
            a = W.prefilters.length,
            s = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Tt || P(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: fe.extend({}, t),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Tt || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = fe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (R(u, c.opts.specialEasing); a > o; o++)
            if (i = W.prefilters[o].call(c, e, u, c.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(i.stop, i)), i;
        return fe.map(u, z, c), fe.isFunction(c.opts.start) && c.opts.start.call(e, c), fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function $(e) {
        return fe.attr(e, "class") || ""
    }

    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (fe.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function X(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, fe.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = e === Vt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function Y(e, t) {
        var n, i, r = fe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && fe.extend(!0, e, n), e
    }

    function G(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function J(e, t, n, i) {
        var r, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }

    function V(e) {
        for (; e && 1 === e.nodeType;) {
            if ("none" === U(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Z(e, t, n, i) {
        var r;
        if (fe.isArray(t)) fe.each(t, function(t, r) {
            n || nn.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== fe.type(t)) i(e, t);
        else
            for (r in t) Z(e + "[" + r + "]", t[r], n, i)
    }

    function K() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var ne = [],
        ie = e.document,
        re = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        de = {},
        pe = "1.12.1",
        fe = function(e, t) {
            return new fe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ve = /-([\da-z])/gi,
        ge = function(e, t) {
            return t.toUpperCase()
        };
    fe.fn = fe.prototype = {
        jquery: pe,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || fe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (c && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {}, a[i] = fe.extend(c, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === fe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ue.call(e, t);
            for (t in e);
            return void 0 === t || ue.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && fe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ve, ge)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (se) return se.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o, a = 0,
                s = [];
            if (n(e))
                for (r = e.length; r > a; a++) o = t(e[a], a, i), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, i), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), fe.isFunction(e) ? (n = re.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || fe.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, c, d, f, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : z) !== M && j(t), t = t || M, I)) {
                if (11 !== m && (c = ge.exec(e)))
                    if (r = c[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (h && (a = h.getElementById(r)) && P(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (c[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n
                    }
                if (x.qsa && !Q[e + " "] && (!B || !B.test(e))) {
                    if (1 !== m) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(Ae, "\\$&") : t.setAttribute("id", s = O), d = T(e), o = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + p(d[o]);
                        f = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (f) try {
                        return Z.apply(n, h.querySelectorAll(f)), n
                    } catch (v) {} finally {
                        s === O && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[O] = !0, e
        }

        function r(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = R++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, c, u = [q, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (c = t[O] || (t[O] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === q && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function v(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
            return a
        }

        function g(e, t, n, r, o, a) {
            return r && !r[O] && (r = g(r)), o && !o[O] && (o = g(o, a)), i(function(i, a, s, l) {
                var c, u, d, p = [],
                    f = [],
                    h = a.length,
                    g = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? g : v(g, p, e, s, l),
                    A = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, A, s, l), r)
                    for (c = v(A, f), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (A[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = A.length; u--;)(d = A[u]) && c.push(y[u] = d);
                            o(null, A = [], c, l)
                        }
                        for (u = A.length; u--;)(d = A[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else A = v(A === a ? A.splice(h, A.length) : A), o ? o(null, a, A, l) : Z.apply(a, A)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), c = f(function(e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function(e, n, i) {
                    var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = w.relative[e[s].type]) u = [f(h(u), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                        for (i = ++s; r > i && !w.relative[e[i].type]; i++);
                        return g(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function A(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        m = i && [],
                        g = [],
                        y = S,
                        A = i || o && w.find.TAG("*", c),
                        b = q += null == y ? 1 : Math.random() || .1,
                        x = A.length;
                    for (c && (S = a === M || a || c); h !== x && null != (u = A[h]); h++) {
                        if (o && u) {
                            for (d = 0, a || u.ownerDocument === M || (j(u), s = !I); p = e[d++];)
                                if (p(u, a || M, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (q = b)
                        }
                        r && ((u = !p && u) && f--, i && m.push(u))
                    }
                    if (f += h, r && h !== f) {
                        for (d = 0; p = n[d++];) p(m, g, a, s);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = U.call(l));
                            g = v(g)
                        }
                        Z.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (q = b, S = y), m
                };
            return r ? i(a) : a
        }
        var b, x, w, C, k, T, _, E, S, N, L, j, M, D, I, B, H, F, P, O = "sizzle" + 1 * new Date,
            z = e.document,
            q = 0,
            R = 0,
            W = n(),
            $ = n(),
            Q = n(),
            X = function(e, t) {
                return e === t && (L = !0), 0
            },
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            J = [],
            U = J.pop,
            V = J.push,
            Z = J.push,
            K = J.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            Ae = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = function() {
                j()
            };
        try {
            Z.apply(J = K.call(z.childNodes), z.childNodes), J[z.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: J.length ? function(e, t) {
                    V.apply(e, K.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, D = M.documentElement, I = !k(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(M.getElementsByClassName), x.getById = r(function(e) {
                return D.appendChild(e).id = O, !M.getElementsByName || !M.getElementsByName(O).length
            }), x.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0
            }, H = [], B = [], (x.qsa = ve.test(M.querySelectorAll)) && (r(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || B.push("~="), e.querySelectorAll(":checked").length || B.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || B.push(".#.+[+~]")
            }), r(function(e) {
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
            })), (x.matchesSelector = ve.test(F = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), H.push("!=", oe)
            }), B = B.length && new RegExp(B.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(D.compareDocumentPosition), P = t || ve.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === z && P(z, e) ? -1 : t === M || t.ownerDocument === z && P(z, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === M ? -1 : t === M ? 1 : r ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === z ? -1 : l[i] === z ? 1 : 0
            }, M) : M
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && j(e), n = n.replace(ue, "='$1']"), x.matchesSelector && I && !Q[n + " "] && (!H || !H.test(n)) && (!B || !B.test(n))) try {
                var i = F.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, M, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && j(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && j(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && G.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : x.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (L = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(X), L) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return N = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            A = !1;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (p = v, d = p[O] || (p[O] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], A = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (A = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++A && p === t) {
                                        u[e] = [q, f, A];
                                        break
                                    }
                            } else if (y && (p = t, d = p[O] || (p[O] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === q && c[1], A = f), A === !1)
                                for (;
                                    (p = ++f && p && p[m] || (A = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++A || (y && (d = p[O] || (p[O] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [q, A]), p !== t)););
                            return A -= r, A === i || A % i === 0 && A / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = _(e.replace(se, "$1"));
                    return r[O] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, xe),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = l(b);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, T = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, c, u = $[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = w.preFilter; s;) {
                (!i || (r = le.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (a in w.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }, _ = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = Q[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;) o = y(t[n]), o[O] ? i.push(o) : r.push(o);
                o = Q(e, A(r, i)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e,
                d = !i && T(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && I && w.relative[o[1].type]) {
                    if (t = (w.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (i = l(a.matches[0].replace(be, xe), ye.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && p(o), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return (c || _(e, d))(i, t, !I, n, !t || ye.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = O.split("").sort(X).join("") === O, x.detectDuplicates = !!L, j(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
    var Ae = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && fe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        be = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        xe = fe.expr.match.needsContext,
        we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (fe.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) fe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var ke, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        _e = fe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || ke, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), we.test(i[1]) && fe.isPlainObject(t))
                        for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = ie.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return ke.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
        };
    _e.prototype = fe.fn, ke = fe(ie);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(e) {
            var t, n = fe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (fe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = xe.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Ae(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Ae(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ae(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ae(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Ae(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Ae(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(e, t) {
        fe.fn[e] = function(n, i) {
            var r = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Se[e] || (r = fe.uniqueSort(r)), Ee.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Ne = /\S+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : fe.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            l = -1,
            c = function() {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            u = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                        fe.each(t, function(t, n) {
                            fe.isFunction(n) ? e.unique && u.has(n) || a.push(n) : n && n.length && "string" !== fe.type(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return fe.each(arguments, function(e, t) {
                        for (var n;
                            (n = fe.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? fe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = !0, n || u.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, fe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return fe.Deferred(function(n) {
                            fe.each(t, function(t, o) {
                                var a = fe.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? fe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, fe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = re.call(arguments),
                a = o.length,
                s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : fe.Deferred(),
                c = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && fe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var Le;
    fe.fn.ready = function(e) {
        return fe.ready.promise().done(e), this
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || (Le.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
        }
    }), fe.ready.promise = function(t) {
        if (!Le)
            if (Le = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!fe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return e.setTimeout(r, 50)
                    }
                    a(), fe.ready()
                }
            }()
        }
        return Le.promise(t)
    }, fe.ready.promise();
    var je;
    for (je in fe(de)) break;
    de.ownFirst = "0" === je, de.inlineBlockNeedsLayout = !1, fe(function() {
            var e, t, n, i;
            n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ie.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var Me = function(e) {
            var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        },
        De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ie = /([A-Z])/g;
    fe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !c(e)
            },
            data: function(e, t, n) {
                return u(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return u(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), fe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = fe.data(o), 1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(o, i, r[i])));
                        fe._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    fe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    fe.data(this, e, t)
                }) : o ? l(o, e, fe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    fe.removeData(this, e)
                })
            }
        }), fe.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = fe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = fe._queueHooks(e, t),
                    a = function() {
                        fe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return fe._data(e, n) || fe._data(e, n, {
                    empty: fe.Callbacks("once memory").add(function() {
                        fe._removeData(e, t + "queue"), fe._removeData(e, n)
                    })
                })
            }
        }), fe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = fe.queue(this, e, t);
                    fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    fe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = fe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = fe._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        Pe = function(e, t) {
            return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
        },
        Oe = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === fe.type(n)) {
                r = !0;
                for (s in n) Oe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, fe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(fe(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        ze = /^(?:checkbox|radio)$/i,
        qe = /<([\w:-]+)/,
        Re = /^$|\/(?:java|ecma)script/i,
        We = /^\s+/,
        $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, de.attributes = !e.getAttribute(fe.expando)
    }();
    var Qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
    var Xe = /<|&#?\w+;/,
        Ye = /<tbody/i;
    ! function() {
        var t, n, i = ie.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ge = /^(?:input|select|textarea)$/i,
        Je = /^key/,
        Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ve = /^(?:focusinfocus|focusoutblur)$/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, p, f, h, m, v = fe._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = fe.guid++), (a = v.events) || (a = v.events = {}), (u = v.handle) || (u = v.handle = function(e) {
                        return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(Ne) || [""], s = t.length; s--;) o = Ze.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (c = fe.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = fe.event.special[f] || {}, d = fe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && fe.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, p, f, h, m, v = fe.hasData(e) && fe._data(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(Ne) || [""], c = t.length; c--;)
                    if (s = Ze.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = fe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !p.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || fe.removeEvent(e, f, v.handle), delete u[f])
                    } else
                        for (f in u) fe.event.remove(e, f + t[c], n, i, !0);
                fe.isEmptyObject(u) && (delete v.handle, fe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, c, u, d, p = [i || ie],
                f = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ve.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), c = fe.event.special[f] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !fe.isWindow(i)) {
                    for (l = c.delegateType || f, Ve.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                    u === (i.ownerDocument || ie) && p.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                    (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || f, o = (fe._data(s, "events") || {})[t.type] && fe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && Me(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && Me(i) && a && i[f] && !fe.isWindow(i)) {
                    u = i[a], u && (i[a] = null), fe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (m) {}
                    fe.event.triggered = void 0, u && (i[a] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = fe.event.fix(e);
            var t, n, i, r, o, a = [],
                s = re.call(arguments),
                l = (fe._data(this, "events") || {})[e.type] || [],
                c = fe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = fe.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? fe(r, this).index(l) > -1 : fe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[fe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ue.test(r) ? this.mouseHooks : Je.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new fe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === b() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : A) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: A,
        isPropagationStopped: A,
        isImmediatePropagationStopped: A,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !fe.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (fe.event.special.submit = {
        setup: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.remove(this, "._submit")
        }
    }), de.change || (fe.event.special.change = {
        setup: function() {
            return Ge.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
            })), !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ge.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }), fe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return fe.event.remove(this, "._change"), !Ge.test(this.nodeName)
        }
    }), de.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = fe._data(i, t);
                r || i.addEventListener(e, n, !0), fe._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = fe._data(i, t) - 1;
                r ? fe._data(i, t, r) : (i.removeEventListener(e, n, !0), fe._removeData(i, t))
            }
        }
    }), fe.fn.extend({
        on: function(e, t, n, i) {
            return x(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return x(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = A), this.each(function() {
                fe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? fe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ke = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = f(ie),
        st = at.appendChild(ie.createElement("div"));
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l = fe.contains(e.ownerDocument, e);
            if (de.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (i = h(o), s = h(e), a = 0; null != (r = s[a]); ++a) i[a] && _(r, i[a]);
            if (t)
                if (n)
                    for (s = s || h(e), i = i || h(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
                else T(e, o);
            return i = h(o, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = s = r = null, o
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = fe.expando, l = fe.cache, c = de.attributes, u = fe.event.special; null != (n = e[a]); a++)
                if ((t || Me(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) u[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(r))
                }
        }
    }), fe.fn.extend({
        domManip: E,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ke, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Qe[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return E(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = fe(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), fe(o[i])[t](n), ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var lt, ct = {
            HTML: "block",
            BODY: "block"
        },
        ut = /^margin/,
        dt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        pt = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        ft = ie.documentElement;
    ! function() {
        function t() {
            var t, u, d = ie.documentElement;
            d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = a = !0, e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, r = "4px" === (u || {
                width: "4px"
            }).width, c.style.marginRight = "50%", i = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, t = c.appendChild(ie.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(l)
        }
        var n, i, r, o, a, s, l = ie.createElement("div"),
            c = ie.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, fe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), r
            },
            pixelMarginRight: function() {
                return null == n && t(), i
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var ht, mt, vt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), n && !de.pixelMarginRight() && dt.test(a) && ut.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : ft.currentStyle && (ht = function(e) {
        return e.currentStyle
    }, mt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), dt.test(a) && !vt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var gt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        At = /^(none|table(?!-c[ea]).+)/,
        bt = new RegExp("^(" + Be + ")(.*)$", "i"),
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ct = ["Webkit", "O", "Moz", "ms"],
        kt = ie.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = fe.camelCase(t),
                    l = e.style;
                if (t = fe.cssProps[s] || (fe.cssProps[s] = M(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = He.exec(n)) && r[1] && (n = p(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (fe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = M(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = mt(e, t, i)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? At.test(fe.css(e, "display")) && 0 === e.offsetWidth ? pt(e, xt, function() {
                    return H(e, t, i)
                }) : H(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && ht(e);
                return I(e, n, i ? B(e, t, i, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), de.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(o.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = gt.test(o) ? o.replace(gt, r) : o + " " + r)
        }
    }), fe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
        return t ? pt(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"]) : void 0
    }), fe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - pt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ut.test(e) || (fe.cssHooks[e + t].set = I)
    }), fe.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (fe.isArray(t)) {
                    for (i = ht(e), r = t.length; r > a; a++) o[t[a]] = fe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Pe(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }), fe.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, fe.fx = F.prototype.init, fe.fx.step = {};
    var Tt, _t, Et = /^(?:toggle|show|hide)$/,
        St = /queueHooks$/;
    fe.Animation = fe.extend(W, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, He.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
            },
            prefilters: [q],
            prefilter: function(e, t) {
                t ? W.prefilters.unshift(e) : W.prefilters.push(e)
            }
        }), fe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? fe.extend({}, e) : {
                complete: n || !n && t || fe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !fe.isFunction(t) && t
            };
            return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
            }, i
        }, fe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = fe.isEmptyObject(e),
                    o = fe.speed(t, n, i),
                    a = function() {
                        var t = W(this, fe.extend({}, e), o);
                        (r || fe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = fe.timers,
                        a = fe._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && St.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && fe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = fe._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = fe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), fe.each(["toggle", "show", "hide"], function(e, t) {
            var n = fe.fn[t];
            fe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, r)
            }
        }), fe.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            fe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), fe.timers = [], fe.fx.tick = function() {
            var e, t = fe.timers,
                n = 0;
            for (Tt = fe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || fe.fx.stop(), Tt = void 0
        }, fe.fx.timer = function(e) {
            fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
        }, fe.fx.interval = 13, fe.fx.start = function() {
            _t || (_t = e.setInterval(fe.fx.tick, fe.fx.interval))
        }, fe.fx.stop = function() {
            e.clearInterval(_t), _t = null
        }, fe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fe.fn.delay = function(t, n) {
            return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                r = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var Nt = /\r/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = fe.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, fe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : fe.isArray(r) && (r = fe.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)) : void 0
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = fe.makeArray(t), a = r.length; a--;)
                        if (i = r[a], fe.inArray(fe.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0
            }
        }, de.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Lt, jt, Mt = fe.expr.attrHandle,
        Dt = /^(?:checked|selected)$/i,
        It = de.getSetAttribute,
        Bt = de.input;
    fe.fn.extend({
        attr: function(e, t) {
            return Oe(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(), r = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? jt : Lt)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? void 0 : i)) : void 0
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(Ne);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Bt && It || !Dt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(It ? n : i)
        }
    }), jt = {
        set: function(e, t, n) {
            return t === !1 ? fe.removeAttr(e, n) : Bt && It || !Dt.test(n) ? e.setAttribute(!It && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Mt[t] || fe.find.attr;
        Bt && It || !Dt.test(t) ? Mt[t] = function(e, t, i) {
            var r, o;
            return i || (o = Mt[t], Mt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Mt[t] = o), r
        } : Mt[t] = function(e, t, n) {
            return n ? void 0 : e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Bt && It || (fe.attrHooks.value = {
        set: function(e, t, n) {
            return fe.nodeName(e, "input") ? void(e.defaultValue = t) : Lt && Lt.set(e, t, n)
        }
    }), It || (Lt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Mt.id = Mt.name = Mt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, fe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Lt.set
    }, fe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Lt.set(e, "" === t ? !1 : t, n)
        }
    }, fe.each(["width", "height"], function(e, t) {
        fe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ht = /^(?:input|select|textarea|button|object)$/i,
        Ft = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Oe(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = fe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            return 3 !== o && 8 !== o && 2 !== o ? (1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ht.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
        fe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }), de.enctype || (fe.propFix.enctype = "encoding");
    var Pt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, $(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = $(n), i = 1 === n.nodeType && (" " + r + " ").replace(Pt, " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = fe.trim(i), r !== s && fe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, $(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = $(n), i = 1 === n.nodeType && (" " + r + " ").replace(Pt, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = fe.trim(i), r !== s && fe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, $(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = fe(this), o = e.match(Ne) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = $(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + $(n) + " ").replace(Pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Ot = e.location,
        zt = fe.now(),
        qt = /\?/,
        Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = fe.trim(t + "");
        return r && !fe.trim(r.replace(Rt, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : fe.error("Invalid JSON: " + t)
    }, fe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
    };
    var Wt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Yt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ut = {},
        Vt = {},
        Zt = "*/".concat("*"),
        Kt = Ot.href,
        en = Jt.exec(Kt.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Kt,
            type: "GET",
            isLocal: Xt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, fe.ajaxSettings), t) : Y(fe.ajaxSettings, e)
        },
        ajaxPrefilter: Q(Ut),
        ajaxTransport: Q(Vt),
        ajax: function(t, n) {
            function i(t, n, i, r) {
                var o, d, y, A, x, C = n;
                2 !== b && (b = 2, l && e.clearTimeout(l), u = void 0, s = r || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (A = G(p, w, i)), A = J(p, A, w, o), o ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (fe.lastModified[a] = x), x = w.getResponseHeader("etag"), x && (fe.etag[a] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = A.state, d = A.data, y = A.error, o = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (n || C) + "", o ? m.resolveWith(f, [d, C, w]) : m.rejectWith(f, [w, C, y]), w.statusCode(g), g = void 0, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? d : y]), v.fireWith(f, [w, C]), c && (h.trigger("ajaxComplete", [w, p]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, u, d, p = fe.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                m = fe.Deferred(),
                v = fe.Callbacks("once memory"),
                g = p.statusCode || {},
                y = {},
                A = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = Qt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = A[n] = A[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), i(0, t), this
                    }
                };
            if (m.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Kt) + "").replace(Wt, "").replace(Gt, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain && (r = Jt.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), X(Ut, p, n, w), 2 === b) return w;
            c = fe.event && p.global, c && 0 === fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Yt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (qt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = $t.test(a) ? a.replace($t, "$1_=" + zt++) : a + (qt.test(a) ? "&" : "?") + "_=" + zt++)), p.ifModified && (fe.lastModified[a] && w.setRequestHeader("If-Modified-Since", fe.lastModified[a]), fe.etag[a] && w.setRequestHeader("If-None-Match", fe.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](p[o]);
            if (u = X(Vt, p, n, w)) {
                if (w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), 2 === b) return w;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, i)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    i(-1, C)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, n, i, r) {
            return fe.isFunction(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, fe.fn.extend({
        wrapAll: function(e) {
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : V(e)
    }, fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    };
    var tn = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, r);
        return i.join("&").replace(tn, "+")
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(rn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || ee()
    } : K;
    var sn = 0,
        ln = {},
        cn = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in ln) ln[e](void 0, !0)
    }), de.cors = !!cn && "withCredentials" in cn, cn = de.ajax = !!cn, cn && fe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o, a = t.xhr(),
                        s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, i) {
                        var o, l, c;
                        if (n && (i || 4 === a.readyState))
                            if (delete ln[s], n = void 0, a.onreadystatechange = fe.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (u) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                            }
                        c && r(o, l, c, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), fe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || fe("head")[0] || ie.documentElement;
            return {
                send: function(i, r) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var un = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = un.pop() || fe.expando + "_" + zt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + r) : t.jsonp !== !1 && (t.url += (qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || fe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? fe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, un.push(r)), a && fe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), de.createHTMLDocument = function() {
        if (!ie.implementation.createHTMLDocument) return !1;
        var e = ie.implementation.createHTMLDocument("");
        return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
    }(), fe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (de.createHTMLDocument ? ie.implementation.createHTMLDocument("") : ie);
        var i = we.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = g([e], t, r), r && r.length && fe(r).remove(), fe.merge([], i.childNodes))
    };
    var pn = fe.fn.load;
    fe.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn) return pn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = fe.trim(e.slice(s, e.length)), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && fe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(a, o || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.expr.filters.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c, u = fe.css(e, "position"),
                d = fe(e),
                p = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = fe.css(e, "top"), l = fe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && fe.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, fe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - fe.css(i, "marginTop", !0),
                    left: t.left - n.left - fe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || ft
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function(i) {
            return Oe(this, function(e, i, r) {
                var o = te(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? fe(o).scrollLeft() : r, n ? r : fe(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = j(de.pixelPosition, function(e, n) {
            return n ? (n = mt(e, t), dt.test(n) ? fe(e).position()[t] + "px" : n) : void 0
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            fe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Oe(this, function(t, n, i) {
                    var r;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? fe.css(t, n, a) : fe.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.fn.size = function() {
        return this.length
    }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var fn = e.jQuery,
        hn = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = hn), t && e.jQuery === fe && (e.jQuery = fn), fe
    }, t || (e.jQuery = e.$ = fe), fe
}),
function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.head || document.getElementsByTagName("head")[0],
                r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", i.appendChild(o.childNodes[1])
        }
        return t && e.extend(n, t), this.each(function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var i = ".fitvidsignore";
            n.ignore && (i = i + ", " + n.ignore);
            var r = e(this).find(t.join(","));
            r = r.not("object object"), r = r.not(i), r.each(function(t) {
                var n = e(this);
                if (!(n.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length)) {
                    n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9), n.attr("width", 16));
                    var r = "object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height(),
                        o = isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10),
                        a = r / o;
                    if (!n.attr("id")) {
                        var s = "fitvid" + t;
                        n.attr("id", s)
                    }
                    n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), n.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
var $nav = $("#site-nav"),
    $btn = $("#site-nav button"),
    $vlinks = $("#site-nav .visible-links"),
    $hlinks = $("#site-nav .hidden-links"),
    breaks = [];
$(window).resize(function() {
        updateNav()
    }), $btn.on("click", function() {
        $hlinks.toggleClass("hidden"), $(this).toggleClass("close")
    }), updateNav(),
    function(e) {
        var t, n, i, r, o, a, s, l = "Close",
            c = "BeforeClose",
            u = "AfterClose",
            d = "BeforeAppend",
            p = "MarkupParse",
            f = "Open",
            h = "Change",
            m = "mfp",
            v = "." + m,
            g = "mfp-ready",
            y = "mfp-removing",
            A = "mfp-prevent-close",
            b = function() {},
            x = !!window.jQuery,
            w = e(window),
            C = function(e, n) {
                t.ev.on(m + e + v, n)
            },
            k = function(t, n, i, r) {
                var o = document.createElement("div");
                return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o
            },
            T = function(n, i) {
                t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
            },
            _ = function(n) {
                return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
            },
            E = function() {
                e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
            },
            S = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var n = navigator.appVersion;
                t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document), t.popupsCache = {}
            },
            open: function(n) {
                i || (i = e(document.body));
                var o;
                if (n.isObj === !1) {
                    t.items = n.items.toArray(), t.index = 0;
                    var s, l = n.items;
                    for (o = 0; o < l.length; o++)
                        if (s = l[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                            t.index = o;
                            break
                        }
                } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
                if (t.isOpen) return void t.updateItemHTML();
                t.types = [], a = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function() {
                    t.close()
                }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function(e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
                var c = e.magnificPopup.modules;
                for (o = 0; o < c.length; o++) {
                    var u = c[o];
                    u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
                }
                T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (C(p, function(e, t, n, i) {
                    n.close_replaceWith = _(i.type)
                }), a += " mfp-close-btn-in") : t.wrap.append(_())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: r.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && r.on("keyup" + v, function(e) {
                    27 === e.keyCode && t.close()
                }), w.on("resize" + v, function() {
                    t.updateSize()
                }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
                var d = t.wH = w.height(),
                    h = {};
                if (t.fixedContentPos && t._hasScrollBar(d)) {
                    var m = t._getScrollbarSize();
                    m && (h.marginRight = m)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
                var y = t.st.mainClass;
                return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), T("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                    t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), r.on("focusin" + v, t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(d), T(f), n
            },
            close: function() {
                t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                T(l);
                var n = y + " " + g + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                    var i = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
                }
                r.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(u)
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * n;
                    t.wrap.css("height", i), t.wH = i
                } else t.wH = e || w.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
            },
            updateItemHTML: function() {
                var n = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
                var i = n.type;
                if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                    var r = t.st[i] ? t.st[i].markup : !1;
                    T("FirstMarkupParse", r), r ? t.currTemplate[i] = e(r) : t.currTemplate[i] = !0
                }
                o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
                var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
                t.appendContent(a, i), n.preloaded = !0, T(h, n), o = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
            },
            appendContent: function(e, n) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(_()) : t.content = e : t.content = "", T(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(n) {
                var i, r = t.items[n];
                if (r.tagName ? r = {
                        el: e(r)
                    } : (i = r.type, r = {
                        data: r,
                        src: r.src
                    }), r.el) {
                    for (var o = t.types, a = 0; a < o.length; a++)
                        if (r.el.hasClass("mfp-" + o[a])) {
                            i = o[a];
                            break
                        }
                    r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
                }
                return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, T("ElementParse", r), t.items[n]
            },
            addGroup: function(e, n) {
                var i = function(i) {
                    i.mfpEl = this, t._openClick(i, e, n)
                };
                n || (n = {});
                var r = "click.magnificPopup";
                n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i)))
            },
            _openClick: function(n, i, r) {
                var o = void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick;
                if (o || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                    var a = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                    if (a)
                        if (e.isFunction(a)) {
                            if (!a.call(t)) return !0
                        } else if (w.width() < a) return !0;
                    n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r)
                }
            },
            updateStatus: function(e, i) {
                if (t.preloader) {
                    n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                    var r = {
                        status: e,
                        text: i
                    };
                    T("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), n = e
                }
            },
            _checkIfClose: function(n) {
                if (!e(n).hasClass(A)) {
                    var i = t.st.closeOnContentClick,
                        r = t.st.closeOnBgClick;
                    if (i && r) return !0;
                    if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                    if (n === t.content[0] || e.contains(t.content[0], n)) {
                        if (i) return !0
                    } else if (r && e.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || w.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(n) {
                return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, n, i) {
                var r;
                i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (r = e.split("_"), r.length > 1) {
                        var i = t.find(v + "-" + r[0]);
                        if (i.length > 0) {
                            var o = r[1];
                            "replaceWith" === o ? i[0] !== n[0] && i.replaceWith(n) : "img" === o ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(r[1], n)
                        }
                    } else t.find(v + "-" + e).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(t, n) {
                return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, n) {
                n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, e.fn.magnificPopup = function(n) {
            E();
            var i = e(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var r, o = x ? i.data("magnificPopup") : i[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    o.items ? r = o.items[a] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(a)), t._openClick({
                        mfpEl: r
                    }, i, o)
                } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else n = e.extend(!0, {}, n), x ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
            return i
        };
        var N, L, j, M = "inline",
            D = function() {
                j && (L.after(j.addClass(N)).detach(), j = null)
            };
        e.magnificPopup.registerModule(M, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(M), C(l + "." + M, function() {
                        D()
                    })
                },
                getInline: function(n, i) {
                    if (D(), n.src) {
                        var r = t.st.inline,
                            o = e(n.src);
                        if (o.length) {
                            var a = o[0].parentNode;
                            a && a.tagName && (L || (N = r.hiddenClass, L = k(N), N = "mfp-" + N), j = o.after(L).detach().removeClass(N)), t.updateStatus("ready")
                        } else t.updateStatus("error", r.tNotFound), o = e("<div>");
                        return n.inlineElement = o, o
                    }
                    return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
                }
            }
        });
        var I, B = "ajax",
            H = function() {
                I && i.removeClass(I)
            },
            F = function() {
                H(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(B, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(B), I = t.st.ajax.cursor, C(l + "." + B, F), C("BeforeChange." + B, F)
                },
                getAjax: function(n) {
                    I && i.addClass(I), t.updateStatus("loading");
                    var r = e.extend({
                        url: n.src,
                        success: function(i, r, o) {
                            var a = {
                                data: i,
                                xhr: o
                            };
                            T("ParseAjax", a), t.appendContent(e(a.data), B), n.finished = !0, H(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(g)
                            }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                        },
                        error: function() {
                            H(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(r), ""
                }
            }
        });
        var P, O = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = t.st.image.titleSrc;
            if (i) {
                if (e.isFunction(i)) return i.call(t, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var e = t.st.image,
                        n = ".image";
                    t.types.push("image"), C(f + n, function() {
                        "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                    }), C(l + n, function() {
                        e.cursor && i.removeClass(e.cursor), w.off("resize" + v)
                    }), C("Resize" + n, t.resizeImage), t.isLowIE && C("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var n = 0;
                        t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, P && clearInterval(P), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var n = 0,
                        i = e.img[0],
                        r = function(o) {
                            P && clearInterval(P), P = setInterval(function() {
                                return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(P), n++, void(3 === n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                            }, o)
                        };
                    r(1)
                },
                getImage: function(n, i) {
                    var r = 0,
                        o = function() {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(o, 100) : a()))
                        },
                        a = function() {
                            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        s = t.st.image,
                        l = i.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", n.img = e(c).on("load.mfploader", o).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                    }
                    return t._parseMarkup(i, {
                        title: O(n),
                        img_replaceWith: n.img
                    }, n), t.resizeImage(), n.hasSize ? (P && clearInterval(P), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
                }
            }
        });
        var z, q = function() {
            return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform), z
        };
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, n = t.st.zoom,
                        i = ".zoom";
                    if (n.enabled && t.supportsTransition) {
                        var r, o, a = n.duration,
                            s = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                                    r = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t
                            },
                            u = function() {
                                t.content.css("visibility", "visible")
                            };
                        C("BuildControls" + i, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(r), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                                o = s(e), o.css(t._getOffset()), t.wrap.append(o), r = setTimeout(function() {
                                    o.css(t._getOffset(!0)), r = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            o.remove(), e = o = null, T("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), C(c + i, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(r), t.st.removalDelay = a, !e) {
                                    if (e = t._getItemToZoom(), !e) return;
                                    o = s(e)
                                }
                                o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(t._getOffset())
                                }, 16)
                            }
                        }), C(l + i, function() {
                            t._allowZoom() && (u(), o && o.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return t.currItem.hasSize ? t.currItem.img : !1
                },
                _getOffset: function(n) {
                    var i;
                    i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var r = i.offset(),
                        o = parseInt(i.css("padding-top"), 10),
                        a = parseInt(i.css("padding-bottom"), 10);
                    r.top -= e(window).scrollTop() - o;
                    var s = {
                        width: i.width(),
                        height: (x ? i.innerHeight() : i[0].offsetHeight) - a - o
                    };
                    return q() ? s["-moz-transform"] = s.transform = "translate(" + r.left + "px," + r.top + "px)" : (s.left = r.left, s.top = r.top), s
                }
            }
        });
        var R = "iframe",
            W = "//about:blank",
            $ = function(e) {
                if (t.currTemplate[R]) {
                    var n = t.currTemplate[R].find("iframe");
                    n.length && (e || (n[0].src = W), t.isIE8 && n.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(R, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(R), C("BeforeChange", function(e, t, n) {
                        t !== n && (t === R ? $() : n === R && $(!0))
                    }), C(l + "." + R, function() {
                        $()
                    })
                },
                getIframe: function(n, i) {
                    var r = n.src,
                        o = t.st.iframe;
                    e.each(o.patterns, function() {
                        return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                    });
                    var a = {};
                    return o.srcAction && (a[o.srcAction] = r), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
                }
            }
        });
        var Q = function(e) {
                var n = t.items.length;
                return e > n - 1 ? e - n : 0 > e ? n + e : e
            },
            X = function(e, t, n) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var n = t.st.gallery,
                        i = ".mfp-gallery",
                        o = Boolean(e.fn.mfpFastClick);
                    return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", C(f + i, function() {
                        n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), r.on("keydown" + i, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), C("UpdateStatus" + i, function(e, n) {
                        n.text && (n.text = X(n.text, t.currItem.index, t.items.length))
                    }), C(p + i, function(e, i, r, o) {
                        var a = t.items.length;
                        r.counter = a > 1 ? X(n.tCounter, o.index, a) : ""
                    }), C("BuildControls" + i, function() {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var i = n.arrowMarkup,
                                r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(A),
                                a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(A),
                                s = o ? "mfpFastClick" : "click";
                            r[s](function() {
                                t.prev()
                            }), a[s](function() {
                                t.next()
                            }), t.isIE7 && (k("b", r[0], !1, !0), k("a", r[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(r.add(a))
                        }
                    }), C(h + i, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void C(l + i, function() {
                        r.off(i), t.wrap.off("click" + i), t.arrowLeft && o && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    t.direction = !0, t.index = Q(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = Q(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, n = t.st.gallery.preload,
                        i = Math.min(n[0], t.items.length),
                        r = Math.min(n[1], t.items.length);
                    for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(n) {
                    if (n = Q(n), !t.items[n].preloaded) {
                        var i = t.items[n];
                        i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            i.hasSize = !0
                        }).on("error.mfploader", function() {
                            i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                        }).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var Y = "retina";
        e.magnificPopup.registerModule(Y, {
                options: {
                    replaceSrc: function(e) {
                        return e.src.replace(/\.\w+$/, function(e) {
                            return "@2x" + e
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var e = t.st.retina,
                                n = e.ratio;
                            n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + Y, function(e, t) {
                                t.img.css({
                                    "max-width": t.img[0].naturalWidth / n,
                                    width: "100%"
                                })
                            }), C("ElementParse." + Y, function(t, i) {
                                i.src = e.replaceSrc(i, n)
                            }))
                        }
                    }
                }
            }),
            function() {
                var t = 1e3,
                    n = "ontouchstart" in window,
                    i = function() {
                        w.off("touchmove" + o + " touchend" + o)
                    },
                    r = "mfpFastClick",
                    o = "." + r;
                e.fn.mfpFastClick = function(r) {
                    return e(this).each(function() {
                        var a, s = e(this);
                        if (n) {
                            var l, c, u, d, p, f;
                            s.on("touchstart" + o, function(e) {
                                d = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, u = p.clientY, w.on("touchmove" + o, function(e) {
                                    p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (d = !0, i())
                                }).on("touchend" + o, function(e) {
                                    i(), d || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                        a = !1
                                    }, t), r())
                                })
                            })
                        }
                        s.on("click" + o, function() {
                            a || r()
                        })
                    })
                }, e.fn.destroyMfpFastClick = function() {
                    e(this).off("touchstart" + o + " click" + o), n && w.off("touchmove" + o + " touchend" + o)
                }
            }(), E()
    }(window.jQuery || window.Zepto),
    /*!
     * jQuery Smooth Scroll - v1.7.2 - 2016-01-23
     * https://github.com/kswedberg/jquery-smooth-scroll
     * Copyright (c) 2016 Karl Swedberg
     * Licensed MIT
     */
    ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(e) {
        var t = "1.7.2",
            n = {},
            i = {
                exclude: [],
                excludeWithin: [],
                offset: 0,
                direction: "top",
                delegateSelector: null,
                scrollElement: null,
                scrollTarget: null,
                beforeScroll: function() {},
                afterScroll: function() {},
                easing: "swing",
                speed: 400,
                autoCoefficient: 2,
                preventDefault: !0
            },
            r = function(t) {
                var n = [],
                    i = !1,
                    r = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";
                return this.each(function() {
                    var t = e(this);
                    return this !== document && this !== window ? !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(t[r]() > 0 ? n.push(this) : (t[r](1), i = t[r]() > 0, i && n.push(this), t[r](0))) : (n.push(document.scrollingElement), !1) : void 0
                }), n.length || this.each(function() {
                    this === document.documentElement && "smooth" === e(this).css("scrollBehavior") && (n = [this]), n.length || "BODY" !== this.nodeName || (n = [this])
                }), "first" === t.el && n.length > 1 && (n = [n[0]]), n
            };
        e.fn.extend({
            scrollable: function(e) {
                var t = r.call(this, {
                    dir: e
                });
                return this.pushStack(t)
            },
            firstScrollable: function(e) {
                var t = r.call(this, {
                    el: "first",
                    dir: e
                });
                return this.pushStack(t)
            },
            smoothScroll: function(t, n) {
                if (t = t || {}, "options" === t) return n ? this.each(function() {
                    var t = e(this),
                        i = e.extend(t.data("ssOpts") || {}, n);
                    e(this).data("ssOpts", i)
                }) : this.first().data("ssOpts");
                var i = e.extend({}, e.fn.smoothScroll.defaults, t),
                    r = function(t) {
                        var n = function(e) {
                                return e.replace(/(:|\.|\/)/g, "\\$1")
                            },
                            r = this,
                            o = e(this),
                            a = e.extend({}, i, o.data("ssOpts") || {}),
                            s = i.exclude,
                            l = a.excludeWithin,
                            c = 0,
                            u = 0,
                            d = !0,
                            p = {},
                            f = e.smoothScroll.filterPath(location.pathname),
                            h = e.smoothScroll.filterPath(r.pathname),
                            m = location.hostname === r.hostname || !r.hostname,
                            v = a.scrollTarget || h === f,
                            g = n(r.hash);
                        if (g && !e(g).length && (d = !1), a.scrollTarget || m && v && g) {
                            for (; d && c < s.length;) o.is(n(s[c++])) && (d = !1);
                            for (; d && u < l.length;) o.closest(l[u++]).length && (d = !1)
                        } else d = !1;
                        d && (a.preventDefault && t.preventDefault(), e.extend(p, a, {
                            scrollTarget: a.scrollTarget || g,
                            link: r
                        }), e.smoothScroll(p))
                    };
                return null !== t.delegateSelector ? this.undelegate(t.delegateSelector, "click.smoothscroll").delegate(t.delegateSelector, "click.smoothscroll", r) : this.unbind("click.smoothscroll").bind("click.smoothscroll", r), this
            }
        }), e.smoothScroll = function(t, i) {
            if ("options" === t && "object" == typeof i) return e.extend(n, i);
            var r, o, a, s, l, c = 0,
                u = "offset",
                d = "scrollTop",
                p = {},
                f = {};
            "number" == typeof t ? (r = e.extend({
                link: null
            }, e.fn.smoothScroll.defaults, n), a = t) : (r = e.extend({
                link: null
            }, e.fn.smoothScroll.defaults, t || {}, n), r.scrollElement && (u = "position", "static" === r.scrollElement.css("position") && r.scrollElement.css("position", "relative"))), d = "left" === r.direction ? "scrollLeft" : d, r.scrollElement ? (o = r.scrollElement, /^(?:HTML|BODY)$/.test(o[0].nodeName) || (c = o[d]())) : o = e("html, body").firstScrollable(r.direction), r.beforeScroll.call(o, r), a = "number" == typeof t ? t : i || e(r.scrollTarget)[u]() && e(r.scrollTarget)[u]()[r.direction] || 0, p[d] = a + c + r.offset, s = r.speed, "auto" === s && (l = Math.abs(p[d] - o[d]()), s = l / r.autoCoefficient), f = {
                duration: s,
                easing: r.easing,
                complete: function() {
                    r.afterScroll.call(r.link, r)
                }
            }, r.step && (f.step = r.step), o.length ? o.stop().animate(p, f) : r.afterScroll.call(r.link, r)
        }, e.smoothScroll.version = t, e.smoothScroll.filterPath = function(e) {
            return e = e || "", e.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        }, e.fn.smoothScroll.defaults = i
    }),
    /*!
     * Stickyfill -- `position: sticky` polyfill
     * v. 1.1.3 | https://github.com/wilddeer/stickyfill
     * Copyright Oleg Korsunsky | http://wd.dizaina.net/
     *
     * MIT License
     */
    ! function(e, t) {
        function n() {
            k = N = T = _ = E = S = H
        }

        function i(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }

        function r(e) {
            return parseFloat(e) || 0
        }

        function o() {
            j = {
                top: t.pageYOffset,
                left: t.pageXOffset
            }
        }

        function a() {
            return t.pageXOffset != j.left ? (o(), void T()) : void(t.pageYOffset != j.top && (o(), l()))
        }

        function s() {
            setTimeout(function() {
                t.pageYOffset != j.top && (j.top = t.pageYOffset, l())
            }, 0)
        }

        function l() {
            for (var e = D.length - 1; e >= 0; e--) c(D[e])
        }

        function c(e) {
            if (e.inited) {
                var t = j.top <= e.limit.start ? 0 : j.top >= e.limit.end ? 2 : 1;
                e.mode != t && m(e, t)
            }
        }

        function u() {
            for (var e = D.length - 1; e >= 0; e--)
                if (D[e].inited) {
                    var t = Math.abs(A(D[e].clone) - D[e].docOffsetTop),
                        n = Math.abs(D[e].parent.node.offsetHeight - D[e].parent.height);
                    if (t >= 2 || n >= 2) return !1
                }
            return !0
        }

        function d(e) {
            isNaN(parseFloat(e.computed.top)) || e.isCell || "none" == e.computed.display || (e.inited = !0, e.clone || v(e), "absolute" != e.parent.computed.position && "relative" != e.parent.computed.position && (e.parent.node.style.position = "relative"), c(e), e.parent.height = e.parent.node.offsetHeight, e.docOffsetTop = A(e.clone))
        }

        function p(e) {
            var t = !0;
            e.clone && g(e), i(e.node.style, e.css);
            for (var n = D.length - 1; n >= 0; n--)
                if (D[n].node !== e.node && D[n].parent.node === e.parent.node) {
                    t = !1;
                    break
                }
            t && (e.parent.node.style.position = e.parent.css.position), e.mode = -1
        }

        function f() {
            for (var e = D.length - 1; e >= 0; e--) d(D[e])
        }

        function h() {
            for (var e = D.length - 1; e >= 0; e--) p(D[e])
        }

        function m(e, t) {
            var n = e.node.style;
            switch (t) {
                case 0:
                    n.position = "absolute", n.left = e.offset.left + "px", n.right = e.offset.right + "px", n.top = e.offset.top + "px", n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;
                case 1:
                    n.position = "fixed", n.left = e.box.left + "px", n.right = e.box.right + "px", n.top = e.css.top, n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;
                case 2:
                    n.position = "absolute", n.left = e.offset.left + "px", n.right = e.offset.right + "px", n.top = "auto", n.bottom = 0, n.width = "auto", n.marginLeft = 0, n.marginRight = 0
            }
            e.mode = t
        }

        function v(e) {
            e.clone = document.createElement("div");
            var t = e.node.nextSibling || e.node,
                n = e.clone.style;
            n.height = e.height + "px", n.width = e.width + "px", n.marginTop = e.computed.marginTop, n.marginBottom = e.computed.marginBottom, n.marginLeft = e.computed.marginLeft, n.marginRight = e.computed.marginRight, n.padding = n.border = n.borderSpacing = 0, n.fontSize = "1em", n.position = "static", n.cssFloat = e.computed.cssFloat, e.node.parentNode.insertBefore(e.clone, t)
        }

        function g(e) {
            e.clone.parentNode.removeChild(e.clone), e.clone = void 0
        }

        function y(e) {
            var t = getComputedStyle(e),
                n = e.parentNode,
                i = getComputedStyle(n),
                o = e.style.position;
            e.style.position = "relative";
            var a = {
                    top: t.top,
                    marginTop: t.marginTop,
                    marginBottom: t.marginBottom,
                    marginLeft: t.marginLeft,
                    marginRight: t.marginRight,
                    cssFloat: t.cssFloat,
                    display: t.display
                },
                s = {
                    top: r(t.top),
                    marginBottom: r(t.marginBottom),
                    paddingLeft: r(t.paddingLeft),
                    paddingRight: r(t.paddingRight),
                    borderLeftWidth: r(t.borderLeftWidth),
                    borderRightWidth: r(t.borderRightWidth)
                };
            e.style.position = o;
            var l = {
                    position: e.style.position,
                    top: e.style.top,
                    bottom: e.style.bottom,
                    left: e.style.left,
                    right: e.style.right,
                    width: e.style.width,
                    marginTop: e.style.marginTop,
                    marginLeft: e.style.marginLeft,
                    marginRight: e.style.marginRight
                },
                c = b(e),
                u = b(n),
                d = {
                    node: n,
                    css: {
                        position: n.style.position
                    },
                    computed: {
                        position: i.position
                    },
                    numeric: {
                        borderLeftWidth: r(i.borderLeftWidth),
                        borderRightWidth: r(i.borderRightWidth),
                        borderTopWidth: r(i.borderTopWidth),
                        borderBottomWidth: r(i.borderBottomWidth)
                    }
                },
                p = {
                    node: e,
                    box: {
                        left: c.win.left,
                        right: B.clientWidth - c.win.right
                    },
                    offset: {
                        top: c.win.top - u.win.top - d.numeric.borderTopWidth,
                        left: c.win.left - u.win.left - d.numeric.borderLeftWidth,
                        right: -c.win.right + u.win.right - d.numeric.borderRightWidth
                    },
                    css: l,
                    isCell: "table-cell" == t.display,
                    computed: a,
                    numeric: s,
                    width: c.win.right - c.win.left,
                    height: c.win.bottom - c.win.top,
                    mode: -1,
                    inited: !1,
                    parent: d,
                    limit: {
                        start: c.doc.top - s.top,
                        end: u.doc.top + n.offsetHeight - d.numeric.borderBottomWidth - e.offsetHeight - s.top - s.marginBottom
                    }
                };
            return p
        }

        function A(e) {
            for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
            return t
        }

        function b(e) {
            var n = e.getBoundingClientRect();
            return {
                doc: {
                    top: n.top + t.pageYOffset,
                    left: n.left + t.pageXOffset
                },
                win: n
            }
        }

        function x() {
            M = setInterval(function() {
                !u() && T()
            }, 500)
        }

        function w() {
            clearInterval(M)
        }

        function C() {
            I && (document[F] ? w() : x())
        }

        function k() {
            I || (o(), f(), t.addEventListener("scroll", a), t.addEventListener("wheel", s), t.addEventListener("resize", T), t.addEventListener("orientationchange", T), e.addEventListener(P, C), x(), I = !0)
        }

        function T() {
            if (I) {
                h();
                for (var e = D.length - 1; e >= 0; e--) D[e] = y(D[e].node);
                f()
            }
        }

        function _() {
            t.removeEventListener("scroll", a), t.removeEventListener("wheel", s), t.removeEventListener("resize", T), t.removeEventListener("orientationchange", T), e.removeEventListener(P, C), w(), I = !1
        }

        function E() {
            _(), h()
        }

        function S() {
            for (E(); D.length;) D.pop()
        }

        function N(e) {
            for (var t = D.length - 1; t >= 0; t--)
                if (D[t].node === e) return;
            var n = y(e);
            D.push(n), I ? d(n) : k()
        }

        function L(e) {
            for (var t = D.length - 1; t >= 0; t--) D[t].node === e && (p(D[t]), D.splice(t, 1))
        }
        var j, M, D = [],
            I = !1,
            B = e.documentElement,
            H = function() {},
            F = "hidden",
            P = "visibilitychange";
        void 0 !== e.webkitHidden && (F = "webkitHidden", P = "webkitvisibilitychange"), t.getComputedStyle || n();
        for (var O = ["", "-webkit-", "-moz-", "-ms-"], z = document.createElement("div"), q = O.length - 1; q >= 0; q--) {
            try {
                z.style.position = O[q] + "sticky"
            } catch (R) {}
            "" != z.style.position && n()
        }
        o(), t.Stickyfill = {
            stickies: D,
            add: N,
            remove: L,
            init: k,
            rebuild: T,
            pause: _,
            stop: E,
            kill: S
        }
    }(document, window), window.jQuery && ! function(e) {
        e.fn.Stickyfill = function() {
            return this.each(function() {
                Stickyfill.add(this)
            }), this
        }
    }(window.jQuery);
var anchors = new AnchorJS,
    pJS = function(e, t) {
        var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
        this.pJS = {
            canvas: {
                el: n,
                w: n.offsetWidth,
                h: n.offsetHeight
            },
            particles: {
                number: {
                    value: 400,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#fff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#ff0000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 2,
                        opacity_min: 0,
                        sync: !1
                    }
                },
                size: {
                    value: 20,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 20,
                        size_min: 0,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 3e3,
                        rotateY: 3e3
                    }
                },
                array: []
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 80,
                        duration: .4
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                },
                mouse: {}
            },
            retina_detect: !1,
            fn: {
                interact: {},
                modes: {},
                vendors: {}
            },
            tmp: {}
        };
        var i = this.pJS;
        t && Object.deepExtend(i, t), i.tmp.obj = {
            size_value: i.particles.size.value,
            size_anim_speed: i.particles.size.anim.speed,
            move_speed: i.particles.move.speed,
            line_linked_distance: i.particles.line_linked.distance,
            line_linked_width: i.particles.line_linked.width,
            mode_grab_distance: i.interactivity.modes.grab.distance,
            mode_bubble_distance: i.interactivity.modes.bubble.distance,
            mode_bubble_size: i.interactivity.modes.bubble.size,
            mode_repulse_distance: i.interactivity.modes.repulse.distance
        }, i.fn.retinaInit = function() {
            i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
        }, i.fn.canvasInit = function() {
            i.canvas.ctx = i.canvas.el.getContext("2d")
        }, i.fn.canvasSize = function() {
            i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function() {
                i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
            })
        }, i.fn.canvasPaint = function() {
            i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
        }, i.fn.canvasClear = function() {
            i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
        }, i.fn.particle = function(e, t, n) {
            if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * i.canvas.w, this.y = n ? n.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof e.value)
                if (e.value instanceof Array) {
                    var r = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                    this.color.rgb = hexToRgb(r)
                } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b
                }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                    h: e.value.h,
                    s: e.value.s,
                    l: e.value.l
                });
            else "random" == e.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
            this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
            var o = {};
            switch (i.particles.move.direction) {
                case "top":
                    o = {
                        x: 0,
                        y: -1
                    };
                    break;
                case "top-right":
                    o = {
                        x: .5,
                        y: -.5
                    };
                    break;
                case "right":
                    o = {
                        x: 1,
                        y: -0
                    };
                    break;
                case "bottom-right":
                    o = {
                        x: .5,
                        y: .5
                    };
                    break;
                case "bottom":
                    o = {
                        x: 0,
                        y: 1
                    };
                    break;
                case "bottom-left":
                    o = {
                        x: -.5,
                        y: 1
                    };
                    break;
                case "left":
                    o = {
                        x: -1,
                        y: 0
                    };
                    break;
                case "top-left":
                    o = {
                        x: -.5,
                        y: -.5
                    };
                    break;
                default:
                    o = {
                        x: 0,
                        y: 0
                    }
            }
            i.particles.move.straight ? (this.vx = o.x, this.vy = o.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
            var a = i.particles.shape.type;
            if ("object" == typeof a) {
                if (a instanceof Array) {
                    var s = a[Math.floor(Math.random() * a.length)];
                    this.shape = s
                }
            } else this.shape = a;
            if ("image" == this.shape) {
                var l = i.particles.shape;
                this.img = {
                    src: l.image.src,
                    ratio: l.image.width / l.image.height
                }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
            }
        }, i.fn.particle.prototype.draw = function() {
            function e() {
                i.canvas.ctx.drawImage(a, t.x - n, t.y - n, 2 * n, 2 * n / t.img.ratio)
            }
            var t = this;
            if (void 0 != t.radius_bubble) var n = t.radius_bubble;
            else var n = t.radius;
            if (void 0 != t.opacity_bubble) var r = t.opacity_bubble;
            else var r = t.opacity;
            if (t.color.rgb) var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + r + ")";
            else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + r + ")";
            switch (i.canvas.ctx.fillStyle = o, i.canvas.ctx.beginPath(), t.shape) {
                case "circle":
                    i.canvas.ctx.arc(t.x, t.y, n, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    i.canvas.ctx.rect(t.x - n, t.y - n, 2 * n, 2 * n);
                    break;
                case "triangle":
                    i.fn.vendors.drawShape(i.canvas.ctx, t.x - n, t.y + n / 1.66, 2 * n, 3, 2);
                    break;
                case "polygon":
                    i.fn.vendors.drawShape(i.canvas.ctx, t.x - n / (i.particles.shape.polygon.nb_sides / 3.5), t.y - n / .76, 2.66 * n / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    i.fn.vendors.drawShape(i.canvas.ctx, t.x - 2 * n / (i.particles.shape.polygon.nb_sides / 4), t.y - n / 1.52, 2 * n * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    if ("svg" == i.tmp.img_type) var a = t.img.obj;
                    else var a = i.tmp.img_obj;
                    a && e()
            }
            i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
        }, i.fn.particlesCreate = function() {
            for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
        }, i.fn.particlesUpdate = function() {
            for (var e = 0; e < i.particles.array.length; e++) {
                var t = i.particles.array[e];
                if (i.particles.move.enable) {
                    var n = i.particles.move.speed / 2;
                    t.x += t.vx * n, t.y += t.vy * n
                }
                if (i.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= i.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= i.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), i.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= i.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= i.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == i.particles.move.out_mode) var r = {
                    x_left: t.radius,
                    x_right: i.canvas.w,
                    y_top: t.radius,
                    y_bottom: i.canvas.h
                };
                else var r = {
                    x_left: -t.radius,
                    x_right: i.canvas.w + t.radius,
                    y_top: -t.radius,
                    y_bottom: i.canvas.h + t.radius
                };
                switch (t.x - t.radius > i.canvas.w ? (t.x = r.x_left, t.y = Math.random() * i.canvas.h) : t.x + t.radius < 0 && (t.x = r.x_right, t.y = Math.random() * i.canvas.h), t.y - t.radius > i.canvas.h ? (t.y = r.y_top, t.x = Math.random() * i.canvas.w) : t.y + t.radius < 0 && (t.y = r.y_bottom, t.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                    case "bounce":
                        t.x + t.radius > i.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > i.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
                }
                if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(t), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(t), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(t), i.particles.line_linked.enable || i.particles.move.attract.enable)
                    for (var o = e + 1; o < i.particles.array.length; o++) {
                        var a = i.particles.array[o];
                        i.particles.line_linked.enable && i.fn.interact.linkParticles(t, a), i.particles.move.attract.enable && i.fn.interact.attractParticles(t, a), i.particles.move.bounce && i.fn.interact.bounceParticles(t, a)
                    }
            }
        }, i.fn.particlesDraw = function() {
            i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
            for (var e = 0; e < i.particles.array.length; e++) {
                var t = i.particles.array[e];
                t.draw()
            }
        }, i.fn.particlesEmpty = function() {
            i.particles.array = []
        }, i.fn.particlesRefresh = function() {
            cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
        }, i.fn.interact.linkParticles = function(e, t) {
            var n = e.x - t.x,
                r = e.y - t.y,
                o = Math.sqrt(n * n + r * r);
            if (o <= i.particles.line_linked.distance) {
                var a = i.particles.line_linked.opacity - o / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
                if (a > 0) {
                    var s = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + a + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(t.x, t.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }, i.fn.interact.attractParticles = function(e, t) {
            var n = e.x - t.x,
                r = e.y - t.y,
                o = Math.sqrt(n * n + r * r);
            if (o <= i.particles.line_linked.distance) {
                var a = n / (1e3 * i.particles.move.attract.rotateX),
                    s = r / (1e3 * i.particles.move.attract.rotateY);
                e.vx -= a, e.vy -= s, t.vx += a, t.vy += s
            }
        }, i.fn.interact.bounceParticles = function(e, t) {
            var n = e.x - t.x,
                i = e.y - t.y,
                r = Math.sqrt(n * n + i * i),
                o = e.radius + t.radius;
            o >= r && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
        }, i.fn.modes.pushParticles = function(e, t) {
            i.tmp.pushing = !0;
            for (var n = 0; e > n; n++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
                x: t ? t.pos_x : Math.random() * i.canvas.w,
                y: t ? t.pos_y : Math.random() * i.canvas.h
            })), n == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
        }, i.fn.modes.removeParticles = function(e) {
            i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw()
        }, i.fn.modes.bubbleParticle = function(e) {
            function t() {
                e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
            }

            function n(t, n, r, o, s) {
                if (t != n)
                    if (i.tmp.bubble_duration_end) {
                        if (void 0 != r) {
                            var l = o - d * (o - t) / i.interactivity.modes.bubble.duration,
                                c = t - l;
                            p = t + c, "size" == s && (e.radius_bubble = p), "opacity" == s && (e.opacity_bubble = p)
                        }
                    } else if (a <= i.interactivity.modes.bubble.distance) {
                    if (void 0 != r) var u = r;
                    else var u = o;
                    if (u != t) {
                        var p = o - d * (o - t) / i.interactivity.modes.bubble.duration;
                        "size" == s && (e.radius_bubble = p), "opacity" == s && (e.opacity_bubble = p)
                    }
                } else "size" == s && (e.radius_bubble = void 0), "opacity" == s && (e.opacity_bubble = void 0)
            }
            if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
                var r = e.x - i.interactivity.mouse.pos_x,
                    o = e.y - i.interactivity.mouse.pos_y,
                    a = Math.sqrt(r * r + o * o),
                    s = 1 - a / i.interactivity.modes.bubble.distance;
                if (a <= i.interactivity.modes.bubble.distance) {
                    if (s >= 0 && "mousemove" == i.interactivity.status) {
                        if (i.interactivity.modes.bubble.size != i.particles.size.value)
                            if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                                var l = e.radius + i.interactivity.modes.bubble.size * s;
                                l >= 0 && (e.radius_bubble = l)
                            } else {
                                var c = e.radius - i.interactivity.modes.bubble.size,
                                    l = e.radius - c * s;
                                l > 0 ? e.radius_bubble = l : e.radius_bubble = 0
                            }
                        if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                            if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                                var u = i.interactivity.modes.bubble.opacity * s;
                                u > e.opacity && u <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                            } else {
                                var u = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * s;
                                u < e.opacity && u >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                            }
                    }
                } else t();
                "mouseleave" == i.interactivity.status && t()
            } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
                if (i.tmp.bubble_clicking) {
                    var r = e.x - i.interactivity.mouse.click_pos_x,
                        o = e.y - i.interactivity.mouse.click_pos_y,
                        a = Math.sqrt(r * r + o * o),
                        d = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                    d > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), d > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
                }
                i.tmp.bubble_clicking && (n(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), n(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
            }
        }, i.fn.modes.repulseParticle = function(e) {
            function t() {
                var t = Math.atan2(p, d);
                if (e.vx = h * Math.cos(t), e.vy = h * Math.sin(t), "bounce" == i.particles.move.out_mode) {
                    var n = {
                        x: e.x + e.vx,
                        y: e.y + e.vy
                    };
                    n.x + e.radius > i.canvas.w ? e.vx = -e.vx : n.x - e.radius < 0 && (e.vx = -e.vx), n.y + e.radius > i.canvas.h ? e.vy = -e.vy : n.y - e.radius < 0 && (e.vy = -e.vy)
                }
            }
            if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
                var n = e.x - i.interactivity.mouse.pos_x,
                    r = e.y - i.interactivity.mouse.pos_y,
                    o = Math.sqrt(n * n + r * r),
                    a = {
                        x: n / o,
                        y: r / o
                    },
                    s = i.interactivity.modes.repulse.distance,
                    l = 100,
                    c = clamp(1 / s * (-1 * Math.pow(o / s, 2) + 1) * s * l, 0, 50),
                    u = {
                        x: e.x + a.x * c,
                        y: e.y + a.y * c
                    };
                "bounce" == i.particles.move.out_mode ? (u.x - e.radius > 0 && u.x + e.radius < i.canvas.w && (e.x = u.x), u.y - e.radius > 0 && u.y + e.radius < i.canvas.h && (e.y = u.y)) : (e.x = u.x, e.y = u.y)
            } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
                if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
                    var s = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                        d = i.interactivity.mouse.click_pos_x - e.x,
                        p = i.interactivity.mouse.click_pos_y - e.y,
                        f = d * d + p * p,
                        h = -s / f * 1;
                    s >= f && t()
                } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
        }, i.fn.modes.grabParticle = function(e) {
            if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
                var t = e.x - i.interactivity.mouse.pos_x,
                    n = e.y - i.interactivity.mouse.pos_y,
                    r = Math.sqrt(t * t + n * n);
                if (r <= i.interactivity.modes.grab.distance) {
                    var o = i.interactivity.modes.grab.line_linked.opacity - r / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                    if (o > 0) {
                        var a = i.particles.line_linked.color_rgb_line;
                        i.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                    }
                }
            }
        }, i.fn.vendors.eventsListeners = function() {
            "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
                if (i.interactivity.el == window) var t = e.clientX,
                    n = e.clientY;
                else var t = e.offsetX || e.clientX,
                    n = e.offsetY || e.clientY;
                i.interactivity.mouse.pos_x = t, i.interactivity.mouse.pos_y = n, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
            }), i.interactivity.el.addEventListener("mouseleave", function() {
                i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
            })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
                if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                    case "push":
                        i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                        break;
                    case "remove":
                        i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                        break;
                    case "bubble":
                        i.tmp.bubble_clicking = !0;
                        break;
                    case "repulse":
                        i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function() {
                            i.tmp.repulse_clicking = !1
                        }, 1e3 * i.interactivity.modes.repulse.duration)
                }
            })
        }, i.fn.vendors.densityAutoParticles = function() {
            if (i.particles.number.density.enable) {
                var e = i.canvas.el.width * i.canvas.el.height / 1e3;
                i.tmp.retina && (e /= 2 * i.canvas.pxratio);
                var t = e * i.particles.number.value / i.particles.number.density.value_area,
                    n = i.particles.array.length - t;
                0 > n ? i.fn.modes.pushParticles(Math.abs(n)) : i.fn.modes.removeParticles(n)
            }
        }, i.fn.vendors.checkOverlap = function(e, t) {
            for (var n = 0; n < i.particles.array.length; n++) {
                var r = i.particles.array[n],
                    o = e.x - r.x,
                    a = e.y - r.y,
                    s = Math.sqrt(o * o + a * a);
                s <= e.radius + r.radius && (e.x = t ? t.x : Math.random() * i.canvas.w, e.y = t ? t.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
            }
        }, i.fn.vendors.createSvgImg = function(e) {
            var t = i.tmp.source_svg,
                n = /#([0-9A-F]{3,6})/gi,
                r = t.replace(n, function() {
                    if (e.color.rgb) var t = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                    else var t = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                    return t
                }),
                o = new Blob([r], {
                    type: "image/svg+xml;charset=utf-8"
                }),
                a = window.URL || window.webkitURL || window,
                s = a.createObjectURL(o),
                l = new Image;
            l.addEventListener("load", function() {
                e.img.obj = l, e.img.loaded = !0, a.revokeObjectURL(s), i.tmp.count_svg++
            }), l.src = s
        }, i.fn.vendors.destroypJS = function() {
            cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), pJSDom = null
        }, i.fn.vendors.drawShape = function(e, t, n, i, r, o) {
            var a = r * o,
                s = r / o,
                l = 180 * (s - 2) / s,
                c = Math.PI - Math.PI * l / 180;
            e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
            for (var u = 0; a > u; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
            e.fill(), e.restore()
        }, i.fn.vendors.exportImg = function() {
            window.open(i.canvas.el.toDataURL("image/png"), "_blank")
        }, i.fn.vendors.loadImg = function(e) {
            if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
                if ("svg" == e) {
                    var t = new XMLHttpRequest;
                    t.open("GET", i.particles.shape.image.src), t.onreadystatechange = function(e) {
                        4 == t.readyState && (200 == t.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
                    }, t.send()
                } else {
                    var n = new Image;
                    n.addEventListener("load", function() {
                        i.tmp.img_obj = n, i.fn.vendors.checkBeforeDraw()
                    }), n.src = i.particles.shape.image.src
                }
            else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
        }, i.fn.vendors.draw = function() {
            "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
        }, i.fn.vendors.checkBeforeDraw = function() {
            "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())
        }, i.fn.vendors.init = function() {
            i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
        }, i.fn.vendors.start = function() {
            isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
        }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
    };
Object.deepExtend = function(e, t) {
    for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
    return e
}, window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function(e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var n = document.getElementById(e),
        i = "particles-js-canvas-el",
        r = n.getElementsByClassName(i);
    if (r.length)
        for (; r.length > 0;) n.removeChild(r[0]);
    var o = document.createElement("canvas");
    o.className = i, o.style.width = "100%", o.style.height = "100%";
    var a = document.getElementById(e).appendChild(o);
    null != a && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function(e, t, n) {
    var i = new XMLHttpRequest;
    i.open("GET", t), i.onreadystatechange = function(t) {
        if (4 == i.readyState)
            if (200 == i.status) {
                var r = JSON.parse(t.currentTarget.response);
                window.particlesJS(e, r), n && n()
            } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
    }, i.send()
};
