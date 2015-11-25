/* Dynamic language and runtime variables */
var aws_bucket = "passkit";
var gmaps_noaddress = "Sorry, Google Maps could not find that address, please change and try again";
var try_again = "Let's Fix This";
var check_email = "Please check your email for a message from no-reply@passkit.com";
var imageclick = "Please drag an image<br />or click here";
var plrequired = "Required";
var loginText = "Login";
var lx_myaccount = "My Account";
var lx_logout = "Logout";
var lx_reset = "Please check your email for a message from no-reply@passkit.com";
var passNames = {
    boardingPass: "Boarding Pass",
    coupon: "Coupon",
    eventTicket: "Event Ticket",
    generic: "Card",
    storeCard: "Store Card"
};
var def_nodistri = "The default template does not have distribution links.";
var url_distri = "https://pass.is/";
var url_pdistri = "https://p.pass.is/";
var localed = "en";
/*  Third Party Credits */
/*  JS Color Picker @v 1.4.1 @l GNU Lesser | jc.com @modified passk.it */
var imageBucket = "https://d1v6vxpmctmtey.cloudfront.net/images/";
var cfbucket = "https://d1ye292yvr7tf6.cloudfront.net/";
var jc = {
    dir: "",
    bindClass: "cpk",
    binding: true,
    preloading: true,
    install: function() {
        jc.addEvent(window, "load", jc.init)
    },
    init: function() {
        if (jc.binding) {
            jc.bind()
        }
        if (jc.preloading) {
            jc.preload()
        }
    },
    getDir: function() {
        if (!jc.dir) {
            var a = jc.detectDir();
            jc.dir = a !== false ? a : window.cfbucket + "images/cpk/"
        }
        return jc.dir
    },
    detectDir: function() {
        var c = location.href;
        var d = document.getElementsByTagName("base");
        for (var a = 0; a < d.length; a += 1) {
            if (d[a].href) {
                c = d[a].href
            }
        }
        var d = document.getElementsByTagName("script");
        for (var a = 0; a < d.length; a += 1) {
            if (d[a].src && /(^|\/)jc\.js([?#].*)?$/i.test(d[a].src)) {
                var f = new jc.URI(d[a].src);
                var b = f.toAbsolute(c);
                b.path = b.path.replace(/[^\/]+$/, "");
                b.query = null;
                b.fragment = null;
                return b.toString()
            }
        }
        return false
    },
    bind: function() {
        var d = new RegExp("(^|\\s)(" + jc.bindClass + ")\\s*(\\{[^}]*\\})?", "i");
        var f = document.getElementsByTagName("input");
        for (var c = 0; c < f.length; c += 1) {
            var b;
            if (!f[c].color && f[c].className && (b = f[c].className.match(d))) {
                var g = {};
                if (b[3]) {
                    try {
                        g = (new Function("return (" + b[3] + ")"))()
                    } catch (a) {}
                }
                f[c].color = new jc.color(f[c], g)
            }
        }
    },
    preload: function() {
        for (var a in jc.imgRequire) {
            if (jc.imgRequire.hasOwnProperty(a)) {
                jc.loadImage(a)
            }
        }
    },
    images: {
        pad: [181, 101],
        sld: [16, 101],
        cross: [15, 15],
        arrow: [7, 11]
    },
    imgRequire: {},
    imgLoaded: {},
    requireImage: function(a) {
        jc.imgRequire[a] = true
    },
    loadImage: function(a) {
        if (!jc.imgLoaded[a]) {
            jc.imgLoaded[a] = new Image();
            jc.imgLoaded[a].src = jc.getDir() + a
        }
    },
    fetchElement: function(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    },
    addEvent: function(a, c, b) {
        if (a.addEventListener) {
            a.addEventListener(c, b, false)
        } else {
            if (a.attachEvent) {
                a.attachEvent("on" + c, b)
            }
        }
    },
    fireEvent: function(a, c) {
        if (!a) {
            return
        }
        if (document.createEvent) {
            var b = document.createEvent("HTMLEvents");
            b.initEvent(c, true, true);
            a.dispatchEvent(b)
        } else {
            if (document.createEventObject) {
                var b = document.createEventObject();
                a.fireEvent("on" + c, b)
            } else {
                if (a["on" + c]) {
                    a["on" + c]()
                }
            }
        }
    },
    getElementPos: function(c) {
        var d = c,
            b = c;
        var a = 0,
            f = 0;
        if (d.offsetParent) {
            do {
                a += d.offsetLeft;
                f += d.offsetTop
            } while (d = d.offsetParent)
        }
        while ((b = b.parentNode) && b.nodeName.toUpperCase() !== "BODY") {
            a -= b.scrollLeft;
            f -= b.scrollTop
        }
        return [a, f]
    },
    getElementSize: function(a) {
        return [a.offsetWidth, a.offsetHeight]
    },
    getRelMousePos: function(b) {
        var a = 0,
            c = 0;
        if (!b) {
            b = window.event
        }
        if (typeof b.offsetX === "number") {
            a = b.offsetX;
            c = b.offsetY
        } else {
            if (typeof b.layerX === "number") {
                a = b.layerX;
                c = b.layerY
            }
        }
        return {
            x: a,
            y: c
        }
    },
    getViewPos: function() {
        if (typeof window.pageYOffset === "number") {
            return [window.pageXOffset, window.pageYOffset]
        } else {
            if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                return [document.body.scrollLeft, document.body.scrollTop]
            } else {
                if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                    return [document.documentElement.scrollLeft, document.documentElement.scrollTop]
                } else {
                    return [0, 0]
                }
            }
        }
    },
    getViewSize: function() {
        if (typeof window.innerWidth === "number") {
            return [window.innerWidth, window.innerHeight]
        } else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                return [document.body.clientWidth, document.body.clientHeight]
            } else {
                if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                    return [document.documentElement.clientWidth, document.documentElement.clientHeight]
                } else {
                    return [0, 0]
                }
            }
        }
    },
    URI: function(a) {
        this.scheme = null;
        this.authority = null;
        this.path = "";
        this.query = null;
        this.fragment = null;
        this.parse = function(d) {
            var c = d.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
            this.scheme = c[3] ? c[2] : null;
            this.authority = c[5] ? c[6] : null;
            this.path = c[7];
            this.query = c[9] ? c[10] : null;
            this.fragment = c[12] ? c[13] : null;
            return this
        };
        this.toString = function() {
            var c = "";
            if (this.scheme !== null) {
                c = c + this.scheme + ":"
            }
            if (this.authority !== null) {
                c = c + "//" + this.authority
            }
            if (this.path !== null) {
                c = c + this.path
            }
            if (this.query !== null) {
                c = c + "?" + this.query
            }
            if (this.fragment !== null) {
                c = c + "#" + this.fragment
            }
            return c
        };
        this.toAbsolute = function(e) {
            var e = new jc.URI(e);
            var d = this;
            var c = new jc.URI;
            if (e.scheme === null) {
                return false
            }
            if (d.scheme !== null && d.scheme.toLowerCase() === e.scheme.toLowerCase()) {
                d.scheme = null
            }
            if (d.scheme !== null) {
                c.scheme = d.scheme;
                c.authority = d.authority;
                c.path = b(d.path);
                c.query = d.query
            } else {
                if (d.authority !== null) {
                    c.authority = d.authority;
                    c.path = b(d.path);
                    c.query = d.query
                } else {
                    if (d.path === "") {
                        c.path = e.path;
                        if (d.query !== null) {
                            c.query = d.query
                        } else {
                            c.query = e.query
                        }
                    } else {
                        if (d.path.substr(0, 1) === "/") {
                            c.path = b(d.path)
                        } else {
                            if (e.authority !== null && e.path === "") {
                                c.path = "/" + d.path
                            } else {
                                c.path = e.path.replace(/[^\/]+$/, "") + d.path
                            }
                            c.path = b(c.path)
                        }
                        c.query = d.query
                    }
                    c.authority = e.authority
                }
                c.scheme = e.scheme
            }
            c.fragment = d.fragment;
            return c
        };

        function b(e) {
            var c = "";
            while (e) {
                if (e.substr(0, 3) === "../" || e.substr(0, 2) === "./") {
                    e = e.replace(/^\.+/, "").substr(1)
                } else {
                    if (e.substr(0, 3) === "/./" || e === "/.") {
                        e = "/" + e.substr(3)
                    } else {
                        if (e.substr(0, 4) === "/../" || e === "/..") {
                            e = "/" + e.substr(4);
                            c = c.replace(/\/?[^\/]*$/, "")
                        } else {
                            if (e === "." || e === "..") {
                                e = ""
                            } else {
                                var d = e.match(/^\/?[^\/]*/)[0];
                                e = e.substr(d.length);
                                c = c + d
                            }
                        }
                    }
                }
            }
            return c
        }
        if (a) {
            this.parse(a)
        }
    },
    color: function(G, d) {
        this.required = true;
        this.adjust = true;
        this.hash = false;
        this.caps = true;
        this.slider = true;
        this.valueElement = G;
        this.styleElement = G;
        this.onImmediateChange = null;
        this.hsv = [0, 0, 1];
        this.rgb = [1, 1, 1];
        this.minH = 0;
        this.maxH = 6;
        this.minS = 0;
        this.maxS = 1;
        this.minV = 0;
        this.maxV = 1;
        this.pickerOnfocus = true;
        this.pickerMode = "HSV";
        this.pickerPosition = "bottom";
        this.pickerSmartPosition = true;
        this.pickerButtonHeight = 20;
        this.pickerClosable = false;
        this.pickerCloseText = "Close";
        this.pickerButtonColor = "ButtonText";
        this.pickerFace = 5;
        this.pickerFaceColor = "#222";
        this.pickerBorder = 1;
        this.pickerBorderColor = "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight";
        this.pickerInset = 1;
        this.pickerInsetColor = "#555 #555 #333 #333";
        this.pickerZIndex = 10000;
        for (var v in d) {
            if (d.hasOwnProperty(v)) {
                this[v] = d[v]
            }
        }
        this.hidePicker = function() {
            if (z()) {
                g()
            }
        };
        this.showPicker = function() {
            if (!z()) {
                var P = jc.getElementPos(G);
                var M = jc.getElementSize(G);
                var J = jc.getViewPos();
                var R = jc.getViewSize();
                var p = x(this);
                var Q, O, N;
                switch (this.pickerPosition.toLowerCase()) {
                    case "left":
                        Q = 1;
                        O = 0;
                        N = -1;
                        break;
                    case "right":
                        Q = 1;
                        O = 0;
                        N = 1;
                        break;
                    case "top":
                        Q = 0;
                        O = 1;
                        N = -1;
                        break;
                    default:
                        Q = 0;
                        O = 1;
                        N = 1;
                        break
                }
                var L = (M[O] + p[O]) / 2;
                if (!this.pickerSmartPosition) {
                    var K = [P[Q], P[O] + M[O] - L + L * N]
                } else {
                    var K = [-J[Q] + P[Q] + p[Q] > R[Q] ? (-J[Q] + P[Q] + M[Q] / 2 > R[Q] / 2 && P[Q] + M[Q] - p[Q] >= 0 ? P[Q] + M[Q] - p[Q] : P[Q]) : P[Q], -J[O] + P[O] + M[O] + p[O] - L + L * N > R[O] ? (-J[O] + P[O] + M[O] / 2 > R[O] / 2 && P[O] + M[O] - L - L * N >= 0 ? P[O] + M[O] - L - L * N : P[O] + M[O] - L + L * N) : (P[O] + M[O] - L + L * N >= 0 ? P[O] + M[O] - L + L * N : P[O] + M[O] - L - L * N)]
                }
                m(K[Q], K[O])
            }
        };
        this.importColor = function() {
            if (!a) {
                this.exportColor()
            } else {
                if (!this.adjust) {
                    if (!this.fromString(a.value, C)) {
                        I.style.backgroundImage = I.jscStyle.backgroundImage;
                        I.style.backgroundColor = I.jscStyle.backgroundColor;
                        I.style.color = I.jscStyle.color;
                        this.exportColor(C | H)
                    }
                } else {
                    if (!this.required && /^\s*$/.test(a.value)) {
                        a.value = "";
                        I.style.backgroundImage = I.jscStyle.backgroundImage;
                        I.style.backgroundColor = I.jscStyle.backgroundColor;
                        I.style.color = I.jscStyle.color;
                        this.exportColor(C | H)
                    } else {
                        if (this.fromString(a.value)) {} else {
                            this.exportColor()
                        }
                    }
                }
            }
        };
        this.exportColor = function(p) {
            if (!(p & C) && a) {
                var J = this.toString();
                if (this.caps) {
                    J = J.toUpperCase()
                }
                if (this.hash) {
                    J = "#" + J
                }
                a.value = J
            }
            if (!(p & H) && I) {
                I.style.backgroundImage = "none";
                I.style.backgroundColor = "#" + this.toString();
                I.style.color = 0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] < 0.5 ? "#FFF" : "#000"
            }
            if (!(p & A) && z()) {
                u()
            }
            if (!(p & e) && z()) {
                F()
            }
        };
        this.fromHSV = function(L, K, J, p) {
            if (L !== null) {
                L = Math.max(0, this.minH, Math.min(6, this.maxH, L))
            }
            if (K !== null) {
                K = Math.max(0, this.minS, Math.min(1, this.maxS, K))
            }
            if (J !== null) {
                J = Math.max(0, this.minV, Math.min(1, this.maxV, J))
            }
            this.rgb = j(L === null ? this.hsv[0] : (this.hsv[0] = L), K === null ? this.hsv[1] : (this.hsv[1] = K), J === null ? this.hsv[2] : (this.hsv[2] = J));
            this.exportColor(p)
        };
        this.fromRGB = function(N, M, p, J) {
            if (N !== null) {
                N = Math.max(0, Math.min(1, N))
            }
            if (M !== null) {
                M = Math.max(0, Math.min(1, M))
            }
            if (p !== null) {
                p = Math.max(0, Math.min(1, p))
            }
            var L = D(N === null ? this.rgb[0] : N, M === null ? this.rgb[1] : M, p === null ? this.rgb[2] : p);
            if (L[0] !== null) {
                this.hsv[0] = Math.max(0, this.minH, Math.min(6, this.maxH, L[0]))
            }
            if (L[2] !== 0) {
                this.hsv[1] = L[1] === null ? null : Math.max(0, this.minS, Math.min(1, this.maxS, L[1]))
            }
            this.hsv[2] = L[2] === null ? null : Math.max(0, this.minV, Math.min(1, this.maxV, L[2]));
            var K = j(this.hsv[0], this.hsv[1], this.hsv[2]);
            this.rgb[0] = K[0];
            this.rgb[1] = K[1];
            this.rgb[2] = K[2];
            this.exportColor(J)
        };
        this.fromString = function(K, J) {
            var p = K.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
            if (!p) {
                return false
            } else {
                if (p[1].length === 6) {
                    this.fromRGB(parseInt(p[1].substr(0, 2), 16) / 255, parseInt(p[1].substr(2, 2), 16) / 255, parseInt(p[1].substr(4, 2), 16) / 255, J)
                } else {
                    this.fromRGB(parseInt(p[1].charAt(0) + p[1].charAt(0), 16) / 255, parseInt(p[1].charAt(1) + p[1].charAt(1), 16) / 255, parseInt(p[1].charAt(2) + p[1].charAt(2), 16) / 255, J)
                }
                return true
            }
        };
        this.toString = function() {
            return ((256 | Math.round(255 * this.rgb[0])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[1])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[2])).toString(16).substr(1))
        };

        function D(N, M, J) {
            var O = Math.min(Math.min(N, M), J);
            var K = Math.max(Math.max(N, M), J);
            var p = K - O;
            if (p === 0) {
                return [null, 0, K]
            }
            var L = N === O ? 3 + (J - M) / p : (M === O ? 5 + (N - J) / p : 1 + (M - N) / p);
            return [L === 6 ? 0 : L, p / K, K]
        }

        function j(M, L, J) {
            if (M === null) {
                return [J, J, J]
            }
            var K = Math.floor(M);
            var N = K % 2 ? M - K : 1 - (M - K);
            var p = J * (1 - L);
            var O = J * (1 - L * N);
            switch (K) {
                case 6:
                case 0:
                    return [J, O, p];
                case 1:
                    return [O, J, p];
                case 2:
                    return [p, J, O];
                case 3:
                    return [p, O, J];
                case 4:
                    return [O, p, J];
                case 5:
                    return [J, p, O]
            }
        }

        function g() {
            delete jc.picker.owner;
            document.getElementsByTagName("body")[0].removeChild(jc.picker.boxB)
        }

        function m(Q, P) {
            if (!jc.picker) {
                jc.picker = {
                    box: document.createElement("div"),
                    boxB: document.createElement("div"),
                    pad: document.createElement("div"),
                    padB: document.createElement("div"),
                    padM: document.createElement("div"),
                    sld: document.createElement("div"),
                    sldB: document.createElement("div"),
                    sldM: document.createElement("div"),
                    btn: document.createElement("div"),
                    btnS: document.createElement("span"),
                    btnT: document.createTextNode(n.pickerCloseText)
                };
                for (var N = 0, O = 4; N < jc.images.sld[1]; N += O) {
                    var M = document.createElement("div");
                    M.style.height = O + "px";
                    M.style.fontSize = "1px";
                    M.style.lineHeight = "0";
                    jc.picker.sld.appendChild(M)
                }
                jc.picker.sldB.appendChild(jc.picker.sld);
                jc.picker.box.appendChild(jc.picker.sldB);
                jc.picker.box.appendChild(jc.picker.sldM);
                jc.picker.padB.appendChild(jc.picker.pad);
                jc.picker.box.appendChild(jc.picker.padB);
                jc.picker.box.appendChild(jc.picker.padM);
                jc.picker.btnS.appendChild(jc.picker.btnT);
                jc.picker.btn.appendChild(jc.picker.btnS);
                jc.picker.box.appendChild(jc.picker.btn);
                jc.picker.boxB.appendChild(jc.picker.box)
            }
            var J = jc.picker;
            J.box.onmouseup = J.box.onmouseout = function() {
                G.focus()
            };
            J.box.onmousedown = function() {
                q = true
            };
            J.box.onmousemove = function(p) {
                if (c || r) {
                    c && B(p);
                    r && k(p);
                    if (document.selection) {
                        document.selection.empty()
                    } else {
                        if (window.getSelection) {
                            window.getSelection().removeAllRanges()
                        }
                    }
                    f()
                }
            };
            if ("ontouchstart" in window) {
                J.box.addEventListener("touchmove", function(T) {
                    var p = {
                        offsetX: T.touches[0].pageX - l.X,
                        offsetY: T.touches[0].pageY - l.Y
                    };
                    if (c || r) {
                        c && B(p);
                        r && k(p);
                        f()
                    }
                    T.stopPropagation();
                    T.preventDefault()
                }, false)
            }
            J.padM.onmouseup = J.padM.onmouseout = function() {
                if (c) {
                    c = false;
                    jc.fireEvent(a, "change")
                }
            };
            J.padM.onmousedown = function(p) {
                switch (b) {
                    case 0:
                        if (n.hsv[2] === 0) {
                            n.fromHSV(null, null, 1)
                        }
                        break;
                    case 1:
                        if (n.hsv[1] === 0) {
                            n.fromHSV(null, 1, null)
                        }
                        break
                }
                r = false;
                c = true;
                B(p);
                f()
            };
            if ("ontouchstart" in window) {
                J.padM.addEventListener("touchstart", function(p) {
                    l = {
                        X: p.target.offsetParent.offsetLeft,
                        Y: p.target.offsetParent.offsetTop
                    };
                    this.onmousedown({
                        offsetX: p.touches[0].pageX - l.X,
                        offsetY: p.touches[0].pageY - l.Y
                    })
                })
            }
            J.sldM.onmouseup = J.sldM.onmouseout = function() {
                if (r) {
                    r = false;
                    jc.fireEvent(a, "change")
                }
            };
            J.sldM.onmousedown = function(p) {
                c = false;
                r = true;
                k(p);
                f()
            };
            if ("ontouchstart" in window) {
                J.sldM.addEventListener("touchstart", function(p) {
                    l = {
                        X: p.target.offsetParent.offsetLeft,
                        Y: p.target.offsetParent.offsetTop
                    };
                    this.onmousedown({
                        offsetX: p.touches[0].pageX - l.X,
                        offsetY: p.touches[0].pageY - l.Y
                    })
                })
            }
            var S = x(n);
            J.box.style.width = S[0] + "px";
            J.box.style.height = S[1] + "px";
            J.boxB.style.position = "absolute";
            J.boxB.style.clear = "both";
            J.boxB.style.left = Q + "px";
            J.boxB.style.top = P + "px";
            J.boxB.style.zIndex = n.pickerZIndex;
            J.boxB.style.border = n.pickerBorder + "px solid";
            J.boxB.style.borderColor = n.pickerBorderColor;
            J.boxB.style.background = n.pickerFaceColor;
            J.pad.style.width = jc.images.pad[0] + "px";
            J.pad.style.height = jc.images.pad[1] + "px";
            J.padB.style.position = "absolute";
            J.padB.style.left = n.pickerFace + "px";
            J.padB.style.top = n.pickerFace + "px";
            J.padB.style.border = n.pickerInset + "px solid";
            J.padB.style.borderColor = n.pickerInsetColor;
            J.padM.style.position = "absolute";
            J.padM.style.left = "0";
            J.padM.style.top = "0";
            J.padM.style.width = n.pickerFace + 2 * n.pickerInset + jc.images.pad[0] + jc.images.arrow[0] + "px";
            J.padM.style.height = J.box.style.height;
            J.padM.style.cursor = "crosshair";
            J.sld.style.overflow = "hidden";
            J.sld.style.width = jc.images.sld[0] + "px";
            J.sld.style.height = jc.images.sld[1] + "px";
            J.sldB.style.display = n.slider ? "block" : "none";
            J.sldB.style.position = "absolute";
            J.sldB.style.right = n.pickerFace + "px";
            J.sldB.style.top = n.pickerFace + "px";
            J.sldB.style.border = n.pickerInset + "px solid";
            J.sldB.style.borderColor = n.pickerInsetColor;
            J.sldM.style.display = n.slider ? "block" : "none";
            J.sldM.style.position = "absolute";
            J.sldM.style.right = "0";
            J.sldM.style.top = "0";
            J.sldM.style.width = jc.images.sld[0] + jc.images.arrow[0] + n.pickerFace + 2 * n.pickerInset + "px";
            J.sldM.style.height = J.box.style.height;
            try {
                J.sldM.style.cursor = "pointer"
            } catch (L) {
                J.sldM.style.cursor = "hand"
            }

            function R() {
                var p = n.pickerInsetColor.split(/\s+/);
                var T = p.length < 2 ? p[0] : p[1] + " " + p[0] + " " + p[0] + " " + p[1];
                J.btn.style.borderColor = T
            }
            J.btn.style.display = n.pickerClosable ? "block" : "none";
            J.btn.style.position = "absolute";
            J.btn.style.left = n.pickerFace + "px";
            J.btn.style.bottom = n.pickerFace + "px";
            J.btn.style.padding = "0 15px";
            J.btn.style.height = "18px";
            J.btn.style.border = n.pickerInset + "px solid";
            R();
            J.btn.style.color = n.pickerButtonColor;
            J.btn.style.font = "12px sans-serif";
            J.btn.style.textAlign = "center";
            try {
                J.btn.style.cursor = "pointer"
            } catch (L) {
                J.btn.style.cursor = "hand"
            }
            J.btn.onmousedown = function() {
                n.hidePicker()
            };
            J.btnS.style.lineHeight = J.btn.style.height;
            switch (b) {
                case 0:
                    var K = "hs.png";
                    break;
                case 1:
                    var K = "hv.png";
                    break
            }
            J.padM.style.backgroundImage = "url('" + jc.getDir() + "cross.gif')";
            J.padM.style.backgroundRepeat = "no-repeat";
            J.sldM.style.backgroundImage = "url('" + jc.getDir() + "arrow.gif')";
            J.sldM.style.backgroundRepeat = "no-repeat";
            J.pad.style.backgroundImage = "url('" + jc.getDir() + K + "')";
            J.pad.style.backgroundRepeat = "no-repeat";
            J.pad.style.backgroundPosition = "0 0";
            u();
            F();
            jc.picker.owner = n;
            document.getElementsByTagName("body")[0].appendChild(J.boxB)
        }

        function x(J) {
            var p = [2 * J.pickerInset + 2 * J.pickerFace + jc.images.pad[0] + (J.slider ? 2 * J.pickerInset + 2 * jc.images.arrow[0] + jc.images.sld[0] : 0), J.pickerClosable ? 4 * J.pickerInset + 3 * J.pickerFace + jc.images.pad[1] + J.pickerButtonHeight : 2 * J.pickerInset + 2 * J.pickerFace + jc.images.pad[1]];
            return p
        }

        function u() {
            switch (b) {
                case 0:
                    var L = 1;
                    break;
                case 1:
                    var L = 2;
                    break
            }
            var P = Math.round((n.hsv[0] / 6) * (jc.images.pad[0] - 1));
            var O = Math.round((1 - n.hsv[L]) * (jc.images.pad[1] - 1));
            jc.picker.padM.style.backgroundPosition = (n.pickerFace + n.pickerInset + P - Math.floor(jc.images.cross[0] / 2)) + "px " + (n.pickerFace + n.pickerInset + O - Math.floor(jc.images.cross[1] / 2)) + "px";
            var p = jc.picker.sld.childNodes;
            switch (b) {
                case 0:
                    var N = j(n.hsv[0], n.hsv[1], 1);
                    for (var J = 0; J < p.length; J += 1) {
                        p[J].style.backgroundColor = "rgb(" + (N[0] * (1 - J / p.length) * 100) + "%," + (N[1] * (1 - J / p.length) * 100) + "%," + (N[2] * (1 - J / p.length) * 100) + "%)"
                    }
                    break;
                case 1:
                    var N, Q, M = [n.hsv[2], 0, 0];
                    var J = Math.floor(n.hsv[0]);
                    var K = J % 2 ? n.hsv[0] - J : 1 - (n.hsv[0] - J);
                    switch (J) {
                        case 6:
                        case 0:
                            N = [0, 1, 2];
                            break;
                        case 1:
                            N = [1, 0, 2];
                            break;
                        case 2:
                            N = [2, 0, 1];
                            break;
                        case 3:
                            N = [2, 1, 0];
                            break;
                        case 4:
                            N = [1, 2, 0];
                            break;
                        case 5:
                            N = [0, 2, 1];
                            break
                    }
                    for (var J = 0; J < p.length; J += 1) {
                        Q = 1 - 1 / (p.length - 1) * J;
                        M[1] = M[0] * (1 - Q * K);
                        M[2] = M[0] * (1 - Q);
                        p[J].style.backgroundColor = "rgb(" + (M[N[0]] * 100) + "%," + (M[N[1]] * 100) + "%," + (M[N[2]] * 100) + "%)"
                    }
                    break
            }
        }

        function F() {
            switch (b) {
                case 0:
                    var p = 2;
                    break;
                case 1:
                    var p = 1;
                    break
            }
            var J = Math.round((1 - n.hsv[p]) * (jc.images.sld[1] - 1));
            jc.picker.sldM.style.backgroundPosition = "0 " + (n.pickerFace + n.pickerInset + J - Math.floor(jc.images.arrow[1] / 2)) + "px"
        }

        function z() {
            return jc.picker && jc.picker.owner === n
        }

        function t() {
            if (a === G) {
                n.importColor()
            }
            if (n.pickerOnfocus) {
                n.hidePicker()
            }
        }

        function o() {
            if (a !== G) {
                n.importColor()
            }
        }

        function B(K) {
            var J = jc.getRelMousePos(K);
            var p = J.x - n.pickerFace - n.pickerInset;
            var L = J.y - n.pickerFace - n.pickerInset;
            switch (b) {
                case 0:
                    n.fromHSV(p * (6 / (jc.images.pad[0] - 1)), 1 - L / (jc.images.pad[1] - 1), null, e);
                    break;
                case 1:
                    n.fromHSV(p * (6 / (jc.images.pad[0] - 1)), null, 1 - L / (jc.images.pad[1] - 1), e);
                    break
            }
        }

        function k(J) {
            var p = jc.getRelMousePos(J);
            var K = p.y - n.pickerFace - n.pickerInset;
            switch (b) {
                case 0:
                    n.fromHSV(null, null, 1 - K / (jc.images.sld[1] - 1), A);
                    break;
                case 1:
                    n.fromHSV(null, 1 - K / (jc.images.sld[1] - 1), null, A);
                    break
            }
        }

        function f() {
            if (n.onImmediateChange) {
                var p;
                if (typeof n.onImmediateChange === "string") {
                    p = new Function(n.onImmediateChange)
                } else {
                    p = n.onImmediateChange
                }
                p.call(n)
            }
        }
        var n = this;
        var b = this.pickerMode.toLowerCase() === "hvs" ? 1 : 0;
        var q = false;
        var a = jc.fetchElement(this.valueElement),
            I = jc.fetchElement(this.styleElement);
        var c = false,
            r = false,
            l = {};
        var C = 1 << 0,
            H = 1 << 1,
            A = 1 << 2,
            e = 1 << 3;
        jc.addEvent(G, "focus", function() {
            if (n.pickerOnfocus) {
                n.showPicker()
            }
        });
        jc.addEvent(G, "blur", function() {
            if (!q) {
                window.setTimeout(function() {
                    q || t();
                    q = false
                }, 0)
            } else {
                q = false
            }
        });
        if (a) {
            var E = function() {
                n.fromString(a.value, C);
                f()
            };
            jc.addEvent(a, "keyup", E);
            jc.addEvent(a, "input", E);
            jc.addEvent(a, "blur", o);
            a.setAttribute("autocomplete", "off")
        }
        if (I) {
            I.jscStyle = {
                backgroundImage: I.style.backgroundImage,
                backgroundColor: I.style.backgroundColor,
                color: I.style.color
            }
        }
        switch (b) {
            case 0:
                jc.requireImage("hs.png");
                break;
            case 1:
                jc.requireImage("hv.png");
                break
        }
        jc.requireImage("cross.gif");
        jc.requireImage("arrow.gif");
        this.importColor()
    }
};
jc.install();
/*  droparea jQuery Plugin @v 1.1.1 @l MIT | gokercebeci.com/dev/droparea @modified passk.it */
(function(f) {
    var d;
    var e = {
        init: function() {},
        start: function() {},
        complete: function() {},
        error: function() {
            return 0
        },
        traverse: function(a, j, b) {
            if (typeof a !== "undefined") {
                for (var c = 0, k = a.length; c < k; c++) {
                    e.control(a[c], j, b)
                }
            } else {
                b.html(d.nosupport)
            }
        },
        control: function(b, c, a) {
            if (b.size > (d.maxsize * 1048576)) {
                d.error({
                    error: "<p>The maximum file size is: " + d.maxsize * 1024 + "Kb</p><!--<span>Please drag an image<br />or click here</span>-->"
                }, c, a);
                return false
            }
            if ((/image/i).test(b.type) && c.data("canvas")) {
                e.resize(b, c, a)
            } else {
                e.upload(b, c, a)
            }
        },
        upload: function(n, r, c) {
            c.find("div").empty();
            var q = f("<div>", {
                "class": "progress"
            });
            c.append(q);
            try {
                var a = new XMLHttpRequest()
            } catch (b) {
                try {
                    var a = new ActiveXObject("Msxml2.XMLHTTP")
                } catch (b) {
                    try {
                        var a = new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (b) {
                        alert("Your browser sucks!");
                        return false
                    }
                }
            }
            a.open("post", r.data("post"), true);
            a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            a.upload.addEventListener("progress", function(j) {
                if (j.lengthComputable) {
                    var g = Math.ceil((j.loaded / j.total) * 100);
                    q.css({
                        height: g + "%",
                        "line-height": (c.height() * g / 100) + "px"
                    }).html((g < 100) ? g + "%" : "Processing Image&hellip;")
                }
            }, false);
            a.addEventListener("load", function(j) {
                var g = jQuery.parseJSON(j.target.responseText);
                d.complete(g, n, r, c);
                q.addClass("uploaded");
                q.html(d.uploaded).fadeOut("slow")
            }, false);
            var o = new FormData();
            for (var p in r.data()) {
                if (typeof r.data(p) !== "object") {
                    o.append(p, r.data(p))
                }
            }
            o.append(r.attr("name"), n);
            a.send(o)
        },
    };
    f.fn.droparea = function(a) {
        d = {
            init: e.init,
            start: e.start,
            complete: e.complete,
            instructions: "<p>Please drag an image<br />or click here</p>",
            over: "<p>Drop image here!</p>",
            nosupport: "<p>Sorry, your browser doesn't support drag and drop yet!</p>",
            noimage: "Please upload only image files!",
            uploaded: "Uploaded",
            maxsize: "1.5"
        };
        if (a) {
            f.extend(d, a)
        }
        this.each(function() {
            var b = f('<div class="' + f(this).attr("class") + '">').insertAfter(f(this));
            var j = f("<div>").appendTo(b);
            var c = f(this).appendTo(b);
            d.init(f(this));
            if (c.data("p") && c.data("p").length) {
                f('<img src="' + c.data("p") + '">').appendTo(b)
            } else {
                j.addClass("instructions").html(d.instructions)
            }
            f(document).on({
                dragleave: function(g) {
                    g.preventDefault();
                    if (c.data("p") || b.find("img").length || b.find(".error").length) {
                        j.removeClass("over").empty()
                    } else {
                        j.removeClass("over").html(d.instructions)
                    }
                },
                drop: function(g) {
                    g.preventDefault();
                    if (c.data("p") || b.find("img").length || b.find(".error").length) {
                        j.removeClass("over").empty()
                    } else {
                        j.removeClass("over").html(d.instructions)
                    }
                },
                dragenter: function(g) {
                    g.preventDefault();
                    j.addClass("instructions over").html(d.over)
                },
                dragover: function(g) {
                    g.preventDefault();
                    j.addClass("instructions over").html(d.over)
                }
            });
            this.addEventListener("drop", function(g) {
                g.preventDefault();
                d.start(f(this));
                e.traverse(g.dataTransfer.files, c, b);
                j.removeClass("over").empty()
            }, false);
            c.change(function(g) {
                e.traverse(g.target.files, c, b);
                j.removeClass("over").empty()
            })
        })
    }
})(jQuery);
/*  jQuery HTML5 Details Fallback @v 0.0.6 @l MIT/GPL2 | @mathias | mths.be/details includes mths.be/noselect v1.0.3 */
(function(j, l) {
    var m = l.fn,
        n, o = Object.prototype.toString.call(window.opera) == "[object Opera]",
        k = (function(a) {
            var c = a.createElement("details"),
                d, e, b;
            if (!("open" in c)) {
                return false
            }
            e = a.body || (function() {
                var f = a.documentElement;
                d = true;
                return f.insertBefore(a.createElement("body"), f.firstElementChild || f.firstChild)
            }());
            c.innerHTML = "<summary>a</summary>b";
            c.style.display = "block";
            e.appendChild(c);
            b = c.offsetHeight;
            c.open = true;
            b = b != c.offsetHeight;
            e.removeChild(c);
            if (d) {
                e.parentNode.removeChild(e)
            }
            return b
        }(j)),
        g = function(e, b, c, f) {
            var d = typeof e.attr("open") == "string",
                a = d && f || !d && !f;
            if (a) {
                e.removeClass("open").prop("open", false).triggerHandler("close.details");
                b.attr("aria-expanded", false);
                c.hide()
            } else {
                e.addClass("open").prop("open", true).triggerHandler("open.details");
                b.attr("aria-expanded", true);
                c.show()
            }
        };
    m.noSelect = function() {
        var a = "none";
        return this.bind("selectstart dragstart mousedown", function() {
            return false
        }).css({
            MozUserSelect: a,
            msUserSelect: a,
            webkitUserSelect: a,
            userSelect: a
        })
    };
    if (k) {
        n = m.details = function() {
            return this.each(function() {
                var a = l(this),
                    b = l("summary", a).first();
                b.attr({
                    role: "button",
                    "aria-expanded": a.prop("open")
                }).on("click", function() {
                    var c = a.prop("open");
                    b.attr("aria-expanded", !c);
                    a.triggerHandler((c ? "close" : "open") + ".details")
                })
            })
        };
        n.support = k
    } else {
        n = m.details = function() {
            return this.each(function() {
                var d = l(this),
                    b = l("summary", d).first(),
                    c = d.children(":not(summary)"),
                    a = d.contents(":not(summary)");
                if (!b.length) {
                    b = l("<summary>").text("Details").prependTo(d)
                }
                if (c.length != a.length) {
                    a.filter(function() {
                        return this.nodeType == 3 && /[^ \t\n\f\r]/.test(this.data)
                    }).wrap("<span>");
                    c = d.children(":not(summary)")
                }
                g(d, b, c);
                b.attr("role", "button").noSelect().prop("tabIndex", 0).on("click", function() {
                    b.focus();
                    g(d, b, c, true)
                }).keyup(function(e) {
                    if (32 == e.keyCode || (13 == e.keyCode && !o)) {
                        e.preventDefault();
                        b.click()
                    }
                })
            })
        };
        n.support = k
    }
}(document, jQuery));
/*  jQuery Tipsy @v 0.1.7 @l MIT | onehackoranother.com/projects/jquery/tipsy @modified passk.it */
(function(f) {
    function d(a, b) {
        return (typeof a == "function") ? (a.call(b)) : a
    }

    function e(a, b) {
        this.$element = f(a);
        this.options = b;
        this.enabled = true;
        this.fixTitle()
    }
    e.prototype = {
        show: function() {
            var k = this.getTitle();
            if (k && this.enabled) {
                var l = this.tip();
                l.find(".tipsy-inner")[this.options.html ? "html" : "text"](k);
                l[0].className = "tipsy";
                l.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var a = f.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var n = l[0].offsetWidth,
                    b = l[0].offsetHeight,
                    c = d(this.options.gravity, this.$element[0]);
                var m;
                switch (c.charAt(0)) {
                    case "n":
                        m = {
                            top: a.top + a.height + this.options.offset,
                            left: a.left + a.width / 2 - n / 2
                        };
                        break;
                    case "s":
                        m = {
                            top: a.top - b - this.options.offset,
                            left: a.left + a.width / 2 - n / 2
                        };
                        break;
                    case "e":
                        m = {
                            top: a.top + a.height / 2 - b / 2,
                            left: a.left - n - this.options.offset
                        };
                        break;
                    case "w":
                        m = {
                            top: a.top + a.height / 2 - b / 2,
                            left: a.left + a.width + this.options.offset
                        };
                        break
                }
                if (c.length == 2) {
                    if (c.charAt(1) == "w") {
                        m.left = a.left + a.width / 2 - 15
                    } else {
                        m.left = a.left + a.width / 2 - n + 15
                    }
                }
                l.css(m).addClass("tipsy-" + c);
                l.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + c.charAt(0);
                if (this.options.className) {
                    l.addClass(d(this.options.className, this.$element[0]))
                }
                if (this.options.fade) {
                    l.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    })
                } else {
                    l.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    })
                }
            }
        },
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() {
                    f(this).remove()
                })
            } else {
                this.tip().remove()
            }
        },
        fixTitle: function() {
            var a = this.$element;
            if (a.attr("title") || typeof(a.attr("data-tip")) != "string") {
                a.attr("data-tip", a.attr("title") || "").removeAttr("title")
            }
        },
        getTitle: function() {
            var a, c = this.$element,
                b = this.options;
            this.fixTitle();
            var a, b = this.options;
            if (typeof b.title == "string") {
                a = c.attr(b.title == "title" ? "data-tip" : b.title)
            } else {
                if (typeof b.title == "function") {
                    a = b.title.call(c[0])
                }
            }
            a = ("" + a).replace(/(^\s*|\s*$)/, "");
            return a || b.fallback
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = f('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')
            }
            return this.$tip
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null
            }
        },
        enable: function() {
            this.enabled = true
        },
        disable: function() {
            this.enabled = false
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        }
    };
    f.fn.tipsy = function(l) {
        if (l === true) {
            return this.data("tipsy")
        } else {
            if (typeof l == "string") {
                var b = this.data("tipsy");
                if (b) {
                    b[l]()
                }
                return this
            }
        }
        l = f.extend({}, f.fn.tipsy.defaults, l);

        function m(j) {
            var g = f.data(j, "tipsy");
            if (!g) {
                g = new e(j, f.fn.tipsy.elementOptions(j, l));
                f.data(j, "tipsy", g)
            }
            return g
        }

        function a() {
            var g = m(this);
            g.hoverState = "in";
            if (l.delayIn == 0) {
                g.show()
            } else {
                g.fixTitle();
                setTimeout(function() {
                    if (g.hoverState == "in") {
                        g.show()
                    }
                }, l.delayIn)
            }
        }

        function n() {
            var g = m(this);
            g.hoverState = "out";
            if (l.delayOut == 0) {
                g.hide()
            } else {
                setTimeout(function() {
                    if (g.hoverState == "out") {
                        g.hide()
                    }
                }, l.delayOut)
            }
        }
        if (!l.live) {
            this.each(function() {
                m(this)
            })
        }
        if (l.trigger != "manual") {
            var p = l.live ? "live" : "bind",
                c = l.trigger == "hover" ? "mouseenter" : "focus",
                o = l.trigger == "hover" ? "mouseleave" : "blur";
            this[p](c, a)[p](o, n)
        }
        return this
    };
    f.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: "",
        gravity: "n",
        html: false,
        live: false,
        offset: 0,
        opacity: 0.9,
        title: "title",
        trigger: "hover"
    };
    f.fn.tipsy.elementOptions = function(a, b) {
        return f.metadata ? f.extend({}, b, f(a).metadata()) : b
    };
    f.fn.tipsy.autoNS = function() {
        return f(this).offset().top > (f(document).scrollTop() + f(window).height() / 2) ? "s" : "n"
    };
    f.fn.tipsy.autoWE = function() {
        return f(this).offset().left > (f(document).scrollLeft() + f(window).width() / 2) ? "e" : "w"
    };
    f.fn.tipsy.autoBounds = function(a, b) {
        return function() {
            var l = {
                    ns: b[0],
                    ew: (b.length > 1 ? b[1] : false)
                },
                c = f(document).scrollTop() + a,
                k = f(document).scrollLeft() + a,
                j = f(this);
            if (j.offset().top < c) {
                l.ns = "n"
            }
            if (j.offset().left < k) {
                l.ew = "w"
            }
            if (f(window).width() + f(document).scrollLeft() - j.offset().left < a) {
                l.ew = "e"
            }
            if (f(window).height() + f(document).scrollTop() - j.offset().top < a) {
                l.ns = "s"
            }
            return l.ns + (l.ew ? l.ew : "")
        }
    }
})(jQuery);
/*  jQuery MobiScroll @v 2.0 @l MIT | mobiscroll.com @modified passk.it */
(function(aj) {
    function Y(p, b) {
        var o = this,
            c = p,
            p = aj(c),
            a, j = aj.extend({}, af),
            g, l, q = {},
            x = {},
            m = p.is("input, textarea"),
            r = false;

        function n() {
            var B = document.body,
                A = document.documentElement;
            return Math.max(B.scrollHeight, B.offsetHeight, A.clientHeight, A.scrollHeight, A.offsetHeight)
        }

        function e(A) {
            Q = aj("li.dw-v", A).eq(0).index();
            K = aj("li.dw-v", A).eq(-1).index();
            I = j.height;
            an = o
        }

        function v(B) {
            var A = j.headerText;
            return A ? (typeof(A) == "function" ? A.call(c, B) : A.replace(/{value}/i, B)) : ""
        }

        function f() {
            o.temp = ((m && o.val !== null && o.val != p.val()) || o.values === null) ? j.parseValue(p.val() ? p.val() : "", o) : o.values.slice(0);
            o.setValue(true)
        }

        function k(B, A, D, C, E) {
            j.validate.call(c, l, D);
            aj(".dww ul", l).each(function(ap) {
                var aq = aj(this),
                    F = aj('li[data-val="' + o.temp[ap] + '"]', aq),
                    G = F.index(),
                    ar = t(F, G, ap, E),
                    H = ap == D || D === undefined;
                if (G != ar || H) {
                    o.scroll(aj(this), ar, H ? B : 0, A, ap)
                }
            });
            o.change(C)
        }

        function t(G, H, C, D) {
            if (!G.hasClass("dw-v")) {
                var E = G,
                    F = G,
                    A = 0,
                    B = 0;
                while (E.prev().length && !E.hasClass("dw-v")) {
                    E = E.prev();
                    A++
                }
                while (F.next().length && !F.hasClass("dw-v")) {
                    F = F.next();
                    B++
                }
                if (((B < A && B && !D == 1) || !A || !E.hasClass("dw-v") || D == 1) && F.hasClass("dw-v")) {
                    G = F;
                    H = H + B
                } else {
                    G = E;
                    H = H - A
                }
                o.temp[C] = G.data("val")
            }
            return H
        }

        function z() {
            var A = 0,
                B = 0,
                G = aj(window).width(),
                ap = aj(window).height(),
                C = aj(window).scrollTop(),
                H = aj(".dwo", l),
                E = aj(".dw", l),
                D, F;
            aj(".dwc", l).each(function() {
                D = aj(this).outerWidth(true);
                A += D;
                B = (D > B) ? D : B
            });
            D = A > G ? B : A;
            E.width(D);
            D = E.outerWidth();
            F = E.outerHeight();
            E.css({
                left: (G - D) / 2,
                top: C + (ap - F) / 2
            });
            H.height(0).height(n())
        }

        function d(C) {
            var B = +C.data("pos"),
                A = B + 1;
            ao(C, A > K ? Q : A, 1)
        }

        function u(C) {
            var B = +C.data("pos"),
                A = B - 1;
            ao(C, A < Q ? K : A, 2)
        }
        o.enable = function() {
            j.disabled = false;
            if (m) {
                p.prop("disabled", false)
            }
        };
        o.disable = function() {
            j.disabled = true;
            if (m) {
                p.prop("disabled", true)
            }
        };
        o.scroll = function(D, A, B, H, G) {
            var E = (g - A) * j.height;
            D.attr("style", (B ? (L + "-transition:all " + B.toFixed(1) + "s ease-out;") : "") + (ad ? (L + "-transform:translate3d(0," + E + "px,0);") : ("top:" + E + "px;")));

            function C(ar, at, ap, aq) {
                return ap * Math.sin(ar / aq * (Math.PI / 2)) + at
            }
            if (B) {
                var F = 0;
                clearInterval(q[G]);
                q[G] = setInterval(function() {
                    F += 0.1;
                    D.data("pos", Math.round(C(F, H, A - H, B)));
                    if (F >= B) {
                        clearInterval(q[G]);
                        D.data("pos", A)
                    }
                }, 100);
                clearTimeout(x[G]);
                x[G] = setTimeout(function() {
                    if (j.mode == "mixed" && !D.hasClass("dwa")) {
                        D.closest(".dwwl").find(".dwwb").fadeIn("fast")
                    }
                }, B * 1000)
            } else {
                D.data("pos", A)
            }
        };
        o.setValue = function(A, B, C) {
            var D = j.formatResult(o.temp);
            o.val = D;
            o.values = o.temp.slice(0);
            if (r && A) {
                k(C)
            }
            if (B && m) {
                p.val(D).trigger("change")
            }
        };
        o.validate = function(B, A, C, D) {
            k(B, A, C, true, D)
        };
        o.change = function(A) {
            var B = j.formatResult(o.temp);
            if (j.display == "inline") {
                o.setValue(false, A)
            } else {
                aj(".dwv", l).html(v(B))
            }
            if (A) {
                j.onChange.call(c, B, o)
            }
        };
        o.hide = function() {
            if (j.onClose.call(c, o.val, o) === false) {
                return false
            }
            aj(".dwtd").prop("disabled", false).removeClass("dwtd");
            p.blur();
            if (l) {
                l.remove()
            }
            r = false;
            aj(window).unbind(".dw")
        };
        o.show = function() {
            if (j.disabled || r) {
                return false
            }
            var C = j.height,
                F = j.rows * C;
            f();
            var A = '<div class="' + j.theme + '">' + (j.display == "inline" ? '<div class="dw dwbg dwi"><div class="dwwr">' : '<div class="dwo"></div><div class="dw dwbg"><div class="dwwr">' + (j.headerText ? '<div class="dwv"></div>' : ""));
            for (var B = 0; B < j.wheels.length; B++) {
                A += '<div class="dwc' + (j.mode != "scroller" ? " dwpm" : " dwsc") + (j.showLabel ? "" : " dwhl") + '"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';
                for (var D in j.wheels[B]) {
                    A += '<td><div class="dwwl dwrc">' + (j.mode != "scroller" ? '<div class="dwwb dwwbp" style="height:' + C + "px;line-height:" + C + 'px;"><span>+</span></div><div class="dwwb dwwbm" style="height:' + C + "px;line-height:" + C + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + D + '</div><div class="dww dwrc" style="height:' + F + "px;min-width:" + j.width + 'px;"><ul>';
                    for (var E in j.wheels[B][D]) {
                        A += '<li class="dw-v" data-val="' + E + '" style="height:' + C + "px;line-height:" + C + 'px;">' + j.wheels[B][D][E] + "</li>"
                    }
                    A += '</ul><div class="dwwo"></div></div><div class="dwwol"></div></div></td>'
                }
                A += "</tr></table></div></div>"
            }
            A += (j.display != "inline" ? '<div class="dwbc"><span class="dwbw dwb-s"><a href="#" class="dwb">' + j.setText + '</a></span><span class="dwbw dwb-c"><a href="#" class="dwb">' + j.cancelText + "</a></span></div>" : '<div class="dwcc"></div>') + "</div></div></div>";
            l = aj(A);
            k();
            j.display != "inline" ? l.appendTo("body") : p.is("div") ? p.html(l) : l.insertAfter(p);
            r = true;
            a.init(l, o);
            if (j.display != "inline") {
                aj(".dwb-s a", l).click(function() {
                    o.setValue(false, true);
                    o.hide();
                    j.onSelect.call(c, o.val, o);
                    return false
                });
                aj(".dwb-c a", l).click(function() {
                    o.hide();
                    j.onCancel.call(c, o.val, o);
                    return false
                });
                aj("input,select").each(function() {
                    if (!aj(this).prop("disabled")) {
                        aj(this).addClass("dwtd")
                    }
                });
                aj("input,select").prop("disabled", true);
                z();
                aj(window).bind("resize.dw", z)
            }
            l.delegate(".dwwl", "DOMMouseScroll mousewheel", function(aq) {
                if (!j.readonly) {
                    aq.preventDefault();
                    aq = aq.originalEvent;
                    var H = aq.wheelDelta ? (aq.wheelDelta / 120) : (aq.detail ? (-aq.detail / 3) : 0),
                        G = aj("ul", this),
                        ar = +G.data("pos"),
                        ap = Math.round(ar - H);
                    e(G);
                    ao(G, ap, H < 0 ? 1 : 2)
                }
            }).delegate(".dwb, .dwwb", N, function(G) {
                aj(this).addClass("dwb-a")
            }).delegate(".dwwb", N, function(H) {
                if (!j.readonly) {
                    H.preventDefault();
                    H.stopPropagation();
                    var G = aj(this).closest(".dwwl").find("ul");
                    func = aj(this).hasClass("dwwbp") ? d : u;
                    e(G);
                    clearInterval(ac);
                    ac = setInterval(function() {
                        func(G)
                    }, j.delay);
                    func(G)
                }
            }).delegate(".dwwl", N, function(G) {
                if (!W && j.mode != "clickpick" && !j.readonly) {
                    G.preventDefault();
                    W = true;
                    O = aj("ul", this).addClass("dwa");
                    if (j.mode == "mixed") {
                        aj(".dwwb", this).fadeOut("fast")
                    }
                    ai = +O.data("pos");
                    e(O);
                    ak = aa(G);
                    Z = new Date();
                    U = ak;
                    o.scroll(O, ai)
                }
            });
            j.onShow.call(c, l, o)
        };
        o.init = function(C) {
            a = aj.extend({
                defaults: {},
                init: ag
            }, aj.scroller.themes[C.theme ? C.theme : j.theme]);
            aj.extend(j, a.defaults, b, C);
            o.settings = j;
            g = Math.floor(j.rows / 2);
            var B = aj.scroller.presets[j.preset];
            p.unbind(".dw");
            if (B) {
                var A = B.call(c, o);
                aj.extend(j, A, b, C);
                aj.extend(V, A.methods)
            }
            if (p.data("dwro") !== undefined) {
                c.readOnly = ab(p.data("dwro"))
            }
            if (r) {
                o.hide()
            }
            if (j.display == "inline") {
                o.show()
            } else {
                f();
                if (m && j.showOnFocus) {
                    p.data("dwro", c.readOnly);
                    c.readOnly = true;
                    p.bind("focus.dw", o.show)
                }
            }
        };
        o.values = null;
        o.val = null;
        o.temp = null;
        o.init(b)
    }

    function M(a) {
        for (var b in a) {
            if (P[a[b]] !== undefined) {
                return true
            }
        }
        return false
    }

    function am() {
        var b = ["Webkit", "Moz", "O", "ms"];
        for (var a in b) {
            if (M([b[a] + "Transform"])) {
                return "-" + b[a].toLowerCase()
            }
        }
        return ""
    }

    function S(a) {
        return ae[a.id]
    }

    function aa(a) {
        return ah ? (a.originalEvent ? a.originalEvent.changedTouches[0].pageY : a.changedTouches[0].pageY) : a.pageY
    }

    function ab(a) {
        return (a === true || a == "true")
    }

    function ao(b, g, d, a, f) {
        var c = b.closest(".dwwr").find("ul").index(b);
        g = g > K ? K : g;
        g = g < Q ? Q : g;
        var e = aj("li", b).eq(g);
        an.temp[c] = e.data("val");
        an.validate(a ? (g == f ? 0.1 : Math.abs((g - f) * 0.1)) : 0, f, c, d)
    }
    var ae = {},
        ac, ag = function() {},
        I, Q, K, an, R = new Date(),
        J = R.getTime(),
        W = false,
        O = null,
        ak, U, Z, al, ai, P = document.createElement(P).style,
        ad = M(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]) && "webkitPerspective" in document.documentElement.style,
        L = am(),
        ah = ("ontouchstart" in window),
        N = ah ? "touchstart" : "mousedown",
        T = ah ? "touchmove" : "mousemove",
        X = ah ? "touchend" : "mouseup",
        af = {
            width: 70,
            height: 40,
            rows: 3,
            delay: 300,
            disabled: false,
            readonly: false,
            showOnFocus: true,
            showLabel: true,
            wheels: [],
            theme: "",
            headerText: "{value}",
            display: "modal",
            mode: "scroller",
            preset: "",
            setText: "Set",
            cancelText: "Cancel",
            onShow: ag,
            onClose: ag,
            onSelect: ag,
            onCancel: ag,
            onChange: ag,
            formatResult: function(a) {
                var c = "";
                for (var b = 0; b < a.length; b++) {
                    c += (b > 0 ? " " : "") + a[b]
                }
                return c
            },
            parseValue: function(f, g) {
                var d = g.settings.wheels,
                    f = f.split(" "),
                    a = [],
                    b = 0;
                for (var j = 0; j < d.length; j++) {
                    for (var e in d[j]) {
                        if (d[j][e][f[b]] !== undefined) {
                            a.push(f[b])
                        } else {
                            for (var c in d[j][e]) {
                                a.push(c);
                                break
                            }
                        }
                        b++
                    }
                }
                return a
            },
            validate: ag
        },
        V = {
            init: function(a) {
                if (a === undefined) {
                    a = {}
                }
                return this.each(function() {
                    if (!this.id) {
                        J += 1;
                        this.id = "scoller" + J
                    }
                    ae[this.id] = new Y(this, a)
                })
            },
            enable: function() {
                return this.each(function() {
                    var a = S(this);
                    if (a) {
                        a.enable()
                    }
                })
            },
            disable: function() {
                return this.each(function() {
                    var a = S(this);
                    if (a) {
                        a.disable()
                    }
                })
            },
            isDisabled: function() {
                var a = S(this[0]);
                if (a) {
                    return a.settings.disabled
                }
            },
            option: function(b, a) {
                return this.each(function() {
                    var d = S(this);
                    if (d) {
                        var c = {};
                        if (typeof b === "object") {
                            c = b
                        } else {
                            c[b] = a
                        }
                        d.init(c)
                    }
                })
            },
            setValue: function(a, b, c) {
                return this.each(function() {
                    var d = S(this);
                    if (d) {
                        d.temp = a;
                        d.setValue(true, b, c)
                    }
                })
            },
            getInst: function() {
                return S(this[0])
            },
            getValue: function() {
                var a = S(this[0]);
                if (a) {
                    return a.values
                }
            },
            show: function() {
                var a = S(this[0]);
                if (a) {
                    return a.show()
                }
            },
            hide: function() {
                return this.each(function() {
                    var a = S(this);
                    if (a) {
                        a.hide()
                    }
                })
            },
            destroy: function() {
                return this.each(function() {
                    var a = S(this);
                    if (a) {
                        a.hide();
                        aj(this).unbind(".dw");
                        delete ae[this.id];
                        if (aj(this).is("input,textarea")) {
                            this.readOnly = ab(aj(this).data("dwro"))
                        }
                    }
                })
            }
        };
    aj(document).bind(T, function(b) {
        if (W) {
            b.preventDefault();
            U = aa(b);
            var a = ai + (ak - U) / I;
            a = a > (K + 1) ? (K + 1) : a;
            a = a < (Q - 1) ? (Q - 1) : a;
            an.scroll(O, a)
        }
    });
    aj(document).bind(X, function(c) {
        if (W) {
            c.preventDefault();
            O.removeClass("dwa");
            var d = new Date() - Z,
                a = ai + (ak - U) / I;
            a = a > (K + 1) ? (K + 1) : a;
            a = a < (Q - 1) ? (Q - 1) : a;
            if (d < 300) {
                var e = (U - ak) / d;
                var b = (e * e) / (2 * 0.0006);
                if (U - ak < 0) {
                    b = -b
                }
            } else {
                var b = U - ak
            }
            ao(O, Math.round(ai - b / I), 0, true, Math.round(a));
            W = false;
            O = null
        }
        clearInterval(ac);
        aj(".dwb-a").removeClass("dwb-a")
    });
    aj.fn.scroller = function(a) {
        if (V[a]) {
            return V[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return V.init.apply(this, arguments)
            } else {
                aj.error("Unknown method")
            }
        }
    };
    aj.scroller = {
        setDefaults: function(a) {
            aj.extend(af, a)
        },
        presets: {},
        themes: {}
    }
})(jQuery);
(function(j) {
    var f = new Date(),
        g = {
            dateFormat: "yy-mm-ddTHH:ii:ssZ",
            dateOrder: "Mddyy",
            timeWheels: "hhiiA",
            timeFormat: "",
            startYear: f.getFullYear() - 10,
            endYear: f.getFullYear() + 10,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            timeZones: [{
                "-12": "-12:00",
                "-11": "-11:00",
                "-10": "-10:00",
                "-9.5": "-09:30",
                "-9": "-09:00",
                "-8": "-08:00",
                "-7": "-07:00",
                "-6": "-06:00",
                "-5": "-05:00",
                "-4.5": "-04:30",
                "-4": "-04:00",
                "-3.5": "-03:30",
                "-3": "-03:00",
                "-2.5": "-02:30",
                "-2": "-02:00",
                "-1": "-01:00",
                Z: "+00:00",
                "1": "+01:00",
                "2": "+02:00",
                "3": "+03:00",
                "3.5": "+03:30",
                "4": "+04:00",
                "4.5": "+04:30",
                "5": "+05:00",
                "5.5": "+05:30",
                "5.75": "+05:45",
                "6": "+06:00",
                "6.5": "+06:30",
                "7": "+07:00",
                "8": "+08:00",
                "8.75": "+08:45",
                "9": "+09:00",
                "9.5": "+09:30",
                "10": "+10:00",
                "10.5": "+10:30",
                "11": "+11:00",
                "11.5": "+11:30",
                "12": "+12:00",
                "12.75": "+12:45",
                "13": "+13:00",
                "14": "+14:00"
            }],
            shortYearCutoff: "+10",
            monthText: "Month",
            dayText: "Day",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            secText: "Seconds",
            ampmText: "&nbsp;",
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            separator: " "
        },
        e = function(aj) {
            var ag = j(this),
                ak;
            if (ag.is("input,textarea")) {
                switch (ag.attr("type")) {
                    case "date":
                        ak = "yy-mm-dd";
                        break;
                    case "datetime":
                        ak = "yy-mm-ddTHH:ii:ssZ";
                        break;
                    case "datetime-local":
                        ak = "yy-mm-ddTHH:ii:ss";
                        break;
                    case "month":
                        ak = "yy-mm";
                        g.dateOrder = "mmyy";
                        break;
                    case "time":
                        ak = "HH:ii:ss";
                        break
                }
                var a = ag.attr("min"),
                    ao = ag.attr("max");
                if (a) {
                    g.minDate = j.scroller.parseDate(ak, a)
                }
                if (ao) {
                    g.maxDate = j.scroller.parseDate(ak, ao)
                }
            }
            var ac = j.extend({}, g, aj.settings),
                ae = 0,
                av = [],
                k = [],
                Z = {},
                d = {
                    y: "getFullYear",
                    m: "getMonth",
                    d: "getDate",
                    h: b,
                    i: ad,
                    s: ay,
                    ap: ap,
                    Z: getOffset
                },
                ab = ac.preset,
                c = ac.dateOrder,
                al = ac.timeWheels,
                aw = c.match(/D/),
                am = al.match(/a/i),
                aA = al.match(/h/),
                Y = ab == "datetime" ? ac.dateFormat + ac.separator + ac.timeFormat : ab == "time" ? ac.timeFormat : ac.dateFormat,
                aC = new Date(),
                ax = ac.stepHour,
                az = ac.stepMinute,
                aB = ac.stepSecond,
                ai = ac.minDate,
                au = ac.maxDate;
            ak = ak ? ak : Y;
            if (ab.match(/date/i)) {
                j.each(["y", "m", "d"], function(l, m) {
                    var l = c.search(new RegExp(m, "i"));
                    if (l > -1) {
                        k.push({
                            o: l,
                            v: m
                        })
                    }
                });
                k.sort(function(l, m) {
                    return l.o > m.o ? 1 : -1
                });
                j.each(k, function(l, m) {
                    Z[m.v] = l
                });
                var af = {};
                for (var X = 0; X < 3; X++) {
                    if (X == Z.y) {
                        ae++;
                        af[ac.yearText] = {};
                        var an = ai ? ai.getFullYear() : ac.startYear,
                            ar = au ? au.getFullYear() : ac.endYear;
                        for (var o = an; o <= ar; o++) {
                            af[ac.yearText][o] = c.match(/yy/i) ? o : (o + "").substr(2, 2)
                        }
                    } else {
                        if (X == Z.m) {
                            ae++;
                            af[ac.monthText] = {};
                            for (var o = 0; o < 12; o++) {
                                af[ac.monthText][o] = c.match(/MM/) ? ac.monthNames[o] : c.match(/M/) ? ac.monthNamesShort[o] : c.match(/mm/) && o < 9 ? "0" + (o + 1) : o + 1
                            }
                        } else {
                            if (X == Z.d) {
                                ae++;
                                af[ac.dayText] = {};
                                for (var o = 1; o < 32; o++) {
                                    af[ac.dayText][o] = c.match(/dd/i) && o < 10 ? "0" + o : o
                                }
                            }
                        }
                    }
                }
                av.push(af)
            }
            if (ab.match(/time/i)) {
                var af = {};
                if (al.match(/h/i)) {
                    Z.h = ae++;
                    af[ac.hourText] = {};
                    for (var o = 0; o < (aA ? 12 : 24); o += ax) {
                        af[ac.hourText][o] = aA && o == 0 ? 12 : al.match(/hh/i) && o < 10 ? "0" + o : o
                    }
                }
                if (al.match(/i/)) {
                    Z.i = ae++;
                    af[ac.minuteText] = {};
                    for (var o = 0; o < 60; o += az) {
                        af[ac.minuteText][o] = al.match(/ii/) && o < 10 ? "0" + o : o
                    }
                }
                if (al.match(/s/)) {
                    Z.s = ae++;
                    af[ac.secText] = {};
                    for (var o = 0; o < 60; o += aB) {
                        af[ac.secText][o] = al.match(/ss/) && o < 10 ? "0" + o : o
                    }
                }
                if (am) {
                    Z.ap = ae++;
                    var aa = al.match(/A/);
                    af[ac.ampmText] = {
                        0: aa ? "AM" : "am",
                        1: aa ? "PM" : "pm"
                    }
                }
                av.push(af)
            }

            function p(n, m, l) {
                if (Z[m] !== undefined) {
                    return +n[Z[m]]
                }
                if (l !== undefined) {
                    return l
                }
                return aC[d[m]] ? aC[d[m]]() : d[m](aC)
            }

            function ah(m, l) {
                return Math.floor(m / l) * l
            }

            function b(l) {
                var m = l.getHours();
                m = aA && m >= 12 ? m - 12 : m;
                return ah(m, ax)
            }

            function ad(l) {
                return ah(l.getMinutes(), az)
            }

            function ay(l) {
                return ah(l.getSeconds(), aB)
            }

            function ap(l) {
                return am && l.getHours() > 11 ? 1 : 0
            }

            function aq(l) {
                var m = p(l, "h", 0);
                return new Date(p(l, "y"), p(l, "m"), p(l, "d"), p(l, "ap") ? m + 12 : m, p(l, "i", 0), p(l, "s", 0))
            }

            function at(n, m) {
                var l = "00" + n;
                return l.substr(l.length - m)
            }
            aj.setDate = function(n, q, l) {
                for (var m in Z) {
                    this.temp[Z[m]] = n[d[m]] ? n[d[m]]() : d[m](n)
                }
                this.setValue(true, q, l)
            };
            aj.getDate = function(l) {
                return aq(l)
            };
            return {
                wheels: av,
                headerText: function(l) {
                    return j.scroller.formatDate(Y, aq(aj.temp), ac)
                },
                formatResult: function(l) {
                    return j.scroller.formatDate(ak, aq(l), ac)
                },
                parseValue: function(m) {
                    var q = new Date(),
                        n = [];
                    try {
                        q = j.scroller.parseDate(ak, m, ac)
                    } catch (r) {}
                    for (var l in Z) {
                        n[Z[l]] = q[d[l]] ? q[d[l]]() : d[l](q)
                    }
                    return n
                },
                validate: function(r, m) {
                    var l = aj.temp,
                        u = {
                            m: 0,
                            d: 1,
                            h: 0,
                            i: 0,
                            s: 0,
                            ap: 0
                        },
                        t = {
                            m: 11,
                            d: 31,
                            h: ah(aA ? 11 : 23, ax),
                            i: ah(59, az),
                            s: ah(59, aB),
                            ap: 1
                        },
                        n = (ai || au) ? ["y", "m", "d", "ap", "h", "i", "s"] : ((m == Z.y || m == Z.m || m === undefined) ? ["d"] : []),
                        v = true,
                        q = true;
                    j.each(n, function(B, F) {
                        if (Z[F] !== undefined) {
                            var H = u[F],
                                C = t[F],
                                I = 31,
                                G = p(l, F),
                                z = j("ul", r).eq(Z[F]),
                                D, x;
                            if (F == "d") {
                                D = p(l, "y"), x = p(l, "m");
                                I = 32 - new Date(D, x, 32).getDate();
                                C = I;
                                if (aw) {
                                    j("li", z).each(function() {
                                        var N = j(this),
                                            M = N.data("val"),
                                            L = new Date(D, x, M).getDay();
                                        N.html(c.replace(/[my]/gi, "").replace(/dd/, M < 10 ? "0" + M : M).replace(/d/, M).replace(/DD/, ac.dayNames[L]).replace(/D/, ac.dayNamesShort[L]))
                                    })
                                }
                            }
                            if (v && ai) {
                                H = ai[d[F]] ? ai[d[F]]() : d[F](ai)
                            }
                            if (q && au) {
                                C = au[d[F]] ? au[d[F]]() : d[F](au)
                            }
                            if (F != "y") {
                                var J = j('li[data-val="' + H + '"]', z).index(),
                                    K = j('li[data-val="' + C + '"]', z).index();
                                j("li", z).removeClass("dw-v").slice(J, K + 1).addClass("dw-v");
                                if (F == "d") {
                                    j("li", z).removeClass("dw-h").slice(I).addClass("dw-h")
                                }
                                if (G < H) {
                                    G = H
                                }
                                if (G > C) {
                                    G = C
                                }
                            }
                            if (v) {
                                v = G == H
                            }
                            if (q) {
                                q = G == C
                            }
                            if (ac.invalid && F == "d") {
                                var A = [];
                                if (ac.invalid.dates) {
                                    j.each(ac.invalid.dates, function(L, M) {
                                        if (M.getFullYear() == D && M.getMonth() == x) {
                                            A.push(M.getDate() - 1)
                                        }
                                    })
                                }
                                if (ac.invalid.daysOfWeek) {
                                    var E = new Date(D, x, 1).getDay();
                                    j.each(ac.invalid.daysOfWeek, function(L, N) {
                                        for (var M = N - E; M < I; M += 7) {
                                            if (M >= 0) {
                                                A.push(M)
                                            }
                                        }
                                    })
                                }
                                if (ac.invalid.daysOfMonth) {
                                    j.each(ac.invalid.daysOfMonth, function(L, M) {
                                        M = (M + "").split("/");
                                        if (M[1]) {
                                            if (M[0] - 1 == x) {
                                                A.push(M[1] - 1)
                                            }
                                        } else {
                                            A.push(M[0] - 1)
                                        }
                                    })
                                }
                                j.each(A, function(L, M) {
                                    j("li", z).eq(M).removeClass("dw-v")
                                })
                            }
                        }
                    })
                },
                methods: {
                    getDate: function(m) {
                        var l = j(this).scroller("getInst");
                        if (l) {
                            return l.getDate(m ? l.temp : l.values)
                        }
                    },
                    setDate: function(l, m, n) {
                        if (m == undefined) {
                            m = false
                        }
                        return this.each(function() {
                            var q = j(this).scroller("getInst");
                            if (q) {
                                q.setDate(l, m, n)
                            }
                        })
                    }
                }
            }
        };
    j.scroller.presets.date = e;
    j.scroller.presets.datetime = e;
    j.scroller.presets.time = e;
    j.scroller.formatDate = function(b, z, x) {
        if (!z) {
            return null
        }
        var a = j.extend({}, g, x),
            d = function(l) {
                var k = 0;
                while (t + 1 < b.length && b.charAt(t + 1) == l) {
                    k++;
                    t++
                }
                return k
            },
            u = function(k, n, m) {
                var l = "" + n;
                if (d(k)) {
                    while (l.length < m) {
                        l = "0" + l
                    }
                }
                return l
            },
            v = function(m, l, n, k) {
                return (d(m) ? k[l] : n[l])
            },
            A = "",
            c = false;
        for (var t = 0; t < b.length; t++) {
            if (c) {
                if (b.charAt(t) == "'" && !d("'")) {
                    c = false
                } else {
                    A += b.charAt(t)
                }
            } else {
                switch (b.charAt(t)) {
                    case "d":
                        A += u("d", z.getDate(), 2);
                        break;
                    case "D":
                        A += v("D", z.getDay(), a.dayNamesShort, a.dayNames);
                        break;
                    case "o":
                        A += u("o", (z.getTime() - new Date(z.getFullYear(), 0, 0).getTime()) / 86400000, 3);
                        break;
                    case "m":
                        A += u("m", z.getMonth() + 1, 2);
                        break;
                    case "M":
                        A += v("M", z.getMonth(), a.monthNamesShort, a.monthNames);
                        break;
                    case "y":
                        A += (d("y") ? z.getFullYear() : (z.getYear() % 100 < 10 ? "0" : "") + z.getYear() % 100);
                        break;
                    case "h":
                        var r = z.getHours();
                        A += u("h", (r > 12 ? (r - 12) : (r == 0 ? 12 : r)), 2);
                        break;
                    case "H":
                        A += u("H", z.getHours(), 2);
                        break;
                    case "i":
                        A += u("i", z.getMinutes(), 2);
                        break;
                    case "s":
                        A += u("s", z.getSeconds(), 2);
                        break;
                    case "a":
                        A += z.getHours() > 11 ? "pm" : "am";
                        break;
                    case "A":
                        A += z.getHours() > 11 ? "PM" : "AM";
                        break;
                    case "Z":
                        A += getOffset(z);
                        break;
                    case "'":
                        if (d("'")) {
                            A += "'"
                        } else {
                            c = true
                        }
                        break;
                    default:
                        A += b.charAt(t)
                }
            }
        }
        return A
    };
    j.scroller.parseDate = function(B, J, c) {
        var O = new Date();
        if (!B || !J) {
            return O
        }
        J = (typeof J == "object" ? J.toString() : J + "");
        var M = j.extend({}, g, c),
            R = O.getFullYear(),
            a = O.getMonth() + 1,
            D = O.getDate(),
            P = -1,
            d = O.getHours(),
            I = O.getMinutes(),
            Q = 0,
            L = -1,
            E = false,
            K = function(k) {
                var l = (S + 1 < B.length && B.charAt(S + 1) == k);
                if (l) {
                    S++
                }
                return l
            },
            H = function(n) {
                K(n);
                var m = (n == "@" ? 14 : (n == "!" ? 20 : (n == "y" ? 4 : (n == "o" ? 3 : 2))));
                var l = new RegExp("^\\d{1," + m + "}");
                var k = J.substr(C).match(l);
                if (!k) {
                    return 0
                }
                C += k[0].length;
                return parseInt(k[0], 10)
            },
            N = function(n, l, o) {
                var k = (K(n) ? o : l);
                for (var m = 0; m < k.length; m++) {
                    if (J.substr(C, k[m].length).toLowerCase() == k[m].toLowerCase()) {
                        C += k[m].length;
                        return m + 1
                    }
                }
                return 0
            },
            F = function() {
                C++
            },
            C = 0;
        for (var S = 0; S < B.length; S++) {
            if (E) {
                if (B.charAt(S) == "'" && !K("'")) {
                    E = false
                } else {
                    F()
                }
            } else {
                switch (B.charAt(S)) {
                    case "d":
                        D = H("d");
                        break;
                    case "D":
                        N("D", M.dayNamesShort, M.dayNames);
                        break;
                    case "o":
                        P = H("o");
                        break;
                    case "m":
                        a = H("m");
                        break;
                    case "M":
                        a = N("M", M.monthNamesShort, M.monthNames);
                        break;
                    case "y":
                        R = H("y");
                        break;
                    case "H":
                        d = H("H");
                        break;
                    case "h":
                        d = H("h");
                        break;
                    case "i":
                        I = H("i");
                        break;
                    case "s":
                        Q = H("s");
                        break;
                    case "a":
                        L = N("a", ["am", "pm"], ["am", "pm"]) - 1;
                        break;
                    case "A":
                        L = N("A", ["am", "pm"], ["am", "pm"]) - 1;
                        break;
                    case "'":
                        if (K("'")) {
                            F()
                        } else {
                            E = true
                        }
                        break;
                    default:
                        F()
                }
            }
        }
        if (R < 100) {
            R += new Date().getFullYear() - new Date().getFullYear() % 100 + (R <= M.shortYearCutoff ? 0 : -100)
        }
        if (P > -1) {
            a = 1;
            D = P;
            do {
                var G = 32 - new Date(R, a - 1, 32).getDate();
                if (D <= G) {
                    break
                }
                a++;
                D -= G
            } while (true)
        }
        d = (L == -1) ? d : ((L && d < 12) ? (d + 12) : (!L && d == 12 ? 0 : d));
        var b = new Date(R, a - 1, D, d, I, Q);
        if (b.getFullYear() != R || b.getMonth() + 1 != a || b.getDate() != D) {
            throw "Invalid date"
        }
        return b
    }
})(jQuery);
/*  Lightbox Me @v 2.3 @l Apache2 | buckwilson.me/lightboxme */
(function(b) {
    b.fn.lightbox_me = function(a) {
        return this.each(function() {
            var x = b.extend({}, b.fn.lightbox_me.defaults, a),
                o = b(),
                p = b(this),
                n = b('<iframe id="foo" style="z-index: ' + (x.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
                u = false;
            if (x.showOverlay) {
                var v = b(".js_lb_overlay:visible");
                if (v.length > 0) {
                    o = b('<div class="lb_overlay_clear js_lb_overlay"/>')
                } else {
                    o = b('<div class="' + x.classPrefix + '_overlay js_lb_overlay"/>')
                }
            }
            if (u) {
                var z = /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank";
                n.attr("src", z);
                b("body").append(n)
            }
            b("body").append(p.hide()).append(o);
            if (x.showOverlay) {
                t();
                o.css({
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: (x.zIndex + 1000),
                    display: "none"
                });
                if (!o.hasClass("lb_overlay_clear")) {
                    o.css(x.overlayCSS)
                }
            }
            if (x.showOverlay) {
                o.fadeIn(x.overlaySpeed, function() {
                    A();
                    p[x.appearEffect](x.lightboxSpeed, function() {
                        t();
                        A();
                        x.onLoad()
                    })
                })
            } else {
                A();
                p[x.appearEffect](x.lightboxSpeed, function() {
                    x.onLoad()
                })
            }
            if (x.parentLightbox) {
                x.parentLightbox.fadeOut(200)
            }
            b(window).resize(t).resize(A).scroll(A);
            b(window).bind("keyup.lightbox_me", q);
            if (x.closeClick) {
                o.click(function(c) {
                    r();
                    c.preventDefault
                })
            }
            p.delegate(x.closeSelector, "click", function(c) {
                r();
                c.preventDefault()
            });
            p.bind("close", r);
            p.bind("reposition", A);

            function r() {
                var c = p[0].style;
                if (x.destroyOnClose) {
                    p.add(o).remove()
                } else {
                    p.add(o).hide()
                }
                if (x.parentLightbox) {
                    x.parentLightbox.fadeIn(200)
                }
                n.remove();
                p.undelegate(x.closeSelector, "click");
                b(window).unbind("reposition", t);
                b(window).unbind("reposition", A);
                b(window).unbind("scroll", A);
                b(window).unbind("keyup.lightbox_me");
                if (u) {
                    c.removeExpression("top")
                }
                x.onClose()
            }

            function q(c) {
                if ((c.keyCode == 27 || (c.DOM_VK_ESCAPE == 27 && c.which == 0)) && x.closeEsc) {
                    r()
                }
            }

            function t() {
                if (b(window).height() < b(document).height()) {
                    o.css({
                        height: b(document).height() + "px"
                    });
                    n.css({
                        height: b(document).height() + "px"
                    })
                } else {
                    o.css({
                        height: "100%"
                    });
                    if (u) {
                        b("html,body").css("height", "100%");
                        n.css("height", "100%")
                    }
                }
            }

            function A() {
                var d = p[0].style;
                p.css({
                    left: "50%",
                    marginLeft: (p.outerWidth() / 2) * -1,
                    zIndex: (x.zIndex + 2000)
                });
                if ((p.height() + 80 >= b(window).height()) && (p.css("position") != "absolute" || u)) {
                    var e = b(document).scrollTop() + 40;
                    p.css({
                        position: "absolute",
                        top: e + "px",
                        marginTop: 0
                    });
                    if (u) {
                        d.removeExpression("top")
                    }
                } else {
                    if (p.height() + 80 < b(window).height()) {
                        if (u) {
                            d.position = "absolute";
                            if (x.centered) {
                                d.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                                d.marginTop = 0
                            } else {
                                var c = (x.modalCSS && x.modalCSS.top) ? parseInt(x.modalCSS.top) : 0;
                                d.setExpression("top", "((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + c + ') + "px"')
                            }
                        } else {
                            if (x.centered) {
                                p.css({
                                    position: "fixed",
                                    top: "50%",
                                    marginTop: (p.outerHeight() / 2) * -1
                                })
                            } else {
                                p.css({
                                    position: "fixed"
                                }).css(x.modalCSS)
                            }
                        }
                    }
                }
            }
        })
    };
    b.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        onLoad: function() {},
        onClose: function() {},
        classPrefix: "lb",
        zIndex: 999,
        centered: false,
        modalCSS: {
            top: "40px"
        },
        overlayCSS: {
            background: "black",
            opacity: 0.3
        }
    }
})(jQuery);
/*  FluidApp Theme @modified */
var FluidNav = {
    init: function() {
        $("a[href*=#]").click(function(b) {
            b.preventDefault();
            if ($(this).attr("href").match(/front/)) {
                return 0
            }
            if ($(this).attr("href").split("#")[1]) {
                FluidNav.goTo($(this).attr("href").split("#")[1])
            }
        });
        this.goTo("home")
    },
    goTo: function(c) {
        var d = $("#" + c);
        FluidNav.resizePage((d.height() + 40), true, function() {});
        $(".page").fadeOut(500);
        d.fadeIn(500)
    },
    resizePage: function(e, f, g) {
        if (e) {
            var j = e
        } else {
            var j = $(".page.current").height() + 40
        }
        if (!g) {
            g = function() {}
        }
        if (f) {
            $("#pages").animate({
                height: j
            }, 400, function() {
                g.call()
            })
        } else {
            $("#pages").css({
                height: j
            })
        }
    }
};
$(window).resize(function() {
    $("#editor").css("max-height", Math.max(610, $(window).height() - 180) + "px");
    $("#editor").height(Math.max(610, $(window).height() - 180));
    $(".interface").height(Math.max($(window).height() - 150, 640));
    FluidNav.resizePage()
});
$(document).ready(function() {
    FluidNav.init();
    $(".toggle_list ul li .title").click(function() {
        var c = $(this).parent().find(".content");
        if (c.is(":visible")) {
            var d = $(".page.current").height() - c.height();
            FluidNav.resizePage(d, true);
            c.slideUp();
            $(this).find("a.toggle_link").text($(this).find("a.toggle_link").data("open_text"))
        } else {
            var d = $(".page.current").height() + c.height() + 40;
            FluidNav.resizePage(d, true);
            c.slideDown();
            $(this).find("a.toggle_link").text($(this).find("a.toggle_link").data("close_text"))
        }
    });
    $(".toggle_list ul li .title").each(function() {
        $(this).find("a.toggle_link").text($(this).find("a.toggle_link").data("open_text"));
        if ($(this).parent().hasClass("opened")) {
            $(this).parent().find(".content").show()
        }
    });
    $("a[data-tip]").tipsy({
        fade: true,
        gravity: "s",
        offset: 5,
        html: true
    });
    $("ul.social li a").each(function() {
        if ($(this).attr("title")) {
            var b = $(this).attr("title")
        } else {
            var b = $(this).text()
        }
        $(this).tipsy({
            fade: true,
            gravity: "n",
            offset: 5,
            title: function() {
                return b
            }
        })
    })
});
/* And then the magic... */
var storedSelectValues = {};
var rowItems = {};
var fieldTypes = {
    h: "header",
    b: "back",
    p: "primary",
    s: "secondary",
    a: "auxiliary"
};
var justify = "a";
var fCallback = "";
var initalised = false;
var jcb = 1;
var ajaxLocalPath = ((typeof offDomain == "undefined") ? "./" : "https://create.passkit.com/");
var passUnchanged = true;
var typewatch = (function() {
    var a = 0;
    return function(c, b) {
        clearTimeout(a);
        a = setTimeout(c, b)
    }
})();
$(document).ready(function() {
    pre_init()
});

function pre_init() {
    $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("loading");
    $("#alertbox").lightbox_me({
        centered: false,
        closeClick: false,
        closeEsc: false,
        modalCSS: {
            top: "30%"
        }
    });
    clickEvents();
    changeEvents();
    window.localeClone = $("#langClone").html();
    $("#langClone").remove();
    window.locationClone = $("#lClone").html();
    $("#lClone").remove();
    window.beaconClone = $("#becClone").html();
    $("#becClone").remove();
    window.backClone = $("#backClone").html();
    $("#backClone").remove();
    eventHandlers(".droparea");
    loadfonts();
    styleTag("cpf");
    styleTag("cpl");
    styleTag("cpc");
    styleTag("cps");
    document.getElementById("cpf").innerHTML = ".foreground{color:#" + $("#fg").val() + ";}.coupon .p1.label, .storeCard .p1.label{color:#" + $("#fg").val() + ";}";
    document.getElementById("cpl").innerHTML = ".label{color:#" + $("#lb").val() + ";}.boardingPass span.pin{background:url('" + window.cfbucket + "images/dpin.php?c1=" + $("#lb").val() + "') no-repeat;}.air{background:url('" + window.cfbucket + "images/plane.php?c1=" + $("#lb").val() + "') no-repeat;}.train{background:url('" + window.cfbucket + "images/train.php?c1=" + $("#lb").val() + "') no-repeat;}.bus{background:url('" + window.cfbucket + "images/bus.php?c1=" + $("#lb").val() + "') no-repeat;}.boat{background:url('" + window.cfbucket + "images/boat.php?c1=" + $("#lb").val() + "') no-repeat;}.gen{background:url('" + window.cfbucket + "images/gen.php?c1=" + $("#lb").val() + "') no-repeat;}";
    $(".pass").css("background", "#" + $("#bg").val());
    document.getElementById("cpc").innerHTML = ".info{background:url('" + window.cfbucket + "images/info.php?c1=" + contrastColour($("#bg").val()) + "&c2=" + contrastColour($("#bg").val()) + "&t=0.3');";
    if (typeof bpass == "undefined") {
        $("#barcode > img").attr("src", window.cfbucket + "images/barcode.php?m=" + encodeURIComponent($("#barcodeMessage").val()) + "&f=" + $("#barcodeType").val().replace("_e", ""))
    }
    $("#passTz").html(tzselect(tzOffset, $("#passTz").val()));
    $("html").addClass($.fn.details.support ? "details" : "no-details");
    $("details").details();
    $(".pointers").children().hide();
    if ($("#serialNumberFixed").prop("checked")) {
        $("#serialFixed").show()
    }
    $(".sType").each(function() {
        sType = $(this).val();
        if (sType === "number") {
            $(this).parent().parent().siblings(".NFormat").show()
        } else {
            if (sType.substr(0, 4) === "date") {
                $(this).parent().parent().siblings(".DFormat").show();
                attr = $(this).attr("data-sid").slice(0, -1);
                $("#" + attr + "Datad, #" + attr + "Datas").scroller({
                    preset: $(this).val(),
                    theme: "ios",
                    display: "modal",
                    mode: "scroller"
                })
            }
        }
        contentCallback($(this).attr("data-sid"))
    });
    if ($("#afr_d").length > 0 && $("#afr_d").val() === "1") {
        $("#noSave").html("<br /><em>" + def_nodistri + "</em>")
    }
}

function init() {
    storeSelectValues();
    fixSelects();
    jCall({
        a: "currencies",
        el: ".currencySelect"
    });
    jCall({
        a: "encodings",
        el: ".encoding",
        e: $("#encoding").val()
    });
    jc.install();
    jCall({
        a: "language",
        el: ".locale",
        loc: window.localed
    });
    jCall({
        a: "language",
        el: ".localeb",
        loc: window.localed,
        b: "1"
    });
    setup_sim();
    changeURL();
    $("#editor").css("max-height", Math.max(610, $(window).height() - 180) + "px");
    $("#editor").height(Math.max(610, $(window).height() - 180));
    $(".interface").height(Math.max($(window).height() - 150, 640));
    $("#preloader").hide();
    $("#ipc,#passNav").fadeIn(400, function() {
        if (window.marry) {
            $("#navLogin").trigger("click");
            window.marry = false
        }
        if (window.reg == 1) {
            $("#navLogin").trigger("click");
            setTimeout(function() {
                $("#registerTab").trigger("click")
            }, 200);
            window.reg = false
        }
        if (window.reg == 2) {
            $("#navLogin").trigger("click");
            window.reg = false
        }
    });
    checkInfoBut();
    enableFields();
    justifyAll(true);
    typewatch(function() {
        justifyAll(true);
        $("#alertbox").trigger("close")
    }, 2500)
}
var map;
var geocoder;
var centerChangedLast;
var reverseGeocodedLast;
var currentReverseGeocodeResponse;

function mapInitialise(e, b, c) {
    var d = new google.maps.LatLng(e, b);
    var a = {
        zoom: c,
        center: d,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), a);
    geocoder = new google.maps.Geocoder();
    setupEvents();
    centerChanged()
}

function setupEvents() {
    reverseGeocodedLast = new Date();
    centerChangedLast = new Date();
    setInterval(function() {
        if ((new Date()).getSeconds() - centerChangedLast.getSeconds() > 1) {
            if (reverseGeocodedLast.getTime() < centerChangedLast.getTime()) {
                reverseGeocode()
            }
        }
    }, 1000);
    google.maps.event.addListener(map, "center_changed", centerChanged)
}

function centerChanged() {
    centerChangedLast = new Date();
    document.getElementById("lat").innerHTML = map.getCenter().lat();
    document.getElementById("lng").innerHTML = map.getCenter().lng();
    document.getElementById("formatedAddress").innerHTML = "";
    currentReverseGeocodeResponse = null
}

function reverseGeocode() {
    reverseGeocodedLast = new Date();
    geocoder.geocode({
        latLng: map.getCenter()
    }, reverseGeocodeResult)
}

function reverseGeocodeResult(b, a) {
    currentReverseGeocodeResponse = b;
    if (a == "OK") {
        if (b.length == 0) {
            document.getElementById("formatedAddress").innerHTML = "None"
        } else {
            document.getElementById("formatedAddress").innerHTML = b[0].formatted_address
        }
    } else {
        document.getElementById("formatedAddress").innerHTML = ""
    }
}

function geocode() {
    var a = document.getElementById("addres").value;
    geocoder.geocode({
        address: a,
        partialmatch: true
    }, geocodeResult)
}

function geocodeResult(b, a) {
    if (a == "OK" && b.length > 0) {
        map.fitBounds(b[0].geometry.viewport);
        map.setZoom(16)
    } else {
        alert(window.gmaps_noaddress)
    }
}

function clickEvents() {
    $("#save").click(function(c) {
        c.preventDefault();
        $("input, select, textarea").removeClass("subError");
        $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("save");
        $("#alert").html("");
        $("#alertbox").lightbox_me({
            centered: false,
            closeClick: false,
            closeEsc: false,
            modalCSS: {
                top: "30%"
            }
        });
        $.post("ajax.php?a=afr", $("#afr").serialize(), function(e) {
            if (e.success === "noLogin" || (e.error === "noLogin")) {
                var d = ($("#navLogout").length == 0 ? true : false);
                if (!d) {
                    $("#logMenu").show();
                    $("#navLogout").remove();
                    $("#navAccount").remove()
                } else {
                    $("#loginText").show()
                }
                $("#editor").removeClass("wideEditor");
                $("#editor").addClass("wideEditor");
                $("#navLogin").trigger("click");
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("bad");
                $("#alert").html((d ? e.m : e.x) + '<br /><br /><button data-f="userE" class="formRight gotoError">' + window.loginText + "</button>");
                $("#alertbox").trigger("reposition")
            } else {
                if (e.error) {
                    $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("bad");
                    $("#alert").html(e.m + '<br /><br /><button class="formRight gotoError" data-f="' + e.field + '" data-t="' + e.t + '">' + window.try_again + "</button>");
                    $("#alertbox").trigger("reposition")
                } else {
                    if (e.success === true && e.afr_d) {
                        $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("good");
                        if (e.bcert) {
                            $("#barcodeCert").html(e.bcert.replace(/\r?\n|\r/g, "<br />"));
                            $("#bccert").show()
                        }
                        $("#noSave").html("<em>" + def_nodistri + "</em>");
                        $("#sDist").trigger("click");
                        setTimeout(function() {
                            $("#alertbox").trigger("close")
                        }, 1500)
                    } else {
                        if (e.success === true && e.url && e.surl && e.eurl) {
                            $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("good");
                            if (!$("#pname").prop("disabled")) {
                                $("#hpname").val($("#pname").val()).attr("name", "pname");
                                $("#pcert").val($("#passCert").val()).attr("name", "c");
                                $("#pname, #passCert").prop("disabled", true);
                                $("#pcertS").addClass("disabled")
                            }
                            window.pubURL = e.surl;
                            window.privURL = e.url;
                            window.edURL = e.eurl;
                            if (e.bcert) {
                                $("#barcodeCert").html(e.bcert.replace(/\r?\n|\r/g, "<br />"));
                                $("#bccert").show()
                            }
                            changeURL();
                            $("#sDist").trigger("click");
                            setTimeout(function() {
                                $("#alertbox").trigger("close")
                            }, 1500)
                        }
                    }
                }
            }
        })
    });
    $("#alert").on("click", ".gotoError", function() {
        tab = $(this).attr("data-t");
        field = $(this).attr("data-f");
        $("#alertbox").trigger("close");
        if ($(this).attr("data-t") !== "undefined") {
            $("#s" + tab).trigger("click")
        }
        if (tab === "Front") {
            $("." + field.substring(0, 1) + "Edit").trigger("click")
        }
        if ($("#" + field) !== "undefined") {
            $("input[name=" + field + "], select[name=" + field + "], textarea[name=" + field + "]").addClass("subError").focus()
        }
        if (field === "userE") {
            $("#userE").focus()
        }
    });
    $("#registerTab, #register").on("click", function() {
        if (!$("#registerTab").hasClass("sele")) {
            $("#loginForm").hide();
            $("#lostForm").hide();
            $("#regForm").fadeIn();
            $("#registerTab").addClass("sele");
            $("#loginTab").removeClass("sele")
        }
    });
    $("#loginTab").on("click", function() {
        if (!$("#loginTab").hasClass("sele")) {
            $("#regForm").hide();
            $("#lostForm").hide();
            $("#loginForm").fadeIn();
            $("#loginTab").addClass("sele");
            $("#registerTab").removeClass("sele")
        }
    });
    $("#termsLink").on("click", function() {
        alert("show terms")
    });
    $("#login").on("click", ".lostPw", function() {
        $("#regForm").hide();
        $("#loginForm").hide();
        $("#lostForm").fadeIn();
        $("#loginTab").removeClass("sele");
        $("#registerTab").removeClass("sele")
    });
    $("#navLogin").on("click", function() {
        if (!$("#editor").hasClass("wideEditor")) {
            $("#editor").addClass("wideEditor")
        }
        $("#home").hide();
        $("#login").show()
    });
    $("input:radio[name='et']").click(function() {
        if ($(this).val() === "strip") {
            $("body").removeClass("strip");
            $("body").addClass("strip");
            $("body").removeClass("bg");
            $("body").removeClass("ht");
            if ($("#is").val().length > 0) {
                $("body").removeClass("simg");
                $("body").addClass("simg")
            }
        } else {
            $("body").removeClass("strip");
            $("body").removeClass("simg");
            if ($("#ib").val().length > 0) {
                $("body").removeClass("bg");
                $("body").addClass("bg")
            }
            if ($("#it").val().length > 0) {
                $("body").removeClass("ht");
                $("body").addClass("ht")
            }
        }
        enableFields();
        justifyAll()
    });
    $(".loginBut").click(function(c) {
        c.preventDefault();
        $("input, select, textarea").removeClass("subError");
        $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("login");
        $("#alert").html("");
        $("#alertbox").lightbox_me({
            centered: false,
            closeClick: false,
            closeEsc: false,
            modalCSS: {
                top: "30%"
            }
        });
        $.post("login/", $("#lform").serialize(), function(d) {
            $("#lformErr").fadeOut();
            if (d.success) {
                doLogin((d.reload && window.passUnchanged))
            } else {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("bad");
                $("#alert").html(d.m + '<br /><br /><button class="formRight gotoError" data-f="' + d.field + '" data-t="' + d.t + '">' + window.try_again + "</button>");
                $("#alertbox").trigger("reposition")
            }
        })
    });
    $(".registerBut").click(function(c) {
        c.preventDefault();
        $("input, select, textarea").removeClass("subError");
        $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("register");
        $("#alert").html("");
        $("#alertbox").lightbox_me({
            centered: false,
            closeClick: false,
            closeEsc: false,
            modalCSS: {
                top: "30%"
            }
        });
        $.post("login/", $("#rform").serialize(), function(d) {
            if (d.success) {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("good nomarg");
                $("#loginTab").trigger("click");
                $("#alert").html(window.check_email + "<br /><br /><button class=\"formRight\" onclick=\"$('#alertbox').trigger('close');$('#userE').val($('#userR').val());$('#userR').val('');\">" + window.loginText + "</button>")
            } else {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("bad");
                $("#alert").html(d.m + '<br /><br /><button class="formRight gotoError" data-f="' + d.field + '" data-t="' + d.t + '">' + window.try_again + "</button>");
                $("#alertbox").trigger("reposition")
            }
        })
    });
    $(".resetBut").click(function(c) {
        c.preventDefault();
        $("input, select, textarea").removeClass("subError");
        $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("reset");
        $("#alert").html("");
        $("#alertbox").lightbox_me({
            centered: false,
            closeClick: false,
            closeEsc: false,
            modalCSS: {
                top: "30%"
            }
        });
        $.post("login/", $("#recform").serialize(), function(d) {
            if (d.success) {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("good nomarg reset");
                $("#loginTab").trigger("click");
                $("#alert").html(lx_reset + "<br /><br /><button class=\"formRight\" onclick=\"$('#alertbox').trigger('close');\">Login</button>")
            } else {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("bad");
                $("#alert").html(d.m + '<br /><br /><button class="formRight gotoError" data-f="' + d.field + '" data-t="' + d.t + '">' + window.try_again + "</button>");
                $("#alertbox").trigger("reposition")
            }
        })
    });
    $("#rForm").submit(function(c) {
        $.post("login/", $("#rform").serialize(), function(d) {
            if (d.success) {
                doRegister()
            } else {
                flashError("#rformErr", d.error)
            }
        });
        return false
    });
    $("#pushAll").click(function(c) {
        c.preventDefault();
        $("input, select, textarea").removeClass("subError");
        $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("pushing");
        $("#alert").html("");
        $("#alertbox").lightbox_me({
            centered: false,
            closeClick: false,
            closeEsc: false,
            modalCSS: {
                top: "30%"
            }
        });
        $.post("ajax.php", {
            a: "tb",
            t: $(this).attr("data-tp"),
            r: $("#reset").prop("checked")
        }, function(d) {
            $("#lformErr").fadeOut();
            if (d.success) {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("good nomarg pushing");
                $("#alert").html(d.m);
                $("#alertbox").trigger("reposition");
                setTimeout(function() {
                    $("#alertbox").trigger("close")
                }, 3500)
            } else {
                $("#alertbox, #alerticon, #alertTitle").removeClass().addClass("bad nomarg pushing");
                $("#alert").html(d.m);
                $("#alertbox").trigger("reposition");
                setTimeout(function() {
                    $("#alertbox").trigger("close")
                }, 3000)
            }
        })
    });
    $("#backFields, #contentFront, #distFields, #configFields, #location").on("click", ".removeDate", function(c) {
        $(this).parent().siblings("input").val("");
        c.preventDefault()
    });
    $(".dragdrop").on("click", ".clearImage", function() {
        var c = $(this).attr("data-fid");
        $("#" + c).val("");
        $(this).parent().siblings().children("img").remove();
        $(this).parent().siblings().children("input").val("");
        $("#ss").val("1");
        $(this).parent().siblings().children(".instructions").html("<p>" + window.imageclick + "</p>");
        switch (c.substr(1, 1)) {
            case "s":
                $(".back").css("background", "transparent");
                $(".stripShine").hide();
                if ($("body").hasClass("simg")) {
                    $("body").removeClass("simg")
                }
                if ($("#it").val() && !$("body").hasClass("ht") && !$("body").hasClass("eventTicket")) {
                    $("body").addClass("ht")
                }
                $("#p1V, #p1L").css("color", $("#" + $("#fg").val()));
                enableFields();
                justifyAll();
                break;
            case "b":
                $("body").removeClass("bg");
                $(".eventImage").attr("src", "images/z.gif");
                if ($("#is").val() && $("#etts").prop("checked") && !$("body").hasClass("simg")) {
                    $("body").addClass("simg")
                }
                enableFields();
                justifyAll(true);
                break;
            case "l":
                $("#logoImage").attr("src", "images/z50.gif");
                $(".passLogo").hide();
                $("#logoImage").hide();
                $(".passLogo").fadeIn();
                break;
            case "t":
                $("#thumbnail").fadeOut(300, function() {
                    $("#thumbnail").attr("src", "images/z.gif")
                });
                if ($("body").hasClass("ht")) {
                    $("body").removeClass("ht")
                }
                enableFields();
                justifyAll();
                break;
            case "f":
                $("#footerImage").attr("src", "images/z.gif");
                break
        }
    });
    $(".pointers").children().click(function(d) {
        if (!$(this).hasClass("active")) {
            var c = $(this).attr("class");
            $(".pointers li").removeClass("active");
            $(".faceField").hide();
            $("#" + c).fadeIn(500);
            $(this).addClass("active");
            if ($("#" + c).find("fieldset:visible").length == 1) {
                $("#" + c).find(".sortableFieldHandle").hide()
            } else {
                $("#" + c).find(".sortableFieldHandle").show()
            }
        }
    });
    $(".dscroll").click(function() {
        $("#dscroll").animate({
            scrollTop: $(this).offset().top + 50
        }, 1000)
    });
    // $(".passTypeImg").click(function() {
    //     if ($(this).attr("data-pass") !== $("input:radio[name='pt']:checked").val()) {
    //         $("#pass").toggleClass("animate");
    //         $("#pass").slideToggle(300, function(f) {
    //             var c = window.passNames;
    //             var d = $("input:radio[name='pt']:checked").val();
    //             strip = ($("#etts").prop("checked") && d === "eventTicket");
    //             $(".titleText").html(c[d]);
    //             if (d === "eventTicket") {
    //                 $("#ettCont").fadeIn()
    //             } else {
    //                 $("#ettCont").fadeOut()
    //             }
    //             $("body").switchClass($("body").attr("class"), d, 10, function() {
    //                 $(".sEdit").hide();
    //                 if (strip) {
    //                     $("body").addClass("strip")
    //                 } else {
    //                     if ($("#ib").val().length > 0 && d === "eventTicket") {
    //                         $("body").addClass("bg")
    //                     }
    //                 }
    //                 if ($("#it").val().length && !strip) {
    //                     $("body").addClass("ht")
    //                 }
    //                 if ((d === "coupon" || d === "storeCard" || (d === "eventTicket" && $("#etts").prop("checked"))) && $("#is").val()) {
    //                     $("body").addClass("simg");
    //                     $("body").removeClass("ht")
    //                 }
    //                 if (d === "storeCard") {
    //                     $(".nfc").hide()
    //                 } else {
    //                     $(".nfc").hide()
    //                 }
    //                 if ($("#ss").prop("checked")) {
    //                     $(".stripShine").hide()
    //                 }
    //                 if (is_square()) {
    //                     $("body").addClass("sq")
    //                 }
    //                 checkBackgroundImages();
    //                 setup_sim($(this).attr("data-pass"));
    //                 $("#pass").stop().slideToggle("slow", function() {
    //                     $("#pass").toggleClass("animate")
    //                 })
    //             })
    //         });
    //         $(".passTypeImg").removeClass("selected");
    //         $(this).addClass("selected");
    //         typewatch(function() {
    //             window.justifyAll(false)
    //         }, 500)
    //     }
    // });
    $("#ss").on("click", function() {
        if ($(this).prop("checked")) {
            $(".stripShine").fadeOut()
        } else {
            $(".stripShine").fadeIn()
        }
    });
    $("#progress_bar").children().click(function() {
        $("#login").hide();
        $("#home").show();
        $("#progress_bar").children().removeClass("active");
        $(".pane").removeClass("show");
        $(".pane").hide();
        if ($(this).attr("data-show") === "location") {
            $("#location .faceField").show()
        }
        if ($(this).attr("data-show") === "config") {
            $("#editor").removeClass("wideEditor");
            $("#editor").addClass("wideEditor");
            $("#pre").removeClass("hide");
            $("#pre").addClass("hide");
        } else {
            $("#editor").removeClass("wideEditor");
            $("#pre").removeClass("hide");
        }
        if ($(this).attr("data-show") !== "content") {
            $(".pointers").children().fadeOut()
        } else {
            $(".pointers").children().fadeIn(500)
        }
        if ($(this).attr("data-show") !== "bcontent") {
            $("#pass, #passNav").removeClass("backPass");
            $("#back").addClass("backPass");
            $("#passNav").show()
        } else {
            $("#pass").addClass("backPass");
            if (!$("#i").val() && !$("#l1Active").prop("checked")) {
                $(".lockScreen").hide()
            } else {
                $(".lockScreen").show()
            }
            $("#back").removeClass("backPass");
            shrinkBackfields()
        }
        var c = $(this).attr("data-show");
        $("#" + $(this).attr("data-show")).fadeIn(500, function() {
            if (c == "bcontent") {
                sortableFieldsets($("#backField"), "b")
            } else {
                if (c == "content") {
                    sortableFieldsets($("#hEditFields"), "h");
                    sortableFieldsets($("#pEditFields"), "p");
                    sortableFieldsets($("#sEditFields"), "s");
                    sortableFieldsets($("#aEditFields"), "a")
                }
            }
        });
        $(this).addClass("active")
    });
    $(".info").click(function(c) {
        $("#sBack").trigger("click");
        c.preventDefault()
    });
    $(".done").click(function(c) {
        $("#sFront").trigger("click");
        c.preventDefault()
    });
    $("#addBack").click(function(c) {
        next_back = $(this).attr("data-next");
        toClone1 = window.backClone;
        toClone1 = toClone1.replace(/b0/g, "b" + next_back);
        toClone1 = toClone1.replace(/Back 0/g, "Back " + next_back);
        toClone2 = '<div id="b' + next_back + '"><div id="b' + next_back + 'L" class="label b' + next_back + '"></div><div id="b' + next_back + 'V" class="foreground b' + next_back + '"></div></div>';
        $("#backContent").append(toClone2);
        $("#backField").append(toClone1);
        $("#b" + next_back + "Currency").html($("#b1Currency").html());
        if (next_back == 20) {
            $("#addBack").toggle()
        }
        $("#b" + next_back + "Active").prop("checked", true);
        $("#addBack").focus();
        $("#b" + next_back + "ID").focus();
        $(".fieldsetHolder:last-child", "#backField").find("details").details();
        next_back++;
        $(this).attr("data-next", next_back);
        $("#backField").find(".fieldsetHolder:not(.contracted)").css("overflow", "hidden").animate({
            height: "30px"
        }, 300, function() {
            $(this).addClass("contracted").data("cstatus", true)
        });
        $("#backField").find(".fieldsetHolder:last-child").animate({
            height: "430px"
        }, 300, function() {
            $(this).removeClass("contracted").data("cstatus", false)
        });
        $("#backField").sortable("refresh");
        $("#backField").css("min-height", ($("#backField").height() + 60) + "px");
        c.preventDefault()
    });
    $("#localeContainer").on("click", ".addLoc", function(c) {
        loc = $(this).attr("data-loc");
        toClone = '<textarea class="fieldHalf" name="' + loc + 'o[]" placeholder="' + window.plrequired + '"></textarea>&nbsp;<textarea class="fieldHalf ' + loc + 'Wipe" name="' + loc + 'l[]" value="" placeholder="' + window.plrequired + '"></textarea>';
        $(this).siblings(".innerSection").append(toClone).hide();
        $(this).siblings(".innerSection").fadeIn();
        c.preventDefault()
    });
    $("#addLocale").click(function(c) {
        next_lang = $(this).attr("data-next");
        toClone = window.localeClone;
        toClone = toClone.replace(/loc0/g, "loc" + next_lang);
        $("#localeContainer").append(toClone);
        $("#loc" + next_lang + "t").html($("#loc1t").html());
        $("#loc" + next_lang + "t").change(function() {
            toCheck = $(this).attr("id").replace("t", "Active");
            $("#" + toCheck).prop("checked", true)
        });
        eventHandlers(".imageDragloc" + next_lang);
        window.localeCount++;
        $("#addLocale").focus();
        $("#loc" + next_lang + "t").focus();
        next_lang++;
        $(this).attr("data-next", next_lang);
        if (next_lang === 21) {
            $("#addLocale").toggle()
        }
        c.preventDefault()
    });
    $("#addLocation").click(function(c) {
        next_loc = $(this).attr("data-next");
        toClone = window.locationClone;
        toClone = toClone.replace(/l0/g, "l" + next_loc);
        $("#locContainer").append(toClone);
        $("#l" + next_loc + "n, #l" + next_loc + "Lat, #l" + next_loc + "Lon, #l" + next_loc + "c").val("");
        $("#l" + next_loc + "Active").prop("checked", false);
        if (next_loc == 10) {
            $("#addLocation").toggle()
        }
        $("#addLocation").focus();
        $("#l" + next_loc + "n").focus();
        next_loc++;
        $(this).attr("data-next", next_loc);
        c.preventDefault()
    });
    $("#addBeacon").click(function(c) {
        next_bec = $(this).attr("data-next");
        toClone = window.beaconClone;
        toClone = toClone.replace(/bec0/g, "bec" + next_bec);
        $("#becContainer").append(toClone);
        $("#bec" + next_bec + "n, #bec" + next_bec + "u, #bec" + next_bec + "Maj, #bec" + next_bec + "Min, #bec" + next_bec + "c").val("");
        $("#bec" + next_bec + "Active").prop("checked", false);
        if (next_bec == 10) {
            $("#addBeacon").toggle()
        }
        $("#addBeacon").focus();
        $("#bec" + next_bec + "n").focus();
        next_bec++;
        $(this).attr("data-next", next_bec);
        c.preventDefault()
    });

    function b() {
        $("#locContainer").on("click", ".address", function(c) {
            window.gMap = $(this).attr("data-loc");
            $("#gmap").lightbox_me({
                centered: true,
                onLoad: function() {
                    if ($("#" + window.gMap + "n").val().length) {
                        $("#addres").val($("#" + window.gMap + "n").val()).focus()
                    } else {
                        $("#addres").val("").focus()
                    }
                    if ($("#" + window.gMap + "Lat").val().length && $("#" + window.gMap + "Lon").val().length) {
                        mapInitialise($("#" + window.gMap + "Lat").val(), $("#" + window.gMap + "Lon").val(), 16)
                    } else {
                        if ($("#" + window.gMap + "n").val().length) {
                            mapInitialise();
                            geocode()
                        } else {
                            mapInitialise(39.91, 3.52, 1)
                        }
                    }
                }
            });
            c.preventDefault()
        })
    }
    b();

    function a() {
        $("#locContainer").on("keydown", ".locInput", function(d) {
            button = "#" + $(this).attr("data-find");
            code = (d.keyCode ? d.keyCode : d.which);
            if (code === 13) {
                var c = setTimeout(function() {
                    $(button).trigger("click")
                }, 10)
            }
        })
    }
    a();
    $("#gcode").submit(function() {
        geocode();
        return false
    });
    $("#useLoc").click(function(c) {
        $("#" + window.gMap + "Lat").val($("#lat").html());
        $("#" + window.gMap + "Lon").val($("#lng").html());
        if (!$("#" + window.gMap + "n").val().length) {
            $("#" + window.gMap + "n").val($("#addres").val())
        }
        $("#" + window.gMap + "Active").prop("checked", true);
        $("#gmap").trigger("close");
        $("#" + window.gMap + "c").focus()
    });
    $(".toggleMe").click(function(d) {
        var c = $(this).attr("data-toggle-div-id");
        $("#" + c).toggle();
        if ($(this).hasClass("toggleClosed")) {
            $(this).removeClass("toggleClosed");
            $(this).addClass("toggleOpen")
        } else {
            $(this).removeClass("toggleOpen");
            $(this).addClass("toggleClosed")
        }
        return false
    })
}
window.ctrlPressed = false;

function changeEvents() {
    var a = $("#backField, #contentFront fieldset");
    var b = $("#backFields, #contentFront, #config");
    b.on("change", function() {
        window.passUnchanged = false
    });
    a.on("change", ".sType", function(d) {
        $(this).parent().parent().siblings(".TFormat, .DFormat, .NFormat, .CFormat, .DRelative").hide();
        $("#" + $(this).attr("id").replace("Type", "fields")).children().children(".iValue").scroller("destroy");
        switch ($(this).val()) {
            case "text":
                $(this).parent().parent().siblings(".TFormat").fadeIn();
                window.contentCallback($(this).attr("data-sid"));
                $txt = $("#" + $(this).attr("id").replace("Type", "fields")).children().children(".iValue");
                $txt.removeClass("tzdate");
                break;
            case "number":
                $(this).parent().parent().siblings(".NFormat").fadeIn();
                $num = $("#" + $(this).attr("id").replace("Type", "fields")).children().children(".iValue");
                $num.removeClass("tzdate");
                if (!(!isNaN(parseFloat($num.val())) && isFinite($num.val()))) {
                    c($num)
                } else {
                    window.contentCallback($(this).attr("data-sid"))
                }
                break;
            case "date":
            case "datetime":
                $(this).parent().parent().siblings(".DFormat, .DRelative").fadeIn();
                $date = $("#" + $(this).attr("id").replace("Type", "fields")).children().children(".iValue");
                if (!checkDate($date.val())) {
                    c($date)
                } else {
                    window.contentCallback($(this).attr("data-sid"))
                }
                if (!$date.hasClass("tzdate")) {
                    $date.addClass("tzdate")
                }
                $date.scroller({
                    preset: $(this).val(),
                    theme: "ios",
                    display: "modal",
                    mode: "scroller"
                });
                break;
            case "currency":
                $(this).parent().parent().siblings(".CFormat").fadeIn();
                $cur = $("#" + $(this).attr("id").replace("Type", "fields")).children().children(".iValue");
                $cur.removeClass("tzdate");
                if (!(!isNaN(parseFloat($cur.val())) && isFinite($cur.val()))) {
                    c($cur)
                } else {
                    window.contentCallback($(this).attr("data-sid"))
                }
                break
        }
    });
    a.on("change", ".currencySelect, .dataFormat", function(d) {
        window.contentCallback($(this).attr("data-sid"))
    });

    function c(d) {
        $("#" + d.attr("data-sid")).html("");
        justifyRow(d.attr("data-sid"));
        d.val("")
    }
    $("input:radio[name='sn']").click(function() {
        if ($(this).val() !== "fixed") {
            $("#serialFixed").fadeOut()
        } else {
            $("#serialFixed").fadeIn()
        }
    });
    $("#distNumber").change(function() {
        $(".passLimit").fadeOut();
        if ($(this).val() == 1) {
            $(".passLimit").fadeIn()
        }
    });
    $("#distType").change(function() {
        changeURL()
    });
    $("#distPasswd").change(function() {
        $(".passPassword").fadeOut();
        if ($(this).val() == 1) {
            $(".passPassword").fadeIn()
        }
    });
    $("#distePasswd").change(function() {
        $(".passePassword").fadeOut();
        if ($(this).val() == 1) {
            $(".passePassword").fadeIn()
        }
    });
    $("#distDate").change(function() {
        $(".passLimitD").fadeOut();
        if ($(this).val() == 1) {
            $(".passLimitD").fadeIn()
        }
    });
    $("#live").change(function() {
        if ($(this).prop("checked") && typeof(window.pubURL) != "undefined") {
            $(".dist_left, .dist_right").fadeIn()
        } else {
            $(".dist_left, .dist_right").fadeOut()
        }
    });
    $("#logoTxt").on("keyup", function(d) {
        $("#logoText").html(sanitise($(this).val()))
    });
    $("#beacons").on("change", ".becInput", function(f) {
        $(this).parent().find(".iCheckbox").prop("checked", true);
        var d = $(this).attr("data-target-id");
        if ($(this).val().match(/^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i)) {
            $("#" + d).val($(this).val())
        } else {
            jCall({
                a: "format",
                el: ";" + d,
                t: "u",
                v: $(this).val().replace("#", "%23").replace("+", "%2b").replace("&", "%26")
            }, true)
        }
    });
    a.on("keyup change blur", ".iid, .iLabel, .iValue", function(d) {
        $toCheck = $("#" + $(this).attr("id").substring(0, 2) + "Active");
        if (!$toCheck.prop("checked")) {
            $toCheck.trigger("click")
        }
    });
    a.on("keyup blur", ".iValue, .iLabel", function(d) {
        field = $(this).attr("data-sid");
        $field = $("#" + field);
        sfield = field.substr(0, 1);
        newVal = $(this).val();
        $(fieldSet = "#" + $(this).attr("data-op")).val(newVal);
        if (sfield === "b") {
            if ($(this).hasClass("iValue")) {
                $field.css("font-size", "15px")
            }
            if ($field.height() > 102) {
                $field.css("font-size", "66%")
            }
        }
        if (newVal !== $(this).attr("data-ov")) {
            if (field.substr(-1, 1) === "V") {
                window.fCallback = field;
                $("#" + $(this).attr("id") + ", #" + $(this).attr("data-op")).attr("data-ov", newVal);
                typewatch(function() {
                    window.contentCallback()
                }, 300)
            } else {
                if (sfield !== "b") {
                    window.justify = field;
                    pinHtml = ((field === "p1L" && $("body").hasClass("boardingPass")) ? '<span class="pin"></span>' : "");
                    $field.html(pinHtml + sanitise($(this).val()));
                    typewatch(function() {
                        window.justifyRow()
                    }, 300)
                } else {
                    $field.html(sanitise($(this).val()))
                }
            }
        }
    });
    a.on("change", ".iCheckbox", function(d) {
        fieldName = $(this).attr("name");
        $fieldSet = $("." + fieldName);
        if (!$(this).prop("checked")) {
            $fieldSet.fadeOut(250);
            if (fieldName.substr(0, 1) !== "b") {
                window.justify = fieldName.substr(0, 1);
                typewatch(function() {
                    window.justifyRow()
                }, 300)
            }
        } else {
            $fieldSet.fadeIn(250);
            if (fieldName.substr(0, 1) !== "b") {
                window.justify = fieldName.substr(0, 1);
                window.justifyRow()
            }
        }
    });
    b.on("keyup blur", ".iid, #pname", function() {
        if ($(this).val().match(/[^-\sA-Z0-9a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u0300-\u036F\u203F-\u2040]/)) {
            $(this).val($(this).val().replace(/[^-\sA-Z0-9a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u0300-\u036F\u203F-\u2040]/g, ""))
        }
    });
    a.on("click", ".iStat, .iStatd", function(d) {
        classClicked = ($(this).hasClass("iStat") ? "" : "d");
        classNotClicked = (classClicked === "d" ? "" : "d");
        enable = ".stat" + classClicked + $(this).attr("data-sid").toLowerCase();
        disable = ".stat" + classNotClicked + $(this).attr("data-sid").toLowerCase();
        $fieldSet = $(enable).prop("disabled", false).removeClass("disabled");
        $fieldSet = $(disable).prop("disabled", true).addClass("disabled")
    });
    a.on("change", ".sAlign", function() {
        alignFields(this)
    });
    $("#bg").on("keyup change", function(d) {
        if (d.keyCode == 13 || d.keyCode == 27) {
            this.blur()
        }
        $(".pass").css("background", "#" + this.value);
        document.getElementById("cpc").innerHTML = ".info{background:url('images/info.php?c1=" + contrastColour(this.value) + "&c2=" + contrastColour(this.value) + "&t=0.3');"
    });
    $("#lb").on("keyup change", function(d) {
        if (d.keyCode == 13 || d.keyCode == 27) {
            this.blur()
        }
        document.getElementById("cpl").innerHTML = ".label{color:#" + this.value + ";}.boardingPass span.pin{background:url('images/dpin.php?c1=" + this.value + "') no-repeat;}.air{background:url('images/plane.php?c1=" + this.value + "') no-repeat;}.train{background:url('images/train.php?c1=" + this.value + "') no-repeat;}.bus{background:url('images/bus.php?c1=" + this.value + "') no-repeat;}.boat{background:url('images/boat.php?c1=" + this.value + "') no-repeat;}.gen{background:url('images/gen.php?c1=" + this.value + "') no-repeat;}"
    });
    $("#fg").on("keyup change", function(d) {
        if (d.keyCode == 13 || d.keyCode == 27) {
            this.blur()
        }
        document.getElementById("cpf").innerHTML = ".foreground{color:#" + this.value + ";}.coupon .p1.label, .storeCard .p1.label{color:#" + this.value + ";}"
    });
    $(".languagel").on("change", function() {
        toCheck = $(this).attr("id").replace("t", "Active");
        $("#" + toCheck).prop("checked", true)
    });
    $("#barcodeType").change(function() {
        var d = is_square($(this).val()).trim(" .");
        if (d === "sq" && !$("body").hasClass("sq")) {
            $("body").addClass(d)
        } else {
            if ($("body").hasClass("sq") && d !== "sq") {
                $("body").removeClass("sq")
            }
        }
        $("#barcodeContainer").switchClass($("#barcodeContainer").attr("class"), $("#barcodeType").val().replace("none", "nobc"), 500);
        if ($(this).val() !== "none") {
            $("#barcode > img").attr("src", "https://d1ye292yvr7tf6.cloudfront.net/images/barcode.php?m=" + encodeURIComponent($("#barcodeMessage").val()) + ($("#encoding").val() ? "&e=" + encodeURIComponent($("#encoding").val()) : "") + "&f=" + encodeURIComponent($(this).val().replace("_e", "")))
        }
        checkBackgroundImages();
        checkInfoBut();
        enableFields(false, (is_square($(this).val()).trim() ? is_square($(this).val()).trim() : "x"));
        justifyAll()
    });
    $("#tType").change(function() {
        $("#transport").switchClass($("#transport").attr("class").replace("transport ", ""), $("#tType").val().replace("generic", "gen"))
    });
    $("#barcodeMessage, #encoding").change(function() {
        $("#barcode > img").attr("src", "https://d1ye292yvr7tf6.cloudfront.net/images/barcode.php?m=" + encodeURIComponent($("#barcodeMessage").val()) + ($("#encoding").val() ? "&e=" + encodeURIComponent($("#encoding").val()) : "") + "&f=" + encodeURIComponent($("#barcodeType").val()))
    });
    $("#barcodeMessage").keyup(function() {
        window.barcodeCustom = $(this).val();
        checkInfoBut()
    });
    $("#barcodeAlt").keyup(function() {
        $("#barcodeText").html($(this).val());
        checkInfoBut();
        window.barcodeCustomAlt = $(this).val()
    });
    $("#barcodeMessage").keyup(function() {
        if ($("#barcodeAltText").val() === "mirror") {
            $("#barcodeText").html($(this).val())
        }
    });
    $("#barcodeAction").change(function() {
        switch ($(this).val()) {
            case "serial":
                $("#fixedBarcode").fadeOut();
                $("#barcodeMessage").val(($("#userSerial").val() ? $("#userSerial").val() : "Pass serial number"));
                break;
            case "url":
                $("#fixedBarcode").fadeOut();
                $("#barcodeMessage").val((("#editURL").html() ? ("#editURL").html() : "Please save pass to generate URL"));
                break;
            case "input":
                $("#fixedBarcode").fadeOut();
                $("#barcodeMessage").val("Set when pass is created");
                break;
            case "custom":
                $("#fixedBarcode").fadeIn();
                toEncode = (typeof window.barcodeCustom === "undefined" ? "" : window.barcodeCustom);
                $("#barcodeMessage").val(toEncode);
                break
        }
        checkInfoBut();
        $("#barcode > img").attr("src", "https://d1ye292yvr7tf6.cloudfront.net/images/barcode.php?m=" + encodeURIComponent($("#barcodeMessage").val()) + ($("#encoding").val() ? "&e=" + encodeURIComponent($("#encoding").val()) : "") + "&f=" + encodeURIComponent($("#barcodeType").val()));
        if ($("#barcodeAltText").val() === "mirror") {
            $("#barcodeAlt").val($("#barcodeMessage").val());
            $("#barcodeText").html($("#barcodeAlt").val())
        }
    });
    $("#barcodeAltText").change(function() {
        switch ($(this).val()) {
            case "mirror":
                $("#fixedBarcodeAlt").fadeOut();
                $("#barcodeAlt").val($("#barcodeMessage").val());
                $("#barcodeText").html($("#barcodeAlt").val());
                $("#barcodeText").fadeIn();
                break;
            case "serial":
                $("#fixedBarcodeAlt").fadeOut();
                $("#barcodeAlt").val(($("#userSerial").val() ? $("#userSerial").val() : "Pass serial number"));
                $("#barcodeText").html($("#barcodeAlt").val());
                $("#barcodeText").fadeIn();
                break;
            case "url":
                $("#fixedBarcodeAlt").fadeOut();
                $("#barcodeAlt").val((("#editURL").html() ? ("#editURL").html() : "Please save pass To generate URL"));
                $("#barcodeText").html($("#barcodeAlt").val());
                $("#barcodeText").fadeIn();
                break;
            case "input":
                $("#fixedBarcodeAlt").fadeOut();
                $("#barcodeAlt").val("Set when pass is created");
                $("#barcodeText").html($("#barcodeAlt").val());
                $("#barcodeText").fadeIn();
                break;
            case "custom":
                $("#fixedBarcodeAlt").fadeIn();
                toEncode = (typeof window.barcodeCustomAlt === "undefined" ? "" : window.barcodeCustomAlt);
                $("#barcodeAlt").val(toEncode);
                $("#barcodeText").html($("#barcodeAlt").val());
                $("#barcodeText").fadeIn();
                break;
            case "none":
                window.barcodeCustomAlt = $("#barcodeAlt").val();
                $("#fixedBarcodeAlt").fadeOut();
                $("#barcodeText").html("");
                break
        }
        checkInfoBut()
    });
    $("#passTz").change(function() {
        window.userTimezone = $(this).val();
        $(".tzdate").each(function(d, e) {
            newTime = ($(this).val() ? $(this).val().substr(0, 19) + $("#passTz").val() : "");
            $(this).val(newTime);
            if (typeof $(this).attr("data-sid") != "undefined") {
                contentCallback($(this).attr("data-sid"))
            }
        })
    });
    $(window).keydown(function(d) {
        if (d.which == 17 || d.which == 91) {
            window.ctrlPressed = true
        }
    }).keyup(function(d) {
        if (d.which == 17 || d.which == 91) {
            window.ctrlPressed = false
        }
    });
    $("#save").hover(function() {
        $("#progress_bar").addClass("saveHover")
    }, function() {
        $("#progress_bar").removeClass("saveHover")
    })
}

function bg_colour_change(a) {
    $(".pass").css("background", "#" + a)
}

function fg_colour_change(a) {
    $(".foreground").css("color", "#" + a);
    if ($("body").hasClass("coupon") || $("body").hasClass("storeCard")) {
        if (!$("body").hasClass("simg")) {
            $(".foreground.p1").css("color", "#" + a)
        } else {
            $(".foreground.p1").css("color", "#" + $("#sc").val())
        }
    }
}

function lb_colour_change(a) {
    $(".label").css("color", "#" + a);
    if ($("body").hasClass("coupon") || $("body").hasClass("storeCard") || $("body").hasClass("eventTicket")) {
        if (!$("body").hasClass("simg")) {
            $(".label.p1").css("color", "#" + $("#fg").val())
        } else {
            $(".label.p1").css("color", "#" + $("#sc").val())
        }
    }
}

function st_colour_change(a) {
    if ($("body").hasClass("coupon") || $("body").hasClass("storeCard") || $("body").hasClass("eventTicket")) {
        if ($("body").hasClass("simg")) {
            $(".label.p1").css("color", "#" + a);
            $(".foreground.p1").css("color", "#" + a)
        }
    }
}

function eventHandlers(a) {
    $(a).droparea({
        init: function(b) {},
        start: function(b) {
            b.find(".error").remove();
            b.find("input").val("")
        },
        error: function(b, c, d) {
            d.find(".error").remove();
            $('<div class="error">').html(b.error).prependTo(d);
            d.find(".instructions").empty();
            return 0
        },
        complete: function(b, d, c, e) {
            if (b.error) {
                $('<div class="error">').html(b.error).prependTo(e);
                e.find(".instructions").empty();
                return 0
            }
            if ((/image/i).test(d.type)) {
                e.find(".instructions").empty();
                e.find("img").remove();
                if (b.t === "b" && $("body").hasClass("eventTicket")) {
                    e.append($("<img>", {
                        src: b.e,
                        width: 160,
                        height: 200,
                        alt: ""
                    }));
                    if (!$("body").hasClass("bg")) {
                        $("body").addClass("bg")
                    }
                } else {
                    if ($("body").hasClass("eventTicket") && typeof b.y != "undefined") {
                        e.append($("<img>", {
                            src: b.y,
                            alt: ""
                        }))
                    } else {
                        if (is_square() && typeof b.s != "undefined") {
                            e.append($("<img>", {
                                src: b.s,
                                alt: ""
                            }))
                        } else {
                            e.append($("<img>", {
                                src: b.w,
                                alt: ""
                            }))
                        }
                    }
                }
                switch (b.t) {
                    case "b":
                        $(".eventImage").attr("src", b.e);
                        $("#" + b.ide).val(b.id);
                        if ($("#is").val() && $("body").hasClass("simg")) {
                            $("body").removeClass("simg")
                        }
                        enableFields();
                        justifyAll(true);
                        break;
                    case "s":
                        $(".eventImage").attr("src", b.e);
                        if ($("body").hasClass("eventTicket")) {
                            $(".back").css("background-image", "url('" + b.y + "')")
                        } else {
                            if (is_square()) {
                                $(".back").css("background-image", "url('" + b.s + "')")
                            } else {
                                $(".back").css("background-image", "url('" + b.w + "')")
                            }
                        }
                        if (!$("body").hasClass("simg")) {
                            $("body").addClass("simg")
                        }
                        if ($("#ib").val() && $("body").hasClass("bg")) {
                            $("body").removeClass("bg")
                        }
                        if ($("#it").val() && $("body").hasClass("ht")) {
                            $("body").removeClass("ht")
                        }
                        $("#p1V, #p1L").removeAttr("style");
                        if (!$("#p1Active").prop("checked")) {
                            $("#p1V, #p1L").hide()
                        }
                        enableFields();
                        justifyAll(true);
                        if (!$("#ss").prop("checked")) {
                            $(".stripShine").fadeIn()
                        }
                        $("#" + b.ide).val(b.id);
                        break;
                    case "t":
                        $("#thumbnail").attr("src", b.w);
                        $("#thumbnail").fadeIn();
                        $("#" + b.ide).val(b.id);
                        if (!$("body").hasClass("ht")) {
                            $("body").addClass("ht")
                        }
                        if ($("#is").val() && $("body").hasClass("simg")) {
                            $("body").removeClass("simg")
                        }
                        enableFields();
                        justifyAll();
                        break;
                    case "f":
                        $("#footerImage").attr("src", b.w);
                        $("#footerImage").fadeIn();
                        $("#" + b.ide).val(b.id);
                        break;
                    case "l":
                        $("#logoImage").attr("src", b.w);
                        $("#logoText").html("");
                        $("#logoImage").fadeIn();
                        setTimeout(function() {
                            $("#logoText").html(sanitise($("#logoTxt").val())).fadeIn()
                        }, 500);
                        $("#" + b.ide).val(b.id);
                        break;
                    case "i":
                        $("#" + b.ide).val(b.id);
                        break
                }
            }
        }
    })
}
$(function() {
    $("#i, .datePick").scroller({
        preset: "datetime",
        theme: "ios",
        display: "modal",
        mode: "scroller"
    });
    $(".dateoPick").scroller({
        preset: "date",
        theme: "ios",
        display: "modal",
        mode: "scroller"
    });
    $("#configFields, #contentFront, #backFields, #distFields").on("change", "#i, .datePick, .dateoPick", function() {
        $(this).val($(this).val().trim())
    })
});
(function(a) {
    a.fn.toggleDisabled = function() {
        return this.each(function() {
            this.disabled = !this.disabled
        })
    }
})(jQuery);

function switchClasses(a, c, b) {
    if ($(a).hasClass(c)) {
        $(a).removeClass(c)
    }
    if ($(a).hasClass(b)) {
        $(a).removeClass(b)
    }
    $(a).addClass(b)
}

function contrastColour(f) {
    var d = parseInt(f.substr(0, 2), 16);
    var c = parseInt(f.substr(2, 2), 16);
    var a = parseInt(f.substr(4, 2), 16);
    var e = ((d * 299) + (c * 587) + (a * 114)) / 1000;
    return (e >= 128) ? "000" : "FFF"
}

function prepLinks(d) {
    var a = document.createElement("p");
    a.innerHTML = d;
    var e = a.getElementsByTagName("a");
    var f = [];
    for (var c = 0; c < e.length; c++) {
        var b = e[c].href;
        var g = e[c].textContent;
        if (g === undefined) {
            g = e[c].innerText
        }
        d = d.replace('<a href="' + b + '">' + g + "</a>", b).replace("<a href='" + b + "'>" + g + "</a>", b).replace('<a href="' + b.substring(0, b.length - 1) + '">' + g + "</a>", b.substring(0, b.length - 1)).replace("<a href='" + b.substring(0, b.length - 1) + "'>" + g + "</a>", b.substring(0, b.length - 1))
    }
    return d
}

function sanitise(a) {
    return a.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\n/g, " <br/>")
}

