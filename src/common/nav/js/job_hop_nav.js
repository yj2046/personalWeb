$(function() {

    $('head').append('<link href="http://www.lagou.com/activity/dist/common/nav/css/job_hop_nav.css?v=6" rel="stylesheet" />');

    $.ajax({
            url: 'http://www.lagou.com/activity/dist/common/nav/html/job_hop_nav.html',
            dataType: 'html'
        })
        .done(function(html) {
            var $header = $.parseHTML(html, document, true);
            $('body').prepend($header);
        });
});