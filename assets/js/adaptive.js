var aboutpic = $(".about-pic");

var menu = $(".btn-menu-kyky-epta");
var btn = $(".btn");
var btnic = $(".btn-ic");
var menucp = $(".menu-copy-paste");
var menushadow = $(".menu-copy-paste-shadow");
var menuexit = $(".exit-in-window");

var stepline = $(".header-progress");

var teamputa = $(".img-team-photo");

var sponsory = $(".logo-section");
var xyinianaflexsaxsgridami = $(".our-work-presentation>.container");

var maintext = $(".main-text");
var subtext = $(".sub-text");
var quotesect = $(".quote-section");

function adaptive() {
    if (innerWidth <= 1500) {
        // блок с долбёжкой 
        aboutpic.css({width:"250px", height:"250px"});
    }
    if (innerWidth <= 1200) {
        //меню
        menu.css({display:"block"});
        btn.css({display:"none"});
        //степлайн
        stepline.remove();
        //сделать тиму поменьше, ато хули такие большие отелись
        teamputa.css({width:"350px", height:"420px"});
        //спонсоров нахуй, ну или сделать их поменьше 
        sponsory.remove();
        //раздрочить эту хуйню на флексах с картинками на вертикаль а не на горизонт
        xyinianaflexsaxsgridami.css({"grid-template-columns": "repeat(2, 1fr)","grid-template-rows": "repeat(4, 1fr)"});
        $(".our-work-img-3").css({"grid-row-start": "-1","grid-row-end": "3","grid-column": "1"});
        $(".our-work-img-4").css({"grid-row": "3","grid-column": "2"});
        $(".our-work-img-7").css({"grid-row": "4","grid-column": "2"});
    }
    if (innerWidth <= 1100) {
        //короче я блять нахуй нелюблю лдей которые эти ёбаные цитаты хуярят, в пизду удалить
        quotesect.remove();
        //мудилы снизу перед футором меньше сделать
        $(".client-img").css({width:"50px", height:"50px", "margin-right":"20px"});
    }
    if (innerWidth <= 900) {
        //ну тут короче просто делать меньше всё к ёбаной матери
        //а здесь будет прогать костя :) ~~<===3
    }

    if (innerHeight <=722) {
        //сделать меньший шрифт в хедаре
        //и убрать нахуй этот степ лайн. потому что в пизду 
        //я его ебал, не хочу его переделывать под нищебродов с ёбаными 720пикселями, сайтами надо с пк блять работать, 
        //уёбки (пассивная агрессия)
        maintext.css({"font-size":"6em"});
        subtext.css({"font-size":"2em"});
        stepline.remove();
    }
}

$(document).ready(function(){
    $(window).on("load", function() {
        adaptive();
        menu.on('click', function() {
            if (btnic.css("display") != "none" && menucp.css("display") == "none") {
                btnic.css({display:"none"});
                menucp.css({display:"flex"});
                menushadow.css({display:"block"});
            }
        });
        menuexit.on('click', function() {
            if (btnic.css("display") == "none" && menucp.css("display") != "none") {
                btnic.css({display:"block"});
                menucp.css({display:"none"});
                menushadow.css({display:"none"});
            }
        });
    });
	$(window).resize(function() {
        adaptive();
    });
});