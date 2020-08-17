/*
    This script use for get and add event of repo to listview
    Author: Võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0@gmail.com
*/
function addList(input){
    var tag = document.createElement("li");
    tag.className = "alert alert-warning";
    tag.innerHTML = input;
    document.getElementById("list_events").appendChild(tag);
}

function event_get(){
    var page = 1;
    var obj_events = JSON.parse(GitHub_getEvents.text(page));
    for (var i = 0; i < obj_events.length; i++){
        switch (obj_events[i].type){
            case "IssuesEvent":
                if (config_show_issues) event_Issue();
            break;
            case "PushEvent":
                if (config_show_push) event_Push();
            break;
            case  "IssueCommentEvent":
                if (config_show_isuecomment) event_CommentIssue();
            break;
            case "PullRequestEvent":
                if (config_show_pull) event_Pull();
            break;
            case "ForkEvent":
                if (config_show_fork) event_Fork();
            break;
            case "GollumEvent":
                if (config_show_wiki) event_Gollum();
            break;
            case "ReleaseEvent":
                if (config_show_release) event_Release();
            break;  
        }
    }
}

function event_Issue(){

}

function event_CommentIssue(){

}

function event_Pull(){

}

function event_Fork(){

}

function event_Gollum(){

}

function event_Release(){

}

function event_Push(){

}