$(document).ready(function($) {
    var text = $('#myText');
    console.log(text.parent()); //Lấy cha trực tiếp  
    console.log(text.parents());//Lấy cả selector cha
    console.log(text.parents('body'));   //Lấy selector cha theo filter
    console.log(text.parentsUntil('body'));   //Lấy tất cả selector cha cho đến filter (Không nhận filter)

    var myDiv = $('.container');
    console.log(myDiv.find('.myText'));
    console.log(myDiv.children()); //con trực tiếp

    console.log(text.next()); //text 2
    console.log($('#myText-2').prev()); //text 1
    console.log($('#myText-2').siblings()); // tất cả anh em cùng cấp
    console.log($('#myText-2').siblings('a')); // lọc theo thẻ a trong anh em cùng cấp

    // ==========
    console.log($('p').first());
    console.log($('p').last());
    console.log($('p').eq(2));

    console.log($('#myText-2').siblings().first());
    console.log($('#myText-2').siblings().filter('p'));
    console.log($('#myText-2').siblings().not('p'));

    //$('.myDiv').hide(); // = .css('display', 'none');
    //$('.myDiv2').show(); // = .css('display', 'block');

    $('#btn-click').on('click', function() {
        $('.myDiv').toggle(10000, function() {
            $('.myDiv2').toggle(5000, function() {
                alert('Xong roi!');
            }); 
        });
    })

    // $('.myDiv2').fadeIn(3000);  //Hiển thị ra bằng cách đậm dần trong 3s
    // $('.myDiv').fadeOut(3000);  //Ẩn đi bằng cách mờ dần trong 3s
    // $('.myDiv').fadeTo(2000, 0.6);  //Thay đổi độ mờ tới 0.6 trong 3s
    
    // $('.myDiv2').slideDown(1000); //Hiển thị bằng cách tăng height
    // $('.myDiv').slideUp(1000); //Ẩn đi bằng cách giảm height
});