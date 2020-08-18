/*
    this script use for system process
    Author: Võ Quốc Thịnh
    Email: quocthinhvo0@gmail.com
    GitHub: quocthinhvo
*/

function system_convert(md){
    var converter = new showdown.Converter();
    converter.setOption("tables", true);
    var html = converter.makeHtml(md);
    return html;
}

function system_url(key){
    var queryString =  window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(key);
}