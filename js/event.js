/*
    This script use for get and add event of repo to listview
    Author: Võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0@gmail.com
*/
var page = 1;
function addList(input){
    var tag = document.createElement("div");
    tag.className = "card";
    tag.innerHTML = input;
    document.getElementById("list_events").appendChild(tag);
}

function event_get(){
    var obj_events = JSON.parse(GitHub_getEvents.text(page));
    for (var i = 0; i < obj_events.length; i++){
        switch (obj_events[i].type){
            case "IssuesEvent":
                if (config_show_issues) event_Issue(obj_events, i);
            break;
            case "PushEvent":
                if (config_show_push) event_Push(obj_events, i);
            break;
            case  "IssueCommentEvent":
                if (config_show_isuecomment) event_CommentIssue(obj_events, i);
            break;
            case "PullRequestEvent":
                if (config_show_pull) event_Pull(obj_events, i);
            break;
            case "ForkEvent":
                if (config_show_fork) event_Fork(obj_events, i);
            break;
            case "GollumEvent":
                if (config_show_wiki) event_Gollum(obj_events, i);
            break;
            case "ReleaseEvent":
                if (config_show_release) event_Release(obj_events, i);
            break;  
        }
    }
}

function event_Issue(input, i){
    var content = config_style_issue;
    content = content.replace("AvatarValue", input[i].actor.avatar_url);
    content = content.replace("UserNameValue", input[i].actor.login);
    content = content.replace("TitleValue", input[i].payload.issue.title);
    content = content.replace("BodyValue", system_convert(input[i].payload.issue.body));
    content = content.replace("UrlValue", input[i].payload.issue.html_url);
    content = content.replace("TimeValue", input[i].payload.issue.created_at);
    addList(content);
}

function event_CommentIssue(input, i){

}

function event_Pull(input, i){

}

function event_Fork(input,i){

}

function event_Gollum(input,i){

}

function event_Release(input,i){

}

function event_Push(input, i){
    
}