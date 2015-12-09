$(function(){
      
  $('table[class!="menu"] > tbody > tr:odd').addClass('odd');
  
  $('table[class!="menu"] > tbody > tr').hover(function(){
    $(this).toggleClass('hover');
  });
  
  $('form.nosend').submit(function(e){ e.preventDefault(); });
  
  $('#pesquisar').keydown(function(){
    var encontrou = false;
    var termo = $(this).val().toLowerCase();
    $('table[class!="menu"] > tbody > tr').each(function(){
      $(this).find('td').each(function(){
        if($(this).text().toLowerCase().indexOf(termo) > -1) encontrou = true;
      });
      if(!encontrou) $(this).hide();
      else $(this).show();
      encontrou = false;
    });
  });
  
  $('table[class!="menu"]')
  	.tablesorter({
      dateFormat: 'uk',
    }) 
    .tablesorterPager({container: $("#pager")})
    .bind('sortEnd', function(){
      $('table[class!="menu"] > tbody > tr').removeClass('odd');
      $('table[class!="menu"] > tbody > tr:odd').addClass('odd');
    });
    $("#pager").css("position", "inherit");
});