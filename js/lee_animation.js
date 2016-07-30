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
var sphereRad = 200;//qiu size
var radius_sp=1;
var fLen = 200;
$l1 = $(".hud_panel_l1"),$l2 = $(".hud_panel_l2"),$l3 = $(".hud_panel_l3"),
$r1 = $(".hud_panel_r1"),$r2 = $(".hud_panel_r2"),$r3 = $(".hud_panel_r3"),
$nav = $(".hud_panel_nav"),
$home = $(".hud_panel_home"),$about = $(".hud_panel_about"),$project = $(".hud_panel_project"),$resume = $(".hud_panel_resume");
$leftside = $(".leftside"),$rightside = $(".rightside");

$leftside.delay(3000).animate({left:"4%"},{duration:500});
$rightside.delay(3000).animate({right:"4%"},{duration:500});
////////////////////////////////////////
/*$("#view_2d").click(function(){
    //$reset();
    $("body").off("mouseover");
});
$("#view_full3d").click(function(){
    $("body").css('transform', 'rotateX(' + roX + 'deg) rotateY('+roY + 'deg)');
});
$("#view_horizontal").click(function(){
    $("body").css('transform', 'rotateY('+roY + 'deg)');
});*/
////////////////////////////////////////
$("document").ready(function(){
    $reset();
    setInterval('updateClock()', 1000);
});
//loader
$(window).load(function(){
    $('#loading').fadeOut(00);
});
//panel reset
$reset = function(){
    $(".hud_panel").hide();
    $("#ai").hide();
    $(".logo").hide();
    $("#core_slider").hide();
    $("#view_change").hide();
    //$(":root").css("perspective","'"+resp+"in'");

    //$(":root").animate({"perspective":"12in"},{"duration":1000});
    $l2.add($r2).delay(500).show();
    $l1.add($r1).add($l3).add($r3).add($l2).add($r2).delay(2000).fadeIn().queue(function(next){
        $(this).addClass("panel_on");
        next();
        $(".logo").delay(2000).show();
    });
    $("#dot_p2 .st1").fadeIn().css("fill","white").queue(function(next){
        $(this).addClass("shanshuo");
        next();
    });
    $("#dot_p1 .st0").delay(1000).fadeIn().css("fill","rgba(54, 207, 194, .8)").delay(444);
    $("#dot_p1 .st1").delay(4000).fadeIn(4000).css("fill","white").queue(function(next){
        $("#dot_p1").addClass("shanshuo_infinite");
        next();
    });//.addClass("shanshuo");

    $nav.delay(2000).fadeIn();
    $(".hud_panel_ai").delay(000).fadeIn(2000);
    $("#ai").delay(3000).fadeIn(2000);
    $(".hud_panel_svg").delay(3000).fadeIn(2000);
    $(".core_mask").delay(4000).fadeOut(100).queue(function(next){
        $(".syscore").fadeIn();
        $("#canvasOne").css({"transform":"translateZ(-2in)"});
        $("#core_slider").delay(1000).fadeIn(00).queue(function(next){
            $(this).addClass("shanshuo");
            next();
        });
        $("#view_change").delay(1000).fadeIn(2000);
        next();
    });
    $(".baseline1").delay(4000).animate({top:"2%"},{duration:1000});
    $(".baseline2").delay(4000).animate({bottom:"2%"},{duration:1000});

};

//button function
$("button#home").click(function(){
    //$(window).animate({height:"50%"},{duration:10000});
    $leftside.delay(000).animate({left:"40%"},{duration:1400}).queue(function(next){
        $about.hide();
        $leftside.animate({left:"4%"},{duration:1000});
        next();
    });
    $rightside.delay(000).animate({right:"40%"},{duration:1400}).queue(function(next){
        $project.hide();
        $rightside.animate({right:"4%"},{duration:1000});
        next();
    });
    $resume.hide();
    $reset();
    //$l1.add($l2).add($l3).add($r1).add($r2).add($r3).fadeIn(1000).addClass("panel_on");
});
$("button#about").click(function(){
    $l1.add($l2).add($l3).hide("slow");
    $leftside.delay(000).animate({left:"40%"},{duration:1400}).queue(function(next){
        $about.slideToggle().addClass("panel_on");
        $leftside.animate({left:"4%"},{duration:1000});
        next();
    });
});
$("button#project").click(function(){
    $r1.add($r2).add($r3).hide("slow");
    $rightside.delay(000).animate({right:"40%"},{duration:1400}).queue(function(next){
        $project.slideToggle().addClass("panel_on");
        $rightside.animate({right:"4%"},{duration:1000});
        next();
    });
   //$(".hud_panel").animate({top:"50%"},{duration:1000});
});

