
let canvas;
let canvasWidth;
let canvasHeight;

//Video Arrays
let GreenVid = [];
let RedVid = [];
let YellowVid = [];

//loading Landscapes
let grass = [];
let wheat = [];
let desert = [];
let ocean = [];
let city = [];
let snow = [];
let glacier = [];
let river = [];

//loadingObjects
let bird = [];
let butter = [];
let fish = [];
let planet = [];

//icons
let infoImg;
let saveImg;
let resetImg;
let infoImgRed;
let saveImgRed;
let resetImgRed;
let logo;

//font variable
let font;

//time for question
let TIME = 0;
let TIMEOUT = 170;
let timeRandom;

//questionPart Variables
let QuestionDone = false;
let s1 = true;
let begin = false;
let no = 0;

//object and video
let videoRandom;
let object;
let imageChoice;
let Ran;
let choice;
let objectChoice;
let objectChoiceShow;
let maxAffect;
let maxAffect1;
let max1;
let max0;

//question answers
//let maxAffect = 0;
let AffectArray = [];
let objectDuplicate = 0;
let objectDuplicate2 = 0;

let vidmaxAffect1 = 0;
let vidmaxAffect2 = 0;
let objmaxAffect1 = 0;
let objmaxAffect2 = 0;
let objmaxAffect3 = 0;


//object co ordinates
let objectX;
let objectY;

//mouseCondition and mouseStage
let mouseStage;
let mouseCondition;
let ReturnLeft;
let ReturnRight;

let scaleNo;
let SizeSmall;

let isPlaying;

let barTime = 0;

let mouseIcon1;
let mouseIcon2;
let mouseIcon3;

let mouseIcon1return = false;
let mouseIcon2return = false;
let mouseIcon3return = false;


let infoSwitch = false;
let saveSwitch = false;

let barIntro = 0;
let infoIntro = 0;

let start = true;
let VideoSwitch = true;

let randomQuestion; 

function preload(){
  font = loadFont('FetishRegular.ttf');

  //loading Landscapes
  for(let i = 0; i < 7; i++){
       grass[i] = loadImage("Landscapes/grass"+i+".png");
       wheat[i] = loadImage("Landscapes/wheat"+i+".png");
       desert[i] = loadImage("Landscapes/desert"+i+".png");
       ocean[i] = loadImage("Landscapes/ocean"+i+".png");
       city[i] = loadImage("Landscapes/city"+i+".png");
       snow[i] = loadImage("Landscapes/snow"+i+".png");
       glacier[i] = loadImage("Landscapes/glacier"+i+".png");
       river[i] = loadImage("Landscapes/river"+i+".png");
    }

  //loading Objects
  for(let i = 0; i < 12; i++){
      bird[i] = loadImage("Objects/bird"+i+".png");
      butter[i] = loadImage("Objects/butterfly"+i+".png");
      fish[i] = loadImage("Objects/fish"+i+".png");    
      planet[i] = loadImage("Objects/planet"+i+".png");
    }

    //icons
    infoImg = loadImage("Icons/info.png");
    saveImg = loadImage("Icons/save.png");
    resetImg = loadImage("Icons/reset.png");
    infoImgRed = loadImage("Icons/infoRed.png");
    saveImgRed = loadImage("Icons/saveRed.png");
    resetImgRed = loadImage("Icons/resetRed.png");

    logo = loadImage("Icons/logo.png");

    loadVideos();
}

