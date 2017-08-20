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

// div.row>(div.one-third.column.tree#>img+table>(thead>tr.header.expand>th[scope="row"]+td)+(tbody>((tr>th[scope="row"]+td)*7+tr>td[colspan="2"])))*3