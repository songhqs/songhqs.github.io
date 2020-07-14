$(document).ready(function(){
var stt = 0;
starImg =$("img.slide:first").attr("stt");
endImg = $("img.slide:last").attr("stt");
$("img.slide").each(function(){
    if($(this).is(':visible'))
    stt=$(this).attr("stt");
});
$("#next").click(function(){
    if(stt == endImg){
        stt =-1;
    }
    next= ++stt;
    $("img.slide").hide();
    $("img.slide").eq(next).show();
});
    $("#prev").click(function(){
        if(stt==0) {
            stt=endImg;
            prev =stt++;
        }
    prev= --stt;
    $("img.slide").hide();
    $("img.slide").eq(prev).show();
});
setInterval(function(){
        $("#next").click();
},2000);

});

 