var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload () {

    game.load.image('player', 'assets/games/defender/ship.png');
    game.load.image('star', 'assets/demoscene/star2.png');
    game.load.image('baddie', 'assets/sprites/space-baddie.png');
    game.load.atlas('lazer', 'assets/games/defender/laser.png', 'assets/games/defender/laser.json');

}