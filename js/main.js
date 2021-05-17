

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
        scrollTop:$('body').offset().top - 100,
        complete: function() {
            $( "body" ).trigger( "click" );
        }
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




let dark_mode = false;

// ?dark_mode = の判断
if(location.href.indexOf('?dark_mode=true') < 0){
    dark_mode = true;
    change_mode();
}else{
    change_mode();
}


//ダークモード　ボタン　発火
$('.mode_change_div').click(function(){
    change_mode();
});


//ダークモード　色変え
function change_mode (){
    if(dark_mode){ //dark to light
        $("link").eq(1).prop( "disabled", true);
        $('.mode_change_div').html('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#333" class="dark_mode_icon"><rect fill="none" height="24" width="24"/><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>');
    }else{ //light to dark
        $("link").eq(1).removeAttr('disabled');
        $('.mode_change_div').html('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>');
    }

    dark_mode = !dark_mode;
}




//言語切り替え
function change_language (){
    console.log('test');
    if(location.href.indexOf('en') < 0){ //日本語サイトの場合
        location.href = "en/index.html?dark_mode=" + dark_mode;
    }else{ //英語サイトの場合
        location.href = "../index.html?dark_mode=" + dark_mode;
    }
}