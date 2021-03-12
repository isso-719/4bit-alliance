// slikを実行する https://kenwheeler.github.io/slick/ を参考
$('.mypattern').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 300,
    arrows: true,
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 3,
    infinite: true,
    variableWidth: true,
});

// modal
$(function () {
    $('#openModalIsso').click(function(){
        $('#modalAreaIsso').fadeIn();
    });
    $('#closeModalIsso , #modalBgIsso').click(function(){
        $('#modalAreaIsso').fadeOut();
    });
});

$(function () {
    $('#openModalNagadon').click(function(){
        $('#modalAreaNagadon').fadeIn();
    });
    $('#closeModalNagadon , #modalBgNagadon').click(function(){
        $('#modalAreaNagadon').fadeOut();
    });
});

$(function () {
    $('#openModalNinomae').click(function(){
        $('#modalAreaNinomae').fadeIn();
    });
    $('#closeModalNinomae , #modalBgNinomae').click(function(){
        $('#modalAreaNinomae').fadeOut();
    });
});

$(function () {
    $('#openModalWaigoma').click(function(){
        $('#modalAreaWaigoma').fadeIn();
    });
    $('#closeModalWaigoma , #modalBgWaigoma').click(function(){
        $('#modalAreaWaigoma').fadeOut();
    });
});

// fuwachan
var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
    $(document).ready(function(){
        $('.fuwat').css('visibility','hidden');
        $(window).scroll(function(){
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.fuwat').each(function(){
            var objectPosition = $(this).offset().top;
            if(topWindow > objectPosition - windowHeight + 50){
            $(this).addClass("fuwatAnime");
        }
        });
        });
    });
} else {
    $(document).ready(function(){
        $('.fuwat').css('visibility','hidden');
        $(window).scroll(function(){
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.fuwat').each(function(){
            var objectPosition = $(this).offset().top;
            if(topWindow > objectPosition - windowHeight + 150){
            $(this).addClass("fuwatAnime");
        }
        });
        });
    });
}

// スクロール
$(window).on('scroll', function () {
    var doch = $(document).innerHeight();
    var winh = $(window).innerHeight();
    var bottom = doch - winh;
    if (bottom - 128 <= $(window).scrollTop()) {
        $('#c-scrolldown').fadeOut();
    } else {
        $('#c-scrolldown').fadeIn();
    }
});
