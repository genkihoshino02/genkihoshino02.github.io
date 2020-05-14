$(function(){
    var topBtn=$('#page-top');
    var showFlag = false;
    topBtn.css('bottom','-100px');
    var showFlag =false;

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            if(showFlag==false){
                showFlag = true;
                topBtn.stop().animate({'bottom':'100px'},500);
            }
            }else{
                if(showFlag){
                    showFlag=false;
                    topBtn.stop().animate({'bottom':'-100px'},500);
                }
            }
        });

        topBtn.click(function(){
            $('body,html').animate({
                scrollTop:0
            },500);
            return false;
    
    });
});

