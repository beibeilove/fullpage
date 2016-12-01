$(document).ready(function() {
    $('#fullpage').fullpage({
        menu:"#menu",
        navigation:true,
        anchors:['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10'],
        navigationTooltips:["首页","视觉","交互","皮肤","功能","代办邮件","联系人邮件","科技","连接易信","马上体验"],
        navigationColor:"#8F9DA4",
        afterLoad:function (anchorLink,index){
            $("#fp-nav ul li a").removeAttr("id","active");
            $("#fp-nav ul li a").eq(index-1).attr("id","active");
        }

    });

});