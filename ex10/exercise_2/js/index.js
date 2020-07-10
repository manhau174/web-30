var check_all = document.getElementById('check-all');
var un_check_all = document.getElementById('un-check-all');

check_all.addEventListener('click', checkAll);
un_check_all.addEventListener('click', unCheckAll);

function checkAll() {
    var checkbox = document.frm.checkbox;
    for (var i = checkbox.length - 1; i >= 0; i--) {
        checkbox[i].checked = true;
        checkbox[i].parentNode.parentNode.style.background = 'green';
    }
}

function unCheckAll() {
    var checkbox = document.frm.checkbox;
    for (var i = checkbox.length - 1; i >= 0; i--) {
        checkbox[i].checked = false;
        checkbox[i].parentNode.parentNode.style.background = 'white';
    }
}

function check(element) {
    var checked = element.previousElementSibling.firstElementChild.checked;

    if (checked) {
        element.previousElementSibling.firstElementChild.checked = false;
        element.parentNode.style.background = 'white';
    }
    else {
        element.previousElementSibling.firstElementChild.checked = true;
        element.parentNode.style.background = 'green';
    }
} 