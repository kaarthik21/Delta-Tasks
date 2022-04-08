var timeElapsed = 0;
var myTimer = 0;
let Score = 0;

function func(){
//Timer
myTimer = setInterval(function(){
    timeElapsed += 1;
    document.getElementById("time").innerText = timeElapsed;
}, 1000) ;
    

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
            { transform: 'translateX(-500px)' }, //1300 //600px
            { transform: 'translateX(-1200px)' }], //0px //-600 
            {
            // timing options
            duration: 1000,//900
            // iterations: Infinity
          });
    }


    else if (x == 1){
        const move = document.getElementById("obstacle_down");   
        let pos = 0;

        document.getElementById("obstacle_down").animate([
            // keyframes
            { transform: 'translateX(-500px)' }, //1300 //600px
            { transform: 'translateX(-1200px)' } //0px //-600
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
    if (a_top >= 161 && a_top < 165 && b_top === 100 && b_left >= 100 && b_left <= 150 ){
        Score = Math.sqrt(timeElapsed).toPrecision(2)*50;
        alert("Game over!\nYour score is " + Score);
        location.reload();
    }
    else if (a_top >= 410 && a_top <= 415 && c_top === 435 && c_left >= 100 && c_left <= 150){//146, 155
        Score = Math.sqrt(timeElapsed).toPrecision(2)*50;
        alert("Game over!\nYour score is " + Score);
        location.reload();
    }
}, 1);
