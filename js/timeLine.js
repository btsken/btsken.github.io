var canvasWidth = window.innerWidth - 8;
var canvasHeight = window.innerHeight - 8;
var game = new Phaser.Game(canvasWidth, canvasHeight, Phaser.AUTO, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() {
    // game.load.tilemap('level3', 'img/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('stage', 'img/stage1.png');
    game.load.spritesheet('phaser', 'img/wing2.png', 161, 400);
    game.load.image('coin', 'img/coin.png');

    game.load.image('screen1', 'img/button/button1.png');
    game.load.image('screen2', 'img/button/button2.png');
    game.load.image('screen3', 'img/button/button3.png');
    game.load.image('screen4', 'img/button/button4.png');
    game.load.image('screen5', 'img/button/button5.png');
    game.load.image('screen6', 'img/button/button6.png');


    game.load.spritesheet('toy1', 'img/pixar/nemo.png', 161, 319);
    game.load.spritesheet('toy2', 'img/pixar/speedy.png', 161, 319);
    game.load.spritesheet('toy3', 'img/pixar/WALLE.png', 161, 319);
    game.load.spritesheet('toy4', 'img/pixar/woody.png', 161, 319);
}

var stage, screen1, sprite2, screen3, screen4, screen5, screen6;
var toy1, toy2, toy3, toy4;
var cursors, emitter;
var coinContainer, toyContainer;

function create() {
    game.world.setBounds(0, -300, 8000, 6000);

    stage = game.add.sprite(0, 0, 'stage');

    screen1 = game.add.sprite(1000, 50, 'screen1');
    screen1.inputEnabled = true;
    screen1.events.onInputUp.add(function() {

        // $("#endGame").show();


        $('#macII').dialog({
            width: 900
        });
        $('#macIIvedio').get(0).play();


    }, this);

    screen2 = game.add.sprite(2000, 50, 'screen2');
    screen2.inputEnabled = true;
    screen2.events.onInputUp.add(function() {
        $('#macI').dialog({
            width: 700
        });
    }, this);

    screen3 = game.add.sprite(3000, 50, 'screen3');
    screen3.inputEnabled = true;
    screen3.events.onInputUp.add(function() {

    }, this);

    screen4 = game.add.sprite(4000, 50, 'screen4');
    screen4.inputEnabled = true;
    screen4.events.onInputUp.add(function() {

    }, this);

    screen5 = game.add.sprite(5000, 50, 'screen5');
    screen5.inputEnabled = true;
    screen5.events.onInputUp.add(function() {
        $("#catchGame").show();
    }, this);

    screen6 = game.add.sprite(6000, 50, 'screen6');
    screen6.inputEnabled = true;
    screen6.events.onInputUp.add(function() {
        $("#endGame").show();
    }, this);

    sprite = game.add.sprite(156, 200, 'phaser');
    sprite.animations.add('left', [5, 6, 7, 8, 9], 3, true);
    sprite.animations.add('right', [0, 1, 2, 3, 4], 3, true);

    sprite.fixedToCamera = true;
    sprite.cameraOffset.setTo(300, 350);



    coinContainer = game.add.group();
    coinContainer.enableBody = true;
    coinContainer.physicsBodyType = Phaser.Physics.ARCADE;

    cursors = game.input.keyboard.createCursorKeys();
}

function coinFactory() {
    // coinContainer = game.add.emitter(game.camera.x + 1000, 200, 500);
    // coinContainer.makeParticles('coin');
    // coinContainer.start(false, 8000, 10);

    // setTimeout(function() {
    //     coinContainer.on = false;
    // }, 1000);
    for (var i = 0; i < 100; i++) {
        var pineapple = coinContainer.create(game.camera.x + 1000, 50, 'coin');

        //This allows your sprite to collide with the world bounds like they were rigid objects
        pineapple.body.collideWorldBounds = true;
        pineapple.body.gravity.x = Math.random() * 100 - 200;
        pineapple.body.gravity.y = 100 + Math.random() * 300;
    }
}

function toyFactory() {
    toyContainer = game.add.group();
    toyContainer.enableBody = true;
    toyContainer.physicsBodyType = Phaser.Physics.ARCADE;
    toy1 = toyContainer.create(game.camera.x + 1100, 200, 'toy1');
    toy1.animations.add('show', [0, 1, 2, 3], 4, true);
    toy2 = toyContainer.create(game.camera.x + 800, 430, 'toy2');
    toy2.animations.add('show', [0, 1, 2, 3], 10, true);
    toy3 = toyContainer.create(game.camera.x + 1000, 450, 'toy3');
    toy3.animations.add('show', [0, 1, 2, 3], 4, true);
    toy4 = toyContainer.create(game.camera.x + 1250, 400, 'toy4');
    toy4.animations.add('show', [0, 1, 2, 3], 4, true);

    toy1.animations.play('show');
    toy2.animations.play('show');
    toy3.animations.play('show');
    toy4.animations.play('show');

}

function update() {

    if (cursors.up.isDown) {
        game.camera.y -= 2;
    } else if (cursors.down.isDown) {
        game.camera.y += 2;
    } else if (cursors.left.isDown) {
        game.camera.x -= 2;
        sprite.animations.play('left');
    } else if (cursors.right.isDown) {
        game.camera.x += 2;
        sprite.animations.play('right');
    } else {
        sprite.animations.stop();
    }

}

function render() {
    // game.debug.bodyInfo(p, 32, 320);
    // game.debug.body(sprite);

}

document.onkeydown = function(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 119:
            $('#opening').get(0).play();
            break;
        case 118:
            $('#opening').addClass("dsappearAnimation");
            setTimeout(function() {
                $('#opening').removeClass("dsappearAnimation");
                $('#opening').hide();
            }, 1000);
            break;
        case 77:
            coinFactory();
            break;
        case 84:
            toyFactory();
            break;
        case 68:
            if (toyContainer != null) {
                game.world.remove(toyContainer);
                toyContainer = null;
            }
            break;
        case 109:
            coinContainer.on = false;
            break;

        case 96:
            $("#catchGame").hide();
            $("#endGame").hide();
            break;


        case 113:
            $('#ipod').show();
            break;
    }
}
