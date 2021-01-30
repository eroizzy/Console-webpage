function f(ele,txt) { 
    $(ele).replaceWith($(ele).clone().text(txt));
}
function revTyping(ele){
    $(".cursor").removeClass("cursor");
    $(ele).replaceWith($(ele).clone().addClass("rev cursor"));
}
$(document).ready(function(){
    $(function() {
        $("div#cmdln").draggable();
    });
    let $base = $("<p></p>").addClass("typewriter");
    let $tbase = $("<span></span>").addClass("typewriter");

    let cnsl = [
        {"message":"> login as: ", "type":"root", "time":0},
        {"message":"> password: ", "type":"*****************", "time": 2},
        {"message":"> connecting ", "type":".............", "time": 5},
        {"message":"> -------------------------------------", "time": 7},
        {"message":"> Welcome to Izzy's AWS EC-2 Instance", "time": 7},
        {"message":"> -------------------------------------", "time": 7},
        {"message":"> https://aws.amazon.com/amazon-linux-2/", "time": 7},
        {"message":"> [root@ec-2.eroizzy.com]:~$ ","type":"curl https://ipecho.net/plain ; echo", "time": 8},
        {"message":"> " + ip, "time": 11},
        {"message":"> [root@ec-2.eroizzy.com]:~$ ", "type":"&nbsp;", "time": 12},

    ];



    for (let x = 0; x < cnsl.length; x++){
        let $temp = $base.clone().html("");
        if ("message" in cnsl[x] && "type" in cnsl[x]){
            $temp.html(cnsl[x]["message"]);
            $tbase.clone().addClass("cursor fwd").html(cnsl[x]["type"]).appendTo($temp);
        }
        else if ("message" in cnsl[x]){
            $temp.html(cnsl[x]["message"]);
        }
        else if ("type" in cnsl[x]){

        }
        setTimeout(function(){
            $(".cursor").removeClass("cursor");
            $temp.appendTo("#cmdln");
        },cnsl[x]["time"]*1000);
    }
});