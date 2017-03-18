function Cloud(){
    this.x = width;
    this.y = random(160);
    this.height = 60;
    this.width = 60;
    
    this.printCloud = function(){
        imageMode(CENTER);        
        if(this.y <= 50){
            this.y = 50;
        }
        if(this.y > 200){
            this.y = 180;
        }
        image(cloudImg,this.x,this.y,this.width,this.height);
        this.x=this.x-2;
    }
    
    this.outOfScreenCloud = function(){
        if(this.x <= 0){
            return true;
        }
        else{
            return false;
        }        
    }
 
}