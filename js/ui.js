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
        $('.move').show();
        $('.move1').hide();
    })
    $('.tab li:last-child').click(function(){
        $(this).css('font-weight','800')
        $('.tab li:first-child').css('font-weight','normal')
        $('.tab1_img').attr('src','images/btn_tab1_off.png');
        $('.tab2_img').attr('src','images/btn_tab2_on.png');
        $('.tab2').hide();
        $('.tab1').show();
        $('.move').hide();
        $('.move1').show();
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



    (function (global, $) {
        var $menu     = $('header nav li.m'),
            $contents = $('.scroll'),
            $doc      = $('html, body');
        $(function () {
            $menu.on('click','a', function(e){
                $('nav').hide();
                $('.burger a').removeClass('active-1');
                $('html, body').removeClass("not_scroll")
                var $target = $(this).parent(),
                    idx     = $target.index(),
                    section = $contents.eq(idx),
                    offsetTop = section.offset().top-100;
                $doc.stop()
                        .animate({
                            scrollTop :offsetTop
                        }, 800);
                return false;
            });
        });
        $(window).scroll(function(){
            var scltop = $(window).scrollTop();
            $.each($contents, function(idx, item){
                var $target   = $contents.eq(idx),
                    i         = $target.index(),
                    targetTop = $target.offset().top;

                if (targetTop <= scltop) {
                    $menu.removeClass('on');
                    $menu.eq(idx).addClass('on');
                }
                if (!(200 <= scltop)) {
                    $menu.removeClass('on');
                }
            })
        });

    }(window, window.jQuery));

    var tab1 = $('#model3').offset();
    var tab2 = $('#model4').offset();
    var tab3 = $('#model5').offset();
    var tab4 = $('#model6').offset();

    $('.m1').click(function(){
        $('html, body').animate({scrollTop:tab1.top-30}, 800)
    })
    $('.m2').click(function(){
        $('html, body').animate({scrollTop:tab2.top}, 800)
    })
    $('.m3').click(function(){
        $('html, body').animate({scrollTop:tab3.top}, 800)
    })
    $('.m4').click(function(){
        $('html, body').animate({scrollTop:tab4.top}, 800)
    })

})
/*
function fnMove(seq){
    $('.text3').click(function(){
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop : offset.top-100}, 400);
        return false;
    })
}
*/