$(function () {
    if ($(window).width() < 767) {
        $('.menu_li').removeClass('subtoggle');
        $('.submenu').removeClass('subtoggle');
        $('.parent').addClass('mobParent');
    }
    $('.menu_btn_bars').click( () => {
        $('.menu_btn_bars').hide();
        $('.menu_btn_bars').css('transform', 'rotate(180deg)');
        $('.menu_btn_close').show();
        $('.menu_ul').css('transform', 'translateY(0%)');
        $('body').css('overflow', 'hidden');
    })
    $('.menu_btn_close').click( () => {
        $('.menu_btn_close').hide();
        $('.menu_btn_bars').show();
        $('.menu_ul').css('transform', 'translateY(-100%)');
        $('body').css('overflow', 'auto');
    })
})