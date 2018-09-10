$(document).ready(function(){

    /*По клику на элемент с id='burger-icon', вызываем функцию,
    которая с помощью метода '.toggleClass' (метод переключения классов)
    добавляет или удаляет указанный в скобках класс
    и удаляем класс 'burger-menu-drop__text_visible' для сворачивания выпадайки
    и удаляем класс 'burger-menu__arrow-black_rotate' для разворота стрелки в исходное положение
    с помощью метода '.removeClass' */
    $('#burger-icon').click(function() {
        $('.burger-menu').toggleClass('burger-menu_visible');
        $('#burger-icon').toggleClass('active');
        $('.burger-menu-drop__text').removeClass('burger-menu-drop__text_visible');
        $('.burger-menu__arrow-black').removeClass('burger-menu__arrow-black_rotate');
    });

    /*По клику на элемент с атрибутом '[data-close_menu]', вызываем функцию,
     которая с помощью метода '.toggleClass' (метод переключения классов)
     добавляет или удаляет указанный в скобках класс*/
    $('[data-close_menu]').click(function() {
        $('.burger-menu').toggleClass('burger-menu_visible');
        $('#burger-icon').toggleClass('active');
    });

    /*По клику на элемент с классом '.burger-menu__text-arrow', вызываем функцию,
     которая с помощью метода '.toggleClass' (метод переключения классов)
     добавляет или удаляет указанный в скобках класс для сворачивания или разворачивания выпадайки
     и для разворота стрелки*/
    $('.burger-menu__text-arrow').click(function() {
        $('.burger-menu-drop__text').toggleClass('burger-menu-drop__text_visible');
        $('.burger-menu__arrow-black').toggleClass('burger-menu__arrow-black_rotate');
    });


});