function jCall(f, a) {
    var d = (a ? window.ajaxLocalPath : window.cfbucket) + "ajax.php?";
    for (var e in f) {
        d += e + "=" + f[e] + "&"
    }
    if (a) {
        var c = new Date().getTime();
        d += "cache=" + c + "&"
    }
    d += "cb=jcb" + window.jcb;
    var b = document.createElement("script");
    b.setAttribute("src", d);
    b.setAttribute("id", "jcb" + window.jcb);
    window.jcb++;
    document.getElementsByTagName("head")[0].appendChild(b)
}

function justifyAll(a) {
    if (typeof a == "undefined") {
        var a = false
    }
    if (a) {
        justifyRow("h")
    }
    justifyRow("a");
    justifyRow("s");
    justifyRow("p")
}

function shrinkBackfields() {
    $("#backContent").children().children(".foreground").each(function() {
        $(this).css("font-size", "15px");
        if ($(this).height() > 102) {
            $(this).css("font-size", "9px")
        }
    })
}

function storeSelectValues() {
    $(".currencySelect, .langSelect").each(function() {
        if ($(this).val() != null) {
            window.storedSelectValues[$(this).attr("id")] = $(this).val()
        }
    })
}

function fixSelects() {
    $(".sType").each(function() {
        if ($(this).val() === "date" || $(this).val() === "datetime") {
            $(this).parent().parent().siblings(".DFormat, .DRelative").show()
        }
    });
    if ($("#distNumber").val() == "1") {
        $(".passLimit").show()
    }
    if ($("#distDate").val() == "1") {
        $(".passLimitD").show()
    }
    if ($("#distPasswd").val() == "1") {
        $(".passPassword").show()
    }
    if ($("#distePasswd").val() == "1") {
        $(".passePassword").show()
    }
}