function setup(){

 if((windowHeight >= 1080)&&(windowWidth >= 1920)){ //original
    canvasWidth = 1920;
    canvasHeight = 1080;

    scaleNo = 1;
    SizeSmall = false;
  }

  if((windowHeight >= 720)&&(windowWidth >= 1280)   &&   ((windowHeight < 1080)||(windowWidth < 1920))){ //1280x720
    canvasWidth = 1280;
    canvasHeight = 720;

    scaleNo = 720/1080;
    SizeSmall = false;
  }

  if((windowHeight >= 576)&&(windowWidth >= 1024)   &&   ((windowHeight < 720)||(windowWidth < 1280))){ //1280x720
    canvasWidth = 1024;
    canvasHeight = 576;

    scaleNo = 576/1080;
    SizeSmall = false;
  }

  if((windowHeight >= 360)&&(windowWidth >= 640)   &&   ((windowHeight < 576)||(windowWidth < 1024))){ //1280x720
    canvasWidth = 640;
    canvasHeight = 360;

    scaleNo = 360/1080;
    SizeSmall = false;
  }

  canvas = createCanvas(canvasWidth, canvasHeight);

  if((windowHeight < 360) ||(windowWidth < 640)){ //1280x720
    canvas = createCanvas(500, 300);
    SizeSmall = true;
    scaleNo = 1;
  }

  textFont(font);
  textSize(20);
  noStroke();

    let link = createA("index.html", "Home"); 
      
    // Posotion the anchor objects 
    link.position(30, 35);
    link.style('width', '250px');
    link.style('font-family', 'Helvetica');
    link.style('font-size', '25px');
    link.style('color', 'rgb(33,33,33)');          
  //font attributes
  textFont(font);
  textSize(50);
  noStroke();

  for(let i = 0; i < 8;i++){
  AffectArray[i] = 0;
  }
  objectDuplicate = 0;

  //loading Videos
  randomQuestion = int(random(0,3));
}

