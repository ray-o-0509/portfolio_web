

$(window).scroll(function () {
    let now_position = $(window).scrollTop();
    let all_height = $('body').height() - window.innerHeight;   
    $('.scroll_circle').css('top', (now_position / all_height) * 200);
});

$(function() {
	$(window).on('mousemove', function(e) {
		$('.cursor_div').css('left', e.clientX);
		$('.cursor_div').css('top', e.clientY);
	});
});

$('#menu_text_0').click(function(){
    $("html,body").animate({
        scrollTop:$('body').offset().top
    });
});
$('#menu_text_1').click(function(){
    $("html,body").animate({
        scrollTop:$('.about_section').offset().top
    });
});
$('#menu_text_2').click(function(){
    $("html,body").animate({
        scrollTop:$('.works_section').offset().top
    });
});
$('#menu_text_3').click(function(){
    $("html,body").animate({
        scrollTop:$('.links_section').offset().top
    });
});

