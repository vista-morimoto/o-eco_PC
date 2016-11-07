jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

$(function () {
    $('.link_to_top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000, 'quart');
    });
});