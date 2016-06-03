$(function () {

    
    var datas = {
       title: "什么样的设计师一个作品价值3万？ ",
       desc: "一颗跳动的好奇心，不仅仅价值3万 | 拉勾形象设计征集计划",
       imgUrl: "http://www.lagou.com/activity/dist/curiosityPre/images/share.jpg",
       goToUrl: false
    };
    share(datas);


    var openFlag = true;
    $("body").on("tap",".music",function(e){
        e.stopPropagation();
        $("audio")[0].pause();
        if(openFlag){
            $("audio")[0].pause();
            $(".musicOpen").hide();
            $(".musicStop").show();

            openFlag = false;
        }else{
            $("audio")[0].play();
            $(".musicOpen").show();
            $(".musicStop").hide();
            openFlag = true;
        }
    });
    $(".shareBtn").click(function(){
        $(".shareImg").show();
    });

    $(".shareImg").click(function(){
        $(".shareImg").hide();
    });

    var now = 1; last = 0;
    const towards = { up: 1, down: 2 };
    var isAnimating = false;
    var endToStart = false;

    var slide = $(".slide1,.slide2,.slide3,.slide4,.slide5,.slide6,.slide7,.slide8");
    var start = 0,end = 0;
    slide.on('touchstart', function (event) {
        start = event.touches[0].pageY;
    });
    slide.on('touchmove', function (event) {
        end = event.touches[0].pageY;
        if($(this).hasClass('slide8')){
            if(start > end){   // up

            }else if(start < end){ // down
                if(document.body.scrollTop <10 && endToStart){
                    endToStart = false;
                    event.preventDefault();
                }else {
                    endToStart = true;
                }
            }
        }else{
            event.preventDefault();
        }
    });

    //翻页
    $(".slide1,.slide2,.slide3,.slide4,.slide5,.slide6,.slide7").swipeUp(function(e){
        if(isAnimating){
            return;
        }
        isAnimating = true;
        //alert($(this).index());
        var that = $(this);
        var next = that.next();
        var nextAni = next.find('.ani');
        that.addClass("moveToTop");
        next.show().addClass("moveToTop2");

        nextAni.hide();
        setTimeout(function () {
            that.hide().removeClass('moveToTop');
            next.removeClass('moveToTop2');
            nextAni.show();
            isAnimating = false;
        }, 600);


    });
    $(".slide2,.slide3,.slide4,.slide5,.slide6,.slide7,.slide8").swipeDown(function(e){
        //alert($(this).index());
        var that = $(this);
        var prev = that.prev();
        var prevAni = prev.find('.ani');
        that.addClass("moveToEnd");
        prev.show().addClass("moveToEnd2");
        prevAni.hide();
        setTimeout(function () {
            that.hide().removeClass('moveToEnd');
            prev.removeClass('moveToEnd2');
            prevAni.show();
        }, 600);
    });


    $(".slide7 .bottom").click(function(){

        var that =$(".slide7");
        var next = that.next();
        that.addClass("moveToTop");
        next.show().addClass("moveToTop2");
        setTimeout(function () {
            that.hide().removeClass('moveToTop');
            next.removeClass('moveToTop2');
        }, 600);
    });
});