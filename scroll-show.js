$(function(){
    $(window).on('scroll',function(){
        var scroll_top = $(window).scrollTop();
        $('.show').each(function(){
            var offset_top=$(this).offset().top ;
            top_margin=600;

            if(scroll_top>offset_top - top_margin){
                $(this).addClass('fadein');
            }else{
                $(this).removeClass('fadein');
            }
        });
    });
});
