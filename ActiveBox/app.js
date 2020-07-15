$(function(){
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    
    scrollPos=$(window).scrollTop();
    introH = intro.innerHeight();

    if(scrollPos>introH){
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
    
    $(window).on("scroll",function(){
        scrollPos=$(this).scrollTop();
        introH = intro.innerHeight();
        
        if(scrollPos+50>introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    })
    
    /*Smooth scroll*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elemId = $(this).data("scroll");
        let elemPos =$(elemId).offset().top - 2*header.innerHeight();
        $("html, body").animate({
            scrollTop: elemPos
        }, 700)
        nav.removeClass("show");
    })
    
    /*Nav Toggle*/
    
    $("#navToggle").on("click",function(event){
        event.preventDefault();
        nav.toggleClass("show");
    })
    
    /*Reviews Slider: https://kenwheeler.github.io/slick/*/
    
    
    let slider = $("#reviewsSlider");
    
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        adaptiveHeight: true
    });
    
  
    
    
    
    
    
    
})