function resize_article_borders() {
    $(".slantbox").each(function(){
        width = $(this).width()
        $(this).find(".border-top").css("border-left-width", width)
        $(this).find(".border-top").css("border-bottom-width", width*0.1)
        $(this).find(".border-bottom").css("border-right-width", width)
        $(this).find(".border-bottom").css("border-top-width", width*0.1)
    })
}

function fit_size() {
    if (($("html")[0].offsetWidth < $("html")[0].scrollWidth) && (Modernizr.mq('(min-width: 767px)'))) {
        $(".body-flex").css("display", "inline-block")
        $(".body-flex").css("padding-left", "15px")
        $(".body-flex").css("padding-right", "15px")
    }
    else {
        $(".body-flex").css("display", "block")
        $(".body-flex").css("padding-left", "5px")
        $(".body-flex").css("padding-right", "5px")
    }
}

$(document).ready(function() {
    resize_article_borders()
    $(window).resize(resize_article_borders)

    fit_size()
    $(window).resize(fit_size)
})
