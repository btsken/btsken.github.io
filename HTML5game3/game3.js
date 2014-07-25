var game3canvas = document.getElementById('game3');
var game3ctx = game3canvas.getContext('2d');
var Bullet1canvas = document.getElementById('Bullet1');
var Bullet1ctx = Bullet1canvas.getContext('2d');
var Bullet2canvas = document.getElementById('Bullet2');
var Bullet2ctx = Bullet2canvas.getContext('2d');
var Bullet3canvas = document.getElementById('Bullet3');
var Bullet3ctx = Bullet3canvas.getContext('2d');
var Bullet4canvas = document.getElementById('Bullet4');
var Bullet4ctx = Bullet4canvas.getContext('2d');
var Bullet5canvas = document.getElementById('Bullet5');
var Bullet5ctx = Bullet5canvas.getContext('2d');
var Bullet6canvas = document.getElementById('Bullet6');
var Bullet6ctx = Bullet6canvas.getContext('2d');
var Bullet7canvas = document.getElementById('Bullet7');
var Bullet7ctx = Bullet7canvas.getContext('2d');
var Viru1canvas = document.getElementById('Viru1');
var Viru1ctx = Viru1canvas.getContext('2d');

game3ctx.canvas.width = window.innerWidth - 10;
game3ctx.canvas.height = window.innerHeight - 30;
Bullet1ctx.canvas.width = window.innerWidth * 0.6;
Bullet1ctx.canvas.height = 100;
Bullet2ctx.canvas.width = window.innerWidth * 0.6;
Bullet2ctx.canvas.height = 100;
Bullet3ctx.canvas.width = window.innerWidth * 0.6;
Bullet3ctx.canvas.height = 100;
Bullet4ctx.canvas.width = window.innerWidth * 0.6;
Bullet4ctx.canvas.height = 100;
Bullet5ctx.canvas.width = window.innerWidth * 0.6;
Bullet5ctx.canvas.height = 100;
Bullet6ctx.canvas.width = window.innerWidth * 0.6;
Bullet6ctx.canvas.height = 100;
Bullet7ctx.canvas.width = window.innerWidth * 0.6;
Bullet7ctx.canvas.height = 100;
Viru1ctx.canvas.width = 400;
Viru1ctx.canvas.height = 700;

var jobslife = document.getElementById("game3jobs2");
var jobsdead = document.getElementById("game3jobs");
var BulletPNG = document.getElementById("Bulletpng");
var explode = document.getElementById("explodepng");
var VIRS = document.getElementById("Vir");
var FIREpng = document.getElementById("Fire");
var VSicon = document.getElementById("VS");
var big = document.getElementById("bigBulletpng");
var deadover = document.getElementById("OVER");
var jodspositionY = 400;

// game3ctx.drawImage(jobslife, game3canvas.width*0.025, jodspositionY, 150, 200);
// game3ctx.drawImage(AABC, game3canvas.width-400, 100, 400, 700);
setTimeout(function() {
    game3ctx.drawImage(jobslife, game3canvas.width * 0.025, jodspositionY, 150, 200);
    game3ctx.drawImage(VSicon, game3canvas.width * 0.25, 10, 600, 300);

    // game3ctx.drawImage(backhos, 0, 0, game3canvas.width, game3canvas.height);
}, 100);

setTimeout(function() {
    Viru1ctx.drawImage(VIRS, 0, 200, 350, 500);
}, 100);


window.addEventListener('keydown', doKeyDown, true);


var spaceCount = 0;

function doKeyDown(a) {
    var KeyID = a.keyCode ? a.keyCode : a.which;
    if (KeyID == 32) //space
    {
        BulletShoot();
        spaceCount++
        if (spaceCount == 3) {
            VirAcctic();
        }

    } else if (KeyID == 87) //up "w"
    {
        game3ctx.clearRect(0, 0, game3canvas.width * 0.15, game3canvas.height)
        jodspositionY -= 100;
        game3ctx.drawImage(jobslife, game3canvas.width * 0.025, jodspositionY, 150, 200);
    } else if (KeyID == 83) //down "s"
    {
        game3ctx.clearRect(0, 0, game3canvas.width * 0.15, game3canvas.height)
        jodspositionY += 100;
        game3ctx.drawImage(jobslife, game3canvas.width * 0.025, jodspositionY, 150, 200);
    }

}

var firstInFlag1 = 0,
    firstInFlag2 = 0,
    firstInFlag3 = 0,
    firstInFlag4 = 0,
    firstInFlag5 = 0,
    firstInFlag6 = 0,
    firstInFlag7 = 0;

var Bullet1X = 10,
    Bullet2X = 10,
    Bullet3X = 10,
    Bullet4X = 10,
    Bullet5X = 10,
    Bullet6X = 10,
    Bullet7X = 10;
var i1 = 0,
    i1timeout;
var i2 = 0,
    i2timeout;
