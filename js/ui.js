$(document).ready(function(){
    var burger = $('.menu-trigger');
    burger.each(function(index){
        var $this = $(this);
        
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-' + (index+1));
            if($(this).hasClass('active-1')){
                $('nav').show();
                $('html, body').toggleClass("not_scroll")
                $("header").addClass("scroll");
                $('.menu-trigger span').css('background-color','black')
            }
            else if($(document).scrollTop() > 1){
                $('nav').hide();
                $("header").addClass("scroll")
                $('html, body').toggleClass("not_scroll")
            }
            else{
                $('nav').hide();
                $('html, body').toggleClass("not_scroll")
                $("header").removeClass("scroll")
                $('.menu-trigger span').css('background-color','black')
            }
        })
    });
    // 헤더 스크롤 이벤트
	window.onscroll = function(){
		if($(document).scrollTop() > 1){
            $("header").addClass("scroll");
            $('.menu-trigger span').css('background-color','black')
            
		}else{
            $("header").removeClass("scroll");
            $('.menu-trigger span').css('background-color','black')
            
		}
    }

    $('.select_box1').click(function(){
        $('.select_box1 .box .list').toggle();
        $('.select_box1 .box .list li:first-child').click(function(){
            $('.select_box1 .box .select').text('BTC');
            $('.select_box1 .box .select').css('background','url(images/img_select_btc.png) 10px 10px no-repeat').css('background-size','15px 16px');
        })
        $('.select_box1 .box .list li:last-child').click(function(){
            $('.select_box1 .box .select').text('USDT');
            $('.select_box1 .box .select').css('background','url(images/img_select_te.png) 10px 10px no-repeat').css('background-size','15px 16px');
        })
    })
    $('.select_box2').click(function(){
        $('.select_box2 .box .list').toggle();
        $('.select_box2 .box .list li:first-child').click(function(){
            $('.select_box2 .box .select').text('BTC');
            $('.select_box2 .box .select').css('background','url(images/img_select_btc.png) 10px 10px no-repeat').css('background-size','15px 16px');
        })
        $('.select_box2 .box .list li:last-child').click(function(){
            $('.select_box2 .box .select').text('USDT');
            $('.select_box2 .box .select').css('background','url(images/img_select_te.png) 10px 10px no-repeat').css('background-size','15px 16px');
        })
    })
    $('.select_box3').click(function(){
        $('.select_box3 .box .list').toggle();
        $('.select_box3 .box .list li:first-child').click(function(){
            $('.select_box3 .box .select').text('BTC');
            $('.select_box3 .box .select').css('background','url(images/img_select_btc.png) 10px 10px no-repeat').css('background-size','15px 16px');
        })
        $('.select_box3 .box .list li:last-child').click(function(){
            $('.select_box3 .box .select').text('USDT');
            $('.select_box3 .box .select').css('background','url(images/img_select_te.png) 10px 10px no-repeat').css('background-size','15px 16px');
        })
    })
    $('.tab li:first-child').click(function(){
        $(this).css('font-weight','800')
        $('.tab li:last-child').css('font-weight','normal')
        $('.tab1_img').attr('src','images/btn_tab1_on.png');
        $('.tab2_img').attr('src','images/btn_tab2_off.png');
        $('.tab2').show();
        $('.tab1').hide();
    })
    $('.tab li:last-child').click(function(){
        $(this).css('font-weight','800')
        $('.tab li:first-child').css('font-weight','normal')
        $('.tab1_img').attr('src','images/btn_tab1_off.png');
        $('.tab2_img').attr('src','images/btn_tab2_on.png');
        $('.tab2').hide();
        $('.tab1').show();
    })
    $('.news_more').click(function(){
        $('.news_list_wrap').css('height','auto');
    })

    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: 'section .model1 .swiper-button-next',
          prevEl: 'section .model1 .swiper-button-prev',
        },
    });

    var swiper = new Swiper('.swiper-container1', {
        slidesPerView:1.3,
        centeredSlides: true,
        spaceBetween:15,
        grabCursor: true,
        centeredSlides: true,
    });
})
function fnMove(seq){
    $('nav li').click(function(){
        $('nav').hide();
        $('.burger a').removeClass('active-1');
        $('html, body').removeClass("not_scroll")
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop : offset.top-100}, 400);
    })
    return false;
}