function draw(){

  scale(scaleNo);

  if(start == true){
  GreenVid[0].play();
  GreenVid[0].stop();
  reset();
  start=false;
  }

  textFont(font);
  textSize(50);
  noStroke();
   //---------------------------------------------------------------------------------------------------------------------------------- QUESTIONS
  if(QuestionDone == false){
    //--------------------------------------------------------------------------------------------------------------------------------StartingScreen


      if(begin == false){

      mouseStage = 'start';

      background(122, 125, 132);
      fill(33,33,33);
      text("Click to Start...",100,515);

      //text(AffectArray[0] + " " +AffectArray[1] + " " +AffectArray[2] + " " +AffectArray[3] + " " +AffectArray[4] + " " +AffectArray[5] + " " +AffectArray[6] + "\n " + objectDuplicate, 20,60);
    }
    
    //--------------------------------------------------------------------------------------------------------------------------------StartingQuestions
    if(begin == true){
      

  switch(no){
      case 0://video question 1
      if(randomQuestion == 0){
        Question("How would you want to go abroad?" , "Alone", "With Friends", 0 , 3);
      }
      if(randomQuestion == 1){
        Question("How would you like to spend your time?", "Alone", "With Friends", 0 , 3);
      }
      if(randomQuestion == 2){
        Question("How do you prefer to spend your free time?" , "Alone", "With Friends", 0 , 3);
      }
      break;
      
      case 1://video question 2
      if(randomQuestion == 0){
        Question("choose One","Headphones","Speakers",7,7);
      }
      if(randomQuestion == 1){
        Question("choose One","Religion","Science",7,7);
      }
      if(randomQuestion == 2){
        Question("When you are abroad what do you prefer to visit?","Amusement Parks","Museums",7,7);
      }
      break;
      
      case 2://video question 3
      if(randomQuestion == 0){
        Question("Which of these traits do you prefer in someone else?","Someone Loyal","Someone Very Emotional",5,6);
      }
      if(randomQuestion == 1){
        Question("Which of these do you like the most?","Loyal","Passionate",5,6);
      }
      if(randomQuestion == 2){
        Question("Which trait do you like the most","Loyal","Very Emotional",5,6);
      }
      break;
          
      //--------------------------------------------------------------- VIDEO QUESTIONS
      case 3://object question 1
      if(randomQuestion == 0){
        Question("What do you rather do?","Adventure","Develop new traits", 0, 1);
      }
      if(randomQuestion == 1){
        Question("What would you prefer to do?","Go out explore","spend tim on \nyour hobbies", 0, 1);
      }
      if(randomQuestion == 2){
        Question("Choose One","Camping","Learn a new instrument", 0, 1);
      }
      break;
      
      case 4://object question 2
      if(randomQuestion == 0){
        Question("Choose One : ", "Freedom" , "Balance", 3 , 2 );
      }
      if(randomQuestion == 1){
        Question("Do you think law helps in balancing the world?", "No" , "Yes", 3 , 2 );
      }
      if(randomQuestion == 2){
        Question("Which of these do you prefer? ", "Freedom" , "Balance", 3 , 2 );
      }
      break;
      
      case 5://object question 3
      if(randomQuestion == 0){   
        Question("Choose One : ", "Personal Growth", "Love Others", 1, 2);
      }
      if(randomQuestion == 1){
        Question("What do you find more important?", "Loving yourself", "Loving Others", 1, 2);
      }
      if(randomQuestion == 2){
        Question("How would you like to spend your time?", "Alone", "With Friends", 1, 2);
      }
      break;
      
      case 6://object question 4
      if(randomQuestion == 0){
        Question("Which of these traits do you prefer in someone else?", "Someone Intelligent", "Someone Passion", 4, 6);
      }
      if(randomQuestion == 1){
        Question("Which characterestic best describes you?", "Intellegence", "Very Emotional", 4, 6);
      }
      if(randomQuestion == 2){
        Question("Which trait do you like the most", "Intellegence", "Passion", 4, 6);
      }
      break;
      
      case 7:
      if(randomQuestion == 0){
        Question("Choose One","Fruit","Vegetables",7,7);
      }
      if(randomQuestion == 1){
        Question("Choose One","Summer","Winter",7,7);
      }
      if(randomQuestion == 2){
        Question("Choose One","Book","Movie",7,7);
      }
      break;
      
      case 8:

      if(randomQuestion == 0){
        Question("Which of these words describes best your character?","Truthful","Energetic",5,4);
      }
      if(randomQuestion == 1){
        Question("Which of these traits would you like your friends to have?","Truthful","Energetic",5,4);
      }
      if(randomQuestion == 2){
        Question("Which of these do you like the most?","Truthful","Energetic",5,4);
      }
      break;
    }
    }
  }
  //----------------------------------------------------------------------------------------------------------------------------------
  if(QuestionDone == true){
  if(s1){

    vidmaxAffect1 = max(AffectArray[4],AffectArray[5]);
    vidmaxAffect2 = max(vidmaxAffect1,AffectArray[6]); //video decision

    if(vidmaxAffect2 == AffectArray[4]){
      objectDuplicate++;
    }
    if(vidmaxAffect2 == AffectArray[5]){
      objectDuplicate++;
    }

    if(vidmaxAffect2 == AffectArray[6]){
      objectDuplicate++;
    }
    
        if(objectDuplicate > 1){
          choice = 3;
        }
        if(objectDuplicate == 1){
          if(vidmaxAffect2 == AffectArray[4]){
            choice = 0;
          }
          if(vidmaxAffect2 == AffectArray[5]){
            choice = 2;
          }
          if(vidmaxAffect2 == AffectArray[6]){
            choice = 1;
          }
        }
    
    
    
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//enter random function for choice 4 here
    
    
    max1 = [AffectArray[0],AffectArray[1],AffectArray[2],AffectArray[3]];
    
    objmaxAffect1 = max(AffectArray[0],AffectArray[1]);
    objmaxAffect2 = max(AffectArray[2],AffectArray[3]);
    objmaxAffect3 = max(objmaxAffect1,objmaxAffect2);

    if(objmaxAffect3 == AffectArray[0]){
      objectDuplicate2++;
    }
    if(objmaxAffect3 == AffectArray[1]){
      objectDuplicate2++;
    }
    if(objmaxAffect3 == AffectArray[2]){
      objectDuplicate2++;
    }
    if(objmaxAffect3 == AffectArray[3]){
      objectDuplicate2++;
    }
    
        if(objectDuplicate2>1){
          object = int(random(0,4));
        }
    
        if(objectDuplicate2==1){
          if(objmaxAffect3 == AffectArray[0]){
            object = 0; // planet
          }
          if(objmaxAffect3 == AffectArray[1]){
            object = 1; //
          }
          if(objmaxAffect3 == AffectArray[2]){
            object = 2; //
          }
          if(objmaxAffect3 == AffectArray[3]){
            object = 3; //
          }
    }
        
    videoRandom = int(random(0,6));
    Ran = int(random(0,7));
    imageChoice = int(random(0,2));
    videoChoice = int(random(0,3));
    objectChoice = int(random(0,4));
    objectChoiceOver = int(random(0,2));
    objectChoiceShow = int(random(0,10));
    
    if((objectChoiceShow == 9) || (objectChoiceShow == 0) ){
      objectChoiceShow = 1;
    }
    else{
      objectChoiceShow = 0;
    }
    
    //giving random cordinates to objects
    objectX=int(random(250,1121));
    objectY=int(random(50,281));
    
    s1 = false;
  }
  
  background(255);
  switch(choice){
    case 0: //yellow video
      Yellow();
    break;
    case 1: //red video
      Red();
    break;
    case 2: //green video
      Green();
    break;
    case 3: //all colours
      Any();
    break;
  }

  fill(0);
 // text(choice+" "+object+" "+imageChoice+" "+vidmaxAffect2+"\n" + AffectArray[0]+" " + AffectArray[1]+" " + AffectArray[2]+" " + AffectArray[3]+" " + AffectArray[4]+" " + AffectArray[5]+" " + AffectArray[6] + "\n" + objectDuplicate +" "+objectDuplicate2, 50,50);
  }

  if(SizeSmall){
    background(255);
    fill(0);
    textSize(20);
    text("Please enlarge the window size \n or try the program on a device \n with a larger resolution",50,50);
  }
}

