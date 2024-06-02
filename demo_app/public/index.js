$(document).ready(function () {
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("nav-active");
        $(this).addClass("nav-active");
        let attr = $(this).attr("data-item");
        $('html, body').animate({
            scrollTop: $("." + attr).offset().top
        }, 1000);
    })
})