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

            break;
        }
    }
}