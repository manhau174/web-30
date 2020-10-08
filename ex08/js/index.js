// alert('Hello Web 30'); //hiển thị thông báo
// var cf = confirm('Bạn có người yêu chưa ?'); //hiển thị thông báo true/false
// var name = prompt('Mời bạn nhập tên', 'Hau'); //cho phép nhập từ bàn phím
// alert(name);


var ten_cua_toi = "Hau Man"; //snake
var tenCuaToi = "Hau"; //camel
// var 1tenCuaToi = "";
var _tenCuaToi = ""; //khai bao 1 ham, 1 bien dang private
var x = "";
var myName = null;
var userName;

var ten_cua_toi_1 = null;
// alert(ten_cua_toi);
document.write(ten_cua_toi_1); //string

var result = 9%4;
console.log('Tong 2 so: ', 2+4);
console.log('Hieu 2 so: ', 3-4);
console.log('Tich 2 so: ', 2*4);
console.log('Thuong 2 so: ', 2/4);
console.log('Chia lay du: ', 5%3);

var a = 5;
console.log("Gia tri cua a++: ", a++); //a++
console.log("Gia tri cua a", a); //a

var b = 3;
console.log("Gia tri cua b++: ", b--); //b--
console.log("Gia tri cua b", b); //b


var c = 5;
console.log("Gia tri cua ++c: ", ++c); //a++
console.log("Gia tri cua c", c); //a

var d = 4;
console.log("Gia tri cua --d: ", --d); //b--
console.log("Gia tri cua d", d); //b
// alert(a);

var a = 0;
var b = 18;

var x = a-- + b++ - ++b - ++a;
        // 10    18    ++b - ++a; //a = 9; b = 19
        // 10  + 18  - 20  -  10

// alert(x);

console.log("phep toan 10 == 18 ",a == b);
console.log("phep toan 10 != 18 ",a != b);
var bien_1 = true;
var bien_2 = false;
 console.log('phep toan ||: ', (bien_1 || bien_2));
 console.log('phep toan &&: ', (bien_1 && bien_2));
 console.log('phep toan !: ', !bien_1);
 console.log('phep toan !: ', !bien_2);
console.log('phep toan !: ', !(bien_1 && bien_2));
console.log('phep toan !: ', !(bien_1 || bien_2));

(a && b);

var ket_qua = bien_2 ? "kết quả đúng" : "kết quả sai";

var ket_qua = "";
if(bien_2) {
    ket_qua = "kết quả đúng";   
}
else {
    ket_qua = "kết quả sai";    
}

console.log(ket_qua);

var condition = true;

var age = 15;

// if (age >= 18) {
//     console.log('Chào bạn');
// }
// else if(age > 16) {
//     alert('bạn sắp đủ tuổi');
// }
// else if(age > 10) {
//     alert('bạn sắp đủ tuổi');
// }
// else if(age > 20) {
//     alert('bạn sắp đủ tuổi');
// }
// else if(age > 16) {
//     alert('bạn sắp đủ tuổi');
// }
// else if(age > 16) {
//     alert('bạn sắp đủ tuổi');
// }

// else {
//     alert(' chưa đủ tuổi');
// }

// var thu = prompt('Moi ban nhap thu: ');

// switch (parseInt(thu)) {
//     case 2:
//         console.log('Thu Hai');
//         break;
//     case 3:
//         console.log('Thu Ba');
//         break;
//     default:
//         console.log('Nhap sai');
//         break;

// }

//Vòng lặp: 3loại
//for - while - do-while
for(var i = 0; i < 10; i++) {
    console.log('Chep phat lan thu ', i + 1);
}

var j = 0;
while (j < 5) {
    console.log('In ra so J: ', j);
    j++;
}

var k = 0;
do {
    console.log('In ra so K: ', k);
    k++;   
}
while (k < 5);


//Tính tổng từ 0 đến 10

var S = 0;

for(var i = 0; i < 10; i++) {
    S += i; //S = S + i
}

console.log(S);

var S1 = 0;
var j = 1;
while (j < 1) {
    S1 = S1 + j;
    j++;
}

console.log(S1);

var S2 = 0;
var k = 1;

do {
    S2 = S2 + k;
    k++;
}
while (k < 1);

console.log(S2);

//break; continue

for(var i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('i = : ' ,i);
        showMessage();
        break;
    }
    
}


for(var i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('i = : ' ,i);
        showMessage();
    }
    // console.log('i = : ' ,i);
}


function showMessage() {
    console.log('Day la Message');
}

showMessage();


function tinhTong(a, b) {
    return a + b;

}

function soSanh(a, b) {
    return a > b;
}

var tong1 = tinhTong(2, 5);
var tong2 = tinhTong(5, 10);
console.log(tong1, tong2);

var ketqua = soSanh(2, 5);

if (ketqua) {
    console.log();
}
else {

}



//mảng array[]
//JSON
document.write('</pre>');
document.writeln("123123");
document.writeln("123123123");













