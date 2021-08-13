/*publicalbum.org v1.3.4 (c)pavex*/

(function () {
    var e,
        aa = aa || {},
        h = this;
    function ba(a) {
        return void 0 !== a;
    }
    function l(a) {
        return "string" == typeof a;
    }
    function ca() {}
    function da(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || ("number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))) return "array";
                if ("[object Function]" == c || ("undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))) return "function";
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b;
    }
    function ea(a) {
        return "array" == da(a);
    }
    function fa(a) {
        var b = typeof a;
        return ("object" == b && null != a) || "function" == b;
    }
    var ha = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
        ia = 0;
    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }
    function ka(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var f = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(f, d);
                return a.apply(b, f);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    }
    function m(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? (m = ja) : (m = ka);
        return m.apply(null, arguments);
    }
    var la =
        Date.now ||
        function () {
            return +new Date();
        };
    function n(a, b) {
        a = a.split(".");
        var c = h;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); ) !a.length && ba(b) ? (c[d] = b) : c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {});
    }
    function p(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.g = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.Ic = function (d, f, g) {
            for (var k = Array(arguments.length - 2), u = 2; u < arguments.length; u++) k[u - 2] = arguments[u];
            return b.prototype[f].apply(d, k);
        };
    }
    var ma;
    function na(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, na);
        else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    }
    p(na, Error);
    na.prototype.name = "CustomError";
    function oa(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, f = 0; f < d; f++) c += a[f] + (f < b.length ? b[f] : "%s");
        na.call(this, c + a[d]);
    }
    p(oa, na);
    oa.prototype.name = "AssertionError";
    function pa(a, b) {
        throw new oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    function qa(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a);
    }
    function ra(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1;
    }
    function q(a, b, c) {
        return null !== a && b in a ? a[b] : c;
    }
    function sa(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b;
    }
    var ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function ua(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < ta.length; g++) (c = ta[g]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    }
    var va = String.prototype.trim
        ? function (a) {
              return a.trim();
          }
        : function (a) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
          };
    function wa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
    function xa(a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase();
        });
    }
    function ya(a) {
        var b = l(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (c, d, f) {
            return d + f.toUpperCase();
        });
    }
    var za;
    a: {
        var Aa = h.navigator;
        if (Aa) {
            var Ba = Aa.userAgent;
            if (Ba) {
                za = Ba;
                break a;
            }
        }
        za = "";
    }
    function r(a) {
        return -1 != za.indexOf(a);
    }
    var Ca = Array.prototype.indexOf
            ? function (a, b) {
                  return Array.prototype.indexOf.call(a, b, void 0);
              }
            : function (a, b) {
                  if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
                  for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
                  return -1;
              },
        t = Array.prototype.forEach
            ? function (a, b, c) {
                  Array.prototype.forEach.call(a, b, c);
              }
            : function (a, b, c) {
                  for (var d = a.length, f = l(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a);
              },
        Da = Array.prototype.filter
            ? function (a, b) {
                  return Array.prototype.filter.call(a, b, void 0);
              }
            : function (a, b) {
                  for (var c = a.length, d = [], f = 0, g = l(a) ? a.split("") : a, k = 0; k < c; k++)
                      if (k in g) {
                          var u = g[k];
                          b.call(void 0, u, k, a) && (d[f++] = u);
                      }
                  return d;
              };
    function Ea(a) {
        a: {
            var b = Fa;
            for (var c = a.length, d = l(a) ? a.split("") : a, f = 0; f < c; f++)
                if (f in d && b.call(void 0, d[f], f, a)) {
                    b = f;
                    break a;
                }
            b = -1;
        }
        return 0 > b ? null : l(a) ? a.charAt(b) : a[b];
    }
    function Ga(a, b) {
        0 <= Ca(a, b) || a.push(b);
    }
    function Ha(a, b) {
        b = Ca(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c;
    }
    function Ia(a, b, c, d) {
        Array.prototype.splice.apply(a, Ja(arguments, 1));
    }
    function Ja(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    }
    function Ka() {
        0 != La && (Ma[this[ha] || (this[ha] = ++ia)] = this);
        this.ea = this.ea;
        this.Z = this.Z;
    }
    var La = 0,
        Ma = {};
    Ka.prototype.ea = !1;
    function Na(a) {
        if (!a.ea && ((a.ea = !0), a.N(), 0 != La)) {
            var b = a[ha] || (a[ha] = ++ia);
            if (0 != La && a.Z && 0 < a.Z.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete Ma[b];
        }
    }
    Ka.prototype.N = function () {
        if (this.Z) for (; this.Z.length; ) this.Z.shift()();
    };
    var Oa = "closure_listenable_" + ((1e6 * Math.random()) | 0);
    function Pa(a) {
        return !(!a || !a[Oa]);
    }
    var Qa = 0;
    function Ra(a, b, c, d, f) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.va = f;
        this.key = ++Qa;
        this.ca = this.sa = !1;
    }
    function Sa(a) {
        a.ca = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.va = null;
    }
    function Ta(a) {
        this.src = a;
        this.a = {};
        this.b = 0;
    }
    Ta.prototype.add = function (a, b, c, d, f) {
        var g = a.toString();
        a = this.a[g];
        a || ((a = this.a[g] = []), this.b++);
        var k = Ua(a, b, d, f);
        -1 < k ? ((b = a[k]), c || (b.sa = !1)) : ((b = new Ra(b, this.src, g, !!d, f)), (b.sa = c), a.push(b));
        return b;
    };
    function Va(a, b) {
        var c = b.type;
        c in a.a && Ha(a.a[c], b) && (Sa(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    }
    function Wa(a, b, c, d, f) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = Ua(a, c, d, f));
        return -1 < b ? a[b] : null;
    }
    function Xa(a, b) {
        var c = ba(b),
            d = c ? b.toString() : "",
            f = ba(void 0);
        return ra(a.a, function (g) {
            for (var k = 0; k < g.length; ++k) if (!((c && g[k].type != d) || (f && void 0 != g[k].capture))) return !0;
            return !1;
        });
    }
    function Ua(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.ca && g.listener == b && g.capture == !!c && g.va == d) return f;
        }
        return -1;
    }
    function v(a, b) {
        this.type = a;
        this.b = this.target = b;
        this.i = !1;
        this.hb = !0;
    }
    v.prototype.stopPropagation = function () {
        this.i = !0;
    };
    v.prototype.a = function () {
        this.hb = !1;
    };
    function Ya(a) {
        Ya[" "](a);
        return a;
    }
    Ya[" "] = ca;
    function Za(a, b) {
        var c = $a;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    }
    var ab = r("Opera"),
        w = r("Trident") || r("MSIE"),
        bb = r("Edge"),
        cb = r("Gecko") && !(-1 != za.toLowerCase().indexOf("webkit") && !r("Edge")) && !(r("Trident") || r("MSIE")) && !r("Edge"),
        db = -1 != za.toLowerCase().indexOf("webkit") && !r("Edge");
    function eb() {
        var a = h.document;
        return a ? a.documentMode : void 0;
    }
    var fb;
    a: {
        var gb = "",
            hb = (function () {
                var a = za;
                if (cb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (bb) return /Edge\/([\d\.]+)/.exec(a);
                if (w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (db) return /WebKit\/(\S+)/.exec(a);
                if (ab) return /(?:Version)[ \/]?(\S+)/.exec(a);
            })();
        hb && (gb = hb ? hb[1] : "");
        if (w) {
            var ib = eb();
            if (null != ib && ib > parseFloat(gb)) {
                fb = String(ib);
                break a;
            }
        }
        fb = gb;
    }
    var $a = {};
    function jb(a) {
        return Za(a, function () {
            for (var b = 0, c = va(String(fb)).split("."), d = va(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                var k = c[g] || "",
                    u = d[g] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == u[0].length) break;
                    b = wa(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || wa(0 == k[2].length, 0 == u[2].length) || wa(k[2], u[2]);
                    k = k[3];
                    u = u[3];
                } while (0 == b);
            }
            return 0 <= b;
        });
    }
    var kb;
    var lb = h.document;
    kb = lb && w ? eb() || ("CSS1Compat" == lb.compatMode ? parseInt(fb, 10) : 5) : void 0;
    var mb = !w || 9 <= Number(kb),
        nb = w && !jb("9"),
        ob = (function () {
            if (!h.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function () {
                        a = !0;
                    },
                });
            h.addEventListener("test", ca, b);
            h.removeEventListener("test", ca, b);
            return a;
        })();
    var pb =
        Object.freeze ||
        function (a) {
            return a;
        };
    function qb(a, b) {
        v.call(this, a ? a.type : "");
        this.relatedTarget = this.b = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.B = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.m = null;
        if (a) {
            var c = (this.type = a.type),
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;
            if ((b = a.relatedTarget)) {
                if (cb) {
                    a: {
                        try {
                            Ya(b.nodeName);
                            var f = !0;
                            break a;
                        } catch (g) {}
                        f = !1;
                    }
                    f || (b = null);
                }
            } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d
                ? ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX), (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY), (this.screenX = a.screenX || 0), (this.screenY = a.screenY || 0))
                : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX), (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY), (this.screenX = d.screenX || 0), (this.screenY = d.screenY || 0));
            this.button = a.button;
            this.B = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = l(a.pointerType) ? a.pointerType : rb[a.pointerType] || "";
            this.m = a;
            a.defaultPrevented && this.a();
        }
    }
    p(qb, v);
    var rb = pb({ 2: "touch", 3: "pen", 4: "mouse" });
    qb.prototype.stopPropagation = function () {
        qb.g.stopPropagation.call(this);
        this.m.stopPropagation ? this.m.stopPropagation() : (this.m.cancelBubble = !0);
    };
    qb.prototype.a = function () {
        qb.g.a.call(this);
        var a = this.m;
        if (a.preventDefault) a.preventDefault();
        else if (((a.returnValue = !1), nb))
            try {
                if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
            } catch (b) {}
    };
    var sb = "closure_lm_" + ((1e6 * Math.random()) | 0),
        tb = {},
        ub = 0;
    function x(a, b, c, d, f) {
        if (d && d.once) return vb(a, b, c, d, f);
        if (ea(b)) {
            for (var g = 0; g < b.length; g++) x(a, b[g], c, d, f);
            return null;
        }
        c = wb(c);
        return Pa(a) ? y(a, b, c, fa(d) ? !!d.capture : !!d, f) : xb(a, b, c, !1, d, f);
    }
    function xb(a, b, c, d, f, g) {
        if (!b) throw Error("Invalid event type");
        var k = fa(f) ? !!f.capture : !!f,
            u = yb(a);
        u || (a[sb] = u = new Ta(a));
        c = u.add(b, c, d, k, g);
        if (c.proxy) return c;
        d = zb();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) ob || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), d, f);
        else if (a.attachEvent) a.attachEvent(Ab(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        ub++;
        return c;
    }
    function zb() {
        var a = Bb,
            b = mb
                ? function (c) {
                      return a.call(b.src, b.listener, c);
                  }
                : function (c) {
                      c = a.call(b.src, b.listener, c);
                      if (!c) return c;
                  };
        return b;
    }
    function vb(a, b, c, d, f) {
        if (ea(b)) {
            for (var g = 0; g < b.length; g++) vb(a, b[g], c, d, f);
            return null;
        }
        c = wb(c);
        return Pa(a) ? a.O.add(String(b), c, !0, fa(d) ? !!d.capture : !!d, f) : xb(a, b, c, !0, d, f);
    }
    function Cb(a, b, c, d, f) {
        if (ea(b)) for (var g = 0; g < b.length; g++) Cb(a, b[g], c, d, f);
        else
            (d = fa(d) ? !!d.capture : !!d),
                (c = wb(c)),
                Pa(a)
                    ? ((a = a.O), (b = String(b).toString()), b in a.a && ((g = a.a[b]), (c = Ua(g, c, d, f)), -1 < c && (Sa(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete a.a[b], a.b--))))
                    : a && (a = yb(a)) && (c = Wa(a, b, c, d, f)) && Db(c);
    }
    function Db(a) {
        if ("number" != typeof a && a && !a.ca) {
            var b = a.src;
            if (Pa(b)) Va(b.O, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ab(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                ub--;
                (c = yb(b)) ? (Va(c, a), 0 == c.b && ((c.src = null), (b[sb] = null))) : Sa(a);
            }
        }
    }
    function Ab(a) {
        return a in tb ? tb[a] : (tb[a] = "on" + a);
    }
    function Eb(a, b, c, d) {
        var f = !0;
        if ((a = yb(a)))
            if ((b = a.a[b.toString()]))
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.ca && ((g = Fb(g, d)), (f = f && !1 !== g));
                }
        return f;
    }
    function Fb(a, b) {
        var c = a.listener,
            d = a.va || a.src;
        a.sa && Db(a);
        return c.call(d, b);
    }
    function Bb(a, b) {
        if (a.ca) return !0;
        if (!mb) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = h, d = 0; d < b.length; d++)
                        if (((c = c[b[d]]), null == c)) {
                            b = null;
                            break a;
                        }
                    b = c;
                }
            d = b;
            b = new qb(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a;
                        } catch (k) {
                            f = !0;
                        }
                    if (f || void 0 == d.returnValue) d.returnValue = !0;
                }
                d = [];
                for (f = b.b; f; f = f.parentNode) d.push(f);
                a = a.type;
                for (f = d.length - 1; !b.i && 0 <= f; f--) {
                    b.b = d[f];
                    var g = Eb(d[f], a, !0, b);
                    c = c && g;
                }
                for (f = 0; !b.i && f < d.length; f++) (b.b = d[f]), (g = Eb(d[f], a, !1, b)), (c = c && g);
            }
            return c;
        }
        return Fb(a, new qb(b, this));
    }
    function yb(a) {
        a = a[sb];
        return a instanceof Ta ? a : null;
    }
    var Gb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
    function wb(a) {
        if ("function" == da(a)) return a;
        a[Gb] ||
            (a[Gb] = function (b) {
                return a.handleEvent(b);
            });
        return a[Gb];
    }
    function z() {
        Ka.call(this);
        this.O = new Ta(this);
        this.kb = this;
        this.ra = null;
    }
    p(z, Ka);
    z.prototype[Oa] = !0;
    z.prototype.Ka = function (a) {
        this.ra = a;
    };
    z.prototype.removeEventListener = function (a, b, c, d) {
        Cb(this, a, b, c, d);
    };
    function A(a, b) {
        var c,
            d = a.ra;
        if (d) for (c = []; d; d = d.ra) c.push(d);
        a = a.kb;
        d = b.type || b;
        if (l(b)) b = new v(b, a);
        else if (b instanceof v) b.target = b.target || a;
        else {
            var f = b;
            b = new v(d, a);
            ua(b, f);
        }
        f = !0;
        if (c)
            for (var g = c.length - 1; !b.i && 0 <= g; g--) {
                var k = (b.b = c[g]);
                f = Hb(k, d, !0, b) && f;
            }
        b.i || ((k = b.b = a), (f = Hb(k, d, !0, b) && f), b.i || (f = Hb(k, d, !1, b) && f));
        if (c) for (g = 0; !b.i && g < c.length; g++) (k = b.b = c[g]), (f = Hb(k, d, !1, b) && f);
    }
    z.prototype.N = function () {
        z.g.N.call(this);
        if (this.O) {
            var a = this.O,
                b = 0,
                c;
            for (c in a.a) {
                for (var d = a.a[c], f = 0; f < d.length; f++) ++b, Sa(d[f]);
                delete a.a[c];
                a.b--;
            }
        }
        this.ra = null;
    };
    function y(a, b, c, d, f) {
        return a.O.add(String(b), c, !1, d, f);
    }
    function Hb(a, b, c, d) {
        b = a.O.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var k = b[g];
            if (k && !k.ca && k.capture == c) {
                var u = k.listener,
                    Ic = k.va || k.src;
                k.sa && Va(a.O, k);
                f = !1 !== u.call(Ic, d) && f;
            }
        }
        return f && 0 != d.hb;
    }
    function B(a, b) {
        return Xa(a.O, ba(b) ? String(b) : void 0);
    }
    function Ib(a, b) {
        z.call(this);
        this.a = a || 1;
        this.b = b || h;
        this.i = m(this.ub, this);
        this.m = la();
    }
    p(Ib, z);
    e = Ib.prototype;
    e.W = !1;
    e.U = null;
    function Jb(a, b) {
        a.a = b;
        a.U && a.W ? (a.stop(), a.start()) : a.U && a.stop();
    }
    e.ub = function () {
        if (this.W) {
            var a = la() - this.m;
            0 < a && a < 0.8 * this.a
                ? (this.U = this.b.setTimeout(this.i, this.a - a))
                : (this.U && (this.b.clearTimeout(this.U), (this.U = null)), A(this, "tick"), this.W && ((this.U = this.b.setTimeout(this.i, this.a)), (this.m = la())));
        }
    };
    e.start = function () {
        this.W = !0;
        this.U || ((this.U = this.b.setTimeout(this.i, this.a)), (this.m = la()));
    };
    e.stop = function () {
        this.W = !1;
        this.U && (this.b.clearTimeout(this.U), (this.U = null));
    };
    e.N = function () {
        Ib.g.N.call(this);
        this.stop();
        delete this.b;
    };
    function Kb(a, b, c) {
        if ("function" == da(a)) c && (a = m(a, c));
        else if (a && "function" == typeof a.handleEvent) a = m(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0);
    }
    function Lb(a, b) {
        this.a = ba(a) ? a : 0;
        this.b = ba(b) ? b : 0;
    }
    Lb.prototype.toString = function () {
        return "(" + this.a + ", " + this.b + ")";
    };
    Lb.prototype.ceil = function () {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this;
    };
    Lb.prototype.floor = function () {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this;
    };
    Lb.prototype.round = function () {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this;
    };
    function Mb(a, b, c, d) {
        this.m = a;
        this.i = b;
        this.a = c;
        this.b = d;
    }
    Mb.prototype.toString = function () {
        return "(" + this.m + "t, " + this.i + "r, " + this.a + "b, " + this.b + "l)";
    };
    Mb.prototype.ceil = function () {
        this.m = Math.ceil(this.m);
        this.i = Math.ceil(this.i);
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this;
    };
    Mb.prototype.floor = function () {
        this.m = Math.floor(this.m);
        this.i = Math.floor(this.i);
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this;
    };
    Mb.prototype.round = function () {
        this.m = Math.round(this.m);
        this.i = Math.round(this.i);
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this;
    };
    function C(a, b) {
        this.width = a;
        this.height = b;
    }
    e = C.prototype;
    e.toString = function () {
        return "(" + this.width + " x " + this.height + ")";
    };
    e.aspectRatio = function () {
        return this.width / this.height;
    };
    e.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    e.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    e.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    function Nb(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.width = c;
        this.height = d;
    }
    Nb.prototype.toString = function () {
        return "(" + this.a + ", " + this.b + " - " + this.width + "w x " + this.height + "h)";
    };
    Nb.prototype.ceil = function () {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    Nb.prototype.floor = function () {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    Nb.prototype.round = function () {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    var Ob = (!cb && !w) || (w && 9 <= Number(kb)) || (cb && jb("1.9.1")),
        Pb = w || ab || db;
    function Qb(a) {
        return a ? new Rb(Sb(a)) : ma || (ma = new Rb());
    }
    function Tb(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Ub(a, b);
    }
    function Ub(a, b) {
        var c;
        var d = document;
        b = b || d;
        if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll(a ? "." + a : "");
        if (a && b.getElementsByClassName) {
            var f = b.getElementsByClassName(a);
            return f;
        }
        f = b.getElementsByTagName("*");
        if (a) {
            var g = {};
            for (d = c = 0; (b = f[d]); d++) {
                var k = b.className,
                    u;
                if ((u = "function" == typeof k.split)) u = 0 <= Ca(k.split(/\s+/), a);
                u && (g[c++] = b);
            }
            g.length = c;
            return g;
        }
        return f;
    }
    function Vb(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new C(a.clientWidth, a.clientHeight);
    }
    function Wb(a) {
        for (var b; (b = a.firstChild); ) a.removeChild(b);
    }
    function Xb(a) {
        a && a.parentNode && a.parentNode.removeChild(a);
    }
    function Yb(a) {
        return Ob && void 0 != a.children
            ? a.children
            : Da(a.childNodes, function (b) {
                  return 1 == b.nodeType;
              });
    }
    function Zb(a) {
        var b;
        if (Pb && !(w && jb("9") && !jb("10") && h.SVGElement && a instanceof h.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return fa(b) && 1 == b.nodeType ? b : null;
    }
    function Sb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    }
    function $b(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
            a.firstChild.data = String(b);
        } else Wb(a), a.appendChild(Sb(a).createTextNode(String(b)));
    }
    function Rb(a) {
        this.a = a || h.document || document;
    }
    Rb.prototype.c = function () {
        return l(void 0) ? this.a.getElementById(void 0) : void 0;
    };
    function D(a, b) {
        return a.a.createElement(String(b));
    }
    Rb.prototype.appendChild = function (a, b) {
        a.appendChild(b);
    };
    function E(a, b, c) {
        if (l(b)) (b = ac(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var f = b[d],
                    g = ac(c, d);
                g && (c.style[g] = f);
            }
    }
    var bc = {};
    function ac(a, b) {
        var c = bc[b];
        if (!c) {
            var d = xa(b);
            c = d;
            void 0 === a.style[d] && ((d = (db ? "Webkit" : cb ? "Moz" : w ? "ms" : ab ? "O" : null) + ya(d)), void 0 !== a.style[d] && (c = d));
            bc[b] = c;
        }
        return c;
    }
    function cc(a, b) {
        var c = Sb(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    }
    function dc(a, b, c) {
        if (b instanceof Lb) {
            var d = b.a;
            b = b.b;
        } else (d = b), (b = c);
        a.style.left = ec(d, !1);
        a.style.top = ec(b, !1);
    }
    function fc(a, b, c) {
        if (b instanceof C) (c = b.height), (b = b.width);
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = ec(b, !0);
        a.style.height = ec(c, !0);
    }
    function ec(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a;
    }
    function F(a, b) {
        a = a.style;
        "opacity" in a ? (a.opacity = b) : "MozOpacity" in a ? (a.MozOpacity = b) : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")");
    }
    function gc(a, b) {
        a.style.display = b ? "" : "none";
    }
    function hc(a) {
        var b = Sb(a),
            c = w && a.currentStyle;
        if (c && "CSS1Compat" == Qb(b).a.compatMode && "auto" != c.width && "auto" != c.height && !c.boxSizing) return (b = ic(a, c.width, "width", "pixelWidth")), (a = ic(a, c.height, "height", "pixelHeight")), new C(b, a);
        c = new C(a.offsetWidth, a.offsetHeight);
        if (w) {
            b = jc(a, "paddingLeft");
            var d = jc(a, "paddingRight"),
                f = jc(a, "paddingTop"),
                g = jc(a, "paddingBottom");
            b = new Mb(f, d, g, b);
        } else (b = cc(a, "paddingLeft")), (d = cc(a, "paddingRight")), (f = cc(a, "paddingTop")), (g = cc(a, "paddingBottom")), (b = new Mb(parseFloat(f), parseFloat(d), parseFloat(g), parseFloat(b)));
        !w || 9 <= Number(kb)
            ? ((d = cc(a, "borderLeftWidth")), (f = cc(a, "borderRightWidth")), (g = cc(a, "borderTopWidth")), (a = cc(a, "borderBottomWidth")), (a = new Mb(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(d))))
            : ((d = kc(a, "borderLeft")), (f = kc(a, "borderRight")), (g = kc(a, "borderTop")), (a = kc(a, "borderBottom")), (a = new Mb(g, f, a, d)));
        return new C(c.width - a.b - b.b - b.i - a.i, c.height - a.m - b.m - b.a - a.a);
    }
    function ic(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var f = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = f;
        a.runtimeStyle[c] = g;
        return +b;
    }
    function jc(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? ic(a, b, "left", "pixelLeft") : 0;
    }
    var lc = { thin: 2, medium: 4, thick: 6 };
    function kc(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in lc ? lc[b] : ic(a, b, "left", "pixelLeft");
    }
    function mc(a) {
        Ka.call(this);
        this.b = a;
        this.a = {};
    }
    p(mc, Ka);
    var nc = [];
    function G(a, b, c, d) {
        ea(c) || (c && (nc[0] = c.toString()), (c = nc));
        for (var f = 0; f < c.length; f++) {
            var g = x(b, c[f], d || a.handleEvent, !1, a.b || a);
            if (!g) break;
            a.a[g.key] = g;
        }
    }
    function oc(a, b, c, d, f, g) {
        if (ea(c)) for (var k = 0; k < c.length; k++) oc(a, b, c[k], d, f, g);
        else
            (d = d || a.handleEvent),
                (f = fa(f) ? !!f.capture : !!f),
                (g = g || a.b || a),
                (d = wb(d)),
                (f = !!f),
                (c = Pa(b) ? Wa(b.O, String(c), d, f, g) : b ? ((b = yb(b)) ? Wa(b, c, d, f, g) : null) : null),
                c && (Db(c), delete a.a[c.key]);
    }
    function pc(a) {
        qa(
            a.a,
            function (b, c) {
                this.a.hasOwnProperty(c) && Db(b);
            },
            a
        );
        a.a = {};
    }
    mc.prototype.N = function () {
        mc.g.N.call(this);
        pc(this);
    };
    mc.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function qc() {}
    qc.a = void 0;
    qc.b = function () {
        return qc.a ? qc.a : (qc.a = new qc());
    };
    qc.prototype.a = 0;
    function rc(a) {
        z.call(this);
        this.i = a || Qb();
        this.qa = null;
        this.H = !1;
        this.m = null;
        this.P = void 0;
        this.I = this.B = this.F = null;
        this.ga = !1;
    }
    p(rc, z);
    e = rc.prototype;
    e.wb = qc.b();
    function sc(a) {
        return a.qa || (a.qa = ":" + (a.wb.a++).toString(36));
    }
    e.c = function () {
        return this.m;
    };
    function H(a) {
        a.P || (a.P = new mc(a));
        return a.P;
    }
    function tc(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        var c;
        if ((c = b && a.F && a.qa)) {
            c = a.F;
            var d = a.qa;
            c = c.I && d ? q(c.I, d) || null : null;
        }
        if (c && a.F != b) throw Error("Unable to set parent component");
        a.F = b;
        rc.g.Ka.call(a, b);
    }
    e.Ka = function (a) {
        if (this.F && this.F != a) throw Error("Method not supported");
        rc.g.Ka.call(this, a);
    };
    e.w = function () {
        this.m = D(this.i, "DIV");
    };
    function I(a, b, c) {
        if (a.H) throw Error("Component already rendered");
        a.m || a.w();
        b ? b.insertBefore(a.m, c || null) : a.i.a.body.appendChild(a.m);
        (a.F && !a.F.H) || a.A();
    }
    e.$ = function (a) {
        if (this.H) throw Error("Component already rendered");
        if (a) {
            this.ga = !0;
            var b = Sb(a);
            (this.i && this.i.a == b) || (this.i = Qb(a));
            this.D(a);
            this.A();
        } else throw Error("Invalid element to decorate");
    };
    e.D = function (a) {
        this.m = a;
    };
    e.A = function () {
        this.H = !0;
        J(this, function (a) {
            !a.H && a.c() && a.A();
        });
    };
    e.ha = function () {
        J(this, function (a) {
            a.H && a.ha();
        });
        this.P && pc(this.P);
        this.H = !1;
    };
    e.N = function () {
        this.H && this.ha();
        this.P && (Na(this.P), delete this.P);
        J(this, function (a) {
            Na(a);
        });
        !this.ga && this.m && Xb(this.m);
        this.F = this.m = this.I = this.B = null;
        rc.g.N.call(this);
    };
    e.T = function (a, b) {
        var c = K(this);
        if (a.H && (b || !this.H)) throw Error("Component already rendered");
        if (0 > c || c > K(this)) throw Error("Child component index out of bounds");
        (this.I && this.B) || ((this.I = {}), (this.B = []));
        if (a.F == this) {
            var d = sc(a);
            this.I[d] = a;
            Ha(this.B, a);
        } else {
            d = this.I;
            var f = sc(a);
            if (null !== d && f in d) throw Error('The object already contains the key "' + f + '"');
            d[f] = a;
        }
        tc(a, this);
        Ia(this.B, c, 0, a);
        a.H && this.H && a.F == this
            ? ((b = this.ia()), (c = b.childNodes[c] || null), c != a.c() && b.insertBefore(a.c(), c))
            : b
            ? (this.m || this.w(), (c = L(this, c + 1)), I(a, this.ia(), c ? c.m : null))
            : this.H && !a.H && a.m && a.m.parentNode && 1 == a.m.parentNode.nodeType && a.A();
    };
    e.ia = function () {
        return this.m;
    };
    function K(a) {
        return a.B ? a.B.length : 0;
    }
    function L(a, b) {
        return a.B ? a.B[b] || null : null;
    }
    function J(a, b, c) {
        a.B && t(a.B, b, c);
    }
    e.removeChild = function (a, b) {
        if (a) {
            var c = l(a) ? a : sc(a);
            a = this.I && c ? q(this.I, c) || null : null;
            if (c && a) {
                var d = this.I;
                c in d && delete d[c];
                Ha(this.B, a);
                b && (a.ha(), a.m && Xb(a.m));
                tc(a, null);
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a;
    };
    function uc(a) {
        for (var b = []; a.B && 0 != a.B.length; ) b.push(a.removeChild(L(a, 0), !0));
        return b;
    }
    function M(a) {
        rc.call(this, a);
        this.Aa = !0;
    }
    p(M, rc);
    e = M.prototype;
    e.M = function (a) {
        this.Aa = a;
    };
    function N(a) {
        a.M(!1);
    }
    function O(a) {
        return a.H && a.Aa;
    }
    e.T = function (a, b) {
        a.M(this.Aa);
        M.g.T.call(this, a, b);
    };
    e.update = function () {
        var a = this.c();
        a.tabIndex = -1;
        a.removeAttribute("tabIndex");
    };
    e.v = function () {
        return "jx";
    };
    e.A = function () {
        M.g.A.call(this);
        O(this) && this.update();
    };
    var vc = /#(.)(.)(.)/;
    function wc(a, b, c) {
        a = Number(a);
        b = Number(b);
        c = Number(c);
        if (a != (a & 255) || b != (b & 255) || c != (c & 255)) throw Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color');
        return "#" + xc(a.toString(16)) + xc(b.toString(16)) + xc(c.toString(16));
    }
    function yc(a) {
        return wc(a[0], a[1], a[2]);
    }
    var zc = /^#(?:[0-9a-f]{3}){1,2}$/i;
    function xc(a) {
        return 1 == a.length ? "0" + a : a;
    }
    function Ac(a) {
        M.call(this, a);
        this.h = this.u = this.j = null;
        this.G = !1;
        this.f = [];
        this.K = this.R = this.V = this.J = !0;
        this.o = this.l = this.a = this.s = null;
        this.C = Bc;
    }
    p(Ac, M);
    var Bc = 500;
    function Cc(a, b) {
        if (l(b)) {
            var c = new Dc();
            c.src = b;
            b = c;
        }
        Ga(a.f, b);
        O(a) && a.update();
    }
    function Ec(a, b, c) {
        a = Math.round(Math.sqrt(Math.pow(a.j.width, 2) + Math.pow(a.j.height, 2)) / Math.sqrt(Math.pow(a.h.width, 2) + Math.pow(a.h.height, 2)));
        E(b, "filter", c ? "blur(" + a + "px)" : "none");
    }
    e = Ac.prototype;
    e.Bc = function () {
        F(this.a, 1);
        this.S = setTimeout(m(this.Ac, this), 1.25 * this.C);
    };
    e.Ac = function () {
        clearTimeout(this.S);
        this.S = null;
        E(this.s, Fc);
        E(this.s, Gc);
        Ec(this, this.s, this.G);
        null !== this.o && Hc(this, this.o);
        this.o = null;
    };
    function Hc(a, b) {
        if (a.l != b) {
            var c = a.f[b] ? a.f[b] : void 0;
            c &&
                (a.a
                    ? (a.o = b)
                    : ((a.C = Bc * (null === a.l ? 0.3 : 1)),
                      (a.l = b),
                      (a.o = null),
                      a.a || ((a.a = D(a.i, "IMG")), a.b.appendChild(a.a), E(a.a, Jc), (b = a.C), E(a.a, "transition", 0 < b ? "opacity " + 0.001 * b + "s ease" : "none"), x(a.a, "load", a.Db, !1, a)),
                      E(a.a, "z-index", 2),
                      F(a.a, 0),
                      (a.a.src = c.src)));
        }
    }
    function Kc(a) {
        var b = hc(a.c()),
            c = a.u ? a.u : a.h;
        c = new Nb(0, 0, c.width, c.height);
        var d = b.width / b.height,
            f = a.J ? c.width / c.height : d,
            g = (a.R || !(null !== a.u || 1 == a.f.length)) && c.width < b.width && c.height < b.height,
            k = a.K;
        if ((a.V && (c.width > b.width || c.height > b.height)) || g || k) (d = d > f), (!k && d) || (k && !d) ? ((c.width = b.height * f), (c.height = b.height)) : ((c.width = b.width), (c.height = b.width / f));
        c.a = Math.round((b.width - c.width) / 2);
        c.b = Math.round((b.height - c.height) / 2);
        dc(a.b, c.a, c.b);
        fc(a.b, c.width, c.height);
    }
    function Lc(a) {
        null !== a.l && null !== a.h && Kc(a);
        if (0 < a.f.length)
            if (1 < a.f.length) {
                var b = a.j.width,
                    c = a.j.height,
                    d = 0;
                for (d in a.f) {
                    d = Number(d);
                    var f = a.f[d];
                    if (f.width >= b || f.height > c) break;
                }
                Hc(a, d);
            } else null === a.l && Hc(a, 0);
    }
    e.update = function () {
        Ac.g.update.call(this);
        this.j = hc(this.c());
        Lc(this);
        E(this.c(), "background-color", "none");
    };
    e.v = function () {
        return "jx-imageset";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        Ac.g.w.call(this);
        var a = this.c(),
            b = this.i;
        this.b = D(b, "DIV");
        a.appendChild(this.b);
        this.s = D(b, "IMG");
        this.b.appendChild(this.s);
        a = this.c();
        P(a, this.v());
        E(a, Mc);
        E(a, Gc);
        E(this.b, Nc);
    };
    e.Db = function () {
        var a = this.a;
        this.h = new C(a.naturalWidth, a.naturalHeight);
        this.G = 128 > Math.sqrt(Math.pow(this.h.width, 2) + Math.pow(this.h.height, 2));
        Kc(this);
        E(a, Gc);
        Ec(this, a, this.G);
        window.requestAnimationFrame(m(this.Bc, this));
    };
    var Mc = { overflow: "hidden" },
        Gc = { width: "100%", height: "100%" },
        Nc = { position: "relative", overflow: "hidden" },
        Fc = { position: "absolute", "z-index": 1 },
        Jc = { position: "absolute", "z-index": 2 };
    function Dc() {
        this.height = this.width = 0;
    }
    function Oc(a) {
        a = String(a);
        if (
            /^\s*$/.test(a)
                ? 0
                : /^[\],:{}\s\u2028\u2029]*$/.test(
                      a
                          .replace(/\\["\\\/bfnrtu]/g, "@")
                          .replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]")
                          .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
                  )
        )
            try {
                return eval("(" + a + ")");
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function Pc(a, b) {
        this.b = {};
        this.a = [];
        this.i = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
        } else if (a)
            if (a instanceof Pc) for (c = a.Fa(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else for (d in a) this.set(d, a[d]);
    }
    Pc.prototype.Fa = function () {
        if (this.i != this.a.length) {
            for (var a = 0, b = 0; a < this.a.length; ) {
                var c = this.a[a];
                Object.prototype.hasOwnProperty.call(this.b, c) && (this.a[b++] = c);
                a++;
            }
            this.a.length = b;
        }
        if (this.i != this.a.length) {
            var d = {};
            for (b = a = 0; a < this.a.length; ) (c = this.a[a]), Object.prototype.hasOwnProperty.call(d, c) || ((this.a[b++] = c), (d[c] = 1)), a++;
            this.a.length = b;
        }
        return this.a.concat();
    };
    Pc.prototype.get = function (a, b) {
        return Object.prototype.hasOwnProperty.call(this.b, a) ? this.b[a] : b;
    };
    Pc.prototype.set = function (a, b) {
        Object.prototype.hasOwnProperty.call(this.b, a) || (this.i++, this.a.push(a));
        this.b[a] = b;
    };
    Pc.prototype.forEach = function (a, b) {
        for (var c = this.Fa(), d = 0; d < c.length; d++) {
            var f = c[d],
                g = this.get(f);
            a.call(b, g, f, this);
        }
    };
    var Qc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Rc() {}
    Rc.prototype.a = null;
    function Sc(a) {
        var b;
        (b = a.a) || ((b = {}), Tc(a) && ((b[0] = !0), (b[1] = !0)), (b = a.a = b));
        return b;
    }
    var Uc;
    function Vc() {}
    p(Vc, Rc);
    function Wc(a) {
        return (a = Tc(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    }
    function Tc(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), (a.b = d);
                } catch (f) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b;
    }
    Uc = new Vc();
    function Xc(a, b, c) {
        this.reset(a, b, c, void 0, void 0);
    }
    Xc.prototype.a = null;
    var Yc = 0;
    Xc.prototype.reset = function (a, b, c, d, f) {
        "number" == typeof f || Yc++;
        d || la();
        delete this.a;
    };
    function Zc(a) {
        this.m = a;
        this.b = this.i = this.a = null;
    }
    function $c(a, b) {
        this.name = a;
        this.value = b;
    }
    $c.prototype.toString = function () {
        return this.name;
    };
    var ad = new $c("SEVERE", 1e3),
        bd = new $c("CONFIG", 700),
        cd = new $c("FINE", 500);
    function dd(a) {
        if (a.i) return a.i;
        if (a.a) return dd(a.a);
        pa("Root logger has no level set.");
        return null;
    }
    Zc.prototype.log = function (a, b, c) {
        if (a.value >= dd(this).value) for ("function" == da(b) && (b = b()), a = new Xc(a, String(b), this.m), c && (a.a = c), c = this; c; ) c = c.a;
    };
    var ed = {},
        fd = null;
    function gd(a) {
        fd || ((fd = new Zc("")), (ed[""] = fd), (fd.i = bd));
        var b;
        if (!(b = ed[a])) {
            b = new Zc(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = gd(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            ed[a] = b;
        }
        return b;
    }
    function Q(a, b) {
        a && a.log(cd, b, void 0);
    }
    function hd(a) {
        z.call(this);
        this.headers = new Pc();
        this.l = a || null;
        this.i = !1;
        this.L = this.a = null;
        this.B = this.s = this.I = "";
        this.m = this.o = this.f = this.P = !1;
        this.F = 0;
        this.h = null;
        this.u = id;
        this.j = this.C = !1;
    }
    p(hd, z);
    var id = "",
        jd = hd.prototype,
        kd = gd("goog.net.XhrIo");
    jd.b = kd;
    var ld = /^https?$/i,
        md = ["POST", "PUT"],
        nd = [];
    function od(a, b) {
        var c = new hd();
        nd.push(c);
        b && y(c, "complete", b);
        c.O.add("ready", c.nb, !0, void 0, void 0);
        pd(c, a);
    }
    e = hd.prototype;
    e.nb = function () {
        Na(this);
        Ha(nd, this);
    };
    function pd(a, b) {
        if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.I + "; newUri=" + b);
        a.I = b;
        a.B = "";
        a.s = "GET";
        a.P = !1;
        a.i = !0;
        a.a = a.l ? Wc(a.l) : Wc(Uc);
        a.L = a.l ? Sc(a.l) : Sc(Uc);
        a.a.onreadystatechange = m(a.$a, a);
        try {
            Q(a.b, qd(a, "Opening Xhr")), (a.o = !0), a.a.open("GET", String(b), !0), (a.o = !1);
        } catch (f) {
            Q(a.b, qd(a, "Error opening Xhr: " + f.message));
            rd(a, f);
            return;
        }
        b = new Pc(a.headers);
        var c = Ea(b.Fa()),
            d = h.FormData && !1;
        !(0 <= Ca(md, "GET")) || c || d || b.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b.forEach(function (f, g) {
            this.a.setRequestHeader(g, f);
        }, a);
        a.u && (a.a.responseType = a.u);
        "withCredentials" in a.a && a.a.withCredentials !== a.C && (a.a.withCredentials = a.C);
        try {
            sd(a),
                0 < a.F && ((a.j = td(a.a)), Q(a.b, qd(a, "Will abort after " + a.F + "ms if incomplete, xhr2 " + a.j)), a.j ? ((a.a.timeout = a.F), (a.a.ontimeout = m(a.ib, a))) : (a.h = Kb(a.ib, a.F, a))),
                Q(a.b, qd(a, "Sending request")),
                (a.f = !0),
                a.a.send(""),
                (a.f = !1);
        } catch (f) {
            Q(a.b, qd(a, "Send error: " + f.message)), rd(a, f);
        }
    }
    function td(a) {
        return w && jb(9) && "number" == typeof a.timeout && ba(a.ontimeout);
    }
    function Fa(a) {
        return "content-type" == a.toLowerCase();
    }
    e.ib = function () {
        "undefined" != typeof aa && this.a && ((this.B = "Timed out after " + this.F + "ms, aborting"), Q(this.b, qd(this, this.B)), A(this, "timeout"), this.abort(8));
    };
    function rd(a, b) {
        a.i = !1;
        a.a && ((a.m = !0), a.a.abort(), (a.m = !1));
        a.B = b;
        ud(a);
        vd(a);
    }
    function ud(a) {
        a.P || ((a.P = !0), A(a, "complete"), A(a, "error"));
    }
    e.abort = function () {
        this.a && this.i && (Q(this.b, qd(this, "Aborting")), (this.i = !1), (this.m = !0), this.a.abort(), (this.m = !1), A(this, "complete"), A(this, "abort"), vd(this));
    };
    e.N = function () {
        this.a && (this.i && ((this.i = !1), (this.m = !0), this.a.abort(), (this.m = !1)), vd(this, !0));
        hd.g.N.call(this);
    };
    e.$a = function () {
        this.ea || (this.o || this.f || this.m ? wd(this) : this.Eb());
    };
    e.Eb = function () {
        wd(this);
    };
    function wd(a) {
        if (a.i && "undefined" != typeof aa)
            if (a.L[1] && 4 == xd(a) && 2 == yd(a)) Q(a.b, qd(a, "Local request error detected and ignored"));
            else if (a.f && 4 == xd(a)) Kb(a.$a, 0, a);
            else if ((A(a, "readystatechange"), 4 == xd(a))) {
                Q(a.b, qd(a, "Request complete"));
                a.i = !1;
                try {
                    var b = yd(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1;
                    }
                    var d;
                    if (!(d = c)) {
                        var f;
                        if ((f = 0 === b)) {
                            var g = String(a.I).match(Qc)[1] || null;
                            if (!g && h.self && h.self.location) {
                                var k = h.self.location.protocol;
                                g = k.substr(0, k.length - 1);
                            }
                            f = !ld.test(g ? g.toLowerCase() : "");
                        }
                        d = f;
                    }
                    if (d) A(a, "complete"), A(a, "success");
                    else {
                        try {
                            var u = 2 < xd(a) ? a.a.statusText : "";
                        } catch (Ic) {
                            Q(a.b, "Can not get status: " + Ic.message), (u = "");
                        }
                        a.B = u + " [" + yd(a) + "]";
                        ud(a);
                    }
                } finally {
                    vd(a);
                }
            }
    }
    function vd(a, b) {
        if (a.a) {
            sd(a);
            var c = a.a,
                d = a.L[0] ? ca : null;
            a.a = null;
            a.L = null;
            b || A(a, "ready");
            try {
                c.onreadystatechange = d;
            } catch (f) {
                (a = a.b) && a.log(ad, "Problem encountered resetting onreadystatechange: " + f.message, void 0);
            }
        }
    }
    function sd(a) {
        a.a && a.j && (a.a.ontimeout = null);
        a.h && (h.clearTimeout(a.h), (a.h = null));
    }
    function xd(a) {
        return a.a ? a.a.readyState : 0;
    }
    function yd(a) {
        try {
            return 2 < xd(a) ? a.a.status : -1;
        } catch (b) {
            return -1;
        }
    }
    function qd(a, b) {
        return b + " [" + a.s + " " + a.I + " " + yd(a) + "]";
    }
    function R(a) {
        M.call(this, a);
        this.fa = !0;
        this.Ba = 0;
        this.J = new Ib();
        Jb(this.J, zd);
    }
    p(R, M);
    var zd = 1e3;
    e = R.prototype;
    e.isVisible = function () {
        return this.fa;
    };
    function Ad(a) {
        a.Ba = 0;
        a.J.W || ((a.fa = !0), a.za(), A(a, "show"), a.J.start());
    }
    e.M = function (a) {
        R.g.M.call(this, a);
        J(this, function (b) {
            b.M(a);
        });
    };
    e.za = function () {
        var a = this.c();
        this.ga
            ? ((a = Yb(a)),
              t(
                  a,
                  function (b) {
                      F(b, !0 === this.fa ? 1 : 0);
                  },
                  this
              ))
            : F(a, !0 === this.fa ? 1 : 0);
    };
    e.update = function () {
        R.g.update.call(this);
        this.za();
        J(this, function (a) {
            a.update();
        });
    };
    e.D = function (a) {
        R.g.D.call(this, a);
        this.ga || E(this.c(), Bd);
    };
    e.w = function () {
        R.g.w.call(this);
        this.ga || E(this.c(), Bd);
    };
    e.Gb = function () {
        Ad(this);
    };
    e.Fb = function () {
        this.Ba++;
        3 < this.Ba && ((this.fa = !1), this.za(), A(this, "hide"), this.J.W && this.J.stop());
    };
    e.A = function () {
        R.g.A.call(this);
        G(H(this), this.c(), "mousemove", this.Gb);
        x(this.J, "tick", this.Fb, !1, this);
        Ad(this);
    };
    var Bd = { transition: "opacity 0.125s linear" };
    function P(a, b) {
        if (a.classList) a.classList.add(b);
        else {
            if (a.classList) var c = !a.classList.contains(b);
            else a.classList ? (c = a.classList) : ((c = a.className), (c = (l(c) && c.match(/\S+/g)) || [])), (c = !(0 <= Ca(c, b)));
            c && (a.className += 0 < a.className.length ? " " + b : b);
        }
    }
    function Cd(a, b) {
        M.call(this, b);
        this.b = 0;
        this.h = 100;
        this.a = 50;
        this.j = !1;
    }
    p(Cd, M);
    function Dd(a) {
        var b = a.h - a.b;
        a.a = Math.min(a.h, Math.max(a.b, a.a));
        var c = (100 * a.a) / b;
        b = (a.a / b) * a.l.width;
        var d = a.l.width - b;
        E(a.s, "width", b + "px");
        E(a.u, "width", d + "px");
        dc(a.o, c + "%");
    }
    e = Cd.prototype;
    e.update = function () {
        Cd.g.update.call(this);
        this.l = hc(this.c());
        Dd(this);
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.v = function () {
        return "jx-range-slider";
    };
    e.w = function () {
        Cd.g.w.call(this);
        var a = this.i,
            b = this.c();
        this.s = D(a, "DIV");
        b.appendChild(this.s);
        this.u = D(a, "DIV");
        b.appendChild(this.u);
        this.o = D(a, "DIV");
        b.appendChild(this.o);
        a = this.c();
        P(a, this.v());
        E(a, Ed);
        E(this.s, Fd);
        E(this.u, Gd);
        E(this.o, Hd);
    };
    e.mc = function (a) {
        this.j = !0;
        this.f = this.c().offsetLeft;
        this.a = this.b + ((this.h - this.b) * (a.clientX - this.f)) / this.l.width;
        A(this, Id);
        Dd(this);
    };
    e.nc = function (a) {
        this.j && ((this.a = this.b + ((this.h - this.b) * (a.clientX - this.f)) / this.l.width), A(this, Id), Dd(this));
    };
    e.Cb = function () {
        this.j && (this.j = !1);
    };
    e.A = function () {
        Cd.g.A.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.mc);
        var b = Zb(this.c());
        G(a, b, "mousemove", this.nc);
        G(a, b, "mouseup", this.Cb);
    };
    var Ed = { position: "relative", height: "24px", "user-select": "none" },
        Fd = { position: "absolute", left: 0, top: "8px", bottom: "8px", "background-color": "rgba(255, 255, 255, 0.6)", "border-top-left-radius": "2px", "border-bottom-left-radius": "2px", cursor: "pointer" },
        Gd = { position: "absolute", right: 0, top: "8px", bottom: "8px", "background-color": "rgba(255, 255, 255, 0.2)", "border-top-right-radius": "2px", "border-bottom-right-radius": "2px", cursor: "pointer" },
        Hd = { position: "absolute", width: "16px", height: "16px", top: "4px", "margin-left": "-8px", "border-radius": "50%", "background-color": "#FFFFFF", cursor: "pointer" },
        Id = "timechange";
    function Jd(a) {
        M.call(this, a);
        this.b = new Cd();
        this.u = !0;
        this.s = new Ib(250);
        this.f = Kd;
        this.o = 0;
        this.h = new Ib();
        Jb(this.h, Ld);
    }
    p(Jd, M);
    var Ld = 1200,
        Kd = 0;
    e = Jd.prototype;
    e.play = function () {
        2 == this.f && (this.a.play(), this.s.start());
    };
    e.pause = function () {
        this.a.pause();
        this.s.stop();
    };
    e.reset = function () {
        this.pause();
        this.l.removeAttribute("src");
        this.f = Kd;
    };
    function Md(a, b) {
        b !== a.u && ((a.u = 1 == b), b && Nd(a), F(a.b.c(), b ? 1 : 0));
    }
    e.La = function () {
        this.o = 0;
        this.h.W || (Md(this, !0), this.h.start());
    };
    e.pa = function () {
        this.f === Kd && ((this.f = 1), this.l.setAttribute("src", this.C), this.a.load());
    };
    function Nd(a) {
        if (a.u) {
            var b = a.b;
            b.j || ((b.a = a.a.currentTime), O(b) && Dd(b));
            Dd(a.b);
        }
    }
    e.ya = function () {
        var a = this.a.currentTime,
            b = this.b,
            c = this.a.duration;
        b.b = 0;
        b.h = c;
        this.b.a = a;
        this.b.update();
    };
    e.update = function () {
        Jd.g.update.call(this);
        this.pa();
        2 === this.f && this.ya();
    };
    e.v = function () {
        return "jx-video-player";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        Jd.g.w.call(this);
        var a = this.c(),
            b = this.i;
        this.a = D(b, "VIDEO");
        this.l = D(b, "SOURCE");
        this.a.appendChild(this.l);
        a.appendChild(this.a);
        N(this.b);
        I(this.b, a);
        a = this.c();
        P(a, this.v());
        E(a, Od);
        E(a, Pd);
        E(this.a, Qd);
        E(this.l, Rd);
        E(this.b.c(), Sd);
        Md(this, !1);
    };
    e.vc = function () {
        this.La();
    };
    e.uc = function () {
        this.o++;
        3 < this.o && (Md(this, !1), this.h.W && this.h.stop());
    };
    e.Oa = function () {
        this.f = 2;
        this.update();
    };
    e.sb = function () {
        2 != this.f && this.Oa();
    };
    e.Pa = function () {};
    e.tb = function () {
        this.Pa();
    };
    e.zc = function () {
        this.a.currentTime = this.b.a;
    };
    e.wc = function () {
        Nd(this);
    };
    e.A = function () {
        Jd.g.A.call(this);
        var a = H(this);
        G(a, this.c(), "mousemove", this.vc);
        G(a, this.h, "tick", this.uc);
        G(a, this.a, "canplay", this.sb);
        G(a, this.a, "ended", this.tb);
        G(a, this.b, Id, this.zc);
        G(a, this.s, "tick", this.wc);
    };
    var Od = { overflow: "hidden", position: "relative" },
        Pd = { width: "100%", height: "100%" },
        Qd = { width: "100%", height: "100%", "z-index": 1 },
        Rd = {},
        Sd = { position: "absolute", bottom: 0, "margin-bottom": "22px", height: "24px", width: "40%", "margin-left": "30%", "margin-right": "30%", transition: "opacity 0.125s linear" };
    function Td(a) {
        Jd.call(this, a);
        this.j = !1;
    }
    p(Td, Jd);
    e = Td.prototype;
    e.Oa = function () {
        Td.g.Oa.call(this);
        A(this, Ud);
        A(this, Vd);
    };
    e.active = function () {
        this.j = !0;
        this.ya();
        this.pa();
    };
    e.Na = function () {
        this.j = !1;
        Md(this, !1);
        this.h.W && this.h.stop();
        this.reset();
    };
    e.play = function () {
        Td.g.play.call(this);
    };
    e.stop = function () {
        this.pause();
    };
    e.ja = function () {
        return this.C;
    };
    e.Pa = function () {
        Td.g.Pa.call(this);
        A(this, Wd);
    };
    e.La = function () {
        this.j && Td.g.La.call(this);
    };
    e.ya = function () {
        this.j && Td.g.ya.call(this);
    };
    e.pa = function () {
        this.j && Td.g.pa.call(this);
    };
    function S(a, b) {
        "boolean" == typeof a ? (b = !0 === a) : l(a) ? ((a = a.toLowerCase()), (b = "true" === a ? !0 : "false" === a ? !1 : !0 === b)) : (b = !0 === b);
        return b;
    }
    function Xd(a) {
        return l(a) ? a : null;
    }
    function Yd(a) {
        return ea(a) ? a : [];
    }
    var Zd = !w && !(r("Safari") && !(((r("Chrome") || r("CriOS")) && !r("Edge")) || r("Coast") || r("Opera") || r("Edge") || r("Silk") || r("Android")));
    function $d(a) {
        if (a instanceof Element)
            if (Zd && a.dataset) var b = a.dataset;
            else {
                b = {};
                a = a.attributes;
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (0 == d.name.lastIndexOf("data-", 0)) {
                        var f = xa(d.name.substr(5));
                        b[f] = d.value;
                    }
                }
            }
        else b = {};
        return sa(b);
    }
    function ae(a) {
        M.call(this, a);
        this.b = null;
    }
    p(ae, M);
    e = ae.prototype;
    e.active = function () {
        F(this.a, 1);
    };
    e.Na = function () {
        F(this.a, 0);
    };
    e.play = function () {};
    e.stop = function () {};
    e.update = function () {
        ae.g.update.call(this);
        var a = hc(this.F.ia()),
            b = a.width < be;
        a = a.height < ce;
        E(this.c(), b ? de : ee);
        E(this.a, b ? fe : ge);
        E(this.c(), "bottom", (a ? 72 : 96) + "px");
        $b(this.a, null !== this.b ? this.b : "");
    };
    e.v = function () {
        return "jx-image-description";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        ae.g.w.call(this);
        var a = this.c();
        this.a = D(this.i, "DIV");
        a.appendChild(this.a);
        a = this.c();
        P(a, this.v());
        E(a, he);
        E(this.a, ie);
    };
    var be = 320,
        ce = 540,
        he = { position: "absolute", margin: 0, "z-index": 101 },
        ie = { "font-family": '"YouTube Noto", Roboto, Arial, Helvetica, sans-serif', "font-weight": "normal", color: "rgba(220, 220, 220, 1.0)", opacity: 0, transition: "opacity 0.25s 2s" },
        ee = { left: "64px", right: "64px", bottom: "128px" },
        ge = { "font-size": "14px", "white-space": "pre-wrap", "line-height": "1.6em" },
        de = { left: "8px", right: "8px", bottom: "64px" },
        fe = { "font-size": "10px", "white-space": "pre-wrap", "line-height": "1.4em" };
    function je(a) {
        z.call(this);
        this.a = a || window;
        this.i = x(this.a, "resize", this.m, !1, this);
        this.b = Vb(this.a || window);
    }
    p(je, z);
    je.prototype.N = function () {
        je.g.N.call(this);
        this.i && (Db(this.i), (this.i = null));
        this.b = this.a = null;
    };
    je.prototype.m = function () {
        var a = Vb(this.a || window),
            b = this.b;
        a == b || (a && b && a.width == b.width && a.height == b.height) || ((this.b = a), A(this, "resize"));
    };
    function ke(a) {
        Ac.call(this, a);
    }
    p(ke, Ac);
    e = ke.prototype;
    e.active = function () {
        A(this, Vd);
    };
    e.Na = function () {};
    e.play = function () {};
    e.stop = function () {};
    e.ja = function () {
        var a = null;
        var b = 0;
        for (b in this.f) {
            b = Number(b);
            var c = this.f[b];
            if (0 <= c.width || 0 < c.height) a = c;
        }
        return a ? a.src : null;
    };
    function le(a) {
        M.call(this, a);
    }
    p(le, M);
    var Vd = "mediaitem-active",
        Ud = "mediaitem-wait",
        Wd = "mediaitem-next";
    function me(a) {
        J(a, function (b) {
            b.active();
        });
    }
    function ne(a) {
        J(a, function (b) {
            b.Na();
        });
    }
    e = le.prototype;
    e.ja = function () {
        return this.L.ja();
    };
    e.update = function () {
        le.g.update.call(this);
        J(this, function (a) {
            a.update();
        });
    };
    e.v = function () {
        return "jx-media-item";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        le.g.w.call(this);
        P(this.c(), this.v());
        N(this);
    };
    var oe, pe;
    function qe(a) {
        !oe && a && ((oe = a), (pe = sa(a.style)), E(a, re), a.focus());
    }
    function se() {
        oe && (E(oe, pe), (pe = oe = null));
    }
    var re = { position: "fixed", top: 0, right: 0, bottom: 0, left: 0, border: "1px splid red", "background-color": "#000", "z-index": 2147483647 };
    function T(a) {
        M.call(this, a);
        this.b = this.f = this.Y = null;
        this.j = new je();
        this.Ma = !1;
    }
    p(T, M);
    var te = /publicalbum|goo/;
    e = T.prototype;
    e.Ja = function (a) {
        this.Y = ue(this, a);
        O(this) && this.update();
    };
    function ve(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = q(b[c], "src");
            if (d && d.match(te)) {
                a.Ma = !0;
                break;
            }
        }
    }
    function we(a, b) {
        var c = $d(b),
            d = [];
        b instanceof Element &&
            (t(
                (b || document).getElementsByTagName("OBJECT"),
                function (f) {
                    var g = $d(f),
                        k = f.getAttribute("data");
                    k && ((f = f.getAttribute("type") || "image/jpeg"), (g.src = k), (g.mimetype = f), Ga(d, g));
                },
                a
            ),
            t(
                (b || document).getElementsByTagName("IMG"),
                function (f) {
                    f = $d(f);
                    Ga(d, f);
                },
                a
            ));
        ve(a, d);
        c.mediaItems = d;
        return c;
    }
    function ue(a, b) {
        var c = a.Da();
        c.B(b);
        var d = [];
        t(
            Yd(q(b, "mediaItems")),
            function (f) {
                var g = this.ta();
                f.aspectRatio = c.O;
                f.Ea = c.h;
                f.stretch = c.j;
                f.Ca = c.I;
                g.a = Xd(q(f, "mimetype"));
                g.src = Xd(q(f, "src"));
                g.wa = Xd(q(f, "initialSrc"));
                g.aspectRatio = S(q(f, "aspectRatio"), !0);
                g.Ea = S(q(f, "enlarge"), !0);
                g.stretch = S(q(f, "stretch"), !0);
                g.Ca = S(q(f, "cover"), !1);
                var k = parseInt(q(f, "width"), 10);
                g.width = 0 < k ? k : null;
                k = parseInt(q(f, "height"), 10);
                g.height = 0 < k ? k : null;
                f = q(f, "description");
                g.description = ba(f) && null !== f ? String(f).replace("\\n", "\n") : null;
                Ga(d, g);
            },
            a
        );
        c.aa = d;
        return c;
    }
    function xe(a, b, c) {
        if (c.delay) {
            var d = 1e3 * c.delay;
            b.j.a != d && Jb(b.j, d);
        }
        c.title && b.ma(c.title, c.Ra, c.Qa, c.link);
        c.link && b.la(c.link);
        b.f = c.m;
        b.C = c.F;
        d = b.b;
        d.C = c.P;
        O(d) && ye(d);
        O(b) && ye(b.b);
        b.da(!0 === c.l && !!c.link);
        b.ka(!0 === c.L && 0 < c.aa.length);
        b.xa(a.Ma);
    }
    function ze(a, b) {
        var c = b.src ? b.src : "";
        switch (b.a) {
            case "video/mp4":
                var d = new Td();
                d.C = c;
                d.f = Kd;
                O(d) && d.pa();
                a.L = d;
                a.T(a.L, !a.L.H);
                break;
            default:
                d = new ke();
                null !== b.width && 0 < b.width && null !== b.height && 0 < b.height && ((d.u = new C(b.width, b.height)), O(d) && ((d.j = hc(d.c())), Lc(d)));
                d.J = b.aspectRatio;
                O(d) && Lc(d);
                d.R = b.Ea;
                O(d) && Lc(d);
                d.V = b.stretch;
                O(d) && Lc(d);
                d.K = b.Ca;
                O(d) && Lc(d);
                if (b.wa) {
                    var f = new Dc();
                    f.src = b.wa;
                    f.width = 0;
                    f.height = 0;
                    Cc(d, f);
                }
                f = new Dc();
                f.src = c;
                Cc(d, f);
                a.L = d;
                a.T(a.L, !a.L.H);
        }
        l(b.description) && ((c = new ae()), (c.b = b.description), O(c) && $b(c.a, null !== c.b ? c.b : ""), a.T(c, !0));
    }
    e.pb = function () {
        this.b = this.f.contentWindow.document.body;
        E(this.b, Ae);
        E(this.b.parentElement, Ae);
        this.h.call(this);
    };
    function Be(a, b) {
        a.h = b;
        b = document.createElement("IFRAME");
        b.setAttribute("frameborder", "0");
        b.setAttribute("marginwidth", "0");
        b.setAttribute("marginheight", "0");
        b.setAttribute("scrolling", "no");
        b.setAttribute("allowfullscreen", !0);
        b.setAttribute("srcdoc", "");
        b.setAttribute("id", "iframe" + sc(a));
        var c = a.c();
        c.insertBefore(b, c.childNodes[0] || null);
        a.f = b;
        E(b, Ce);
        x(b, "load", a.pb, !1, a);
    }
    function De(a, b, c) {
        c &&
            od(
                b,
                m(function (d) {
                    d = d.target;
                    if (d.a)
                        b: {
                            d = d.a.responseText;
                            if (h.JSON)
                                try {
                                    var f = h.JSON.parse(d);
                                    break b;
                                } catch (g) {}
                            f = Oc(d);
                        }
                    else f = void 0;
                    c.call(this, f);
                }, a)
            );
    }
    function Ee(a, b) {
        De(a, "https://www.publicalbum.org/v1/json/story?id=" + b + "&origin=" + location.hostname, function (c) {
            var d = this.Y;
            d.title = q(c, "headline");
            var f = q(c, "author");
            f && ((d.Ra = q(f, "name") || null), (d.lb = q(f, "url") || null), (d.Qa = q(q(f, "image"), "url") || null));
            d.link = q(c, "url") || (d.link && d.link.match(/publicalbum|google|goo\.gl/) ? d.link : null);
            d.link && ((this.Ma = !0), console.log("Public album photoset `" + d.link + "` loaded."));
            t(
                c.image,
                function (g) {
                    var k = this.ta();
                    k.wa = q(g, "url");
                    k.src = q(g, "contentUrl");
                    k.description = q(g, "text");
                    d.aa.push(k);
                },
                this
            );
            this.M(!0);
            this.update();
            this.refresh();
        });
    }
    e.D = function (a) {
        T.g.D.call(this, a);
        if (!this.Y) {
            var b = we(this, a);
            this.Y = ue(this, b);
            this.Y.id && (Ee(this, this.Y.id), this.M(!1));
        }
        Wb(a);
        E(a, "display", "block");
        E(a, "visibility", "visible");
    };
    e.w = function () {
        throw Error("Method not supported");
    };
    e.Hb = function () {
        this.refresh();
    };
    e.A = function () {
        T.g.A.call(this);
        G(H(this), this.j, "resize", this.Hb);
    };
    var Ce = { width: "100%", "min-width": "100%", "max-width": "100%", height: "100%", "min-height": "100%", "max-height": "100%", margin: 0, padding: 0, border: 0 },
        Ae = { margin: 0, padding: 0, widht: "100%", height: "100%", "user-select": "none" };
    function Fe() {
        this.m = !1;
        this.delay = 5;
        this.F = !0;
        this.P = [0, 0, 0];
        this.description = this.lb = this.Qa = this.Ra = this.title = this.link = this.id = null;
        this.L = this.l = !1;
        this.j = this.h = this.O = !0;
        this.I = !1;
        this.aa = [];
    }
    Fe.prototype.B = function (a) {
        this.m = S(q(a, "autoplay"), this.m);
        this.delay = parseInt(q(a, "delay", this.delay), 10);
        this.F = S(q(a, "repeat"), this.F);
        var b = q(a, "backgroundColor", "#000000");
        if ("transparent" != b)
            if (l(b)) {
                if (!zc.test(b)) throw Error("'" + b + "' is not a valid hex color");
                4 == b.length && (b = b.replace(vc, "#$1$1$2$2$3$3"));
                b = b.toLowerCase();
                b = [parseInt(b.substr(1, 2), 16), parseInt(b.substr(3, 2), 16), parseInt(b.substr(5, 2), 16)];
            } else b = ea(void 0) ? void 0 : null;
        else b = null;
        this.P = b;
        this.id = Xd(q(a, "id"));
        this.link = Xd(q(a, "link"));
        this.title = String(q(a, "title") || "");
        b = q(a, "description");
        this.description = ba(b) && null !== b ? String(b) : null;
        this.l = S(q(a, "showLinkButton"), this.l);
        this.L = S(q(a, "showDownloadButton"), this.L);
        this.O = S(q(a, "mediaitemsAspectRatio"), this.O);
        this.h = S(q(a, "mediaitemsEnlarge"), this.h);
        this.j = S(q(a, "mediaitemsStretch"), this.j);
        this.I = S(q(a, "mediaitemsCover"), this.I);
    };
    function Ge() {
        this.wa = this.src = this.a = null;
        this.stretch = this.Ea = this.aspectRatio = !0;
        this.Ca = !1;
    }
    function U(a, b) {
        this.b = a;
        this.a = b ? b : new Nb(0, 0, 32, 32);
    }
    function V(a, b) {
        M.call(this, b);
        this.b = a || null;
    }
    p(V, M);
    function He(a, b) {
        a.h = b;
        O(a) && Ie(a);
    }
    function Ie(a) {
        if (ea(a.h)) {
            var b = yc(a.h);
            E(a.a, "fill", b);
        }
    }
    V.prototype.update = function () {
        V.g.update.call(this);
        if (this.b) {
            var a = this.b;
            if (a.a) (a = a.a), (a = a.a + " " + a.b + " " + a.width + " " + a.height);
            else throw Error();
            var b = this.b.b;
            this.a.setAttribute("viewBox", a);
            this.f.setAttribute("d", b);
        }
        Ie(this);
    };
    V.prototype.v = function () {
        return "jx-svg-image";
    };
    V.prototype.D = function () {
        throw Error("Method not supported");
    };
    V.prototype.w = function () {
        V.g.w.call(this);
        var a = this.c();
        this.f = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.a.appendChild(this.f);
        a.appendChild(this.a);
        P(this.c(), this.v());
        E(this.a, Je);
    };
    var Je = { width: "100%", height: "100%" };
    function Ke(a, b) {
        M.call(this, b);
        this.a = new V(a || null, this.i);
        this.l = null;
        this.j = !1;
        this.f = !0;
        this.h = !1;
        this.G = 0.6;
        this.C = 0;
    }
    p(Ke, M);
    function Le(a, b) {
        a.l = b;
        a.j = !1;
        O(a) && Me(a);
    }
    function Ne(a, b) {
        a.f = b;
        O(a) && Oe(a);
    }
    function Pe(a) {
        var b = a.h ? 1 : a.G,
            c = a.c();
        E(c, "transition-delay", (a.h ? 0 : 0.001 * a.C) + "s");
        F(c, b);
    }
    function Oe(a) {
        E(a.c(), "display", a.f ? Qe : "none");
    }
    function Me(a) {
        if (!a.j) {
            var b = a.c();
            a.l ? b.setAttribute("title", a.l) : b.removeAttribute("title");
            a.j = !0;
        }
    }
    e = Ke.prototype;
    e.update = function () {
        Ke.g.update.call(this);
        this.a.update();
        Pe(this);
        Oe(this);
        Me(this);
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.v = function () {
        return "jx-svg-button";
    };
    e.Ga = function () {
        var a = this.c();
        P(a, this.v());
        E(a, Re);
        E(this.a.c(), Se);
    };
    e.w = function () {
        Ke.g.w.call(this);
        N(this.a);
        I(this.a, this.c());
        this.Ga();
    };
    e.oc = function (a) {
        this.f && (a.stopPropagation(), a.a(), A(this, "click"));
    };
    e.pc = function (a) {
        this.f && (a.stopPropagation(), a.a(), (this.h = !0), Pe(this));
    };
    e.qc = function (a) {
        this.f && (a.stopPropagation(), a.a(), (this.h = !1), Pe(this));
    };
    e.A = function () {
        Ke.g.A.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.oc);
        G(a, this.c(), "mouseenter", this.pc);
        G(a, this.c(), "mouseleave", this.qc);
    };
    var Qe = "flex",
        Re = { display: Qe, "justify-content": "center", "align-items": "center", transition: "opacity 0.125s linear" },
        Se = { transition: "opacity 0.250s linear" };
    function W(a, b) {
        Ke.call(this, a, b);
        this.o = new C(48, 48);
        this.s = !1;
    }
    p(W, Ke);
    function Te(a, b) {
        a.s = b;
        O(a) && Ue(a);
    }
    function Ue(a) {
        var b = a.o;
        E(a.a.c(), { width: (a.s ? 0.6 * b.width : b.width) + "px", height: (a.s ? 0.6 * b.height : b.height) + "px", "border-radius": 0.5 * Math.min(b.width, b.height) + "px" });
    }
    W.prototype.update = function () {
        Ue(this);
        W.g.update.call(this);
    };
    W.prototype.v = function () {
        return "jx-svg-round-button";
    };
    W.prototype.Ga = function () {
        var a = this.c();
        P(a, this.v());
        E(a, Ve);
        a = this.a;
        E(a.c(), We);
        He(a, Xe);
        W.g.Ga.call(this);
    };
    var Ve = { overflow: "hidden", "tap-highlight-color": "transparent" },
        We = { background: "rgba(66,66,66,0.54)", cursor: "pointer" },
        Xe = [255, 255, 255];
    var Ye = { en: "Open in new window." },
        Ze = { en: "Download image." },
        $e = { en: "Publicalbum.org photo sharing website" };
    function af(a) {
        R.call(this, a);
    }
    p(af, R);
    af.prototype.ba = function () {};
    af.prototype.za = function () {
        var a = this.isVisible() ? 1 : 0;
        F(this.S, a);
        F(this.V, a);
        F(this.C, a);
        F(this.R, a);
    };
    function bf(a, b) {
        I(b, a.S);
        E(b.c(), cf);
    }
    function df(a, b) {
        I(b, a.V);
        E(b.c(), ef);
    }
    function ff(a, b) {
        I(b, a.R);
        E(b.c(), gf);
    }
    af.prototype.D = function (a) {
        af.g.D.call(this, a);
        var b = this.i;
        this.S = D(b, "DIV");
        a.appendChild(this.S);
        this.V = D(b, "DIV");
        a.appendChild(this.V);
        this.C = D(b, "DIV");
        a.appendChild(this.C);
        this.R = D(b, "DIV");
        a.appendChild(this.R);
        E(this.S, hf);
        E(this.S, jf);
        E(this.V, hf);
        E(this.V, kf);
        E(this.C, hf);
        E(this.C, lf);
        E(this.R, hf);
        E(this.R, mf);
    };
    af.prototype.w = function () {
        throw Error("Method not supported");
    };
    var hf = { position: "absolute", overflow: "auto", transition: "opacity 0.125s linear", opacity: 0, "z-index": 101 },
        jf = { top: 0, left: 0, width: "100%", height: "64px", padding: "12px 0 0 8px", background: "linear-gradient(to bottom, rgba(0,0,0,0.33) 0%, rgba(0,0,0,0.02) 88%, rgba(0,0,0,0) 100%)" },
        kf = { top: 0, right: 0, margin: "12px 8px 0 0" },
        lf = { bottom: 0, left: 0, margin: "0 0 12px 8px" },
        mf = { bottom: 0, right: 0, margin: "0 8px 12px 0" },
        cf = { float: "left", "margin-right": "8px" },
        ef = { float: "right", "margin-left": "8px" },
        nf = { float: "left", "margin-right": "8px" },
        gf = { float: "left", "margin-right": "8px" };
    var of = (window && (window.navigator.a || window.navigator.language).split("-")[0]) || "en";
    function pf(a) {
        return a[of] ? a[of] : a.en ? a.en : "%" + a + "%";
    }
    function qf(a) {
        M.call(this, a);
        this.a = !0;
        this.j = this.h = !1;
    }
    p(qf, M);
    function rf(a) {
        F(a.c(), a.h ? 1 : 0.6);
    }
    e = qf.prototype;
    e.update = function () {
        qf.g.update.call(this);
        rf(this);
        gc(this.c(), this.a);
        E(this.c(), this.j ? sf : tf);
    };
    e.v = function () {
        return "jx-logo-button";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        qf.g.w.call(this);
        var a = this.c(),
            b = this.i;
        this.f = D(b, "SPAN");
        $b(this.f, "Album");
        this.b = D(b, "A");
        $b(this.b, "Public");
        this.b.appendChild(this.f);
        this.b.setAttribute("href", "https://www.publicalbum.org");
        this.b.setAttribute("target", "parent");
        this.b.setAttribute("title", pf($e));
        a.appendChild(this.b);
        a = this.c();
        P(a, this.v());
        E(a, uf);
        E(this.b, vf);
        E(this.f, wf);
    };
    e.jc = function (a) {
        this.a && (a.stopPropagation(), a.a(), A(this, "click"));
    };
    e.kc = function (a) {
        this.a && (a.stopPropagation(), a.a(), (this.h = !0), rf(this));
    };
    e.lc = function (a) {
        this.a && (a.stopPropagation(), a.a(), (this.h = !1), rf(this));
    };
    e.A = function () {
        qf.g.A.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.jc);
        G(a, this.c(), "mouseenter", this.kc);
        G(a, this.c(), "mouseleave", this.lc);
    };
    var uf = { "z-index": 101, transition: "opacity 0.125s linear" },
        tf = { height: "48px", "line-height": "48px", "padding-right": "16px", "font-size": "11px", "letter-spacing": "0.7px" },
        sf = { height: "32px", "line-height": "32px", "padding-right": "8px", "font-size": "8px", "letter-spacing": "0.4px" },
        vf = { color: "rgb(160, 160, 160)", "font-family": "arial", "text-transform": "uppercase", "text-decoration": "none", "font-weight": 600, cursor: "pointer", opacity: 0.6 },
        wf = { "margin-left": "1px", color: "rgb(230, 230, 230)" };
    function xf(a) {
        R.call(this, a);
        a = this.i;
        this.G = new yf(a);
        this.K = new zf(a);
        this.o = new W(Af, a);
        this.l = new W(Bf, a);
        a = this.s = new qf(a);
        a.a = !1;
        O(a) && gc(a.c(), a.a);
    }
    p(xf, af);
    e = xf.prototype;
    e.ba = function (a) {
        xf.g.ba.call(this, a);
        Te(this.G, a);
        Te(this.K, a);
        Te(this.o, a);
        Te(this.l, a);
        var b = this.s;
        b.j = a;
        O(b) && E(b.c(), b.j ? sf : tf);
        O(this) && (this.G.update(), this.K.update(), this.o.update(), this.l.update(), this.s.update());
    };
    e.da = function (a) {
        Ne(this.o, a);
    };
    e.ka = function (a) {
        Ne(this.l, a);
    };
    e.xa = function (a) {
        var b = this.s;
        b.a = a;
        O(b) && gc(b.c(), b.a);
    };
    e.update = function () {
        xf.g.update.call(this);
        this.G.update();
        this.K.update();
        this.o.update();
        this.l.update();
        this.s.update();
    };
    e.v = function () {
        return "jx-carousel-controls";
    };
    e.D = function (a) {
        xf.g.D.call(this, a);
        N(this.G);
        I(this.G, a);
        N(this.K);
        I(this.K, a);
        N(this.o);
        Le(this.o, pf(Ye));
        df(this, this.o);
        N(this.l);
        Le(this.l, pf(Ze));
        df(this, this.l);
        N(this.s);
        ff(this, this.s);
    };
    e.Kb = function () {
        A(this, Cf);
    };
    e.Mb = function () {
        A(this, Df);
    };
    e.Lb = function () {
        A(this, Ef);
    };
    e.Jb = function () {
        A(this, Ff);
    };
    e.yb = function () {
        A(this, Gf);
    };
    e.A = function () {
        xf.g.A.call(this);
        var a = H(this);
        G(a, this.G, "click", this.Kb);
        G(a, this.K, "click", this.Mb);
        G(a, this.o, "click", this.Lb);
        G(a, this.l, "click", this.Jb);
        G(a, this.s, "click", this.yb);
    };
    var Cf = "leftarrowclick",
        Df = "rightarrowclick",
        Ef = "linkbuttonclick",
        Ff = "downloadbuttonclick",
        Gf = "logobuttonclick";
    var Hf = new Nb(-3, -3, 24, 24),
        X = new Nb(-8, -8, 40, 40),
        If = new U("M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z", X),
        Jf = new U("M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z", X),
        Kf = new U("M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", Hf),
        Lf = new U("M3 12.5h2.5V15H7v-4H3v1.5zm2.5-7H3V7h4V3H5.5v2.5zM11 15h1.5v-2.5H15V11h-4v4zm1.5-9.5V3H11v4h4V5.5h-2.5z", Hf),
        Bf = new U("M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z", X),
        Af = new U("M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z", X),
        Mf = new U(
            "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
            new Nb(-7, -8, 40, 40)
        ),
        Nf = new U("M8 5v14l11-7z", X),
        Of = new U("M6 19h4V5H6v14zm8-14v14h4V5h-4z", X),
        Pf = new U("M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z", X),
        Qf = new U("M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z", X),
        Rf = new U("M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z", X),
        Sf = new U("M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", X),
        Tf = new U("M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z", X);
    function Uf(a, b, c) {
        M.call(this, c);
        c = this.i;
        this.b = new V(a || null, c);
        this.a = new V(b || null, c);
        this.u = !1;
        this.j = !0;
        this.l = this.o = !1;
        this.f = !0;
    }
    p(Uf, M);
    function Vf(a, b) {
        a.j = b;
        O(a) && Wf(a);
    }
    function Y(a, b) {
        a.l = b;
        O(a) && Xf(a);
    }
    function Yf(a) {
        var b = a.o ? 1 : 0.6,
            c = a.c();
        E(c, "transition-delay", (a.o ? 0 : 0) + "s");
        F(c, b);
    }
    function Wf(a) {
        E(a.c(), "display", a.j ? Zf : "none");
    }
    function Xf(a) {
        F(a.b.c(), a.l ? 1 : 0);
        F(a.a.c(), a.l ? 0 : 1);
    }
    e = Uf.prototype;
    e.update = function () {
        Uf.g.update.call(this);
        this.b.update();
        this.a.update();
        Yf(this);
        Wf(this);
        this.u || (this.c().removeAttribute("title"), (this.u = !0));
        Xf(this);
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.v = function () {
        return "jx-svg-switch";
    };
    e.Ha = function () {
        var a = this.c();
        P(a, this.v());
        E(a, $f);
        E(this.h, ag);
        E(this.b.c(), bg);
        E(this.a.c(), bg);
    };
    e.w = function () {
        Uf.g.w.call(this);
        this.h = document.createElement("DIV");
        this.c().appendChild(this.h);
        N(this.b);
        I(this.b, this.h);
        N(this.a);
        I(this.a, this.h);
        this.Ha();
    };
    e.rc = function (a) {
        this.j && (a.stopPropagation(), O(this) && this.f && Y(this, !this.l), A(this, "click"));
    };
    e.sc = function (a) {
        this.j && (a.stopPropagation(), (this.o = !0), Yf(this));
    };
    e.tc = function (a) {
        this.j && (a.stopPropagation(), (this.o = !1), Yf(this));
    };
    e.A = function () {
        Uf.g.A.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.rc);
        G(a, this.c(), "mouseenter", this.sc);
        G(a, this.c(), "mouseleave", this.tc);
    };
    var Zf = "flex",
        $f = { display: Zf, "justify-content": "center", "align-items": "center", transition: "opacity 0.125s linear" },
        ag = { position: "relative", width: "320px", height: "320px" },
        bg = { position: "absolute", transition: "opacity 0.250s linear", opacity: 0 };
    function cg(a, b, c) {
        Uf.call(this, a, b, c);
        this.s = !1;
    }
    p(cg, Uf);
    function dg(a, b) {
        a.s = b;
        O(a) && eg(a);
    }
    function eg(a) {
        var b = a.s ? 32 : 48;
        b = { width: b + "px", height: b + "px", "border-radius": 0.5 * b + "px" };
        E(a.b.c(), b);
        E(a.a.c(), b);
        E(a.h, b);
    }
    cg.prototype.update = function () {
        eg(this);
        cg.g.update.call(this);
    };
    cg.prototype.v = function () {
        return "jx-svg-round-switch";
    };
    cg.prototype.Ha = function () {
        var a = this.c();
        P(a, this.v());
        E(a, fg);
        a = this.b;
        var b = this.a;
        E(a.c(), gg);
        E(b.c(), gg);
        He(a, hg);
        He(b, hg);
        cg.g.Ha.call(this);
    };
    var fg = { overflow: "hidden", "tap-highlight-color": "transparent" },
        gg = { background: "rgba(66,66,66,0.54)", cursor: "pointer" },
        hg = [255, 255, 255];
    var ig = { en: "Share it." };
    function jg(a) {
        xf.call(this, a);
        a = this.i;
        this.j = new W(Tf, a);
        this.u = new W(Mf, a);
        this.h = new cg(Of, Nf, a);
        this.f = new cg(Pf, Pf, a);
        this.a = new cg(Rf, Qf, a);
        this.b = new cg(Lf, Kf, a);
    }
    p(jg, xf);
    e = jg.prototype;
    e.ba = function (a) {
        jg.g.ba.call(this, a);
        Te(this.j, a);
        Te(this.u, a);
        dg(this.h, a);
        dg(this.f, a);
        dg(this.a, a);
        dg(this.b, a);
        O(this) && (this.j.update(), this.u.update(), this.h.update(), this.f.update(), this.a.update(), this.b.update());
    };
    e.update = function () {
        jg.g.update.call(this);
        var a = this.b.l;
        Ne(this.j, !!oe && !a);
        Vf(this.a, !a);
        this.j.update();
        this.u.update();
        this.h.update();
        this.f.update();
        this.a.update();
        this.b.update();
    };
    e.v = function () {
        return "jx-gallery-controls";
    };
    e.D = function (a) {
        jg.g.D.call(this, a);
        N(this.j);
        bf(this, this.j);
        N(this.u);
        Le(this.u, pf(ig));
        df(this, this.u);
        N(this.h);
        this.h.f = !1;
        a = this.h;
        I(a, this.C);
        E(a.c(), nf);
        N(this.f);
        this.f.f = !1;
        a = this.f;
        I(a, this.C);
        E(a.c(), nf);
        N(this.a);
        this.a.f = !1;
        ff(this, this.a);
        N(this.b);
        this.b.f = !1;
        ff(this, this.b);
        E(this.j.a.c(), kg);
        He(this.f.a, [0, 0, 0]);
        Ne(this.u, !1);
    };
    e.Rb = function () {
        A(this, lg);
    };
    e.Vb = function () {
        A(this, mg);
    };
    e.Ub = function () {
        A(this, ng);
    };
    e.Dc = function () {
        A(this, og);
    };
    e.Sb = function () {
        A(this, pg);
    };
    e.Tb = function () {
        A(this, qg);
    };
    e.A = function () {
        jg.g.A.call(this);
        var a = H(this);
        G(a, this.j, "click", this.Rb);
        G(a, this.u, "click", this.Vb);
        G(a, this.h, "click", this.Ub);
        G(a, this.f, "click", this.Dc);
        G(a, this.a, "click", this.Sb);
        G(a, this.b, "click", this.Tb);
    };
    var kg = { "background-color": "rgba(0, 0, 0, 0)" },
        rg = Cf,
        sg = Df,
        tg = Ef,
        ug = Ff,
        lg = "backbuttonclick",
        mg = "sharebuttonclick",
        ng = "playswitchclick",
        og = "repeatswitchclick",
        pg = "fullpageswithcclick",
        qg = "fullscreenswithcclick";
    function vg(a) {
        a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen();
    }
    function wg(a) {
        a = a ? a.a : Qb().a;
        return !!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement);
    }
    function xg(a) {
        W.call(this, this.u(), a);
    }
    p(xg, W);
    xg.prototype.v = function () {
        return "jx-carousel-arrow";
    };
    xg.prototype.b = function () {
        E(this.c(), yg);
        this.G = 0;
        this.C = 250;
    };
    xg.prototype.D = function () {
        throw Error("Method not supported");
    };
    xg.prototype.w = function () {
        xg.g.w.call(this);
        this.b();
    };
    var yg = { position: "absolute", "z-index": 101, top: "64px", bottom: "64px", width: "64px", "box-sizing": "content-box" };
    function zf(a) {
        xg.call(this, a);
    }
    p(zf, xg);
    zf.prototype.u = function () {
        return Jf;
    };
    zf.prototype.b = function () {
        zf.g.b.call(this);
        E(this.c(), zg);
    };
    var zg = { right: 0 };
    function Ag(a) {
        z.call(this);
        this.a = a;
        this.m = !1;
        this.i = new Lb();
        this.b = null;
        x(this.a, "touchstart", this.f, !1, this);
    }
    p(Ag, z);
    Ag.prototype.c = function () {
        return this.a;
    };
    function Bg(a) {
        a = a.m;
        return fa(a) ? ("touchend" == a.type || "touchcancel" == a.type ? a.changedTouches : a.targetTouches) : [a];
    }
    Ag.prototype.f = function (a) {
        this.m = !1;
        a = Bg(a);
        if (B(this, "gmultitouchstart")) {
            var b = new Cg("gmultitouchstart", this, a);
            A(this, b);
        }
        a &&
            1 == a.length &&
            (B(this, "gtouchhmove") || B(this, "gtouchvmove") ? ((this.i.a = a[0].clientX), (this.i.b = a[0].clientY), (this.b = null)) : B(this, "gtouchstart") && ((b = new Cg("gtouchstart", this, a)), A(this, b)),
            x(this.a, "touchmove", this.F, !1, this),
            x(this.a, "touchend", this.B, !1, this));
    };
    Ag.prototype.F = function (a) {
        this.m = !0;
        var b = Bg(a),
            c = B(this, "gtouchhmove"),
            d = B(this, "gtouchvmove");
        if (c || d) {
            if (!this.b && ((this.b = Math.abs(this.i.a - b[0].clientX) > Math.abs(this.i.b - b[0].clientY) ? 1 : 2), B(this, "gtouchstart"))) {
                var f = new Cg("gtouchstart", this, b);
                A(this, f);
            }
            c && 1 == this.b && ((f = new Cg("gtouchhmove", this, b)), A(this, f), a.stopPropagation(), a.a());
            d && 2 == this.b && ((f = new Cg("gtouchvmove", this, b)), A(this, f), a.stopPropagation(), a.a());
        }
        B(this, "gtouchmove") && ((f = new Cg("gtouchmove", this, b)), A(this, f), a.a());
        B(this, "gmultitouchmove") && ((f = new Cg("gmultitouchmove", this, b)), A(this, f), a.a());
    };
    Ag.prototype.B = function (a) {
        a = Bg(a);
        if (1 == a.length && (Cb(this.a, "touchmove", this.F, !1, this), Cb(this.a, "touchend", this.B, !1, this), B(this, "gtouchend"))) {
            var b = new Cg("gtouchend", this, a);
            A(this, b);
        }
        B(this, "gmultitouchend") && ((b = new Cg("gmultitouchend", this, a)), A(this, b));
        B(this, "tap") && (this.m || A(this, "tap"));
        this.m = !1;
    };
    function Cg(a, b, c) {
        v.call(this, a, b);
        this.touches = c;
    }
    p(Cg, v);
    function Dg(a) {
        z.call(this);
        this.i = a;
        this.a = !1;
        this.f = 0;
        this.b = new Ag(this.i.c());
        y(this.b, "gtouchstart", this.F, !1, this);
        y(this.b, "gtouchmove", this.B, !1, this);
        y(this.b, "gtouchend", this.m, !1, this);
    }
    p(Dg, z);
    Dg.prototype.reset = function () {
        this.a = !1;
        this.f = 0;
    };
    Dg.prototype.F = function (a) {
        a.stopPropagation();
        a.a();
        this.a || ((a = a.touches[0].clientX), (this.a = !0), (this.f = a), A(this, new Eg("cgtart", a)));
    };
    Dg.prototype.B = function (a) {
        this.a && (a.stopPropagation(), a.a(), A(this, new Eg("cgmove", a.touches[0].clientX - this.f)));
    };
    Dg.prototype.m = function (a) {
        a.stopPropagation();
        a.a();
        this.a && (A(this, new Eg("cgfinish", a.touches[0].clientX - this.f)), (this.a = !1));
    };
    function Eg(a, b) {
        v.call(this, a);
        this.offset = b;
    }
    p(Eg, v);
    function Fg(a) {
        M.call(this, a);
        this.C = this.u = null;
        this.f = new C(960, 540);
        this.b = this.a = 0;
        this.j = !0;
        this.G = Gg;
        this.J = Hg;
        this.s = null;
    }
    p(Fg, M);
    var Gg = 250,
        Hg = 0.05;
    e = Fg.prototype;
    e.ia = function () {
        return this.u;
    };
    function Ig(a, b) {
        a.b = b;
        O(a) && Jg(a);
    }
    function Kg(a) {
        return L(a, a.b);
    }
    function Lg(a) {
        0 < a.a ? Ig(a, a.a - 1) : Ig(a, K(a) - 1);
    }
    e.play = function () {
        Kg(this).L.play();
    };
    e.stop = function () {
        Kg(this).L.stop();
    };
    function ye(a) {
        if (a.C) var b = yc(a.C);
        else {
            if (isNaN(0)) throw Error('"(0,0,0,0") is not a valid RGBA color');
            b = xc((0).toString(16));
            b = wc(0, 0, 0) + b;
        }
        E(a.c(), "background-color", b);
    }
    function Mg(a) {
        fc(a.c(), a.f);
        var b = L(a, a.a);
        null !== b && (fc(b.c(), a.f), b.update());
    }
    function Ng(a) {
        var b = K(a) - 1;
        return a.a == b && 0 == a.b ? -1 : 0 == a.a && a.b == b ? 1 : a.b > a.a ? -1 : 1;
    }
    function Og(a, b) {
        E(a, "transition", !1 !== b ? b : "none");
    }
    function Pg(a) {
        E(L(a, a.b).c(), "z-index", 2);
        E(L(a, a.a).c(), "z-index", 1);
    }
    function Qg(a) {
        Og(L(a, a.b).c(), !1);
        Og(L(a, a.a).c(), !1);
    }
    function Rg(a, b, c, d) {
        fc(b, a.f);
        dc(b, new Lb(c, 0));
        F(b, d);
    }
    function Sg(a, b, c, d, f) {
        b = L(a, b);
        Rg(a, b.c(), c, d);
        !0 === f && b.update();
        return b;
    }
    e.Cc = function () {
        var a = this.f.width * Ng(this) * this.J;
        Sg(this, this.a, 0, 1, !1);
        Sg(this, this.b, a, 0, !0);
        window.requestAnimationFrame(m(this.gb, this));
    };
    e.gb = function () {
        if (this.j) {
            var a = 0.001 * this.G + "s";
            Og(L(this, this.b).c(), "left " + a + " ease-out, opacity " + a + " ease-out");
            Og(L(this, this.a).c(), "left " + a + " ease-in, opacity " + a + " ease-in");
        }
        ne(Sg(this, this.a, -this.f.width * Ng(this) * this.J, 0, !1));
        me(Sg(this, this.b, 0, 1, !this.j));
        this.a = this.b;
        A(this, "index");
    };
    e.jb = function () {
        clearTimeout(this.s);
        this.s = null;
    };
    function Jg(a) {
        if (0 != K(a))
            if (a.b != a.a && null != a.a) (a.j = !0), null !== a.s && (a.jb(), (a.j = !1)), Pg(a), Qg(a), a.j ? window.requestAnimationFrame(m(a.Cc, a)) : a.gb(), (a.s = setTimeout(m(a.jb, a), 1.2 * a.G));
            else if (0 == a.a && 0 == a.b) {
                var b = L(a, 0);
                if (b) {
                    var c = b.c();
                    Rg(a, c, 0, 1);
                    E(c, "z-index", 2);
                    Og(c, !1);
                    a.a = 0;
                    me(b);
                }
            }
    }
    e.update = function () {
        Fg.g.update.call(this);
        ye(this);
        Mg(this);
        Jg(this);
    };
    e.T = function (a) {
        Fg.g.T.call(this, a, !a.H);
        a = a.c();
        P(a, this.v() + "-child");
        E(a, Tg);
    };
    e.v = function () {
        return "jx-swipe-base";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        Fg.g.w.call(this);
        var a = this.c();
        this.u = D(this.i, "DIV");
        a.appendChild(this.u);
        a = this.c();
        P(a, this.v());
        E(a, Ug);
        a = this.ia();
        P(a, this.v() + "-content");
        E(a, Vg);
    };
    var Ug = { position: "relative", overflow: "hidden" },
        Vg = { position: "relative" },
        Tg = { position: "absolute", opacity: 0 };
    function Wg(a) {
        Fg.call(this, a);
        this.h = null;
        this.S = Xg;
        this.K = Yg;
        this.R = Zg;
        this.l = null;
    }
    p(Wg, Fg);
    var Yg = 250,
        Zg = 0.2,
        Xg = 16;
    function $g(a, b) {
        var c = a.f.width + a.S;
        b *= c;
        c = b + c * a.h;
        Rg(a, L(a, a.a).c(), b, 1);
        Rg(a, L(a, a.b).c(), c, 1);
    }
    e = Wg.prototype;
    e.Hc = function () {
        this.l && this.o.reset();
        A(this, "swipestart");
    };
    e.Gc = function (a) {
        a = a.offset / this.f.width;
        if (!this.l) {
            var b = 0 <= a ? -1 : 1;
            if (this.h != b) {
                this.h = b;
                b = this.a;
                var c = this.a;
                var d = K(this);
                this.b = c = 1 == this.h ? (c >= d - 1 ? 0 : c + 1) : (0 == c ? d : c) - 1;
                Qg(this);
                Pg(this);
                ne(Sg(this, b, 0, 2));
                me(Sg(this, c, 0, 1, !0));
            }
            $g(this, a);
        }
    };
    e.xc = function () {
        clearTimeout(this.l);
        this.l = null;
        A(this, "swipefinish");
    };
    e.Fc = function (a) {
        if (this.h) {
            var b = (a = Math.abs(a.offset / this.f.width) > this.R) ? -this.h : 0,
                c = 0.001 * this.K + "s";
            Og(L(this, this.b).c(), "left " + c + " ease-out");
            Og(L(this, this.a).c(), "left " + c + " ease-out");
            $g(this, b);
            this.l = setTimeout(m(this.xc, this), 1.2 * this.K);
            this.h = null;
            a && ((this.a = this.b), A(this, "index"));
        }
    };
    e.A = function () {
        Wg.g.A.call(this);
        this.o = new Dg(this);
        y(this.o, "cgtart", this.Hc, !1, this);
        y(this.o, "cgmove", this.Gc, !1, this);
        y(this.o, "cgfinish", this.Fc, !1, this);
    };
    function ah(a) {
        M.call(this, a);
        this.C = this.f = this.j = this.o = null;
        this.l = !1;
    }
    p(ah, M);
    e = ah.prototype;
    e.ma = function (a) {
        this.o = a;
        O(this) && bh(this);
    };
    e.la = function (a) {
        this.C = a;
        O(this) && ch(this);
    };
    function bh(a) {
        gc(a.c(), !!a.o);
        $b(a.G, null !== a.o ? a.o : "");
    }
    function dh(a) {
        gc(a.u, !!a.j);
        $b(a.u, null !== a.j ? a.j : "");
    }
    function ch(a) {
        gc(a.h, !!a.f);
        E(a.b, a.f ? eh : {});
        null !== a.f && (a.h.src = a.f);
    }
    e.update = function () {
        ah.g.update.call(this);
        bh(this);
        dh(this);
        ch(this);
        this.H && (this.C ? (this.a.setAttribute("href", this.C), this.a.setAttribute("target", "parent"), E(this.a, fh)) : (this.a.removeAttribute("href"), this.a.removeAttribute("target"), E(this.a, gh)));
        E(this.a, this.l ? hh : ih);
        E(this.h, this.l ? jh : kh);
    };
    e.v = function () {
        return "jx-carousel-title";
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        ah.g.w.call(this);
        var a = this.c(),
            b = this.i;
        this.a = D(b, "A");
        this.b = D(b, "DIV");
        this.s = D(b, "DIV");
        this.h = D(b, "IMG");
        this.b.appendChild(this.h);
        this.G = D(b, "DIV");
        this.u = D(b, "DIV");
        this.s.appendChild(this.G);
        this.s.appendChild(this.u);
        this.a.appendChild(this.b);
        this.a.appendChild(this.s);
        a.appendChild(this.a);
        a = this.c();
        P(a, this.v());
        E(a, lh);
        E(this.a, mh);
        E(this.b, nh);
        E(this.h, oh);
        E(this.s, ph);
        E(this.G, qh);
        E(this.u, rh);
        E(a, lh);
        E(a, lh);
    };
    var lh = { height: "48px" },
        mh = { "font-family": '"YouTube Noto", Roboto, Arial, Helvetica, sans-serif', "font-weight": "normal", color: "#FFF", display: "flex", "flex-direction": "row", "align-items": "center", height: "100%", "text-decoration": "none" },
        gh = { cursor: "arrow" },
        fh = { cursor: "pointer" },
        ih = { "font-size": "18px" },
        hh = { "font-size": "14px" },
        nh = { "align-items": "center", "margin-left": "12px", height: "100%" },
        eh = { display: "flex" },
        oh = { width: "40px", height: "40px", "border-radius": "50%" },
        kh = { width: "40px", height: "40px" },
        jh = { width: "32px", height: "32px" },
        ph = { "margin-left": "12px" },
        qh = { "white-space": "nowrap", "text-overflow": "ellipsis", "max-width": "70vw", overflow: "hidden", padding: 0 },
        rh = { "font-size": "72%", padding: "2px 0 0 0", opacity: 0.8 };
    function sh(a, b) {
        M.call(this, b);
        this.b = a;
        this.a = this.Ia = !1;
    }
    p(sh, M);
    function th(a) {
        E(a.c(), a.a ? uh : a.Ia ? vh : wh);
    }
    e = sh.prototype;
    e.update = function () {
        sh.g.update.call(this);
        th(this);
    };
    e.D = function () {
        E(this.c(), xh);
    };
    e.w = function () {
        sh.g.w.call(this);
        E(this.c(), xh);
    };
    e.bb = function (a) {
        a.stopPropagation();
        A(this, new yh("select", this.b));
    };
    e.cb = function (a) {
        a.stopPropagation();
        this.a = !0;
        th(this);
    };
    e.eb = function (a) {
        a.stopPropagation();
        this.a = !1;
        th(this);
    };
    e.A = function () {
        sh.g.A.call(this);
        var a = H(this),
            b = this.c();
        G(a, b, "click", this.bb);
        G(a, b, "mouseenter", this.cb);
        G(a, b, "mouseleave", this.eb);
    };
    e.ha = function () {
        sh.g.ha.call(this);
        var a = H(this),
            b = this.c();
        oc(a, b, "click", this.bb);
        oc(a, b, "mouseenter", this.cb);
        oc(a, b, "mouseleave", this.eb);
    };
    e.N = function () {
        sh.g.N.call(this);
    };
    var xh = { width: "8px", height: "8px", "border-radius": "4px", margin: "4px", transition: "opacity 0.125s linear" },
        wh = { opacity: 0.4 },
        uh = { opacity: 1 },
        vh = { opacity: 0.8 };
    function yh(a, b) {
        v.call(this, a);
        this.B = b;
    }
    p(yh, v);
    function zh(a) {
        M.call(this, a);
        this.b = Ah;
        this.f = this.a = 0;
    }
    p(zh, M);
    function Bh(a) {
        a = uc(a);
        t(a, function (b) {
            Na(b);
        });
        a = null;
    }
    function Ch(a) {
        if (a.a != K(a)) {
            Bh(a);
            for (var b = a.i, c = 0; c < a.a; c++) {
                var d = new sh(c, b);
                d.M(!1);
                a.T(d, !0);
                E(d.c(), Dh);
            }
        }
    }
    function Eh(a) {
        if (ea(a.b)) {
            var b = yc(a.b);
            J(a, function (c) {
                E(c.c(), "background-color", b);
            });
        }
    }
    function Fh(a) {
        J(
            a,
            function (b, c) {
                c = this.f == c;
                b.Ia != c && ((b.Ia = c), O(b) && th(b));
            },
            a
        );
    }
    zh.prototype.update = function () {
        zh.g.update.call(this);
        Ch(this);
        Eh(this);
        Fh(this);
        J(this, function (a) {
            a.update();
        });
    };
    zh.prototype.v = function () {
        return "jx-carousel-navigator";
    };
    zh.prototype.D = function () {
        throw Error("Method not supported");
    };
    zh.prototype.w = function () {
        zh.g.w.call(this);
        E(this.c(), Gh);
    };
    var Gh = { width: "100%", "text-align": "center" },
        Dh = { display: "inline-block", cursor: "pointer" },
        Ah = [255, 255, 255];
    function yf(a) {
        xg.call(this, a);
    }
    p(yf, xg);
    yf.prototype.u = function () {
        return If;
    };
    yf.prototype.b = function () {
        yf.g.b.call(this);
        E(this.c(), Hh);
    };
    var Hh = { left: 0 };
    function Ih(a) {
        M.call(this, a);
        this.b = new Wg(this.i);
        this.j = new Ib(this.Xa);
        this.u = !0;
        this.f = this.Va;
        this.C = this.Wa;
        this.J = this.K = !1;
    }
    p(Ih, M);
    e = Ih.prototype;
    e.Xa = 5e3;
    e.Va = !0;
    e.Wa = !0;
    function Jh(a) {
        a.f && !a.K && 1 < K(a.b) && a.j.start();
    }
    e.play = function () {
        this.f = !0;
        this.b.play();
    };
    e.stop = function () {
        this.f = !1;
        this.b.stop();
    };
    e.next = function () {
        var a = this.b;
        a.a < K(a) - 1 ? Ig(a, a.a + 1) : Ig(a, 0);
        Kh(this);
    };
    function Lh(a) {
        var b;
        if ((b = !a.C)) (b = a.b), (b = b.b == K(b) - 1);
        b ? a.stop() : a.u && a.next();
    }
    function Mh(a) {
        var b = hc(a.c());
        a = a.b;
        a.f = b;
        O(a) && Mg(a);
    }
    function Nh(a) {
        a = a.b.f;
        return 360 >= a.width || 360 >= a.height;
    }
    function Kh(a) {
        a.K = !1;
        Jg(a.b);
    }
    e.X = function () {
        Mh(this);
        Mg(this.b);
    };
    e.update = function () {
        Ih.g.update.call(this);
        Mh(this);
        this.b.update();
    };
    e.D = function () {
        throw Error("Method not supported");
    };
    e.w = function () {
        Ih.g.w.call(this);
        this.T(this.b, !0);
        var a = this.c();
        P(a, this.v());
        E(a, Oh);
    };
    e.Ib = function () {
        Lh(this);
        this.j.stop();
    };
    e.zb = function () {
        this.u && Jh(this);
        this.f && this.b.play();
    };
    e.Bb = function () {
        this.K = !0;
        this.j.stop();
    };
    e.Ab = function () {
        this.K = !1;
        Lh(this);
    };
    e.oa = function () {
        this.J = !0;
    };
    e.na = function () {
        this.J = !1;
    };
    e.A = function () {
        Ih.g.A.call(this);
        H(this);
        y(this.j, "tick", this.Ib, !1, this);
        var a = this.b;
        y(a, Vd, this.zb, !1, this);
        y(a, Ud, this.Bb, !1, this);
        y(a, Wd, this.Ab, !1, this);
        y(a, "swipestart", this.oa, !1, this);
        y(a, "swipefinish", this.na, !1, this);
    };
    var Oh = { position: "relative", overflow: "hidden", width: "100%", height: "100%" };
    function Z(a) {
        Ih.call(this, a);
        a = this.i;
        this.h = new ah(a);
        this.a = new jg(a);
        this.V = new je();
        this.R = null;
        this.l = this.o = this.G = !1;
    }
    p(Z, Ih);
    e = Z.prototype;
    e.Xa = 5e3;
    e.Va = !1;
    e.Wa = !1;
    e.ma = function (a, b, c, d) {
        this.h.ma(a);
        a = this.h;
        a.j = b ? b : null;
        O(a) && dh(a);
        b = this.h;
        b.f = c ? c : null;
        O(b) && ch(b);
        this.h.la(d ? d : null);
    };
    e.xa = function (a) {
        this.a.xa(a);
    };
    e.la = function (a) {
        this.R = a;
    };
    e.da = function (a) {
        this.a.da(a);
    };
    e.ka = function (a) {
        this.a.ka(a);
    };
    e.play = function () {
        Z.g.play.call(this);
        Y(this.a.h, this.f);
        this.a.update();
    };
    e.stop = function () {
        Z.g.stop.call(this);
        Y(this.a.h, this.f);
        this.a.update();
    };
    function Ph(a) {
        var b = Nh(a),
            c = a.h;
        c.l = b;
        O(c) && c.update();
        a.a.ba(b);
    }
    function Qh(a) {
        var b = a.c();
        B(a, Rh) ? A(a, Rh) : !oe && b && qe(b);
        a.o = a.G = !0;
        a.X();
    }
    function Sh(a) {
        B(a, Th) ? A(a, Th) : oe && se();
        a.o = a.G = !1;
        a.X();
    }
    e.X = function () {
        Z.g.update.call(this);
        Ph(this);
        this.h.update();
        this.a.update();
    };
    e.update = function () {
        Z.g.update.call(this);
        Ph(this);
        Y(this.a.h, this.f);
        Y(this.a.f, this.C);
        Y(this.a.a, this.G);
        Y(this.a.b, this.l);
        this.h.update();
        this.a.update();
    };
    e.v = function () {
        return "jx-gallery";
    };
    e.w = function () {
        Z.g.w.call(this);
        var a = this.b.c();
        N(this.a);
        this.a.$(a);
        N(this.h);
        bf(this.a, this.h);
        a = this.c();
        P(a, this.v());
        E(a, Uh);
        E(this.a.c(), Vh);
        wg(this.i);
    };
    e.dc = function () {
        this.stop();
        Lg(this.b);
        Kh(this);
    };
    e.gc = function () {
        this.stop();
        this.next();
    };
    e.ec = function () {
        this.R && window.open(this.R, "_blank");
    };
    e.ac = function () {
        var a = Kg(this.b).ja();
        a && window.open(a, "_blank");
    };
    e.$b = function () {
        this.o = !1;
        this.o !== this.G && (this.o ? Qh(this) : Sh(this));
    };
    e.hc = function () {};
    e.fc = function () {
        this.f ? this.stop() : this.play();
    };
    e.Ec = function () {
        this.C = !this.C;
        Y(this.a.f, this.C);
        this.a.update();
    };
    e.bc = function () {
        this.o ? Sh(this) : Qh(this);
        Y(this.a.a, this.G);
        this.a.update();
    };
    e.cc = function () {
        if (this.l) {
            var a = (a = this.i) ? a.a : Qb().a;
            a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen();
        } else (a = this.c()) && vg(a);
        this.l = !this.l;
        Y(this.a.b, this.l);
        this.a.update();
    };
    e.Za = function () {
        this.u = !1;
        this.j.stop();
    };
    e.Ya = function () {
        this.J || ((this.u = !0), Jh(this));
    };
    e.oa = function (a) {
        Z.g.oa.call(this, a);
        this.Za(a);
    };
    e.na = function (a) {
        Z.g.na.call(this, a);
        this.Ya(a);
    };
    e.ic = function () {
        var a = wg(this.i);
        this.l !== a && ((this.l = a), Y(this.a.b, this.l), this.a.update());
        this.X();
    };
    e.xb = function (a) {
        switch (a.B) {
            case 37:
                Lg(this.b);
                Kh(this);
                break;
            case 39:
                this.next();
                break;
            case 122:
                if (!wg(this.i)) {
                    var b = this.c();
                    b && vg(b);
                }
                a.a();
                break;
            case 80:
                this.f ? this.stop() : this.play();
                break;
            case 27:
                this.o && (Sh(this), Y(this.a.a, this.G), a.a());
        }
    };
    e.A = function () {
        Z.g.A.call(this);
        y(this.a, rg, this.dc, !1, this);
        y(this.a, sg, this.gc, !1, this);
        y(this.a, tg, this.ec, !1, this);
        y(this.a, ug, this.ac, !1, this);
        y(this.a, lg, this.$b, !1, this);
        y(this.a, mg, this.hc, !1, this);
        y(this.a, ng, this.fc, !1, this);
        y(this.a, og, this.Ec, !1, this);
        y(this.a, pg, this.bc, !1, this);
        y(this.a, qg, this.cc, !1, this);
        y(this.a, "show", this.Za, !1, this);
        y(this.a, "hide", this.Ya, !1, this);
        x(this.V, "resize", this.ic, !1, this);
        x(Sb(this.c()), "keydown", this.xb, !1, this);
    };
    var Uh = { position: "relative", overflow: "hidden", width: "100%", height: "100%" },
        Vh = { position: "absolute", top: 0, "z-index": 5 },
        Rh = "reuestfullpage",
        Th = "exitfullpage";
    function Wh(a) {
        T.call(this, a);
        this.a = new Z(this.i);
    }
    p(Wh, T);
    e = Wh.prototype;
    e.Da = function () {
        return new Xh();
    };
    e.ta = function () {
        return new Yh();
    };
    function Zh(a) {
        var b = a.Y;
        a.a.M(!1);
        uc(a.a.b);
        t(
            b.aa,
            function (c) {
                var d = new le();
                d.M(!1);
                ze(d, c);
                this.a.b.T(d, !d.H);
            },
            a
        );
        xe(a, a.a, b);
        Vf(a.a.a.f, b.i);
        Vf(a.a.a.a, b.a);
        Vf(a.a.a.b, b.b);
        a.a.M(!0);
        Kb(
            function () {
                this.a.update();
            },
            0,
            a
        );
    }
    e.refresh = function () {
        this.a.X();
    };
    e.update = function () {
        Zh(this);
    };
    e.v = function () {
        return "jx-gallery-widget";
    };
    e.D = function (a) {
        Wh.g.D.call(this, a);
        P(a, this.v());
        Be(
            this,
            function () {
                I(this.a, this.b);
            }.bind(this)
        );
    };
    e.Zb = function () {
        qe(this.f || this.c());
    };
    e.Yb = function () {
        se();
    };
    e.A = function () {
        Wh.g.A.call(this);
        var a = H(this);
        G(a, this.a, Rh, this.Zb);
        G(a, this.a, Th, this.Yb);
    };
    function Xh() {
        Fe.call(this);
        this.m = !1;
        this.b = this.a = this.i = !0;
    }
    p(Xh, Fe);
    Xh.prototype.B = function (a) {
        Xh.g.B.call(this, a);
        this.i = S(q(a, "showRepeatSwitch"), this.i);
        this.a = S(q(a, "showFullpageSwitch"), this.a);
        this.b = S(q(a, "showFullscreenSwitch"), this.b);
    };
    function Yh() {
        Ge.call(this);
    }
    p(Yh, Ge);
    n("GalleryWidget", Wh);
    n("GalleryWidget.prototype.decorate", Wh.prototype.$);
    n("GalleryWidget.prototype.setDataset", Wh.prototype.Ja);
    n("GalleryWidget.prototype.refresh", Wh.prototype.refresh);
    n("GalleryWidget.prototype.update", Wh.prototype.update);
    function $h(a) {
        W.call(this, Sf, a);
        this.b = !0;
    }
    p($h, W);
    e = $h.prototype;
    e.w = function () {
        $h.g.w.call(this);
        E(this.c(), ai);
        E(this.a.c(), bi);
        this.o = new C(128, 128);
        O(this) && Ue(this);
    };
    e.vb = function () {
        Ne(this, !1);
        Oe(this);
        this.b && A(this, ci);
    };
    function di(a) {
        a.o = new C(256, 256);
        O(a) && Ue(a);
        Ue(a);
        F(a.a.c(), 0);
        Kb(a.vb, 360, a);
    }
    e.fb = function (a) {
        a.stopPropagation();
        a.a();
        oc(H(this), this.c(), "click", this.fb);
        this.b = !0;
        di(this);
    };
    e.ab = function () {
        oc(H(this), Zb(this.c()), "click", this.ab);
        this.b = !1;
        di(this);
    };
    e.A = function () {
        $h.g.A.call(this);
        var a = H(this);
        G(a, this.c(), "click", this.fb);
        G(a, Zb(this.c()), "click", this.ab);
    };
    var ai = { position: "absolute", top: "20%", right: "20%", bottom: "20%", left: "20%", "z-index": 1001, display: "flex", "justify-content": "center", "align-items": "center" },
        bi = { transition: "width 0.36s ease-out,height 0.36s ease-out,opacity 0.36s ease-out" },
        ci = "playerbuttonclick";
    function ei(a) {
        Z.call(this, a);
        a = this.i;
        this.S = !0;
        this.s = new $h(a);
    }
    p(ei, Z);
    e = ei.prototype;
    e.X = function () {
        ei.g.update.call(this);
        Te(this.s, Nh(this));
        this.s.update();
    };
    e.update = function () {
        ei.g.update.call(this);
        Te(this.s, Nh(this));
        this.s.update();
    };
    e.v = function () {
        return "jx-gallery-player";
    };
    e.w = function () {
        ei.g.w.call(this);
        N(this.s);
        I(this.s, this.a.c());
        var a = this.c();
        P(a, this.v());
        E(a, fi);
    };
    e.yc = function () {
        this.S && Qh(this);
        this.play();
    };
    e.A = function () {
        ei.g.A.call(this);
        y(this.s, ci, this.yc, !1, this);
    };
    var fi = {};
    function gi(a) {
        T.call(this, a);
        this.a = new ei(this.i);
    }
    p(gi, T);
    e = gi.prototype;
    e.Da = function () {
        return new hi();
    };
    e.ta = function () {
        return new ii();
    };
    function ji(a) {
        var b = a.Y;
        a.a.M(!1);
        uc(a.a.b);
        t(
            b.aa,
            function (c) {
                var d = new le();
                d.M(!1);
                ze(d, c);
                this.a.b.T(d, !d.H);
            },
            a
        );
        xe(a, a.a, b);
        a.a.S = b.f && b.a;
        Vf(a.a.a.f, b.i);
        Vf(a.a.a.a, b.a);
        Vf(a.a.a.b, b.b);
    }
    e.refresh = function () {
        this.a.X();
    };
    e.update = function () {
        ji(this);
    };
    e.v = function () {
        return "jx-gallery-player-widget";
    };
    e.D = function (a) {
        gi.g.D.call(this, a);
        P(a, this.v());
        Be(
            this,
            function () {
                I(this.a, this.b);
                this.a.M(!0);
                this.a.update();
            }.bind(this)
        );
    };
    e.Xb = function () {
        qe(this.f || this.c());
    };
    e.Wb = function () {
        se();
    };
    e.A = function () {
        gi.g.A.call(this);
        var a = H(this);
        G(a, this.a, Rh, this.Xb);
        G(a, this.a, Th, this.Wb);
    };
    function hi() {
        Fe.call(this);
        this.m = !1;
        this.b = this.a = this.i = this.f = this.F = !0;
    }
    p(hi, Fe);
    hi.prototype.B = function (a) {
        hi.g.B.call(this, a);
        this.f = S(q(a, "fullpageAutoplay"), this.f);
        this.i = S(q(a, "showRepeatSwitch"), this.i);
        this.a = S(q(a, "showFullpageSwitch"), this.a);
        this.b = S(q(a, "showFullscreenSwitch"), this.b);
    };
    function ii() {
        Ge.call(this);
    }
    p(ii, Ge);
    n("GalleryPlayerWidget", gi);
    n("GalleryPlayerWidget.prototype.decorate", gi.prototype.$);
    n("GalleryPlayerWidget.prototype.setDataset", gi.prototype.Ja);
    n("GalleryPlayerWidget.prototype.refresh", gi.prototype.refresh);
    n("GalleryPlayerWidget.prototype.update", gi.prototype.update);
    var ki = {
        Ua: "decorated",
        ob: function (a, b) {
            a.call().$(b);
        },
        qb: function (a, b) {
            q(b, ki.Ua, !1) || (ki.ob(a, b), (b[ki.Ua] = !0));
        },
        ua: function (a, b, c) {
            t(Tb(a, c), function (d) {
                ki.qb(b, d);
            });
        },
    };
    function li(a) {
        Ih.call(this, a);
        a = this.i;
        this.h = new ah(a);
        this.a = new xf(a);
        this.l = new zh(a);
        this.o = null;
    }
    p(li, Ih);
    e = li.prototype;
    e.ma = function (a, b, c, d) {
        this.h.ma(a);
        a = this.h;
        a.j = b ? b : null;
        O(a) && dh(a);
        b = this.h;
        b.f = c ? c : null;
        O(b) && ch(b);
        this.h.la(d ? d : null);
    };
    e.la = function (a) {
        this.o = a;
    };
    e.xa = function (a) {
        this.a.da(a);
    };
    e.da = function (a) {
        this.a.da(a);
    };
    e.ka = function (a) {
        this.a.ka(a);
    };
    function mi(a) {
        var b = Nh(a),
            c = a.h;
        c.l = b;
        O(c) && c.update();
        a.a.ba(b);
    }
    e.X = function () {
        li.g.X.call(this);
        mi(this);
        this.h.update();
        this.a.update();
    };
    e.update = function () {
        li.g.update.call(this);
        mi(this);
        this.h.update();
        this.a.update();
        var a = K(this.b),
            b = this.l;
        b.a = 1 < a && 12 >= a ? K(this.b) : 0;
        O(b) && Ch(b);
        this.l.update();
    };
    e.v = function () {
        return "jx-carousel";
    };
    e.w = function () {
        li.g.w.call(this);
        var a = this.b.c();
        N(this.a);
        this.a.$(a);
        N(this.h);
        bf(this.a, this.h);
        N(this.l);
        I(this.l, a);
        a = this.c();
        P(a, this.v());
        E(a, ni);
        E(this.a.c(), oi);
        E(this.l.c(), pi);
    };
    e.Ob = function () {
        this.stop();
        Lg(this.b);
        Kh(this);
    };
    e.Qb = function () {
        this.stop();
        this.next();
    };
    e.Pb = function () {
        this.o && window.open(this.o, "_blank");
    };
    e.Nb = function () {
        var a = Kg(this.b).ja();
        a && window.open(a, "_blank");
    };
    e.mb = function () {
        var a = this.l;
        a.f = this.b.b;
        O(a) && Fh(a);
        this.l.update();
    };
    e.rb = function (a) {
        a = a.B;
        a != this.b.b && (this.a.isVisible() || (this.j.stop(), Jh(this)), Ig(this.b, a), Kh(this));
    };
    e.Ta = function () {
        this.u = !1;
        this.j.stop();
    };
    e.Sa = function () {
        this.J || (this.play(), (this.u = !0), Jh(this));
    };
    e.oa = function (a) {
        li.g.oa.call(this, a);
        this.Ta(a);
    };
    e.na = function (a) {
        li.g.na.call(this, a);
        this.Sa(a);
    };
    e.A = function () {
        li.g.A.call(this);
        y(this.a, rg, this.Ob, !1, this);
        y(this.a, sg, this.Qb, !1, this);
        y(this.a, Ef, this.Pb, !1, this);
        y(this.a, Ff, this.Nb, !1, this);
        y(this.a, "show", this.Ta, !1, this);
        y(this.a, "hide", this.Sa, !1, this);
        y(this.l, "select", this.rb, !1, this);
        y(this.b, "index", this.mb, !1, this);
    };
    var ni = { position: "relative", overflow: "hidden", width: "100%", height: "100%" },
        oi = { position: "absolute", top: 0, "z-index": 2 },
        pi = { position: "absolute", bottom: "64px", "z-index": 101 };
    function qi(a) {
        T.call(this, a);
        this.a = new li(this.i);
    }
    p(qi, T);
    e = qi.prototype;
    e.Da = function () {
        return new ri();
    };
    e.ta = function () {
        return new si();
    };
    function ti(a) {
        var b = a.Y;
        a.a.M(!0);
        uc(a.a.b);
        t(
            b.aa,
            function (c) {
                var d = new le();
                d.M(!1);
                ze(d, c);
                this.a.b.T(d, !d.H);
            },
            a
        );
        xe(a, a.a, b);
        a.a.M(!0);
        Kb(
            function () {
                this.a.update();
            },
            0,
            a
        );
    }
    e.refresh = function () {
        this.a.X();
    };
    e.update = function () {
        ti(this);
    };
    e.v = function () {
        return "jx-carousel-widget";
    };
    e.D = function (a) {
        qi.g.D.call(this, a);
        P(a, this.v());
        Be(
            this,
            function () {
                I(this.a, this.b);
            }.bind(this)
        );
    };
    function ri() {
        Fe.call(this);
        this.m = !0;
    }
    p(ri, Fe);
    function si() {
        Ge.call(this);
    }
    p(si, Ge);
    n("CarouselWidget", qi);
    n("CarouselWidget.prototype.decorate", qi.prototype.$);
    n("CarouselWidget.prototype.setDataset", qi.prototype.Ja);
    n("CarouselWidget.prototype.refresh", qi.prototype.refresh);
    n("CarouselWidget.prototype.update", qi.prototype.update);
    function ui() {
        ki.ua("pa-carousel-widget", function () {
            return new qi();
        });
        ki.ua("pa-gallery-widget", function () {
            return new Wh();
        });
        ki.ua("pa-gallery-player-widget", function () {
            return new gi();
        });
    }
    x(document, "DOMContentLoaded", ui);
    ui();
    n("WidgetDecorator", ki);
    n("WidgetDecorator.decorateAll", ki.ua);
}.call(this));