/////////////////////////////////////////////////////////////////////////////////////
//timer
function updateClock ( )
{
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    $("#eye4").html(currentTimeString);

}
/////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", windowLoadHandler, false);
//for debug messages
var Debugger = function() { };
Debugger.log = function(message) {
    try {
        console.log(message);
    }
    catch (exception) {
        return;
    }
}
function windowLoadHandler() {
    canvasApp();
}
function canvasApp() {
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");
    var displayWidth;
    var displayHeight;
    var timer;
    var wait;
    var count;
    var numToAddEachFrame;
    var particleList;
    var recycleBin;
    var particleAlpha;
    var r,g,b;
    var m;
    var projCenterX;
    var projCenterY;
    var zMax;
    var turnAngle;
    var turnSpeed;
    var sphereCenterX, sphereCenterY, sphereCenterZ;
    var particleRad;
    var zeroAlphaDepth;
    var randAccelX, randAccelY, randAccelZ;
    var gravity;
    var rgbString;
    var p;
    var outsideTest;
    var nextParticle;
    var sinAngle;
    var cosAngle;
    var rotX, rotZ;
    var depthAlphaFactor;
    var i;
    var theta, phi;
    var x0, y0, z0;


    init();

    function init() {
        wait = 1;
        count = wait - 1;
        numToAddEachFrame = 8;

        //particle color
        r = 110;
        g = 255;
        b = 255;
        $(".core_button").click(function(){
            r=255;
        });
        rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.
        particleAlpha = 1; //maximum alpha

        displayWidth = theCanvas.width;
        displayHeight = theCanvas.height;

         //represents the distance from the viewer to z=0 depth.

        //projection center coordinates sets location of origin
        projCenterX = displayWidth/2;
        projCenterY = displayHeight/2;

        //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
        zMax = fLen-2;

        particleList = {};
        recycleBin = {};

        //random acceleration factors - causes some random motion
        randAccelX = 0.1;
        randAccelY = 0.1;
        randAccelZ = 0.1;

        gravity = -0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.

        particleRad = 2.5;

        sphereCenterX = 0;
        sphereCenterY = 0;
        sphereCenterZ = -3 - sphereRad;

        //alpha values will lessen as particles move further back, causing depth-based darkening:
        zeroAlphaDepth = -750;

        turnSpeed = 2*Math.PI/1200; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
        turnAngle = 0; //initial angle

        timer = setInterval(onTimer, 10/24);
    }

    function onTimer() {
        //if enough time has elapsed, we will add new particles.
        count++;
        if (count >= wait) {

            count = 0;
            for (i = 0; i < numToAddEachFrame; i++) {
                theta = Math.random()*2*Math.PI;
                phi = Math.acos(Math.random()*2-1);
                x0 = sphereRad*Math.sin(phi)*Math.cos(theta);
                y0 = sphereRad*Math.sin(phi)*Math.sin(theta);
                z0 = sphereRad*Math.cos(phi);

                //We use the addParticle function to add a new particle. The parameters set the position and velocity components.
                //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
                //it becomes unstuck).
                var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);

                //we set some "envelope" parameters which will control the evolving alpha of the particles.
                p.attack = 50;
                p.hold = 50;
                p.decay = 100;
                p.initValue = 0;
                p.holdValue = particleAlpha;
                p.lastValue = 0;

                //the particle will be stuck in one place until this time has elapsed:
                p.stuckTime = 90 + Math.random()*20;

                p.accelX = 0;
                p.accelY = gravity;
                p.accelZ = 0;
            }
        }

        //update viewing angle
        turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);
        sinAngle = Math.sin(turnAngle);
        cosAngle = Math.cos(turnAngle);

        //background fill
        context.fillStyle = "#000000";
        context.fillRect(0,0,displayWidth,displayHeight);

        //update and draw particles
        p = particleList.first;
        while (p != null) {
            //before list is altered record next particle
            nextParticle = p.next;

            //update age
            p.age++;

            //if the particle is past its "stuck" time, it will begin to move.
            if (p.age > p.stuckTime) {
                p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);
                p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);
                p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);

                p.x += p.velX;
                p.y += p.velY;
                p.z += p.velZ;
            }

            /*
             We are doing two things here to calculate display coordinates.
             The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
             x and z (but the y coordinate will not change).
             Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
             */
            rotX =  cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);
            rotZ =  -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;
            m =radius_sp* fLen/(fLen - rotZ);
            p.projX = rotX*m + projCenterX;
            p.projY = p.y*m + projCenterY;

            //update alpha according to envelope parameters.
            if (p.age < p.attack+p.hold+p.decay) {
                if (p.age < p.attack) {
                    p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
                }
                else if (p.age < p.attack+p.hold) {
                    p.alpha = p.holdValue;
                }
                else if (p.age < p.attack+p.hold+p.decay) {
                    p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
                }
            }
            else {
                p.dead = true;
            }

            //see if the particle is still within the viewable range.
            if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {
                outsideTest = true;
            }
            else {
                outsideTest = false;
            }

            if (outsideTest||p.dead) {
                recycle(p);
            }

            else {
                //depth-dependent darkening
                depthAlphaFactor = (1-rotZ/zeroAlphaDepth);
                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);
                context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";

                //draw
                context.beginPath();
                context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);
                context.closePath();
                context.fill();
            }

            p = nextParticle;
        }
    }

    function addParticle(x0,y0,z0,vx0,vy0,vz0) {
        var newParticle;
        var color;

        //check recycle bin for available drop:
        if (recycleBin.first != null) {
            newParticle = recycleBin.first;
            //remove from bin
            if (newParticle.next != null) {
                recycleBin.first = newParticle.next;
                newParticle.next.prev = null;
            }
            else {
                recycleBin.first = null;
            }
        }
        //if the recycle bin is empty, create a new particle (a new ampty object):
        else {
            newParticle = {};
        }

        //add to beginning of particle list
        if (particleList.first == null) {
            particleList.first = newParticle;
            newParticle.prev = null;
            newParticle.next = null;
        }
        else {
            newParticle.next = particleList.first;
            particleList.first.prev = newParticle;
            particleList.first = newParticle;
            newParticle.prev = null;
        }

        //initialize
        newParticle.x = x0;
        newParticle.y = y0;
        newParticle.z = z0;
        newParticle.velX = vx0;
        newParticle.velY = vy0;
        newParticle.velZ = vz0;
        newParticle.age = 0;
        newParticle.dead = false;
        if (Math.random() < 0.5) {
            newParticle.right = true;
        }
        else {
            newParticle.right = false;
        }
        return newParticle;
    }

    function recycle(p) {
        //remove from particleList
        if (particleList.first == p) {
            if (p.next != null) {
                p.next.prev = null;
                particleList.first = p.next;
            }
            else {
                particleList.first = null;
            }
        }
        else {
            if (p.next == null) {
                p.prev.next = null;
            }
            else {
                p.prev.next = p.next;
                p.next.prev = p.prev;
            }
        }
        //add to recycle bin
        if (recycleBin.first == null) {
            recycleBin.first = p;
            p.prev = null;
            p.next = null;
        }
        else {
            p.next = recycleBin.first;
            recycleBin.first.prev = p;
            recycleBin.first = p;
            p.prev = null;
        }
    }
}
$(function() {
    $( "#slider-range" ).slider({
        animate:true,
        range:false,
        min: 0,
        max: 500,
        value:250,
        step:0.001,
        slide:function( event, ui ) {
            sphereRad = ui.value;
        },
    });
});
   /* setInterval(function () {
        var value = $('#slider-range').slider("value");
        var max = $('#slider-range').slider( "option", "max" );
        $("#slider-range").slider("value", (value + 1)% (max+1));
    }, 10);*/
