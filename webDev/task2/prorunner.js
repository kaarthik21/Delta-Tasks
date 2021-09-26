function func(){
var height = 0;
$(document).keydown(function(e){
    height = height + 1;
    switch (e.which){
        case 32:    //space bar key, 40 for down key
            if (height % 2 == 0){
                $(".box").finish().animate({
                    top: "-=250"
                });
            }
            else if (height % 2 != 0){
                $(".box").finish().animate({
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



var box = document.getElementsByClassName("box");
var obstacle_up = document.getElementById("obstacle_up");
collision();
function collision(box, obstacle_up) {
        

    
}





