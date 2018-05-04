Game.QueenLevel = function(game){

    this.player = null ;
    this.queen = null ;
    this.rock = null ;
    this.rock1 = null ;
    this.rock2 = null ;
    this.rock3 = null ;
    this.playerSpeed = 150 ;
    this.compositeController = new CompositeController();
    this.factory = new GamePartsFactory(this);
    this.winText = "";

};

Game.QueenLevel.prototype = {

    preload : function(){
        
        this.load.image('queen','../assets/queen.png');
        this.load.image('rock','../assets/fireball.png');
    },

    create : function(){

        this.add.tileSprite(0, 0, 640, 640, 'background_3');
        this.player = this.add.sprite(75 , 350 , 'player');
        this.player.anchor.setTo(0.5,0.5);
        this.player.animations.add('idle' , [0,1] , 1 , true);
        this.player.animations.add('jump' , [2] , 1 , true);
        this.player.animations.add('run' , [3,4,5,6,7,8,9] , 7 , true);
        this.physics.arcade.enable(this.player);
        this.camera.follow(this.player);
        this.player.body.collideWorldBounds = true ;

        this.queen = this.add.sprite(550 , 200 , 'queen');
        this.queen.anchor.setTo(0.5,0.5);
        this.queen.scale.setTo(0.2,0.2);
        this.physics.arcade.enable(this.queen);
        this.queen.body.collideWorldBounds = true ;

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.rock = this.add.sprite(200 , 200 , 'rock');
        this.rock.anchor.setTo(0.5,0.5);
        this.rock.scale.setTo(0.2,0.2);
        this.add.tween(this.rock).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        this.physics.enable(this.rock, Phaser.Physics.ARCADE);
        this.rock.body.velocity.setTo(300,300);
        this.rock.body.collideWorldBounds = true;
        this.rock.body.bounce.set(1);

        this.rock1 = this.add.sprite(400 , 350 , 'rock');
        this.rock1.anchor.setTo(0.2,0.2);
        this.rock1.scale.setTo(0.2,0.2);
        this.add.tween(this.rock1).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        this.physics.enable(this.rock1, Phaser.Physics.ARCADE);
        this.rock1.body.velocity.setTo(150,150);
        this.rock1.body.collideWorldBounds = true;
        this.rock1.body.bounce.set(1);

        this.rock2 = this.add.sprite(400 , 250 , 'rock');
        this.rock2.anchor.setTo(0.2,0.2);
        this.rock2.scale.setTo(0.2,0.2);
        this.add.tween(this.rock2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        this.physics.enable(this.rock2, Phaser.Physics.ARCADE);
        this.rock2.body.velocity.setTo(150,150);
        this.rock2.body.collideWorldBounds = true;
        this.rock2.body.bounce.set(1);

        this.winText = this.add.text(this.world.centerX , this.world.centerY , 'You Win!',  {font : '32px Arial' , fill : '#fff'} ) ;
        this.winText.visible = false ;

        this.loseText = this.add.text(this.world.centerX , this.world.centerY , 'You Lose!',  {font : '32px Arial' , fill : '#fff'} ) ;
        this.loseText.visible = false ;

        this.compositeController.add(new Command(this, function (game) {
            var right = game.input.keyboard.addKey(Phaser.Keyboard.D);

            if(right.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(1,1);
                game.player.body.velocity.x += game.playerSpeed ;
                setTimeout(function(){ game.player.animations.play('idle'); }, 300);
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            var left = game.input.keyboard.addKey(Phaser.Keyboard.A);

            if( left.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(-1,1);
                game.player.body.velocity.x -= game.playerSpeed ;
                setTimeout(function(){ game.player.animations.play('idle'); }, 300);
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            var up = game.input.keyboard.addKey(Phaser.Keyboard.W);

            if(up.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(1,1);
                game.player.body.velocity.y -= game.playerSpeed ;
                setTimeout(function(){ game.player.animations.play('idle'); }, 300);
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            var down = game.input.keyboard.addKey(Phaser.Keyboard.S);
            if(down.isDown){
                game.player.animations.play('run');
                game.player.scale.setTo(-1,1);
                game.player.body.velocity.y += game.playerSpeed ;
                setTimeout(function(){ game.player.animations.play('idle'); }, 300);
            }
        }));
    },

    update : function(){
          
          this.player.body.velocity.x = 0 ;
          this.player.body.velocity.y = 0 ;
          this.physics.arcade.collide(this.player, this.rock, this.killplayer, null, this);
          this.physics.arcade.collide(this.player, this.rock1, this.killplayer, null, this);
          this.physics.arcade.collide(this.player, this.rock2, this.killplayer, null, this);
          this.physics.arcade.collide(this.player, this.queen, this.killrock, null, this);
          this.compositeController.update();
    },

    killplayer : function(){
        this.player.kill();
        this.loseText.visible = true ;
        setTimeout(function(){ 
            location.reload();     
        }, 3000); 
    },

    killrock : function(){
        this.rock.kill();
        this.rock1.kill();
        this.rock2.kill();
        this.winText.visible = true;
    }
}