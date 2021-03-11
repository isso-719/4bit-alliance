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
$(document).ready(function(){
    $('.fuwat').css('visibility','hidden');
    $(window).scroll(function(){
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('.fuwat').each(function(){
        var objectPosition = $(this).offset().top;
        if(topWindow > objectPosition - windowHeight + 200){
        $(this).addClass("fuwatAnime");
    }
    });
    });
});