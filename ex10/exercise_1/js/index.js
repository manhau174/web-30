function openPanel(element) {
    var menu_tabs = document.getElementsByClassName('menu-tab');
    //Lấy tất cả menu_tab, bỏ class menu-active
    for (var i = menu_tabs.length - 1; i >= 0; i--) {
        menu_tabs[i].className = menu_tabs[i].className.replace(' menu-active', '');
    }
    //Thêm class menu-active vào menu_tabs đang click
    element.className = element.className + ' menu-active';

    //Lấy tất cả tab-content, bỏ class active
    var tab_contents = document.getElementsByClassName('tab-content');
    for (var i = tab_contents.length - 1; i >= 0; i--) {
        tab_contents[i].className = tab_contents[i].className.replace(' active', '');
    }

    //Lấy element là anh em ngay sau element đang click, thêm class active
    element.nextElementSibling.className = element.nextElementSibling.className + ' active';
} 