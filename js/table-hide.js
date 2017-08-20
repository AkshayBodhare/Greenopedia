$(document).ready(function(){
    $('table tr:not(.header)').hide();

    $('.header').click(function() {
        $(this).toggleClass('expand');
        $(this).parent().parent().find('tbody tr').toggle();
    });

    $('.header').mouseenter(function(){ 
      $(this).toggleClass('expand'); 
      $(this).parent().parent().find('tbody tr').slideToggle(100); 
    });
    $('table').mouseleave(function(){   
      $(this).find('.header').toggleClass('expand'); 
      $(this).find('tbody tr').slideToggle(100);
    
    });
});