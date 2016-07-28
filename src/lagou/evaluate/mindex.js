$(function () {
    var evaluate;
    var submitFlag = false;
    //点亮星星,一星：非常不满意；二星：不满意；三星：一般般；四星：满意；五星：非常满意
    $("body").on("tap", ".notlit,.light", function (e) {
        e.stopPropagation();
        var index = $(this).index();
        var indexWorlds = ['非常不满意', '不满意', '一般般', '满意', '非常满意']
        $(".notlit").each(function (i) {
            if (i < index + 1) {
                $(this).hide();
            } else {
                $(this).show();
            }

        });
        $(".light").each(function (i) {
            if (i < index + 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        var indexWorlds = ['非常不满意', '不满意', '一般般', '满意', '非常满意'];
        $(".lightbox p").text(indexWorlds[index]);
        $(".submitBtn span").css('opacity', '1');
        submitFlag = true;
    });

    //提交评价
    $("body").on("tap", ".submitBtn", function (e) {
        e.stopPropagation();
        var evaluateContent = $("textarea").val();
        if (submitFlag) {


            $(".success").show();
            setTimeout(function(){
                $(".submitBtn,.inputbox").hide();
                $(".evaluateContent").text(evaluateContent).show();
                $(".success").hide();
            },1000);

        }
    });

    //$('textarea').focus(function () {
    //    $("html").css('height','345px');
    //});
    //
    //$('textarea').blur(function () {
    //    $("html").css('height','100%');
    //});


});