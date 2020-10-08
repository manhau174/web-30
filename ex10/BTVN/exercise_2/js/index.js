var checkAll = document.getElementById('check-all');
var unCheckAll = document.getElementById('un-check-all');

function checkAllFnc() {
    var checkbox = document.frm.checkbox;
    for (var i = checkbox.length - 1; i >= 0; i--) {
        checkbox[i].checked = true;
        checkbox[i].parentNode.parentNode.style.background = 'green';

    }
}

function unCheckAllFnc() {
    var checkbox = document.frm.checkbox;
    for (var i = checkbox.length - 1; i >= 0; i--) {
        checkbox[i].checked = false;
        checkbox[i].parentNode.parentNode.style.background = 'white';

    }
}

checkAll.addEventListener('click', checkAllFnc);
unCheckAll.addEventListener('click', unCheckAllFnc);

function check(element) {
   var checked = element.previousElementSibling.firstElementChild.checked;

   if (checked) {
        element.previousElementSibling.firstElementChild.checked = false;
        element.parentNode.style.background = 'white';
   } else {
        element.previousElementSibling.firstElementChild.checked = true;
        element.parentNode.style.background = 'green';
   }
}