var song, winStatus, gameStatus = "game running"
    , levelBreakTime;
var NumOfBalls = 30
    , level = 1
    , bgimg, img_smile, levelGap, temp;
var timeLeft = 50
    , pause = -1
    , pauseX = 400
    , pauseY = 50
    , play = 0
    , replayImg;
var myTimer, myTTimer, BubbleImg, hrline, playGameImg, pauseGameImag, startGame;

function preload() {
    missTune = loadSound('assets/woosh.wav');
    hitTune = loadSound('assets/hiti.mp3');
    img_smile = loadImage('assets/ghost.png');
    playGameImg = loadImage('assets/playbtn.png');
    //pauseGameImag = loadImage('assets/pause.png');
    startGame = loadImage('assets/start-button.png');
    bgimg = loadImage('assets/02.jpg');
    BubbleImg = loadImage('assets/bubble.png');
    replayImg = loadImage('assets/Rerestart.png');
}

function setup() {
    var c = createCanvas(800, 600);
    c.parent("gameWindow");
    prepareBubble();
    prepareBalls();
    gameTimer();
}

function draw() {
    imageMode(CORNER);
    background(bgimg);
    line(0, 125, 800, 125);
    playOrPause();
    printBubbles();
    //addBubbles();    
    if (play == 1) {
        printBalls();
        imageMode(CENTER);
        image(playGameImg, pauseX, pauseY, 100, 100);
    }
    if (pause != -1) {
        textSize(22);
        fill("red");
        textStyle(BOLD);
        text("Time Left = " + timeLeft, 643, 30);
        fill("white");
        textSize(20);
        //textStyle(NORMAL);
        text("Total Score = " + totalHit, 643, 60);
        fill("white");
        text("Level = " + level, 10, 30);
        text("Score = " + hit, 10, 60);
        text("Missed = " + miss, 10, 90);
    }
    youWin();
    gameOver();
}

function playOrPause() {
    if (play == 0 || pause == 1) {
        if (play == 0) {
            imageMode(CORNER);
            background(bgimg);
            imageMode(CENTER);
            image(startGame, 400, 250, 100, 100);
        }
        noLoop();
    }
    //    else if (pause == 0) {
    //        //loop();
    //    }
}

function prepareBalls() {
    for (var i = 0; i < NumOfBalls; i++) {
        var b = new Ball(random(width), random(height));
        Balls.push(b);
    }
}

function prepareBubble() {
    for (var i = 0; i < 30; i++) {
        var b = new Bubble(random(width), random(height), random(50));
        Bubbles.push(b);
    }
}
//function addBubbles(){
//    for(var i=0;i<Bubbles.length;i++){
//        if(frameCount%100 == 0){
//            Bubbles.push(new Bubble(random(width),random(height),random(50)));
//            //Bubbles.push(b);
//        }
//    }
//}
function printBubbles() {
    for (i = 0; i < Bubbles.length; i++) {
        //        if(Bubbles[i].outOfScreen()){
        //            Bubbles.splice(i,1);
        //        }
        Bubbles[i].move();
        fill(Bubbles[i].color);
        if (Bubbles[i].height < 15) {
            Bubbles[i].height = 15;
            Bubbles[i].width = 15;
        }
        imageMode(CENTER);
        image(BubbleImg, Bubbles[i].x, Bubbles[i].y, Bubbles[i].width, Bubbles[i].height)
            //ellipse(Bubbles[i].x,Bubbles[i].y,Bubbles[i].width,Bubbles[i].height);
    }
}

function printBalls() {
    for (var i = 0; i < Balls.length; i++) {
        fill(Balls[i].color);
        Balls[i].move();
        //ellipse(Balls[i].x,Balls[i].y,Balls[i].width,Balls[i].height);
        imageMode(CENTER);
        image(img_smile, Balls[i].x, Balls[i].y, Balls[i].width, Balls[i].height)
    }
}

function gameTimer() {
    myTimer = setInterval(function () {
        if (pause == 0) {
            timeLeft--;
        }
    }, 1000);
}

function levelGap() {
    levelBreakTime = 3;
    myTTimer = setInterval(function () {
        levelBreakTime--;
        imageMode(CORNER);
        background(bgimg);
        if (level <= 5) {
            textSize(25);
            fill('red');
            text("Next level starts in " + (levelBreakTime + 1) + " second(s).", 200, 400);
            textSize(50);
            fill('white');
            text("Level " + (level - 1) + " completed", 170, 300);
        }
        if (levelBreakTime < 0) {
            loop();
            gameTimer();
            clearInterval(myTTimer);
        }
    }, 1000)
}

function gameOver() {
    if (timeLeft <= 0 || level > 5) {
        gameStatus = "Game Over";
        clearInterval(myTimer);
        clearInterval(myTTimer);
        Balls.splice(0, Balls.length);
        imageMode(CORNER);
        background(bgimg);
        fill("white");
        textSize(50);
        text("Total Score: " + totalHit, 230, 180);
        textSize(56);
        fill("red");
        text(gameStatus, 250, 300);
        noLoop();
        imageMode(CENTER);
        image(replayImg, 400, 400, 100, 100)
        play = -2;
    }
}

function youWin() {
    winStatus = "You Lose";
    if ((timeLeft > 0) && (Balls.length == 0)) {
        winStatus = "You Win";
        clearInterval(myTimer);
        Balls.splice(0, Balls.length);
        imageMode(CORNER);
        background(bgimg);
        gameLevel();
    }
}

function restartGame() {
    play = 1;
    pause = 0;
    level = 1;
    speed = 1;
    NumOfBalls = 30;
    miss = 0;
    totalHit = 0;
    hit = 0;
    timeLeft = 60 - (level - 1) * 5; // time decreacse by 5 sec.s
    prepareBalls();
    prepareBubble();
    imageMode(CORNER);
    background(bgimg);
    gameTimer();
    gameStatus = "game running";
    //draw();
    loop();
}

function gameLevel() {
    if (winStatus = "You Win") {
        if (level > 5) {
            gameOver();
        }
        speed++;
        level++;
        NumOfBalls -= 8;
        miss = 0;
        hit = 0;
        levelGap();
        noLoop();
        timeLeft = 50 - (level - 1) * 5; // time decreacse by 5 sec.s in each level
        prepareBalls();
    }
}

function mousePressed() {
    // for 1st time when game starts
    if (play == 0) {
        var distplay = dist(mouseX, mouseY, 400, 250);
        if (distplay <= 50) {
            pause = 0;
            play = 1;
            loop();
        }
    }
    // for pause and play 
    var disPause = dist(mouseX, mouseY, pauseX, pauseY);
    if (disPause <= 50) {
        if (pause == 1) {
            pause = 0;
            loop();
        }
        else {
            pause = 1;
        }
    }
    if (!(gameStatus == "Game Over")) {
        //console.log("distance is :"+dis);        
        if (mouseY <= 120) {}
        else {
            if (pause == 0) {
                isHit = 0;
                for (var i = 0; i < Balls.length; i++) {
                    Balls[i].ballClicked(i);
                }
                if (isHit == 0) {
                    miss++;
                    missTune.play();
                }
            }
        }
    }
    else {
        // for restart the game
        var distreplay = dist(400, 400, mouseX, mouseY);
        if (distreplay <= 50) restartGame();
    }
}