
$(document).ready(function () {
    //下拉菜单滑动
    $("#navbar>ul>li:not(:first)").hover(function () {
        $(this).find("ul").stop().slideToggle("fast");

    });
    //手机的下拉按钮
    $("#toggle-bar").click(function () {
        $("#navbar").toggleClass("navbar-overflow");
        $("#toggle-bar2").fadeToggle("fast");
    });
    //last li border-bottom：none 
    var ul = document.getElementsByClassName("con");
    for (var i = 0; i < ul.length; i++) {
        ul[i].lastElementChild.style.border="none";
    }
    
});