var i3 = 0,
    i3timeout;
var i4 = 0,
    i4timeout;
var i5 = 0,
    i5timeout;
var i6 = 0,
    i6timeout;
var i7 = 0,
    i7timeout;

function BulletShoot() {
    if (jodspositionY == 100) {
        if (firstInFlag1 == 0) {
            Bullet1ctx.drawImage(BulletPNG, Bullet1X, 0, 100, 100);
            firstInFlag1 = 1;
            setTimeout(Bullet1fly, 100);
            Bullet1X += 50;
        }

    } else if (jodspositionY == 200) {
        if (firstInFlag2 == 0) {
            Bullet2ctx.drawImage(BulletPNG, Bullet2X, 0, 100, 100);
            firstInFlag2 = 1;
            setTimeout(Bullet2fly, 100);
            Bullet2X += 50;
        }
    } else if (jodspositionY == 300) {
        if (firstInFlag3 == 0) {
            Bullet3ctx.drawImage(BulletPNG, Bullet3X, 0, 100, 100);
            firstInFlag3 = 1;
            setTimeout(Bullet3fly, 100);
            Bullet3X += 50;
        }
    } else if (jodspositionY == 400) {
        if (firstInFlag4 == 0) {
            Bullet4ctx.drawImage(BulletPNG, Bullet4X, 0, 100, 100);
            firstInFlag4 = 1;
            setTimeout(Bullet4fly, 100);
            Bullet4X += 50;
        }
    } else if (jodspositionY == 500) {
        if (firstInFlag5 == 0) {
            Bullet5ctx.drawImage(BulletPNG, Bullet5X, 0, 100, 100);
            firstInFlag5 = 1;
            setTimeout(Bullet5fly, 100);
            Bullet5X += 50;
        }
    } else if (jodspositionY == 600) {
        if (firstInFlag6 == 0) {
            Bullet6ctx.drawImage(BulletPNG, Bullet6X, 0, 100, 100);
            firstInFlag6 = 1;
            setTimeout(Bullet6fly, 100);
            Bullet6X += 50;
        }
    } else if (jodspositionY == 700) {
        if (firstInFlag7 == 0) {
            Bullet7ctx.drawImage(BulletPNG, Bullet7X, 0, 100, 100);
            firstInFlag7 = 1;
            setTimeout(Bullet7fly, 100);
            Bullet7X += 50;
        }
    }
}

