function Tree(treeImg1, treeImg2, treeImg3, whichTree, randomHeight) {
    this.x = 1200;
    this.y = 620;
    this.width = 250;
    this.height = randomHeight;
    this.speed = 4;
    if (whichTree < 1) this.img = treeImg1;
    else if (whichTree > 1 && whichTree < 2) this.img = treeImg2;
    else this.img = treeImg3;
    this.printTrees1 = function () {
        imageMode(CORNER);
        image(this.img, this.x, this.y, this.width, -this.height);
    }
    this.printTrees2 = function () {
        imageMode(CORNER);
        image(this.img, this.x, this.y, this.width, -this.height);
    }
    this.printTrees3 = function () {
        imageMode(CORNER);
        image(this.img, this.x, this.y, this.width, -this.height);
    }
    this.move = function () {
        this.x -= this.speed;
    }
    this.outOfScreen = function () {
        if (this.x < -300) return true;
        else return false;
    }
}