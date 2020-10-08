function openContent(element) {
    var menu_tabs = document.getElementsByClassName('menu-tab');
    for (var i = 0; i <= menu_tabs.length - 1; i++) {
        var menu_tab_class = menu_tabs[i].className;
        menu_tabs[i].className = menu_tab_class.replace(' menu-active', '');
    }
 
    var new_class_name = element.className + ' menu-active';
       element.className = new_class_name;

    var contents = document.getElementsByClassName('tab-content');
    for (var i = contents.length - 1; i >= 0; i--) {
        contents[i].className = contents[i].className.replace(' active', '');
    }
    var content = element.nextElementSibling;
    content.className = content.className + ' active';
}