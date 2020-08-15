// This file to get data from GitHub API
/*
    Author: võ Quốc Thịnh
    GitHub: quocthinhvo
    Email: quocthinhvo0@gmail.com
*/

// var GitHub_api = new XMLHttpRequest();

var parent_value = config_parent;
var repo_value = config_repo;

var GitHub_getCustom = {
    code: function (type, url, ex) {
        var api = new XMLHttpRequest();
        api.open(type, url, ex);
        api.send(null);
        return api.status;
    },
    text: function (type, url, ex) {
        var api = new XMLHttpRequest();
        api.open(type, url, ex);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getInfo = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value, false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value, false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getEvents = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/events", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/events", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getContents = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contents", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contents", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getForks = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/forks", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/forks", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getTeams = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/teams", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/teams", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getHooks = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/hooks", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/hooks", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getTags = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/tags", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/tags", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getLanguages = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/languages", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/languages", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getStars = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/stargazers", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/stargazers", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getContributors = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contributors", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/contributors", false);
        api.send(null);
        return api.responseText;
    }
}

var GitHub_getSubs = {
    code: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/subscribers", false);
        api.send(null);
        return api.status;
    },
    text: function(){
        var api = new XMLHttpRequest();
        api.open("GET", "https://api.github.com/repos/" + parent_value + "/" + repo_value + "/subscribers", false);
        api.send(null);
        return api.responseText;
    }
}