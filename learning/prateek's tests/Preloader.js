Game.Preloader = function(game){
	this.game = game;
	this.preloadBar  =  null 
} ;


Game.Preloader.prototype = {
	preload : function(){
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

		this.preloadBar.anchor.setTo(0.5 , 0.5);
		this.time.advancedTiming = true ; 
		this.load.setPreloadSprite(this.preloadBar);
		this.load.tilemap('map', '../assets/Maps/Test.csv');
		this.load.image('tileset' , '../assets/Maps/Town_Objects.png');	
		this.load.spritesheet('player' , '../assets/Player.png' , 24 , 26 );
		this.load.image('enemy','../assets/enemy.jpg');
		this.load.image('enemyBullet','../assets/Bullet.jpg');
        this.load.image("background", "../assets/batman.jpg");
        this.load.image('start','../assets/start.jpg');
        this.load.image('fairy_bg', "../assets/fairy/background.png");
        this.load.image('rock', "../assets/fairy/rock.png");
        this.load.image('fireball', '../assets/fireball.png');
        this.load.image('background_3', "../assets/BackLevel3.jpg");

	},

	create : function(){
		console.log(this.game.screenStateController.next(this.game));
        //game.screenStateController.next(game);
	}
};