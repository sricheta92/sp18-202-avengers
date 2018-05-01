Game.Preloader = function(game){
	this.preloadBar  =  null 
} ;


Game.Preloader.prototype = {
	preload : function(){
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

		this.preloadBar.anchor.setTo(0.5 , 0.5);
		this.time.advancedTiming = true ; 

		this.load.setPreloadSprite(this.preloadBar);
		//Load All assets

		//this.load.tilemap('map', '../assets/GameTile.csv');
		this.load.tilemap('map', '../assets/Aman/Test.csv');
		this.load.image('tileset' , '../assets/Aman/Town_Objects.png');
		

		//this.load.image('drag' , '../assets/apple.jpg')

		// Load Player
		this.load.spritesheet('player' , '../assets/Player.png' , 24 , 26 );

		
		//Load Enemy
		this.load.image('enemy','../assets/enemy.jpg');
		this.load.image('enemyBullet','../assets/Bullet.jpg');

        this.load.image("background", "../assets/Aman/Town_Background.png");
        this.load.image('start','../assets/start.jpg');
		// this.load.image("background", "../assets/Aman/Town_Background.png");

        //Load fairy background - Huy Vo
        this.load.image('fairy_bg', "../assets/fairy/background.png");
        this.load.image('rock', "../assets/fairy/rock.png");
        this.load.image('fireball', '../assets/fireball.png');

	},

	create : function(){
		this.state.start('MainMenu') ;
	}
};