function applySelectValues(b, a) {
    a = a.replace(";", "#");
    $(a).html(b);
    $(a).each(function() {
        if (window.storedSelectValues[$(this).attr("id")] != undefined) {
            $(this).val(window.storedSelectValues[$(this).attr("id")]);
            if ($(this).hasClass("currencySelect")) {
                $(this).parent().parent().show()
            }
        }
    })
}

function styleTag(a) {
    var b = document.createElement("style");
    b.setAttribute("id", a);
    document.getElementsByTagName("head")[0].appendChild(b)
}

function applyColour(a) {
    document.getElementById("cpc").innerHTML = a
}

function applyHtml(c, b, a) {
    if (typeof a == "undefined") {
        var a = false
    }
    b = b.replace(";", "#");
    $(b).html(c);
    if (a) {
        justifyRow(b.replace("#", ""))
    }
}

function applyValue(b, a) {
    a = a.replace(";", "#");
    $(a).val(b)
}
var tzOffset = (new Date().getTimezoneOffset() / 60) * -1;

function tzselect(f, b) {
    var a = (b != "set");
    var d = {
        "-12": "-12:00",
        "-11": "-11:00",
        "-10": "-10:00",
        "-9.5": "-09:30",
        "-9": "-09:00",
        "-8": "-08:00",
        "-7": "-07:00",
        "-6": "-06:00",
        "-5": "-05:00",
        "-4.5": "-04:30",
        "-4": "-04:00",
        "-3.5": "-03:30",
        "-3": "-03:00",
        "-2.5": "-02:30",
        "-2": "-02:00",
        "-1": "-01:00",
        "0": "Z",
        "1": "+01:00",
        "2": "+02:00",
        "3": "+03:00",
        "3.5": "+03:30",
        "4": "+04:00",
        "4.5": "+04:30",
        "5": "+05:00",
        "5.5": "+05:30",
        "5.75": "+05:45",
        "6": "+06:00",
        "6.5": "+06:30",
        "7": "+07:00",
        "8": "+08:00",
        "8.75": "+08:45",
        "9": "+09:00",
        "9.5": "+09:30",
        "10": "+10:00",
        "10.5": "+10:30",
        "11": "+11:00",
        "11.5": "+11:30",
        "12": "+12:00",
        "12.75": "+12:45",
        "13": "+13:00",
        "14": "+14:00"
    };
    var e = "";
    for (var c in d) {
        e += "<option value=" + d[c] + (a && b == d[c] ? ' selected="selected">' : ((!a && c == f) ? ' selected="selected">' : ">")) + d[c] + "</option>"
    }
    return e
}

