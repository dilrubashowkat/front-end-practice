/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("dilrubashowkat");

 var s = 29979245800/1000000000;

console.log(s);
alert("hiii");

var v = "awesomeThoughts";
var t = v.replace("awesome","Fun");
//console.log(t);
$("#main").append(t);*/
var bio ={
  "name" : "Dilruba",
  "role" : "ux/ui",
  "contact" : "541-979-2529",
  "welcome-message" : "hiiiiii",
  "skills" : "ui/ux research and development tools"
}
//$("#main").append(bio.contact);

var education = {
    "school":{
        "city":"dhaka",
        "major":"CS",
        "minor":"none",
        "grad_year":"2009"
    },
    "hobbies":{
        "music":"rock",
        "dance":"west coast swing"
    }

}

if(bio.skills.length!=0)
{
    $("#header").append(bio.skills);

}
$(document).click(function(loc)){
    logClicks(loc.x,loc.y);
}
