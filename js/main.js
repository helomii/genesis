$(function(){
    $('.color-white').click(function(){
        $('.white-img').css('display','block');
        $('.grey-img').css('display','none');
        $('.black-img').css('display','none');
        $('.blue-img').css('display','none');
        $('.red-img').css('display','none');
    });
    $('.color-grey').click(function(){
        $('.grey-img').css('display','block');
        $('.white-img').css('display','none');
        $('.black-img').css('display','none');
        $('.blue-img').css('display','none');
        $('.red-img').css('display','none');
    });
    $('.color-red').click(function(){
        $('.red-img').css('display','block');
        $('.white-img').css('display','none');
        $('.black-img').css('display','none');
        $('.blue-img').css('display','none');
        $('.grey-img').css('display','none');
    });
    $('.color-blue').click(function(){
        $('.blue-img').css('display','block');
        $('.grey-img').css('display','none');
        $('.black-img').css('display','none');
        $('.white-img').css('display','none');
        $('.red-img').css('display','none');
    });
    $('.color-black').click(function(){
        $('.black-img').css('display','block');
        $('.grey-img').css('display','none');
        $('.white-img').css('display','none');
        $('.blue-img').css('display','none');
        $('.red-img').css('display','none');
    });
})








$('.carousel').carousel()

$(function() {
	var $a = $(".tabs li");
	$a.click(function() {
		$a.removeClass("active");
		$(this).addClass("active");
	});
});




$(function(){
    $('.tabs .tabs-li1').click(function(){
        $('.tabs-p1').css('display','block');
        $('.tabs-p2').css('display','none');
        $('.tabs-p3').css('display','none');
    });
    $('.tabs-li2').click(function(){
        $('.tabs-p2').css('display','block');
        $('.tabs-p1').css('display','none');
        $('.tabs-p3').css('display','none');
    });
    $('.tabs-li3').click(function(){
        $('.tabs-p3').css('display','block');
        $('.tabs-p2').css('display','none');
        $('.tabs-p1').css('display','none');
    });
})