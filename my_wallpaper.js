//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(106, 202, 204); //light honeydew green colour
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

 noStroke()
  //tail
let tailSize = 50;
fill(186, 157, 199)
ellipse(110,165,tailSize,tailSize)

//flipper 1
fill(161, 135, 173)
push()
rotate(10)
ellipse(95,90,20,40)
pop()

//body
fill(186, 157, 199)
push()
rotate(-10)
ellipse(100,110,80,130)
pop()

//mouth
fill(161, 135, 173)
ellipse(94,70,45,35)

//eyes
let eyeSize = 9;
fill(255, 255, 240+eyeSize)
ellipse(95,45,eyeSize,eyeSize)
ellipse(110,45,eyeSize,eyeSize)
fill(0, 0, 0)
ellipse(93.5,45,6,6)
ellipse(108.5,45,6,6)

//eyelids
// fill(143, 161, 189)
// ellipse(104,41,32,5)

//fishes
let fish1 = 40;

if(fish1 < 100){
  fill(44, 163, 62)
}
else{
  fill(226, 232, 58)

}
let fishSize = 15;
triangle(fish1, 160, 
    fish1-18, 150, 
    fish1-18, 170);
ellipse(fish1+5,160,20,fishSize)
triangle(fish1+10, 160,
  fish1, 160,
  fish1-5, 172);
fill(255,255,255)
ellipse(fish1+8,160,5,5)
fill(0,0,0)
ellipse(fish1+9,160,3,3)


fill(225, 237, 114)
triangle(160, 30, 
    180, 20, 
    180, 40);
ellipse(156,30,20,fishSize)
triangle(150, 30,
  160, 30,
  165, 42);
fill(255,255,255)
ellipse(152,30,5,5)
fill(0,0,0)
ellipse(151,30,3,3)

//flipper 2
fill(161, 135, 173)
ellipse(122,105,20,40)

//nostrils
let noseSize = 4;
fill(121, 103, 130)
ellipse(82,65,noseSize,noseSize)
ellipse(102,65,noseSize,noseSize)

//mouth
stroke(0)
noFill()
arc(92,65,30,30, 40, 140)

//bubbles
fill(212, 242, 250)
stroke(255,255,255)
ellipse(55,55,10,10)
ellipse(60,35,5,5)
ellipse(40,20,5,5)
ellipse(40,40,7,7)
ellipse(55,10,7,7)

//fish bubbles
fill(212, 242, 250)
stroke(255,255,255)
ellipse(155,10,4,4)
ellipse(145,18,2,2)
ellipse(60,135,3,3)
ellipse(55,146,4,4)
ellipse(53,125,3.5,3.5)

//   ellipse(0,0, 10,10)
// rotate(-10)


//   fill(188, 217, 46)
//   noStroke()
//   ellipse(130,100,100,70)
  
//   triangle(100, 100, 
//     20, 65, 
//     20, 135);
  
  
//   fill(255, 255, 255)
//   ellipse(160, 90, 15, 15)
//   ellipse(140, 90, 15, 15)
  
//   fill(0, 0, 0)
//   ellipse(162, 92, 10, 10)
//   ellipse(142, 92, 10, 10)
  
//   stroke(0)
//   noFill()
//   arc(150,105,30,30, 40, 140)
  
  
}
