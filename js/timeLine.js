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
    game.load.image('stage', 'img/stage.jpg');
    game.load.spritesheet('phaser', 'img/wing2.png', 161, 400);
    game.load.image('screen', 'img/screen.jpg');
    game.load.image('coin', 'img/coin.png');

    game.load.spritesheet('toy1', 'img/pixar/nemo.png', 153, 112);
    game.load.spritesheet('toy2', 'img/pixar/speedy.png', 159, 121);
    game.load.spritesheet('toy3', 'img/pixar/WALLE.png', 158, 161);
    game.load.spritesheet('toy4', 'img/pixar/woody.png', 151, 269);
}

var stage, screen, sprite, screen2, toy1, toy2, toy3, toy4;
var cursors, emitter;
var coinContainer, toyContainer;

function create() {
    game.world.setBounds(0, -300, 6000, 6000);

    stage = game.add.sprite(0, 0, 'stage');

    screen = game.add.sprite(500, 50, 'screen');
    screen.inputEnabled = true;
    screen.events.onInputUp.add(function() {
        $("#ipod").show();
    }, this);

    screen2 = game.add.sprite(1500, 50, 'screen');
    screen2.inputEnabled = true;
    screen2.events.onInputUp.add(function() {
        $('#macI').dialog({
            width: 700
        });
    }, this);

    sprite = game.add.sprite(156, 200, 'phaser');
    sprite.animations.add('left', [5, 6, 7, 8, 9], 3, true);
    sprite.animations.add('right', [0, 1, 2, 3, 4], 3, true);

    sprite.fixedToCamera = true;
    sprite.cameraOffset.setTo(300, 350);

    toyContainer = game.add.group();
    toyContainer.enableBody = true;
    toyContainer.physicsBodyType = Phaser.Physics.ARCADE;

    coinContainer = game.add.group();
    coinContainer.enableBody = true;
    coinContainer.physicsBodyType = Phaser.Physics.ARCADE;

    cursors = game.input.keyboard.createCursorKeys();
}

function coinFactory() {
    for (var i = 0; i < 100; i++) {
        var pineapple = coinContainer.create(game.camera.x + 1000, 50, 'coin');

        //This allows your sprite to collide with the world bounds like they were rigid objects
        pineapple.body.collideWorldBounds = true;
        pineapple.body.gravity.x = Math.random() * 100 - 200;
        pineapple.body.gravity.y = 100 + Math.random() * 300;
    }
}

function toyFactory() {
    toy1 = toyContainer.create(game.camera.x + 1100, 300, 'toy1');
    toy1.animations.add('show', [0, 1, 2, 3], 3, true);
    toy2 = toyContainer.create(game.camera.x + 800, 630, 'toy2');
    toy2.animations.add('show', [0, 1, 2, 3], 10, true);
    toy3 = toyContainer.create(game.camera.x + 1000, 550, 'toy3');
    toy3.animations.add('show', [0, 1, 2, 3], 3, true);
    toy4 = toyContainer.create(game.camera.x + 1250, 450, 'toy4');
    toy4.animations.add('show', [0, 1, 2, 3], 3, true);

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
        case 77:
            coinFactory();
            break;
        case 84:
            toyFactory();
            break;
    }
}
