/* 
The struct of config 
[key] = [value]
you should embled config.js first of all
Example:
<srcipt src="config.js"></script>
<script src="..js"></script>
Is true way
*/
/*
Author config.js
Võ Quốc Thịnh
GitHub: quocthinhvo
Email: quocthinhvo0@gmail.com
*/

const config_key = "value";

// Name of org or owner repo
// if url to repo = "https://www.github.com/kodestudio/neon" then parent = "kodestudio" and repo="neon"
const config_parent = "nodejs";
const config_repo = "node";
const config_title = "Neon - event timeline";
const config_homepage = "";
const config_notification = "";
// config type event load
/*
const config_issues = true;
const config_isuecomment = true;
const config_release = true;
const config_push = true;
const config_pull = true;
*/
// config of custom Data
const config_customapi = "";

/*
config style button info
*/
const config_button_stars = ' <i class="fas fa-star"></i>';
const config_button_watchers = ' <i class="fas fa-eye"></i>';
const config_button_size = ' <i class="fas fa-file"></i>';
const config_button_forks = ' <i class="fab fa-creative-commons-share"></i>';
const config_button_issues = ' <i class="far fa-comment-dots"></i>';