//question Display Method
function Question(Question,Answer1,Answer2,no1,no2){

  mouseStage = 'question';

  background(122, 125, 132);

  fill(33,33,33);
  rect(0,0,(((1920 - (TIMEOUT*10))/2)),10);
  rect((1920 - ((1920 - (TIMEOUT*10))/2)),0,(((1920 - (TIMEOUT*10))/2)),10);
  fill(250, 110, 82);
  rect((((1920 - (TIMEOUT*10))/2)),0,(TIME*10),10);

  fill(33,33,33);
  text(Question,200,160);
  fill(6, 84, 100);
  rect(0,270,960,810);
  fill(52, 172, 188);
  rect(960,270,960,810);
  fill(33,33,33);
  text(Answer1,200,725);
  text(Answer2,1160,725);


  //click on right answer

  if(TIME == TIMEOUT){
    TIME = 0;
    timeRandom = int(random(0,2));
    if(timeRandom == 0){
      AffectArray[no1]++;
    }
    if(timeRandom == 1){
      AffectArray[no2]++;
    }

    if (no != 9){
      no++;
      randomQuestion = int(random(0,3));
    }
    if(no == 9){
      QuestionDone = true;
    }
  }

  if(ReturnLeft){
      AffectArray[no1] = AffectArray[no1]+1;
      TIME = 0;

      if (no != 9){
        no++;
        randomQuestion = int(random(0,3));
      }
      if(no == 9){

        QuestionDone = true;
      }

      ReturnLeft = false;

  }  

  if(ReturnRight){
      AffectArray[no2] = AffectArray[no2]+1;

      TIME = 0;

      if (no != 9){
        no++;
        randomQuestion = int(random(0,3));
      }
      if(no == 9){

        QuestionDone = true;
      }

      ReturnRight = false;
  }

  //time rus out
  TIME++;
}

//reset method
function reset(){
  clear();

  QuestionDone = false; 
  begin = false;
  s1 = true;
  videoRandom =0;
  object=0;
  imageChoice=0;
  Ran=0;
  choice=0;
  objectChoice=0;
  objectChoiceShow=0;
  barIntro = 0;
  infoIntro = 0;
  TIME = 0;
  barTime = 0;
  VideoSwitch = true;
  

  for(let i = 0; i<6; i++){
    YellowVid[i].remove();
    GreenVid[i].remove();
    RedVid[i].remove();
  }

  loadVideos();
  
  for(let i = 0; i < 8;i++){
  AffectArray[i] = 0;
  }
  objectDuplicate = 0;
  objectDuplicate2 = 0;
  vidmaxAffect1 = 0;
  vidmaxAffect2 = 0;
  objmaxAffect1 = 0;
  objmaxAffect2 = 0;
  objmaxAffect3 = 0;
  
  no = 0;
  questionNumber = no;
}

