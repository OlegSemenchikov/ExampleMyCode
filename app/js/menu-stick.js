$(document).ready(function(){

    var $menu = $('.menu-wrapper');

    $(window).scroll(function(){
        /*При скролле страницы вызывается функция и проверяется условие */
        if ( $(this).scrollTop() > 100 && !$menu.hasClass('menu-wrapper_fixed') ){
            /*Если скрол страницы болше 100рх и у блока меню отсутствует класс 'menu-wrapper_fixed',
            то к блоку 'меню' добавляем класс 'menu-wrapper_fixed'*/
            $menu.addClass('menu-wrapper_fixed');
        }
        else if($(this).scrollTop() <= 100 && $menu.hasClass('menu-wrapper_fixed')) {
            /*Если скрол страницы меньше или равен 100рх и у блока меню есть класс 'menu-wrapper_fixed',
             то из блоку 'меню' удаляем класс 'menu-wrapper_fixed'*/
            $menu.removeClass('menu-wrapper_fixed');
        }
    });

});