function Bullet1fly() {
    Bullet1ctx.clearRect(0, 0, Bullet1canvas.width, Bullet1canvas.height)
    Bullet1ctx.drawImage(BulletPNG, Bullet1X, 0, 100, 100);
    Bullet1X += 50;
    i1++;
    i1timeout = setTimeout(Bullet1fly, 100);
    if (i1 >= 17) {
        Bullet1ctx.clearRect(0, 0, Bullet1canvas.width, Bullet1canvas.height)
        clearTimeout(i1timeout);
        i1 = 0;
        firstInFlag1 = 0;
        Bullet1X = 10;
        Bullet1ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function Bullet2fly() {
    Bullet2ctx.clearRect(0, 0, Bullet2canvas.width, Bullet2canvas.height)
    Bullet2ctx.drawImage(BulletPNG, Bullet2X, 0, 100, 100);
    Bullet2X += 50;
    i2++;
    i2timeout = setTimeout(Bullet2fly, 100);
    if (i2 >= 17) {
        Bullet5ctx.clearRect(0, 0, Bullet2canvas.width, Bullet2canvas.height)
        clearTimeout(i2timeout);
        i2 = 0;
        firstInFlag2 = 0;
        Bullet2X = 10;
        Bullet2ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function Bullet3fly() {
    Bullet3ctx.clearRect(0, 0, Bullet3canvas.width, Bullet3canvas.height)
    Bullet3ctx.drawImage(BulletPNG, Bullet3X, 0, 100, 100);
    Bullet3X += 50;
    i3++;
    i3timeout = setTimeout(Bullet3fly, 100);
    if (i3 >= 17) {
        Bullet5ctx.clearRect(0, 0, Bullet3canvas.width, Bullet3canvas.height)
        clearTimeout(i3timeout);
        i3 = 0;
        firstInFlag3 = 0;
        Bullet3X = 10;
        Bullet3ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function Bullet4fly() {
    Bullet4ctx.clearRect(0, 0, Bullet4canvas.width, Bullet4canvas.height)
    Bullet4ctx.drawImage(BulletPNG, Bullet4X, 0, 100, 100);
    Bullet4X += 50;
    i4++;
    i4timeout = setTimeout(Bullet4fly, 100);
    if (i4 >= 17) {
        Bullet5ctx.clearRect(0, 0, Bullet4canvas.width, Bullet4canvas.height);
        clearTimeout(i4timeout);
        i4 = 0;
        firstInFlag4 = 0;
        Bullet4X = 10;
        Bullet4ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function Bullet5fly() {
    Bullet5ctx.clearRect(0, 0, Bullet5canvas.width, Bullet5canvas.height)
    Bullet5ctx.drawImage(BulletPNG, Bullet5X, 0, 100, 100);
    Bullet5X += 50;
    i5++;
    i5timeout = setTimeout(Bullet5fly, 100);
    if (i5 >= 17) {
        Bullet5ctx.clearRect(0, 0, Bullet5canvas.width, Bullet5canvas.height);
        clearTimeout(i5timeout);
        i5 = 0;
        firstInFlag5 = 0;
        Bullet5X = 10;
        Bullet5ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function Bullet6fly() {
    Bullet6ctx.clearRect(0, 0, Bullet6canvas.width, Bullet6canvas.height)
    Bullet6ctx.drawImage(BulletPNG, Bullet6X, 0, 100, 100);
    Bullet6X += 50;
    i6++;
    i6timeout = setTimeout(Bullet6fly, 100);
    if (i6 >= 17) {
        Bullet6ctx.clearRect(0, 0, Bullet6canvas.width, Bullet6canvas.height);
        clearTimeout(i6timeout);
        i6 = 0;
        firstInFlag6 = 0;
        Bullet6X = 10;
        Bullet6ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function Bullet7fly() {
    Bullet7ctx.clearRect(0, 0, Bullet7canvas.width, Bullet7canvas.height)
    Bullet7ctx.drawImage(BulletPNG, Bullet7X, 0, 100, 100);
    Bullet7X += 50;
    i7++;
    i7timeout = setTimeout(Bullet7fly, 100);
    if (i7 >= 17) {
        Bullet7ctx.clearRect(0, 0, Bullet7canvas.width, Bullet7canvas.height);
        clearTimeout(i7timeout);
        i7 = 0;
        firstInFlag7 = 0;
        Bullet7X = 10;
        Bullet7ctx.drawImage(explode, 870, 0, 100, 100);
    }
}

function VirAcctic() {
    clearBullet();
    Viru1ctx.clearRect(0, 0, Viru1canvas.width, Viru1canvas.height);
    Viru1ctx.drawImage(FIREpng, 0, 0, 400, 700);
    // game3ctx.drawImage(big, game3canvas.width*0.025, 100, 400, 700);
    bigfly();

}

function clearBullet() {
    //Bullet1ctx.clearRect(0,0,Bullet1canvas.width,Bullet1canvas.height);
    //Bullet2ctx.clearRect(0,0,Bullet2canvas.width,Bullet2canvas.height);
    Bullet3ctx.clearRect(0, 0, Bullet3canvas.width, Bullet3canvas.height);
    Bullet4ctx.clearRect(0, 0, Bullet4canvas.width, Bullet4canvas.height);
    Bullet5ctx.clearRect(0, 0, Bullet5canvas.width, Bullet5canvas.height);
    Bullet6ctx.clearRect(0, 0, Bullet6canvas.width, Bullet6canvas.height);
    Bullet7ctx.clearRect(0, 0, Bullet7canvas.width, Bullet7canvas.height);
}

// setTimeout(VirAcctic, 3000);

var bigfiltemp = 0,
    temp = 0,
    bigtimeout;

function bigfly() {

    game3ctx.clearRect(200, 0, game3canvas.width, game3canvas.height)
    game3ctx.drawImage(VSicon, game3canvas.width * 0.25, 10, 600, 300);
    game3ctx.drawImage(big, 700 - bigfiltemp, 100, 400, 700);
    bigfiltemp += 60;
    bigtimeout = setTimeout(bigfly, 100);
    temp++;
    if (temp >= 12) {
        clearTimeout(bigtimeout);
        setTimeout(textload, 100);
    }
}

function textload() {
    game3ctx.fillStyle = "#000000";
    game3ctx.font = '100px Arial';
    game3ctx.drawImage(big, 700 - bigfiltemp + 50, 100, 400, 700);
    game3ctx.drawImage(jobsdead, game3canvas.width * 0.025, jodspositionY, 150, 200);
    game3ctx.drawImage(deadover, game3canvas.width * 0.25, game3canvas.height * 0.15, 700, 700);
    // game3ctx.drawImage(VSicon, game3canvas.width*0.25, 10, 600, 300);

    // game3ctx.fillText("賈公 伯斯", game3canvas.width*0.35, game3canvas.height*0.3);
    // game3ctx.fillText("慟於2011年10月5日", game3canvas.width*0.2, game3canvas.height*0.4);
    // game3ctx.fillText("下午3時不敵病魔", game3canvas.width*0.23, game3canvas.height*0.55);
    // game3ctx.fillText("壽終正寢", game3canvas.width*0.33, game3canvas.height*0.7);
    // game3ctx.fillText("享年56歲", game3canvas.width*0.33, game3canvas.height*0.85);
}
