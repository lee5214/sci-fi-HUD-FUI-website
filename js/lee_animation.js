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
$nav = $(".hud_panel_nav"),$compass = $(".hud_panel_compass"),
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
    tech.play();
    setInterval('updateClock()', 1000);
});
//loader
$(window).load(function(){
    $('#loading').fadeOut(00);
});
//panel reset
$reset = function(){
    //$(".mask").fadeOut(2000);
    $(".hud_panel").hide();
    $("#ai").hide();
    $(".logo").hide();
    $("#core_slider").hide().removeClass("shanshuo");
    $("#view_change").hide();
    $("#canvasOne").css({"transform":"translateZ(-100in)"});
    $l1.add($r1).add($l3).add($r3).removeClass("biankuang_1");
    //$(":root").css("perspective","'"+resp+"in'");

    //$(":root").animate({"perspective":"12in"},{"duration":1000});
    $(".logo").delay(000).show();
    $l2.add($r2).delay(500).show();
    $l1.add($r1).add($l3).add($r3).add($l2).add($r2).delay(2000).fadeIn().queue(function(next){
        $(this).addClass("panel_on");
        $(this).delay(4000).queue(function(next){
            $l1.add($r1).add($l3).add($r3).addClass("biankuang_1");
            scan_eng.play();
            //$r1.add($l3).addClass("biankuang_5");
            $l2.add($r2).addClass("biankuang_mid");
            next();
        })
        next();

    });
    $l1.add($r1).add($l3).add($r3).mouseenter(function(){
        scan_eng.play();
    })
    $("#dot_p2 .st1").fadeIn().css("fill","white").queue(function(next){
        $(this).addClass("shanshuo");
        next();
    });
    $("#dot_p1 .st0").delay(1000).fadeIn().css("fill","rgba(54, 207, 194, .8)").delay(444);
    $("#dot_p1 .st1").delay(4000).fadeIn(4000).css("fill","white").queue(function(next){
        $("#dot_p1").addClass("shanshuo_infinite");
        next();
    });//.addClass("shanshuo");
    $nav.add($compass).delay(2000).fadeIn();
    $(".hud_panel_ai").delay(000).fadeIn(2000);
    $("#ai").delay(3000).fadeIn(2000);
    $(".hud_panel_svg").delay(3000).fadeIn(2000);
    $(".core_mask").delay(4000).fadeOut(100).queue(function(next){
        $(".syscore").fadeIn();
        $("#canvasOne").css({"transform":"translateZ(-2in)"}).queue(function(next){
            magnet.play();
            next();
        });
        $("#core_slider").delay(4000).fadeIn(00).queue(function(next){
            $(this).addClass("shanshuo");
            beep3.play();
            $(".syscore").addClass("random_move");
            next();
        });
        $("#view_change").delay(1000).fadeIn(2000);
        $(".baseline1").delay(4000).animate({top:"10%"},{duration:1000});
        $(".baseline2").delay(4000).animate({bottom:"10%"},{duration:1000});
        next();
    });


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
    $l1.add($l2).add($l3).fadeToggle("fast");
    $leftside.delay(000).animate({left:"40%"},{duration:1400}).queue(function(next){
        $about.slideToggle().addClass("panel_on");
        $leftside.animate({left:"4%"},{duration:1000});
        scan1.play();
        next();
    });
});
$("button#project").click(function(){
    $r1.add($r2).add($r3).fadeToggle("slow");
    $rightside.delay(000).animate({right:"40%"},{duration:1400}).queue(function(next){
        $project.slideToggle().addClass("panel_on");
        $rightside.animate({right:"4%"},{duration:1000});
        scan1.play();
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
        $nav.addClass("view2d_nav");
        $compass.addClass("view2d_compass");
        $(".hud_panel_bottom").addClass("view2d_bottom");
        $leftside.stop().animate({left:"10%"},{duration:1000});
        $rightside.stop().animate({right:"10%"},{duration:1000});
        $(":root").css("perspective","8in");
        //$(":root").animate({perspective:"12in"},"slow");
        view_option=2;
    });
    $("#view_25D").click(function(){
        console.log("2.5D view");
        //$(".hud_container").animate({"perspective":"12in"},1000);
        //$(":root").animate({"perspective":"12in"},2000);
        //$(":root").css("perspective","10in");
        //$(":root").animate({"perspective":"1in"},1000).animate({"perspective":"12in"},1000).stop();
        $nav.removeClass("view2d_nav");
        $compass.removeClass("view2d_compass");
        $(".hud_panel_bottom").removeClass("view2d_bottom");
        $leftside.stop().animate({left:"4%"},{duration:1000});
        $rightside.stop().animate({right:"4%"},{duration:1000});
        $(":root").css("perspective","12in");
        //$("body").animate({perspective:"10in"},"slow");

        view_option=2.5;
    });
    $("#view_3D").click(function(){
        console.log("3D view");
        $nav.removeClass("view2d_nav");
        $compass.removeClass("view2d_compass");
        $(".hud_panel_bottom").removeClass("view2d_bottom");
        $leftside.stop().animate({left:"0%"},{duration:1000});
        $rightside.stop().animate({right:"0%"},{duration:1000});
        $(":root").css("perspective","12in");
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
/////////////////////////////////////////////////////////////////
//audio
var btn1 = $("#audio_zone audio")[0];
var beepbird = $("#audio_zone audio")[1];
var beep2 = $("#audio_zone audio")[2];
var scan1 = $("#audio_zone audio")[3];
var scan_eng = $("#audio_zone audio")[4];
var beep3 = $("#audio_zone audio")[5];
var tech = $("#audio_zone audio")[6];
var magnet = $("#audio_zone audio")[7];
$l1.add($r1).add($l3).add($r3).mouseenter(function() {
    //scan1.play();
});
$("#view_change button").mouseenter(function(){
    beepbird.play();
});
$(".hud_panel_nav button").mouseenter(function(){
    btn1.play();
});
$(".slider").mouseenter(function(){
    beep3.play();
});
//////////////////////////////////////////////////////////////////////////////////
var s = c.width = c.height = 400,
    ctx = c.getContext( '2d' ),

    opts = {
        globeRadius: 150,
        depth: 300,
        focalLength: 300,
        center: s / 2,

        rotYVel: .01,
        baseXRot: -0.41, // 23.5 deg
        afterYRot: -2,//Math.PI / 2,
    },

    rot = {
        y: {
            cos: Math.cos( opts.rotYVel ),
            sin: Math.sin( opts.rotYVel )
        },
        z: {
            cos: Math.cos( opts.baseXRot ),
            sin: Math.sin( opts.baseXRot )
        },
        ay: {
            cos: Math.cos( opts.afterYRot ),
            sin: Math.sin( opts.afterYRot )
        }
    };

function anim(){

    window.requestAnimationFrame( anim );

    ctx.fillStyle = 'black';
    ctx.fillRect( 0, 0, s, s );

    ctx.strokeStyle = 'white';

    ctx.beginPath();

    for( var i = 0; i < lines.length; ++i ){

        var points = lines[ i ];

        for( var j = 0; j < points.length; ++j ){

            var point = points[ j ],
                x = point.x,
                y = point.y,
                z = point.z;

            var X = x;
            x = x * rot.y.cos - z * rot.y.sin;
            z = z * rot.y.cos + X * rot.y.sin;

            point.x = x;
            point.z = z;

            var Y = y;
            y = y * rot.z.cos - x * rot.z.sin;
            x = x * rot.z.cos + Y * rot.z.sin;

            X = x;
            x = x * rot.ay.cos - z * rot.ay.sin;
            z = z * rot.ay.cos + X * rot.ay.sin;

            z += opts.depth;

            var scale = opts.focalLength / z,
                sx = opts.center + scale * x,
                sy = opts.center + scale * y;

            point.sx = sx;
            point.sy = sy;

            //if( z < opts.depth )
            ctx[ j === 0 ? 'moveTo' : 'lineTo' ]( sx, sy );
        }

        // to prevent it from recalculating position of starting point twice but still closing the path
        //if( points[ 0 ].z < opts.depth )
        ctx.lineTo( points[ 0 ].sx, points[ 0 ].sy );
    }

    ctx.stroke();

    //ctx.fillStyle = 'green';
    //ctx.fill();

};
function reparseLines(){

    // the lines will just have indications for angles

    for( var i = 0; i < lines.length; ++i ){

        var points = [];
        for( var j = 0; j < lines[ i ].length; j += 2 ){

            var sinA = Math.sin( lines[ i ][ j ] * Math.PI ),
                cosA = Math.cos( lines[ i ][ j ] * Math.PI ),
                sinB = Math.sin( lines[ i ][ j + 1 ] * Math.PI / 2 ),
                cosB = Math.cos( lines[ i ][ j + 1 ] * Math.PI / 2 );

            points.push({
                x: opts.globeRadius * cosA * cosB,
                y: opts.globeRadius * sinB,
                z: opts.globeRadius * sinA * cosB
            });
        }

        lines[ i ] = points;
    }
}

// each point is 2 angles in half turns
// a, x[-1,1] = vertical circle
// x[-1,1], .5 = equator
// x[-1,1], a = parallel cirles at a
var lines = [
    // africa main continent
    [
        -.04, -.05,
        .01, -.05,
        .02, -.07,
        .06, -.03,
        .05, .03,
        .08, .12,
        .06, .18,
        .08, .25,
        .10, .35,
        .10, .39,
        .15, .37,
        .18, .33,
        .17, .28,
        .19, .28,
        .19, .23,
        .22, .19,
        .22, .06,
        .27, -.033,
        .29, -.15,
        .23, -.13,
        .175, -.33,
        .12, -.36,
        .1, -.32,
        .06, -.36,
        .06, -.405,
        .01, -.39,
        -.03, -.38,
        -.05, -.35,
        -.08, -.28,
        -.08, -.205,
        -.088, -.15,
    ],
    // madagascar
    [0.245, 0.192, 0.245, 0.233, 0.241, 0.267, 0.249, 0.3, 0.266, 0.275, 0.287, 0.175, 0.274, 0.142],
    // antarctica
    [-0.984, 0.892, -0.918, 0.875, -0.748, 0.825, -0.662, 0.817, -0.559, 0.842, -0.559, 0.792, -0.46, 0.825, -0.402, 0.825, -0.414, 0.775, -0.311, 0.692, -0.328, 0.75, -0.324, 0.808, -0.34, 0.825, -0.233, 0.883, -0.023, 0.783, 0.196, 0.783, 0.237, 0.75, 0.254, 0.758, 0.287, 0.725, 0.414, 0.767, 0.464, 0.733, 0.48, 0.733, 0.489, 0.783, 0.505, 0.717, 0.551, 0.725, 0.6, 0.742, 0.625, 0.717, 0.645, 0.758, 0.72, 0.758, 0.79, 0.742, 0.934, 0.783, 0.909, 0.833, 0.922, 0.867],
    // south america
    [-0.427, -0.067, -0.39, -0.142, -0.373, -0.108, -0.373, -0.083, -0.332, -0.125, -0.291, -0.067, -0.282, -0.008, -0.188, 0.075, -0.192, 0.108, -0.212, 0.133, -0.208, 0.217, -0.229, 0.258, -0.254, 0.258, -0.262, 0.283, -0.262, 0.333, -0.287, 0.383, -0.303, 0.383, -0.303, 0.425, -0.336, 0.433, -0.348, 0.458, -0.344, 0.475, -0.369, 0.5, -0.361, 0.525, -0.373, 0.55, -0.357, 0.6, -0.394, 0.6, -0.402, 0.542, -0.394, 0.492, -0.41, 0.433, -0.394, 0.392, -0.406, 0.35, -0.39, 0.308, -0.39, 0.25, -0.381, 0.225, -0.419, 0.15, -0.419, 0.1, -0.456, 0.058, -0.435, 0.025, -0.435, -0.008, -0.427, -0.008, -0.427, -0.058],
    // that south american island in the south
    [-0.336, 0.575, -0.307, 0.575, -0.311, 0.6, -0.328, 0.6],
    // north 'murica
    [-0.435, -0.067, -0.456, -0.075, -0.493, -0.15, -0.505, -0.15, -0.526, -0.192, -0.571, -0.192, -0.629, -0.358, -0.604, -0.258, -0.641, -0.308, -0.641, -0.333, -0.687, -0.45, -0.674, -0.533, -0.707, -0.6, -0.72, -0.575, -0.736, -0.617, -0.814, -0.692, -0.847, -0.625, -0.889, -0.608, -0.893, -0.658, -0.905, -0.675, -0.905, -0.717, -0.88, -0.733, -0.909, -0.742, -0.946, -0.742, -0.975, -0.775, -0.955, -0.792, -0.926, -0.758, -0.893, -0.792, -0.703, -0.792, -0.654, -0.808, -0.621, -0.75, -0.522, -0.758, -0.497, -0.792, -0.456, -0.775, -0.39, -0.725, -0.472, -0.75, -0.431, -0.708, -0.476, -0.708, -0.513, -0.667, -0.456, -0.625, -0.435, -0.55, -0.435, -0.617, -0.414, -0.617, -0.435, -0.7, -0.406, -0.7, -0.377, -0.642, -0.353, -0.675, -0.307, -0.592, -0.307, -0.558, -0.373, -0.567, -0.291, -0.55, -0.282, -0.525, -0.344, -0.492, -0.353, -0.517, -0.402, -0.45, -0.419, -0.392, -0.435, -0.35, -0.427, -0.275, -0.447, -0.283, -0.472, -0.333, -0.48, -0.325, -0.526, -0.325, -0.53, -0.233, -0.493, -0.2, -0.485, -0.225, -0.468, -0.225, -0.48, -0.2, -0.468, -0.167, -0.452, -0.167, -0.452, -0.108],
    // cuba
    [-0.464, -0.242, -0.443, -0.25, -0.41, -0.233, -0.414, -0.2, -0.435, -0.242],
    // greenland
    [-0.373, -0.883, -0.365, -0.833, -0.32, -0.85, -0.282, -0.783, -0.295, -0.758, -0.262, -0.667, -0.229, -0.667, -0.229, -0.708, -0.208, -0.742, -0.163, -0.767, -0.113, -0.8, -0.105, -0.825, -0.093, -0.883, -0.064, -0.917, -0.13, -0.917, -0.204, -0.942, -0.282, -0.917, -0.353, -0.917],
    // iceland
    [-0.134, -0.742, -0.093, -0.733, -0.08, -0.7, -0.089, -0.683, -0.118, -0.683, -0.13, -0.708],
    // eurasia
    [-0.006, -0.492, -0.043, -0.475, -0.047, -0.408, -0.035, -0.408, -0.023, -0.4, -0.006, -0.425, 0.014, -0.458, 0.014, -0.475, 0.052, -0.483, 0.072, -0.458, 0.093, -0.442, 0.093, -0.417, 0.101, -0.425, 0.105, -0.425, 0.085, -0.467, 0.072, -0.492, 0.072, -0.5, 0.08, -0.5, 0.113, -0.458, 0.113, -0.442, 0.126, -0.4, 0.134, -0.433, 0.134, -0.45, 0.155, -0.45, 0.159, -0.4, 0.171, -0.4, 0.184, -0.417, 0.188, -0.375, 0.2, -0.408, 0.204, -0.4, 0.2, -0.367, 0.188, -0.342, 0.221, -0.225, 0.241, -0.183, 0.237, -0.15, 0.266, -0.158, 0.311, -0.2, 0.332, -0.242, 0.311, -0.275, 0.299, -0.258, 0.278, -0.308, 0.278, -0.325, 0.299, -0.292, 0.32, -0.292, 0.324, -0.275, 0.369, -0.283, 0.39, -0.225, 0.41, -0.25, 0.41, -0.2, 0.427, -0.083, 0.443, -0.117, 0.443, -0.167, 0.48, -0.225, 0.505, -0.242, 0.526, -0.15, 0.538, -0.175, 0.542, -0.108, 0.567, -0.15, 0.592, -0.1, 0.608, -0.117, 0.608, -0.175, 0.584, -0.192, 0.596, -0.233, 0.604, -0.192, 0.621, -0.233, 0.654, -0.267, 0.678, -0.342, 0.666, -0.392, 0.678, -0.442, 0.695, -0.4, 0.724, -0.425, 0.711, -0.442, 0.724, -0.475, 0.748, -0.475, 0.773, -0.542, 0.753, -0.617, 0.781, -0.65, 0.847, -0.667, 0.864, -0.692, 0.885, -0.692, 0.864, -0.633, 0.864, -0.55, 0.897, -0.608, 0.901, -0.65, 0.897, -0.683, 0.951, -0.683, 0.984, -0.708, 0.975, -0.733, 0.988, -0.783, 0.897, -0.783, 0.885, -0.783, 0.827, -0.783, 0.794, -0.817, 0.753, -0.792, 0.728, -0.8, 0.707, -0.825, 0.67, -0.8, 0.592, -0.792, 0.633, -0.85, 0.592, -0.85, 0.534, -0.917, 0.509, -0.883, 0.551, -0.867, 0.464, -0.833, 0.439, -0.817, 0.406, -0.8, 0.369, -0.783, 0.398, -0.792, 0.402, -0.75, 0.39, -0.75, 0.332, -0.783, 0.32, -0.8, 0.39, -0.858, 0.315, -0.867, 0.291, -0.808, 0.328, -0.775, 0.266, -0.75, 0.237, -0.733, 0.208, -0.692, 0.188, -0.733, 0.221, -0.733, 0.212, -0.767, 0.192, -0.767, 0.151, -0.808, 0.093, -0.767, 0.068, -0.708, 0.035, -0.708, 0.035, -0.65, 0.06, -0.65, 0.072, -0.633, 0.093, -0.633, 0.105, -0.692, 0.134, -0.725, 0.122, -0.683, 0.159, -0.675, 0.126, -0.65, 0.109, -0.583, 0.064, -0.6, 0.064, -0.642, 0.047, -0.642, 0.052, -0.6, 0.023, -0.567, -0.019, -0.567],
    // japan
    [0.72, -0.383, 0.769, -0.408, 0.777, -0.467, 0.786, -0.517, 0.777, -0.567, 0.798, -0.583, 0.786, -0.542, 0.81, -0.458, 0.786, -0.458, 0.786, -0.408, 0.748, -0.358, 0.736, -0.358, 0.724, -0.325],
    // ailarts'
    [0.781, 0.2, 0.753, 0.183, 0.757, 0.142, 0.736, 0.142, 0.715, 0.183, 0.707, 0.158, 0.687, 0.2, 0.637, 0.25, 0.625, 0.308, 0.641, 0.35, 0.637, 0.4, 0.67, 0.383, 0.687, 0.375, 0.728, 0.342, 0.753, 0.392, 0.765, 0.367, 0.777, 0.417, 0.806, 0.425, 0.827, 0.425, 0.847, 0.317, 0.806, 0.2, 0.802, 0.158, 0.786, 0.133],
    // philippines, papua new guinea and other islands
    [0.555, -0.075, 0.571, -0.05, 0.571, 0, 0.596, 0.025, 0.596, 0.058, 0.645, 0.092, 0.703, 0.092, 0.592, 0.092, 0.555, 0.025, 0.555, -0.008, 0.53, -0.05, 0.559, -0.033],
    [0.649, -0.067, 0.654, -0.033, 0.662, -0.017, 0.645, 0.05, 0.625, 0.033, 0.604, -0.008, 0.645, -0.067],
    [0.67, -0.2, 0.658, -0.175, 0.666, -0.125, 0.649, -0.083, 0.678, -0.117, 0.678, -0.083, 0.695, -0.05, 0.695, -0.117, 0.678, -0.158],
    [0.695, 0.05, 0.724, 0.042, 0.753, 0.05, 0.761, 0.092, 0.781, 0.092, 0.81, 0.092, 0.831, 0.125, 0.814, 0.083, 0.843, 0.025, 0.81, 0.058, 0.773, 0.025, 0.748, 0.042],
    [0.81, 0.467, 0.802, 0.483, 0.814, 0.517, 0.827, 0.475],
    [0.951, 0.4, 0.963, 0.45, 0.922, 0.5, 0.942, 0.533, 0.942, 0.5, 0.959, 0.492, 0.979, 0.433],
    [0.909, 0.242, 0.926, 0.267],
    [0.975, 0.192, 0.992, 0.208],
    [0.06, -0.875, 0.101, -0.842, 0.134, -0.842, 0.155, -0.9],
    // "great" britain
    [-0.019, -0.65, 0.002, -0.608, -0.014, -0.608, -0.039, -0.633],
    [-0.043, -0.583, -0.043, -0.575, -0.023, -0.567],
    // isle of the easter heads
    [-0.86, -0.208, -0.847, -0.183]
];

// debugging purposes
/* var deCanvas = document.createElement( 'canvas' ),
 deCtx = deCanvas.getContext( '2d' ),

 deW = deCanvas.width = 485,
 deH = deCanvas.height = 240;

 deCanvas.className =  'debug-canvas';

 document.body.appendChild( deCanvas );

 deCtx.strokeStyle = 'green';
 deCtx.lineWidth = 3;
 deCtx.beginPath();

 for( var i = 0; i < lines.length; ++i ){

 for( var j = 0; j < lines[ i ].length; j += 2 ){

 var x = deW / 2 * ( 1 + lines[ i ][ j ] ),
 y = deH / 2 * ( 1 + lines[ i ][ j + 1 ] );

 deCtx[ j === 0 ? 'moveTo' : 'lineTo' ]( x, y );
 }

 var x = deW / 2 * ( 1 + lines[ i ][ 0 ] ),
 y = deH / 2 * ( 1 + lines[ i ][ 1 ] );

 //deCtx.lineTo( x, y );
 }

 deCtx.stroke();

 var clicks = []

 deCanvas.addEventListener( 'click', function( e ){
 var rect = deCanvas.getBoundingClientRect();

 clicks.push( parseFloat( ( ( e.clientX - rect.left ) / deW * 2 - 1 ).toFixed(3) ), parseFloat( ( ( e.clientY - rect.top ) / deH * 2 - 1 ).toFixed(3) ) );

 console.clear();
 console.log( clicks );
 }) */

reparseLines();
anim();