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
    // load num
    document.getElementById("repo_stars").innerHTML = obj_repo.stargazers_count + config_button_stars;
    document.getElementById("repo_watchers").innerHTML = obj_repo.watchers_count + config_button_watchers;
    document.getElementById("repo_size").innerHTML = obj_repo.size + config_button_size;
    document.getElementById("repo_forks").innerHTML = obj_repo.forks_count + config_button_forks;
    document.getElementById("repo_issues").innerHTML = obj_repo.open_issues + config_button_issues;
    // change value of more info
}