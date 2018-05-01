Game.Level1 = function(game){

    this.map = null ;
    this.layer = null;
    this.player = null ;
    this.playerSpeed = 150 ;
    this.enemies = null ;
    this.enemies2 = null;
    this.enemies3 = null;
    this.enemies4 = null;
    this.bomb = null ;
    this.bombTime = 0 ;
    this.fireButton = null ;
    this.score = 0 ;
    this.scoreText = null ;
    this.winText = null;
    this.factory = new GamePartsFactory(this);
    this.compositeController = new CompositeController(this);

};




Game.Level1.prototype = {
	preload : function(){
		//Load Enemy
		this.load.image('enemy','../assets/enemynew.png');
		this.load.image('bomb','../assets/bomb.png');
	},


	create : function(){
		
		this.add.tileSprite(0, 0, 640, 640, 'background');
		this.map = this.add.tilemap('map');
		this.map.addTilesetImage('tileset');


		this.player = this.add.sprite(75 , 800 , 'player');
		this.player.anchor.setTo(0.5,0.5);
		this.player.animations.add('idle' , [0,1] , 1 , true);
		this.player.animations.add('jump' , [2] , 1 , true);
		this.player.animations.add('run' , [3,4,5,6,7,8,9] , 7 , true);
		this.physics.arcade.enable(this.player);
		this.camera.follow(this.player);
		this.player.body.collideWorldBounds = true ;


	    this.bomb = this.factory.create("bombs");
	    this.enemies = this.factory.create("enemies");
	    this.enemies2 = this.factory.create("enemies");
	    this.enemies3 = this.factory.create("enemies");
	    this.enemies4 = this.factory.create("enemies");

	    this.createEnemies();
		

		this.layer = this.map.createLayer(0);
		this.layer.resizeWorld();

		
		this.map.setCollisionBetween(0 , 500);
		this.map.setCollision([155,135] , false) ;

		this.map.setTileIndexCallback(0 , this.resetPlayer , this );
		this.map.setTileIndexCallback(2 , this.getCoin , this );
		


		this.compositeController.add(new Command(this, function (game) {
		    var right = game.input.keyboard.addKey(Phaser.Keyboard.D);

		    if(right.isDown){

                game.player.animations.play('run');
                game.player.scale.setTo(1,1);
                game.player.body.velocity.x += game.playerSpeed ;
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            var left = game.input.keyboard.addKey(Phaser.Keyboard.A);

            if( left.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(-1,1);
                game.player.body.velocity.x -= game.playerSpeed ;
            }
        }));



        this.compositeController.add(new Command(this, function (game) {
            var up = game.input.keyboard.addKey(Phaser.Keyboard.W);

            if(up.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(1,1);
                game.player.body.velocity.y -= game.playerSpeed ;
            }

        }));


        this.compositeController.add(new Command(this, function (game) {
            var down = game.input.keyboard.addKey(Phaser.Keyboard.S);

            if(down.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(-1,1);
                game.player.body.velocity.y += game.playerSpeed ;
            }

        }));


        this.compositeController.add(new Command(this, function (game) {
            var fireButtonI = game.input.keyboard.addKey(Phaser.Keyboard.I);


            if(fireButtonI.isDown){
                if(game.time.now > game.bombTime){
                	var bomb = game.factory.createBomb(game.bomb);

                    if(bomb){
                        bomb.reset(game.player.x , game.player.y);
                        bomb.body.velocity.y = -200 ;
                        game.bombTime = game.time.now + 1000 ;
                    }
                }
            }

        }));


        this.compositeController.add(new Command(this, function (game) {
            var fireButtonJ = game.input.keyboard.addKey(Phaser.Keyboard.J);


            if(fireButtonJ.isDown){
                if(game.time.now > game.bombTime){
                	var bomb = game.factory.createBomb(game.bomb);

                    if(bomb){
                        bomb.reset(game.player.x , game.player.y);
                        bomb.body.velocity.x = -200 ;
                        game.bombTime = game.time.now + 1000 ;
                    }
                }
            }

        }));

        this.compositeController.add(new Command(this, function (game) {
            var fireButtonK = game.input.keyboard.addKey(Phaser.Keyboard.K);


            if(fireButtonK.isDown){
                if(game.time.now > game.bombTime){
                	var bomb = game.factory.createBomb(game.bomb);

                    if(bomb){
                        bomb.reset(game.player.x , game.player.y);
                        bomb.body.velocity.y = +200 ;
                        game.bombTime = game.time.now + 1000 ;
                    }
                }
            }
        }));


        this.compositeController.add(new Command(this, function (game) {
            var fireButtonL = game.input.keyboard.addKey(Phaser.Keyboard.L);

            if(fireButtonL.isDown){
                if(game.time.now > game.bombTime){
                	var bomb = game.factory.createBomb(game.bomb);

                    if(bomb){
                        bomb.reset(game.player.x , game.player.y);
                        bomb.body.velocity.x = +200 ;
                        game.bombTime = game.time.now + 1000 ;
                    }
                }
            }
        }));

        this.scoreText = this.add.text(800,50,'Score' , {font : '32px Arial' , fill : '#fff'});

        this.compositeController.add(new Command(this, function (game) {
            game.scoreText.text = 'Score : ' + this.score ;

            if(game.score === 8){
                game.winText.visible = true ;
                game.scoreText.visible = false ;
            }
        }));

		this.winText = this.add.text(this.world.centerX , this.world.centerY , 'You Win!',  {font : '32px Arial' , fill : '#fff'} ) ;
		this.winText.visible = false ;

	},

	update : function(){
		this.physics.arcade.collide(this.player , this.layer);

		this.player.body.velocity.x = 0 ;
		this.player.body.velocity.y = 0 ;


		this.physics.arcade.overlap(this.bomb , this.enemies , this.collisionHandler , null , this) ;
		this.physics.arcade.overlap(this.bomb , this.enemies2 , this.collisionHandler , null , this) ;
		this.physics.arcade.overlap(this.bomb , this.enemies3 , this.collisionHandler , null , this) ;
		this.physics.arcade.overlap(this.bomb , this.enemies4 , this.collisionHandler , null , this) ;
		this.physics.arcade.overlap(this.player , this.enemies , this.collisionHandlerForPlayer , null , this) ;
		this.physics.arcade.overlap(this.player , this.enemies2 , this.collisionHandlerForPlayer , null , this) ;
		this.physics.arcade.overlap(this.player , this.enemies3 , this.collisionHandlerForPlayer , null , this) ;
		this.physics.arcade.overlap(this.player , this.enemies4 , this.collisionHandlerForPlayer , null , this) ;
 
        this.compositeController.update();


	},

	resetPlayer: function(){
		this.player.reset(100 , 700 );
	},

	getCoin : function(){
		this.map.putTile(-1 , this.layer.getTileX(this.player.x), this.layer.getTileY(this.player.y)) ;
	},

	collisionHandler : function(bomb , enemy ){
		console.log('Collision handler called '); 
		bomb.kill();
		enemy.kill() ; 
		this.score ++ ;
		console.log("Score " , this.score ) ;
	},

	collisionHandlerForPlayer : function(player , enemy){
		this.resetPlayer() ; 
	},

	createEnemies : function(){
		var enemy = this.factory.createEnemy(this.enemies);
		var enemy2 = this.factory.createEnemy(this.enemies);
		var enemy3 = this.factory.createEnemy(this.enemies2);
		// var enemy4 = this.factory.createEnemy(this.enemies2);
		// var enemy5 = this.factory.createEnemy(this.enemies3);
		// var enemy6 = this.factory.createEnemy(this.enemies3);
		// var enemy7 = this.factory.createEnemy(this.enemies4);
		// var enemy8 = this.factory.createEnemy(this.enemies4);



		var tween2 = this.add.tween(enemy2).to({x : 0, y:200 } , 1000 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		tween2.onLoop.add(this.descend , this);
		// var tween4 = this.add.tween(enemy4).to({x : 500 } , 2000 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		// tween4.onLoop.add(this.descend , this);
		// var tween6 = this.add.tween(enemy6).to({x : 400 } , 2000 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		// tween6.onLoop.add(this.descend , this);
		// var tween8 = this.add.tween(enemy8).to({x : 200 } , 2000 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		// tween8.onLoop.add(this.descend , this);


		var tween = this.add.tween(enemy).to({x : 100 } , 200 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		tween.onLoop.add(this.descend , this);
		var tween3 = this.add.tween(enemy3).to({y : 220 } , 800 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		tween3.onLoop.add(this.descend , this);
		// var tween5 = this.add.tween(enemy5).to({y : 600 } , 2000 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		// tween5.onLoop.add(this.descend , this);
		// var tween7 = this.add.tween(enemy7).to({y : 700 } , 2000 , Phaser.Easing.Linear.None, true , 0 , 1000, true);
		// tween7.onLoop.add(this.descend , this);
	},

	descend : function(){
		this.enemies.y =+ 10 ;
	}
}; 