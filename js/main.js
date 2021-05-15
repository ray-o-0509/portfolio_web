

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

$('#menu_text_0, .go_to_top').click(function(){
    $("html,body").animate({
        scrollTop:$('body').offset().top - 100
    });
});
$('#menu_text_1').click(function(){
    $("html,body").animate({
        scrollTop:$('.about_section').offset().top - 100
    });
});
$('#menu_text_2').click(function(){
    $("html,body").animate({
        scrollTop:$('.works_section').offset().top - 100
    });
});
$('#menu_text_3').click(function(){
    $("html,body").animate({
        scrollTop:$('.links_section').offset().top - 100
    });
});

//上までスクロールの矢印
$('.go_to_top').hover(function(){
    $('.cursor_div').addClass('go_top');
});
$('.go_to_top').mouseout(function(){
    $('.cursor_div').removeClass('go_top');
});


//アイコンホバー時
$('.icon_svg, .menu_text').hover(function(){
    $('.cursor_div').addClass('hide');
});
$('.icon_svg, .menu_text').mouseout(function(){
    $('.cursor_div').removeClass('hide');
});



//Links hover
let svg_file;
if(location.href.indexOf('en') < 0){ //日本語サイトの場合
    svg_file = '<img src="img/open_in_new_white_24dp.svg">';
}else{ //英語サイトの場合
    svg_file = '<img src="../img/open_in_new_white_24dp.svg">';
}
$('.box p, .box').hover(function(){
    
    $('.cursor_div div').html(svg_file);
    $('.cursor_div').addClass('go_top');
});
$('.box p, .box').mouseout(function(){
    $('.cursor_div div').html('<p class="go_top_icon">△</p>');
    $('.cursor_div').removeClass('go_top');
});

