$(".service-slider").slick({
    nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
    prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
    slidesToShow:3,
    centerMode:true,
    centerPadding:"0",
    autoplay:true,
})
$(".testimonial-slider").slick({
    nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
    prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
    slidesToShow:2,
    autoplay:true,
})
$(function () {
    $('#verticalTab').jqTabs();
});