// This file is script for index.html 
/*
    Author: Võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0gmail.com
*/
function init(){
    /*
        init is the first function run when page loaded.
    */
    //load title
    document.title = config_title;
    info_create();
    event_get();
}

window.onscroll = function(){
    //console.log("Đang cuộn tới " + window.pageYOffset + " trong " + $(document).height());
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        event_get();
    }
}