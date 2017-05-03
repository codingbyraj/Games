function Fruit(heightMoney, whichMoney, fruitImg1, fruitImg2) {
    this.x = 1200;
    this.y = 420 + heightMoney;
    this.widht = 40;
    this.height = 40;
    this.speed = 4;
    if (whichMoney < 1) this.img = fruitImg1;
    else this.img = fruitImg2
    this.printFruit = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    }
    this.move = function () {
        this.x -= this.speed;
    }
    this.outOfScreen = function () {
        if (this.x < 0) return true;
        else return false;
    }
}