$(document).ready(function(){

    // For the Navbar to appear on scroll

    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }

        // scrolling button Btn
        if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })

    //typing effect
    var typed = new Typed(".typing-1",{
        strings:[
             "Developer", "Youtuber", "Blogger",
             "Designer", "Freelancer"
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings:[
             "Developer", "Youtuber", "Blogger",
             "Designer", "Freelancer"
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    //  owl Carousel styling
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })

})

/*$(function(){
    $(document).scroll(function() {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
}); */

/*$(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop() > 50) {
            $(".navbar").css 
        }
    })
}) */