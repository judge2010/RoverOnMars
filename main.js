mars_pics=["mars.jpg","Mars 2.jpg","Mars 3.jpg"];
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
rover_x = 400;
rover_y = 250;
random_number = Math.floor(Math.random()* 3);
background_img = mars_pics[random_number];
rover_img = "rover.png";
function add(){
background_imgtag=new Image()
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_img;
rover_imgtag=new Image()
rover_imgtag.onload=uploadRover;
rover_imgtag.src=rover_img;
}
function uploadBackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
    function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_height,rover_width);
    }
    window.addEventListener("keydown",myKeyDown);
    function myKeyDown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed=="38"){
    console.log("up");
    up();
}
if (keyPressed=="40"){
    console.log("down");
    down();
}
if (keyPressed=="37"){
    console.log("left");
    left();
}
if (keyPressed=="39"){
    console.log("right");
    right();
}
    }
    function up(){
        if (rover_y > 0){
            rover_y=rover_y - 13;
            uploadBackground();
            uploadRover();
        }
    }
    function down(){
        if(rover_y < 350){
            rover_y=rover_y + 13;
            uploadBackground();
            uploadRover();
        }
    }
    function right(){
        if (rover_x < 700){
            rover_x=rover_x + 13;
            uploadBackground();
            uploadRover();
        }
    }
    function left(){
        if (rover_x > 0){
            rover_x=rover_x - 13;
            uploadBackground();
            uploadRover();
        } 
    }
