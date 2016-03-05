function resize_article_borders() {
    $(".slantbox").each(function(){
        width = $(this).width()
        $(this).find(".border-top").css("border-left-width", width)
        $(this).find(".border-top").css("border-bottom-width", width*0.1)
        $(this).find(".border-bottom").css("border-right-width", width)
        $(this).find(".border-bottom").css("border-top-width", width*0.1)
    })
}

function hide_ellipses() {
    $(".article-preview-container").each(function(){
        content_bottom = $(this).find(".border-bottom")[0].getBoundingClientRect()["bottom"]
        description_bottom = $(this).find(".description-end")[0].getBoundingClientRect()["bottom"]
        console.log($(this).find(".description").text())
        console.log(content_bottom)
        console.log(description_bottom)
        if (description_bottom <= (content_bottom+1))
            $(this).find(".overflow-fade").css("display", "none")
            console.log('overflowing')
    })
}

resize_article_borders()
$(window).resize(resize_article_borders)

hide_ellipses()
$(window).resize(hide_ellipses)
