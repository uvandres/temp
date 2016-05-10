window.CustomModernizr = function(a, b, c) {
        function d(a) {
            s.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + v.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + w.join(d + " ") + d).split(" "), h(f, b, c))
        }
        var j, k, l, m = "2.6.2",
            n = {},
            o = !0,
            p = b.documentElement,
            q = "modernizr",
            r = b.createElement(q),
            s = r.style,
            t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            u = "Webkit Moz O ms",
            v = u.split(" "),
            w = u.toLowerCase().split(" "),
            x = {},
            y = [],
            z = y.slice,
            A = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !!g
            },
            B = {}.hasOwnProperty;
        l = e(B, "undefined") || e(B.call, "undefined") ? function(a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return B.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = z.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(z.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(z.call(arguments)))
                };
            return d
        }), x.csstransforms = function() {
            return !!i("transform")
        }, x.csstransforms3d = function() {
            var a = !!i("perspective");
            return a && "webkitPerspective" in p.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, x.csstransitions = function() {
            return i("transition")
        };
        for (var C in x) l(x, C) && (k = C.toLowerCase(), n[k] = x[C](), y.push((n[k] ? "" : "no-") + k));
        return n.addTest = function(a, b) {
            if ("object" == typeof a)
                for (var d in a) l(a, d) && n.addTest(d, a[d]);
            else {
                if (a = a.toLowerCase(), n[a] !== c) return n;
                b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
            }
            return n
        }, d(""), r = j = null, n._version = m, n._prefixes = t, n._domPrefixes = w, n._cssomPrefixes = v, n.testProp = function(a) {
            return g([a])
        }, n.testAllProps = i, n.testStyles = A, n.prefixed = function(a, b, c) {
            return b ? i(a, b, c) : i(a, "pfx")
        }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + y.join(" ") : ""), n
    }(this, this.document), window.findAndReplaceDOMText = function() {
        function a(a) {
            return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }

        function b() {
            return c.apply(null, arguments) || d.apply(null, arguments)
        }

        function c(a, c, e, f, g) {
            if (c && !c.nodeType && arguments.length <= 2) return !1;
            var h = "function" == typeof e;
            h && (e = function(a) {
                return function(b, c) {
                    return a(b.text, c.startIndex)
                }
            }(e));
            var i = d(c, {
                find: a,
                wrap: h ? null : e,
                replace: h ? e : "$" + (f || "&"),
                prepMatch: function(a, b) {
                    if (!a[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
                    if (f > 0) {
                        var c = a[f];
                        a.index += a[0].indexOf(c), a[0] = c
                    }
                    return a.endIndex = a.index + a[0].length, a.startIndex = a.index, a.index = b, a
                },
                filterElements: g
            });
            return b.revert = function() {
                return i.revert()
            }, !0
        }

        function d(a, b) {
            return new e(a, b)
        }

        function e(a, b) {
            b.portionMode = b.portionMode || f, this.node = a, this.options = b, this.prepMatch = b.prepMatch || this.prepMatch, this.reverts = [], this.matches = this.search(), this.matches.length && this.processMatches()
        }
        var f = "retain",
            g = "first",
            h = document;
        ({}).toString;
        return b.Finder = e, e.prototype = {
            search: function() {
                var b, c = 0,
                    d = this.options.find,
                    e = this.getAggregateText(),
                    f = [];
                if (d = "string" == typeof d ? RegExp(a(d), "g") : d, d.global)
                    for (; b = d.exec(e);) f.push(this.prepMatch(b, c++));
                else(b = e.match(d)) && f.push(this.prepMatch(b, 0));
                return f
            },
            prepMatch: function(a, b) {
                if (!a[0]) throw new Error("findAndReplaceDOMText cannot handle zero-length matches");
                return a.endIndex = a.index + a[0].length, a.startIndex = a.index, a.index = b, a
            },
            getAggregateText: function() {
                function a(c) {
                    if (3 === c.nodeType) return c.data;
                    if (b && !b(c)) return "";
                    var d = "";
                    if (c = c.firstChild)
                        do d += a(c); while (c = c.nextSibling);
                    return d
                }
                var b = this.options.filterElements;
                return a(this.node)
            },
            processMatches: function() {
                var a, b, c, d = this.matches,
                    e = this.node,
                    f = this.options.filterElements,
                    g = [],
                    h = e,
                    i = d.shift(),
                    j = 0,
                    k = 0,
                    l = 0,
                    m = [e];
                a: for (;;) {
                    if (3 === h.nodeType && (!b && h.length + j >= i.endIndex ? b = {
                            node: h,
                            index: l++,
                            text: h.data.substring(i.startIndex - j, i.endIndex - j),
                            indexInMatch: j - i.startIndex,
                            indexInNode: i.startIndex - j,
                            endIndexInNode: i.endIndex - j,
                            isEnd: !0
                        } : a && g.push({
                            node: h,
                            index: l++,
                            text: h.data,
                            indexInMatch: j - i.startIndex,
                            indexInNode: 0
                        }), !a && h.length + j > i.startIndex && (a = {
                            node: h,
                            index: l++,
                            indexInMatch: 0,
                            indexInNode: i.startIndex - j,
                            endIndexInNode: i.endIndex - j,
                            text: h.data.substring(i.startIndex - j, i.endIndex - j)
                        }), j += h.data.length), c = 1 === h.nodeType && f && !f(h), a && b) {
                        if (h = this.replaceMatch(i, a, g, b), j -= b.node.data.length - b.endIndexInNode, a = null, b = null, g = [], i = d.shift(), l = 0, k++, !i) break
                    } else if (!c && (h.firstChild || h.nextSibling)) {
                        h.firstChild ? (m.push(h), h = h.firstChild) : h = h.nextSibling;
                        continue
                    }
                    for (;;) {
                        if (h.nextSibling) {
                            h = h.nextSibling;
                            break
                        }
                        if (h = m.pop(), h === e) break a
                    }
                }
            },
            revert: function() {
                for (var a = this.reverts.length; a--;) this.reverts[a]();
                this.reverts = []
            },
            prepareReplacementString: function(a, b, c, d) {
                var e = this.options.portionMode;
                return e === g && b.indexInMatch > 0 ? "" : (a = a.replace(/\$(\d+|&|`|')/g, function(a, b) {
                    var d;
                    switch (b) {
                        case "&":
                            d = c[0];
                            break;
                        case "`":
                            d = c.input.substring(0, c.startIndex);
                            break;
                        case "'":
                            d = c.input.substring(c.endIndex);
                            break;
                        default:
                            d = c[+b]
                    }
                    return d
                }), e === g ? a : b.isEnd ? a.substring(b.indexInMatch) : a.substring(b.indexInMatch, b.indexInMatch + b.text.length))
            },
            getPortionReplacementNode: function(a, b, c) {
                var d = this.options.replace || "$&",
                    e = this.options.clss,
                    f = this.options.wrap;
                if (f && f.nodeType) {
                    var g = h.createElement("div");
                    g.innerHTML = f.outerHTML || (new XMLSerializer).serializeToString(f), f = g.firstChild
                }
                if ("function" == typeof d) return d = d(a, b, c), d && d.nodeType ? d : h.createTextNode(String(d));
                var i = "string" == typeof f ? h.createElement(f) : f;
                return e && (i.className = e), d = h.createTextNode(this.prepareReplacementString(d, a, b, c)), d.data && i ? (i.appendChild(d), i) : d
            },
            replaceMatch: function(a, b, c, d) {
                var e, f, g = b.node,
                    i = d.node;
                if (g === i) {
                    var j = g;
                    b.indexInNode > 0 && (e = h.createTextNode(j.data.substring(0, b.indexInNode)), j.parentNode.insertBefore(e, j));
                    var k = this.getPortionReplacementNode(d, a);
                    return j.parentNode.insertBefore(k, j), d.endIndexInNode < j.length && (f = h.createTextNode(j.data.substring(d.endIndexInNode)), j.parentNode.insertBefore(f, j)), j.parentNode.removeChild(j), this.reverts.push(function() {
                        e === k.previousSibling && e.parentNode.removeChild(e), f === k.nextSibling && f.parentNode.removeChild(f), k.parentNode.replaceChild(j, k)
                    }), k
                }
                e = h.createTextNode(g.data.substring(0, b.indexInNode)), f = h.createTextNode(i.data.substring(d.endIndexInNode));
                for (var l = this.getPortionReplacementNode(b, a), m = [], n = 0, o = c.length; o > n; ++n) {
                    var p = c[n],
                        q = this.getPortionReplacementNode(p, a);
                    p.node.parentNode.replaceChild(q, p.node), this.reverts.push(function(a, b) {
                        return function() {
                            b.parentNode.replaceChild(a.node, b)
                        }
                    }(p, q)), m.push(q)
                }
                var r = this.getPortionReplacementNode(d, a);
                return g.parentNode.insertBefore(e, g), g.parentNode.insertBefore(l, g), g.parentNode.removeChild(g), i.parentNode.insertBefore(r, i), i.parentNode.insertBefore(f, i), i.parentNode.removeChild(i), this.reverts.push(function() {
                    e.parentNode.removeChild(e), l.parentNode.replaceChild(g, l), f.parentNode.removeChild(f), r.parentNode.replaceChild(i, r)
                }), r
            }
        }, b
    }(),
    function(a) {
        function b(b, f) {
            if (this.element = b, this.options = a.extend({}, d, f), a(this.element).data("max-height", this.options.maxHeight), a(this.element).data("height-margin", this.options.heightMargin), delete this.options.maxHeight, this.options.embedCSS && !e) {
                var g = ".readmore-js-toggle, .readmore-js-section { " + this.options.sectionCSS + " } .readmore-js-section { overflow: hidden; }";
                ! function(a, b) {
                    var c = a.createElement("style");
                    c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(a.createTextNode(b)), a.getElementsByTagName("head")[0].appendChild(c)
                }(document, g), e = !0
            }
            this._defaults = d, this._name = c, this.init()
        }
        var c = "readmore",
            d = {
                speed: 100,
                maxHeight: 200,
                heightMargin: 16,
                moreLink: '<a href="#">' + window.FlowFlowOpts.expand_text + "</a>",
                lessLink: '<a href="#">' + window.FlowFlowOpts.collapse_text + "</a>",
                embedCSS: !0,
                sectionCSS: "display: block; width: 100%;",
                startOpen: !1,
                expandedClass: "readmore-js-expanded",
                collapsedClass: "readmore-js-collapsed",
                beforeToggle: function() {},
                afterToggle: function() {}
            },
            e = !1;
        b.prototype = {
            init: function() {
                var b = this;
                a(this.element).each(function() {
                    var c = a(this),
                        d = c.css("max-height"),
                        e = d.replace(/[^-\d\.]/g, "") > c.data("max-height") ? d.replace(/[^-\d\.]/g, "") : c.data("max-height"),
                        f = c.data("height-margin");
                    if ("none" != d && c.css("max-height", "none"), b.setBoxHeight(c), c.outerHeight(!0) <= e + f) return !0;
                    c.addClass("readmore-js-section " + b.options.collapsedClass).data("collapsedHeight", e);
                    var g = b.options.startOpen ? b.options.lessLink : b.options.moreLink;
                    c.after(a(g).on("click", function(a) {
                        b.toggleSlider(this, c, a)
                    }).addClass("readmore-js-toggle")), b.options.startOpen || c.css({
                        height: e
                    })
                })
            },
            toggleSlider: function(b, c, d) {
                d.preventDefault();
                var e = this,
                    f = newLink = sectionClass = "",
                    g = !1,
                    h = a(c).data("collapsedHeight");
                a(c).height() <= h ? (f = a(c).data("expandedHeight") + "px", newLink = "lessLink", g = !0, sectionClass = e.options.expandedClass) : (f = h, newLink = "moreLink", sectionClass = e.options.collapsedClass), e.options.beforeToggle(b, c, g), a(c).animate({
                    height: f
                }, {
                    duration: e.options.speed,
                    complete: function() {
                        e.options.afterToggle(b, c, g), a(b).replaceWith(a(e.options[newLink]).on("click", function(a) {
                            e.toggleSlider(this, c, a)
                        }).addClass("readmore-js-toggle")), a(this).removeClass(e.options.collapsedClass + " " + e.options.expandedClass).addClass(sectionClass)
                    }
                })
            },
            setBoxHeight: function(a) {
                var b = a.clone().css({
                        height: "auto",
                        width: a.width(),
                        overflow: "hidden"
                    }).insertAfter(a),
                    c = b.outerHeight(!0);
                b.remove(), a.data("expandedHeight", c)
            },
            resizeBoxes: function() {
                var b = this;
                a(".readmore-js-section").each(function() {
                    var c = a(this);
                    b.setBoxHeight(c), (c.height() > c.data("expandedHeight") || c.hasClass(b.options.expandedClass) && c.height() < c.data("expandedHeight")) && c.css("height", c.data("expandedHeight"))
                })
            },
            destroy: function() {
                var b = this;
                a(this.element).each(function() {
                    var c = a(this);
                    c.removeClass("readmore-js-section " + b.options.collapsedClass + " " + b.options.expandedClass).css({
                        "max-height": "",
                        height: "auto"
                    }).next(".readmore-js-toggle").remove(), c.removeData()
                })
            }
        }, a.fn[c] = function(d) {
            var e = arguments;
            return void 0 === d || "object" == typeof d ? this.each(function() {
                if (a.data(this, "plugin_" + c)) {
                    var e = a.data(this, "plugin_" + c);
                    e.destroy.apply(e)
                }
                a.data(this, "plugin_" + c, new b(this, d))
            }) : "string" == typeof d && "_" !== d[0] && "init" !== d ? this.each(function() {
                var f = a.data(this, "plugin_" + c);
                f instanceof b && "function" == typeof f[d] && f[d].apply(f, Array.prototype.slice.call(e, 1))
            }) : void 0
        }
    }(jQuery),
    function(a) {
        window.Shuffle = a(window.jQuery, window.CustomModernizr)
    }(function(a, b, c) {
        "use strict";

        function d(a) {
            return a ? a.replace(/([A-Z])/g, function(a, b) {
                return "-" + b.toLowerCase()
            }).replace(/^ms-/, "-ms-") : ""
        }

        function e(b, c, d) {
            var e, f, g, h = null,
                i = 0;
            d = d || {};
            var j = function() {
                i = d.leading === !1 ? 0 : a.now(), h = null, g = b.apply(e, f), e = f = null
            };
            return function() {
                var k = a.now();
                i || d.leading !== !1 || (i = k);
                var l = c - (k - i);
                return e = this, f = arguments, 0 >= l || l > c ? (clearTimeout(h), h = null, i = k, g = b.apply(e, f), e = f = null) : h || d.trailing === !1 || (h = setTimeout(j, l)), g
            }
        }

        function f(a, b, c) {
            for (var d = 0, e = a.length; e > d; d++)
                if (b.call(c, a[d], d, a) === {}) return
        }

        function g(b, c, d) {
            return setTimeout(a.proxy(b, c), d)
        }

        function h(a) {
            return Math.max.apply(Math, a)
        }

        function i(a) {
            return Math.min.apply(Math, a)
        }

        function j(b) {
            return a.isNumeric(b) ? b : 0
        }

        function k(a) {
            var b, c, d = a.length;
            if (!d) return a;
            for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
            return a
        }
        if ("object" != typeof b) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
        var l = b.prefixed("transition"),
            m = b.prefixed("transitionDelay"),
            n = b.prefixed("transitionDuration"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[l],
            p = b.prefixed("transform"),
            q = d(p),
            r = b.csstransforms && b.csstransitions,
            s = b.csstransforms3d,
            t = "shuffle",
            u = .3,
            v = "all",
            w = "groups",
            x = 1,
            y = .001,
            z = function(a, b) {
                this.x = j(a), this.y = j(b)
            };
        z.equals = function(a, b) {
            return a.x === b.x && a.y === b.y
        };
        var A = 0,
            B = a(window),
            C = 0,
            D = function(b, c) {
                c = c || {}, a.extend(this, D.options, c, D.settings), this.$el = a(b), this.id = C++, this.element = b, this.unique = "shuffle_" + A++, this._fire(D.EventType.LOADING), this._init(), g(function() {
                    this.initialized = !0, this._fire(D.EventType.DONE)
                }, this, 16)
            };
        return D.EventType = {
            LOADING: "loading",
            DONE: "done",
            LAYOUT: "layout",
            REMOVED: "removed"
        }, D.ClassName = {
            BASE: t,
            SHUFFLE_ITEM: "shuffle-item",
            FILTERED: "filtered",
            CONCEALED: "concealed"
        }, D.options = {
            group: v,
            speed: 250,
            easing: "ease-out",
            itemSelector: "",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimeter: null,
            buffer: 0,
            initialSort: null,
            throttle: e,
            throttleTime: 300,
            sequentialFadeDelay: 150,
            supported: r
        }, D.settings = {
            useSizer: !1,
            itemCss: {
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible"
            },
            revealAppendedDelay: 300,
            lastSort: {},
            lastFilter: v,
            enabled: !0,
            destroyed: !1,
            initialized: !1,
            _animations: [],
            styleQueue: []
        }, D.Point = z, D._getItemTransformString = function(a, b) {
            return s ? "translate3d(" + a.x + "px, " + a.y + "px, 0) scale3d(" + b + ", " + b + ", 1)" : "translate(" + a.x + "px, " + a.y + "px) scale(" + b + ")"
        }, D._getNumberStyle = function(b, c) {
            return D._getFloat(a(b).css(c))
        }, D._getInt = function(a) {
            return j(parseInt(a, 10))
        }, D._getFloat = function(a) {
            return j(parseFloat(a))
        }, D._getOuterWidth = function(b, c) {
            return a(b).outerWidth(!!c)
        }, D._getOuterHeight = function(b, c) {
            return a(b).outerHeight(!!c)
        }, D._skipTransition = function(a, b, c) {
            var d = a.style[n];
            a.style[n] = "0ms", b.call(c);
            var e = a.offsetWidth;
            e = null, a.style[n] = d
        }, D.prototype._init = function() {
            this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(D.ClassName.BASE), this._initItems(), B.on("resize." + t + "." + this.unique, this._getResizeFunction());
            var b = this.$el.css(["position", "overflow"]),
                c = D._getOuterWidth(this.element);
            this._validateStyles(b), this._setColumns(c), this._itemMargin = parseInt(a(this.sizer).css("marginLeft") || 0), this.shuffle(this.group, this.initialSort), this.supported && g(function() {
                this.destroyed || (this._setTransitions(), this.element.style[l] = "height " + this.speed + "ms " + this.easing)
            }, this)
        }, D.prototype._getResizeFunction = function() {
            var b = a.proxy(this._onResize, this);
            return this.throttle ? this.throttle(b, this.throttleTime) : b
        }, D.prototype._getElementOption = function(a) {
            return "string" == typeof a ? this.$el.find(a)[0] || null : a && a.nodeType && 1 === a.nodeType ? a : a && a.jquery ? a[0] : null
        }, D.prototype._validateStyles = function(a) {
            "static" === a.position && (this.element.style.position = "relative"), "hidden" !== a.overflow
        }, D.prototype._filter = function(a, b) {
            a = a || this.lastFilter, b = b || this.$items;
            var c = this._getFilteredSets(a, b);
            return this._toggleFilterClasses(c.filtered, c.concealed), this.lastFilter = a, "string" == typeof a && (this.group = a), c.filtered
        }, D.prototype._getFilteredSets = function(b, c) {
            var d = a(),
                e = a();
            return b === v ? d = c : f(c, function(c) {
                var f = a(c);
                this._doesPassFilter(b, f) ? d = d.add(f) : e = e.add(f)
            }, this), {
                filtered: d,
                concealed: e
            }
        }, D.prototype._doesPassFilter = function(b, c) {
            if (a.isFunction(b)) return b.call(c[0], c, this);
            var d = c.data(w),
                e = this.delimeter && !a.isArray(d) ? d.split(this.delimeter) : d;
            return a.inArray(b, e) > -1
        }, D.prototype._toggleFilterClasses = function(a, b) {
            a.removeClass(D.ClassName.CONCEALED).addClass(D.ClassName.FILTERED), b.removeClass(D.ClassName.FILTERED).addClass(D.ClassName.CONCEALED)
        }, D.prototype._initItems = function(a) {
            a = a || this.$items, a.addClass([D.ClassName.SHUFFLE_ITEM, D.ClassName.FILTERED].join(" ")), a.css(this.itemCss).data("point", new z).data("scale", x)
        }, D.prototype._updateItemCount = function() {
            this.visibleItems = this._getFilteredItems().length
        }, D.prototype._setTransition = function(a) {
            a.style[l] = q + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
        }, D.prototype._setTransitions = function(a) {
            a = a || this.$items, f(a, function(a) {
                this._setTransition(a)
            }, this)
        }, D.prototype._setSequentialDelay = function(a) {
            this.supported && f(a, function(a, b) {
                a.style[m] = "0ms," + (b + 1) * this.sequentialFadeDelay + "ms"
            }, this)
        }, D.prototype._getItems = function() {
            return this.$el.children(this.itemSelector)
        }, D.prototype._getFilteredItems = function() {
            return this.destroyed ? a() : this.$items.filter("." + D.ClassName.FILTERED)
        }, D.prototype._getConcealedItems = function() {
            return this.$items.filter("." + D.ClassName.CONCEALED)
        }, D.prototype._getColumnSize = function(b, c) {
            var d;
            return d = a.isFunction(this.columnWidth) ? this.columnWidth(b) : this.useSizer ? D._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? D._getOuterWidth(this.$items[0], !0) : b, 0 === d && (d = b), d + c
        }, D.prototype._getGutterSize = function(b) {
            var c;
            return c = a.isFunction(this.gutterWidth) ? this.gutterWidth(b) : this.useSizer ? D._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
        }, D.prototype._setColumns = function(a) {
            var b = a || D._getOuterWidth(this.element),
                c = this._getGutterSize(b),
                d = this._getColumnSize(b, c),
                e = (b + c) / d;
            this.cols = Math.max(Math.floor(e), 1), this.containerWidth = b, this.colWidth = d
        }, D.prototype._setContainerSize = function() {
            this.$el.css("height", this._getContainerSize())
        }, D.prototype._getContainerSize = function() {
            return h(this.positions)
        }, D.prototype._fire = function(a, b) {
            this.$el.trigger(a + "." + t, b && b.length ? b : [this])
        }, D.prototype._resetCols = function() {
            var a = this.cols;
            for (this.positions = []; a--;) this.positions.push(0)
        }, D.prototype._layout = function(a, b) {
            f(a, function(a) {
                this._layoutItem(a, !!b)
            }, this), this._processStyleQueue(), this._setContainerSize()
        }, D.prototype._layoutItem = function(b, c) {
            var d = a(b),
                e = d.data(),
                f = (e.point, e.scale, {
                    width: D._getOuterWidth(b, !0),
                    height: D._getOuterHeight(b, !0)
                }),
                g = this._getItemPosition(f);
            e.point = g, e.scale = x, this.styleQueue.push({
                $item: d,
                point: g,
                scale: x,
                opacity: c ? 0 : 1,
                skipTransition: c,
                callfront: function() {
                    c || d.css("visibility", "visible")
                },
                callback: function() {
                    c && d.css("visibility", "hidden")
                }
            })
        }, D.prototype._getItemPosition = function(a) {
            for (var b = this._getColumnSpan(a.width, this.colWidth, this.cols), c = this._getColumnSet(b, this.cols), d = this._getShortColumn(c, this.buffer), e = Math.round((this.containerWidth - (a.width * this.cols + this._itemMargin * (this.cols - 1))) / 2), f = new z(Math.round(this.colWidth * d + (e > 0 ? e : 0)), Math.round(c[d])), g = c[d] + a.height, h = this.cols + 1 - c.length, i = 0; h > i; i++) this.positions[d + i] = g;
            return f
        }, D.prototype._getColumnSpan = function(a, b, c) {
            var d = a / b;
            return Math.abs(Math.round(d) - d) < u && (d = Math.round(d)), Math.min(Math.ceil(d), c)
        }, D.prototype._getColumnSet = function(a, b) {
            if (1 === a) return this.positions;
            for (var c = b + 1 - a, d = [], e = 0; c > e; e++) d[e] = h(this.positions.slice(e, e + a));
            return d
        }, D.prototype._getShortColumn = function(a, b) {
            for (var c = i(a), d = 0, e = a.length; e > d; d++)
                if (a[d] >= c - b && a[d] <= c + b) return d;
            return 0
        }, D.prototype._shrink = function(b) {
            var c = b || this._getConcealedItems();
            f(c, function(b) {
                var c = a(b),
                    d = c.data();
                d.scale !== y && (d.scale = y, this.styleQueue.push({
                    $item: c,
                    point: d.point,
                    scale: y,
                    opacity: 0,
                    callback: function() {
                        c.css("visibility", "hidden")
                    }
                }))
            }, this)
        }, D.prototype._onResize = function() {
            if (this.enabled && !this.destroyed && !this.isTransitioning) {
                var a = D._getOuterWidth(this.element);
                a !== this.containerWidth && this.update()
            }
        }, D.prototype._getStylesForTransition = function(a) {
            var b = {
                opacity: a.opacity
            };
            return this.supported ? b[p] = D._getItemTransformString(a.point, a.scale) : (b.left = a.point.x, b.top = a.point.y), b
        }, D.prototype._transition = function(b) {
            var c = this._getStylesForTransition(b);
            b.$item.data("keep-pos") ? (b.$item.removeData("keep-pos"), g(function() {
                this._startItemAnimation(b.$item, c, b.callfront || a.noop, b.callback || a.noop)
            }, this, 1e3)) : this._startItemAnimation(b.$item, c, b.callfront || a.noop, b.callback || a.noop)
        }, D.prototype._startItemAnimation = function(b, c, d, e) {
            function f(b) {
                b.target === b.currentTarget && (a(b.target).off(o, f), e())
            }
            if (d(), !this.initialized) return b.css(c), void e();
            if (this.supported) b.css(c), b.on(o, f);
            else {
                var g = b.stop(!0).animate(c, this.speed, "swing", e);
                this._animations.push(g.promise())
            }
        }, D.prototype._processStyleQueue = function(b) {
            var c = a();
            f(this.styleQueue, function(a) {
                a.skipTransition ? this._styleImmediately(a) : (c = c.add(a.$item), this._transition(a))
            }, this), c.length > 0 && this.initialized ? (this.isTransitioning = !0, this.supported ? (this._whenCollectionDone(c, o, this._movementFinished), this.isTransitioning = !1) : (this._whenAnimationsDone(this._movementFinished), this.isTransitioning = !1)) : b || g(this._layoutEnd, this), this.styleQueue.length = 0
        }, D.prototype._styleImmediately = function(a) {
            D._skipTransition(a.$item[0], function() {
                a.$item.css(this._getStylesForTransition(a))
            }, this)
        }, D.prototype._movementFinished = function() {
            this._layoutEnd()
        }, D.prototype._layoutEnd = function() {
            this.destroyed || this._fire(D.EventType.LAYOUT)
        }, D.prototype._addItems = function(a, b, c) {
            this._initItems(a), this._setTransitions(a), this.$items = this._getItems(), this._shrink(a), f(this.styleQueue, function(a) {
                a.skipTransition = !0
            }), this._processStyleQueue(!0), b ? this._addItemsToEnd(a, c) : this.shuffle(this.lastFilter)
        }, D.prototype._addItemsToEnd = function(a, b) {
            var c = this._filter(null, a),
                d = c.get();
            this._updateItemCount(), this._layout(d, !0), b && this.supported && this._setSequentialDelay(d), this._revealAppended(d)
        }, D.prototype._revealAppended = function(b) {
            g(function() {
                f(b, function(b) {
                    var c = a(b);
                    this._transition({
                        $item: c,
                        opacity: 1,
                        point: c.data("point"),
                        scale: x
                    })
                }, this), this._whenCollectionDone(a(b), o, function() {
                    a(b).css(m, "0ms"), this._movementFinished()
                })
            }, this, this.revealAppendedDelay)
        }, D.prototype._whenCollectionDone = function(b, c, d) {
            function e(b) {
                b.target === b.currentTarget && (a(b.target).off(c, e), f++, f === g && d.call(h))
            }
            var f = 0,
                g = b.length,
                h = this;
            b.on(c, e)
        }, D.prototype._whenAnimationsDone = function(b) {
            a.when.apply(null, this._animations).always(a.proxy(function() {
                this._animations.length = 0, b.call(this)
            }, this))
        }, D.prototype.shuffle = function(a, b) {
            this.enabled && !this.isTransitioning && (a || (a = v), this._filter(a), this._updateItemCount(), this._shrink(), this.sort(b))
        }, D.prototype.sort = function(a) {
            if (this.enabled && !this.isTransitioning) {
                this._resetCols();
                var b = a || this.lastSort,
                    c = this._getFilteredItems().sorted(b);
                this._layout(c), this.lastSort = b
            }
        }, D.prototype.update = function(a) {
            this.enabled && !this.isTransitioning && (a || this._setColumns(), this.sort())
        }, D.prototype.layout = function() {
            this.destroyed || this.update(!0)
        }, D.prototype.appended = function(a, b, c) {
            this._addItems(a, !0, !0)
        }, D.prototype.disable = function() {
            this.enabled = !1
        }, D.prototype.enable = function(a) {
            this.enabled = !0, a !== !1 && this.update()
        }, D.prototype.remove = function(b) {
            function c() {
                b.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(D.EventType.REMOVED, [b, this]), b = null
            }
            b.length && b.jquery && (this._toggleFilterClasses(a(), b), this._shrink(b), this.sort(), this.$el.one(D.EventType.LAYOUT + "." + t, a.proxy(c, this)))
        }, D.prototype.destroy = function() {
            B.off("." + this.unique), this.$el.removeClass(t).removeAttr("style").removeData(t), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([D.ClassName.CONCEALED, D.ClassName.FILTERED, D.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this.destroyed = !0
        }, a.fn.shuffle = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    e = d.data(t);
                e ? "string" == typeof b && e[b] && e[b].apply(e, c) : (e = new D(this, b), d.data(t, e))
            })
        }, a.fn.sorted = function(b) {
            var d = a.extend({}, a.fn.sorted.defaults, b),
                e = this.get(),
                f = !1;
            return e.length ? d.randomize ? k(e) : (a.isFunction(d.by) && e.sort(function(b, e) {
                if (f) return 0;
                var g = d.by(a(b)),
                    h = d.by(a(e));
                return g === c && h === c ? (f = !0, 0) : h > g || "sortFirst" === g || "sortLast" === h ? -1 : g > h || "sortLast" === g || "sortFirst" === h ? 1 : 0
            }), f ? this.get() : (d.reverse && e.reverse(), e)) : []
        }, a.fn.sorted.defaults = {
            reverse: !1,
            by: null,
            randomize: !1
        }, D
    }),
    function(a, b) {
        var c, d = a.jQuery || a.Cowboy || (a.Cowboy = {});
        d.throttle = c = function(a, c, e, f) {
            function g() {
                function d() {
                    i = +new Date, e.apply(j, l)
                }

                function g() {
                    h = b
                }
                var j = this,
                    k = +new Date - i,
                    l = arguments;
                f && !h && d(), h && clearTimeout(h), f === b && k > a ? d() : c !== !0 && (h = setTimeout(f ? g : d, f === b ? a - k : a))
            }
            var h, i = 0;
            return "boolean" != typeof c && (f = e, e = c, c = b), d.guid && (g.guid = e.guid = e.guid || d.guid++), g
        }, d.debounce = function(a, d, e) {
            return e === b ? c(a, d, !1) : c(a, e, d !== !1)
        }
    }(this),
    function(a) {
        "use strict";
        var b = null,
            c = a(window),
            d = function(b) {
                var c = this;
                if (a.extend(c, d.options, b, d.settings), !a.isFunction(c.enter)) throw new TypeError("Viewport.add :: No `enter` function provided in Viewport options.");
                "string" == typeof c.threshold && c.threshold.indexOf("%") > -1 ? (c.isThresholdPercentage = !0, c.threshold = parseFloat(c.threshold) / 100) : c.threshold < 1 && c.threshold > 0 && (c.isThresholdPercentage = !0), c.hasLeaveCallback = a.isFunction(c.leave), c.$element = a(c.element), c.update()
            };
        d.prototype.update = function() {
            var a = this;
            a.offset = a.$element.offset(), a.height = a.$element.height(), a.$element.data("height", a.height), a.width = a.$element.width(), a.$element.data("width", a.width)
        }, d.options = {
            threshold: 200,
            delay: 0
        }, d.settings = {
            triggered: !1,
            isThresholdPercentage: !1
        };
        var e = function() {
            this.init()
        };
        e.prototype = {
            init: function() {
                var a = this;
                a.list = [], a.lastScrollY = 0, a.windowHeight = c.height(), a.windowWidth = c.width(), a.throttleTime = 100, a.onResize(), a.bindEvents(), a.willProcessNextFrame = !0, requestAnimationFrame(function() {
                    a.setScrollTop(), a.process(), a.willProcessNextFrame = !1
                })
            },
            bindEvents: function() {
                var b, d = this;
                b = function() {
                    setTimeout(function() {
                        d.refresh()
                    }, 0)
                }, c.on("resize.viewport", a.proxy(d.onResize, d)), c.on("scroll.viewport", a.throttle(d.throttleTime, a.proxy(d.onScroll, d))), d.hasActiveHandlers = !0
            },
            unbindEvents: function() {
                c.off(".viewport"), this.hasActiveHandlers = !1
            },
            maybeUnbindEvents: function() {
                var a = this;
                a.list.length || a.unbindEvents()
            },
            add: function(a) {
                var b = this;
                b.list.push(a), b.hasActiveHandlers || b.bindEvents(), b.willProcessNextFrame || (b.willProcessNextFrame = !0, requestAnimationFrame(function() {
                    b.willProcessNextFrame = !1, b.process()
                }))
            },
            saveDimensions: function() {
                var b = this;
                a.each(b.list, function(a, b) {
                    b.update()
                }), b.windowHeight = c.height(), b.windowWidth = c.width()
            },
            onScroll: function() {
                var a = this;
                a.list.length && (a.setScrollTop(), a.process())
            },
            onResize: function() {
                this.refresh()
            },
            refresh: function() {
                this.list.length && this.saveDimensions()
            },
            isInViewport: function(a) {
                var b, c = this,
                    d = a.offset,
                    e = a.threshold,
                    f = e,
                    g = c.lastScrollY;
                return a.isThresholdPercentage && (e = 0), b = c.isTopInView(g, c.windowHeight, d.top, a.height, e), b && a.isThresholdPercentage && (b = c.isTopPastPercent(g, c.windowHeight, d.top, a.height, f)), b
            },
            isTopInView: function(a, b, c, d, e) {
                var f = a + b;
                return c + e >= a && f > c + e
            },
            isTopPastPercent: function(a, b, c, d, e) {
                var f = a + b,
                    g = f - c,
                    h = g / b;
                return h >= e
            },
            isOutOfViewport: function(a, b) {
                var c, d = this,
                    e = a.offset,
                    f = d.lastScrollY;
                return "bottom" === b && (c = !d.isBottomInView(f, d.windowHeight, e.top, a.height)), c
            },
            isBottomInView: function(a, b, c, d) {
                var e = a + b,
                    f = c + d;
                return f > a && e >= f
            },
            triggerEnter: function(b) {
                var c = this;
                setTimeout(function() {
                    b.enter.call(b.element, b)
                }, b.delay), a.isFunction(b.leave) ? b.triggered = !0 : c.list.splice(a.inArray(b, c.list), 1), c.maybeUnbindEvents()
            },
            triggerLeave: function(a) {
                setTimeout(function() {
                    a.leave.call(a.element, a)
                }, a.delay), a.triggered = !1
            },
            setScrollTop: function() {
                this.lastScrollY = c.scrollTop()
            },
            process: function() {
                var b = this,
                    c = a.extend([], b.list);
                a.each(c, function(a, c) {
                    var d = b.isInViewport(c),
                        e = c.hasLeaveCallback && b.isOutOfViewport(c, "bottom");
                    return !c.triggered && d ? b.triggerEnter(c) : !d && e && c.triggered ? b.triggerLeave(c) : void 0
                })
            }
        }, e.add = function(a) {
            var b = e.getInstance();
            return b.add(new d(a))
        }, e.refresh = function() {
            e.getInstance().refresh()
        }, e.getInstance = function() {
            return b || (b = new e), b
        }, window.FF_Viewport = e
    }(jQuery),
    function(a, b, c) {
        "use strict";

        function d(a, b) {
            a.style.WebkitTransform = b, a.style.msTransform = b, a.style.transform = b
        }

        function e() {
            var b = i.clientWidth,
                c = a.innerWidth;
            return c > b ? c : b
        }

        function f() {
            var b = i.clientHeight,
                c = a.innerHeight;
            return c > b ? c : b
        }

        function g(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }

        function h(a, b) {
            return this.el = a[0], this.$el = a, this.options = g({}, this.options), g(this.options, b), this._init()
        }
        var i = a.document.documentElement,
            j = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            },
            k = j[b.prefixed("transition")],
            l = {
                transitions: b.csstransitions,
                support3d: b.csstransforms3d
            };
        h.prototype.options = {}, h.prototype._init = function() {
            return this.$body = c("body"), this.grid = this.el.querySelector(".ff-stream-wrapper"), this.gridItems = [].slice.call(this.grid.querySelectorAll(".ff-item:not(.ff-ad)")), this.itemsCount = this.gridItems.length, this.$wrapper = this.$el.find(".ff-slideshow"), this.slideshow = this.el.querySelector(".ff-slideshow > ul"), this.$slideshow = c(this.slideshow), this.$slideshow.data("media", !1), this._addSlideShowItems(this.gridItems), this.slideshowItems = [].slice.call(this.slideshow.children), this.current = -1, this.ctrlPrev = this.el.querySelector(".ff-nav-prev"), this.ctrlNext = this.el.querySelector(".ff-nav-next"), this.ctrlClose = this.el.querySelector(".ff-nav-close"), this._initEvents(), this
        }, h.prototype._addSlideShowItems = function(b) {
            var d = this;
            b.forEach(function(b, e) {
                var f, g, h, i, j, k = c(b),
                    l = c('<li><div class="ff-slide-wrapper"></div></li>'),
                    m = l.find(".ff-slide-wrapper"),
                    n = k.find(".picture-item__inner").children().clone(),
                    o = k.attr("data-type"),
                    p = "",
                    q = !1;
                k.attr("data-media") ? (d.$slideshow.data("media", !0), h = k.attr("data-media").split(";"), f = c('<div class="ff-media-wrapper' + ("image" == h[3] ? "" : " ff-video") + '" style="width: 100%; max-height: ' + h[1] + 'px;"></div>'), m.prepend(f), "image" == h[3] ? (j = parseInt(h[0]), i = j > 600 ? 600 / j * parseInt(h[1]) : h[1], p = '<span class="ff-img-holder" style="width: ' + h[0] + "px; max-height: " + h[1] + "px; height: " + i + "px; background-image: url(" + h[2] + ');"></span>', f.addClass("ff-slide-img-loading").data("media-image", h[2])) : "video/mp4" == h[3] ? p = '<video controls width="' + h[0] + '" height="' + h[1] + '"><source src="' + h[2] + '" type="video/mp4">Your browser does not support the video tag.</video>' : (h[2] = h[2].replace("http:", "").replace("https:", "").replace("/v/", "/embed/").replace("autoplay=1", "autoplay=0&fs=1"), p = '<iframe width="' + h[0] + '" height="' + h[1] + '" src="' + h[2] + '" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen autoplay="1" wmode="opaque"></iframe>', h[2].indexOf("facebook.com/video/embed") + 1 && f.after('<span class="ff-cta">(Click image to play video)</span>')), f.data("media", p), n.find(".ff-img-holder").remove()) : n.find(".ff-img-holder").length && n.find(".ff-img-holder").each(function(a, b) {
                    var d = c(this),
                        e = c(this).find("img"),
                        f = e.get(0);
                    q ? d.remove() : (d.removeClass("ff-img-loading").addClass("ff-img-loaded").css({
                        "background-image": 'url("' + f.src + '")',
                        width: parseInt(f.style.width),
                        height: parseInt(f.style.height)
                    }), e.remove(), q = !0)
                }), m.append(n.not(".ff-img-holder")), g = m.find(".ff-item-cont"), /posts/.test(o) && (o = "wordpress"), g.append(l.find("h4")), g.append(l.find(".ff-article")), g.append(l.find(".ff-content").prepend(l.find(".ff-img-holder"))), g.append(l.find(".ff-item-meta")), g.find(".ff-userpic").append(l.find(".ff-icon")), g.find(".ff-item-meta").prepend(g.find(".ff-userpic")), g.find(".ff-timestamp").before("<br>").before('<span class="ff-posted">' + a.FlowFlowOpts.posted_on + " <span>" + o + "</span></span>"), l.find(".ff-content").each(function() {
                    var a = c(this);
                    a.is(":empty") ? a.remove() : a.wrap('<div class="ff-table"/>')
                }), d.$slideshow.append(l.attr("data-type", k.attr("data-type")))
            }), d.$slideshow.data("media") && d.$slideshow.addClass("ff-slideshow-media")
        }, h.prototype._initEvents = function(b) {
            var d = this;
            this.initItemsEvents(this.gridItems), c(this.ctrlPrev).on("click", function() {
                d._navigate("prev")
            }), c(this.ctrlNext).on("click", function() {
                d._navigate("next")
            }), c(this.ctrlClose).on("click", function() {
                d._closeSlideshow()
            }), this.$wrapper.on("click", function(a) {
                c(a.target).closest("li, nav").length || d._closeSlideshow();
            }), c(a).on("resize", function() {
                d._resizeHandler()
            }), c(document).on("keydown", function(a) {
                if (d.isSlideshowVisible) {
                    var b = a.keyCode || a.which;
                    switch (b) {
                        case 37:
                            d._navigate("prev");
                            break;
                        case 39:
                            d._navigate("next");
                            break;
                        case 27:
                            d._closeSlideshow()
                    }
                }
            })
        }, h.prototype.initItemsEvents = function(a, b) {
            var d = this,
                e = c(this.grid).data("opts") && c(this.grid).data("opts").titles;
            b = b || 0, a.forEach(function(a, f) {
                c(a).find(".picture-item__inner").on("click", function(a) {
                    var g = c(a.target),
                        h = g.closest("a"),
                        i = g.closest("h4").length;
                    if (h.length && !g.is("img")) {
                        if ("yep" === e && i) return;
                        if (!i) return
                    }
                    a.preventDefault(), d._openSlideshow(f + b)
                })
            })
        }, h.prototype._freezeScroll = function(a) {
            a.preventDefault()
        }, h.prototype.checkScrollbar = function() {
            this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
        }, h.prototype.setScrollbar = function() {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
        }, h.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", "")
        }, h.prototype.measureScrollbar = function() {
            var a = document.createElement("div");
            a.className = "ff-modal-scrollbar-measure", this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), b
        }, h.prototype._openSlideshow = function(a) {
            this.isSlideshowVisible = !0, this.current = a, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("ff-modal-open");
            var b = this;
            setTimeout(function() {
                b.$wrapper.addClass("ff-slideshow-open").scrollTop(0), b._setViewportItems();
                var a = c(b.currentItem),
                    g = c(b.nextItem),
                    h = c(b.prevItem),
                    i = e(),
                    j = f();
                b.$curr = a, a.find(".ff-media-wrapper").each(function(a, b) {
                    var d = c(this);
                    if (d.data("media") && "inserted" !== d.data("media")) {
                        if (d.data("media-image")) {
                            var e = new Image;
                            e.src = d.data("media-image"), e.onload = function() {
                                d.removeClass("ff-slide-img-loading")
                            }
                        }
                        d.prepend(d.data("media")), d.data("media", "inserted")
                    }
                }), g.add(h).find(".ff-media-wrapper").each(function(a, b) {
                    var d = c(this),
                        e = d.data("media");
                    if (e && "inserted" !== e && !/iframe|video/.test(e)) {
                        if (d.data("media-image")) {
                            var f = new Image;
                            f.src = d.data("media-image"), f.onload = function() {
                                d.removeClass("ff-slide-img-loading")
                            }
                        }
                        d.prepend(d.data("media")), d.data("media", "inserted")
                    }
                }), a.addClass("ff-current ff-show");
                var k = parseInt(Number(1 * (b.currentItem.offsetHeight / 2)));
                if (2 * k > j ? k = parseInt(j / 2) - 25 : b.$slideshow.bind("mousewheel DOMMouseScroll", b._freezeScroll), d(b.currentItem, l.support3d ? "translate3d(" + parseInt(Number(-1 * (b.currentItem.offsetWidth / 2))) + "px, -" + k + "px, 0px)" : "translate(-50%, -50%)"), b.prevItem) {
                    h.addClass("ff-show");
                    var m = Number(-1 * (i / 2 + b.prevItem.offsetWidth / 2));
                    d(b.prevItem, l.support3d ? "translate3d(" + m + "px, -50%, -150px)" : "translate(" + m + "px, -50%)")
                }
                if (b.nextItem) {
                    g.addClass("ff-show");
                    var m = Number(i / 2 + b.nextItem.offsetWidth / 2);
                    d(b.nextItem, l.support3d ? "translate3d(" + m + "px,-50%, -150px)" : "translate(" + m + "px, -50%)")
                }
            }, 100)
        }, h.prototype._navigate = function(a) {
            if (!this.isAnimating) {
                if ("next" === a && this.current === this.itemsCount - 1 || "prev" === a && 0 === this.current) return void this._closeSlideshow();
                this.isAnimating = !0, this._setViewportItems();
                var b, g, h, i = this,
                    j = e(),
                    m = f(),
                    n = this.currentItem.offsetWidth,
                    o = l.support3d ? "translate3d(-" + Number(j / 2 + n / 2) + "px, -50%, -150px)" : "translate(-" + Number(j / 2 + n / 2) + "px, -50%)",
                    p = l.support3d ? "translate3d(" + Number(j / 2 + n / 2) + "px, -50%, -150px)" : "translate(" + Number(j / 2 + n / 2) + "px, -50%)";
                "next" === a ? (b = l.support3d ? "translate3d( -" + Number(2 * j / 2 + n / 2) + "px, -50%, -150px )" : "translate(-" + Number(2 * j / 2 + n / 2) + "px, -50%)", g = l.support3d ? "translate3d( " + Number(2 * j / 2 + n / 2) + "px, -50%, -150px )" : "translate(" + Number(2 * j / 2 + n / 2) + "px, -50%)") : (b = l.support3d ? "translate3d( " + Number(2 * j / 2 + n / 2) + "px, -50%, -150px )" : "translate(" + Number(2 * j / 2 + n / 2) + "px)", g = l.support3d ? "translate3d( -" + Number(2 * j / 2 + n / 2) + "px, -50%, -150px )" : "translate(-" + Number(2 * j / 2 + n / 2) + "px, -50%)"), i.$slideshow.removeClass("ff-animatable"), ("next" === a && this.current < this.itemsCount - 2 || "prev" === a && this.current > 1) && (h = this.slideshowItems["next" === a ? this.current + 2 : this.current - 2], d(h, g), c(h).addClass("ff-show").find(".ff-media-wrapper").each(function(a, b) {
                    var d = c(this),
                        e = d.data("media");
                    if (e && "inserted" !== e && !/iframe|video/.test(e)) {
                        if (d.data("media-image")) {
                            var f = new Image;
                            f.src = d.data("media-image"), f.onload = function() {
                                d.removeClass("ff-slide-img-loading")
                            }
                        }
                        d.prepend(d.data("media")), d.data("media", "inserted")
                    }
                }));
                var q = function() {
                    var e;
                    i.$slideshow.addClass("ff-animatable"), i.$curr.removeClass("ff-current");
                    var f = "next" === a ? i.nextItem : i.prevItem;
                    c(f).addClass("ff-current").find(".ff-media-wrapper").each(function(a, b) {
                        var d = c(this),
                            e = d.data("media");
                        if (e && "inserted" !== e) {
                            if (d.data("media-image")) {
                                var f = new Image;
                                f.src = d.data("media-image"), f.onload = function() {
                                    d.removeClass("ff-slide-img-loading")
                                }
                            }
                            d.prepend(d.data("media")), d.data("media", "inserted")
                        }
                    }), d(i.currentItem, "next" === a ? o : p), i.nextItem && (e = parseInt(Number(1 * (i.nextItem.offsetHeight / 2))), 2 * e > m ? (e = parseInt(m / 2) - 25, "next" === a && i.$slideshow.off("mousewheel DOMMouseScroll", i._freezeScroll)) : "next" === a && (i.$slideshow.on("mousewheel DOMMouseScroll", i._freezeScroll), i.$wrapper.scrollTop(0)), d(i.nextItem, "next" === a ? l.support3d ? "translate3d(" + parseInt(Number(-1 * (i.nextItem.offsetWidth / 2))) + "px, -" + e + "px, 0px)" : "translate(-50%, -50%)" : b)), i.prevItem && (e = parseInt(Number(1 * (i.prevItem.offsetHeight / 2))), 2 * e > m ? (e = parseInt(m / 2) - 25, "prev" === a && i.$slideshow.off("mousewheel DOMMouseScroll", i._freezeScroll).scrollTop(0)) : "prev" === a && (i.$slideshow.on("mousewheel DOMMouseScroll", i._freezeScroll), i.$wrapper.scrollTop(0)), d(i.prevItem, "next" === a ? b : l.support3d ? "translate3d(" + parseInt(Number(-1 * (i.prevItem.offsetWidth / 2))) + "px, -" + e + "px, 0px)" : "translate(-50%, -50%)")), h && d(h, "next" === a ? p : o);
                    var g = function(b) {
                        if (l.transitions && j >= 800) {
                            if (-1 === b.originalEvent.propertyName.indexOf("transform")) return !1;
                            c(this).off(k, g)
                        }
                        i.prevItem && "next" === a ? c(i.prevItem).removeClass("ff-show") : i.nextItem && "prev" === a && c(i.nextItem).removeClass("ff-show"), i._resetMedia(c(i.currentItem)), "next" === a ? (i.prevItem = i.currentItem, i.currentItem = i.nextItem, h && (i.nextItem = h)) : (i.nextItem = i.currentItem, i.currentItem = i.prevItem, h && (i.prevItem = h)), i.$curr = c(i.currentItem), i.current = "next" === a ? i.current + 1 : i.current - 1, i.isAnimating = !1
                    };
                    l.transitions && j >= 800 ? i.$curr.on(k, g) : g()
                };
                setTimeout(q, 25)
            }
        }, h.prototype._closeSlideshow = function(a) {
            this.$wrapper.removeClass("ff-slideshow-open"), this.$slideshow.removeClass("ff-animatable").unbind("mousewheel DOMMouseScroll", this._freezeScroll), this.resetScrollbar(), this.$body.removeClass("ff-modal-open");
            var b = this,
                e = function(a) {
                    if (l.transitions && a) {
                        if ("section" !== a.target.tagName.toLowerCase()) return;
                        c(this).off(k, e)
                    }
                    var f = c(b.currentItem);
                    b.$curr = f, f.removeClass("ff-current"), f.removeClass("ff-show"), b._resetMedia(f), b.prevItem && c(b.prevItem).removeClass("ff-show"), b.nextItem && c(b.nextItem).removeClass("ff-show"), b.slideshowItems.forEach(function(a) {
                        d(a, "")
                    }), b.isSlideshowVisible = !1
                };
            l.transitions ? this.$wrapper.on(k, e) : e()
        }, h.prototype._resetMedia = function(a) {
            var b = a.attr("data-type");
            if ("vine" !== b && "soundcloud" !== b) {
                var c = a.find(".ff-video"),
                    d = c.find("iframe, video");
                c.prepend(d)
            }
        }, h.prototype._setViewportItems = function() {
            this.currentItem = null, this.prevItem = null, this.nextItem = null, this.$curr = null, this.current > 0 && (this.prevItem = this.slideshowItems[this.current - 1]), this.current < this.itemsCount - 1 && (this.nextItem = this.slideshowItems[this.current + 1]), this.currentItem = this.slideshowItems[this.current], this.$curr = c(this.currentItem)
        }, h.prototype._resizeHandler = function() {
            function a() {
                b._resize(), b._resizeTimeout = null
            }
            var b = this;
            this._resizeTimeout && clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(a, 50)
        }, h.prototype._resize = function() {
            if (this.isSlideshowVisible) {
                if (this.prevItem) {
                    var a = Number(-1 * (e() / 2 + this.prevItem.offsetWidth / 2));
                    d(this.prevItem, l.support3d ? "translate3d(" + a + "px, -50%, -150px)" : "translate(" + a + "px, -50%)")
                }
                if (this.nextItem) {
                    var a = Number(e() / 2 + this.nextItem.offsetWidth / 2);
                    d(this.nextItem, l.support3d ? "translate3d(" + a + "px, -50%, -150px)" : "translate(" + a + "px, -50%)")
                }
            }
        }, a.CBPGridGallery = h
    }(window, window.CustomModernizr, window.jQuery),
    function(a) {
        "use strict";

        function b(a) {
            if (document.createEvent) {
                var b = document.createEvent("MouseEvents");
                b.initEvent("click", !0, !1), a.dispatchEvent(b)
            } else document.createEventObject ? a.fireEvent("onclick") : "function" == typeof a.onclick && a.onclick()
        }
        var c, d, e = a("html"),
            f = navigator.userAgent.toLowerCase(),
            g = /safari|chrome/.test(f),
            h = /android|blackBerry|iphone|ipad|ipod|opera mini|iemobile/i.test(f),
            i = /msie|trident.*rv\:11\./.test(f),
            j = /firefox/.test(f),
            k = !1,
            l = window.FlowFlowOpts;
        if (i) {
            if (/msie 8/.test(f)) return;
            c = /msie 9/.test(f)
        }
        e.addClass("ff-browser-" + (g ? /chrome/.test(f) ? "chrome" : "safari" : i ? "ie" + (c ? " ff-ie9" : "") : j ? "ff" : "")), a.expr.createPseudo && "function" == typeof a.expr.createPseudo ? a.expr[":"].contains = a.expr.createPseudo(function(b) {
            return function(c) {
                return a(c).text().toUpperCase().indexOf(b.toUpperCase()) >= 0
            }
        }) : jQuery.expr[":"].contains = function(a, b, c) {
            return jQuery(a).text().toUpperCase().indexOf(c[3].toUpperCase()) >= 0
        };
        var m = function(a) {
            function c() {
                return a(document).bind("ffimgloaded", function(a, b) {
                    var c = b.$grid.data("shuffle");
                    c && c.layout()
                }), c = function() {
                    return m
                }, m
            }

            function e(c, d, e, i) {
                var j, k, m, n, p, s, t, u, v, w, x = "",
                    y = "grid" === d.layout ? "ff-theme-" + d.theme : "";
                if (!d.feeds || "[]" === d.feeds) return "<p>No feeds to show. Add at least one</p>";
                if (!d.layout || !d.theme) return "<p>Please choose stream layout on options page</p>";
                "string" == typeof d.feeds && (d.feeds = JSON.parse(d.feeds)), s = d.feeds, d.hash = c.hash, d["next-page"] = c.page + 1, d.countOfPages = c.countOfPages;
                var z = c.items,
                    A = 0,
                    C = z.length,
                    D = a('[id^="ff-uid-"]').length + 1 || 1;
                if ("yep" === d.gallery && !h) {
                    var E = window.FlowFlowOpts.lightbox_navigate;
                    x += '<section class="ff-slideshow"><ul></ul><nav><span class="ff-nav-prev"></span><span class="icon ff-nav-next"></span><span class="ff-nav-close"></span></nav><div class="ff-nav-info-keys">' + E + "</div></section>"
                }
                if (x += '<div class="ff-header ff-loading">', d.heading && (x += "<h1>" + d.heading + "</h1>"), d.subheading && (x += "<h2>" + d.subheading + "</h2>"), "yep" === d.filter) {
                    for (t = "", u = {}, v = 0, A = 0; C > A; A++) u[z[A].type] = 1;
                    
					for (var F in u) "ad" !== F && (v += 1, t += '<span class="ff-filter ff-type-' + F + '" data-filter="' + F + '"></span>');
                    
					//x += '<div class="ff-filter-holder">' + (v > 1 ? '<span class="ff-filter ff-type-all">' + l.filter_all + "</span>" + t : "") + '<span class="ff-search"><input type="text" ' + ("grid" === d.layout ? 'placeholder="' + l.filter_search + '"' : "") + "/></span></div>"
					x += '<div class="ff-filter-holder"> <span class="ff-filter ff-type-all">ALL</span>	<span class="ff-filter ff-type-posts" data-filter="posts">EVENTS</span> <span class="ff-filter ff-type-twitter" data-filter="twitter">SOCIAL</span></div>';
				}
                if (e && (l.moderation = e, x += '<div class="ff-moderation-holder"><p><strong>PREMODERATION MODE IS ON</strong>. APPROVE POSTS AND HIT <strong>APPLY CHANGES</strong>.</p><span class="ff-moderation-button ff-moderation-apply">Apply changes</span><span class="ff-moderation-button ff-moderation-approve-new">Approve new posts</span></div>'), x += "</div>", p = "grid" === d.layout ? d[d.layout.charAt(0) + d.theme.charAt(0) + "-style"] : d["compact-style"], x += '<div class="ff-stream-wrapper ' + y + " ff-" + (h ? "mobile" : "desktop") + " ff-" + (p || "nostyle") + " shuffle--container" + ("grid" === d.layout && "yep" === d.viewportin && !h && window.requestAnimationFrame ? " shuffle--animatein" : " shuffle--animateoff") + " ff-c-" + d.cmeta + '">', w = o(z, D, !0, e, d), x += w, x += '<div class="shuffle__sizer"></div></div>', c.countOfPages > 1 && "grid" === d.layout && c.page + 1 != c.countOfPages && ("yep" !== d.mobileslider || !h) && (x += '<div class="ff-loadmore-wrapper"><span class="ff-btn">' + window.FlowFlowOpts.show_more + "</span></div>"), j = a(x), j.each(function(b) {
                        return this.className.indexOf("ff-stream-wrapper") + 1 ? (k = a(this), !1) : void 0
                    }), m = j.find(".ff-item"), n = m.not(".ff-ad"), k.data("opts", d).data("items", m), n.each(function() {
                        a(this).find("img").not(":first").remove()
                    }), j.find("p:empty, .ff-content:empty, .ff-content a:empty").remove(), j.find("img").each(function() {
                        g.apply(this, [k])
                    }), j.find(".ff-filter").click(function() {
                        j.find(".ff-filter--active").removeClass("ff-filter--active");
                        var b = a(this).addClass("ff-filter--active").attr("data-filter");
                        r(k, b)
                    }), j.find(".ff-search input").on("keyup", function() {
                        var a = this.value.toLowerCase();
                        q(k, a)
                    }), j.on("click", "a", function() {
                        var b, c = a(this);
                        return c.closest(".ff-share-wrapper").length ? (b = a(this).attr("href"), window.open(b, "sharer", "toolbar=0,status=0,width=626,height=436"), !1) : c.is(".ff-no-link") && ("nope" === d.gallery || h) ? !1 : void 0
                    }), "nope" === d.gallery || h ? (k.addClass("ff-gallery-off").on("click", '.ff-item:not(".ff-ad") .picture-item__inner', function(c) {
                        var d = a(c.target),
                            e = a(this),
                            f = d.closest("a");
                        return !f.length || d.is("img") ? (h ? e.toggleClass("ff-taped") : b(e.find(".ff-timestamp")[0]), !1) : void 0
                    }), k.on("click", ".ff-timestamp", function(a) {
                        a.stopImmediatePropagation()
                    })) : k.addClass("ff-gallery-on"), "yep" === l.open_in_new) {
                    var G = location.hostname;
                    j.find("a").filter(function() {
                        return this.hostname != G
                    }).attr("target", "_blank")
                }
                f(n, d), e && B(j, z, d), H[d.id] = k;
                for (var I in i) i[I] && this[I].init(k);
                return j
            }

            function f(b, c) {
                var d, e = "grid" === c.layout && "flat" === c.theme;
                e ? (d = c["gf-style"], x(b, d, c.hidemeta)) : b.each(function(b, c) {
                    var d = a(c),
                        e = d.find(".ff-item-cont"),
                        f = d.find(".ff-content .ff-img-holder");
                    d.addClass("ff-" + (f.length ? "" : "no-") + "image"), e.prepend(f)
                }), "compact" === c.layout && "c-style-2" === c["compact-style"] && b.find(".picture-item__inner").each(function() {
                    var b = a(this);
                    b.append(b.find(".ff-item-meta"))
                })
            }

            function g(b) {
                var c, d, e = a(this),
                    f = this,
                    g = e.parent(),
                    h = g.is("a") ? g : e,
                    i = !0;
                g.is(".ff-img-holder") || (c = e.attr("height"), e.removeAttr("width").removeAttr("height"), i = c && 0 != parseInt(c), d = a('<span class="ff-img-holder ff-img-loading" style="width: 100%;max-height: none"></span>'), h.wrap(d)), f.onload = function() {
                    i || a(document).trigger("ffimgloaded", {
                        $grid: b
                    }), e.closest(".ff-img-holder").removeClass("ff-img-loading").addClass("ff-img-loaded")
                }
            }

            function i(a) {
                a.$el.layout()
            }

            function j(a) {
                var b, c, d, e, f, g, h, i = 0,
                    j = l.server_time,
                    k = j - a,
                    m = new Date(1e3 * a),
                    o = E.length - 1;
                for (h = o; h >= 0 && (b = k / E[h]) <= 1; h--);
                switch (0 > h && (h = 0), b = Math.floor(b), h) {
                    case 3:
                        if (1 == b) {
                            c = l.dates.Yesterday;
                            break
                        }
                    case 4:
                    case 5:
                        e = m.getMonth(), f = m.getDate(), c = F[e] + " " + f;
                        break;
                    case 6:
                    case 7:
                        e = m.getMonth(), f = m.getDate(), g = m.getFullYear(), c = F[e] + " " + f + ", " + g;
                        break;
                    default:
                        d = j - k % E[h], c = n(b, j, d, i, h)
                }
                return c
            }

            function n(a, b, c, d, e) {
                var f = G;
                f = f[e];
                var g = a + f;
                return g + " " + l.dates.ago
            }

            function o(a, b, c, d, e, f) {
                var g, i, j, k, m, n, o, p = a.length,
                    q = "";
                for (f || (f = 0), e && "randomCompare" == e.order && (a = C(a)), g = 0; p > g; g++) {
                    if (j = a[g], i = g + 1, "ad" !== j.type) {
                        o = "undefined" != typeof j.source ? j.source : j.permalink;
                        var r = "";
                        if (d) {
                            var s = "new" == j.status ? " ff-moderation-new-post" : "",
                                t = "approved" == j.status ? "checked" : "";
                            r = '<div class="ff-moderation-wrapper ' + ("approved" == j.status ? "ff-approved" : "") + s + '"><span>Approve post</span> <label for="ff-mod-' + b + '"><input id="ff-mod-' + b + '" type="checkbox" class="ff-switcher" value="yes" ' + t + "/><div><span></span></div></label></div>"
                        }
                        q += '<div class="ff-item' + (j.media && "image" != j.media.type ? " ff-video-preview" : "") + " ff-" + j.type + '" id="ff-uid-' + b + '" post-id="' + j.id + '" data-type="' + j.type + '" data-index="' + (i + f) + '"' + (j.media ? ' data-media="' + j.media.width + ";" + j.media.height + ";" + ("yep" === l.forceHTTPS ? j.media.url.replace("http:", "https:") : j.media.url) + ";" + j.media.type + '"' : "") + ' data-timestamp="' + j.system_timestamp + '">' + r + '<div class="picture-item__inner"><div class="ff-item-cont">' + (j.img ? '<span class="ff-img-holder ff-img-loading ff-no-margin" style="width:100%;max-height:' + j.img.height + 'px;"><img src="' + ("yep" === l.forceHTTPS ? j.img.url.replace("http:", "https:") : j.img.url) + '" style="width:' + j.img.width + "px;height:" + j.img.height + 'px;" /></span>' : "") + (j.header ? '<h4><a rel="nofollow" href="' + o + '">' + j.header + "</a></h4>" : "") + '<div class="ff-content">' + j.text + "</div>", q += '<div class="ff-item-meta"><span class="ff-userpic" style="background:url(' + ("yep" === l.forceHTTPS ? j.userpic.replace("http:", "https:") : j.userpic) + ')"><i class="ff-icon"><i class="ff-icon-inner"></i></i></span><a rel="nofollow" href="' + j.userlink + '" class="ff-name ' + (j.userlink ? "" : " ff-no-link") + '">' + j.screenname + "</a>" + (j.nickname ? '<a rel="nofollow" href="' + j.userlink + '" class="ff-nickname' + (j.userlink ? "" : " ff-no-link") + '">' + j.nickname + "</a>" : "") + '<a rel="nofollow" href="' + j.permalink + '" class="ff-timestamp">' + D(j.system_timestamp, j.timestamp) + "</a></div></div>", c && ("twitter" === j.type ? q += '<div class="ff-share-wrapper"><a href="https://twitter.com/intent/tweet?in_reply_to=' + j.id + '" class="ff-tw-reply"></a><a href="https://twitter.com/intent/retweet?tweet_id=' + j.id + '" class="ff-tw-retweet"></a><a href="https://twitter.com/intent/favorite?tweet_id=' + j.id + '" class="ff-tw-fav"></a></div>' : (n = encodeURIComponent(j.permalink), q += '<div class="ff-share-wrapper"><a href="http://www.facebook.com/sharer.php?u=' + n + '" class="ff-fb-share"></a><a href="https://twitter.com/share?' + (j.header ? "text=" + encodeURIComponent(j.header) + "&" : "") + "url=" + n + '" class="ff-tw-share"></a><a href="https://plus.google.com/share?url=' + n + '" class="ff-gp-share"></a></div>')), h && (q += '<a class="ff-mob-link" href="' + j.permalink + '"></a>'), q += "</div></div>"
                    } else k = "yep" === j.label ? 'data-label="' + j.labelTxt + ";" + j.labelCol + '"' : "", m = 'style="' + (j.textCol ? "color:" + j.textCol + ";" : "") + ("js" === j.adtype ? "height:" + j.height + "px" : "") + '"', q += '<div class="ff-item ff-' + j.type + (j.permalink ? " ff-ad-link" : "") + '" id="ff-uid-' + b + '" post-id="' + j.id + '" data-type="' + j.type + '" data-adtype="' + j.adtype + '" data-index="' + i + '" ' + k + '><div class="picture-item__inner" style="' + (j.cardBG ? "background-color:" + j.cardBG + ";" : "") + '"><div class="ff-item-cont"><div class="ff-content" ' + m + ">" + j.text.replace(/document\.write\((.+?)\)/i, function(a, c) {
                        return "jQuery(" + c + ').appendTo(jQuery("#ff-uid-' + b + ' .ff-content"))'
                    }) + "</div>", j.permalink && (q += '<a class="ff-link" href="' + j.permalink + '"></a>'), q += "</div></div></div>";
                    b++
                }
                return q
            }

            function p(a, b, c, d, e, f) {
                setTimeout(function() {
                    s(a, b, c, d, e, f)
                }, 0)
            }

            function q(b, c) {
                clearTimeout(d), k || (b.find(".ff-item").each(v), k = !0), d = setTimeout(function() {
                    q.finder, b.find(".ff-highlight").each(function() {
                        a(this).replaceWith(this.childNodes)
                    }), c && b.shuffle("shuffle", function(b, d) {
                        var e, f;
                        return "all" !== d.group && -1 === a.inArray(d.group, b.data("groups")) ? !1 : (e = b.find(':contains("' + c + '")'), e.length && e.first().find("*").filter(function() {
                            var b = a(this);
                            return !b.children().length || b.is("p")
                        }).each(function(b, d) {
                            var e = a(d);
                            e.is("p") ? q.finder = window.findAndReplaceDOMText(d, {
                                find: new RegExp(c, "i"),
                                wrap: "span",
                                clss: "ff-highlight"
                            }) : a(d).html(function(a, b) {
                                var d = b.replace(new RegExp(c, "i"), function(a) {
                                    return '<span class="ff-highlight">' + a + "</span>"
                                });
                                return d
                            })
                        }), e.length || (f = a.trim(b.attr("data-type")).toLowerCase(), f = -1 !== f.indexOf(c)), e.length || f)
                    })
                }, 100)
            }

            function r(b, c) {
                k || (b.find(".ff-item").each(v), k = !0), b.shuffle("shuffle", function(b, d) {
                    if ("all" !== d.group && -1 === a.inArray(d.group, b.data("groups"))){
						return !1;
					}
					
					if(c == 'twitter'){
						if(b.attr("data-type") == 'twitter' || b.attr("data-type") == 'facebook'){
							return true;
						}
					}

                    var e = a.trim(b.attr("data-type")).toLowerCase();
                    return c ? -1 !== e.indexOf(c) : 1
                })
            }

            function s(b, c, d, e, i, j) {
                var k, m, n, p, q = b.find(".shuffle__sizer"),
                    r = b.find(".ff-item");
                return u(r), e && !h && (n = b.parent(), m = new CBPGridGallery(n), p = n.find(".ff-slideshow").attr("id", n.attr("id") + "-slideshow"), "yep" === i.hidemeta && p.addClass("ff-hide-meta"), setTimeout(function() {
                    document.body.appendChild(p.get(0))
                }, 0)), b.find(".ff-item:not(.ff-ad) .ff-content").readmore({
                    maxHeight: 200,
                    speed: 0,
                    afterToggle: function() {
                        k.layout()
                    }
                }), b.shuffle({
                    itemSelector: ".ff-item",
                    sizer: q
                }), k = b.data("shuffle"), c && (c = parseInt(c), b.addClass("ff-slider").parent().css("paddingBottom", "70px"), y(b, c, k, d), b.shuffle("shuffle", function(a, b) {
                    return parseInt(a.attr("data-index")) <= c
                }), b.data("num", r.length), b.data("visible", 0)), window.requestAnimationFrame && t(b, r), b.on("done.shuffle", function() {
                    setTimeout(function() {
                        k.layout(), j.find(".ff-loadmore-wrapper").css("visibility", "visible")
                    }, 1e3)
                }), j.find(".ff-loadmore-wrapper span").click(function() {
                    var c = a(this),
                        d = j.find(".ff-loader"),
                        e = j.find(".ff-item").not(".ff-ad").length,
                        h = {
                            action: "fetch_posts",
                            "stream-id": i.id,
                            page: i["next-page"],
                            countOfPages: i.countOfPages,
                            hash: i.hash
                        };
                    c.css("opacity", 0), d.insertAfter(c).removeClass("ff-squeezed"), a.get(FlowFlowOpts.ajaxurl, h, function(h) {
                        var j = JSON.parse(h),
                            n = j.items,
                            p = (n.length, a('[id^="ff-uid-"]').length + 1 || 1),
                            q = o(n, p, !0, l.moderation, i),
                            r = a(q),
                            s = r.not(".ff-ad"),
                            v = s.toArray();
                        if (b.trigger("loaded_more", {
                                items: r
                            }), i.hash = j.hash, i["next-page"] = j.page + 1, i.countOfPages = j.countOfPages, b.append(r), b.shuffle("appended", r), u(r), window.requestAnimationFrame && t(b, r), s.each(function() {
                                a(this).find("img").not(":first").remove()
                            }), r.find("img").each(function() {
                                g.apply(this, [b])
                            }), m && (m._addSlideShowItems(v), m.initItemsEvents(v, e), m.slideshowItems = [].slice.call(m.slideshow.children), m.itemsCount = m.itemsCount + s.length), "yep" === l.open_in_new) {
                            var w = location.hostname;
                            r.find("a").filter(function() {
                                return this.hostname != w
                            }).attr("target", "_blank")
                        }
                        if (f(s, i), d.addClass("ff-squeezed"), setTimeout(function() {
                                s.filter(":lt(5)").addClass("in"), s.find(".ff-content").readmore({
                                    maxHeight: 200,
                                    speed: 0,
                                    afterToggle: function() {
                                        k.layout()
                                    }
                                }), setTimeout(function() {
                                    j.page + 1 != j.countOfPages ? c.css("opacity", 1) : c.remove(), k.layout()
                                }, 200)
                            }, 14), FlowFlowOpts.dependencies.ads && j.ads) {
                            var x = jQuery.post(l.ajaxurl, {
                                action: "flow_flow_ad_action",
                                status: "view",
                                id: j.ads
                            });
                            a.when(x).always(function(a) {})
                        }
                    })
                }), k
            }

            function t(a, b) {
                b.each(function() {
                    FF_Viewport.add({
                        element: this,
                        threshold: 130,
                        enter: v,
                        leave: w
                    })
                })
            }

            function u(a) {
                a.find(".picture-item__inner").addClass("picture-item__inner--transition")
            }

            function v() {
                a(this).addClass("in").data("viewport", "in")
            }

            function w() {
                a(this).data("viewport", "out")
            }

            function x(b, c, d) {
                b.each(function(b, e) {
                    var f, g = a(e),
                        h = g.find(".picture-item__inner"),
                        i = g.find(".ff-img-holder");
                    /[12]/.test(c) ? (f = g.find(".ff-item-meta"), "yep" !== d && (g.find(".ff-item-cont").prepend(f), i.length || "style-1" === c && f.append(f.find(".ff-userpic")))) : "style-3" === c && (h.prepend(g.find(".ff-icon")), "yep" === d && (f = g.find(".ff-item-meta"), g.find(".ff-item-cont").prepend(f.hide()))), g.addClass("ff-" + (i.length ? "" : "no-") + "image"), h.prepend(i)
                })
            }

            function y(b, c, d, e) {
                function f() {
                    var a = k.data("currentSlide"),
                        b = a - 1;
                    1 > b && (b = n), k.data("currentSlide", b), i(b), e && setTimeout(j, 0)
                }

                function g() {
                    var a = k.data("currentSlide"),
                        b = a + 1;
                    b > n && (b = 1), k.data("currentSlide", b), i(b), e && setTimeout(j, 0)
                }

                function i(d) {
                    b.shuffle("shuffle", function(b, e) {
                        var f, g, h;
                        return "all" !== e.group && -1 === a.inArray(e.group, b.data("groups")) ? !1 : (f = b.attr("data-index"), g = c * (d - 1), h = c * d, f > g && h >= f)
                    })
                }

                function j() {
                    var c = b.offset().top;
                    a("html, body").animate({
                        scrollTop: c - 100
                    }, 300)
                }
                var k, l = a('<span class="ff-control-prev"/>'),
                    m = a('<span class="ff-control-next"/>'),
                    n = Math.ceil(d.$items.length / c);
                l.on("click", f), m.on("click", g), h && A(b, f, g), k = a('<div class="ff-controls-wrapper"></div>').append(l).append(m), k.data("currentSlide", 1), b.on("layout.shuffle", function() {}), b.append(k)
            }

            function z(b, c) {
                b.find("img").each(function() {
                    var b = a(this),
                        d = parseInt(b.css("height")),
                        e = parseInt(b.css("width")),
                        f = c / e;
                    b.css("height", Math.round(d * f) + "px")
                })
            }

            function A(a, b, c) {
                var d, e, f, g, h;
                a.bind("touchstart", function(a) {
                    f = (new Date).getTime(), d = a.originalEvent.touches[0].pageX, e = a.originalEvent.touches[0].clientY
                }).bind("touchmove", function(a) {
                    g = a.originalEvent.touches[0].pageX, h = a.originalEvent.touches[0].clientY
                }).bind("touchend", function() {
                    var a = g > d ? "right" : "left",
                        i = h - e > 60 || -60 > h - e,
                        j = g - d > 60 || -60 > g - d,
                        k = (new Date).getTime();
                    if (!(k - f > 300 || i) && j) switch (a) {
                        case "left":
                            c();
                            break;
                        case "right":
                            b()
                    }
                })
            }

            function B(b, c, d) {
                var e = d.id,
                    f = d.hash,
                    g = {};
                b.find(".ff-moderation-apply").click(function(b) {
                    var c = a.post(FlowFlowOpts.ajaxurl, {
                        action: "moderation_apply_action",
                        moderation_action: "custom_approve",
                        stream: e,
                        changed: g,
                        hash: f
                    });
                    a.when(c).done(function(a) {
                        location.reload()
                    })
                }), b.find(".ff-moderation-approve-new").click(function(b) {
                    var c = a.post(FlowFlowOpts.ajaxurl, {
                        action: "moderation_apply_action",
                        moderation_action: "new_posts_approve",
                        stream: e,
                        hash: f
                    });
                    a.when(c).done(function(a) {
                        location.reload()
                    })
                }), b.on("change", ".ff-moderation-wrapper input", function(b) {
                    var c = a(this),
                        d = c.is(":checked"),
                        e = c.closest(".ff-item").attr("post-id");
                    c.closest(".ff-moderation-wrapper")[d ? "addClass" : "removeClass"]("ff-approved"), g[e] = {
                        approved: d
                    }
                })
            }

            function C(a) {
                for (var b, c, d = a.length; 0 !== d;) c = Math.floor(Math.random() * d), d -= 1, b = a[d], a[d] = a[c], a[c] = b;
                return a
            }
            var D = "agoStyleDate" === l.date_style ? function(a, b) {
                    return j(a, b)
                } : function(a, b) {
                    return b
                },
                E = [1, 60, 3600, 86400, 604800, 2630880, 31570560, 315705600],
                F = l.dates.months,
                G = [l.dates.s, l.dates.m, l.dates.h],
                H = {};
            return {
                init: c,
                streams: H,
                addTransitionToItems: u,
                addViewportItems: t,
                prepareImageFor: g,
                adjustItems: f,
                shuffle: s,
                recalcLayout: i,
                buildItems: o,
                buildStreamWith: e,
                setupGrid: p,
                reformat: x,
                adjustImgHeight: z
            }
        }(a);
        window.FlowFlow = m.init()
    }(jQuery);