//yellow video method
function Yellow(){
  if(VideoSwitch == true){
  YellowVid[videoRandom].play();
  VideoSwitch = false;
  }
  image(YellowVid[videoRandom],0,0);

  YellowVid[videoRandom].onended(reset);
  
  if(object==0){Obj();} //planet
  imageRandom(ocean,glacier);
  if((object==1)||(object==2)||(object==3)){Obj();} //other objects

  bar();
}

//red video method
function Red(){
  if(VideoSwitch == true){
  RedVid[videoRandom].play();
  VideoSwitch = false;
  }

  image(RedVid[videoRandom],0,0);

  RedVid[videoRandom].onended(reset);
  
  if(object==0){Obj();} //planet
  imageRandom(grass,river);
  if((object==1)||(object==2)||(object==3)){Obj();} //other objects

  bar();
}

//green video method
function Green(){
  if(VideoSwitch == true){
  GreenVid[videoRandom].play();
  VideoSwitch = false;
  }

  image(GreenVid[videoRandom],0,0);

  GreenVid[videoRandom].onended(reset);

  
  if(object==0){Obj();} //planet
  imageRandom(desert,wheat);
  if((object==1)||(object==2)||(object==3)){Obj();} //other objects

  bar();
}

//any video method
function Any(){
  if(videoChoice == 0){
    if(VideoSwitch == true){
    YellowVid[videoRandom].play();
    VideoSwitch = false;
    }
    image(YellowVid[videoRandom],0,0);

    YellowVid[videoRandom].onended(reset);
  }
  if(videoChoice == 1){
    if(VideoSwitch == true){
    RedVid[videoRandom].play();
    VideoSwitch = false;
    }
    image(RedVid[videoRandom],0,0);
    
    RedVid[videoRandom].onended(reset);
  }
  if(videoChoice == 2){
    if(VideoSwitch == true){
    GreenVid[videoRandom].play();
    VideoSwitch = false;
    }
    image(GreenVid[videoRandom],0,0);
    
    GreenVid[videoRandom].onended(reset);
  }
  if(object==0){Obj();} //planet
  imageRandom(snow,city);
  if((object==1)||(object==2)||(object==3)){Obj();} //other objects
  bar();
}

//random image method
function imageRandom(x,y){
  if(imageChoice == 0){
    image(x[Ran],0,0);
  }
  if(imageChoice == 1){
    image(y[Ran],0,0);
  }
}

function Obj(){
  if(objectChoiceShow == 0){ // object showing
    if(object == 0){ //---------------------------------------------------------PLANET
      if((choice == 0)|| ((choice == 3)&&(videoChoice == 0))){ //YELLOW
        image(planet[objectChoice+8],objectX,objectY);//white
      }
      if((choice == 1)|| ((choice == 3)&&(videoChoice == 1))){ //RED
        image(planet[objectChoice],objectX,objectY);//blue
      }
      if((choice == 2) || ((choice == 3)&&(videoChoice == 2))){ //GREEN
        image(planet[objectChoice+4],objectX,objectY);//red
      }
    }
    if(object == 1){ //----------------------------------------------------------FISH
      if((choice == 0)|| ((choice == 3)&&(videoChoice == 0))){ //YELLOW
        image(fish[objectChoice+8],objectX,objectY);//white
      }
      if((choice == 1)|| ((choice == 3)&&(videoChoice == 1))){ //RED
        image(fish[objectChoice],objectX,objectY);//blue
      }
      if((choice == 2) || ((choice == 3)&&(videoChoice == 2))){ //GREEN
        image(fish[objectChoice+4],objectX,objectY);//red
      }
    }
    if(object == 2){ //----------------------------------------------------------BIRD
      if((choice == 0)|| ((choice == 3)&&(videoChoice == 0))){ //YELLOW
        image(bird[objectChoice+8],objectX,objectY);//white
      }
      if((choice == 1)|| ((choice == 3)&&(videoChoice == 1))){ //RED
        image(bird[objectChoice],objectX,objectY);//blue
      }
      if((choice == 2) || ((choice == 3)&&(videoChoice == 2))){ //GREEN
        image(bird[objectChoice+4],objectX,objectY);//red
      }
    }
    if(object == 3){ //----------------------------------------------------------BUTTERFLY
      if((choice == 0)|| ((choice == 3)&&(videoChoice == 0))){ //YELLOW
        image(butter[objectChoice+8],objectX,objectY);//white
      }
      if((choice == 1)|| ((choice == 3)&&(videoChoice == 1))){ //RED
        image(butter[objectChoice],objectX,objectY);//blue
      }
      if((choice == 2) || ((choice == 3)&&(videoChoice == 2))){ //GREEN
        image(butter[objectChoice+4],objectX,objectY);//red
      }
    }
  }  
}

