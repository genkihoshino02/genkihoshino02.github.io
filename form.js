$(document).ready(function(){
    $('#form').submit(function(event){
        var formData =$('#form').serialize();
        $.ajax({
            url:"https://docs.google.com/forms/d/e/1FAIpQLScGOJPxtKPt_JdhbS-zqbPneDGJTMH_KGDTlmzdekzwxtV37g/viewform",
            data:formData,
            type:"POST",
            dataType:"xml",
            statusCode:{
                0:function(){
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                
                },
                200: function(){
                    $(".false-message").slideDown();
                }
            }
            
        });
        event.preventDefault();
    });
    
})