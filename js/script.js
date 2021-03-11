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