function loadVideos(){
  GreenVid[0] = createVideo(['Videos/green0.mp4']);
  GreenVid[0].hide(); GreenVid[0].muted = true; GreenVid[0].volume(0); GreenVid[0].stop();
  GreenVid[1] = createVideo(['Videos/green1.mp4']);
  GreenVid[1].hide(); GreenVid[1].muted = true; GreenVid[1].volume(0); GreenVid[1].stop();
  GreenVid[2] = createVideo(['Videos/green2.mp4']);
  GreenVid[2].hide(); GreenVid[2].muted = true; GreenVid[2].volume(0); GreenVid[2].stop();
  GreenVid[3] = createVideo(['Videos/green3.mp4']);
  GreenVid[3].hide(); GreenVid[3].muted = true; GreenVid[3].volume(0); GreenVid[3].stop();
  GreenVid[4] = createVideo(['Videos/green4.mp4']);
  GreenVid[4].hide(); GreenVid[4].muted = true; GreenVid[4].volume(0); GreenVid[4].stop();
  GreenVid[5] = createVideo(['Videos/green5.mp4']);
  GreenVid[5].hide(); GreenVid[5].muted = true; GreenVid[5].volume(0); GreenVid[5].stop();

  RedVid[0] = createVideo(['Videos/red0.mp4']);
  RedVid[0].hide(); RedVid[0].muted = true; RedVid[0].volume(0); RedVid[0].stop();
  RedVid[1] = createVideo(['Videos/red1.mp4']);
  RedVid[1].hide(); RedVid[1].muted = true; RedVid[1].volume(0); RedVid[1].stop();
  RedVid[2] = createVideo(['Videos/red2.mp4']);
  RedVid[2].hide(); RedVid[2].muted = true; RedVid[2].volume(0); RedVid[2].stop();
  RedVid[3] = createVideo(['Videos/red3.mp4']);
  RedVid[3].hide(); RedVid[3].muted = true; RedVid[3].volume(0); RedVid[3].stop();
  RedVid[4] = createVideo(['Videos/red4.mp4']);
  RedVid[4].hide(); RedVid[4].muted = true; RedVid[4].volume(0); RedVid[4].stop();
  RedVid[5] = createVideo(['Videos/red5.mp4']);
  RedVid[5].hide(); RedVid[5].muted = true; RedVid[5].volume(0); RedVid[5].stop();

  YellowVid[0] = createVideo(['Videos/yellow0.mp4']);
  YellowVid[0].hide(); YellowVid[0].muted = true; YellowVid[0].volume(0); YellowVid[0].stop();
  YellowVid[1] = createVideo(['Videos/yellow1.mp4']);
  YellowVid[1].hide(); YellowVid[1].muted = true; YellowVid[1].volume(0); YellowVid[1].stop();
  YellowVid[2] = createVideo(['Videos/yellow2.mp4']);
  YellowVid[2].hide(); YellowVid[2].muted = true; YellowVid[2].volume(0); YellowVid[2].stop();
  YellowVid[3] = createVideo(['Videos/yellow3.mp4']);
  YellowVid[3].hide(); YellowVid[3].muted = true; YellowVid[3].volume(0); YellowVid[3].stop();
  YellowVid[4] = createVideo(['Videos/yellow4.mp4']);
  YellowVid[4].hide(); YellowVid[4].muted = true; YellowVid[4].volume(0); YellowVid[4].stop();
  YellowVid[5] = createVideo(['Videos/yellow5.mp4']);
  YellowVid[5].hide(); YellowVid[5].muted = true; YellowVid[5].volume(0); YellowVid[5].stop();
}

