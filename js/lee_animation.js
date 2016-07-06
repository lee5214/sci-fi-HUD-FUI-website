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

$("button").click(function(){
        $(".hud_panel_l1").toggleClass("hud_panel_l1_remove")
        $(".hud_panel_l2").toggleClass("hud_panel_l2_remove")
        $(".hud_panel_l3").toggleClass("hud_panel_l3_remove")
        $(".hud_panel_l4").toggleClass("hud_panel_l4_in")
        //$(".hud_panel_l4").addClass("shanshuo2").addClass("biankuang_1")
});
