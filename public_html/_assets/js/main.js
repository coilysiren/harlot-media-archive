function resize_article_borders() {
    $(".slantbox").each(function(){
        width = $(this).width()
        $(this).find(".border-top").css("border-left-width", width)
        $(this).find(".border-top").css("border-bottom-width", width*0.1)
        $(this).find(".border-bottom").css("border-right-width", width)
        $(this).find(".border-bottom").css("border-top-width", width*0.1)
    })
}

resize_article_borders()
$(window).resize(resize_article_borders)
