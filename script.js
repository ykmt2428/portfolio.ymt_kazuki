$(function(){
    $('.hanbager').click(function() {
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#mask').click(function(){
        $('#header').removeClass('open');
    });
    $('.header-list a').click(function(){
        $('#header').removeClass('open');
    });
    $('a[href^="#"]').click(function(){
        var speed = 800,
            href = $(this).attr("href"),
            target = $(href === "#" || href === "" ? 'html' : href),
             position = target.offset().top;
         $("html, body").animate({scrollTop:position}, speed, "swing");
         return false;
      });
    $('.inview').on('inview', function(event, isInView,visiblePartX,visiblePartY) {
        if (isInView) {
        //表示領域に入った時
          $(this).stop().addClass('show');
        } 
      });
});