var game = new Phaser.Game(640	,640 , Phaser.CANVAS , '');

game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
// Load levels

game.state.add('Level1', Game.Level1);
game.state.add('FairyLevel', Game.FairyLevel);


/**
 * Start boot
 */
game.onStart = function () {
    game.state.start('Boot');
};

