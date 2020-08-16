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
    // first: get json of github about this repo
    var obj_repo = JSON.parse(GitHub_getInfo.text());
    // change img of repo
    document.getElementById("owner_avatar").src = obj_repo.owner.avatar_url;
    // change repo name
    document.getElementById("repo_name").innerHTML = obj_repo.full_name;
    //change description of repo
    document.getElementById("repo_desc").innerHTML = obj_repo.description;
}