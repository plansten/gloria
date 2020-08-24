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
    
    $('.popup').addClass('show');
    $('.popup').removeClass('hidden');
    $('.popup__info__body').addClass('show');
    $('.popup__info__body').removeClass('hidden');    
    $('body').addClass('lock');
    });

    $(document).keyup(function(e) {

        if (e.keyCode == 27) { 
            $('.popup').removeClass('show');
            $('.popup').addClass('hidden');
            $('.popup__info__body').removeClass('show');
            $('.popup__info__body').addClass('hidden'); 
            $('body').removeClass('lock');
            
         } 
      });
      $('.popup__close').click(function(event){
        $('.popup').removeClass('show');
        $('.popup').addClass('hidden');
        $('.popup__info__body').removeClass('show');
        $('.popup__info__body').addClass('hidden');
        $('.popup__getservice__body').removeClass('show');
        $('.popup__getservice__body').addClass('hidden'); 
        $('body').removeClass('lock');
     });  
    




     $('.btn__services').click(function(event){
    
        $('.popup').addClass('show');
        $('.popup').removeClass('hidden');
        $('.popup__getservice__body').addClass('show');
        $('.popup__getservice__body').removeClass('hidden'); 
        $('body').addClass('lock');
        });

     
    
    });
      
    
        
   