function is_square(a) {
    a = (!a ? $("#barcodeType").val() : a);
    switch (a) {
        case "aztec":
        case "qr":
        case "aztec_e":
        case "qr_e":
            return " sq";
            break
    }
    return ""
}

function alignFields(a) {
    $fieldSet = $("." + $(a).attr("name").slice(0, -1));
    newAlign = ($(a).val() == "natural" ? "justify" : $(a).val());
    $fieldSet.css("text-align", newAlign)
}

function updateAlignment() {
    $(".sAlign").each(function() {
        alignFields(this)
    })
}

function checkInfoBut() {
    w = $("#barcodeContainer").width();
    if (w >= 240 && is_square()) {
        if (!$(".info").hasClass("dark")) {
            $(".info").addClass("dark")
        }
    } else {
        if ($(".info").hasClass("dark")) {
            $(".info").removeClass("dark")
        }
    }
}

function getOffset(a) {
    if (typeof window.userTimezone !== "undefined") {
        return window.userTimezone
    }
    y = a.getTimezoneOffset() * -1;
    s = (y < 0 ? "-" : (y > 0 ? "+" : "Z"));
    h = Math.floor(Math.abs(y) / 60);
    return (s === "Z" ? s : s + pad(h, 2) + ":" + pad(Math.abs(y % 60), 2)).trim()
}

