    $('.slider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 798,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      ]
    });
        
    $(document).ready(function() {
      $('.header__burger').click(function(event){
    
         $('.header__burger,.header__menu').toggleClass('active');
         $('body').toggleClass('lock');
      });
    
      $('.header__list').click(function(event) {
         $('.header__burger,.header__menu').removeClass('active');
         $('body').removeClass('lock');
      });
    
    
    
    
      $('.btn__jumbotron').click(function(event){
    
    $('.popup').toggleClass('popup__status');
    $('body').toggleClass('lock');
    });

    $(document).keyup(function(e) {

        if (e.keyCode == 27) { 
            $('.popup').toggleClass('popup__status');
            $('body').removeClass('lock');
         } 
      });
      $('.popup__close').click(function(event){
    
        $('.popup').removeClass('popup__status');
        $('body').removeClass('lock');
     });  
    
    
    });
      
    
        
   