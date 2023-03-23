var canvas = new fabric.Canvas('myCanvas');

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;
                         
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:block_y,
    left:block_x
    });
    });
}

if(keyPressed == '82')
    {
        new_image('rr1.png');
        console.log("r");
    }

if(keyPressed == '71')
    {
        new_image('gr.png');
        console.log("g");
    }

if(keyPressed == '89')
    {
        new_image('yr.png');
        console.log("y");
    }

if(keyPressed == '80')
    {
        new_image('pr.png');
        console.log("p");
    }

if(keyPressed == '66')
    {
        new_image('br.png');
        console.log("b");
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
}
    
    function up()
{
    if(block_image_height_y >=0)
    {
        block_image_object = block_image_object - block_image_height
        console.log("block image height" + block_image_height);
        console.log("When Up arrow key is pressed, X =" + player_x + ", Y = " + player_y)
        canvas.remove(block_image_object);
    }
}

function down()
{
    if(block_image_height <=500)
    {
        block_image_object = block_image_object + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When down arrow key pressed, X =" + player_x + "Y = " + player_y)
        canvas.remove(block_image_object);
    }
}

function left()
{
    if(block_image_width >0)
    {
        block_image_object = block_image_object - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow key is pressed,, X=" + player_x + ", Y ="+ player_y)
        canvas.remove(block_image_object);
    }
}

function right()
{
    if(block_image_width <= 850)
    {
        block_image_object = block_image_object + block_image_width
        console.log("block image width" + block_image_width);
        console.log("When right srrow key is pressed, X =" + player_x + ", Y = " +player_y);
        canvas.remove(block_image_object);
    }
}