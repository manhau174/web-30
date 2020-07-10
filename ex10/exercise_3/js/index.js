var size_default = '16px';
var defaultButton = document.getElementById('default');
var increaseButton = document.getElementById('increase');
var reductionButton = document.getElementById('reduction');
var myText = document.getElementById('my-text');

defaultButton.addEventListener('click', function() {
    myText.style.fontSize = size_default;
});

increaseButton.addEventListener('click', function() {
    var newSize = myText.style.fontSize;
    newSize = convertFontSizeToInt(newSize);
    newSize += newSize * 40/100;
    myText.style.fontSize = newSize + 'px';
});

reductionButton.addEventListener('click', function() {
    var newSize = myText.style.fontSize;
    newSize = convertFontSizeToInt(newSize);
    newSize -= newSize * 40/100;
    myText.style.fontSize = newSize + 'px';
});

function convertFontSizeToInt(fontSize) {
    return parseInt(fontSize.replace('px', ''));
}