// * Contains the logic behind patuti's movement
// *    Movement Details
// *    0-left 
// *    1-right
// *    2-up
// *    3-dock

let curPos = 0;
let curSp = 0;
let arrow = { left: 37, up: 38, right: 39, down: 40 };
let isActItRunning = false;

let moves = [
    [
        "images/patuti/idle-1.png",
        "images/patuti/idle-2.png"
    ],
    [
        "images/patuti/left-1.png",
        "images/patuti/left-2.png",
        "images/patuti/left-3.png",
        "images/patuti/left-4.png",
        "images/patuti/left-5.png"
    ],
    [   
        "images/patuti/right-1.png",
        "images/patuti/right-2.png",
        "images/patuti/right-3.png",
        "images/patuti/right-4.png",
        "images/patuti/right-5.png"
    ],
    [
        "images/patuti/jump-1.png", 
        "images/patuti/jump-2.png", 
        "images/patuti/jump-3.png", 
        "images/patuti/jump-4.png", 
        "images/patuti/jump-5.png", 
        "images/patuti/jump-6.png", 
        "images/patuti/jump-7.png" 
    ],
    [
        "images/patuti/dock-4.png", 
        "images/patuti/dock-4.png", 
        "images/patuti/dock-4.png", 
        "images/patuti/dock-4.png",
        "images/patuti/dock-4.png",
    ],
];

// * example function given by Sir Busico,
// * added dock and jump functionality, and revisions
function actIt(){
    patuti.attr("src",moves[curPos][curSp])
    curSp = (curSp + 1) % moves[curPos].length;
    if(curPos==1){
        isActItRunning = true;
        if(curSp > 2){
            const result = check_if_patuti_position_exceeds_area(patuti.position().left);
            if (result === false)
                patuti.css("left",(patuti.position().left - patuti_speed)+"px");
        }
        if(curSp==0){curPos=0; curSp=1;}
        isActItRunning = false;
    }
    if(curPos==2){
        isActItRunning = true;
        if(curSp > 2){
            // * position.left() return the position of its leftmost part of the object
            // * for this reason, I've add the patuti width so that to get the rightmost position of patuti
            const result = check_if_patuti_position_exceeds_area(patuti.position().left + patuti.width());
            if (result === false)
                patuti.css("left",(patuti.position().left + patuti_speed)+"px");
        }
        if(curSp==0){curPos=0; curSp=1;}
        isActItRunning = false;
    }
    if(curPos==3){
        isActItRunning = true;
        if(curSp > 2)
            patuti.css("top",(patuti.position().top - patuti_jump_height)+"px");
        if(curSp==0){
            // * add small delay when patuti is at top during jump
            // * just to give enough time for the bullet to pass through
            setTimeout(function() {
                curPos=0; curSp=1;
                patuti.css("top", '');
                patuti.css("bottom","0px");
                isActItRunning = false;
            }, 100);
        }
    }
    if(curPos==4){
        isActItRunning = true;
        if(curSp==0){
            curPos=0; curSp=1;
        }
        isActItRunning = false;
    }
}

function moveIt(i){
    curPos = i+1;
    curSp = 0;
}

$(document).ready(function(){
    setInterval("actIt()",100);
    $("body").keydown(function (e) {
        switch (e.which) {
            case arrow.left:
                if(!isActItRunning)
                    moveIt(0);
            break;
            case arrow.right:
                if(!isActItRunning)
                    moveIt(1);
            break;
            case arrow.up:

                if(!isActItRunning)
                    moveIt(2); 
            break;
            case arrow.down:
                if(!isActItRunning)
                    moveIt(3);
            break;
        }
    });
})