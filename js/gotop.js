$(function() {
    $("#gotop").click(function() {
        $("html, body").animate({ scrollTop: 0}, "slow"); //慢速返回上方
        return false; //預設載入狀態為FadeOut
    });

    $(window).scroll(function() { //偵測卷軸滑動超過400時，讓Gotop出現
        if ( $(this).scrollTop() > 400) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut ();
        }
    });
});