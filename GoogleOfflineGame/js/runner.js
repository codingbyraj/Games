function runner(runnerImg1,runnerImg2,runnerImg3){
    this.x = 220;
    this.y = height/2 - 28;
    this.width = 50;
    this.height = 50;
    this.velocity = 0.5;
    this.gravity = 0.5;
    
    
    this.printRunner1 = function(){
        imageMode(CENTER);
        image(runnerImg1,this.x,this.y,this.width,this.height);        
        
    }
    this.printRunner3 = function(){
        imageMode(CENTER);
        image(runnerImg3,this.x,this.y,this.width,this.height);        
        
    }
    this.printRunner2 = function(){
        imageMode(CENTER);        
        image(runnerImg2,this.x,this.y,this.width,this.height);
    }
    
    this.UP = function(){
           if(this.y == (height/2-28)) {
                this.velocity = -10;
                this.velocity += this.gravity;
                this.y += this.velocity;
           }       
 
    }
    
    this.fall = function(){
        if(this.y < (height/2 - 28)){
            this.velocity +=  this.gravity;
            this.y +=this.velocity;
        }
    }
}