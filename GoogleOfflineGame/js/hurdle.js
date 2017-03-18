function Hurdle(last_speed){
    this.x = width;
    this.y = height/2 - 9;
    this.height = (random(height/8));
    //this.height = 50;
    this.width = 25;
    this.img = hurdleImg;
    this.speed = last_speed;  

    this.printHurdle = function(){
        
        if(this.height < 30){
            this.height = 40;
        }
        imageMode(CORNER);
        image(this.img,this.x,this.y,this.width,(-this.height));
        //rect(this.x, this.y, this.width , -this.height);
        
        this.x=this.x-this.speed;
        console.log(this.speed);
    }
    
    this.outOfScreen = function(){
        if(this.x <= 0){
            return true;        
        }
        else{
            return false;
        }        
    }        
    
    this.speedUp = function(){
        this.speed += 2;
    }
}