$(function () {
    var sureBtn = false;
    var mailListFlag = true;
    var shieldContent = "";  //屏蔽企业邮箱，多个邮箱按"@lagou.com;@baidu.com;@tencent.com"格式

    //添加屏蔽邮箱
    $("body").on("tap", ".addMail", function (e){

        e.stopPropagation();
        $(this).hide();
        $(".one").show();

    });

    //取消添加
    $("body").on("tap", ".cancle", function (e){

        e.stopPropagation();
        $("#inputMail").val("@");
        $(".one").hide();
        $(".addMail").show();

    });

    //确认添加
    $("body").on("tap", ".sure", function (e){

        e.stopPropagation();
        if(sureBtn){
            var mailValue = $("#inputMail").val();
            var mailStr = '<li><input type="text" value="'+mailValue+'"><img src="./images/delete.png" alt=""></li>';
            $(".mailList").append(mailStr);
            $(".one").hide();
            $(".addMail").show();
            sureBtn = false;
            $("#inputMail").val("@");
            shieldContent +=mailValue;
        }


    });


    //提交表单
    $('.commit').on('tap', function () {

        var email = $('#mail').val(); 		   //用户邮箱
        var phone = $('#tel').val();
        if(isTel(phone) && isEmail(email) && mailListFlag){
            var inviteCode;    //邀约码

            window.location.href = "success.html";
        }
    });
    //手机号码验证
    $('#tel').on('keyup input change', function () {
        if(isTel($(this).val())){
            $(".telError").hide();
        }else{
            $(".telError").show();
        }
    });
    //邮箱验证
    $('#mail').on('keyup input change', function () {
        if(isEmail($(this).val())){
            $(".mailError").hide();
        }else{
            $(".mailError").show();
        }
    });
    //屏蔽邮箱后缀验证
    $('#inputMail').on('keyup input change', function () {
        if(isShieldEmail($(this).val())){
            $(".error").hide();
            $(".sure span").css('opacity','1');
            sureBtn = true;
            mailListFlag = true;
        }else{
            $(".error").show();
            mailListFlag = false;
            sureBtn = false;
        }
    });



    function isShieldEmail(str) {
        var reg = /^@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reg.test(str);
    }
    function isTel(str){
        var reg = /^1[3,4,5,7,8]{1}[0-9]{9}$/;
        return reg.test(str);
    }
    function isEmail(str){
        var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        return reg.test(str);
    }
});