function pad(a, b) {
    var c = "00" + a;
    return c.substr(c.length - b)
}

function checkDate(a) {
    re = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    return a.trim().match(re)
}

function getImageSize(b) {
    var a = $(b)[0];
    var c = new Object();
    pic_real_width, pic_real_height;
    $("<img/>").attr("src", $(a).attr("src")).load(function() {
        c.width = this.width;
        c.height = this.height
    });
    return c
}

function checkBackgroundImages() {
    if ($("body").hasClass("eventTicket")) {
        $(".back").css("background-image", $(".back").css("background-image").replace("sx.png", "afr.png").replace("s.png", "afr.png").replace("afr.png", "sy.png"));
        if ($(".s5").children("img").length) {
            $(".s5").children("img").attr("src", $(".s5").children("img").attr("src").replace("sx.png", "afr.png").replace("s.png", "afr.png").replace("afr.png", "sy.png"))
        }
    } else {
        if ($("#is").val() && is_square()) {
            $(".back").css("background-image", $(".back").css("background-image").replace("s.png", "afr.png").replace("sy.png", "afr.png").replace("afr.png", "sx.png"));
            if ($(".s5").children("img").length) {
                $(".s5").children("img").attr("src", $(".s5").children("img").attr("src").replace("s.png", "afr.png").replace("sy.png", "afr.png").replace("afr.png", "sx.png"))
            }
        } else {
            if (!is_square() && $("#is").val() && !$("body").hasClass("eventTicket")) {
                $(".back").css("background-image", $(".back").css("background-image").replace("sx.png", "afr.png").replace("sy.png", "afr.png").replace("afr.png", "s.png"));
                if ($(".s5").children("img").length) {
                    $(".s5").children("img").attr("src", $(".s5").children("img").attr("src").replace("sx.png", "afr.png").replace("sy.png", "afr.png").replace("afr.png", "s.png"))
                }
            }
        }
    }
}

