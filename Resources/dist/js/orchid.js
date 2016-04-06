(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)return a(o, !0);
                if (i)return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
        !function (a, b) {
            "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
                if (!a.document)throw new Error("jQuery requires a window with a document");
                return b(a);
            } : b(a);
        }("undefined" != typeof window ? window : undefined, function (a, b) {
            var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function n(a, b) {
                return new n.fn.init(a, b);
            }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function r(a, b) {
                return b.toUpperCase();
            };
            n.fn = n.prototype = {
                jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
                    return d.call(this);
                }, get: function get(a) {
                    return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
                }, pushStack: function pushStack(a) {
                    var b = n.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b;
                }, each: function each(a, b) {
                    return n.each(this, a, b);
                }, map: function map(a) {
                    return this.pushStack(n.map(this, function (b, c) {
                        return a.call(b, c, b);
                    }));
                }, slice: function slice() {
                    return this.pushStack(d.apply(this, arguments));
                }, first: function first() {
                    return this.eq(0);
                }, last: function last() {
                    return this.eq(-1);
                }, eq: function eq(a) {
                    var b = this.length, c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
                }, end: function end() {
                    return this.prevObject || this.constructor(null);
                }, push: f, sort: c.sort, splice: c.splice
            }, n.extend = n.fn.extend = function () {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
                    if (null != (a = arguments[h]))for (b in a) {
                        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                    }
                }
                return g;
            }, n.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function error(a) {
                    throw new Error(a);
                },
                noop: function noop() {
                },
                isFunction: function isFunction(a) {
                    return "function" === n.type(a);
                },
                isArray: Array.isArray,
                isWindow: function isWindow(a) {
                    return null != a && a === a.window;
                },
                isNumeric: function isNumeric(a) {
                    return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
                },
                isPlainObject: function isPlainObject(a) {
                    return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
                },
                isEmptyObject: function isEmptyObject(a) {
                    var b;
                    for (b in a) {
                        return !1;
                    }
                    return !0;
                },
                type: function type(a) {
                    return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
                },
                globalEval: function globalEval(a) {
                    var b, c = eval;
                    a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
                },
                camelCase: function camelCase(a) {
                    return a.replace(p, "ms-").replace(q, r);
                },
                nodeName: function nodeName(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
                },
                each: function each(a, b, c) {
                    var d, e = 0, f = a.length, g = s(a);
                    if (c) {
                        if (g) {
                            for (; f > e; e++) {
                                if (d = b.apply(a[e], c), d === !1)break;
                            }
                        } else for (e in a) {
                            if (d = b.apply(a[e], c), d === !1)break;
                        }
                    } else if (g) {
                        for (; f > e; e++) {
                            if (d = b.call(a[e], e, a[e]), d === !1)break;
                        }
                    } else for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1)break;
                    }
                    return a;
                },
                trim: function trim(a) {
                    return null == a ? "" : (a + "").replace(o, "");
                },
                makeArray: function makeArray(a, b) {
                    var c = b || [];
                    return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
                },
                inArray: function inArray(a, b, c) {
                    return null == b ? -1 : g.call(b, a, c);
                },
                merge: function merge(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                        a[e++] = b[d];
                    }
                    return a.length = e, a;
                },
                grep: function grep(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                        d = !b(a[f], f), d !== h && e.push(a[f]);
                    }
                    return e;
                },
                map: function map(a, b, c) {
                    var d, f = 0, g = a.length, h = s(a), i = [];
                    if (h)for (; g > f; f++) {
                        d = b(a[f], f, c), null != d && i.push(d);
                    } else for (f in a) {
                        d = b(a[f], f, c), null != d && i.push(d);
                    }
                    return e.apply([], i);
                },
                guid: 1,
                proxy: function proxy(a, b) {
                    var c, e, f;
                    return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
                        return a.apply(b || this, e.concat(d.call(arguments)));
                    }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
                },
                now: Date.now,
                support: k
            }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
                h["[object " + b + "]"] = b.toLowerCase();
            });
            function s(a) {
                var b = "length" in a && a.length, c = n.type(a);
                return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
            }

            var t = function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function B(a, b) {
                    return a === b && (l = !0), 0;
                }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function J(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        if (a[c] === b)return c;
                    }
                    return -1;
                }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + O),
                    PSEUDO: new RegExp("^" + P),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function da(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
                }, ea = function ea() {
                    m();
                };
                try {
                    H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
                } catch (fa) {
                    H = {
                        apply: E.length ? function (a, b) {
                            G.apply(a, I.call(b));
                        } : function (a, b) {
                            var c = a.length, d = 0;
                            while (a[c++] = b[d++]) {
                            }
                            a.length = c - 1;
                        }
                    };
                }
                function ga(a, b, d, e) {
                    var f, h, j, k, l, o, r, s, w, x;
                    if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
                    if (!e && p) {
                        if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j), !h || !h.parentNode)return d;
                                if (h.id === j)return d.push(h), d;
                            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d;
                        } else {
                            if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d;
                        }
                        if (c.qsa && (!q || !q.test(a))) {
                            if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                                o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                                while (l--) {
                                    o[l] = s + ra(o[l]);
                                }
                                w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                            }
                            if (x)try {
                                return H.apply(d, w.querySelectorAll(x)), d;
                            } catch (y) {
                            } finally {
                                r || b.removeAttribute("id");
                            }
                        }
                    }
                    return i(a.replace(R, "$1"), b, d, e);
                }

                function ha() {
                    var a = [];

                    function b(c, e) {
                        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
                    }

                    return b;
                }

                function ia(a) {
                    return a[u] = !0, a;
                }

                function ja(a) {
                    var b = n.createElement("div");
                    try {
                        return !!a(b);
                    } catch (c) {
                        return !1;
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null;
                    }
                }

                function ka(a, b) {
                    var c = a.split("|"), e = a.length;
                    while (e--) {
                        d.attrHandle[c[e]] = b;
                    }
                }

                function la(a, b) {
                    var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                    if (d)return d;
                    if (c)while (c = c.nextSibling) {
                        if (c === b)return -1;
                    }
                    return a ? 1 : -1;
                }

                function ma(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a;
                    };
                }

                function na(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a;
                    };
                }

                function oa(a) {
                    return ia(function (b) {
                        return b = +b, ia(function (c, d) {
                            var e, f = a([], c.length, b), g = f.length;
                            while (g--) {
                                c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                            }
                        });
                    });
                }

                function pa(a) {
                    return a && "undefined" != typeof a.getElementsByTagName && a;
                }

                c = ga.support = {}, f = ga.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1;
                }, m = ga.setDocument = function (a) {
                    var b, e, g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                        return a.className = "i", !a.getAttribute("className");
                    }), c.getElementsByTagName = ja(function (a) {
                        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
                    }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
                    }), c.getById ? (d.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && p) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : [];
                        }
                    }, d.filter.ID = function (a) {
                        var b = a.replace(ca, da);
                        return function (a) {
                            return a.getAttribute("id") === b;
                        };
                    }) : (delete d.find.ID, d.filter.ID = function (a) {
                        var b = a.replace(ca, da);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b;
                        };
                    }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
                    } : function (a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++]) {
                                1 === c.nodeType && d.push(c);
                            }
                            return d;
                        }
                        return f;
                    }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                            return p ? b.getElementsByClassName(a) : void 0;
                        }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
                    }), ja(function (a) {
                        var b = g.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
                    })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
                    }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                    } : function (a, b) {
                        if (b)while (b = b.parentNode) {
                            if (b === a)return !0;
                        }
                        return !1;
                    }, B = b ? function (a, b) {
                        if (a === b)return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
                    } : function (a, b) {
                        if (a === b)return l = !0, 0;
                        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                        if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                        if (e === f)return la(a, b);
                        c = a;
                        while (c = c.parentNode) {
                            h.unshift(c);
                        }
                        c = b;
                        while (c = c.parentNode) {
                            i.unshift(c);
                        }
                        while (h[d] === i[d]) {
                            d++;
                        }
                        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
                    }, g) : n;
                }, ga.matches = function (a, b) {
                    return ga(a, null, null, b);
                }, ga.matchesSelector = function (a, b) {
                    if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d;
                    } catch (e) {
                    }
                    return ga(b, n, null, [a]).length > 0;
                }, ga.contains = function (a, b) {
                    return (a.ownerDocument || a) !== n && m(a), t(a, b);
                }, ga.attr = function (a, b) {
                    (a.ownerDocument || a) !== n && m(a);
                    var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                    return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
                }, ga.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a);
                }, ga.uniqueSort = function (a) {
                    var b, d = [], e = 0, f = 0;
                    if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                        while (b = a[f++]) {
                            b === a[f] && (e = d.push(f));
                        }
                        while (e--) {
                            a.splice(d[e], 1);
                        }
                    }
                    return k = null, a;
                }, e = ga.getText = function (a) {
                    var b, c = "", d = 0, f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent)return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                c += e(a);
                            }
                        } else if (3 === f || 4 === f)return a.nodeValue;
                    } else while (b = a[d++]) {
                        c += e(b);
                    }
                    return c;
                }, d = ga.selectors = {
                    cacheLength: 50,
                    createPseudo: ia,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function ATTR(a) {
                            return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                        }, CHILD: function CHILD(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                        }, PSEUDO: function PSEUDO(a) {
                            var b, c = !a[6] && a[2];
                            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function TAG(a) {
                            var b = a.replace(ca, da).toLowerCase();
                            return "*" === a ? function () {
                                return !0;
                            } : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b;
                            };
                        }, CLASS: function CLASS(a) {
                            var b = y[a + " "];
                            return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                                    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                                });
                        }, ATTR: function ATTR(a, b, c) {
                            return function (d) {
                                var e = ga.attr(d, a);
                                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                            };
                        }, CHILD: function CHILD(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                            return 1 === d && 0 === e ? function (a) {
                                return !!a.parentNode;
                            } : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            l = b;
                                            while (l = l[p]) {
                                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                            }
                                            o = p = "only" === a && !o && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                        while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [w, n, m];
                                                break;
                                            }
                                        }
                                    } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                                    }
                                    return m -= e, m === d || m % d === 0 && m / d >= 0;
                                }
                            };
                        }, PSEUDO: function PSEUDO(a, b) {
                            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                                var d, f = e(a, b), g = f.length;
                                while (g--) {
                                    d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                                }
                            }) : function (a) {
                                return e(a, 0, c);
                            }) : e;
                        }
                    },
                    pseudos: {
                        not: ia(function (a) {
                            var b = [], c = [], d = h(a.replace(R, "$1"));
                            return d[u] ? ia(function (a, b, c, e) {
                                var f, g = d(a, null, e, []), h = a.length;
                                while (h--) {
                                    (f = g[h]) && (a[h] = !(b[h] = f));
                                }
                            }) : function (a, e, f) {
                                return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                            };
                        }), has: ia(function (a) {
                            return function (b) {
                                return ga(a, b).length > 0;
                            };
                        }), contains: ia(function (a) {
                            return a = a.replace(ca, da), function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                            };
                        }), lang: ia(function (a) {
                            return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                                var c;
                                do {
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            };
                        }), target: function target(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        }, root: function root(a) {
                            return a === o;
                        }, focus: function focus(a) {
                            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                        }, enabled: function enabled(a) {
                            return a.disabled === !1;
                        }, disabled: function disabled(a) {
                            return a.disabled === !0;
                        }, checked: function checked(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected;
                        }, selected: function selected(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                        }, empty: function empty(a) {
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                if (a.nodeType < 6)return !1;
                            }
                            return !0;
                        }, parent: function parent(a) {
                            return !d.pseudos.empty(a);
                        }, header: function header(a) {
                            return Z.test(a.nodeName);
                        }, input: function input(a) {
                            return Y.test(a.nodeName);
                        }, button: function button(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b;
                        }, text: function text(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                        }, first: oa(function () {
                            return [0];
                        }), last: oa(function (a, b) {
                            return [b - 1];
                        }), eq: oa(function (a, b, c) {
                            return [0 > c ? c + b : c];
                        }), even: oa(function (a, b) {
                            for (var c = 0; b > c; c += 2) {
                                a.push(c);
                            }
                            return a;
                        }), odd: oa(function (a, b) {
                            for (var c = 1; b > c; c += 2) {
                                a.push(c);
                            }
                            return a;
                        }), lt: oa(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0;) {
                                a.push(d);
                            }
                            return a;
                        }), gt: oa(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b;) {
                                a.push(d);
                            }
                            return a;
                        })
                    }
                }, d.pseudos.nth = d.pseudos.eq;
                for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) {
                    d.pseudos[b] = ma(b);
                }
                for (b in {submit: !0, reset: !0}) {
                    d.pseudos[b] = na(b);
                }
                function qa() {
                }

                qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
                    var c, e, f, g, h, i, j, k = z[a + " "];
                    if (k)return b ? 0 : k.slice(0);
                    h = a, i = [], j = d.preFilter;
                    while (h) {
                        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                            value: c,
                            type: e[0].replace(R, " ")
                        }), h = h.slice(c.length));
                        for (g in d.filter) {
                            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                                value: c,
                                type: g,
                                matches: e
                            }), h = h.slice(c.length));
                        }
                        if (!c)break;
                    }
                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
                };
                function ra(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++) {
                        d += a[b].value;
                    }
                    return d;
                }

                function sa(a, b, c) {
                    var d = b.dir, e = c && "parentNode" === d, f = x++;
                    return b.first ? function (b, c, f) {
                        while (b = b[d]) {
                            if (1 === b.nodeType || e)return a(b, c, f);
                        }
                    } : function (b, c, g) {
                        var h, i, j = [w, f];
                        if (g) {
                            while (b = b[d]) {
                                if ((1 === b.nodeType || e) && a(b, c, g))return !0;
                            }
                        } else while (b = b[d]) {
                            if (1 === b.nodeType || e) {
                                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g))return !0;
                            }
                        }
                    };
                }

                function ta(a) {
                    return a.length > 1 ? function (b, c, d) {
                        var e = a.length;
                        while (e--) {
                            if (!a[e](b, c, d))return !1;
                        }
                        return !0;
                    } : a[0];
                }

                function ua(a, b, c) {
                    for (var d = 0, e = b.length; e > d; d++) {
                        ga(a, b[d], c);
                    }
                    return c;
                }

                function va(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                    }
                    return g;
                }

                function wa(a, b, c, d, e, f) {
                    return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i), d) {
                            j = va(r, n), d(j, [], h, i), k = j.length;
                            while (k--) {
                                (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                            }
                        }
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    j = [], k = r.length;
                                    while (k--) {
                                        (l = r[k]) && j.push(q[k] = l);
                                    }
                                    e(null, r = [], j, i);
                                }
                                k = r.length;
                                while (k--) {
                                    (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                                }
                            }
                        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
                    });
                }

                function xa(a) {
                    for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                        return a === b;
                    }, h, !0), l = sa(function (a) {
                        return J(b, a) > -1;
                    }, h, !0), m = [function (a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e;
                    }]; f > i; i++) {
                        if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
                            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                                for (e = ++i; f > e; e++) {
                                    if (d.relative[a[e].type])break;
                                }
                                return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                            }
                            m.push(c);
                        }
                    }
                    return ta(m);
                }

                function ya(a, b) {
                    var c = b.length > 0, e = a.length > 0, f = function f(_f, g, h, i, k) {
                        var l, m, o, p = 0, q = "0", r = _f && [], s = [], t = j, u = _f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                m = 0;
                                while (o = a[m++]) {
                                    if (o(l, g, h)) {
                                        i.push(l);
                                        break;
                                    }
                                }
                                k && (w = v);
                            }
                            c && ((l = !o && l) && p--, _f && r.push(l));
                        }
                        if (p += q, c && q !== p) {
                            m = 0;
                            while (o = b[m++]) {
                                o(r, s, g, h);
                            }
                            if (_f) {
                                if (p > 0)while (q--) {
                                    r[q] || s[q] || (s[q] = F.call(i));
                                }
                                s = va(s);
                            }
                            H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                        }
                        return k && (w = v, j = t), r;
                    };
                    return c ? ia(f) : f;
                }

                return h = ga.compile = function (a, b) {
                    var c, d = [], e = [], f = A[a + " "];
                    if (!f) {
                        b || (b = g(a)), c = b.length;
                        while (c--) {
                            f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                        }
                        f = A(a, ya(e, d)), f.selector = a;
                    }
                    return f;
                }, i = ga.select = function (a, b, e, f) {
                    var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                    if (e = e || [], 1 === o.length) {
                        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                            if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
                            n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                        }
                        i = X.needsContext.test(a) ? 0 : j.length;
                        while (i--) {
                            if (k = j[i], d.relative[l = k.type])break;
                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                                if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
                                break;
                            }
                        }
                    }
                    return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
                }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"));
                }), ja(function (a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
                }) || ka("type|href|height|width", function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                }), c.attributes && ja(function (a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                }) || ka("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                }), ja(function (a) {
                    return null == a.getAttribute("disabled");
                }) || ka(K, function (a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }), ga;
            }(a);
            n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
            var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

            function x(a, b, c) {
                if (n.isFunction(b))return n.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c;
                });
                if (b.nodeType)return n.grep(a, function (a) {
                    return a === b !== c;
                });
                if ("string" == typeof b) {
                    if (w.test(b))return n.filter(b, a, c);
                    b = n.filter(b, a);
                }
                return n.grep(a, function (a) {
                    return g.call(b, a) >= 0 !== c;
                });
            }

            n.filter = function (a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
                    return 1 === a.nodeType;
                }));
            }, n.fn.extend({
                find: function find(a) {
                    var b, c = this.length, d = [], e = this;
                    if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                        for (b = 0; c > b; b++) {
                            if (n.contains(e[b], this))return !0;
                        }
                    }));
                    for (b = 0; c > b; b++) {
                        n.find(a, e[b], d);
                    }
                    return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
                }, filter: function filter(a) {
                    return this.pushStack(x(this, a || [], !1));
                }, not: function not(a) {
                    return this.pushStack(x(this, a || [], !0));
                }, is: function is(a) {
                    return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
                }
            });
            var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
                var c, d;
                if (!a)return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b) {
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        }
                        return this;
                    }
                    return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
            };
            A.prototype = n.fn, y = n(l);
            var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
            n.extend({
                dir: function dir(a, b, c) {
                    var d = [], e = void 0 !== c;
                    while ((a = a[b]) && 9 !== a.nodeType) {
                        if (1 === a.nodeType) {
                            if (e && n(a).is(c))break;
                            d.push(a);
                        }
                    }
                    return d;
                }, sibling: function sibling(a, b) {
                    for (var c = []; a; a = a.nextSibling) {
                        1 === a.nodeType && a !== b && c.push(a);
                    }
                    return c;
                }
            }), n.fn.extend({
                has: function has(a) {
                    var b = n(a, this), c = b.length;
                    return this.filter(function () {
                        for (var a = 0; c > a; a++) {
                            if (n.contains(this, b[a]))return !0;
                        }
                    });
                }, closest: function closest(a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                        for (c = this[d]; c && c !== b; c = c.parentNode) {
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                                f.push(c);
                                break;
                            }
                        }
                    }
                    return this.pushStack(f.length > 1 ? n.unique(f) : f);
                }, index: function index(a) {
                    return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                }, add: function add(a, b) {
                    return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
                }, addBack: function addBack(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
                }
            });
            function D(a, b) {
                while ((a = a[b]) && 1 !== a.nodeType) {
                }
                return a;
            }

            n.each({
                parent: function parent(a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                }, parents: function parents(a) {
                    return n.dir(a, "parentNode");
                }, parentsUntil: function parentsUntil(a, b, c) {
                    return n.dir(a, "parentNode", c);
                }, next: function next(a) {
                    return D(a, "nextSibling");
                }, prev: function prev(a) {
                    return D(a, "previousSibling");
                }, nextAll: function nextAll(a) {
                    return n.dir(a, "nextSibling");
                }, prevAll: function prevAll(a) {
                    return n.dir(a, "previousSibling");
                }, nextUntil: function nextUntil(a, b, c) {
                    return n.dir(a, "nextSibling", c);
                }, prevUntil: function prevUntil(a, b, c) {
                    return n.dir(a, "previousSibling", c);
                }, siblings: function siblings(a) {
                    return n.sibling((a.parentNode || {}).firstChild, a);
                }, children: function children(a) {
                    return n.sibling(a.firstChild);
                }, contents: function contents(a) {
                    return a.contentDocument || n.merge([], a.childNodes);
                }
            }, function (a, b) {
                n.fn[a] = function (c, d) {
                    var e = n.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
                };
            });
            var E = /\S+/g, F = {};

            function G(a) {
                var b = F[a] = {};
                return n.each(a.match(E) || [], function (a, c) {
                    b[c] = !0;
                }), b;
            }

            n.Callbacks = function (a) {
                a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
                var b, c, d, e, f, g, h = [], i = !a.once && [], j = function j(l) {
                    for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
                        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break;
                        }
                    }
                    d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
                }, k = {
                    add: function add() {
                        if (h) {
                            var c = h.length;
                            !function g(b) {
                                n.each(b, function (b, c) {
                                    var d = n.type(c);
                                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                                });
                            }(arguments), d ? f = h.length : b && (e = c, j(b));
                        }
                        return this;
                    }, remove: function remove() {
                        return h && n.each(arguments, function (a, b) {
                            var c;
                            while ((c = n.inArray(b, h, c)) > -1) {
                                h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                            }
                        }), this;
                    }, has: function has(a) {
                        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                    }, empty: function empty() {
                        return h = [], f = 0, this;
                    }, disable: function disable() {
                        return h = i = b = void 0, this;
                    }, disabled: function disabled() {
                        return !h;
                    }, lock: function lock() {
                        return i = void 0, b || k.disable(), this;
                    }, locked: function locked() {
                        return !i;
                    }, fireWith: function fireWith(a, b) {
                        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
                    }, fire: function fire() {
                        return k.fireWith(this, arguments), this;
                    }, fired: function fired() {
                        return !!c;
                    }
                };
                return k;
            }, n.extend({
                Deferred: function Deferred(a) {
                    var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                        state: function state() {
                            return c;
                        }, always: function always() {
                            return e.done(arguments).fail(arguments), this;
                        }, then: function then() {
                            var a = arguments;
                            return n.Deferred(function (c) {
                                n.each(b, function (b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function () {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                                    });
                                }), a = null;
                            }).promise();
                        }, promise: function promise(a) {
                            return null != a ? n.extend(a, d) : d;
                        }
                    }, e = {};
                    return d.pipe = d.then, n.each(b, function (a, f) {
                        var g = f[2], h = f[3];
                        d[f[1]] = g.add, h && g.add(function () {
                            c = h;
                        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                            return e[f[0] + "With"](this === e ? d : this, arguments), this;
                        }, e[f[0] + "With"] = g.fireWith;
                    }), d.promise(e), a && a.call(e, e), e;
                }, when: function when(a) {
                    var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function h(a, b, c) {
                        return function (e) {
                            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                        };
                    }, i, j, k;
                    if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                    }
                    return f || g.resolveWith(k, c), g.promise();
                }
            });
            var H;
            n.fn.ready = function (a) {
                return n.ready.promise().done(a), this;
            }, n.extend({
                isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
                    a ? n.readyWait++ : n.ready(!0);
                }, ready: function ready(a) {
                    (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
                }
            });
            function I() {
                l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
            }

            n.ready.promise = function (b) {
                return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
            }, n.ready.promise();
            var J = n.access = function (a, b, c, d, e, f, g) {
                var h = 0, i = a.length, j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) {
                        n.access(a, b, h, c[h], !0, f, g);
                    }
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
                        return j.call(n(a), c);
                    })), b))for (; i > h; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                }
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
            };
            n.acceptData = function (a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
            };
            function K() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function get() {
                        return {};
                    }
                }), this.expando = n.expando + K.uid++;
            }

            K.uid = 1, K.accepts = n.acceptData, K.prototype = {
                key: function key(a) {
                    if (!K.accepts(a))return 0;
                    var b = {}, c = a[this.expando];
                    if (!c) {
                        c = K.uid++;
                        try {
                            b[this.expando] = {value: c}, Object.defineProperties(a, b);
                        } catch (d) {
                            b[this.expando] = c, n.extend(a, b);
                        }
                    }
                    return this.cache[c] || (this.cache[c] = {}), c;
                }, set: function set(a, b, c) {
                    var d, e = this.key(a), f = this.cache[e];
                    if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b) {
                        f[d] = b[d];
                    }
                    return f;
                }, get: function get(a, b) {
                    var c = this.cache[this.key(a)];
                    return void 0 === b ? c : c[b];
                }, access: function access(a, b, c) {
                    var d;
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
                }, remove: function remove(a, b) {
                    var c, d, e, f = this.key(a), g = this.cache[f];
                    if (void 0 === b)this.cache[f] = {}; else {
                        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                        while (c--) {
                            delete g[d[c]];
                        }
                    }
                }, hasData: function hasData(a) {
                    return !n.isEmptyObject(this.cache[a[this.expando]] || {});
                }, discard: function discard(a) {
                    a[this.expando] && delete this.cache[a[this.expando]];
                }
            };
            var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

            function P(a, b, c) {
                var d;
                if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                    } catch (e) {
                    }
                    M.set(a, b, c);
                } else c = void 0;
                return c;
            }

            n.extend({
                hasData: function hasData(a) {
                    return M.hasData(a) || L.hasData(a);
                }, data: function data(a, b, c) {
                    return M.access(a, b, c);
                }, removeData: function removeData(a, b) {
                    M.remove(a, b);
                }, _data: function _data(a, b, c) {
                    return L.access(a, b, c);
                }, _removeData: function _removeData(a, b) {
                    L.remove(a, b);
                }
            }), n.fn.extend({
                data: function data(a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                            c = g.length;
                            while (c--) {
                                g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                            }
                            L.set(f, "hasDataAttrs", !0);
                        }
                        return e;
                    }
                    return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                        M.set(this, a);
                    }) : J(this, function (b) {
                        var c, d = n.camelCase(a);
                        if (f && void 0 === b) {
                            if (c = M.get(f, a), void 0 !== c)return c;
                            if (c = M.get(f, d), void 0 !== c)return c;
                            if (c = P(f, d, void 0), void 0 !== c)return c;
                        } else this.each(function () {
                            var c = M.get(this, d);
                            M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                        });
                    }, null, b, arguments.length > 1, null, !0);
                }, removeData: function removeData(a) {
                    return this.each(function () {
                        M.remove(this, a);
                    });
                }
            }), n.extend({
                queue: function queue(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
                }, dequeue: function dequeue(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function g() {
                        n.dequeue(a, b);
                    };
                    "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
                }, _queueHooks: function _queueHooks(a, b) {
                    var c = b + "queueHooks";
                    return L.get(a, c) || L.access(a, c, {
                            empty: n.Callbacks("once memory").add(function () {
                                L.remove(a, [b + "queue", c]);
                            })
                        });
                }
            }), n.fn.extend({
                queue: function queue(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                    });
                }, dequeue: function dequeue(a) {
                    return this.each(function () {
                        n.dequeue(this, a);
                    });
                }, clearQueue: function clearQueue(a) {
                    return this.queue(a || "fx", []);
                }, promise: function promise(a, b) {
                    var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function h() {
                        --d || e.resolveWith(f, [f]);
                    };
                    "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                    while (g--) {
                        c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                    }
                    return h(), e.promise(b);
                }
            });
            var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function S(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
            }, T = /^(?:checkbox|radio)$/i;
            !function () {
                var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
                c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
            }();
            var U = "undefined";
            k.focusinBubbles = "onfocusin" in a;
            var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

            function Z() {
                return !0;
            }

            function $() {
                return !1;
            }

            function _() {
                try {
                    return l.activeElement;
                } catch (a) {
                }
            }

            n.event = {
                global: {},
                add: function add(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
                    if (r) {
                        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                            return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                        }), b = (b || "").match(E) || [""], j = b.length;
                        while (j--) {
                            h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                                type: o,
                                origType: q,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && n.expr.match.needsContext.test(e),
                                namespace: p.join(".")
                            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
                        }
                    }
                },
                remove: function remove(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
                    if (r && (i = r.events)) {
                        b = (b || "").match(E) || [""], j = b.length;
                        while (j--) {
                            if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                                l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                                while (f--) {
                                    k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                                }
                                g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
                            } else for (o in i) {
                                n.event.remove(a, o + b[j], c, d, !0);
                            }
                        }
                        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
                    }
                },
                trigger: function trigger(b, c, d, e) {
                    var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                        if (!e && !o.noBubble && !n.isWindow(d)) {
                            for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
                                p.push(g), h = g;
                            }
                            h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                        }
                        f = 0;
                        while ((g = p[f++]) && !b.isPropagationStopped()) {
                            b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                        }
                        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
                    }
                },
                dispatch: function dispatch(a) {
                    a = n.event.fix(a);
                    var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
                    if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                        h = n.event.handlers.call(this, a, j), b = 0;
                        while ((f = h[b++]) && !a.isPropagationStopped()) {
                            a.currentTarget = f.elem, c = 0;
                            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                                (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                            }
                        }
                        return k.postDispatch && k.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function handlers(a, b) {
                    var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                    if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this) {
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++) {
                                f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            }
                            d.length && g.push({elem: i, handlers: d});
                        }
                    }
                    return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g;
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function filter(a, b) {
                        var c, d, e, f = b.button;
                        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
                    }
                },
                fix: function fix(a) {
                    if (a[n.expando])return a;
                    var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                    g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
                    while (b--) {
                        c = d[b], a[c] = f[c];
                    }
                    return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function trigger() {
                            return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function trigger() {
                            return this === _() && this.blur ? (this.blur(), !1) : void 0;
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function trigger() {
                            return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
                        }, _default: function _default(a) {
                            return n.nodeName(a.target, "a");
                        }
                    }, beforeunload: {
                        postDispatch: function postDispatch(a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                        }
                    }
                },
                simulate: function simulate(a, b, c, d) {
                    var e = n.extend(new n.Event(), c, {type: a, isSimulated: !0, originalEvent: {}});
                    d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
                }
            }, n.removeEvent = function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1);
            }, n.Event = function (a, b) {
                return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
            }, n.Event.prototype = {
                isDefaultPrevented: $,
                isPropagationStopped: $,
                isImmediatePropagationStopped: $,
                preventDefault: function preventDefault() {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
                },
                stopPropagation: function stopPropagation() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
                },
                stopImmediatePropagation: function stopImmediatePropagation() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
                }
            }, n.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (a, b) {
                n.event.special[a] = {
                    delegateType: b, bindType: b, handle: function handle(a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
                    }
                };
            }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
                var c = function c(a) {
                    n.event.simulate(b, a.target, n.event.fix(a), !0);
                };
                n.event.special[b] = {
                    setup: function setup() {
                        var d = this.ownerDocument || this, e = L.access(d, b);
                        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
                    }, teardown: function teardown() {
                        var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
                    }
                };
            }), n.fn.extend({
                on: function on(a, b, c, d, e) {
                    var f, g;
                    if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                        "string" != typeof b && (c = c || b, b = void 0);
                        for (g in a) {
                            this.on(g, b, c, a[g], e);
                        }
                        return this;
                    }
                    if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
                    return 1 === e && (f = d, d = function d(a) {
                        return n().off(a), f.apply(this, arguments);
                    }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                        n.event.add(this, a, d, c, b);
                    });
                }, one: function one(a, b, c, d) {
                    return this.on(a, b, c, d, 1);
                }, off: function off(a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                        for (e in a) {
                            this.off(e, b, a[e]);
                        }
                        return this;
                    }
                    return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                        n.event.remove(this, a, c, b);
                    });
                }, trigger: function trigger(a, b) {
                    return this.each(function () {
                        n.event.trigger(a, b, this);
                    });
                }, triggerHandler: function triggerHandler(a, b) {
                    var c = this[0];
                    return c ? n.event.trigger(a, b, c, !0) : void 0;
                }
            });
            var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;
            function ja(a, b) {
                return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
            }

            function ka(a) {
                return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
            }

            function la(a) {
                var b = ga.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a;
            }

            function ma(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
                }
            }

            function na(a, b) {
                var c, d, e, f, g, h, i, j;
                if (1 === b.nodeType) {
                    if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                        delete g.handle, g.events = {};
                        for (e in j) {
                            for (c = 0, d = j[e].length; d > c; c++) {
                                n.event.add(b, e, j[e][c]);
                            }
                        }
                    }
                    M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
                }
            }

            function oa(a, b) {
                var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
            }

            function pa(a, b) {
                var c = b.nodeName.toLowerCase();
                "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
            }

            n.extend({
                clone: function clone(a, b, c) {
                    var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
                    if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
                        pa(f[d], g[d]);
                    }
                    if (b)if (c)for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
                        na(f[d], g[d]);
                    } else na(a, h);
                    return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
                }, buildFragment: function buildFragment(a, b, c, d) {
                    for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
                        if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                            f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                            while (j--) {
                                f = f.lastChild;
                            }
                            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
                        } else l.push(b.createTextNode(e));
                    }
                    k.textContent = "", m = 0;
                    while (e = l[m++]) {
                        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                            j = 0;
                            while (e = f[j++]) {
                                fa.test(e.type || "") && c.push(e);
                            }
                        }
                    }
                    return k;
                }, cleanData: function cleanData(a) {
                    for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                            if (b.events)for (d in b.events) {
                                f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            }
                            L.cache[e] && delete L.cache[e];
                        }
                        delete M.cache[c[M.expando]];
                    }
                }
            }), n.fn.extend({
                text: function text(a) {
                    return J(this, function (a) {
                        return void 0 === a ? n.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                        });
                    }, null, a, arguments.length);
                }, append: function append() {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = ja(this, a);
                            b.appendChild(a);
                        }
                    });
                }, prepend: function prepend() {
                    return this.domManip(arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = ja(this, a);
                            b.insertBefore(a, b.firstChild);
                        }
                    });
                }, before: function before() {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this);
                    });
                }, after: function after() {
                    return this.domManip(arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                    });
                }, remove: function remove(a, b) {
                    for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                        b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
                    }
                    return this;
                }, empty: function empty() {
                    for (var a, b = 0; null != (a = this[b]); b++) {
                        1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
                    }
                    return this;
                }, clone: function clone(a, b) {
                    return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                        return n.clone(this, a, b);
                    });
                }, html: function html(a) {
                    return J(this, function (a) {
                        var b = this[0] || {}, c = 0, d = this.length;
                        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(aa, "<$1></$2>");
                            try {
                                for (; d > c; c++) {
                                    b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                                }
                                b = 0;
                            } catch (e) {
                            }
                        }
                        b && this.empty().append(a);
                    }, null, a, arguments.length);
                }, replaceWith: function replaceWith() {
                    var a = arguments[0];
                    return this.domManip(arguments, function (b) {
                        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
                    }), a && (a.length || a.nodeType) ? this : this.remove();
                }, detach: function detach(a) {
                    return this.remove(a, !0);
                }, domManip: function domManip(a, b) {
                    a = e.apply([], a);
                    var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
                    if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))return this.each(function (c) {
                        var d = m.eq(c);
                        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                    });
                    if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
                            h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                        }
                        if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
                            h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
                        }
                    }
                    return this;
                }
            }), n.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                n.fn[a] = function (a) {
                    for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
                        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
                    }
                    return this.pushStack(d);
                };
            });
            var qa, ra = {};

            function sa(b, c) {
                var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
                return e.detach(), f;
            }

            function ta(a) {
                var b = l, c = ra[a];
                return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
            }

            var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function wa(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
            };

            function xa(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
            }

            function ya(a, b) {
                return {
                    get: function get() {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
                    }
                };
            }

            !function () {
                var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
                if (f.style) {
                    (function () {
                        var g = function g() {
                            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                            var g = a.getComputedStyle(f, null);
                            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
                        };
                        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
                        a.getComputedStyle && n.extend(k, {
                            pixelPosition: function pixelPosition() {
                                return g(), b;
                            }, boxSizingReliable: function boxSizingReliable() {
                                return null == c && g(), c;
                            }, reliableMarginRight: function reliableMarginRight() {
                                var b, c = f.appendChild(l.createElement("div"));
                                return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
                            }
                        });
                    })();
                }
            }(), n.swap = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b) {
                    g[f] = a.style[f], a.style[f] = b[f];
                }
                e = c.apply(a, d || []);
                for (f in b) {
                    a.style[f] = g[f];
                }
                return e;
            };
            var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

            function Fa(a, b) {
                if (b in a)return b;
                var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
                while (e--) {
                    if (b = Ea[e] + c, b in a)return b;
                }
                return d;
            }

            function Ga(a, b, c) {
                var d = Aa.exec(b);
                return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
            }

            function Ha(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
                    "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
                }
                return g;
            }

            function Ia(a, b, c) {
                var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
                if (0 >= e || null == e) {
                    if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))return e;
                    d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
                }
                return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
            }

            function Ja(a, b) {
                for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
                    d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
                }
                for (g = 0; h > g; g++) {
                    d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                }
                return a;
            }

            n.extend({
                cssHooks: {
                    opacity: {
                        get: function get(a, b) {
                            if (b) {
                                var c = xa(a, "opacity");
                                return "" === c ? "1" : c;
                            }
                        }
                    }
                },
                cssNumber: {
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
                cssProps: {"float": "cssFloat"},
                style: function style(a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = n.camelCase(b), i = a.style;
                        return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
                    }
                },
                css: function css(a, b, c, d) {
                    var e, f, g, h = n.camelCase(b);
                    return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
                }
            }), n.each(["height", "width"], function (a, b) {
                n.cssHooks[b] = {
                    get: function get(a, c, d) {
                        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                            return Ia(a, b, d);
                        }) : Ia(a, b, d) : void 0;
                    }, set: function set(a, c, d) {
                        var e = d && wa(a);
                        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
                    }
                };
            }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
                return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0;
            }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
                n.cssHooks[a + b] = {
                    expand: function expand(c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                        }
                        return e;
                    }
                }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
            }), n.fn.extend({
                css: function css(a, b) {
                    return J(this, function (a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (n.isArray(b)) {
                            for (d = wa(a), e = b.length; e > g; g++) {
                                f[b[g]] = n.css(a, b[g], !1, d);
                            }
                            return f;
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                    }, a, b, arguments.length > 1);
                }, show: function show() {
                    return Ja(this, !0);
                }, hide: function hide() {
                    return Ja(this);
                }, toggle: function toggle(a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        S(this) ? n(this).show() : n(this).hide();
                    });
                }
            });
            function Ka(a, b, c, d, e) {
                return new Ka.prototype.init(a, b, c, d, e);
            }

            n.Tween = Ka, Ka.prototype = {
                constructor: Ka, init: function init(a, b, c, d, e, f) {
                    this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
                }, cur: function cur() {
                    var a = Ka.propHooks[this.prop];
                    return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
                }, run: function run(a) {
                    var b, c = Ka.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
                }
            }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
                _default: {
                    get: function get(a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
                    }, set: function set(a) {
                        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
                    }
                }
            }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
                set: function set(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
                }
            }, n.easing = {
                linear: function linear(a) {
                    return a;
                }, swing: function swing(a) {
                    return .5 - Math.cos(a * Math.PI) / 2;
                }
            }, n.fx = Ka.prototype.init, n.fx.step = {};
            var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
                "*": [function (a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do {
                            h = h || ".5", g /= h, n.style(c.elem, a, g + f);
                        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
                }]
            };

            function Sa() {
                return setTimeout(function () {
                    La = void 0;
                }), La = n.now();
            }

            function Ta(a, b) {
                var c, d = 0, e = {height: a};
                for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
                    c = R[d], e["margin" + c] = e["padding" + c] = a;
                }
                return b && (e.opacity = e.width = a), e;
            }

            function Ua(a, b, c) {
                for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
                    if (d = e[f].call(c, b, a))return d;
                }
            }

            function Va(a, b, c) {
                var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
                c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                    h.unqueued || i();
                }), h.unqueued++, l.always(function () {
                    l.always(function () {
                        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                    });
                })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
                    o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
                }));
                for (d in b) {
                    if (e = b[d], Na.exec(e)) {
                        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                            if ("show" !== e || !q || void 0 === q[d])continue;
                            p = !0;
                        }
                        m[d] = q && q[d] || n.style(a, d);
                    } else j = void 0;
                }
                if (n.isEmptyObject(m))"inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
                    q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                        n(a).hide();
                    }), l.done(function () {
                        var b;
                        L.remove(a, "fxshow");
                        for (b in m) {
                            n.style(a, b, m[b]);
                        }
                    });
                    for (d in m) {
                        g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
                    }
                }
            }

            function Wa(a, b) {
                var c, d, e, f, g;
                for (c in a) {
                    if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                        f = g.expand(f), delete a[d];
                        for (c in f) {
                            c in a || (a[c] = f[c], b[c] = e);
                        }
                    } else b[d] = e;
                }
            }

            function Xa(a, b, c) {
                var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
                    delete i.elem;
                }), i = function i() {
                    if (e)return !1;
                    for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                        j.tweens[g].run(f);
                    }
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
                }, j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {specialEasing: {}}, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: La || Sa(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function createTween(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d;
                    },
                    stop: function stop(b) {
                        var c = 0, d = b ? j.tweens.length : 0;
                        if (e)return this;
                        for (e = !0; d > c; c++) {
                            j.tweens[c].run(1);
                        }
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
                    }
                }), k = j.props;
                for (Wa(k, j.opts.specialEasing); g > f; f++) {
                    if (d = Qa[f].call(j, a, k, j.opts))return d;
                }
                return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
            }

            n.Animation = n.extend(Xa, {
                tweener: function tweener(a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) {
                        c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
                    }
                }, prefilter: function prefilter(a, b) {
                    b ? Qa.unshift(a) : Qa.push(a);
                }
            }), n.speed = function (a, b, c) {
                var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
                }, d;
            }, n.fn.extend({
                fadeTo: function fadeTo(a, b, c, d) {
                    return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
                }, animate: function animate(a, b, c, d) {
                    var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function g() {
                        var b = Xa(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0);
                    };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
                }, stop: function stop(a, b, c) {
                    var d = function d(a) {
                        var b = a.stop;
                        delete a.stop, b(c);
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                        var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g) {
                            g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                        }
                        for (e = f.length; e--;) {
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        }
                        (b || !c) && n.dequeue(this, a);
                    });
                }, finish: function finish(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function () {
                        var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        }
                        for (b = 0; g > b; b++) {
                            d[b] && d[b].finish && d[b].finish.call(this);
                        }
                        delete c.finish;
                    });
                }
            }), n.each(["toggle", "show", "hide"], function (a, b) {
                var c = n.fn[b];
                n.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
                };
            }), n.each({
                slideDown: Ta("show"),
                slideUp: Ta("hide"),
                slideToggle: Ta("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (a, b) {
                n.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }), n.timers = [], n.fx.tick = function () {
                var a, b = 0, c = n.timers;
                for (La = n.now(); b < c.length; b++) {
                    a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                }
                c.length || n.fx.stop(), La = void 0;
            }, n.fx.timer = function (a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
            }, n.fx.interval = 13, n.fx.start = function () {
                Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
            }, n.fx.stop = function () {
                clearInterval(Ma), Ma = null;
            }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
                return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d);
                    };
                });
            }, function () {
                var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
                a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
            }();
            var Ya, Za, $a = n.expr.attrHandle;
            n.fn.extend({
                attr: function attr(a, b) {
                    return J(this, n.attr, a, b, arguments.length > 1);
                }, removeAttr: function removeAttr(a) {
                    return this.each(function () {
                        n.removeAttr(this, a);
                    });
                }
            }), n.extend({
                attr: function attr(a, b, c) {
                    var d, e, f = a.nodeType;
                    if (a && 3 !== f && 8 !== f && 2 !== f)return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
                }, removeAttr: function removeAttr(a, b) {
                    var c, d, e = 0, f = b && b.match(E);
                    if (f && 1 === a.nodeType)while (c = f[e++]) {
                        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
                    }
                }, attrHooks: {
                    type: {
                        set: function set(a, b) {
                            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b;
                            }
                        }
                    }
                }
            }), Za = {
                set: function set(a, b, c) {
                    return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
                }
            }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = $a[b] || n.find.attr;
                $a[b] = function (a, b, d) {
                    var e, f;
                    return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
                };
            });
            var _a = /^(?:input|select|textarea|button)$/i;
            n.fn.extend({
                prop: function prop(a, b) {
                    return J(this, n.prop, a, b, arguments.length > 1);
                }, removeProp: function removeProp(a) {
                    return this.each(function () {
                        delete this[n.propFix[a] || a];
                    });
                }
            }), n.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function prop(a, b, c) {
                    var d, e, f, g = a.nodeType;
                    if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
                }, propHooks: {
                    tabIndex: {
                        get: function get(a) {
                            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                        }
                    }
                }
            }), k.optSelected || (n.propHooks.selected = {
                get: function get(a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null;
                }
            }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                n.propFix[this.toLowerCase()] = this;
            });
            var ab = /[\t\r\n\f]/g;
            n.fn.extend({
                addClass: function addClass(a) {
                    var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                    if (n.isFunction(a))return this.each(function (b) {
                        n(this).addClass(a.call(this, b, this.className));
                    });
                    if (h)for (b = (a || "").match(E) || []; j > i; i++) {
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                            f = 0;
                            while (e = b[f++]) {
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            }
                            g = n.trim(d), c.className !== g && (c.className = g);
                        }
                    }
                    return this;
                }, removeClass: function removeClass(a) {
                    var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                    if (n.isFunction(a))return this.each(function (b) {
                        n(this).removeClass(a.call(this, b, this.className));
                    });
                    if (h)for (b = (a || "").match(E) || []; j > i; i++) {
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                            f = 0;
                            while (e = b[f++]) {
                                while (d.indexOf(" " + e + " ") >= 0) {
                                    d = d.replace(" " + e + " ", " ");
                                }
                            }
                            g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
                        }
                    }
                    return this;
                }, toggleClass: function toggleClass(a, b) {
                    var c = typeof a === "undefined" ? "undefined" : _typeof(a);
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                        n(this).toggleClass(a.call(this, c, this.className, b), b);
                    } : function () {
                        if ("string" === c) {
                            var b, d = 0, e = n(this), f = a.match(E) || [];
                            while (b = f[d++]) {
                                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                            }
                        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
                    });
                }, hasClass: function hasClass(a) {
                    for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)return !0;
                    }
                    return !1;
                }
            });
            var bb = /\r/g;
            n.fn.extend({
                val: function val(a) {
                    var b, c, d, e = this[0];
                    {
                        if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                                return null == a ? "" : a + "";
                            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                        });
                        if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
                    }
                }
            }), n.extend({
                valHooks: {
                    option: {
                        get: function get(a) {
                            var b = n.find.attr(a, "value");
                            return null != b ? b : n.trim(n.text(a));
                        }
                    }, select: {
                        get: function get(a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                                if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                                    if (b = n(c).val(), f)return b;
                                    g.push(b);
                                }
                            }
                            return g;
                        }, set: function set(a, b) {
                            var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                            while (g--) {
                                d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                            }
                            return c || (a.selectedIndex = -1), f;
                        }
                    }
                }
            }), n.each(["radio", "checkbox"], function () {
                n.valHooks[this] = {
                    set: function set(a, b) {
                        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
                    }
                }, k.checkOn || (n.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value;
                });
            }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
                };
            }), n.fn.extend({
                hover: function hover(a, b) {
                    return this.mouseenter(a).mouseleave(b || a);
                }, bind: function bind(a, b, c) {
                    return this.on(a, null, b, c);
                }, unbind: function unbind(a, b) {
                    return this.off(a, null, b);
                }, delegate: function delegate(a, b, c, d) {
                    return this.on(b, a, c, d);
                }, undelegate: function undelegate(a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
                }
            });
            var cb = n.now(), db = /\?/;
            n.parseJSON = function (a) {
                return JSON.parse(a + "");
            }, n.parseXML = function (a) {
                var b, c;
                if (!a || "string" != typeof a)return null;
                try {
                    c = new DOMParser(), b = c.parseFromString(a, "text/xml");
                } catch (d) {
                    b = void 0;
                }
                return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
            };
            var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

            function qb(a) {
                return function (b, c) {
                    "string" != typeof b && (c = b, b = "*");
                    var d, e = 0, f = b.toLowerCase().match(E) || [];
                    if (n.isFunction(c))while (d = f[e++]) {
                        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
                    }
                };
            }

            function rb(a, b, c, d) {
                var e = {}, f = a === mb;

                function g(h) {
                    var i;
                    return e[h] = !0, n.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
                    }), i;
                }

                return g(b.dataTypes[0]) || !e["*"] && g("*");
            }

            function sb(a, b) {
                var c, d, e = n.ajaxSettings.flatOptions || {};
                for (c in b) {
                    void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                }
                return d && n.extend(!0, a, d), a;
            }

            function tb(a, b, c) {
                var d, e, f, g, h = a.contents, i = a.dataTypes;
                while ("*" === i[0]) {
                    i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                }
                if (d)for (e in h) {
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break;
                    }
                }
                if (i[0] in c)f = i[0]; else {
                    for (e in c) {
                        if (!i[0] || a.converters[e + " " + i[0]]) {
                            f = e;
                            break;
                        }
                        g || (g = e);
                    }
                    f = f || g;
                }
                return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
            }

            function ub(a, b, c, d) {
                var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                if (k[1])for (g in a.converters) {
                    j[g.toLowerCase()] = a.converters[g];
                }
                f = k.shift();
                while (f) {
                    if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g)for (e in j) {
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break;
                            }
                        }
                        if (g !== !0)if (g && a["throws"])b = g(b); else try {
                            b = g(b);
                        } catch (l) {
                            return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f};
                        }
                    }
                }
                return {state: "success", data: b};
            }

            n.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ob,
                    type: "GET",
                    isLocal: hb.test(pb[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": nb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function ajaxSetup(a, b) {
                    return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
                },
                ajaxPrefilter: qb(lb),
                ajaxTransport: qb(mb),
                ajax: function ajax(a, b) {
                    "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};
                    var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                        readyState: 0,
                        getResponseHeader: function getResponseHeader(a) {
                            var b;
                            if (2 === t) {
                                if (!f) {
                                    f = {};
                                    while (b = gb.exec(e)) {
                                        f[b[1].toLowerCase()] = b[2];
                                    }
                                }
                                b = f[a.toLowerCase()];
                            }
                            return null == b ? null : b;
                        },
                        getAllResponseHeaders: function getAllResponseHeaders() {
                            return 2 === t ? e : null;
                        },
                        setRequestHeader: function setRequestHeader(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this;
                        },
                        overrideMimeType: function overrideMimeType(a) {
                            return t || (k.mimeType = a), this;
                        },
                        statusCode: function statusCode(a) {
                            var b;
                            if (a)if (2 > t)for (b in a) {
                                q[b] = [q[b], a[b]];
                            } else v.always(a[v.status]);
                            return this;
                        },
                        abort: function abort(a) {
                            var b = a || u;
                            return c && c.abort(b), x(0, b), this;
                        }
                    };
                    if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)return v;
                    i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
                    for (j in k.headers) {
                        v.setRequestHeader(j, k.headers[j]);
                    }
                    if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
                    u = "abort";
                    for (j in {success: 1, error: 1, complete: 1}) {
                        v[j](k[j]);
                    }
                    if (c = rb(mb, k, b, v)) {
                        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                            v.abort("timeout");
                        }, k.timeout));
                        try {
                            t = 1, c.send(r, x);
                        } catch (w) {
                            if (!(2 > t))throw w;
                            x(-1, w);
                        }
                    } else x(-1, "No Transport");
                    function x(a, b, f, h) {
                        var j, r, s, u, w, x = b;
                        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
                    }

                    return v;
                },
                getJSON: function getJSON(a, b, c) {
                    return n.get(a, b, c, "json");
                },
                getScript: function getScript(a, b) {
                    return n.get(a, void 0, b, "script");
                }
            }), n.each(["get", "post"], function (a, b) {
                n[b] = function (a, c, d, e) {
                    return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    });
                };
            }), n._evalUrl = function (a) {
                return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0});
            }, n.fn.extend({
                wrapAll: function wrapAll(a) {
                    var b;
                    return n.isFunction(a) ? this.each(function (b) {
                        n(this).wrapAll(a.call(this, b));
                    }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        var a = this;
                        while (a.firstElementChild) {
                            a = a.firstElementChild;
                        }
                        return a;
                    }).append(this)), this);
                }, wrapInner: function wrapInner(a) {
                    return this.each(n.isFunction(a) ? function (b) {
                        n(this).wrapInner(a.call(this, b));
                    } : function () {
                        var b = n(this), c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a);
                    });
                }, wrap: function wrap(a) {
                    var b = n.isFunction(a);
                    return this.each(function (c) {
                        n(this).wrapAll(b ? a.call(this, c) : a);
                    });
                }, unwrap: function unwrap() {
                    return this.parent().each(function () {
                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                    }).end();
                }
            }), n.expr.filters.hidden = function (a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0;
            }, n.expr.filters.visible = function (a) {
                return !n.expr.filters.hidden(a);
            };
            var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;

            function Ab(a, b, c, d) {
                var e;
                if (n.isArray(b))n.each(b, function (b, e) {
                    c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
                }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b) {
                    Ab(a + "[" + e + "]", b[e], c, d);
                }
            }

            n.param = function (a, b) {
                var c, d = [], e = function e(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
                };
                if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
                    e(this.name, this.value);
                }); else for (c in a) {
                    Ab(c, a[c], b, e);
                }
                return d.join("&").replace(vb, "+");
            }, n.fn.extend({
                serialize: function serialize() {
                    return n.param(this.serializeArray());
                }, serializeArray: function serializeArray() {
                    return this.map(function () {
                        var a = n.prop(this, "elements");
                        return a ? n.makeArray(a) : this;
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
                    }).map(function (a, b) {
                        var c = n(this).val();
                        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                            return {name: b.name, value: a.replace(xb, "\r\n")};
                        }) : {name: b.name, value: c.replace(xb, "\r\n")};
                    }).get();
                }
            }), n.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest();
                } catch (a) {
                }
            };
            var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
            a.attachEvent && a.attachEvent("onunload", function () {
                for (var a in Cb) {
                    Cb[a]();
                }
            }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
                var _b2;
                return k.cors || Eb && !a.crossDomain ? {
                    send: function send(c, d) {
                        var e, f = a.xhr(), g = ++Bb;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e];
                        }
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) {
                            f.setRequestHeader(e, c[e]);
                        }
                        _b2 = function b(a) {
                            return function () {
                                _b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()));
                            };
                        }, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");
                        try {
                            f.send(a.hasContent && a.data || null);
                        } catch (h) {
                            if (_b2)throw h;
                        }
                    }, abort: function abort() {
                        _b2 && _b2();
                    }
                } : void 0;
            }), n.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function textScript(a) {
                        return n.globalEval(a), a;
                    }
                }
            }), n.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
            }), n.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, _c;
                    return {
                        send: function send(d, e) {
                            b = n("<script>").prop({
                                async: !0,
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", _c = function c(a) {
                                b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
                            }), l.head.appendChild(b[0]);
                        }, abort: function abort() {
                            _c && _c();
                        }
                    };
                }
            });
            var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
            n.ajaxSetup({
                jsonp: "callback", jsonpCallback: function jsonpCallback() {
                    var a = Fb.pop() || n.expando + "_" + cb++;
                    return this[a] = !0, a;
                }
            }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                    return g || n.error(e + " was not called"), g[0];
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                    g = arguments;
                }, d.always(function () {
                    a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
                }), "script") : void 0;
            }), n.parseHTML = function (a, b, c) {
                if (!a || "string" != typeof a)return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || l;
                var d = v.exec(a), e = !c && [];
                return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
            };
            var Hb = n.fn.load;
            n.fn.load = function (a, b, c) {
                if ("string" != typeof a && Hb)return Hb.apply(this, arguments);
                var d, e, f, g = this, h = a.indexOf(" ");
                return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({
                    url: a,
                    type: e,
                    dataType: "html",
                    data: b
                }).done(function (a) {
                    f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
                }).complete(c && function (a, b) {
                        g.each(c, f || [a.responseText, b, a]);
                    }), this;
            }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }), n.expr.filters.animated = function (a) {
                return n.grep(n.timers, function (b) {
                    return a === b.elem;
                }).length;
            };
            var Ib = a.document.documentElement;

            function Jb(a) {
                return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
            }

            n.offset = {
                setOffset: function setOffset(a, b, c) {
                    var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
                    "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
                }
            }, n.fn.extend({
                offset: function offset(a) {
                    if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                        n.offset.setOffset(this, a, b);
                    });
                    var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
                    if (f)return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                        top: e.top + c.pageYOffset - b.clientTop,
                        left: e.left + c.pageXOffset - b.clientLeft
                    }) : e;
                }, position: function position() {
                    if (this[0]) {
                        var a, b, c = this[0], d = {top: 0, left: 0};
                        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                            top: b.top - d.top - n.css(c, "marginTop", !0),
                            left: b.left - d.left - n.css(c, "marginLeft", !0)
                        };
                    }
                }, offsetParent: function offsetParent() {
                    return this.map(function () {
                        var a = this.offsetParent || Ib;
                        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
                            a = a.offsetParent;
                        }
                        return a || Ib;
                    });
                }
            }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
                var d = "pageYOffset" === c;
                n.fn[b] = function (e) {
                    return J(this, function (b, e, f) {
                        var g = Jb(b);
                        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
                    }, b, e, arguments.length, null);
                };
            }), n.each(["top", "left"], function (a, b) {
                n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
                    return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
                });
            }), n.each({Height: "height", Width: "width"}, function (a, b) {
                n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                    n.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return J(this, function (b, c, d) {
                            var e;
                            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                        }, b, f ? d : void 0, f, null);
                    };
                });
            }), n.fn.size = function () {
                return this.length;
            }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return n;
            });
            var Kb = a.jQuery, Lb = a.$;
            return n.noConflict = function (b) {
                return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
            }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
        });
        /*!
         * Bootstrap v3.3.6 (http://getbootstrap.com)
         * Copyright 2011-2015 Twitter, Inc.
         * Licensed under the MIT license
         */
        if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
        +function (a) {
            "use strict";
            var b = a.fn.jquery.split(" ")[0].split(".");
            if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
        }(jQuery), +function (a) {
            "use strict";
            function b() {
                var a = document.createElement("bootstrap"), b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var c in b) {
                    if (void 0 !== a.style[c])return {end: b[c]};
                }
                return !1;
            }

            a.fn.emulateTransitionEnd = function (b) {
                var c = !1, d = this;
                a(this).one("bsTransitionEnd", function () {
                    c = !0;
                });
                var e = function e() {
                    c || a(d).trigger(a.support.transition.end);
                };
                return setTimeout(e, b), this;
            }, a(function () {
                a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                    bindType: a.support.transition.end,
                    delegateType: a.support.transition.end,
                    handle: function handle(b) {
                        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
                    }
                });
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var c = a(this), e = c.data("bs.alert");
                    e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
                });
            }

            var c = '[data-dismiss="alert"]', d = function d(b) {
                a(b).on("click", c, this.close);
            };
            d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
                function c() {
                    g.detach().trigger("closed.bs.alert").remove();
                }

                var e = a(this), f = e.attr("data-target");
                f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
                var g = a(f);
                b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
            };
            var e = a.fn.alert;
            a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
                return a.fn.alert = e, this;
            }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.button"), f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
                    e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
                });
            }

            var c = function c(b, d) {
                this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
            };
            c.VERSION = "3.3.6", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
                var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
                b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
                    d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
                }, this), 0);
            }, c.prototype.toggle = function () {
                var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
                if (b.length) {
                    var c = this.$element.find("input");
                    "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            };
            var d = a.fn.button;
            a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
                return a.fn.button = d, this;
            }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
                var d = a(c.target);
                d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
                a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), g = "string" == typeof b ? b : f.slide;
                    e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
                });
            }

            var c = function c(b, _c2) {
                this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c2, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            }, c.prototype.keydown = function (a) {
                if (!/input|textarea/i.test(a.target.tagName)) {
                    switch (a.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    a.preventDefault();
                }
            }, c.prototype.cycle = function (b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
            }, c.prototype.getItemIndex = function (a) {
                return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
            }, c.prototype.getItemForDirection = function (a, b) {
                var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
                if (d && !this.options.wrap)return b;
                var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
                return this.$items.eq(f);
            }, c.prototype.to = function (a) {
                var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    b.to(a);
                }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
            }, c.prototype.pause = function (b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
            }, c.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next");
            }, c.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev");
            }, c.prototype.slide = function (b, d) {
                var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
                if (f.hasClass("active"))return this.sliding = !1;
                var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
                if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                    if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                        l && l.addClass("active");
                    }
                    var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
                    return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                            i.$element.trigger(m);
                        }, 0);
                    }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
                }
            };
            var d = a.fn.carousel;
            a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
                return a.fn.carousel = d, this;
            };
            var e = function e(c) {
                var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
                if (f.hasClass("carousel")) {
                    var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
                    h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
                }
            };
            a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
                a('[data-ride="carousel"]').each(function () {
                    var c = a(this);
                    b.call(c, c.data());
                });
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
                return a(d);
            }

            function c(b) {
                return this.each(function () {
                    var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);
                    !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
                });
            }

            var d = function d(b, c) {
                this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
            };
            d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height";
            }, d.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                        var f = a.Event("show.bs.collapse");
                        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                            e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                            var g = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var h = function h() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                            };
                            if (!a.support.transition)return h.call(this);
                            var i = a.camelCase(["scroll", g].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                        }
                    }
                }
            }, d.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");
                    if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var e = function e() {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                    }
                }
            }, d.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }, d.prototype.getParent = function () {
                return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
                    var e = a(d);
                    this.addAriaAndCollapsedClass(b(e), e);
                }, this)).end();
            }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
                var c = a.hasClass("in");
                a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
            };
            var e = a.fn.collapse;
            a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
                return a.fn.collapse = e, this;
            }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
                var e = a(this);
                e.attr("data-target") || d.preventDefault();
                var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
                c.call(f, h);
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                var c = b.attr("data-target");
                c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
                var d = c && a(c);
                return d && d.length ? d : b.parent();
            }

            function c(c) {
                c && 3 === c.which || (a(e).remove(), a(f).each(function () {
                    var d = a(this), e = b(d), f = {relatedTarget: this};
                    e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
                }));
            }

            function d(b) {
                return this.each(function () {
                    var c = a(this), d = c.data("bs.dropdown");
                    d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
                });
            }

            var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function g(b) {
                a(b).on("click.bs.dropdown", this.toggle);
            };
            g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
                var e = a(this);
                if (!e.is(".disabled, :disabled")) {
                    var f = b(e), g = f.hasClass("open");
                    if (c(), !g) {
                        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                        var h = {relatedTarget: this};
                        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
                    }
                    return !1;
                }
            }, g.prototype.keydown = function (c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);
                    if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                        var e = b(d), g = e.hasClass("open");
                        if (!g && 27 != c.which || g && 27 == c.which)return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                        var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                        if (i.length) {
                            var j = i.index(c.target);
                            38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                        }
                    }
                }
            };
            var h = a.fn.dropdown;
            a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
                return a.fn.dropdown = h, this;
            }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
                a.stopPropagation();
            }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
        }(jQuery), +function (a) {
            "use strict";
            function b(b, d) {
                return this.each(function () {
                    var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);
                    f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
                });
            }

            var c = function c(b, _c3) {
                this.options = _c3, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
                    this.$element.trigger("loaded.bs.modal");
                }, this));
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, c.prototype.toggle = function (a) {
                return this.isShown ? this.hide() : this.show(a);
            }, c.prototype.show = function (b) {
                var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
                this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                    });
                }), this.backdrop(function () {
                    var e = a.support.transition && d.$element.hasClass("fade");
                    d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                    var f = a.Event("shown.bs.modal", {relatedTarget: b});
                    e ? d.$dialog.one("bsTransitionEnd", function () {
                        d.$element.trigger("focus").trigger(f);
                    }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
                }));
            }, c.prototype.hide = function (b) {
                b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
            }, c.prototype.enforceFocus = function () {
                a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
                    this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
                }, this));
            }, c.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
                    27 == a.which && this.hide();
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }, c.prototype.resize = function () {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
            }, c.prototype.hideModal = function () {
                var a = this;
                this.$element.hide(), this.backdrop(function () {
                    a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
                });
            }, c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
            }, c.prototype.backdrop = function (b) {
                var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;
                    if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                            return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
                    f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var g = function g() {
                        d.removeBackdrop(), b && b();
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
                } else b && b();
            }, c.prototype.handleUpdate = function () {
                this.adjustDialog();
            }, c.prototype.adjustDialog = function () {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
                });
            }, c.prototype.resetAdjustments = function () {
                this.$element.css({paddingLeft: "", paddingRight: ""});
            }, c.prototype.checkScrollbar = function () {
                var a = window.innerWidth;
                if (!a) {
                    var b = document.documentElement.getBoundingClientRect();
                    a = b.right - Math.abs(b.left);
                }
                this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
            }, c.prototype.setScrollbar = function () {
                var a = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
            }, c.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }, c.prototype.measureScrollbar = function () {
                var a = document.createElement("div");
                a.className = "modal-scrollbar-measure", this.$body.append(a);
                var b = a.offsetWidth - a.clientWidth;
                return this.$body[0].removeChild(a), b;
            };
            var d = a.fn.modal;
            a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
                return a.fn.modal = d, this;
            }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
                var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
                d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
                    a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                        d.is(":visible") && d.trigger("focus");
                    });
                }), b.call(f, g, this);
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.tooltip"), f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
                    (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
                });
            }

            var c = function c(a, b) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {selector: "body", padding: 0}
            }, c.prototype.init = function (b, c, d) {
                if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                    var g = e[f];
                    if ("click" == g)this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                    }
                }
                this.options.selector ? this._options = a.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle();
            }, c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }, c.prototype.getOptions = function (b) {
                return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay,
                    hide: b.delay
                }), b;
            }, c.prototype.getDelegateOptions = function () {
                var b = {}, c = this.getDefaults();
                return this._options && a.each(this._options, function (a, d) {
                    c[a] != d && (b[a] = d);
                }), b;
            }, c.prototype.enter = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                }, c.options.delay.show)) : c.show());
            }, c.prototype.isInStateTrue = function () {
                for (var a in this.inState) {
                    if (this.inState[a])return !0;
                }
                return !1;
            }, c.prototype.leave = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide();
                }, c.options.delay.hide)) : c.hide());
            }, c.prototype.show = function () {
                var b = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);
                    var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (b.isDefaultPrevented() || !d)return;
                    var e = this, f = this.tip(), g = this.getUID(this.type);
                    this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                    var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
                    j && (h = h.replace(i, "") || "top"), f.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                    var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
                    if (j) {
                        var n = h, o = this.getPosition(this.$viewport);
                        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
                    }
                    var p = this.getCalculatedOffset(h, k, l, m);
                    this.applyPlacement(p, h);
                    var q = function q() {
                        var a = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
                    };
                    a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
                }
            }, c.prototype.applyPlacement = function (b, c) {
                var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
                isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                    using: function using(a) {
                        d.css({top: Math.round(a.top), left: Math.round(a.left)});
                    }
                }, b), 0), d.addClass("in");
                var i = d[0].offsetWidth, j = d[0].offsetHeight;
                "top" == c && j != f && (b.top = b.top + f - j);
                var k = this.getViewportAdjustedDelta(c, b, i, j);
                k.left ? b.left += k.left : b.top += k.top;
                var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
                d.offset(b), this.replaceArrow(m, d[0][n], l);
            }, c.prototype.replaceArrow = function (a, b, c) {
                this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
            }, c.prototype.setContent = function () {
                var a = this.tip(), b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
            }, c.prototype.hide = function (b) {
                function d() {
                    "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
                }

                var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
                return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
            }, c.prototype.fixTitle = function () {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
            }, c.prototype.hasContent = function () {
                return this.getTitle();
            }, c.prototype.getPosition = function (b) {
                b = b || this.$element;
                var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
                null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
                var f = d ? {
                    top: 0,
                    left: 0
                } : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {
                    width: a(window).width(),
                    height: a(window).height()
                } : null;
                return a.extend({}, e, g, h, f);
            }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
                return "bottom" == a ? {
                    top: b.top + b.height,
                    left: b.left + b.width / 2 - c / 2
                } : "top" == a ? {
                    top: b.top - d,
                    left: b.left + b.width / 2 - c / 2
                } : "left" == a ? {
                    top: b.top + b.height / 2 - d / 2,
                    left: b.left - c
                } : {top: b.top + b.height / 2 - d / 2, left: b.left + b.width};
            }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                var e = {top: 0, left: 0};
                if (!this.$viewport)return e;
                var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
                if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
                    h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
                } else {
                    var j = b.left - f, k = b.left + f + c;
                    j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
                }
                return e;
            }, c.prototype.getTitle = function () {
                var a, b = this.$element, c = this.options;
                return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
            }, c.prototype.getUID = function (a) {
                do {
                    a += ~~(1e6 * Math.random());
                } while (document.getElementById(a));
                return a;
            }, c.prototype.tip = function () {
                if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip;
            }, c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
            }, c.prototype.enable = function () {
                this.enabled = !0;
            }, c.prototype.disable = function () {
                this.enabled = !1;
            }, c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }, c.prototype.toggle = function (b) {
                var c = this;
                b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
            }, c.prototype.destroy = function () {
                var a = this;
                clearTimeout(this.timeout), this.hide(function () {
                    a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
                });
            };
            var d = a.fn.tooltip;
            a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
                return a.fn.tooltip = d, this;
            };
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.popover"), f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
                    (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
                });
            }

            var c = function c(a, b) {
                this.init("popover", a, b);
            };
            if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
            c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }, c.prototype.setContent = function () {
                var a = this.tip(), b = this.getTitle(), c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
            }, c.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }, c.prototype.getContent = function () {
                var a = this.$element, b = this.options;
                return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
            }, c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow");
            };
            var d = a.fn.popover;
            a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
                return a.fn.popover = d, this;
            };
        }(jQuery), +function (a) {
            "use strict";
            function b(c, d) {
                this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
            }

            function c(c) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.scrollspy"), f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;
                    e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
                });
            }

            b.VERSION = "3.3.6", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }, b.prototype.refresh = function () {
                var b = this, c = "offset", d = 0;
                this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                    var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
                    return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
                }).sort(function (a, b) {
                    return a[0] - b[0];
                }).each(function () {
                    b.offsets.push(this[0]), b.targets.push(this[1]);
                });
            }, b.prototype.process = function () {
                var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
                if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
                if (g && b < e[0])return this.activeTarget = null, this.clear();
                for (a = e.length; a--;) {
                    g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
                }
            }, b.prototype.activate = function (b) {
                this.activeTarget = b, this.clear();
                var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
                d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
            }, b.prototype.clear = function () {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            };
            var d = a.fn.scrollspy;
            a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
                return a.fn.scrollspy = d, this;
            }, a(window).on("load.bs.scrollspy.data-api", function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);
                    c.call(b, b.data());
                });
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.tab");
                    e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
                });
            }

            var c = function c(b) {
                this.element = a(b);
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
                var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
                if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                    var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
                    if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                        var h = a(d);
                        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                            e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: e[0]
                            });
                        });
                    }
                }
            }, c.prototype.activate = function (b, d, e) {
                function f() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
                }

                var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
                g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
            };
            var d = a.fn.tab;
            a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
                return a.fn.tab = d, this;
            };
            var e = function e(c) {
                c.preventDefault(), b.call(a(this), "show");
            };
            a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this), e = d.data("bs.affix"), f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
                    e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
                });
            }

            var c = function c(b, d) {
                this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
            };
            c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
                offset: 0,
                target: window
            }, c.prototype.getState = function (a, b, c, d) {
                var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
                if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
                if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
                var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
                return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
            }, c.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset)return this.pinnedOffset;
                this.$element.removeClass(c.RESET).addClass("affix");
                var a = this.$target.scrollTop(), b = this.$element.offset();
                return this.pinnedOffset = b.top - a;
            }, c.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1);
            }, c.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height());
                    "object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                    var h = this.getState(g, b, e, f);
                    if (this.affixed != h) {
                        null != this.unpin && this.$element.css("top", "");
                        var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                        if (this.$element.trigger(j), j.isDefaultPrevented())return;
                        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == h && this.$element.offset({top: g - b - f});
                }
            };
            var d = a.fn.affix;
            a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
                return a.fn.affix = d, this;
            }, a(window).on("load", function () {
                a('[data-spy="affix"]').each(function () {
                    var c = a(this), d = c.data();
                    d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
                });
            });
        }(jQuery);
        /*! Summernote v0.6.16 | (c) 2013-2015 Alan Hong and other contributors | MIT license */
        !function (a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery);
        }(function (a) {
            Array.prototype.reduce || (Array.prototype.reduce = function (a) {
                var b, c = Object(this), d = c.length >>> 0, e = 0;
                if (2 === arguments.length)b = arguments[1]; else {
                    for (; d > e && !(e in c);) {
                        e++;
                    }
                    if (e >= d)throw new TypeError("Reduce of empty array with no initial value");
                    b = c[e++];
                }
                for (; d > e; e++) {
                    e in c && (b = a(b, c[e], e, c));
                }
                return b;
            }), "function" != typeof Array.prototype.filter && (Array.prototype.filter = function (a) {
                for (var b = Object(this), c = b.length >>> 0, d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++) {
                    if (f in b) {
                        var g = b[f];
                        a.call(e, g, f, b) && d.push(g);
                    }
                }
                return d;
            }), Array.prototype.map || (Array.prototype.map = function (a, b) {
                var c, d, e;
                if (null === this)throw new TypeError(" this is null or not defined");
                var f = Object(this), g = f.length >>> 0;
                if ("function" != typeof a)throw new TypeError(a + " is not a function");
                for (arguments.length > 1 && (c = b), d = new Array(g), e = 0; g > e;) {
                    var h, i;
                    e in f && (h = f[e], i = a.call(c, h, e, f), d[e] = i), e++;
                }
                return d;
            });
            var b, c = "function" == typeof define && define.amd, d = function d(b) {
                var c = "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS", d = a("<div>").css({
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    fontSize: "200px"
                }).text("mmmmmmmmmwwwwwww").appendTo(document.body), e = d.css("fontFamily", c).width(), f = d.css("fontFamily", b + "," + c).width();
                return d.remove(), e !== f;
            }, e = navigator.userAgent, f = /MSIE|Trident/i.test(e);
            if (f) {
                var g = /MSIE (\d+[.]\d+)/.exec(e);
                g && (b = parseFloat(g[1])), g = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(e), g && (b = parseFloat(g[1]));
            }
            var h, i = {
                isMac: navigator.appVersion.indexOf("Mac") > -1,
                isMSIE: f,
                isFF: /firefox/i.test(e),
                isWebkit: /webkit/i.test(e),
                isSafari: /safari/i.test(e),
                browserVersion: b,
                jqueryVersion: parseFloat(a.fn.jquery),
                isSupportAmd: c,
                hasCodeMirror: c ? require.specified("CodeMirror") : !!window.CodeMirror,
                isFontInstalled: d,
                isW3CRangeSupport: !!document.createRange
            }, j = function () {
                var b = function b(a) {
                    return function (b) {
                        return a === b;
                    };
                }, c = function c(a, b) {
                    return a === b;
                }, d = function d(a) {
                    return function (b, c) {
                        return b[a] === c[a];
                    };
                }, e = function e() {
                    return !0;
                }, f = function f() {
                    return !1;
                }, g = function g(a) {
                    return function () {
                        return !a.apply(a, arguments);
                    };
                }, h = function h(a, b) {
                    return function (c) {
                        return a(c) && b(c);
                    };
                }, i = function i(a) {
                    return a;
                }, j = 0, k = function k(a) {
                    var b = ++j + "";
                    return a ? a + b : b;
                }, l = function l(b) {
                    var c = a(document);
                    return {
                        top: b.top + c.scrollTop(),
                        left: b.left + c.scrollLeft(),
                        width: b.right - b.left,
                        height: b.bottom - b.top
                    };
                }, m = function m(a) {
                    var b = {};
                    for (var c in a) {
                        a.hasOwnProperty(c) && (b[a[c]] = c);
                    }
                    return b;
                }, n = function n(a, b) {
                    return b = b || "", b + a.split(".").map(function (a) {
                        return a.substring(0, 1).toUpperCase() + a.substring(1);
                    }).join("");
                };
                return {
                    eq: b,
                    eq2: c,
                    peq2: d,
                    ok: e,
                    fail: f,
                    self: i,
                    not: g,
                    and: h,
                    uniqueId: k,
                    rect2bnd: l,
                    invertObject: m,
                    namespaceToCamel: n
                };
            }(), k = function () {
                var b = function b(a) {
                    return a[0];
                }, c = function c(a) {
                    return a[a.length - 1];
                }, d = function d(a) {
                    return a.slice(0, a.length - 1);
                }, e = function e(a) {
                    return a.slice(1);
                }, f = function f(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        if (b(e))return e;
                    }
                }, g = function g(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        if (!b(a[c]))return !1;
                    }
                    return !0;
                }, h = function h(b, c) {
                    return a.inArray(c, b);
                }, i = function i(a, b) {
                    return -1 !== h(a, b);
                }, k = function k(a, b) {
                    return b = b || j.self, a.reduce(function (a, c) {
                        return a + b(c);
                    }, 0);
                }, l = function l(a) {
                    for (var b = [], c = -1, d = a.length; ++c < d;) {
                        b[c] = a[c];
                    }
                    return b;
                }, m = function m(a, d) {
                    if (!a.length)return [];
                    var f = e(a);
                    return f.reduce(function (a, b) {
                        var e = c(a);
                        return d(c(e), b) ? e[e.length] = b : a[a.length] = [b], a;
                    }, [[b(a)]]);
                }, n = function n(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        a[c] && b.push(a[c]);
                    }
                    return b;
                }, o = function o(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        i(b, a[c]) || b.push(a[c]);
                    }
                    return b;
                }, p = function p(a, b) {
                    var c = h(a, b);
                    return -1 === c ? null : a[c + 1];
                }, q = function q(a, b) {
                    var c = h(a, b);
                    return -1 === c ? null : a[c - 1];
                };
                return {
                    head: b,
                    last: c,
                    initial: d,
                    tail: e,
                    prev: q,
                    next: p,
                    find: f,
                    contains: i,
                    all: g,
                    sum: k,
                    from: l,
                    clusterBy: m,
                    compact: n,
                    unique: o
                };
            }(), l = String.fromCharCode(160), m = "﻿", n = function () {
                var b = function b(_b3) {
                    return _b3 && a(_b3).hasClass("note-editable");
                }, c = function c(b) {
                    return b && a(b).hasClass("note-control-sizing");
                }, d = function d(b) {
                    var c;
                    if (b.hasClass("note-air-editor")) {
                        var d = k.last(b.attr("id").split("-"));
                        return c = function c(b) {
                            return function () {
                                return a(b + d);
                            };
                        }, {
                            editor: function editor() {
                                return b;
                            }, holder: function holder() {
                                return b.data("holder");
                            }, editable: function editable() {
                                return b;
                            }, popover: c("#note-popover-"), handle: c("#note-handle-"), dialog: c("#note-dialog-")
                        };
                    }
                    c = function c(a, _c4) {
                        return _c4 = _c4 || b, function () {
                            return _c4.find(a);
                        };
                    };
                    var e = b.data("options"), f = e && e.dialogsInBody ? a(document.body) : null;
                    return {
                        editor: function editor() {
                            return b;
                        },
                        holder: function holder() {
                            return b.data("holder");
                        },
                        dropzone: c(".note-dropzone"),
                        toolbar: c(".note-toolbar"),
                        editable: c(".note-editable"),
                        codable: c(".note-codable"),
                        statusbar: c(".note-statusbar"),
                        popover: c(".note-popover"),
                        handle: c(".note-handle"),
                        dialog: c(".note-dialog", f)
                    };
                }, e = function e(b) {
                    var c = a(b).closest(".note-editor, .note-air-editor, .note-air-layout");
                    if (!c.length)return null;
                    var e;
                    return e = c.is(".note-editor, .note-air-editor") ? c : a("#note-editor-" + k.last(c.attr("id").split("-"))), d(e);
                }, f = function f(a) {
                    return a = a.toUpperCase(), function (b) {
                        return b && b.nodeName.toUpperCase() === a;
                    };
                }, g = function g(a) {
                    return a && 3 === a.nodeType;
                }, h = function h(a) {
                    return a && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(a.nodeName.toUpperCase());
                }, o = function o(a) {
                    return b(a) ? !1 : a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase());
                }, p = f("LI"), q = function q(a) {
                    return o(a) && !p(a);
                }, r = f("TABLE"), s = function s(a) {
                    return !(x(a) || t(a) || u(a) || o(a) || r(a) || w(a));
                }, t = function t(a) {
                    return a && /^UL|^OL/.test(a.nodeName.toUpperCase());
                }, u = f("HR"), v = function v(a) {
                    return a && /^TD|^TH/.test(a.nodeName.toUpperCase());
                }, w = f("BLOCKQUOTE"), x = function x(a) {
                    return v(a) || w(a) || b(a);
                }, y = f("A"), z = function z(a) {
                    return s(a) && !!I(a, o);
                }, A = function A(a) {
                    return s(a) && !I(a, o);
                }, B = f("BODY"), C = function C(a, b) {
                    return a.nextSibling === b || a.previousSibling === b;
                }, D = function D(a, b) {
                    b = b || j.ok;
                    var c = [];
                    return a.previousSibling && b(a.previousSibling) && c.push(a.previousSibling), c.push(a), a.nextSibling && b(a.nextSibling) && c.push(a.nextSibling), c;
                }, E = i.isMSIE && i.browserVersion < 11 ? "&nbsp;" : "<br>", F = function F(a) {
                    return g(a) ? a.nodeValue.length : a.childNodes.length;
                }, G = function G(a) {
                    var b = F(a);
                    return 0 === b ? !0 : g(a) || 1 !== b || a.innerHTML !== E ? k.all(a.childNodes, g) && "" === a.innerHTML ? !0 : !1 : !0;
                }, H = function H(a) {
                    h(a) || F(a) || (a.innerHTML = E);
                }, I = function I(a, c) {
                    for (; a;) {
                        if (c(a))return a;
                        if (b(a))break;
                        a = a.parentNode;
                    }
                    return null;
                }, J = function J(a, c) {
                    for (a = a.parentNode; a && 1 === F(a);) {
                        if (c(a))return a;
                        if (b(a))break;
                        a = a.parentNode;
                    }
                    return null;
                }, K = function K(a, c) {
                    c = c || j.fail;
                    var d = [];
                    return I(a, function (a) {
                        return b(a) || d.push(a), c(a);
                    }), d;
                }, L = function L(a, b) {
                    var c = K(a);
                    return k.last(c.filter(b));
                }, M = function M(b, c) {
                    for (var d = K(b), e = c; e; e = e.parentNode) {
                        if (a.inArray(e, d) > -1)return e;
                    }
                    return null;
                }, N = function N(a, b) {
                    b = b || j.fail;
                    for (var c = []; a && !b(a);) {
                        c.push(a), a = a.previousSibling;
                    }
                    return c;
                }, O = function O(a, b) {
                    b = b || j.fail;
                    for (var c = []; a && !b(a);) {
                        c.push(a), a = a.nextSibling;
                    }
                    return c;
                }, P = function P(a, b) {
                    var c = [];
                    return b = b || j.ok, function d(e) {
                        a !== e && b(e) && c.push(e);
                        for (var f = 0, g = e.childNodes.length; g > f; f++) {
                            d(e.childNodes[f]);
                        }
                    }(a), c;
                }, Q = function Q(b, c) {
                    var d = b.parentNode, e = a("<" + c + ">")[0];
                    return d.insertBefore(e, b), e.appendChild(b), e;
                }, R = function R(a, b) {
                    var c = b.nextSibling, d = b.parentNode;
                    return c ? d.insertBefore(a, c) : d.appendChild(a), a;
                }, S = function S(b, c) {
                    return a.each(c, function (a, c) {
                        b.appendChild(c);
                    }), b;
                }, T = function T(a) {
                    return 0 === a.offset;
                }, U = function U(a) {
                    return a.offset === F(a.node);
                }, V = function V(a) {
                    return T(a) || U(a);
                }, W = function W(a, b) {
                    for (; a && a !== b;) {
                        if (0 !== $(a))return !1;
                        a = a.parentNode;
                    }
                    return !0;
                }, X = function X(a, b) {
                    for (; a && a !== b;) {
                        if ($(a) !== F(a.parentNode) - 1)return !1;
                        a = a.parentNode;
                    }
                    return !0;
                }, Y = function Y(a, b) {
                    return T(a) && W(a.node, b);
                }, Z = function Z(a, b) {
                    return U(a) && X(a.node, b);
                }, $ = function $(a) {
                    for (var b = 0; a = a.previousSibling;) {
                        b += 1;
                    }
                    return b;
                }, _ = function _(a) {
                    return !!(a && a.childNodes && a.childNodes.length);
                }, aa = function aa(a, c) {
                    var d, e;
                    if (0 === a.offset) {
                        if (b(a.node))return null;
                        d = a.node.parentNode, e = $(a.node);
                    } else _(a.node) ? (d = a.node.childNodes[a.offset - 1], e = F(d)) : (d = a.node, e = c ? 0 : a.offset - 1);
                    return {node: d, offset: e};
                }, ba = function ba(a, c) {
                    var d, e;
                    if (F(a.node) === a.offset) {
                        if (b(a.node))return null;
                        d = a.node.parentNode, e = $(a.node) + 1;
                    } else _(a.node) ? (d = a.node.childNodes[a.offset], e = 0) : (d = a.node, e = c ? F(a.node) : a.offset + 1);
                    return {node: d, offset: e};
                }, ca = function ca(a, b) {
                    return a.node === b.node && a.offset === b.offset;
                }, da = function da(a) {
                    if (g(a.node) || !_(a.node) || G(a.node))return !0;
                    var b = a.node.childNodes[a.offset - 1], c = a.node.childNodes[a.offset];
                    return b && !h(b) || c && !h(c) ? !1 : !0;
                }, ea = function ea(a, b) {
                    for (; a;) {
                        if (b(a))return a;
                        a = aa(a);
                    }
                    return null;
                }, fa = function fa(a, b) {
                    for (; a;) {
                        if (b(a))return a;
                        a = ba(a);
                    }
                    return null;
                }, ga = function ga(a) {
                    if (!g(a.node))return !1;
                    var b = a.node.nodeValue.charAt(a.offset - 1);
                    return b && " " !== b && b !== l;
                }, ha = function ha(a, b, c, d) {
                    for (var e = a; e && (c(e), !ca(e, b));) {
                        var f = d && a.node !== e.node && b.node !== e.node;
                        e = ba(e, f);
                    }
                }, ia = function ia(a, b) {
                    var c = K(b, j.eq(a));
                    return c.map($).reverse();
                }, ja = function ja(a, b) {
                    for (var c = a, d = 0, e = b.length; e > d; d++) {
                        c = c.childNodes.length <= b[d] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[d]];
                    }
                    return c;
                }, ka = function ka(a, b) {
                    var c = b && b.isSkipPaddingBlankHTML, d = b && b.isNotSplitEdgePoint;
                    if (V(a) && (g(a.node) || d)) {
                        if (T(a))return a.node;
                        if (U(a))return a.node.nextSibling;
                    }
                    if (g(a.node))return a.node.splitText(a.offset);
                    var e = a.node.childNodes[a.offset], f = R(a.node.cloneNode(!1), a.node);
                    return S(f, O(e)), c || (H(a.node), H(f)), f;
                }, la = function la(a, b, c) {
                    var d = K(b.node, j.eq(a));
                    return d.length ? 1 === d.length ? ka(b, c) : d.reduce(function (a, d) {
                        return a === b.node && (a = ka(b, c)), ka({node: d, offset: a ? n.position(a) : F(d)}, c);
                    }) : null;
                }, ma = function ma(a, b) {
                    var c, d, e = b ? o : x, f = K(a.node, e), g = k.last(f) || a.node;
                    e(g) ? (c = f[f.length - 2], d = g) : (c = g, d = c.parentNode);
                    var h = c && la(c, a, {isSkipPaddingBlankHTML: b, isNotSplitEdgePoint: b});
                    return h || d !== a.node || (h = a.node.childNodes[a.offset]), {rightNode: h, container: d};
                }, na = function na(a) {
                    return document.createElement(a);
                }, oa = function oa(a) {
                    return document.createTextNode(a);
                }, pa = function pa(a, b) {
                    if (a && a.parentNode) {
                        if (a.removeNode)return a.removeNode(b);
                        var c = a.parentNode;
                        if (!b) {
                            var d, e, f = [];
                            for (d = 0, e = a.childNodes.length; e > d; d++) {
                                f.push(a.childNodes[d]);
                            }
                            for (d = 0, e = f.length; e > d; d++) {
                                c.insertBefore(f[d], a);
                            }
                        }
                        c.removeChild(a);
                    }
                }, qa = function qa(a, c) {
                    for (; a && !b(a) && c(a);) {
                        var d = a.parentNode;
                        pa(a), a = d;
                    }
                }, ra = function ra(a, b) {
                    if (a.nodeName.toUpperCase() === b.toUpperCase())return a;
                    var c = na(b);
                    return a.style.cssText && (c.style.cssText = a.style.cssText), S(c, k.from(a.childNodes)), R(c, a), pa(a), c;
                }, sa = f("TEXTAREA"), ta = function ta(a, b) {
                    var c = sa(a[0]) ? a.val() : a.html();
                    return b ? c.replace(/[\n\r]/g, "") : c;
                }, ua = function ua(b, c) {
                    var d = ta(b);
                    if (c) {
                        var e = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                        d = d.replace(e, function (a, b, c) {
                            c = c.toUpperCase();
                            var d = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b, e = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                            return a + (d || e ? "\n" : "");
                        }), d = a.trim(d);
                    }
                    return d;
                };
                return {
                    NBSP_CHAR: l,
                    ZERO_WIDTH_NBSP_CHAR: m,
                    blank: E,
                    emptyPara: "<p>" + E + "</p>",
                    makePredByNodeName: f,
                    isEditable: b,
                    isControlSizing: c,
                    buildLayoutInfo: d,
                    makeLayoutInfo: e,
                    isText: g,
                    isVoid: h,
                    isPara: o,
                    isPurePara: q,
                    isInline: s,
                    isBlock: j.not(s),
                    isBodyInline: A,
                    isBody: B,
                    isParaInline: z,
                    isList: t,
                    isTable: r,
                    isCell: v,
                    isBlockquote: w,
                    isBodyContainer: x,
                    isAnchor: y,
                    isDiv: f("DIV"),
                    isLi: p,
                    isBR: f("BR"),
                    isSpan: f("SPAN"),
                    isB: f("B"),
                    isU: f("U"),
                    isS: f("S"),
                    isI: f("I"),
                    isImg: f("IMG"),
                    isTextarea: sa,
                    isEmpty: G,
                    isEmptyAnchor: j.and(y, G),
                    isClosestSibling: C,
                    withClosestSiblings: D,
                    nodeLength: F,
                    isLeftEdgePoint: T,
                    isRightEdgePoint: U,
                    isEdgePoint: V,
                    isLeftEdgeOf: W,
                    isRightEdgeOf: X,
                    isLeftEdgePointOf: Y,
                    isRightEdgePointOf: Z,
                    prevPoint: aa,
                    nextPoint: ba,
                    isSamePoint: ca,
                    isVisiblePoint: da,
                    prevPointUntil: ea,
                    nextPointUntil: fa,
                    isCharPoint: ga,
                    walkPoint: ha,
                    ancestor: I,
                    singleChildAncestor: J,
                    listAncestor: K,
                    lastAncestor: L,
                    listNext: O,
                    listPrev: N,
                    listDescendant: P,
                    commonAncestor: M,
                    wrap: Q,
                    insertAfter: R,
                    appendChildNodes: S,
                    position: $,
                    hasChildren: _,
                    makeOffsetPath: ia,
                    fromOffsetPath: ja,
                    splitTree: la,
                    splitPoint: ma,
                    create: na,
                    createText: oa,
                    remove: pa,
                    removeWhile: qa,
                    replace: ra,
                    html: ua,
                    value: ta
                };
            }(), o = function () {
                var b = function b(a, _b4) {
                    var c, d, e = a.parentElement(), f = document.body.createTextRange(), g = k.from(e.childNodes);
                    for (c = 0; c < g.length; c++) {
                        if (!n.isText(g[c])) {
                            if (f.moveToElementText(g[c]), f.compareEndPoints("StartToStart", a) >= 0)break;
                            d = g[c];
                        }
                    }
                    if (0 !== c && n.isText(g[c - 1])) {
                        var h = document.body.createTextRange(), i = null;
                        h.moveToElementText(d || e), h.collapse(!d), i = d ? d.nextSibling : e.firstChild;
                        var j = a.duplicate();
                        j.setEndPoint("StartToStart", h);
                        for (var l = j.text.replace(/[\r\n]/g, "").length; l > i.nodeValue.length && i.nextSibling;) {
                            l -= i.nodeValue.length, i = i.nextSibling;
                        }
                        i.nodeValue;
                        _b4 && i.nextSibling && n.isText(i.nextSibling) && l === i.nodeValue.length && (l -= i.nodeValue.length, i = i.nextSibling), e = i, c = l;
                    }
                    return {cont: e, offset: c};
                }, c = function c(a) {
                    var b = function b(a, c) {
                        var d, e;
                        if (n.isText(a)) {
                            var f = n.listPrev(a, j.not(n.isText)), g = k.last(f).previousSibling;
                            d = g || a.parentNode, c += k.sum(k.tail(f), n.nodeLength), e = !g;
                        } else {
                            if (d = a.childNodes[c] || a, n.isText(d))return b(d, 0);
                            c = 0, e = !1;
                        }
                        return {node: d, collapseToStart: e, offset: c};
                    }, c = document.body.createTextRange(), d = b(a.node, a.offset);
                    return c.moveToElementText(d.node), c.collapse(d.collapseToStart), c.moveStart("character", d.offset), c;
                }, d = function d(b, e, f, g) {
                    this.sc = b, this.so = e, this.ec = f, this.eo = g;
                    var h = function h() {
                        if (i.isW3CRangeSupport) {
                            var a = document.createRange();
                            return a.setStart(b, e), a.setEnd(f, g), a;
                        }
                        var d = c({node: b, offset: e});
                        return d.setEndPoint("EndToEnd", c({node: f, offset: g})), d;
                    };
                    this.getPoints = function () {
                        return {sc: b, so: e, ec: f, eo: g};
                    }, this.getStartPoint = function () {
                        return {node: b, offset: e};
                    }, this.getEndPoint = function () {
                        return {node: f, offset: g};
                    }, this.select = function () {
                        var a = h();
                        if (i.isW3CRangeSupport) {
                            var b = document.getSelection();
                            b.rangeCount > 0 && b.removeAllRanges(), b.addRange(a);
                        } else a.select();
                        return this;
                    }, this.normalize = function () {
                        var a = function a(_a2, b) {
                            if (n.isVisiblePoint(_a2) && !n.isEdgePoint(_a2) || n.isVisiblePoint(_a2) && n.isRightEdgePoint(_a2) && !b || n.isVisiblePoint(_a2) && n.isLeftEdgePoint(_a2) && b || n.isVisiblePoint(_a2) && n.isBlock(_a2.node) && n.isEmpty(_a2.node))return _a2;
                            var c = n.ancestor(_a2.node, n.isBlock);
                            if ((n.isLeftEdgePointOf(_a2, c) || n.isVoid(n.prevPoint(_a2).node)) && !b || (n.isRightEdgePointOf(_a2, c) || n.isVoid(n.nextPoint(_a2).node)) && b) {
                                if (n.isVisiblePoint(_a2))return _a2;
                                b = !b;
                            }
                            var d = b ? n.nextPointUntil(n.nextPoint(_a2), n.isVisiblePoint) : n.prevPointUntil(n.prevPoint(_a2), n.isVisiblePoint);
                            return d || _a2;
                        }, b = a(this.getEndPoint(), !1), c = this.isCollapsed() ? b : a(this.getStartPoint(), !0);
                        return new d(c.node, c.offset, b.node, b.offset);
                    }, this.nodes = function (a, b) {
                        a = a || j.ok;
                        var c = b && b.includeAncestor, d = b && b.fullyContains, e = this.getStartPoint(), f = this.getEndPoint(), g = [], h = [];
                        return n.walkPoint(e, f, function (b) {
                            if (!n.isEditable(b.node)) {
                                var e;
                                d ? (n.isLeftEdgePoint(b) && h.push(b.node), n.isRightEdgePoint(b) && k.contains(h, b.node) && (e = b.node)) : e = c ? n.ancestor(b.node, a) : b.node, e && a(e) && g.push(e);
                            }
                        }, !0), k.unique(g);
                    }, this.commonAncestor = function () {
                        return n.commonAncestor(b, f);
                    }, this.expand = function (a) {
                        var c = n.ancestor(b, a), h = n.ancestor(f, a);
                        if (!c && !h)return new d(b, e, f, g);
                        var i = this.getPoints();
                        return c && (i.sc = c, i.so = 0), h && (i.ec = h, i.eo = n.nodeLength(h)), new d(i.sc, i.so, i.ec, i.eo);
                    }, this.collapse = function (a) {
                        return a ? new d(b, e, b, e) : new d(f, g, f, g);
                    }, this.splitText = function () {
                        var a = b === f, c = this.getPoints();
                        return n.isText(f) && !n.isEdgePoint(this.getEndPoint()) && f.splitText(g), n.isText(b) && !n.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(e), c.so = 0, a && (c.ec = c.sc, c.eo = g - e)), new d(c.sc, c.so, c.ec, c.eo);
                    }, this.deleteContents = function () {
                        if (this.isCollapsed())return this;
                        var b = this.splitText(), c = b.nodes(null, {fullyContains: !0}), e = n.prevPointUntil(b.getStartPoint(), function (a) {
                            return !k.contains(c, a.node);
                        }), f = [];
                        return a.each(c, function (a, b) {
                            var c = b.parentNode;
                            e.node !== c && 1 === n.nodeLength(c) && f.push(c), n.remove(b, !1);
                        }), a.each(f, function (a, b) {
                            n.remove(b, !1);
                        }), new d(e.node, e.offset, e.node, e.offset).normalize();
                    };
                    var l = function l(a) {
                        return function () {
                            var c = n.ancestor(b, a);
                            return !!c && c === n.ancestor(f, a);
                        };
                    };
                    this.isOnEditable = l(n.isEditable), this.isOnList = l(n.isList), this.isOnAnchor = l(n.isAnchor), this.isOnCell = l(n.isCell), this.isLeftEdgeOf = function (a) {
                        if (!n.isLeftEdgePoint(this.getStartPoint()))return !1;
                        var b = n.ancestor(this.sc, a);
                        return b && n.isLeftEdgeOf(this.sc, b);
                    }, this.isCollapsed = function () {
                        return b === f && e === g;
                    }, this.wrapBodyInlineWithPara = function () {
                        if (n.isBodyContainer(b) && n.isEmpty(b))return b.innerHTML = n.emptyPara, new d(b.firstChild, 0, b.firstChild, 0);
                        var a = this.normalize();
                        if (n.isParaInline(b) || n.isPara(b))return a;
                        var c;
                        if (n.isInline(a.sc)) {
                            var e = n.listAncestor(a.sc, j.not(n.isInline));
                            c = k.last(e), n.isInline(c) || (c = e[e.length - 2] || a.sc.childNodes[a.so]);
                        } else c = a.sc.childNodes[a.so > 0 ? a.so - 1 : 0];
                        var f = n.listPrev(c, n.isParaInline).reverse();
                        if (f = f.concat(n.listNext(c.nextSibling, n.isParaInline)), f.length) {
                            var g = n.wrap(k.head(f), "p");
                            n.appendChildNodes(g, k.tail(f));
                        }
                        return this.normalize();
                    }, this.insertNode = function (a) {
                        var b = this.wrapBodyInlineWithPara().deleteContents(), c = n.splitPoint(b.getStartPoint(), n.isInline(a));
                        return c.rightNode ? c.rightNode.parentNode.insertBefore(a, c.rightNode) : c.container.appendChild(a), a;
                    }, this.pasteHTML = function (b) {
                        var c = a("<div></div>").html(b)[0], d = k.from(c.childNodes), e = this.wrapBodyInlineWithPara().deleteContents();
                        return d.reverse().map(function (a) {
                            return e.insertNode(a);
                        }).reverse();
                    }, this.toString = function () {
                        var a = h();
                        return i.isW3CRangeSupport ? a.toString() : a.text;
                    }, this.getWordRange = function (a) {
                        var b = this.getEndPoint();
                        if (!n.isCharPoint(b))return this;
                        var c = n.prevPointUntil(b, function (a) {
                            return !n.isCharPoint(a);
                        });
                        return a && (b = n.nextPointUntil(b, function (a) {
                            return !n.isCharPoint(a);
                        })), new d(c.node, c.offset, b.node, b.offset);
                    }, this.bookmark = function (a) {
                        return {
                            s: {path: n.makeOffsetPath(a, b), offset: e},
                            e: {path: n.makeOffsetPath(a, f), offset: g}
                        };
                    }, this.paraBookmark = function (a) {
                        return {
                            s: {path: k.tail(n.makeOffsetPath(k.head(a), b)), offset: e},
                            e: {path: k.tail(n.makeOffsetPath(k.last(a), f)), offset: g}
                        };
                    }, this.getClientRects = function () {
                        var a = h();
                        return a.getClientRects();
                    };
                };
                return {
                    create: function create(a, c, e, f) {
                        if (arguments.length)2 === arguments.length && (e = a, f = c); else if (i.isW3CRangeSupport) {
                            var g = document.getSelection();
                            if (!g || 0 === g.rangeCount)return null;
                            if (n.isBody(g.anchorNode))return null;
                            var h = g.getRangeAt(0);
                            a = h.startContainer, c = h.startOffset, e = h.endContainer, f = h.endOffset;
                        } else {
                            var j = document.selection.createRange(), k = j.duplicate();
                            k.collapse(!1);
                            var l = j;
                            l.collapse(!0);
                            var m = b(l, !0), o = b(k, !1);
                            n.isText(m.node) && n.isLeftEdgePoint(m) && n.isTextNode(o.node) && n.isRightEdgePoint(o) && o.node.nextSibling === m.node && (m = o), a = m.cont, c = m.offset, e = o.cont, f = o.offset;
                        }
                        return new d(a, c, e, f);
                    }, createFromNode: function createFromNode(a) {
                        var b = a, c = 0, d = a, e = n.nodeLength(d);
                        return n.isVoid(b) && (c = n.listPrev(b).length - 1, b = b.parentNode), n.isBR(d) ? (e = n.listPrev(d).length - 1, d = d.parentNode) : n.isVoid(d) && (e = n.listPrev(d).length, d = d.parentNode), this.create(b, c, d, e);
                    }, createFromNodeBefore: function createFromNodeBefore(a) {
                        return this.createFromNode(a).collapse(!0);
                    }, createFromNodeAfter: function createFromNodeAfter(a) {
                        return this.createFromNode(a).collapse();
                    }, createFromBookmark: function createFromBookmark(a, b) {
                        var c = n.fromOffsetPath(a, b.s.path), e = b.s.offset, f = n.fromOffsetPath(a, b.e.path), g = b.e.offset;
                        return new d(c, e, f, g);
                    }, createFromParaBookmark: function createFromParaBookmark(a, b) {
                        var c = a.s.offset, e = a.e.offset, f = n.fromOffsetPath(k.head(b), a.s.path), g = n.fromOffsetPath(k.last(b), a.e.path);
                        return new d(f, c, g, e);
                    }
                };
            }(), p = {
                version: "0.6.16",
                options: {
                    width: null,
                    height: null,
                    minHeight: null,
                    maxHeight: null,
                    focus: !1,
                    tabsize: 4,
                    styleWithSpan: !0,
                    disableLinkTarget: !1,
                    disableDragAndDrop: !1,
                    disableResizeEditor: !1,
                    disableResizeImage: !1,
                    shortcuts: !0,
                    textareaAutoSync: !0,
                    placeholder: !1,
                    prettifyHtml: !0,
                    iconPrefix: "fa fa-",
                    icons: {
                        font: {
                            bold: "bold",
                            italic: "italic",
                            underline: "underline",
                            clear: "eraser",
                            height: "text-height",
                            strikethrough: "strikethrough",
                            superscript: "superscript",
                            subscript: "subscript"
                        },
                        image: {
                            image: "picture-o",
                            floatLeft: "align-left",
                            floatRight: "align-right",
                            floatNone: "align-justify",
                            shapeRounded: "square",
                            shapeCircle: "circle-o",
                            shapeThumbnail: "picture-o",
                            shapeNone: "times",
                            remove: "trash-o"
                        },
                        link: {link: "link", unlink: "unlink", edit: "edit"},
                        table: {table: "table"},
                        hr: {insert: "minus"},
                        style: {style: "magic"},
                        lists: {unordered: "list-ul", ordered: "list-ol"},
                        options: {help: "question", fullscreen: "arrows-alt", codeview: "code"},
                        paragraph: {
                            paragraph: "align-left",
                            outdent: "outdent",
                            indent: "indent",
                            left: "align-left",
                            center: "align-center",
                            right: "align-right",
                            justify: "align-justify"
                        },
                        color: {recent: "font"},
                        history: {undo: "undo", redo: "repeat"},
                        misc: {check: "check"}
                    },
                    dialogsInBody: !1,
                    codemirror: {mode: "text/html", htmlMode: !0, lineNumbers: !0},
                    lang: "en-US",
                    direction: null,
                    toolbar: [["style", ["style"]], ["font", ["bold", "italic", "underline", "clear"]], ["fontname", ["fontname"]], ["fontsize", ["fontsize"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["height", ["height"]], ["table", ["table"]], ["insert", ["link", "picture", "hr"]], ["view", ["fullscreen", "codeview"]], ["help", ["help"]]],
                    plugin: {},
                    airMode: !1,
                    airPopover: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]]],
                    styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                    defaultFontName: "Helvetica Neue",
                    fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                    fontNamesIgnoreCheck: [],
                    fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                    colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
                    lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                    insertTableMaxSize: {col: 10, row: 10},
                    maximumImageFileSize: null,
                    oninit: null,
                    onfocus: null,
                    onblur: null,
                    onenter: null,
                    onkeyup: null,
                    onkeydown: null,
                    onImageUpload: null,
                    onImageUploadError: null,
                    onMediaDelete: null,
                    onToolbarClick: null,
                    onsubmit: null,
                    onCreateLink: function onCreateLink(a) {
                        return -1 !== a.indexOf("@") && -1 === a.indexOf(":") && (a = "mailto:" + a), a;
                    },
                    keyMap: {
                        pc: {
                            ENTER: "insertParagraph",
                            "CTRL+Z": "undo",
                            "CTRL+Y": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CTRL+B": "bold",
                            "CTRL+I": "italic",
                            "CTRL+U": "underline",
                            "CTRL+SHIFT+S": "strikethrough",
                            "CTRL+BACKSLASH": "removeFormat",
                            "CTRL+SHIFT+L": "justifyLeft",
                            "CTRL+SHIFT+E": "justifyCenter",
                            "CTRL+SHIFT+R": "justifyRight",
                            "CTRL+SHIFT+J": "justifyFull",
                            "CTRL+SHIFT+NUM7": "insertUnorderedList",
                            "CTRL+SHIFT+NUM8": "insertOrderedList",
                            "CTRL+LEFTBRACKET": "outdent",
                            "CTRL+RIGHTBRACKET": "indent",
                            "CTRL+NUM0": "formatPara",
                            "CTRL+NUM1": "formatH1",
                            "CTRL+NUM2": "formatH2",
                            "CTRL+NUM3": "formatH3",
                            "CTRL+NUM4": "formatH4",
                            "CTRL+NUM5": "formatH5",
                            "CTRL+NUM6": "formatH6",
                            "CTRL+ENTER": "insertHorizontalRule",
                            "CTRL+K": "showLinkDialog"
                        },
                        mac: {
                            ENTER: "insertParagraph",
                            "CMD+Z": "undo",
                            "CMD+SHIFT+Z": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CMD+B": "bold",
                            "CMD+I": "italic",
                            "CMD+U": "underline",
                            "CMD+SHIFT+S": "strikethrough",
                            "CMD+BACKSLASH": "removeFormat",
                            "CMD+SHIFT+L": "justifyLeft",
                            "CMD+SHIFT+E": "justifyCenter",
                            "CMD+SHIFT+R": "justifyRight",
                            "CMD+SHIFT+J": "justifyFull",
                            "CMD+SHIFT+NUM7": "insertUnorderedList",
                            "CMD+SHIFT+NUM8": "insertOrderedList",
                            "CMD+LEFTBRACKET": "outdent",
                            "CMD+RIGHTBRACKET": "indent",
                            "CMD+NUM0": "formatPara",
                            "CMD+NUM1": "formatH1",
                            "CMD+NUM2": "formatH2",
                            "CMD+NUM3": "formatH3",
                            "CMD+NUM4": "formatH4",
                            "CMD+NUM5": "formatH5",
                            "CMD+NUM6": "formatH6",
                            "CMD+ENTER": "insertHorizontalRule",
                            "CMD+K": "showLinkDialog"
                        }
                    }
                },
                lang: {
                    "en-US": {
                        font: {
                            bold: "Bold",
                            italic: "Italic",
                            underline: "Underline",
                            clear: "Remove Font Style",
                            height: "Line Height",
                            name: "Font Family",
                            strikethrough: "Strikethrough",
                            subscript: "Subscript",
                            superscript: "Superscript",
                            size: "Font Size"
                        },
                        image: {
                            image: "Picture",
                            insert: "Insert Image",
                            resizeFull: "Resize Full",
                            resizeHalf: "Resize Half",
                            resizeQuarter: "Resize Quarter",
                            floatLeft: "Float Left",
                            floatRight: "Float Right",
                            floatNone: "Float None",
                            shapeRounded: "Shape: Rounded",
                            shapeCircle: "Shape: Circle",
                            shapeThumbnail: "Shape: Thumbnail",
                            shapeNone: "Shape: None",
                            dragImageHere: "Drag image or text here",
                            dropImage: "Drop image or Text",
                            selectFromFiles: "Select from files",
                            maximumFileSize: "Maximum file size",
                            maximumFileSizeError: "Maximum file size exceeded.",
                            url: "Image URL",
                            remove: "Remove Image"
                        },
                        link: {
                            link: "Link",
                            insert: "Insert Link",
                            unlink: "Unlink",
                            edit: "Edit",
                            textToDisplay: "Text to display",
                            url: "To what URL should this link go?",
                            openInNewWindow: "Open in new window"
                        },
                        table: {table: "Table"},
                        hr: {insert: "Insert Horizontal Rule"},
                        style: {
                            style: "Style",
                            normal: "Normal",
                            blockquote: "Quote",
                            pre: "Code",
                            h1: "Header 1",
                            h2: "Header 2",
                            h3: "Header 3",
                            h4: "Header 4",
                            h5: "Header 5",
                            h6: "Header 6"
                        },
                        lists: {unordered: "Unordered list", ordered: "Ordered list"},
                        options: {help: "Help", fullscreen: "Full Screen", codeview: "Code View"},
                        paragraph: {
                            paragraph: "Paragraph",
                            outdent: "Outdent",
                            indent: "Indent",
                            left: "Align left",
                            center: "Align center",
                            right: "Align right",
                            justify: "Justify full"
                        },
                        color: {
                            recent: "Recent Color",
                            more: "More Color",
                            background: "Background Color",
                            foreground: "Foreground Color",
                            transparent: "Transparent",
                            setTransparent: "Set transparent",
                            reset: "Reset",
                            resetToDefault: "Reset to default"
                        },
                        shortcut: {
                            shortcuts: "Keyboard shortcuts",
                            close: "Close",
                            textFormatting: "Text formatting",
                            action: "Action",
                            paragraphFormatting: "Paragraph formatting",
                            documentStyle: "Document Style",
                            extraKeys: "Extra keys"
                        },
                        history: {undo: "Undo", redo: "Redo"}
                    }
                }
            }, q = function () {
                var b = function b(_b5) {
                    return a.Deferred(function (c) {
                        a.extend(new FileReader(), {
                            onload: function onload(a) {
                                var b = a.target.result;
                                c.resolve(b);
                            }, onerror: function onerror() {
                                c.reject(this);
                            }
                        }).readAsDataURL(_b5);
                    }).promise();
                }, c = function c(b, _c5) {
                    return a.Deferred(function (d) {
                        var e = a("<img>");
                        e.one("load", function () {
                            e.off("error abort"), d.resolve(e);
                        }).one("error abort", function () {
                            e.off("load").detach(), d.reject(e);
                        }).css({display: "none"}).appendTo(document.body).attr({src: b, "data-filename": _c5});
                    }).promise();
                };
                return {readFileAsDataURL: b, createImage: c};
            }(), r = function () {
                var a = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SPACE: 32,
                    NUM0: 48,
                    NUM1: 49,
                    NUM2: 50,
                    NUM3: 51,
                    NUM4: 52,
                    NUM5: 53,
                    NUM6: 54,
                    NUM7: 55,
                    NUM8: 56,
                    B: 66,
                    E: 69,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    R: 82,
                    S: 83,
                    U: 85,
                    V: 86,
                    Y: 89,
                    Z: 90,
                    SLASH: 191,
                    LEFTBRACKET: 219,
                    BACKSLASH: 220,
                    RIGHTBRACKET: 221
                };
                return {
                    isEdit: function isEdit(a) {
                        return k.contains([8, 9, 13, 32], a);
                    }, isMove: function isMove(a) {
                        return k.contains([37, 38, 39, 40], a);
                    }, nameFromCode: j.invertObject(a), code: a
                };
            }(), s = function s(a) {
                var b = [], c = -1, d = a[0], e = function e() {
                    var b = o.create(), c = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};
                    return {contents: a.html(), bookmark: b ? b.bookmark(d) : c};
                }, f = function f(b) {
                    null !== b.contents && a.html(b.contents), null !== b.bookmark && o.createFromBookmark(d, b.bookmark).select();
                };
                this.undo = function () {
                    a.html() !== b[c].contents && this.recordUndo(), c > 0 && (c--, f(b[c]));
                }, this.redo = function () {
                    b.length - 1 > c && (c++, f(b[c]));
                }, this.recordUndo = function () {
                    c++, b.length > c && (b = b.slice(0, c)), b.push(e());
                }, this.recordUndo();
            }, t = function t() {
                var b = function b(_b6, c) {
                    if (i.jqueryVersion < 1.9) {
                        var d = {};
                        return a.each(c, function (a, c) {
                            d[c] = _b6.css(c);
                        }), d;
                    }
                    return _b6.css.call(_b6, c);
                };
                this.fromNode = function (a) {
                    var c = ["font-family", "font-size", "text-align", "list-style-type", "line-height"], d = b(a, c) || {};
                    return d["font-size"] = parseInt(d["font-size"], 10), d;
                }, this.stylePara = function (b, c) {
                    a.each(b.nodes(n.isPara, {includeAncestor: !0}), function (b, d) {
                        a(d).css(c);
                    });
                }, this.styleNodes = function (b, c) {
                    b = b.splitText();
                    var d = c && c.nodeName || "SPAN", e = !(!c || !c.expandClosestSibling), f = !(!c || !c.onlyPartialContains);
                    if (b.isCollapsed())return [b.insertNode(n.create(d))];
                    var g = n.makePredByNodeName(d), h = b.nodes(n.isText, {fullyContains: !0}).map(function (a) {
                        return n.singleChildAncestor(a, g) || n.wrap(a, d);
                    });
                    if (e) {
                        if (f) {
                            var i = b.nodes();
                            g = j.and(g, function (a) {
                                return k.contains(i, a);
                            });
                        }
                        return h.map(function (b) {
                            var c = n.withClosestSiblings(b, g), d = k.head(c), e = k.tail(c);
                            return a.each(e, function (a, b) {
                                n.appendChildNodes(d, b.childNodes), n.remove(b);
                            }), k.head(c);
                        });
                    }
                    return h;
                }, this.current = function (b) {
                    var c = a(n.isText(b.sc) ? b.sc.parentNode : b.sc), d = this.fromNode(c);
                    if (d["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal", d["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal", d["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal", d["font-strikethrough"] = document.queryCommandState("strikeThrough") ? "strikethrough" : "normal", d["font-superscript"] = document.queryCommandState("superscript") ? "superscript" : "normal", d["font-subscript"] = document.queryCommandState("subscript") ? "subscript" : "normal", b.isOnList()) {
                        var e = ["circle", "disc", "disc-leading-zero", "square"], f = a.inArray(d["list-style-type"], e) > -1;
                        d["list-style"] = f ? "unordered" : "ordered";
                    } else d["list-style"] = "none";
                    var g = n.ancestor(b.sc, n.isPara);
                    if (g && g.style["line-height"])d["line-height"] = g.style.lineHeight; else {
                        var h = parseInt(d["line-height"], 10) / parseInt(d["font-size"], 10);
                        d["line-height"] = h.toFixed(1);
                    }
                    return d.anchor = b.isOnAnchor() && n.ancestor(b.sc, n.isAnchor), d.ancestors = n.listAncestor(b.sc, n.isEditable), d.range = b, d;
                };
            }, u = function u() {
                this.insertOrderedList = function () {
                    this.toggleList("OL");
                }, this.insertUnorderedList = function () {
                    this.toggleList("UL");
                }, this.indent = function () {
                    var b = this, c = o.create().wrapBodyInlineWithPara(), d = c.nodes(n.isPara, {includeAncestor: !0}), e = k.clusterBy(d, j.peq2("parentNode"));
                    a.each(e, function (c, d) {
                        var e = k.head(d);
                        n.isLi(e) ? b.wrapList(d, e.parentNode.nodeName) : a.each(d, function (b, c) {
                            a(c).css("marginLeft", function (a, b) {
                                return (parseInt(b, 10) || 0) + 25;
                            });
                        });
                    }), c.select();
                }, this.outdent = function () {
                    var b = this, c = o.create().wrapBodyInlineWithPara(), d = c.nodes(n.isPara, {includeAncestor: !0}), e = k.clusterBy(d, j.peq2("parentNode"));
                    a.each(e, function (c, d) {
                        var e = k.head(d);
                        n.isLi(e) ? b.releaseList([d]) : a.each(d, function (b, c) {
                            a(c).css("marginLeft", function (a, b) {
                                return b = parseInt(b, 10) || 0, b > 25 ? b - 25 : "";
                            });
                        });
                    }), c.select();
                }, this.toggleList = function (b) {
                    var c = this, d = o.create().wrapBodyInlineWithPara(), e = d.nodes(n.isPara, {includeAncestor: !0}), f = d.paraBookmark(e), g = k.clusterBy(e, j.peq2("parentNode"));
                    if (k.find(e, n.isPurePara)) {
                        var h = [];
                        a.each(g, function (a, d) {
                            h = h.concat(c.wrapList(d, b));
                        }), e = h;
                    } else {
                        var i = d.nodes(n.isList, {includeAncestor: !0}).filter(function (c) {
                            return !a.nodeName(c, b);
                        });
                        i.length ? a.each(i, function (a, c) {
                            n.replace(c, b);
                        }) : e = this.releaseList(g, !0);
                    }
                    o.createFromParaBookmark(f, e).select();
                }, this.wrapList = function (a, b) {
                    var c = k.head(a), d = k.last(a), e = n.isList(c.previousSibling) && c.previousSibling, f = n.isList(d.nextSibling) && d.nextSibling, g = e || n.insertAfter(n.create(b || "UL"), d);
                    return a = a.map(function (a) {
                        return n.isPurePara(a) ? n.replace(a, "LI") : a;
                    }), n.appendChildNodes(g, a), f && (n.appendChildNodes(g, k.from(f.childNodes)), n.remove(f)), a;
                }, this.releaseList = function (b, c) {
                    var d = [];
                    return a.each(b, function (b, e) {
                        var f = k.head(e), g = k.last(e), h = c ? n.lastAncestor(f, n.isList) : f.parentNode, i = h.childNodes.length > 1 ? n.splitTree(h, {
                            node: g.parentNode,
                            offset: n.position(g) + 1
                        }, {isSkipPaddingBlankHTML: !0}) : null, j = n.splitTree(h, {
                            node: f.parentNode,
                            offset: n.position(f)
                        }, {isSkipPaddingBlankHTML: !0});
                        e = c ? n.listDescendant(j, n.isLi) : k.from(j.childNodes).filter(n.isLi), (c || !n.isList(h.parentNode)) && (e = e.map(function (a) {
                            return n.replace(a, "P");
                        })), a.each(k.from(e).reverse(), function (a, b) {
                            n.insertAfter(b, h);
                        });
                        var l = k.compact([h, j, i]);
                        a.each(l, function (b, c) {
                            var d = [c].concat(n.listDescendant(c, n.isList));
                            a.each(d.reverse(), function (a, b) {
                                n.nodeLength(b) || n.remove(b, !0);
                            });
                        }), d = d.concat(e);
                    }), d;
                };
            }, v = function v() {
                var b = new u();
                this.insertTab = function (a, b, c) {
                    var d = n.createText(new Array(c + 1).join(n.NBSP_CHAR));
                    b = b.deleteContents(), b.insertNode(d, !0), b = o.create(d, c), b.select();
                }, this.insertParagraph = function () {
                    var c = o.create();
                    c = c.deleteContents(), c = c.wrapBodyInlineWithPara();
                    var d, e = n.ancestor(c.sc, n.isPara);
                    if (e) {
                        if (n.isEmpty(e) && n.isLi(e))return void b.toggleList(e.parentNode.nodeName);
                        d = n.splitTree(e, c.getStartPoint());
                        var f = n.listDescendant(e, n.isEmptyAnchor);
                        f = f.concat(n.listDescendant(d, n.isEmptyAnchor)), a.each(f, function (a, b) {
                            n.remove(b);
                        });
                    } else {
                        var g = c.sc.childNodes[c.so];
                        d = a(n.emptyPara)[0], g ? c.sc.insertBefore(d, g) : c.sc.appendChild(d);
                    }
                    o.create(d, 0).normalize().select();
                };
            }, w = function w() {
                this.tab = function (a, b) {
                    var c = n.ancestor(a.commonAncestor(), n.isCell), d = n.ancestor(c, n.isTable), e = n.listDescendant(d, n.isCell), f = k[b ? "prev" : "next"](e, c);
                    f && o.create(f, 0).select();
                }, this.createTable = function (b, c) {
                    for (var d, e = [], f = 0; b > f; f++) {
                        e.push("<td>" + n.blank + "</td>");
                    }
                    d = e.join("");
                    for (var g, h = [], i = 0; c > i; i++) {
                        h.push("<tr>" + d + "</tr>");
                    }
                    return g = h.join(""), a('<table class="table table-bordered">' + g + "</table>")[0];
                };
            }, x = "bogus", y = function y(b) {
                var c = this, d = new t(), e = new w(), f = new v(), g = new u();
                this.createRange = function (a) {
                    return this.focus(a), o.create();
                }, this.saveRange = function (a, b) {
                    this.focus(a), a.data("range", o.create()), b && o.create().collapse().select();
                }, this.saveNode = function (a) {
                    for (var b = [], c = 0, d = a[0].childNodes.length; d > c; c++) {
                        b.push(a[0].childNodes[c]);
                    }
                    a.data("childNodes", b);
                }, this.restoreRange = function (a) {
                    var b = a.data("range");
                    b && (b.select(), this.focus(a));
                }, this.restoreNode = function (a) {
                    a.html("");
                    for (var b = a.data("childNodes"), c = 0, d = b.length; d > c; c++) {
                        a[0].appendChild(b[c]);
                    }
                }, this.currentStyle = function (a) {
                    var b = o.create(), c = b && b.isOnEditable() ? d.current(b.normalize()) : {};
                    return n.isImg(a) && (c.image = a), c;
                }, this.styleFromNode = function (a) {
                    return d.fromNode(a);
                };
                var h = function h(a) {
                    var c = n.makeLayoutInfo(a).holder();
                    b.bindCustomEvent(c, a.data("callbacks"), "before.command")(a.html(), a);
                }, j = function j(a) {
                    var c = n.makeLayoutInfo(a).holder();
                    b.bindCustomEvent(c, a.data("callbacks"), "change")(a.html(), a);
                };
                this.undo = function (a) {
                    h(a), a.data("NoteHistory").undo(), j(a);
                }, this.redo = function (a) {
                    h(a), a.data("NoteHistory").redo(), j(a);
                };
                for (var l = this.beforeCommand = function (a) {
                    h(a), c.focus(a);
                }, m = this.afterCommand = function (a, b) {
                    a.data("NoteHistory").recordUndo(), b || j(a);
                }, p = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "fontName"], r = 0, s = p.length; s > r; r++) {
                    this[p[r]] = function (a) {
                        return function (b, c) {
                            l(b), document.execCommand(a, !1, c), m(b, !0);
                        };
                    }(p[r]);
                }
                this.tab = function (a, b) {
                    var c = this.createRange(a);
                    c.isCollapsed() && c.isOnCell() ? e.tab(c) : (l(a), f.insertTab(a, c, b.tabsize), m(a));
                }, this.untab = function (a) {
                    var b = this.createRange(a);
                    b.isCollapsed() && b.isOnCell() && e.tab(b, !0);
                }, this.insertParagraph = function (a) {
                    l(a), f.insertParagraph(a), m(a);
                }, this.insertOrderedList = function (a) {
                    l(a), g.insertOrderedList(a), m(a);
                }, this.insertUnorderedList = function (a) {
                    l(a), g.insertUnorderedList(a), m(a);
                }, this.indent = function (a) {
                    l(a), g.indent(a), m(a);
                }, this.outdent = function (a) {
                    l(a), g.outdent(a), m(a);
                }, this.insertImage = function (a, c, d) {
                    q.createImage(c, d).then(function (b) {
                        l(a), b.css({
                            display: "",
                            width: Math.min(a.width(), b.width())
                        }), o.create().insertNode(b[0]), o.createFromNodeAfter(b[0]).select(), m(a);
                    }).fail(function () {
                        var c = n.makeLayoutInfo(a).holder();
                        b.bindCustomEvent(c, a.data("callbacks"), "image.upload.error")();
                    });
                }, this.insertNode = function (a, b) {
                    l(a), o.create().insertNode(b), o.createFromNodeAfter(b).select(), m(a);
                }, this.insertText = function (a, b) {
                    l(a);
                    var c = o.create().insertNode(n.createText(b));
                    o.create(c, n.nodeLength(c)).select(), m(a);
                }, this.pasteHTML = function (a, b) {
                    l(a);
                    var c = o.create().pasteHTML(b);
                    o.createFromNodeAfter(k.last(c)).select(), m(a);
                }, this.formatBlock = function (a, b) {
                    l(a), b = i.isMSIE ? "<" + b + ">" : b, document.execCommand("FormatBlock", !1, b), m(a);
                }, this.formatPara = function (a) {
                    l(a), this.formatBlock(a, "P"), m(a);
                };
                for (var r = 1; 6 >= r; r++) {
                    this["formatH" + r] = function (a) {
                        return function (b) {
                            this.formatBlock(b, "H" + a);
                        };
                    }(r);
                }
                this.fontSize = function (b, c) {
                    var e = o.create();
                    if (e.isCollapsed()) {
                        var f = d.styleNodes(e), g = k.head(f);
                        a(f).css({"font-size": c + "px"}), g && !n.nodeLength(g) && (g.innerHTML = n.ZERO_WIDTH_NBSP_CHAR, o.createFromNodeAfter(g.firstChild).select(), b.data(x, g));
                    } else l(b), a(d.styleNodes(e)).css({"font-size": c + "px"}), m(b);
                }, this.insertHorizontalRule = function (b) {
                    l(b);
                    var c = o.create(), d = c.insertNode(a("<HR/>")[0]);
                    d.nextSibling && o.create(d.nextSibling, 0).normalize().select(), m(b);
                }, this.removeBogus = function (a) {
                    var b = a.data(x);
                    if (b) {
                        var c = k.find(k.from(b.childNodes), n.isText), d = c.nodeValue.indexOf(n.ZERO_WIDTH_NBSP_CHAR);
                        -1 !== d && c.deleteData(d, 1), n.isEmpty(b) && n.remove(b), a.removeData(x);
                    }
                }, this.lineHeight = function (a, b) {
                    l(a), d.stylePara(o.create(), {lineHeight: b}), m(a);
                }, this.unlink = function (a) {
                    var b = this.createRange(a);
                    if (b.isOnAnchor()) {
                        var c = n.ancestor(b.sc, n.isAnchor);
                        b = o.createFromNode(c), b.select(), l(a), document.execCommand("unlink"), m(a);
                    }
                }, this.createLink = function (b, c, e) {
                    var f = c.url, g = c.text, h = c.isNewWindow, i = c.range || this.createRange(b), j = i.toString() !== g;
                    e = e || n.makeLayoutInfo(b).editor().data("options"), l(b), e.onCreateLink && (f = e.onCreateLink(f));
                    var p = [];
                    if (j) {
                        var q = i.insertNode(a("<A>" + g + "</A>")[0]);
                        p.push(q);
                    } else p = d.styleNodes(i, {nodeName: "A", expandClosestSibling: !0, onlyPartialContains: !0});
                    a.each(p, function (b, c) {
                        a(c).attr("href", f), h ? a(c).attr("target", "_blank") : a(c).removeAttr("target");
                    });
                    var r = o.createFromNodeBefore(k.head(p)), s = r.getStartPoint(), t = o.createFromNodeAfter(k.last(p)), u = t.getEndPoint();
                    o.create(s.node, s.offset, u.node, u.offset).select(), m(b);
                }, this.getLinkInfo = function (b) {
                    this.focus(b);
                    var c = o.create().expand(n.isAnchor), d = a(k.head(c.nodes(n.isAnchor)));
                    return {
                        range: c,
                        text: c.toString(),
                        isNewWindow: d.length ? "_blank" === d.attr("target") : !1,
                        url: d.length ? d.attr("href") : ""
                    };
                }, this.color = function (a, b) {
                    var c = JSON.parse(b), d = c.foreColor, e = c.backColor;
                    l(a), d && document.execCommand("foreColor", !1, d), e && document.execCommand("backColor", !1, e), m(a);
                }, this.insertTable = function (a, b) {
                    var c = b.split("x");
                    l(a);
                    var d = o.create().deleteContents();
                    d.insertNode(e.createTable(c[0], c[1])), m(a);
                }, this.floatMe = function (a, b, c) {
                    l(a), c.removeClass("pull-left pull-right"), b && "none" !== b && c.addClass("pull-" + b), c.css("float", b), m(a);
                }, this.imageShape = function (a, b, c) {
                    l(a), c.removeClass("img-rounded img-circle img-thumbnail"), b && c.addClass(b), m(a);
                }, this.resize = function (a, b, c) {
                    l(a), c.css({width: 100 * b + "%", height: ""}), m(a);
                }, this.resizeTo = function (a, b, c) {
                    var d;
                    if (c) {
                        var e = a.y / a.x, f = b.data("ratio");
                        d = {width: f > e ? a.x : a.y / f, height: f > e ? a.x * f : a.y};
                    } else d = {width: a.x, height: a.y};
                    b.css(d);
                }, this.removeMedia = function (c, d, e) {
                    l(c), e.detach(), b.bindCustomEvent(a(), c.data("callbacks"), "media.delete")(e, c), m(c);
                }, this.focus = function (a) {
                    a.focus(), i.isFF && !o.create().isOnEditable() && o.createFromNode(a[0]).normalize().collapse().select();
                }, this.isEmpty = function (a) {
                    return n.isEmpty(a[0]) || n.emptyPara === a.html();
                };
            }, z = function z() {
                this.update = function (b, c) {
                    var d = function d(b, c) {
                        b.find(".dropdown-menu li a").each(function () {
                            var b = a(this).data("value") + "" == c + "";
                            this.className = b ? "checked" : "";
                        });
                    }, e = function e(a, c) {
                        var d = b.find(a);
                        d.toggleClass("active", c());
                    };
                    if (c.image) {
                        var f = a(c.image);
                        e('button[data-event="imageShape"][data-value="img-rounded"]', function () {
                            return f.hasClass("img-rounded");
                        }), e('button[data-event="imageShape"][data-value="img-circle"]', function () {
                            return f.hasClass("img-circle");
                        }), e('button[data-event="imageShape"][data-value="img-thumbnail"]', function () {
                            return f.hasClass("img-thumbnail");
                        }), e('button[data-event="imageShape"]:not([data-value])', function () {
                            return !f.is(".img-rounded, .img-circle, .img-thumbnail");
                        });
                        var g = f.css("float");
                        e('button[data-event="floatMe"][data-value="left"]', function () {
                            return "left" === g;
                        }), e('button[data-event="floatMe"][data-value="right"]', function () {
                            return "right" === g;
                        }), e('button[data-event="floatMe"][data-value="none"]', function () {
                            return "left" !== g && "right" !== g;
                        });
                        var h = f.attr("style");
                        return e('button[data-event="resize"][data-value="1"]', function () {
                            return !!/(^|\s)(max-)?width\s*:\s*100%/.test(h);
                        }), e('button[data-event="resize"][data-value="0.5"]', function () {
                            return !!/(^|\s)(max-)?width\s*:\s*50%/.test(h);
                        }), void e('button[data-event="resize"][data-value="0.25"]', function () {
                            return !!/(^|\s)(max-)?width\s*:\s*25%/.test(h);
                        });
                    }
                    var j = b.find(".note-fontname");
                    if (j.length) {
                        var k = c["font-family"];
                        if (k) {
                            for (var l = k.split(","), m = 0, n = l.length; n > m && (k = l[m].replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, ""), !i.isFontInstalled(k)); m++) {
                            }
                            j.find(".note-current-fontname").text(k), d(j, k);
                        }
                    }
                    var o = b.find(".note-fontsize");
                    o.find(".note-current-fontsize").text(c["font-size"]), d(o, parseFloat(c["font-size"]));
                    var p = b.find(".note-height");
                    d(p, parseFloat(c["line-height"])), e('button[data-event="bold"]', function () {
                        return "bold" === c["font-bold"];
                    }), e('button[data-event="italic"]', function () {
                        return "italic" === c["font-italic"];
                    }), e('button[data-event="underline"]', function () {
                        return "underline" === c["font-underline"];
                    }), e('button[data-event="strikethrough"]', function () {
                        return "strikethrough" === c["font-strikethrough"];
                    }), e('button[data-event="superscript"]', function () {
                        return "superscript" === c["font-superscript"];
                    }), e('button[data-event="subscript"]', function () {
                        return "subscript" === c["font-subscript"];
                    }), e('button[data-event="justifyLeft"]', function () {
                        return "left" === c["text-align"] || "start" === c["text-align"];
                    }), e('button[data-event="justifyCenter"]', function () {
                        return "center" === c["text-align"];
                    }), e('button[data-event="justifyRight"]', function () {
                        return "right" === c["text-align"];
                    }), e('button[data-event="justifyFull"]', function () {
                        return "justify" === c["text-align"];
                    }), e('button[data-event="insertUnorderedList"]', function () {
                        return "unordered" === c["list-style"];
                    }), e('button[data-event="insertOrderedList"]', function () {
                        return "ordered" === c["list-style"];
                    });
                }, this.updateRecentColor = function (b, c, d) {
                    var e = a(b).closest(".note-color"), f = e.find(".note-recent-color"), g = JSON.parse(f.attr("data-value"));
                    g[c] = d, f.attr("data-value", JSON.stringify(g));
                    var h = "backColor" === c ? "background-color" : "color";
                    f.find("i").css(h, d);
                };
            }, A = function A() {
                var a = new z();
                this.update = function (b, c) {
                    a.update(b, c);
                }, this.updateRecentColor = function (b, c, d) {
                    a.updateRecentColor(b, c, d);
                }, this.activate = function (a) {
                    a.find("button").not('button[data-event="codeview"]').removeClass("disabled");
                }, this.deactivate = function (a) {
                    a.find("button").not('button[data-event="codeview"]').addClass("disabled");
                }, this.updateFullscreen = function (a, b) {
                    var c = a.find('button[data-event="fullscreen"]');
                    c.toggleClass("active", b);
                }, this.updateCodeview = function (a, b) {
                    var c = a.find('button[data-event="codeview"]');
                    c.toggleClass("active", b), b ? this.deactivate(a) : this.activate(a);
                }, this.get = function (a, b) {
                    var c = n.makeLayoutInfo(a).toolbar();
                    return c.find("[data-name=" + b + "]");
                }, this.setButtonState = function (a, b, c) {
                    c = c === !1 ? !1 : !0;
                    var d = this.get(a, b);
                    d.toggleClass("active", c);
                };
            }, B = 24, C = function C() {
                var b = a(document);
                this.attach = function (a, b) {
                    b.disableResizeEditor || a.statusbar().on("mousedown", c);
                };
                var c = function c(a) {
                    a.preventDefault(), a.stopPropagation();
                    var c = n.makeLayoutInfo(a.target).editable(), d = c.offset().top - b.scrollTop(), e = n.makeLayoutInfo(a.currentTarget || a.target), f = e.editor().data("options");
                    b.on("mousemove", function (a) {
                        var b = a.clientY - (d + B);
                        b = f.minHeight > 0 ? Math.max(b, f.minHeight) : b, b = f.maxHeight > 0 ? Math.min(b, f.maxHeight) : b, c.height(b);
                    }).one("mouseup", function () {
                        b.off("mousemove");
                    });
                };
            }, D = function D() {
                var b = new z(), c = function c(b, _c6) {
                    var d = _c6 && _c6.isAirMode, e = _c6 && _c6.isLeftTop, f = a(b), g = d ? f.offset() : f.position(), h = e ? 0 : f.outerHeight(!0);
                    return {left: g.left, top: g.top + h};
                }, d = function d(a, b) {
                    a.css({display: "block", left: b.left, top: b.top});
                }, e = 20;
                this.update = function (f, g, h) {
                    b.update(f, g);
                    var i = f.find(".note-link-popover");
                    if (g.anchor) {
                        var l = i.find("a"), m = a(g.anchor).attr("href"), n = a(g.anchor).attr("target");
                        l.attr("href", m).html(m), n ? l.attr("target", "_blank") : l.removeAttr("target"), d(i, c(g.anchor, {isAirMode: h}));
                    } else i.hide();
                    var o = f.find(".note-image-popover");
                    g.image ? d(o, c(g.image, {isAirMode: h, isLeftTop: !0})) : o.hide();
                    var p = f.find(".note-air-popover");
                    if (h && g.range && !g.range.isCollapsed()) {
                        var q = k.last(g.range.getClientRects());
                        if (q) {
                            var r = j.rect2bnd(q);
                            d(p, {left: Math.max(r.left + r.width / 2 - e, 0), top: r.top + r.height});
                        }
                    } else p.hide();
                }, this.updateRecentColor = function (a, b, c) {
                    a.updateRecentColor(a, b, c);
                }, this.hide = function (a) {
                    a.children().hide();
                };
            }, E = function E(b) {
                var c = a(document), d = function d(_d) {
                    if (n.isControlSizing(_d.target)) {
                        _d.preventDefault(), _d.stopPropagation();
                        var e = n.makeLayoutInfo(_d.target), f = e.handle(), g = e.popover(), h = e.editable(), i = e.editor(), j = f.find(".note-control-selection").data("target"), k = a(j), l = k.offset(), m = c.scrollTop(), o = i.data("options").airMode;
                        c.on("mousemove", function (a) {
                            b.invoke("editor.resizeTo", {
                                x: a.clientX - l.left,
                                y: a.clientY - (l.top - m)
                            }, k, !a.shiftKey), b.invoke("handle.update", f, {image: j}, o), b.invoke("popover.update", g, {image: j}, o);
                        }).one("mouseup", function () {
                            c.off("mousemove"), b.invoke("editor.afterCommand", h);
                        }), k.data("ratio") || k.data("ratio", k.height() / k.width());
                    }
                };
                this.attach = function (a) {
                    a.handle().on("mousedown", d);
                }, this.update = function (b, c, d) {
                    var e = b.find(".note-control-selection");
                    if (c.image) {
                        var f = a(c.image), g = d ? f.offset() : f.position(), h = {
                            w: f.outerWidth(!0),
                            h: f.outerHeight(!0)
                        };
                        e.css({
                            display: "block",
                            left: g.left,
                            top: g.top,
                            width: h.w,
                            height: h.h
                        }).data("target", c.image);
                        var i = h.w + "x" + h.h;
                        e.find(".note-control-selection-info").text(i);
                    } else e.hide();
                }, this.hide = function (a) {
                    a.children().hide();
                };
            }, F = function F(b) {
                var c = a(window), d = a("html, body");
                this.toggle = function (a) {
                    var e = a.editor(), f = a.toolbar(), g = a.editable(), h = a.codable(), i = function i(a) {
                        g.css("height", a.h), h.css("height", a.h), h.data("cmeditor") && h.data("cmeditor").setsize(null, a.h);
                    };
                    e.toggleClass("fullscreen");
                    var j = e.hasClass("fullscreen");
                    j ? (g.data("orgheight", g.css("height")), c.on("resize", function () {
                        i({h: c.height() - f.outerHeight()});
                    }).trigger("resize"), d.css("overflow", "hidden")) : (c.off("resize"), i({h: g.data("orgheight")}), d.css("overflow", "visible")), b.invoke("toolbar.updateFullscreen", f, j);
                };
            };
            i.hasCodeMirror && (i.isSupportAmd ? require(["CodeMirror"], function (a) {
                h = a;
            }) : h = window.CodeMirror);
            var G = function G(a) {
                this.sync = function (b) {
                    var c = a.invoke("codeview.isActivated", b);
                    c && i.hasCodeMirror && b.codable().data("cmEditor").save();
                }, this.isActivated = function (a) {
                    var b = a.editor();
                    return b.hasClass("codeview");
                }, this.toggle = function (a) {
                    this.isActivated(a) ? this.deactivate(a) : this.activate(a);
                }, this.activate = function (b) {
                    var c = b.editor(), d = b.toolbar(), e = b.editable(), f = b.codable(), g = b.popover(), j = b.handle(), k = c.data("options");
                    if (f.val(n.html(e, k.prettifyHtml)), f.height(e.height()), a.invoke("toolbar.updateCodeview", d, !0), a.invoke("popover.hide", g), a.invoke("handle.hide", j), c.addClass("codeview"), f.focus(), i.hasCodeMirror) {
                        var l = h.fromTextArea(f[0], k.codemirror);
                        if (k.codemirror.tern) {
                            var m = new h.TernServer(k.codemirror.tern);
                            l.ternServer = m, l.on("cursorActivity", function (a) {
                                m.updateArgHints(a);
                            });
                        }
                        l.setSize(null, e.outerHeight()), f.data("cmEditor", l);
                    }
                }, this.deactivate = function (b) {
                    var c = b.holder(), d = b.editor(), e = b.toolbar(), f = b.editable(), g = b.codable(), h = d.data("options");
                    if (i.hasCodeMirror) {
                        var j = g.data("cmEditor");
                        g.val(j.getValue()), j.toTextArea();
                    }
                    var k = n.value(g, h.prettifyHtml) || n.emptyPara, l = f.html() !== k;
                    f.html(k), f.height(h.height ? g.height() : "auto"), d.removeClass("codeview"), l && a.bindCustomEvent(c, f.data("callbacks"), "change")(f.html(), f), f.focus(), a.invoke("toolbar.updateCodeview", e, !1);
                };
            }, H = function H(b) {
                var c = a(document);
                this.attach = function (a, b) {
                    b.airMode || b.disableDragAndDrop ? c.on("drop", function (a) {
                        a.preventDefault();
                    }) : this.attachDragAndDropEvent(a, b);
                }, this.attachDragAndDropEvent = function (d, e) {
                    var f = a(), g = d.editor(), h = d.dropzone(), i = h.find(".note-dropzone-message");
                    c.on("dragenter", function (a) {
                        var c = b.invoke("codeview.isActivated", d), j = g.width() > 0 && g.height() > 0;
                        c || f.length || !j || (g.addClass("dragover"), h.width(g.width()), h.height(g.height()), i.text(e.langInfo.image.dragImageHere)), f = f.add(a.target);
                    }).on("dragleave", function (a) {
                        f = f.not(a.target), f.length || g.removeClass("dragover");
                    }).on("drop", function () {
                        f = a(), g.removeClass("dragover");
                    }), h.on("dragenter", function () {
                        h.addClass("hover"), i.text(e.langInfo.image.dropImage);
                    }).on("dragleave", function () {
                        h.removeClass("hover"), i.text(e.langInfo.image.dragImageHere);
                    }), h.on("drop", function (c) {
                        var d = c.originalEvent.dataTransfer, e = n.makeLayoutInfo(c.currentTarget || c.target);
                        if (d && d.files && d.files.length)c.preventDefault(), e.editable().focus(), b.insertImages(e, d.files); else for (var f = function f() {
                            e.holder().summernote("insertNode", this);
                        }, g = 0, h = d.types.length; h > g; g++) {
                            var i = d.types[g], j = d.getData(i);
                            i.toLowerCase().indexOf("text") > -1 ? e.holder().summernote("pasteHTML", j) : a(j).each(f);
                        }
                    }).on("dragover", !1);
                };
            }, I = function I(b) {
                var c;
                this.attach = function (f) {
                    i.isMSIE && i.browserVersion > 10 || i.isFF ? (c = a("<div />").attr("contenteditable", !0).css({
                        position: "absolute",
                        left: -1e5,
                        opacity: 0
                    }), f.editable().on("keydown", function (a) {
                        a.ctrlKey && a.keyCode === r.code.V && (b.invoke("saveRange", f.editable()), c.focus(), setTimeout(function () {
                            d(f);
                        }, 0));
                    }), f.editable().before(c)) : f.editable().on("paste", e);
                };
                var d = function d(_d2) {
                    var e = _d2.editable(), f = c[0].firstChild;
                    if (n.isImg(f)) {
                        for (var g = f.src, h = atob(g.split(",")[1]), i = new Uint8Array(h.length), j = 0; j < h.length; j++) {
                            i[j] = h.charCodeAt(j);
                        }
                        var k = new Blob([i], {type: "image/png"});
                        k.name = "clipboard.png", b.invoke("restoreRange", e), b.invoke("focus", e), b.insertImages(_d2, [k]);
                    } else {
                        var l = a("<div />").html(c.html()).html();
                        b.invoke("restoreRange", e), b.invoke("focus", e), l && b.invoke("pasteHTML", e, l);
                    }
                    c.empty();
                }, e = function e(a) {
                    var c = a.originalEvent.clipboardData, d = n.makeLayoutInfo(a.currentTarget || a.target), e = d.editable();
                    if (c && c.items && c.items.length) {
                        var f = k.head(c.items);
                        "file" === f.kind && -1 !== f.type.indexOf("image/") && b.insertImages(d, [f.getAsFile()]), b.invoke("editor.afterCommand", e);
                    }
                };
            }, J = function J(b) {
                var c = function c(a, b) {
                    a.toggleClass("disabled", !b), a.attr("disabled", !b);
                }, d = function d(a, b) {
                    a.on("keypress", function (a) {
                        a.keyCode === r.code.ENTER && b.trigger("click");
                    });
                };
                this.showLinkDialog = function (b, e, f) {
                    return a.Deferred(function (a) {
                        var b = e.find(".note-link-dialog"), g = b.find(".note-link-text"), h = b.find(".note-link-url"), i = b.find(".note-link-btn"), j = b.find("input[type=checkbox]");
                        b.one("shown.bs.modal", function () {
                            g.val(f.text), g.on("input", function () {
                                c(i, g.val() && h.val()), f.text = g.val();
                            }), f.url || (f.url = f.text || "http://", c(i, f.text)), h.on("input", function () {
                                c(i, g.val() && h.val()), f.text || g.val(h.val());
                            }).val(f.url).trigger("focus").trigger("select"), d(h, i), d(g, i), j.prop("checked", f.isNewWindow), i.one("click", function (c) {
                                c.preventDefault(), a.resolve({
                                    range: f.range,
                                    url: h.val(),
                                    text: g.val(),
                                    isNewWindow: j.is(":checked")
                                }), b.modal("hide");
                            });
                        }).one("hidden.bs.modal", function () {
                            g.off("input keypress"), h.off("input keypress"), i.off("click"), "pending" === a.state() && a.reject();
                        }).modal("show");
                    }).promise();
                }, this.show = function (a) {
                    var c = a.editor(), d = a.dialog(), e = a.editable(), f = a.popover(), g = b.invoke("editor.getLinkInfo", e), h = c.data("options");
                    b.invoke("editor.saveRange", e), this.showLinkDialog(e, d, g).then(function (a) {
                        b.invoke("editor.restoreRange", e), b.invoke("editor.createLink", e, a, h), b.invoke("popover.hide", f);
                    }).fail(function () {
                        b.invoke("editor.restoreRange", e);
                    });
                };
            }, K = function K(b) {
                var c = function c(a, b) {
                    a.toggleClass("disabled", !b), a.attr("disabled", !b);
                }, d = function d(a, b) {
                    a.on("keypress", function (a) {
                        a.keyCode === r.code.ENTER && b.trigger("click");
                    });
                };
                this.show = function (a) {
                    var c = a.dialog(), d = a.editable();
                    b.invoke("editor.saveRange", d), this.showImageDialog(d, c).then(function (c) {
                        b.invoke("editor.restoreRange", d), "string" == typeof c ? b.invoke("editor.insertImage", d, c) : b.insertImages(a, c);
                    }).fail(function () {
                        b.invoke("editor.restoreRange", d);
                    });
                }, this.showImageDialog = function (b, e) {
                    return a.Deferred(function (a) {
                        var b = e.find(".note-image-dialog"), f = e.find(".note-image-input"), g = e.find(".note-image-url"), h = e.find(".note-image-btn");
                        b.one("shown.bs.modal", function () {
                            f.replaceWith(f.clone().on("change", function () {
                                a.resolve(this.files || this.value), b.modal("hide");
                            }).val("")), h.click(function (c) {
                                c.preventDefault(), a.resolve(g.val()), b.modal("hide");
                            }), g.on("keyup paste", function (a) {
                                var b;
                                b = "paste" === a.type ? a.originalEvent.clipboardData.getData("text") : g.val(), c(h, b);
                            }).val("").trigger("focus"), d(g, h);
                        }).one("hidden.bs.modal", function () {
                            f.off("change"), g.off("keyup paste keypress"), h.off("click"), "pending" === a.state() && a.reject();
                        }).modal("show");
                    });
                };
            }, L = function L(b) {
                this.showHelpDialog = function (b, c) {
                    return a.Deferred(function (a) {
                        var b = c.find(".note-help-dialog");
                        b.one("hidden.bs.modal", function () {
                            a.resolve();
                        }).modal("show");
                    }).promise();
                }, this.show = function (a) {
                    var c = a.dialog(), d = a.editable();
                    b.invoke("editor.saveRange", d, !0), this.showHelpDialog(d, c).then(function () {
                        b.invoke("editor.restoreRange", d);
                    });
                };
            }, M = function M() {
                var b = this, c = this.modules = {
                    editor: new y(this),
                    toolbar: new A(this),
                    statusbar: new C(this),
                    popover: new D(this),
                    handle: new E(this),
                    fullscreen: new F(this),
                    codeview: new G(this),
                    dragAndDrop: new H(this),
                    clipboard: new I(this),
                    linkDialog: new J(this),
                    imageDialog: new K(this),
                    helpDialog: new L(this)
                };
                this.invoke = function () {
                    var a = k.head(k.from(arguments)), b = k.tail(k.from(arguments)), c = a.split("."), d = c.length > 1, e = d && k.head(c), f = d ? k.last(c) : k.head(c), g = this.getModule(e), h = g[f];
                    return h && h.apply(g, b);
                }, this.getModule = function (a) {
                    return this.modules[a] || this.modules.editor;
                };
                var d = this.bindCustomEvent = function (a, b, c) {
                    return function () {
                        var d = b[j.namespaceToCamel(c, "on")];
                        return d && d.apply(a[0], arguments), a.trigger("summernote." + c, arguments);
                    };
                };
                this.insertImages = function (b, e) {
                    var f = b.editor(), g = b.editable(), h = b.holder(), i = g.data("callbacks"), j = f.data("options");
                    i.onImageUpload ? d(h, i, "image.upload")(e) : a.each(e, function (a, b) {
                        var e = b.name;
                        j.maximumImageFileSize && j.maximumImageFileSize < b.size ? d(h, i, "image.upload.error")(j.langInfo.image.maximumFileSizeError) : q.readFileAsDataURL(b).then(function (a) {
                            c.editor.insertImage(g, a, e);
                        }).fail(function () {
                            d(h, i, "image.upload.error")(j.langInfo.image.maximumFileSizeError);
                        });
                    });
                };
                var e = {
                    showLinkDialog: function showLinkDialog(a) {
                        c.linkDialog.show(a);
                    }, showImageDialog: function showImageDialog(a) {
                        c.imageDialog.show(a);
                    }, showHelpDialog: function showHelpDialog(a) {
                        c.helpDialog.show(a);
                    }, fullscreen: function fullscreen(a) {
                        c.fullscreen.toggle(a);
                    }, codeview: function codeview(a) {
                        c.codeview.toggle(a);
                    }
                }, f = function f(a) {
                    n.isImg(a.target) && a.preventDefault();
                }, g = function g(a) {
                    var b = n.makeLayoutInfo(a.currentTarget || a.target);
                    c.editor.removeBogus(b.editable()), h(a);
                };
                this.updateStyleInfo = function (a, b) {
                    if (a) {
                        var d = b.editor().data("options").airMode;
                        d || c.toolbar.update(b.toolbar(), a), c.popover.update(b.popover(), a, d), c.handle.update(b.handle(), a, d);
                    }
                };
                var h = function h(a) {
                    var d = a.target;
                    setTimeout(function () {
                        var a = n.makeLayoutInfo(d), e = c.editor.currentStyle(d);
                        b.updateStyleInfo(e, a);
                    }, 0);
                }, l = function l(a) {
                    var b = n.makeLayoutInfo(a.currentTarget || a.target);
                    c.popover.hide(b.popover()), c.handle.hide(b.handle());
                }, m = function m(b) {
                    var c = a(b.target).closest("[data-event]");
                    c.length && b.preventDefault();
                }, o = function o(b) {
                    var d = a(b.target).closest("[data-event]");
                    if (d.length) {
                        var f, g = d.attr("data-event"), i = d.attr("data-value"), j = d.attr("data-hide"), l = n.makeLayoutInfo(b.target);
                        if (-1 !== a.inArray(g, ["resize", "floatMe", "removeMedia", "imageShape"])) {
                            var m = l.handle().find(".note-control-selection");
                            f = a(m.data("target"));
                        }
                        if (j && d.parents(".popover").hide(), a.isFunction(a.summernote.pluginEvents[g]))a.summernote.pluginEvents[g](b, c.editor, l, i); else if (c.editor[g]) {
                            var o = l.editable();
                            o.focus(), c.editor[g](o, i, f), b.preventDefault();
                        } else e[g] && (e[g].call(this, l), b.preventDefault());
                        if (-1 !== a.inArray(g, ["backColor", "foreColor"])) {
                            var p = l.editor().data("options", p), q = p.airMode ? c.popover : c.toolbar;
                            q.updateRecentColor(k.head(d), g, i);
                        }
                        h(b);
                    }
                }, p = 18, t = function t(b, c) {
                    var d, e = a(b.target.parentNode), f = e.next(), g = e.find(".note-dimension-picker-mousecatcher"), h = e.find(".note-dimension-picker-highlighted"), i = e.find(".note-dimension-picker-unhighlighted");
                    if (void 0 === b.offsetX) {
                        var j = a(b.target).offset();
                        d = {x: b.pageX - j.left, y: b.pageY - j.top};
                    } else d = {x: b.offsetX, y: b.offsetY};
                    var k = {c: Math.ceil(d.x / p) || 1, r: Math.ceil(d.y / p) || 1};
                    h.css({
                        width: k.c + "em",
                        height: k.r + "em"
                    }), g.attr("data-value", k.c + "x" + k.r), 3 < k.c && k.c < c.insertTableMaxSize.col && i.css({width: k.c + 1 + "em"}), 3 < k.r && k.r < c.insertTableMaxSize.row && i.css({height: k.r + 1 + "em"}), f.html(k.c + " x " + k.r);
                };
                this.bindKeyMap = function (b, d) {
                    var f = b.editor(), g = b.editable();
                    g.on("keydown", function (h) {
                        var i = [];
                        h.metaKey && i.push("CMD"), h.ctrlKey && !h.altKey && i.push("CTRL"), h.shiftKey && i.push("SHIFT");
                        var j = r.nameFromCode[h.keyCode];
                        j && i.push(j);
                        var k, l = i.join("+"), m = d[l];
                        if (m) {
                            if (k = a.summernote.pluginEvents[l], a.isFunction(k) && k(h, c.editor, b))return !1;
                            k = a.summernote.pluginEvents[m], a.isFunction(k) ? k(h, c.editor, b) : c.editor[m] ? (c.editor[m](g, f.data("options")), h.preventDefault()) : e[m] && (e[m].call(this, b), h.preventDefault());
                        } else r.isEdit(h.keyCode) && c.editor.afterCommand(g);
                    });
                }, this.attach = function (a, b) {
                    b.shortcuts && this.bindKeyMap(a, b.keyMap[i.isMac ? "mac" : "pc"]), a.editable().on("mousedown", f), a.editable().on("keyup mouseup", g), a.editable().on("scroll", l), c.clipboard.attach(a, b), c.handle.attach(a, b), a.popover().on("click", o), a.popover().on("mousedown", m), c.dragAndDrop.attach(a, b), b.airMode || (a.toolbar().on("click", o), a.toolbar().on("mousedown", m), c.statusbar.attach(a, b));
                    var d = b.airMode ? a.popover() : a.toolbar(), e = d.find(".note-dimension-picker-mousecatcher");
                    e.css({
                        width: b.insertTableMaxSize.col + "em",
                        height: b.insertTableMaxSize.row + "em"
                    }).on("mousemove", function (a) {
                        t(a, b);
                    }), a.editor().data("options", b), i.isMSIE || setTimeout(function () {
                        document.execCommand("styleWithCSS", 0, b.styleWithSpan);
                    }, 0);
                    var h = new s(a.editable());
                    a.editable().data("NoteHistory", h), a.editable().data("callbacks", {
                        onInit: b.onInit,
                        onFocus: b.onFocus,
                        onBlur: b.onBlur,
                        onKeydown: b.onKeydown,
                        onKeyup: b.onKeyup,
                        onMousedown: b.onMousedown,
                        onEnter: b.onEnter,
                        onPaste: b.onPaste,
                        onBeforeCommand: b.onBeforeCommand,
                        onChange: b.onChange,
                        onImageUpload: b.onImageUpload,
                        onImageUploadError: b.onImageUploadError,
                        onMediaDelete: b.onMediaDelete,
                        onToolbarClick: b.onToolbarClick
                    });
                    var j = c.editor.styleFromNode(a.editable());
                    this.updateStyleInfo(j, a);
                }, this.attachCustomEvent = function (b, c) {
                    var e = b.holder(), f = b.editable(), g = f.data("callbacks");
                    f.focus(d(e, g, "focus")), f.blur(d(e, g, "blur")), f.keydown(function (a) {
                        a.keyCode === r.code.ENTER && d(e, g, "enter").call(this, a), d(e, g, "keydown").call(this, a);
                    }), f.keyup(d(e, g, "keyup")), f.on("mousedown", d(e, g, "mousedown")), f.on("mouseup", d(e, g, "mouseup")), f.on("scroll", d(e, g, "scroll")), f.on("paste", d(e, g, "paste"));
                    var h = i.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
                    f.on(h, function () {
                        d(e, g, "change")(f.html(), f);
                    }), c.airMode || (b.toolbar().click(d(e, g, "toolbar.click")), b.popover().click(d(e, g, "popover.click"))), n.isTextarea(k.head(e)) && e.closest("form").submit(function (a) {
                        b.holder().val(b.holder().code()), d(e, g, "submit").call(this, a, e.code());
                    }), n.isTextarea(k.head(e)) && c.textareaAutoSync && e.on("summernote.change", function () {
                        b.holder().val(b.holder().code());
                    }), d(e, g, "init")(b);
                    for (var j = 0, l = a.summernote.plugins.length; l > j; j++) {
                        a.isFunction(a.summernote.plugins[j].init) && a.summernote.plugins[j].init(b);
                    }
                }, this.detach = function (a, b) {
                    a.holder().off(), a.editable().off(), a.popover().off(), a.handle().off(), a.dialog().off(), b.airMode || (a.dropzone().off(), a.toolbar().off(), a.statusbar().off());
                };
            }, N = function N() {
                var b = function b(a, _b7) {
                    var c = _b7.event, d = _b7.value, e = _b7.title, f = _b7.className, g = _b7.dropdown, h = _b7.hide;
                    return (g ? '<div class="btn-group' + (f ? " " + f : "") + '">' : "") + '<button type="button" class="btn btn-default btn-sm' + (!g && f ? " " + f : "") + (g ? " dropdown-toggle" : "") + '"' + (g ? ' data-toggle="dropdown"' : "") + (e ? ' title="' + e + '"' : "") + (c ? ' data-event="' + c + '"' : "") + (d ? " data-value='" + d + "'" : "") + (h ? " data-hide='" + h + "'" : "") + ' tabindex="-1">' + a + (g ? ' <span class="caret"></span>' : "") + "</button>" + (g || "") + (g ? "</div>" : "");
                }, c = function c(a, _c7) {
                    var d = '<i class="' + a + '"></i>';
                    return b(d, _c7);
                }, d = function d(b, c) {
                    var d = a('<div class="' + b + ' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content"></div></div>');
                    return d.find(".popover-content").append(c), d;
                }, e = function e(a, b, c, d) {
                    return '<div class="' + a + ' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">' + (b ? '<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">' + b + "</h4></div>" : "") + '<div class="modal-body">' + c + "</div>" + (d ? '<div class="modal-footer">' + d + "</div>" : "") + "</div></div></div>";
                }, f = function f(a, b, c) {
                    var d = "dropdown-menu" + (b ? " " + b : "");
                    return c = c || "ul", a instanceof Array && (a = a.join("")), "<" + c + ' class="' + d + '">' + a + "</" + c + ">";
                }, g = {
                    picture: function picture(a, b) {
                        return c(b.iconPrefix + b.icons.image.image, {
                            event: "showImageDialog",
                            title: a.image.image,
                            hide: !0
                        });
                    }, link: function link(a, b) {
                        return c(b.iconPrefix + b.icons.link.link, {
                            event: "showLinkDialog",
                            title: a.link.link,
                            hide: !0
                        });
                    }, table: function table(a, b) {
                        var d = ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display"> 1 x 1 </div>'];
                        return c(b.iconPrefix + b.icons.table.table, {
                            title: a.table.table,
                            dropdown: f(d, "note-table")
                        });
                    }, style: function style(a, b) {
                        var d = b.styleTags.reduce(function (b, c) {
                            var d = a.style["p" === c ? "normal" : c];
                            return b + '<li><a data-event="formatBlock" href="#" data-value="' + c + '">' + ("p" === c || "pre" === c ? d : "<" + c + ">" + d + "</" + c + ">") + "</a></li>";
                        }, "");
                        return c(b.iconPrefix + b.icons.style.style, {title: a.style.style, dropdown: f(d)});
                    }, fontname: function fontname(a, c) {
                        var d = [], e = c.fontNames.reduce(function (a, b) {
                            return i.isFontInstalled(b) || k.contains(c.fontNamesIgnoreCheck, b) ? (d.push(b), a + '<li><a data-event="fontName" href="#" data-value="' + b + '" style="font-family:\'' + b + '\'"><i class="' + c.iconPrefix + c.icons.misc.check + '"></i> ' + b + "</a></li>") : a;
                        }, ""), g = i.isFontInstalled(c.defaultFontName), h = g ? c.defaultFontName : d[0], j = '<span class="note-current-fontname">' + h + "</span>";
                        return b(j, {title: a.font.name, className: "note-fontname", dropdown: f(e, "note-check")});
                    }, fontsize: function fontsize(a, c) {
                        var d = c.fontSizes.reduce(function (a, b) {
                            return a + '<li><a data-event="fontSize" href="#" data-value="' + b + '"><i class="' + c.iconPrefix + c.icons.misc.check + '"></i> ' + b + "</a></li>";
                        }, ""), e = '<span class="note-current-fontsize">11</span>';
                        return b(e, {title: a.font.size, className: "note-fontsize", dropdown: f(d, "note-check")});
                    }, color: function color(a, c) {
                        var d = '<i class="' + c.iconPrefix + c.icons.color.recent + '" style="color:black;background-color:yellow;"></i>', e = b(d, {
                            className: "note-recent-color",
                            title: a.color.recent,
                            event: "color",
                            value: '{"backColor":"yellow"}'
                        }), g = ['<li><div class="btn-group">', '<div class="note-palette-title">' + a.color.background + "</div>", '<div class="note-color-reset" data-event="backColor"', ' data-value="inherit" title="' + a.color.transparent + '">' + a.color.setTransparent + "</div>", '<div class="note-color-palette" data-target-event="backColor"></div>', '</div><div class="btn-group">', '<div class="note-palette-title">' + a.color.foreground + "</div>", '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + a.color.reset + '">', a.color.resetToDefault, "</div>", '<div class="note-color-palette" data-target-event="foreColor"></div>', "</div></li>"], h = b("", {
                            title: a.color.more,
                            dropdown: f(g)
                        });
                        return e + h;
                    }, bold: function bold(a, b) {
                        return c(b.iconPrefix + b.icons.font.bold, {event: "bold", title: a.font.bold});
                    }, italic: function italic(a, b) {
                        return c(b.iconPrefix + b.icons.font.italic, {event: "italic", title: a.font.italic});
                    }, underline: function underline(a, b) {
                        return c(b.iconPrefix + b.icons.font.underline, {event: "underline", title: a.font.underline});
                    }, strikethrough: function strikethrough(a, b) {
                        return c(b.iconPrefix + b.icons.font.strikethrough, {
                            event: "strikethrough",
                            title: a.font.strikethrough
                        });
                    }, superscript: function superscript(a, b) {
                        return c(b.iconPrefix + b.icons.font.superscript, {
                            event: "superscript",
                            title: a.font.superscript
                        });
                    }, subscript: function subscript(a, b) {
                        return c(b.iconPrefix + b.icons.font.subscript, {event: "subscript", title: a.font.subscript});
                    }, clear: function clear(a, b) {
                        return c(b.iconPrefix + b.icons.font.clear, {event: "removeFormat", title: a.font.clear});
                    }, ul: function ul(a, b) {
                        return c(b.iconPrefix + b.icons.lists.unordered, {
                            event: "insertUnorderedList",
                            title: a.lists.unordered
                        });
                    }, ol: function ol(a, b) {
                        return c(b.iconPrefix + b.icons.lists.ordered, {
                            event: "insertOrderedList",
                            title: a.lists.ordered
                        });
                    }, paragraph: function paragraph(a, b) {
                        var d = c(b.iconPrefix + b.icons.paragraph.left, {
                            title: a.paragraph.left,
                            event: "justifyLeft"
                        }), e = c(b.iconPrefix + b.icons.paragraph.center, {
                            title: a.paragraph.center,
                            event: "justifyCenter"
                        }), g = c(b.iconPrefix + b.icons.paragraph.right, {
                            title: a.paragraph.right,
                            event: "justifyRight"
                        }), h = c(b.iconPrefix + b.icons.paragraph.justify, {
                            title: a.paragraph.justify,
                            event: "justifyFull"
                        }), i = c(b.iconPrefix + b.icons.paragraph.outdent, {
                            title: a.paragraph.outdent,
                            event: "outdent"
                        }), j = c(b.iconPrefix + b.icons.paragraph.indent, {
                            title: a.paragraph.indent,
                            event: "indent"
                        }), k = ['<div class="note-align btn-group">', d + e + g + h, '</div><div class="note-list btn-group">', j + i, "</div>"];
                        return c(b.iconPrefix + b.icons.paragraph.paragraph, {
                            title: a.paragraph.paragraph,
                            dropdown: f(k, "", "div")
                        });
                    }, height: function height(a, b) {
                        var d = b.lineHeights.reduce(function (a, c) {
                            return a + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(c) + '"><i class="' + b.iconPrefix + b.icons.misc.check + '"></i> ' + c + "</a></li>";
                        }, "");
                        return c(b.iconPrefix + b.icons.font.height, {
                            title: a.font.height,
                            dropdown: f(d, "note-check")
                        });
                    }, help: function help(a, b) {
                        return c(b.iconPrefix + b.icons.options.help, {
                            event: "showHelpDialog",
                            title: a.options.help,
                            hide: !0
                        });
                    }, fullscreen: function fullscreen(a, b) {
                        return c(b.iconPrefix + b.icons.options.fullscreen, {
                            event: "fullscreen",
                            title: a.options.fullscreen
                        });
                    }, codeview: function codeview(a, b) {
                        return c(b.iconPrefix + b.icons.options.codeview, {
                            event: "codeview",
                            title: a.options.codeview
                        });
                    }, undo: function undo(a, b) {
                        return c(b.iconPrefix + b.icons.history.undo, {event: "undo", title: a.history.undo});
                    }, redo: function redo(a, b) {
                        return c(b.iconPrefix + b.icons.history.redo, {event: "redo", title: a.history.redo});
                    }, hr: function hr(a, b) {
                        return c(b.iconPrefix + b.icons.hr.insert, {event: "insertHorizontalRule", title: a.hr.insert});
                    }
                }, h = function h(e, f) {
                    var h = function h() {
                        var a = c(f.iconPrefix + f.icons.link.edit, {
                            title: e.link.edit,
                            event: "showLinkDialog",
                            hide: !0
                        }), b = c(f.iconPrefix + f.icons.link.unlink, {
                            title: e.link.unlink,
                            event: "unlink"
                        }), g = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">' + a + b + "</div>";
                        return d("note-link-popover", g);
                    }, i = function i() {
                        var a = b('<span class="note-fontsize-10">100%</span>', {
                            title: e.image.resizeFull,
                            event: "resize",
                            value: "1"
                        }), g = b('<span class="note-fontsize-10">50%</span>', {
                            title: e.image.resizeHalf,
                            event: "resize",
                            value: "0.5"
                        }), h = b('<span class="note-fontsize-10">25%</span>', {
                            title: e.image.resizeQuarter,
                            event: "resize",
                            value: "0.25"
                        }), i = c(f.iconPrefix + f.icons.image.floatLeft, {
                            title: e.image.floatLeft,
                            event: "floatMe",
                            value: "left"
                        }), j = c(f.iconPrefix + f.icons.image.floatRight, {
                            title: e.image.floatRight,
                            event: "floatMe",
                            value: "right"
                        }), k = c(f.iconPrefix + f.icons.image.floatNone, {
                            title: e.image.floatNone,
                            event: "floatMe",
                            value: "none"
                        }), l = c(f.iconPrefix + f.icons.image.shapeRounded, {
                            title: e.image.shapeRounded,
                            event: "imageShape",
                            value: "img-rounded"
                        }), m = c(f.iconPrefix + f.icons.image.shapeCircle, {
                            title: e.image.shapeCircle,
                            event: "imageShape",
                            value: "img-circle"
                        }), n = c(f.iconPrefix + f.icons.image.shapeThumbnail, {
                            title: e.image.shapeThumbnail,
                            event: "imageShape",
                            value: "img-thumbnail"
                        }), o = c(f.iconPrefix + f.icons.image.shapeNone, {
                            title: e.image.shapeNone,
                            event: "imageShape",
                            value: ""
                        }), p = c(f.iconPrefix + f.icons.image.remove, {
                            title: e.image.remove,
                            event: "removeMedia",
                            value: "none"
                        }), q = (f.disableResizeImage ? "" : '<div class="btn-group">' + a + g + h + "</div>") + '<div class="btn-group">' + i + j + k + '</div><br><div class="btn-group">' + l + m + n + o + '</div><div class="btn-group">' + p + "</div>";
                        return d("note-image-popover", q);
                    }, j = function j() {
                        for (var b = a("<div />"), c = 0, h = f.airPopover.length; h > c; c++) {
                            for (var i = f.airPopover[c], j = a('<div class="note-' + i[0] + ' btn-group">'), k = 0, l = i[1].length; l > k; k++) {
                                var m = a(g[i[1][k]](e, f));
                                m.attr("data-name", i[1][k]), j.append(m);
                            }
                            b.append(j);
                        }
                        return d("note-air-popover", b.children());
                    }, k = a('<div class="note-popover" />');
                    return k.append(h()), k.append(i()), f.airMode && k.append(j()), k;
                }, l = function l(a) {
                    return '<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="' + (a.disableResizeImage ? "note-control-holder" : "note-control-sizing") + ' note-control-se"></div>' + (a.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>') + "</div></div>";
                }, m = function m(a, b) {
                    var c = "note-shortcut-col col-xs-6 note-shortcut-", d = [];
                    for (var e in b) {
                        b.hasOwnProperty(e) && d.push('<div class="' + c + 'key">' + b[e].kbd + '</div><div class="' + c + 'name">' + b[e].text + "</div>");
                    }
                    return '<div class="note-shortcut-row row"><div class="' + c + 'title col-xs-offset-6">' + a + '</div></div><div class="note-shortcut-row row">' + d.join('</div><div class="note-shortcut-row row">') + "</div>";
                }, o = function o(a) {
                    var b = [{kbd: "⌘ + B", text: a.font.bold}, {kbd: "⌘ + I", text: a.font.italic}, {
                        kbd: "⌘ + U",
                        text: a.font.underline
                    }, {kbd: "⌘ + \\", text: a.font.clear}];
                    return m(a.shortcut.textFormatting, b);
                }, p = function p(a) {
                    var b = [{kbd: "⌘ + Z", text: a.history.undo}, {
                        kbd: "⌘ + ⇧ + Z",
                        text: a.history.redo
                    }, {kbd: "⌘ + ]", text: a.paragraph.indent}, {
                        kbd: "⌘ + [",
                        text: a.paragraph.outdent
                    }, {kbd: "⌘ + ENTER", text: a.hr.insert}];
                    return m(a.shortcut.action, b);
                }, q = function q(a) {
                    var b = [{kbd: "⌘ + ⇧ + L", text: a.paragraph.left}, {
                        kbd: "⌘ + ⇧ + E",
                        text: a.paragraph.center
                    }, {kbd: "⌘ + ⇧ + R", text: a.paragraph.right}, {
                        kbd: "⌘ + ⇧ + J",
                        text: a.paragraph.justify
                    }, {kbd: "⌘ + ⇧ + NUM7", text: a.lists.ordered}, {kbd: "⌘ + ⇧ + NUM8", text: a.lists.unordered}];
                    return m(a.shortcut.paragraphFormatting, b);
                }, r = function r(a) {
                    var b = [{kbd: "⌘ + NUM0", text: a.style.normal}, {
                        kbd: "⌘ + NUM1",
                        text: a.style.h1
                    }, {kbd: "⌘ + NUM2", text: a.style.h2}, {kbd: "⌘ + NUM3", text: a.style.h3}, {
                        kbd: "⌘ + NUM4",
                        text: a.style.h4
                    }, {kbd: "⌘ + NUM5", text: a.style.h5}, {kbd: "⌘ + NUM6", text: a.style.h6}];
                    return m(a.shortcut.documentStyle, b);
                }, s = function s(a, b) {
                    var c = b.extraKeys, d = [];
                    for (var e in c) {
                        c.hasOwnProperty(e) && d.push({kbd: e, text: c[e]});
                    }
                    return m(a.shortcut.extraKeys, d);
                }, t = function t(a, b) {
                    var c = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"', d = ["<div " + c + ">" + p(a, b) + "</div><div " + c + ">" + o(a, b) + "</div>", "<div " + c + ">" + r(a, b) + "</div><div " + c + ">" + q(a, b) + "</div>"];
                    return b.extraKeys && d.push("<div " + c + ">" + s(a, b) + "</div>"), '<div class="note-shortcut-row row">' + d.join('</div><div class="note-shortcut-row row">') + "</div>";
                }, u = function u(a) {
                    return a.replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift");
                }, v = {
                    image: function image(a, b) {
                        var c = "";
                        if (b.maximumImageFileSize) {
                            var d = Math.floor(Math.log(b.maximumImageFileSize) / Math.log(1024)), f = 1 * (b.maximumImageFileSize / Math.pow(1024, d)).toFixed(2) + " " + " KMGTP"[d] + "B";
                            c = "<small>" + a.image.maximumFileSize + " : " + f + "</small>";
                        }
                        var g = '<div class="form-group row note-group-select-from-files"><label>' + a.image.selectFromFiles + '</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' + c + '</div><div class="form-group row"><label>' + a.image.url + '</label><input class="note-image-url form-control col-md-12" type="text" /></div>', h = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                        return e("note-image-dialog", a.image.insert, g, h);
                    }, link: function link(a, b) {
                        var c = '<div class="form-group row"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control col-md-12" type="text" /></div><div class="form-group row"><label>' + a.link.url + '</label><input class="note-link-url form-control col-md-12" type="text" value="http://" /></div>' + (b.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + a.link.openInNewWindow + "</label></div>"), d = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + a.link.insert + "</button>";
                        return e("note-link-dialog", a.link.insert, c, d);
                    }, help: function help(a, b) {
                        var c = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + a.shortcut.close + '</a><div class="title">' + a.shortcut.shortcuts + "</div>" + (i.isMac ? t(a, b) : u(t(a, b))) + '<p class="text-center"><a href="//summernote.org/" target="_blank">Summernote 0.6.16</a> · <a href="//github.com/summernote/summernote" target="_blank">Project</a> · <a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a></p>';
                        return e("note-help-dialog", "", c, "");
                    }
                }, w = function w(b, c) {
                    var d = "";
                    return a.each(v, function (a, e) {
                        d += e(b, c);
                    }), '<div class="note-dialog">' + d + "</div>";
                }, x = function x() {
                    return '<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>';
                }, y = function y(a) {
                    return i.isMac && (a = a.replace("CMD", "⌘").replace("SHIFT", "⇧")), a.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]");
                }, z = function z(b, c, d) {
                    var e = j.invertObject(c), f = b.find("button");
                    f.each(function (b, c) {
                        var d = a(c), f = e[d.data("event")];
                        f && d.attr("title", function (a, b) {
                            return b + " (" + y(f) + ")";
                        });
                    }).tooltip({container: "body", trigger: "hover", placement: d || "top"}).on("click", function () {
                        a(this).tooltip("hide");
                    });
                }, A = function A(b, c) {
                    var d = c.colors;
                    b.find(".note-color-palette").each(function () {
                        for (var b = a(this), c = b.attr("data-target-event"), e = [], f = 0, g = d.length; g > f; f++) {
                            for (var h = d[f], i = [], j = 0, k = h.length; k > j; j++) {
                                var l = h[j];
                                i.push(['<button type="button" class="note-color-btn" style="background-color:', l, ';" data-event="', c, '" data-value="', l, '" title="', l, '" data-toggle="button" tabindex="-1"></button>'].join(""));
                            }
                            e.push('<div class="note-color-row">' + i.join("") + "</div>");
                        }
                        b.html(e.join(""));
                    });
                };
                this.createLayoutByAirMode = function (b, c) {
                    var d = c.langInfo, e = c.keyMap[i.isMac ? "mac" : "pc"], f = j.uniqueId();
                    b.addClass("note-air-editor note-editable panel-body"), b.attr({
                        id: "note-editor-" + f,
                        contentEditable: !0
                    });
                    var g = document.body, k = a(h(d, c));
                    k.addClass("note-air-layout"), k.attr("id", "note-popover-" + f), k.appendTo(g), z(k, e), A(k, c);
                    var m = a(l(c));
                    m.addClass("note-air-layout"), m.attr("id", "note-handle-" + f), m.appendTo(g);
                    var n = a(w(d, c));
                    n.addClass("note-air-layout"), n.attr("id", "note-dialog-" + f), n.find("button.close, a.modal-close").click(function () {
                        a(this).closest(".modal").modal("hide");
                    }), n.appendTo(g);
                }, this.createLayoutByFrame = function (b, c) {
                    var d = c.langInfo, e = a('<div class="note-editor panel panel-default" />');
                    c.width && e.width(c.width), c.height > 0 && a('<div class="note-statusbar">' + (c.disableResizeEditor ? "" : x()) + "</div>").prependTo(e);
                    var f = a('<div class="note-editing-area" />'), j = !b.is(":disabled"), k = a('<div class="note-editable panel-body" contentEditable="' + j + '"></div>').prependTo(f);
                    c.height && k.height(c.height), c.direction && k.attr("dir", c.direction);
                    var m = b.attr("placeholder") || c.placeholder;
                    m && k.attr("data-placeholder", m), k.html(n.html(b) || n.emptyPara), a('<textarea class="note-codable"></textarea>').prependTo(f);
                    var o = a(h(d, c)).prependTo(f);
                    A(o, c), z(o, D), a(l(c)).prependTo(f), f.prependTo(e);
                    for (var p = a('<div class="note-toolbar panel-heading" />'), q = 0, r = c.toolbar.length; r > q; q++) {
                        for (var s = c.toolbar[q][0], t = c.toolbar[q][1], u = a('<div class="note-' + s + ' btn-group" />'), v = 0, y = t.length; y > v; v++) {
                            var B = g[t[v]];
                            if (a.isFunction(B)) {
                                var C = a(B(d, c));
                                C.attr("data-name", t[v]), u.append(C);
                            }
                        }
                        p.append(u);
                    }
                    var D = c.keyMap[i.isMac ? "mac" : "pc"];
                    A(p, c), z(p, D, "bottom"), p.prependTo(e), a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(e);
                    var E = c.dialogsInBody ? a(document.body) : e, F = a(w(d, c)).prependTo(E);
                    F.find("button.close, a.modal-close").click(function () {
                        a(this).closest(".modal").modal("hide");
                    }), e.insertAfter(b), b.hide();
                }, this.hasNoteEditor = function (a) {
                    return this.noteEditorFromHolder(a).length > 0;
                }, this.noteEditorFromHolder = function (b) {
                    return b.hasClass("note-air-editor") ? b : b.next().hasClass("note-editor") ? b.next() : a();
                }, this.createLayout = function (a, b) {
                    b.airMode ? this.createLayoutByAirMode(a, b) : this.createLayoutByFrame(a, b);
                }, this.layoutInfoFromHolder = function (a) {
                    var b = this.noteEditorFromHolder(a);
                    if (b.length)return b.data("holder", a), n.buildLayoutInfo(b);
                }, this.removeLayout = function (a, b, c) {
                    c.airMode ? (a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"), b.popover().remove(), b.handle().remove(), b.dialog().remove()) : (a.html(b.editable().html()), c.dialogsInBody && b.dialog().remove(), b.editor().remove(), a.show());
                }, this.getTemplate = function () {
                    return {button: b, iconButton: c, dialog: e};
                }, this.addButtonInfo = function (a, b) {
                    g[a] = b;
                }, this.addDialogInfo = function (a, b) {
                    v[a] = b;
                };
            };
            a.summernote = a.summernote || {}, a.extend(a.summernote, p);
            var O = new N(), P = new M();
            a.extend(a.summernote, {
                renderer: O,
                eventHandler: P,
                core: {agent: i, list: k, dom: n, range: o},
                pluginEvents: {},
                plugins: []
            }), a.summernote.addPlugin = function (b) {
                a.summernote.plugins.push(b), b.buttons && a.each(b.buttons, function (a, b) {
                    O.addButtonInfo(a, b);
                }), b.dialogs && a.each(b.dialogs, function (a, b) {
                    O.addDialogInfo(a, b);
                }), b.events && a.each(b.events, function (b, c) {
                    a.summernote.pluginEvents[b] = c;
                }), b.langs && a.each(b.langs, function (b, c) {
                    a.summernote.lang[b] && a.extend(a.summernote.lang[b], c);
                }), b.options && a.extend(a.summernote.options, b.options);
            }, a.fn.extend({
                summernote: function summernote() {
                    var b = a.type(k.head(arguments)), c = "string" === b, d = "object" === b, e = d ? k.head(arguments) : {};
                    if (e = a.extend({}, a.summernote.options, e), e.icons = a.extend({}, a.summernote.options.icons, e.icons), e.langInfo = a.extend(!0, {}, a.summernote.lang["en-US"], a.summernote.lang[e.lang]), !c && d)for (var f = 0, g = a.summernote.plugins.length; g > f; f++) {
                        var h = a.summernote.plugins[f];
                        e.plugin[h.name] && (a.summernote.plugins[f] = a.extend(!0, h, e.plugin[h.name]));
                    }
                    this.each(function (b, c) {
                        var d = a(c);
                        if (!O.hasNoteEditor(d)) {
                            O.createLayout(d, e);
                            var f = O.layoutInfoFromHolder(d);
                            d.data("layoutInfo", f), P.attach(f, e), P.attachCustomEvent(f, e);
                        }
                    });
                    var i = this.first();
                    if (i.length) {
                        var j = O.layoutInfoFromHolder(i);
                        if (c) {
                            var l = k.head(k.from(arguments)), m = k.tail(k.from(arguments)), n = [l, j.editable()].concat(m);
                            return P.invoke.apply(P, n);
                        }
                        e.focus && j.editable().focus();
                    }
                    return this;
                }, code: function code(b) {
                    if (void 0 === b) {
                        var c = this.first();
                        if (!c.length)return;
                        var d = O.layoutInfoFromHolder(c), e = d && d.editable();
                        if (e && e.length) {
                            var f = P.invoke("codeview.isActivated", d);
                            return P.invoke("codeview.sync", d), f ? d.codable().val() : d.editable().html();
                        }
                        return n.value(c);
                    }
                    return this.each(function (c, d) {
                        var e = O.layoutInfoFromHolder(a(d)), f = e && e.editable();
                        f && f.html(b);
                    }), this;
                }, destroy: function destroy() {
                    return this.each(function (b, c) {
                        var d = a(c);
                        if (O.hasNoteEditor(d)) {
                            var e = O.layoutInfoFromHolder(d), f = e.editor().data("options");
                            P.detach(e, f), O.removeLayout(d, e, f);
                        }
                    }), this;
                }
            });
        });

    }, {}]
}, {}, [1]);

//# sourceMappingURL=orchid.js.map