$(function() {
    $( "#slider-zoom" ).slider({
        animate:true,
        orientation: "vertical",
        range:false,
        min: 0,
        max: 2,
        value:1,
        step:0.001,
        slide: function( event, ui ) {
                radius_sp = ui.value;
        }
    });
});
$(function() {
    $( "#slider-travel" ).slider({
        animate:true,
        range:false,
        min: 100,
        max: 300,
        value:200,
        step:0.001,
        slide:function( event, ui ) {
            fLen = ui.value;
        },
    });
});
/**********************************************************************************/

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

    $("#view_2D").click(function(){
        $(".hud_panel_nav").addClass("view2d_nav");
        $(".hud_panel_bottom").addClass("view2d_bottom");
        $leftside.stop().animate({left:"10%"},{duration:1000});
        $rightside.stop().animate({right:"10%"},{duration:1000});
        $(":root").css("perspective","6in");
        //$(":root").animate({perspective:"12in"},"slow");
        view_option=2;
    });
    $("#view_25D").click(function(){
        console.log("2.5D view");
        //$(".hud_container").animate({"perspective":"12in"},1000);
        //$(":root").animate({"perspective":"12in"},2000);
        //$(":root").css("perspective","10in");
        //$(":root").animate({"perspective":"1in"},1000).animate({"perspective":"12in"},1000).stop();
        $(".hud_panel_nav").removeClass("view2d_nav");
        $(".hud_panel_bottom").removeClass("view2d_bottom");
        $leftside.stop().animate({left:"4%"},{duration:1000});
        $rightside.stop().animate({right:"4%"},{duration:1000});
        $(":root").css("perspective","12in");
        //$("body").animate({perspective:"10in"},"slow");

        view_option=2.5;
    });
    $("#view_3D").click(function(){
        console.log("3D view");

        $(".hud_panel_nav").removeClass("view2d_nav");
        $(".hud_panel_bottom").removeClass("view2d_bottom");
        $leftside.stop().animate({left:"0%"},{duration:1000});
        $rightside.stop().animate({right:"0%"},{duration:1000});
        $(":root").css("perspective","16in");
        view_option=3;
    });

    if(view_option==2){
        //$(body).setTimeout($reset,1000);
        $this.css('transform', 'rotateX(' + 0 + 'deg) rotateY('+0 + 'deg)');

    };
    if(view_option==2.5){
        $this.css('transform', 'rotateX(' + 0 + 'deg) rotateY('+ roY + 'deg)');

    };
    if (view_option==3){
        $this.css('transform', 'rotateX(' + roX + 'deg) rotateY('+ roY + 'deg)');

    };

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var loaded = !1,
    ratio = 1,
    richFlag = !1,
    ajax = !1;
$(document).on({
}), $(function () {
    richFlag && ($(".hide").each(function (t, a) {
        var e = $(this),
            o = 2 * Math.random();
        e.css({
            "transition-delay": o + "s"
        })
    }), $(".hidechild").children().each(function (t, a) {
        var e = $(this),
            o = 2 * Math.random();
        e.css({
            "transition-delay": o + "s"
        })
    }));
    var t = 0,
        a = 0;
    setTimeout(function () {
        clearInterval(loaderInt), loaderInt = setInterval(function () {
        }, 30), $(".expand").addClass("on")
    }, 1200)
});
var loaderInt;
$.fn.pathReset = function (t) {
    var a = this;
    a.each(function (t) {
        var a = $(this),
            e = this,
            o = e.getTotalLength();
        a.css({
            "transition-delay": t / 20 + "s",
            "stroke-dashoffset": o,
            "stroke-dasharray": o
        })
    })
};
