
// $(document).ready(function () {
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    navText: [],
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$("button.nav-link").click(function () {
    const id = $($(this)[0]).attr("data-link")
    $('html, body').animate({
        scrollTop: ($("#" + id).offset().top) - 90
    }, 750);
});

$('#scrollTop').fadeOut();
$("#scrollTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 750);
});
$('.navbar-toggler').on('click', function () {
    $('.navbar .collapse').collapse('toggle');
})
// });
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#scrollTop').fadeIn();
    } else {
        $('#scrollTop').fadeOut();
    }

    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});