function mouseClicked(){
  if(mouseStage == 'start'){

    for(let i = 0; i<6; i++){
    YellowVid[i].remove();
    GreenVid[i].remove();
    RedVid[i].remove();
    }

    loadVideos();
  

    begin = true;
    mouseStage = 'none';
  }

  if(mouseStage == 'question'){
    if((mouseX < ((1/2)*canvasWidth))&&(mouseY>((1/4)*canvasHeight))){
      ReturnLeft = true;
      mouseStage = 'none';
    }//left

    if((mouseX > ((1/2)*canvasWidth))&&(mouseY>((1/4)*canvasHeight))){
      ReturnRight = true;
      mouseStage = 'none';
    }//right
  }

  if(mouseStage == "mouse1"){
    mouseIcon1return = true;
    mouseStage = "none";
  }

  if(mouseStage == "mouse2"){
    mouseIcon2return = true;
    mouseStage = "none";
  }

  if(mouseStage == "mouse3"){
    mouseIcon3return = true;
    mouseStage = "none";
  }
}

function keyPressed(){
  if(key == 'r'){
    reset();
  }
}

function windowResized(){
   if((windowHeight >= 1080)&&(windowWidth >= 1920)){ //original
    canvasWidth = 1920;
    canvasHeight = 1080;

    scaleNo = 1;
    SizeSmall = false;
  }

  if((windowHeight >= 1080)&&(windowWidth >= 1920)){ //original
    canvasWidth = 1920;
    canvasHeight = 1080;

    scaleNo = 1;
    SizeSmall = false;
  }

  if((windowHeight >= 720)&&(windowWidth >= 1280)   &&   ((windowHeight < 1080)||(windowWidth < 1920))){ //1280x720
    canvasWidth = 1280;
    canvasHeight = 720;

    scaleNo = 720/1080;
    SizeSmall = false;
  }

  if((windowHeight >= 576)&&(windowWidth >= 1024)   &&   ((windowHeight < 720)||(windowWidth < 1280))){ //1280x720
    canvasWidth = 1024;
    canvasHeight = 576;

    scaleNo = 576/1080;
    SizeSmall = false;
  }

  if((windowHeight >= 360)&&(windowWidth >= 640)   &&   ((windowHeight < 576)||(windowWidth < 1024))){ //1280x720
    canvasWidth = 640;
    canvasHeight = 360;

    scaleNo = 360/1080;
    SizeSmall = false;
  }

  canvas = createCanvas(canvasWidth, canvasHeight);

  if((windowHeight < 360) ||(windowWidth < 640)){ //1280x720
    canvas = createCanvas(500, 300);
    SizeSmall = true;
    scaleNo = 1;
  }
}

