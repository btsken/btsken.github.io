var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() {
    game.load.tilemap('level3', 'img/cybernoid.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'img/CybernoidMap3BG_bank.png', 16, 16);
    game.load.spritesheet('phaser', 'img/hero.png', 32, 32);
}

var map;
var layer, block;
var cursors;
var sprite;
var emitter;

function create() {

    //  A Tilemap object just holds the data needed to describe the map (i.e. the json exported from Tiled, or the CSV exported from elsewhere).
    //  You can add your own data or manipulate the data (swap tiles around, etc) but in order to display it you need to create a TilemapLayer.
    map = game.add.tilemap('level3');

    map.addTilesetImage('CybernoidMap3BG_bank.png', 'tiles');

    layer = map.createLayer('ShoeBox Tile Grab');
    // block = map.createLayer('block');

    //  Basically this sets EVERY SINGLE tile to fully collide on all faces
    map.setCollisionByExclusion([7, 32, 35, 36, 47]);
    // block.resizeWorld();
    layer.resizeWorld();

    cursors = game.input.keyboard.createCursorKeys();

    sprite = game.add.sprite(32, 32, 'phaser');
    sprite.animations.add('up', [9, 10, 11], 10, true);
    sprite.animations.add('down', [0, 1, 2], 10, true);
    sprite.animations.add('left', [3, 4, 5], 10, true);
    sprite.animations.add('right', [6, 7, 8], 10, true);
    sprite.anchor.set(0.5);

    game.physics.enable(sprite);

    //  Because both our body and our tiles are so tiny,
    //  and the body is moving pretty fast, we need to add
    //  some tile padding to the body. WHat this does
    sprite.body.tilePadding.set(32, 32);

    game.camera.follow(sprite);
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.input.onDown.add(gofull, this);
}

function gofull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    } else {
        game.scale.startFullScreen();
    }
}

function update() {

    game.physics.arcade.collide(sprite, layer);

    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;


    if (sprite.body.x > 500) {
        
    }

    if (cursors.up.isDown) {
        sprite.body.velocity.y = -150;
        sprite.animations.play('up');
    } else if (cursors.down.isDown) {
        sprite.body.velocity.y = 150;
        sprite.animations.play('down');
    } else if (cursors.left.isDown) {
        sprite.body.velocity.x = -150;
        sprite.animations.play('left');
    } else if (cursors.right.isDown) {
        sprite.body.velocity.x = 150;
        sprite.animations.play('right');
    } else {
        sprite.animations.stop();
    }

    
}

function render() {
    game.debug.bodyInfo(sprite, 32, 420);
    game.debug.body(sprite);
}