function loadfonts() {
    var b = document.createElement("link");
    b.type = "text/css";
    b.rel = "stylesheet";
    b.href = window.cfbucket + "css/fonts.css";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(b);
    var a = document.createElement("link");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.href = ("https:" == document.location.protocol ? "https:" : "http:") + "//fast.fonts.com/t/1.css?apiType=css&projectid=488ed05e-5402-494f-a449-cd962d5b5234";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a)
}

function doLogin(a) {
    if (a) {
        window.location.reload(true)
    } else {
        $("#alert").trigger("close");
        $("#logMenu").parent().append($('<li id="navAccount">').html('<a href="./account" rel="external">' + window.lx_myaccount + "</a>"));
        $("#logMenu").parent().append($('<li id="navLogout">').html('<a href="login/?logout" rel="external">' + window.lx_logout + "</a>"));
        $("#logMenu").hide();
        $("#userP").val("");
        jCall({
            a: "certs"
        }, true);
        typewatch(function() {
            jCall({
                a: "certs"
            }, true)
        }, 2000);
        typewatch(function() {
            if (!$("#privc").children(":first").attr("disabled")) {
                if (!$("#afr_label").length || !$("#afr_label").val()) {
                    $("#partnerpn").show();
                    $("#ppn").attr("disabled", false)
                }
            }
        }, 3000);
        FluidNav.goTo("home")
    }
}

