yPositionOfPlayer = 559;

function Player(charImg1, charImg2, charImg3, charImg4, charImg5) {
    this.x = 250;
    this.y = yPositionOfPlayer;
    this.width = 50;
    this.height = 100;
    this.velocity = 0.5;
    this.gravity = 0.5;
    this.fall = function () {
        if (this.y < yPositionOfPlayer) {
            this.velocity += this.gravity;
            this.y += this.velocity;
        }
        if (this.y > yPositionOfPlayer) {
            this.y = yPositionOfPlayer;
        }
    }
    this.printPlayer1 = function () {
        imageMode(CENTER);
        image(charImg1, this.x, this.y, this.width, this.height);
    }
    this.printPlayer2 = function () {
        imageMode(CENTER);
        image(charImg2, this.x, this.y, this.width, this.height);
    }
    this.printPlayer3 = function () {
        imageMode(CENTER);
        image(charImg3, this.x, this.y, this.width, this.height);
    }
    this.printPlayer4 = function () {
        imageMode(CENTER);
        image(charImg4, this.x, this.y, this.width, this.height);
    }
    this.printPlayer5 = function () {
        imageMode(CENTER);
        image(charImg5, this.x + 5, 585, 80, 30);
    }
    this.jump = function () {
        if (this.y == yPositionOfPlayer) {
            this.velocity = -12;
            this.velocity += this.gravity;
            this.y += this.velocity;
        }
    }
    this.sit = function () {
//        imageMode(CENTER);
//        image(charImag6, this.x, this.y + 16, 50, 50);
//        noLoop();
    }
}