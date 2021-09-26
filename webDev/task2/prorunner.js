function func(){
var height = 0;
$(document).keydown(function(e){
    height = height + 1;
    switch (e.which){
        case 32:    //space bar key, 40 for down key
            if (height % 2 == 0){
                $("#box").finish().animate({
                    top: "-=250"
                });
            }
            else if (height % 2 != 0){
                $("#box").finish().animate({
                    top: "+=250"
                });

            }
        break;
    }
});
}

function move_obstacle() {

    let id = null;
    var x;
    x = Math.round(Math.random())
    
    if (x == 0){
        const move = document.getElementById("obstacle_up");   
        let pos = 0;
        document.getElementById("obstacle_up").animate([
            // keyframes
            { transform: 'translateX(0px)' }, //1300 //600px
            { transform: 'translateX(-600px)' }], //0px //-600
            {
            // timing options
            duration: 900,//1100
            // iterations: Infinity
          });
    }


    else if (x == 1){
        const move = document.getElementById("obstacle_down");   
        let pos = 0;

        document.getElementById("obstacle_down").animate([
            // keyframes
            { transform: 'translateX(0px)' }, //1300 //600px
            { transform: 'translateX(-600px)' } //0px //-600
          ], {
            // timing options
            duration: 1000,//1300
            //iterations: Infinity
          });
    }

}



setInterval(function() {

    var a = $('#box').position();
    var a_top = a.top;
    var b = $('#obstacle_up').position();
    var b_left = b.left;
    var b_top = b.top;
    var c = $('#obstacle_down').position();
    var c_left = c.left;
    var c_top = c.top;
    if (a_top >= 161 && a_top < 162.5 && b_top === 100 && b_left >= 146 && b_left <= 155){
        alert("Game over!");
        location.reload();
    }
    else if (c_top === 435 && c_left >= 146 && c_left <= 155){
        alert("Game over!");
        location.reload();
    }
    
}, 1);


//hitTest(a, b);
function hitTest(a, b){
    var aPos = a.offset();
    var bPos = b.position();

    var aLeft = aPos.left;
    var aRight = aPos.left + a.width();
    var aTop = aPos.top;
    var aBottom = aPos.top + a.height();

    var bLeft = bPos.left;
    var bRight = bPos.left + b.width();
    var bTop = bPos.top;
    var bBottom = bPos.top + b.height();

    return !( bLeft > aRight
        || bRight < aLeft
        || bTop > aBottom
        || bBottom < aTop
        );
}




