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

    // first: get json of github about this repo
    var obj_repo = JSON.parse(GitHub_getInfo.text());
    // change img of repo
    document.getElementById("owner_avatar").src = obj_repo.owner.avatar_url;
}