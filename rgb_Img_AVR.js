
let canvas, ctx, rgbButton;
document.addEventListener('DOMContentLoaded',(ev)=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = "400";
    canvas.height = "400";

    //This is used to load the Image that will be used in the canvas
    let image = new Image();

    image.onload = function(){
        let w = canvas.width; // 600
        let nw = image.naturalWidth;
        let nh = image.naturalHeight;
        let aspect = nw / nh ;  
        let h = w / aspect; // calculates height of canvas 
        canvas.height = h;
        ctx.drawImage(image,0,0,w,h); // (image file, starting point, end point, canvas with , canvas height)
    };

    image.src = '/Image/041_0069.jpg'; // Displays the image
   

rgbButton.addEventListener("onclick", avgColor);
   



});
//const avgColor = (ev)
function avgColor(){
    imageData = ctx.getImageData(0,0,canvas.width , canvas.height); // Get the data of the image 
    let imgArray = imageData.data; // store image data

    
    length = imageData.data.length; // Get the length of image data object
                // Define variables for storing
                // the individual red, blue and
                // green colors
                rgb = { r: 0, g: 0, b: 0 },
  
                // Define variable for the 
                // total number of colors
                count = 0;

    for (var i = 0; i < length; i += 4) {
  
        // Sum all values of red colour
        rgb.r += imageData.data[i];

        // Sum all values of green colour
        rgb.g += imageData.data[i + 1];

        // Sum all values of blue colour
        rgb.b += imageData.data[i + 2];

        // Increment the total number of
        // values of rgb colours
        count++;
    }
            // Find the average of red
            rgb.r
                = Math.floor(rgb.r / count);
  
            // Find the average of green
            rgb.g
                = Math.floor(rgb.g / count);
  
            // Find the average of blue
            rgb.b
                = Math.floor(rgb.b / count);

               
  
            return document.getElementById("h1Result").innerHTML = "rgb( r: " + rgb.r + " g: " + rgb.g + " b: " + rgb.b + ")";



}  