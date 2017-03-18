var sspeed=0.5;
function Bubble(x,y,r){
    this.x = x;
    this.y = y;
    this.width = r;
    this.height = r;
    this.color = 'white';
    this.xvelocity=sspeed;
    this.yvelocity=sspeed;

    this.move=function(){
        this.x=this.x+this.xvelocity;
        this.y=this.y+this.yvelocity;
    }
    this.outOfScreen = function(){
        if(this.x < 0 || this.y > height || this.x > width || this.y < 0){
            return true;
        }
        else{
            return false;
        }
    }
    
}

