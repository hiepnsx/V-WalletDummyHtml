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

function shrinkBackfields() {
    $("#backContent").children().children(".foreground").each(function() {
        $(this).css("font-size", "15px");
        if ($(this).height() > 102) {
            $(this).css("font-size", "9px")
        }
    })
}

function clickEvents() {
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
        justifyAll()
    });

    $("#progress_bar").children().click(function() {
        $("#progress_bar").children().removeClass("active");
        $(".pane").removeClass("show");
        $(".pane").hide();
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

    $("#next").click(function() {
        $("#progress_bar .active").next().click();
        console.log("click");
    });
    $("#pre").click(function() {
        $("#progress_bar .active").prev().click();
    });

}

$(document).ready(function() {
    pre_init()
});
function pre_init() {
clickEvents();

};
function st_colour_change(a) {
    if ($("body").hasClass("coupon") || $("body").hasClass("storeCard") || $("body").hasClass("eventTicket")) {
        if ($("body").hasClass("simg")) {
            $(".label.p1").css("color", "#" + a);
            $(".foreground.p1").css("color", "#" + a)
        }
    }
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

function setup_sim(d, c, b) {
    $(".h1, .h2, .h3, .p1, .p2, .s1, .s2, .s3, .s4, .a1, .a2, .a3, .a4, .a5, .b1, .b2, .b3").hide();
    $(".iCheckbox").each(function() {
        if ($(this).prop("checked") && !$(this).prop("disabled")) {
            field = $(this).attr("name");
            $("." + field).show()
        }
    });
    // switchClasses(".passLogo", "foreground", "label");
    switchClasses(".passLogo", "label", "foreground");
}


function switchClasses(a, c, b) {
    if ($(a).hasClass(c)) {
        $(a).removeClass(c)
    }
    if ($(a).hasClass(b)) {
        $(a).removeClass(b)
    }
    $(a).addClass(b)
}

function init() {
    // jc.install();
    setup_sim();
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
    justifyAll(true);
}


