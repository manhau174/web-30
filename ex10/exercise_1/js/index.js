function openPanel(element) {
    var menu_tabs = document.getElementsByClassName('menu-tab');
    //Lấy tất cả menu_tab, bỏ class menu-active
    for (var i = menu_tabs.length - 1; i >= 0; i--) {
        removeClass(menu_tabs[i], 'menu-active');
    }
    //Thêm class menu-active vào menu_tabs đang click
    addClass(element, 'menu-active');

    //Lấy tất cả tab-content, bỏ class active
    var tab_contents = document.getElementsByClassName('tab-content');
    for (var i = tab_contents.length - 1; i >= 0; i--) {
        removeClass(tab_contents[i], 'active');
    }

    //Lấy element là anh em ngay sau element đang click, thêm class active
    addClass(element.nextElementSibling, 'active');
} 

function removeClass(e, className) {
    e.className = e.className.replace(className, '');
}

function addClass(e, className) {
    e.className = e.className + ' ' + className;
}