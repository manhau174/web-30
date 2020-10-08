var defaultBtn = document.getElementById('default');
var increaseBtn = document.getElementById('increase');
var reductionBtn = document.getElementById('reduction');
var myText = document.getElementById('my-text');

var fontSizeDefault = convertSize(myText.style.fontSize);

defaultBtn.addEventListener('click', function() {
    myText.style.fontSize = fontSizeDefault + 'px';
});

increaseBtn.addEventListener('click', function() {
    var size = convertSize(myText.style.fontSize);
    size += fontSizeDefault * 40 / 100;
    myText.style.fontSize = size + 'px';
});

reductionBtn.addEventListener('click', function() {
    var size = convertSize(myText.style.fontSize);
    size -= fontSizeDefault * 40 / 100;
    myText.style.fontSize = size + 'px';
});

function convertSize(size) {
    return parseInt(size.replace('px', ''));
}


setInterval(function() {
    next(); //function next chuyển sang ảnh tiếp theo
}, 10000);
// setTimeout(function() {}, 10000);
var str = 'Hello word Webfrontend';
console.log(str.includes('word'));

var index;
var name = 'Luân';
var arr = ['Hoàng Anh', 'Luân', 'Sinh'];
for (var i = arr.length - 1; i >= 0; i--) {
    if (name == arr[i]) {
        index = i;
    }
}

console.log(index);

var subArr = ['Uyên', 'Thành', 'Phong'];

subArr[index];
//Luân
// console.log(arr[ind/ex].className = arr[index].className + ' active');

















