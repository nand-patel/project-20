    var cat;
    var mouse,gardenImg,catImg,mouseImg,catImg2,mouseImg2,catImg3,mouseImg3;

    function preload() {
        gardenImg=loadImage("images/garden.png");
        catImg=loadAnimation("images/cat1.png")
        catImg2=loadAnimation("images/cat2.png","images/cat3.png")
        catImg3=loadAnimation("images/cat4.png");
        mouseImg=loadAnimation("images/mouse1.png")
        mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
        mouseImg3=loadAnimation("images/mouse4.png");
    
    }

    function setup(){
        createCanvas(windowWidth,windowHeight);
        
        cat=createSprite(windowWidth-280,windowHeight-100,10,10);
        cat.addAnimation("sit",catImg);
        cat.scale=0.2;

        mouse=createSprite(windowWidth-1200,windowHeight-100,10,10);
        mouse.addAnimation("sit",mouseImg);
        mouse.scale=0.1;
    }

    function draw() {

        background(gardenImg);
        if (cat.x-mouse.x<cat.width/2+mouse.width/2-100){
            cat.addAnimation("sit2",catImg3);
            cat.changeAnimation("sit2",catImg3);
            mouse.addAnimation("sit3",mouseImg3);
            mouse.changeAnimation("sit3",mouseImg3)
            cat.velocityX=0;
        }
        drawSprites();
    }


    function keyPressed(){

    cat.velocityX=-5;
    cat.addAnimation("run",catImg2);
    cat.changeAnimation("run",catImg2);
    mouse.addAnimation("run1",mouseImg2);
    mouse.changeAnimation("run1",mouseImg2);

    }
