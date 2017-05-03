function Enemy(enemyImg1, enemyImg2, randomHeightOfEnemy) {
    this.x = 1200;
    this.y = randomHeightOfEnemy;
    this.width = 60;
    this.height = 60;
    this.speed = 8;
    this.printEnemy1 = function () {
        imageMode(CENTER);
        image(enemyImg1, this.x, this.y, this.width, this.height);
    }
    this.printEnemy2 = function () {
        imageMode(CENTER);
        image(enemyImg2, this.x, this.y, this.width, this.height);
    }
    this.move = function () {
        this.x -= this.speed;
    }
    this.outOfScreen = function () {
        if (this.x < -100) return true;
        else return false;
    }
}