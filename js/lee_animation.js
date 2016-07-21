/**
 * Created by Administrator on 2016/6/16.
 */
/*
var spin = document.createElement('div');
var line1 = document.createElement('div');
line1.src = "resource\animation\headline.png";
line1.appendChild(spin);
document.getElementsByClassName("center-animation").appendChild('spin');
*/

$("document").ready(function(){
    $(".hud_panel").hide();
    $(".hud_panel_l1").delay(2000).fadeIn();
    $(".hud_panel_r1").delay(2000).fadeIn();
    $(".hud_panel_l2").delay(1000).fadeIn();
    $(".hud_panel_r2").delay(1000).fadeIn();
    $(".hud_panel_l3").delay(2000).fadeIn();
    $(".hud_panel_r3").delay(2000).fadeIn();
    //$(".hud_panel_l4").delay(1000).fadeIn();
    $(".hud_panel_nav").delay(000).fadeIn();
});
$("button").hover(function(){
    $("this").addClass("shanshuo");
})
$("button#about").click(function(){
    $(".hud_panel_l1").slideToggle(1000)
    $(".hud_panel_l2").delay(400).slideToggle(400)
    $(".hud_panel_l3").delay(600).slideToggle(400)
    $(".hud_panel_l4").delay(800).slideToggle(400)
    //$(".hud_panel_l4").delay(1000).slideToggle(400)
        //$(".hud_panel_l1").toggleClass("hud_panel_l1_remove")
       // $(".hud_panel_l2").toggleClass("hud_panel_l2_remove")
      //  $(".hud_panel_l3").toggleClass("hud_panel_l3_remove")
    //$(".hud_panel_l4").toggleClass("hud_panel_l4_in")
});
