var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);        
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
    });

    }

    function new_update(get_image){
        fabric.Image.fromURL(get_image,function(Img){
    block_img_object=Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_img_object);
        });
    
        }
window.addEventListener("keydown",my_keydown);
 
function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=='80'){
        console.log("p&shift pressTogether");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;  

    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("m&shift pressTogether");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keyPressed=='87'){
        new_update('Brick.jpg');
        console.log("w");
    }
    if(keyPressed=='71'){
        new_update('ground.png')
        console.log("g");
    }
    
if(keyPressed=='76'){
    new_update('light_green.png')
    console.log("l");
}

if(keyPressed=='84'){
    new_update('Oak_planks.jpg')
    console.log("t");
}

if(keyPressed=='82'){
    new_update('netherack.jpg')
    console.log("r");
}

if(keyPressed=='89'){
    new_update('Limestone.png')
    console.log("y");
}

if(keyPressed=='68'){
    new_update('dark_green.png')
    console.log("d");
}

if(keyPressed=='85'){
    new_update('Glowstone.png')
    console.log("u");
}

if(keyPressed=='67'){
    new_update('stone.jpg')
    console.log("c");
}


if(keyPressed=='38'){
up();
console.log("up") ;
}

if(keyPressed=='40'){
    down();
        console.log("down");
}

if(keyPressed=='39'){
    right();
    console.log("right");
}

if(keyPressed=='37'){
    left();
    console.log("left");
}

}

function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        player_update();
        console.log("block_img_height="+block_img_height);
        console.log("when up arrow key is pressed,x="+player_x+",y="+player_y);
    }
    
}

function down(){
    if (player_y<=500){
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        player_update();
        console.log("block_img_height="+block_img_height);
        console.log("when down arrow is pressed,x="+player_x+",y="+player_y);
    }


}
function left(){
    if (player_x > 0){
        player_x = player_x-block_img_width;
        canvas.remove(player_object);
        player_update();
            console.log("block_img_width="+block_img_width);
            console.log("when left arrow is pressed,x="+player_x+",y="+player_y);
    }
}

function right(){
    if (player_x < 850){
        player_x = player_x + block_img_width;
        canvas.remove(player_object);
        player_update();
            console.log("block_img_width="+block_img_width);
            console.log("when left arrow is pressed,x="+player_x+",y="+player_y);
    }
}