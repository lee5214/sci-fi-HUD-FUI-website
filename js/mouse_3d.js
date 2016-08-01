/**
 * Created by Administrator on 2016/6/20.
 */

/*function hud_panel_focus (){
    $('.hud_panel_1').click(function(){
        console.log($('.hud_panel_1').length);
       $(this).css("animation","hud_panel_1_rotate_reset 2s");
    });
}*/
var maxRotate = 20; //deg
var maxRotateY = 15;
var view_option=3;

$('body').on('mousemove', function(event) {
    var $this = $('.hud_container'),
        width = $this.width(),
        height = $this.height(),
        centerX = width / 2,
        centerY = height / 2,
        left = $this.position().left,
        top =  $this.position().top;

    //console.log("height "+height+"    width "+width);
       /* console.log("left"+left);
        console.log("top:"+top);*/
        curRelPosX = event.clientX - left,
        curRelPosY = event.clientY - top,
        percentX = (curRelPosX - centerX) / centerX,
        percentY = (curRelPosY - centerY) / centerY,
        roY = percentX * maxRotateY;
        roX = -percentY * maxRotate;

    //$this.css('transform', 'none');
    //horizontal
    //$this.css('transform', 'rotateY('+roY + 'deg)');
    //horizontal  and vertical
    $("#view_2D").click(function(){
        console.log("2D view");
         view_option=2;
    });
    $("#view_25D").click(function(){
        console.log("2.5D view");
         view_option=2.5;
    });
    $("#view_3D").click(function(){
        console.log("3D view");
        view_option=3;
        //$("body").css('transform', 'rotateX(' + roX + 'deg) rotateY('+roY + 'deg)');
    });

    if(view_option==2){
        //$(body).setTimeout($reset,1000);
        $this.css('transform', 'rotateX(' + 0 + 'deg) rotateY('+0 + 'deg)');
        $(".hud_panel_nav").addClass("view2d_nav");

    };
    if(view_option==2.5){
        $this.css('transform', 'rotateX(' + 0 + 'deg) rotateY('+ roY + 'deg)');
        $(".hud_panel_nav").removeClass("view2d_nav");
    };
    if (view_option==3){
        $this.css('transform', 'rotateX(' + roX + 'deg) rotateY('+ roY + 'deg)');
        $(".hud_panel_nav").removeClass("view2d_nav");
    };

});
