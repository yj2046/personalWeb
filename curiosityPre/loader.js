// JavaScript Document
//var initSwiper=function(){
//    var swiper = new Swiper('.swiper-container', {
//        autoHeight:true,
//        direction : 'vertical',
//        onSlideChangeStart: function(swiper){
//            $(".ani").hide();
//        },
//        onSlideChangeEnd: function(swiper){
//            $(".ani").show();
//        },
//        onReachEnd: function(swiper){
//            swiper.destroy(false);
//        }
//
//    });
//    var height = 2133/75;
//    $('.slide8').css("height",height+"rem");
//
//    $(".swiper-parent").css("height","auto");
//
//
//
//};


var imgArray = [
    "images/page1_1.png",
    "images/page1_ani.png",
    "images/page1_ani2.png",
    "images/page1_ani3.png",
    "images/page1_ani4.png",
    "images/page1_ani5.png",
    "images/page1_bg.png",
    "images/page2_2.png",
    "images/page2_word1.png",
    "images/page2_word2.png",
    "images/page3_1.png",
    "images/page3_book.png",
    "images/page3_cat.png",
    "images/page3_coffee.png",
    "images/page3_conputer.png",
    "images/page3_huiban.png",
    "images/page3_line.png",
    "images/page3_message.png",
    "images/page3_phone.png",
    "images/page3_mouse.png",
    "images/page3_pen.png",
    "images/page3_people.png",
    "images/page4_1.png",
    "images/page4_bg.png",
    "images/page4_light.png",
    "images/page4_part1.png",
    "images/page4_part2.png",
    "images/page4_part3.png",
    "images/page4_part4.png",
    "images/page4_part5.png",
    "images/page4_pointer.png",
    "images/page4_watch.png",
    "images/page5_1.png",
    "images/page5_2.png",
    "images/page5_3.png",
    "images/page5_4.png",
    "images/page5_bg.png",
    "images/page5_dai.png",
    "images/page5_dai1.png",
    "images/page5_dai2.png",
    "images/page5_dai3.png",
    "images/page5_dai4.png",
    "images/page5_dai5.png",
    "images/page5_dai6.png",
    "images/page5_dai7.png",
    "images/page5_dai8.png",
    "images/page5_dai9.png",
    "images/page5_dai10.png",
    "images/page5_dai11.png",
    "images/page5_dai12.png",
    "images/page5_dai13.png",
    "images/page5_dai14.png",
    "images/page5_dai15.png",
    "images/page5_dai16.png",
    "images/page5_dai17.png",
    "images/page5_dai18.png",
    "images/page5_dai19.png",
    "images/page5_dai20.png",
    "images/page5_dai21.png",
    "images/page5_dai22.png",
    "images/page5_dai23.png",
    "music.mp3"
];
var ori_width=[], ori_height=[];
var initStyle={};
// 资源加载
var Loader = function(){
    this.currProgress = 0;  // 当前加载进度
    this.isCompleted = false; // 判断是否加载完毕
    this.total = 100;  // 最大值100

    var loaded = 1;

    //var content = document.getElementById('content');
    var number = document.getElementById('number');
    //var w = document.getElementsByClassName('progress')[0].offsetWidth / 20;
    this.Loading = function(imgArray,success){
        var self = this;
        for( var i = 1 ; i < imgArray.length; i++ ){
            var ext = imgArray[i].substring(imgArray[i].lastIndexOf('.')).toLowerCase();
            if( ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.gif' ){
                var img = new Image();
                img.onload = (function(j) {
                    return function(){
                        loaded ++;
                        self.currProgress = loaded / imgArray.length * 100;
                        $("#number").text(parseInt(self.currProgress)+"%");

                        if( loaded == imgArray.length ){
                            success();  // 回调函数
                        }
                        ori_width[j]=this.width;
                        ori_height[j]=this.height;
                    };
                })(i);

                img.onerror = function(){
                    loaded ++;
                    if( loaded == imgArray.length ){
                        success();  // 回调函数
                    }
                };
                img.src = imgArray[i];
            }else{
                this.loadMusic(imgArray[i]);
            }
        }
    };
    this.loadMusic = function(path){
        $.ajax({
            type: 'get',
            url: path,
            data: {},
            async:false,   // false 同步  true  异步
            success: function (data) {
                loaded++;
                if( loaded == imgArray.length ){
                    success();  // 回调函数
                }
            },
            error: function (xhr, type)  {
                loaded++;
                if( loaded == imgArray.length ){
                    success();  // 回调函数
                }
            }
        })
    };
    this.success = function(){
        //alert("加载完毕");

        $('.loading').hide();
        $(".slide1").show();

    };
    this.loadLoading = function(imgArray,obj){
        var img = new Image();
        img.onload = function(){
            obj.Loading(imgArray,obj.success);
        };
        img.onerror = function(){
            obj.Loading(imgArray,obj.success);
        };
        img.src = imgArray[0];
    };
};

var loader = new Loader();
loader.loadLoading(imgArray,loader);