function numonly(c) {
    var e = c.value;
    var b = e.length;
    var a = e.charAt(b - 1);
    if (e.length > 0) {
        var d = /[0-9]|\.,/;
        if (!a.match(d)) {
            e = e.slice(0, -1);
            $(c).val(e.replace(",", ""))
        }
    }
}

function changeURL() {
    if (!$("#defaultNoSave").length) {
        if (typeof(window.pubURL) == "undefined") {
            $(".dist_left, .dist_right").fadeOut();
            $("#noSave").fadeIn()
        } else {
            $("#noSave").html("");
            if ($("#distType").val() !== "private") {
                $("#qr").attr("src", window.cfbucket + "images/barcode.php?f=qr&s=180&m=" + url_distri + window.pubURL);
                $("#passURL").attr("href", url_distri + window.pubURL);
                $("#passURL").html(url_distri + window.pubURL)
            } else {
                $("#qr").attr("src", window.cfbucket + "images/barcode.php?f=qr&s=180&m=" + url_distri + window.privURL);
                $("#passURL").attr("href", url_distri + window.privURL);
                $("#passURL").html(url_distri + window.privURL)
            }
            $("#editURL").attr("href", url_pdistri + window.edURL);
            $("#editURL").html(url_pdistri + window.edURL);
            if ($("#live").prop("checked")) {
                $("#noSave").fadeOut();
                $(".dist_left, .dist_right").fadeIn()
            } else {
                $("#noSave").fadeOut();
                $(".dist_left, .dist_right").fadeOut()
            }
        }
    }
}

