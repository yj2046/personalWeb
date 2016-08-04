$(function () {

    var showFlag = false;
    var noInterestFlag = true;
    //展开收起
    $("body").on("tap", ".showAll,.hideAll", function (e){

        e.stopPropagation();
        if(showFlag){
            $('.pre').show();
            $('.showAll').show();
            $('.back').hide();
            showFlag = false;
        }else{
            $('.pre').hide();
            $('.showAll').hide();
            $('.back').show();
            showFlag = true;
        }


    });

    //不感兴趣

    $("body").on("tap", ".noInterest", function (e){
        if(noInterestFlag){
            e.stopPropagation();
            $(".shadow").show();
            $(".refuse").show();
        }
    });
    //再考虑一下
    $("body").on("tap", ".onceMore", function (e){
        e.stopPropagation();
        $(".refuse").hide();
        $(".shadow").hide();

    });
    //拒绝
    $("body").on("tap", "#refuse", function (e){

        e.stopPropagation();
        noInterestFlag = false;
        $(".refuse").hide();
        $(".refuse_2").show();

    });

    //知道了
    $("body").on("tap", ".know", function (e){

        e.stopPropagation();
        $(".refuse_2").hide();
        $(".noInterest").addClass("unclick");
        $(".accept").addClass("unclick_2");
        $(".shadow").hide();
    });

    //接受服务
    $("body").on("tap", ".accept", function (e){

        e.stopPropagation();
        if(noInterestFlag){
            window.location.href = "signUp.html";
        }
    });

});