function informationBar(){
  if(infoSwitch){
    if(infoIntro != 480){
    infoIntro = infoIntro+40;
    }

    fill(255);//animation
    rect(1920-infoIntro,0,400,1080);
    fill(33, 33, 33);//animation
    rect(1920-infoIntro,0,20,1080);
    fill(255);

    textSize(22);
    fill(33,33,33);
    text("According to the quiz \nthe results were: ",1950-infoIntro,30);

    
    if(choice == 0){
      fill(33,33,33);
      textSize(22);
      text("Yellow or Orange",1950-infoIntro,150);

      fill(250,110,82);
      textSize(18);
      text("These colours show \nelements of intelligence, \nexcitement and happiness \naccording to online \nDream Dictionaries",1950-infoIntro,190);
    }

    if(choice == 1){
      fill(33,33,33);
      textSize(22);
      text("Red ",1950-infoIntro,150);

      fill(250,110,82);
      textSize(18);
      text("This colour shows \nelements of passion, \nanger and sentiment \naccording to online \nDream Dictionaries",1950-infoIntro,190);
    }

    if(choice == 2){
      fill(33,33,33);
      textSize(22);
      text("Green or Blue",1950-infoIntro,150);

      fill(250,110,82);
      textSize(18);
      text("These colours show \nelements of truthfulness, \nloyalty and openess \naccording to online \nDream Dictionaries",1950-infoIntro,190);
    }

    if(choice == 3){
      fill(33,33,33);
      textSize(22);
      text("Random ",1950-infoIntro,150);

      fill(250,110,82);
      textSize(18);
      text("You have chosen some \ncombinations which made the \nprogram choose randomly \nfor you",1950-infoIntro,190);
    }
    if(objectChoiceShow == 0){
    if(object == 0){
      fill(33,33,33);
      textSize(22);
      text("Planet",1950-infoIntro,350);

      fill(250,110,82);
      textSize(18);
      text("This shows some\ntraits of Adventure \naccording to online \nDream Dictionaries",1950-infoIntro,390);
    }

    if(object == 1){
      fill(33,33,33);
      textSize(22);
      text("Fish",1950-infoIntro,350);

      fill(250,110,82);
      textSize(18);
      text("This shows that\nyou are quite fond \nof your Personal Time \naccording to online \nDream Dictionaries",1950-infoIntro,390);
    }

    if(object == 2){
      fill(33,33,33);
      textSize(22);
      text("Bird",1950-infoIntro,350);

      fill(250,110,82);
      textSize(18);
      text("This shows some\ntraits of Harmony, \nBalance and Love \naccording to online \nDream Dictionaries",1950-infoIntro,390);
    }

    if(object == 3){
      fill(33,33,33);
      textSize(22);
      text("Butterfly",1950-infoIntro,350);

      fill(250,110,82);
      textSize(18);
      text("This shows some\ntraits of Happiness \naccording to online \nDream Dictionaries",1950-infoIntro,390);
    }
  }


  }

  if(!infoSwitch){
    if(infoIntro != 0){
    infoIntro = infoIntro-40;
    }

    fill(122, 125, 132);//animation
    rect(1920-infoIntro,0,400,1080);
    fill(33, 33, 33);//animation
    rect(1920-infoIntro,0,20,1080);
    fill(255);

  }

  if(saveSwitch){
    if(infoSwitch){
      infoSwitch = !(infoSwitch);
    }
    if(infoIntro==0){
    image(logo,1420,880,450,150);
    save(canvas, 'UnconciousRealities.jpg');
    }

    saveSwitch = false;
  }


  if(barIntro != 80){
    barIntro++;
  }

  fill(33, 33, 33);//animation
  rect(1920-barIntro,0,80,1080);
  fill(255);

  image(infoImg, 1930-barIntro, 225 , 60, 60);
  image(saveImg, 1930 - barIntro, 510 , 60, 60);
  image(resetImg, 1935-barIntro, 795 , 50, 50);

  if((mouseX > ((canvasWidth-(barIntro*scaleNo)+((1/192)*canvasWidth))))&&(mouseX < ((canvasWidth-(barIntro*scaleNo)+((1/24)*canvasWidth))))&&(mouseY > ((canvasHeight - ((19/24)*canvasHeight))))&&(mouseY < ((canvasHeight-((53/72)*canvasHeight))))){
      image(infoImgRed, 1930-barIntro, 225 , 60, 60);
      mouseStage = "mouse1";
  }

  if((mouseX > ((canvasWidth-(barIntro*scaleNo)+((1/192)*canvasWidth))))&&(mouseX < ((canvasWidth-(barIntro*scaleNo)+((1/24)*canvasWidth))))&&(mouseY > ((canvasHeight - ((19/36)*canvasHeight))))&&(mouseY < ((canvasHeight - ((17/36)*canvasHeight))))){
      image(saveImgRed, 1930-barIntro, 510 , 60, 60);
      mouseStage = "mouse2";
  }

  if((mouseX > ((canvasWidth-(barIntro*scaleNo)+((1/192)*canvasWidth))))&&(mouseX < ((canvasWidth-(barIntro*scaleNo)+((1/24)*canvasWidth))))&&(mouseY > ((canvasHeight - ((19/72)*canvasHeight))))&&(mouseY < (canvasHeight - (((5/24)*canvasHeight))))){
      image(resetImgRed, 1935-barIntro, 795 , 50, 50);
      mouseStage = "mouse3";
  }

  if(mouseIcon1return){
    infoSwitch = !infoSwitch;
    mouseIcon1return = false;
  }

  if(mouseIcon2return){
    saveSwitch = true;
    mouseIcon2return = false;
  }

  if(mouseIcon3return){
    reset();
    mouseIcon3return = false;
  }
}

function bar(){
  barTime++;
  if(barTime>200){
    informationBar();
  }
}