function linkify(e) {
    var b, d, c, a;
    d = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    b = e.replace(d, '<a href="$1" target="_blank">$1</a>').replace("://www", "://xxafrxx");
    c = /(\b(www)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    b = b.replace(c, '<a href="http://$1" target="_blank">$1</a>');
    b = b.replace("://xxafrxx", "://www");
    a = /([a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b)/gim;
    b = b.replace(a, '<a href="mailto:$1">$1</a>');
    return b
}

function sortableFieldsets(b, c) {
    if ((b.hasClass("ui-sortable"))) {
        return false
    }
    var a = 200;
    b.sortable({
        axis: "y",
        forceHelperSize: true,
        handle: ".sortableFieldHandle",
        items: ".fieldsetHolder",
        opacity: "0.6",
        helper: "original",
        delay: a,
        create: function(d, e) {
            $(this).on("mousedown", ".sortableFieldHandle", function(g) {
                sd = false;
                fs = true;
                if ($(this).parent().parent().data("cstatus")) {
                    var f = b.find(".fieldsetHolder:not(.contracted)");
                    if (f.length > 1) {
                        b.find(".fieldsetHolder").data("cstatus", true).addClass("contracted");
                        f[0].data("cstatus", false).removeClass("contracted");
                        var f = b.find(".fieldsetHolder:not(.contracted)")
                    }
                    if (f.length == 0) {
                        $(this).parent().parent().data("cstatus", false);
                        $(this).parent().parent().data("fstatus", true)
                    } else {
                        if (f.index() > $(this).parent().parent().index()) {
                            f.css("overflow", "hidden").animate({
                                height: "30px"
                            }, a, function() {
                                $(this).addClass("contracted").data("cstatus", true)
                            });
                            $(this).parent().parent().data("cstatus", false);
                            $(this).parent().parent().data("fstatus", true)
                        } else {
                            $(this).parent().parent().data("fstatus", true)
                        }
                    }
                } else {
                    b.find(".fieldsetHolder").data("cstatus", true);
                    $(this).parent().parent().data("cstatus", false);
                    $(this).parent().parent().data("fstatus", false);
                    $(this).parent().parent().css("overflow", "hidden").animate({
                        height: "30px"
                    }, a, function() {
                        b.find(".fieldsetHolder").addClass("contracted")
                    })
                }
            });
            $(this).on("click", ".sortableFieldHandle", function(f) {
                if (sd) {
                    return
                }
                if (!$(this).parent().parent().data("cstatus")) {
                    if ($(this).parent().parent().data("fstatus")) {
                        $(this).parent().parent().animate({
                            height: "430px"
                        }, a, function() {
                            $(this).removeClass("contracted").css("height", "auto")
                        });
                        $(this).parent().parent().data("fstatus", false)
                    } else {
                        $(this).parent().parent().data("cstatus", true)
                    }
                } else {
                    if ($(this).parent().parent().data("fstatus")) {
                        b.find(".fieldsetHolder:not(.contracted)").css("overflow", "hidden").animate({
                            height: "30px"
                        }, a, function() {
                            b.find(".fieldsetHolder").addClass("contracted")
                        });
                        b.find(".fieldsetHolder").data("cstatus", true);
                        $(this).parent().parent().data("cstatus", false);
                        $(this).parent().parent().data("fstatus", false);
                        $(this).parent().parent().animate({
                            height: "430px"
                        }, a, function() {
                            $(this).removeClass("contracted").css("height", "auto")
                        })
                    }
                }
                window.setTimeout(function() {
                    fs = false
                }, 400)
            })
        },
        stop: function(f, g) {
            sd = true;
            var e = [],
                j = 0;
            $('input[type="radio"]', b).each(function(k, l) {
                $(l).attr("data-guid", "xxxxxx".replace(/x/g, function(m) {
                    return (Math.random() * 16 | 0).toString(16)
                }));
                if ($(l).is(":checked")) {
                    e[j] = $(l).attr("data-guid");
                    j++
                }
            });
            var d = 1;
            $(".fieldsetHolder:visible", b).each(function(k, n) {
                if (!$(n).find("fieldset").is(":visible")) {
                    return true
                }
                var m = $(n).find("fieldset").attr("name");
                var l = c + d;
                d++;
                if (m == l) {
                    return true
                }
                $(this).attr("id", l + "fsH");
                $(this).find("fieldset, input, select, textarea, label, div, p").each(function(p, o) {
                    if ($(o).attr("id") != undefined) {
                        $(o).attr("id", $(o).attr("id").replace(m, l))
                    }
                    if ($(o).attr("name") != undefined) {
                        $(o).attr("name", $(o).attr("name").replace(m, l))
                    }
                    if ($(o).attr("for") != undefined) {
                        $(o).attr("for", $(o).attr("for").replace(m, l))
                    }
                    if ($(o).attr("data-sid") != undefined) {
                        $(o).attr("data-sid", $(o).attr("data-sid").replace(m, l))
                    }
                    if ($(o).attr("data-op") != undefined) {
                        $(o).attr("data-op", $(o).attr("data-op").replace(m, l))
                    }
                    if ($(o).attr("class") != undefined) {
                        $(o).attr("class", $(o).attr("class").replace("stat" + m, "stat" + l).replace("statd" + m, "statd" + l))
                    }
                })
            });
            $('input[type="radio"]', b).prop("checked", false);
            if (e.length > 0) {
                for (var j in e) {
                    $('input[type="radio"][data-guid="' + e[j] + '"]', b).prop("checked", true)
                }
            }
            var d = 1;
            $(".fieldsetHolder:visible", b).each(function(k, m) {
                if (!$(m).find("fieldset").is(":visible")) {
                    return true
                }
                var l = c + d;
                d++;
                $(m).find('input[name="' + l + 'l"],textarea[name="' + l + 'l"],input[name="' + l + 'v"],textarea[name="' + l + 'v"]').each(function(o, n) {
                    field = $(this).attr("data-sid");
                    $field = $("#" + field);
                    sfield = field.substr(0, 1);
                    newVal = $(this).val();
                    $(fieldSet = "#" + $(this).attr("data-op")).val(newVal);
                    if (c == "b") {
                        if ($(this).hasClass("iValue")) {
                            $field.css("font-size", "15px")
                        }
                        if ($field.height() > 102) {
                            $field.css("font-size", "66%")
                        }
                    }
                    if (field.substr(-1, 1) === "V") {
                        window.fCallback = field;
                        $("#" + $(this).attr("id") + ", #" + $(this).attr("data-op")).attr("data-ov", newVal);
                        window.contentCallback()
                    } else {
                        if (sfield !== "b") {
                            window.justify = field;
                            pinHtml = ((field === "p1L" && $("body").hasClass("boardingPass")) ? '<span class="pin"></span>' : "");
                            $field.html(pinHtml + sanitise($(this).val()));
                            window.justifyRow()
                        } else {
                            $field.html(sanitise($(this).val()))
                        }
                    }
                    justifyAll();
                    setup_sim()
                })
            });
            if (!$(g.item).data("cstatus")) {
                $(g.item).animate({
                    height: "430px"
                }, a, function() {
                    $(this).removeClass("contracted").css("height", "auto")
                })
            }
            window.setTimeout(function() {
                fs = false
            }, 400)
        }
    });
    b.on("click", ".fieldsetHolder:visible", function(d) {
        if (fs) {
            return
        }
        d.stopPropagation();
        if ($(this).data("cstatus")) {
            fs = true;
            $(this).parent().find(".fieldsetHolder:not(.contracted)").css("overflow", "hidden").animate({
                height: "30px"
            }, a, function() {
                $(this).addClass("contracted").data("cstatus", true)
            });
            $(this).animate({
                height: "430px"
            }, a, function() {
                $(this).removeClass("contracted").css("height", "auto").data("cstatus", false);
                fs = false
            })
        }
    });
    b.parent().css("min-height", (b.parent().height() + 60) + "px")
}
var fs = false;
var sd = false;

function setup_sim(d, c, b) {
    d = ((!d || typeof d == "undefined") ? $("input:radio[name='pt']:checked").val() : d);
    c = ((!c || typeof c == "undefined") ? (is_square() ? "s" : null) : ((c === "sq" || c === "s") ? "s" : null));
    b = ((!b || typeof b == "undefined") ? ((d === "eventTicket" && $("input:radio[name='et']:checked").val() === "strip") ? "strip" : null) : ((b === "strip") ? "strip" : null));
    if (!$("body").hasClass(d)) {
        $("body").addClass(d)
    }
    if (b && !$("body").hasClass("strip")) {
        $("body").addClass("strip")
    }
    if ($("#shs").prop("checked")) {
        $("#serialFixed").show()
    }
    window.userTimezone = $("#passTz").val();
    enableFields(d, c, b);
    $(".h1, .h2, .h3, .p1, .p2, .s1, .s2, .s3, .s4, .a1, .a2, .a3, .a4, .a5, .b1, .b2, .b3").hide();
    $(".iCheckbox").each(function() {
        if ($(this).prop("checked") && !$(this).prop("disabled")) {
            field = $(this).attr("name");
            $("." + field).show()
        }
    });
    if ($("#barcodeAction").val() === "custom") {
        $("#fixedBarcode").show();
        window.barcodeCustom = $("#barcodeMessage").val()
    }
    if ($("#barcodeAltText").val() === "custom") {
        $("#fixedBarcodeAlt").show();
        window.barcodeCustomAlt = $("#barcodeAlt").val()
    }
    $("#barcodeContainer").removeClass($("#barcodeContainer").attr("class")).addClass($("#barcodeType").val().replace("none", "nobc").replace("_e", ""));
    if (!$("#il").val()) {
        $(".passLogo").children("img").hide()
    }
    switchClasses(".passLogo", "label", "foreground");
    if ($("#ss").prop("checked")) {
        $(".stripShine").hide()
    }
    switch (d) {
        case "boardingPass":
            break;
        case "coupon":
        case "storeCard":
            break;
        case "eventTicket":
            switchClasses(".passLogo", "foreground", "label");
            $("#ettCont").show();
            break;
        case "generic":
            break
    }
    if (!window.initialised) {
        var a = $("div").find(".droparea");
        a.each(function() {
            imageEl = $(this).attr("data-ide");
            imageID = $("#" + imageEl).val();
            imageW = 0;
            if (imageID) {
                switch (imageEl.substr(1, 1)) {
                    case "i":
                        imageSrc = window.imageBucket + imageID + "i.png";
                        break;
                    case "b":
                        imageSrc = window.imageBucket + "cache/" + imageID + "be.png";
                        imageW = 160;
                        imageH = 200;
                        break;
                    case "l":
                        imageSrc = window.imageBucket + "cache/" + imageID + "lw.png";
                        break;
                    case "t":
                        imageSrc = window.imageBucket + imageID + "t.png";
                        break;
                    case "f":
                        imageSrc = window.imageBucket + imageID + "f.png";
                        break;
                    case "s":
                        if (d === "eventTicket") {
                            imageSrc = window.imageBucket + imageID + "sy.png"
                        } else {
                            if (is_square()) {
                                imageSrc = window.imageBucket + imageID + "sx.png"
                            } else {
                                imageSrc = window.imageBucket + imageID + "s.png"
                            }
                        }
                }
                $(this).parent().children(".instructions").html("");
                if (imageW > 0) {
                    $(this).parent().append($("<img>", {
                        src: imageSrc,
                        width: imageW,
                        height: imageH,
                        alt: ""
                    }))
                } else {
                    $(this).parent().append($("<img>", {
                        src: imageSrc,
                        alt: ""
                    }))
                }
            }
        })
    }
    window.initialised = true
}

function contentCallback(c, a, b) {
    if (typeof c == "undefined") {
        c = window.fCallback
    }
    fieldType = $("#" + c.slice(0, -1) + "Type").val();
    value = $("#" + c.slice(0, -1) + "Datas").val();
    data = {};
    doCallback = false;
    if (typeof value != "undefined" && value) {
        switch (fieldType) {
            case "text":
                if (c.charAt(0) === "b") {
                    value = prepLinks(value);
                    $("#" + c).html(linkify(sanitise(value)))
                } else {
                    $("#" + c).html(sanitise(value))
                }
                break;
            case "number":
                if (!isNaN(parseFloat(value)) && isFinite(value) || parseInt(value) === 0) {
                    if (parseInt(value) === 0) {
                        value = 0
                    }
                    data = {
                        a: "format",
                        el: ";" + c,
                        t: "n",
                        v: value,
                        f: $("#" + c.slice(0, -1) + "Nformat").val()
                    };
                    doCallback = true
                } else {
                    $("#" + c).html("")
                }
                break;
            case "currency":
                if ((!isNaN(parseFloat(value)) && isFinite(value)) || parseInt(value) === 0) {
                    if (parseInt(value) === 0) {
                        value = 0
                    }
                    data = {
                        a: "format",
                        el: ";" + c,
                        t: "c",
                        v: value,
                        f: $("#" + c.slice(0, -1) + "Currency").val()
                    };
                    doCallback = true
                } else {
                    $("#" + c).html("")
                }
                break;
            case "date":
                if (checkDate(value)) {
                    data = {
                        a: "format",
                        el: ";" + c,
                        t: "d",
                        v: value.replace("+", "*").trim(),
                        f: $("#" + c.slice(0, -1) + "Dformat").val(),
                        z: $("#passTz").val().replace("+", "*")
                    };
                    doCallback = true
                } else {
                    $("#" + c).html("")
                }
                break;
            case "datetime":
                if (checkDate(value)) {
                    data = {
                        a: "format",
                        el: ";" + c,
                        t: "d",
                        v: value.replace("+", "*").trim(),
                        f: $("#" + c.slice(0, -1) + "Dformat").val(),
                        m: true,
                        z: $("#passTz").val().replace("+", "*")
                    };
                    doCallback = true
                } else {
                    $("#" + c).html("")
                }
                break
        }
    } else {
        $("#" + c).html("")
    }
    if (doCallback) {
        if (typeof a != "undefined") {
            data.loc = a
        }
        jCall(data, true)
    } else {
        justifyRow(c)
    }
}

function justifyRow(j) {
    if (!window.initialised) {
        return false
    }
    if (typeof j == "undefined") {
        j = window.justify
    }
    j = j.substr(0, 1);
    j = window.fieldTypes[j];
    var l = j.substring(0, 1);
    var a = parseInt($("#" + j).attr("data-m"));
    var d = parseInt($("#" + j).attr("data-s"));
    var e = parseInt($("#" + j).css("width"));
    window.rowItems[j] = 0;
    window.thisRowSet = {};
    var g = {};
    var k = 0;
    $(".factive").each(function() {
        $thisID = $(this).attr("id");
        if ($thisID.substring(0, 1) == l && $(this).prop("checked") && !$(this).prop("disabled")) {
            k++;
            window.rowItems[j]++;
            window.thisRowSet[k] = $thisID.substr(1, 1);
            g[k] = $thisID.substr(1, 1)
        }
    });
    if (window.rowItems[j] > 1) {
        eachWidth = Math.floor((e - (a * (window.rowItems[j] - 1))) / window.rowItems[j])
    } else {
        eachWidth = e;
        a = 0
    }
    i = 1;
    var f = 1;
    elementsToSet = window.rowItems[j];
    pixelAdjust = ((navigator.userAgent.indexOf("Firefox") > 0 || navigator.userAgent.indexOf("Opera") > 0) ? 1 : 1);
    while (i <= window.rowItems[j]) {
        $("#" + l + window.thisRowSet[i] + "L").removeAttr("style");
        $("#" + l + window.thisRowSet[i] + "V").removeAttr("style");
        i++
    }
    var b = $("#" + l + "1V").css("white-space");
    var c = false;
    if (b != "nowrap" && b) {
        reverseFontSize = $("#" + l + "1V").css("font_size");
        c = true;
        i = 1;
        while (i <= window.rowItems[j]) {
            $("#" + l + window.thisRowSet[i] + "V").css("white-space", "nowrap").html($("#" + l + window.thisRowSet[i] + "V").html().replace(/ /g, "__"));
            i++
        }
    }
    i = 1;
    while (i <= window.rowItems[j]) {
        f = 1;
        while (f <= window.rowItems[j]) {
            if (window.thisRowSet[f]) {
                $label = $("#" + l + window.thisRowSet[f] + "L");
                $fg = $("#" + l + window.thisRowSet[f] + "V");
                dw = parseInt($fg.innerWidth());
                lw = parseInt($label.innerWidth());
                $label.removeAttr("style");
                $fg.removeAttr("style");
                if (dw < eachWidth && lw < eachWidth) {
                    iw = Math.max(dw, lw);
                    $label.css("width", (iw + pixelAdjust) + "px");
                    $fg.css("width", (iw + pixelAdjust) + "px");
                    e -= (iw + pixelAdjust + a);
                    window.thisRowSet[f] = false;
                    elementsToSet--
                }
            }
            f++
        }
        eachWidth = Math.floor((e - (a * (elementsToSet - 1))) / elementsToSet);
        i++
    }
    i = 1;
    if (c) {
        while (i <= window.rowItems[j]) {
            f = 1;
            while (f <= window.rowItems[j]) {
                if (window.thisRowSet[f]) {
                    $label = $("#" + l + window.thisRowSet[f] + "L");
                    $fg = $("#" + l + window.thisRowSet[f] + "V");
                    $fg.css("font-size", Math.round(parseInt($fg.css("font-size")) / 2, 0));
                    dw = parseInt($fg.innerWidth());
                    lw = parseInt($label.innerWidth());
                    $label.removeAttr("style");
                    $fg.removeAttr("style");
                    if (dw < eachWidth && lw < eachWidth) {
                        iw = Math.max(dw, lw);
                        $label.css("width", (iw + pixelAdjust) + "px");
                        $fg.css("width", (iw + pixelAdjust) + "px");
                        e -= (iw + pixelAdjust + a);
                        window.thisRowSet[f] = false;
                        elementsToSet--
                    }
                }
                f++
            }
            eachWidth = Math.floor((e - (a * (elementsToSet - 1))) / elementsToSet);
            i++
        }
    }
    i = 1;
    while (i <= window.rowItems[j]) {
        f = 1;
        while (f <= window.rowItems[j]) {
            if (window.thisRowSet[f]) {
                $label = $("#" + l + window.thisRowSet[f] + "L");
                $fg = $("#" + l + window.thisRowSet[f] + "V");
                $label.removeAttr("style");
                $fg.removeAttr("style");
                fontSize = parseInt($fg.css("font-size"));
                dw = parseInt($fg.innerWidth());
                lw = parseInt($label.innerWidth());
                while ((dw >= eachWidth && lw <= eachWidth) && fontSize >= d && window.thisRowSet[f]) {
                    fontSize -= 1;
                    $fg.css("font-size", fontSize + "px");
                    dw = parseInt($fg.innerWidth());
                    lw = parseInt($label.innerWidth());
                    iw = Math.max(dw, lw);
                    if ((dw < eachWidth && lw < eachWidth) || (lw >= eachWidth && dw < eachWidth)) {
                        if (lw >= eachWidth) {
                            iw = eachWidth
                        }
                        $label.css("width", (iw + pixelAdjust) + "px");
                        $fg.css("width", (iw + pixelAdjust) + "px");
                        e -= (iw + pixelAdjust + a);
                        window.thisRowSet[f] = false;
                        elementsToSet--
                    }
                }
            }
            f++
        }
        eachWidth = Math.floor((e - (a * (elementsToSet - 1))) / elementsToSet);
        i++
    }
    i = 1;
    while (i <= window.rowItems[j]) {
        f = 1;
        while (f <= window.rowItems[j] && window.thisRowSet[f] !== false) {
            $label = $("#" + l + window.thisRowSet[f] + "L");
            $fg = $("#" + l + window.thisRowSet[f] + "V");
            $label.removeAttr("style");
            $fg.removeAttr("style");
            lw = parseInt($label.innerWidth());
            if (window.thisRowSet[f] && lw >= eachWidth) {
                iw = eachWidth;
                $label.css("width", (iw + pixelAdjust) + "px");
                dw = parseInt($fg.innerWidth());
                fontSize = parseInt($fg.css("font-size"));
                while (dw > eachWidth && fontSize >= d) {
                    fontSize -= 1;
                    $fg.css("font-size", fontSize + "px");
                    dw = parseInt($fg.innerWidth())
                }
                $fg.css("width", (iw + pixelAdjust) + "px");
                e -= (iw + pixelAdjust + a);
                window.thisRowSet[f] = false;
                elementsToSet--
            }
            f++
        }
        eachWidth = Math.floor((e - (a * (elementsToSet - 1))) / elementsToSet);
        i++
    }
    i = 1;
    while (i <= window.rowItems[j]) {
        f = 1;
        while (f <= window.rowItems[j]) {
            if (window.thisRowSet[f]) {
                $label = $("#" + l + window.thisRowSet[f] + "L");
                $fg = $("#" + l + window.thisRowSet[f] + "V");
                $label.removeAttr("style");
                $fg.removeAttr("style");
                fontSize = parseInt($fg.css("font-size"));
                iw = Math.max(parseInt($label.innerWidth()), parseInt($fg.innerWidth()));
                while (iw > eachWidth && fontSize >= d && window.thisRowSet[f]) {
                    fontSize -= 1;
                    $fg.css("font-size", fontSize + "px");
                    iw = parseInt($fg.innerWidth());
                    if (iw <= eachWidth) {
                        $label.css("width", (iw + pixelAdjust) + "px");
                        $fg.css("width", (iw + pixelAdjust) + "px");
                        e -= (iw + pixelAdjust + a);
                        window.thisRowSet[f] = false;
                        elementsToSet--
                    }
                }
            }
            f++
        }
        eachWidth = Math.floor((e - (a * (elementsToSet - 1))) / elementsToSet);
        i++
    }
    i = 1;
    while (i <= window.rowItems[j]) {
        if (window.thisRowSet[i]) {
            $("#" + l + window.thisRowSet[i] + "L").css("width", eachWidth + "px");
            $("#" + l + window.thisRowSet[i] + "V").css("width", eachWidth + "px").css("font-size", d + "px");
            e -= (eachWidth + a);
            window.thisRowSet[i] = false;
            elementsToSet--
        }
        i++
    }
    e += a;
    if (c && e) {
        i = 1;
        while (i <= (window.rowItems[j]) && e > 0) {
            $label = $("#" + l + g[i] + "L");
            $fg = $("#" + l + g[i] + "V");
            lw = parseInt($label.innerWidth());
            $fg.removeAttr("style").css("font-size", Math.round(parseInt($fg.css("font-size")) / 2, 0));
            dw = parseInt($fg.innerWidth());
            $fg.removeAttr("style");
            if (lw > dw && $fg.html().length > 0) {
                dbase = lw;
                dw = parseInt($fg.innerWidth());
                toFit = (dw - dbase + pixelAdjust);
                if (toFit <= e && dw > dbase) {
                    $label.css("width", dw + "px");
                    $fg.css("width", dw + "px");
                    e -= toFit
                } else {
                    $label.css("width", (dbase) + "px");
                    $fg.css("width", (dbase) + "px")
                }
            } else {
                $fg.css("width", lw + "px")
            }
            i++
        }
    }
    if (e !== 0 && window.rowItems[j] > 1 && l !== "h") {
        addWidth = Math.floor((e) / (window.rowItems[j] - 1));
        leftOver = (e % (window.rowItems[j] - 1));
        i = 1;
        while (i < (window.rowItems[j])) {
            iw = parseInt($("#" + l + g[i] + "L").innerWidth());
            if (leftOver >= 1) {
                iw++;
                leftOver--
            } else {
                if (leftOver < 0) {
                    iw--;
                    leftOver++
                }
            }
            iw += addWidth;
            $("#" + l + g[i] + "L").css("width", iw + "px");
            $("#" + l + g[i] + "V").css("width", iw + "px");
            e -= iw;
            i++
        }
    }
    if (c) {
        i = 1;
        while (i <= window.rowItems[j]) {
            $("#" + l + g[i] + "V").css("font-size", reverseFontSize).css("white-space", b).html($("#" + l + g[i] + "V").html().replace(/__/g, " "));
            i++
        }
        if (window.rowItems[j] === 1) {
            $("#" + l + "1L").css("width", parseInt($("#" + j).innerWidth()) + "px").css("width", "auto");
            $("#" + l + "1V").css("width", parseInt($("#" + j).innerWidth()) + "px").css("width", "auto");
            finalWidth = Math.max(parseInt($("#" + l + "1L").css("width")), parseInt($("#" + l + "1V").css("width")));
            $("#" + l + "1L").css("width", finalWidth + "px");
            $("#" + l + "1V").css("width", finalWidth + "px")
        }
    }
    $("#" + l + g[1] + "L").css("margin-left", "0").css("margin-right", "0");
    $("#" + l + g[1] + "V").css("margin-left", "0").css("margin-right", "0");
    updateAlignment();
    st_colour_change($("#sc").val())
}

function enableFields(e, d, c) {
    e = ((!e || typeof e == "undefined") ? $("input:radio[name='pt']:checked").val() : e);
    d = ((!d || typeof d == "undefined") ? (is_square() ? "s" : "") : ((d === "sq" || d === "s") ? "s" : ""));
    c = ((!c || typeof c == "undefined") ? ((e === "eventTicket" && $("input:radio[name='et']:checked").val() === "strip") ? "p" : "") : (c === "strip" ? "p" : ""));
    thumb = ((e === "eventTicket" && $("body").hasClass("ht")) ? "t" : "");
    $formt = e + d + c + thumb;
    var a = [];
    a.boardingPass = ["h1", "h2", "h3", "p1", "p2", "a1", "a2", "a3", "a4", "a5", "s1", "s2", "s3", "s4"];
    a.boardingPasss = a.boardingPass;
    a.coupon = ["h1", "h2", "h3", "p1", "a1", "a2", "a3"];
    a.coupons = a.coupon;
    a.storeCard = a.coupon;
    a.storeCards = a.coupon;
    a.eventTicket = ["h1", "h2", "h3", "p1", "a1", "a2", "a3", "a4", "s1", "s2", "s3"];
    a.eventTickett = ["h1", "h2", "h3", "p1", "a1", "a2", "a3", "a4", "s1", "s2"];
    a.eventTickets = a.eventTicket;
    a.eventTicketst = a.eventTickett;
    a.eventTicketp = ["h1", "h2", "h3", "p1", "a1", "a2", "a3", "a4", "a5", "s1", "s2", "s3"];
    a.eventTicketsp = ["h1", "h2", "h3", "p1", "a1", "a2", "a3", "a4", "a5", "s1", "s2", "s3"];
    a.generic = ["h1", "h2", "h3", "p1", "a1", "a2", "a3", "a4", "s1", "s2"];
    a.generics = ["h1", "h2", "h3", "p1", "s1", "s2"];
    $(".factive").prop("disabled", true);
    for (var b = 0; b < a[$formt].length; b++) {
        $("#" + a[$formt][b] + "Active").prop("disabled", false)
    }
    var f = [];
    bg = ((e === "eventTicket" && $("body").hasClass("bg")) ? "b" : "");
    c = (e === "eventTicket" && $("body").hasClass("simg") ? "p" : "");
    $formt = e + d + c + bg + thumb;
    f.coupon = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 58,
            margin: 0
        },
        auxiliary: {
            size: 9,
            margin: 14
        }
    };
    f.coupons = f.coupon;
    f.storeCard = f.coupon;
    f.storeCards = f.coupon;
    f.generic = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 25,
            margin: 0
        },
        secondary: {
            size: 10,
            margin: 14
        },
        auxiliary: {
            size: 9,
            margin: 14
        }
    };
    f.generics = f.generic;
    f.boardingPass = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 14,
            margin: 45
        },
        secondary: {
            size: 10,
            margin: 6
        },
        auxiliary: {
            size: 10,
            margin: 6
        }
    };
    f.boardingPasss = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 14,
            margin: 30
        },
        secondary: {
            size: 10,
            margin: 6
        },
        auxiliary: {
            size: 10,
            margin: 6
        }
    };
    f.eventTickett = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 10,
            margin: 0
        },
        secondary: {
            size: 10,
            margin: 2
        },
        auxiliary: {
            size: 12,
            margin: 12
        }
    };
    f.eventTicket = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 14,
            margin: 0
        },
        secondary: {
            size: 10,
            margin: 1
        },
        auxiliary: {
            size: 12,
            margin: 12
        }
    };
    f.eventTicketb = {
        header: {
            size: 18,
            margin: 10
        },
        primary: {
            size: 18,
            margin: 0
        },
        secondary: {
            size: 14,
            margin: 2
        },
        auxiliary: {
            size: 12,
            margin: 12
        }
    };
    f.eventTicketst = f.eventTickett;
    f.eventTicketsb = f.eventTicketb;
    f.eventTicketbt = f.eventTicketb;
    f.eventTicketsbt = f.eventTicketb;
    f.eventTickets = f.eventTicket;
    f.eventTicketp = {
        header: {
            size: 11,
            margin: 10
        },
        primary: {
            size: 57,
            margin: 0
        },
        secondary: {
            size: 9.5,
            margin: 12
        },
        auxiliary: {
            size: 9,
            margin: 12
        }
    };
    f.eventTicketsp = f.eventTicketp;
    if (typeof f[$formt]["header"] != "undefined") {
        $("#header").attr("data-m", f[$formt]["header"]["margin"]).attr("data-s", f[$formt]["header"]["size"])
    }
    if (typeof f[$formt]["primary"] != "undefined") {
        $("#primary").attr("data-m", f[$formt]["primary"]["margin"]).attr("data-s", f[$formt]["primary"]["size"])
    }
    if (typeof f[$formt]["secondary"] != "undefined") {
        $("#secondary").attr("data-m", f[$formt]["secondary"]["margin"]).attr("data-s", f[$formt]["secondary"]["size"])
    }
    if (typeof f[$formt]["auxiliary"] != "undefined") {
        $("#auxiliary").attr("data-m", f[$formt]["auxiliary"]["margin"]).attr("data-s", f[$formt]["auxiliary"]["size"])
    }
    if ($("#p1L").html().indexOf("span class") === 1) {
        if (!$("body").hasClass("boardingPass")) {
            $("#p1L").html($("#p1L").html().replace('<span class="pin"></span>', ""))
        }
    } else {
        if ($("body").hasClass("boardingPass")) {
            $("#p1L").html('<span class="pin"></span>' + $("#p1L").html())
        }
    }
};