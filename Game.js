class Game{
    constructor(){
        this.title=createElement('h1');
        this.Enterbutton=createButton("ENTER");
        this.monkey=createSprite(800,900,30,70);
        this.monkey.addImage(monkey_img);
        this.monkey.scale=0.5;

       


        
    }
    displayFirstPage(){
        this.title.html("HUNGRY MONKEY");
        this.title.position(800,500);
        this.title.style("color","green");

        this.Enterbutton.position(220,110);
        this.Enterbutton.style("width","100px");
        this.Enterbutton.style("heigth","50px");
        this.Enterbutton.style("background-color","yellow");

        this.Enterbutton.mousePressed(()=>{
            this.Enterbutton.hide();
            this.title.hide();
            gameState="play";
        })

        
        

    }
    displaySecondPage(){
     game.spawnClouds();
     game.spawnYellowBanana();
     game.spawnBlackBanana();

    drawSprites();




    }

    spawnClouds(){
        if (frameCount % 60 === 0) {
            var cloud = createSprite(600,120,40,10);
            cloud.x = Math.round(random(200,displayWidth));
            cloud.addImage(cloud_img);
            cloud.scale = 1.5;
            cloud.velocityY = 3;
            
             //assign lifetime to the variable
            cloud.lifetime = 200;
            
            //adjust the depth
            cloud.depth = this.monkey.depth;
            this.monkey.depth = this.monkey.depth + 1;
            
            //add each cloud to the group
            cloudsGroup.add(cloud);
          }
    }

    spawnYellowBanana(){
        if (frameCount % 60 === 0) {
            var YellowBanana = createSprite(600,120,40,10);
            YellowBanana.x = Math.round(random(200,displayWidth));
            YellowBanana.addImage( yellow_img);
            YellowBanana.scale = 0.25;
            YellowBanana.velocityY = 3;
            
             //assign lifetime to the variable
             YellowBanana.lifetime = 200;
            
            //adjust the depth
            YellowBanana.depth = this.monkey.depth;
            this.monkey.depth = this.monkey.depth + 1;
            
            //add each cloud to the group
            YellowBananaGroup.add(YellowBanana);
          }
    }

    spawnBlackBanana(){
        if (frameCount % 60 === 0) {
            var BlackBanana = createSprite(600,120,40,10);
            BlackBanana.x = Math.round(random(200,displayWidth));
            BlackBanana.addImage( black_img);
            BlackBanana.scale = 0.25;
            BlackBanana.velocityY = 3;
            
             //assign lifetime to the variable
             BlackBanana.lifetime = 200;
            
            //adjust the depth
            BlackBanana.depth = this.monkey.depth;
            this.monkey.depth = this.monkey.depth + 1;
            
            //add each cloud to the group
            BlackBananaGroup.add(BlackBanana);
          }
    }
}