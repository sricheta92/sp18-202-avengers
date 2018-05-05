Game.FairyLevel = function(game){

    this.count = 0;
    // end score count
    this.rocks = null;
    this.player = null;
    this.map = null;
    this.factory = new GamePartsFactory(this);
    this.compositeController = new CompositeController();
    this.fireballs = null;
    this.scoreText = null;
};


Game.FairyLevel.prototype = {
    preload: function(){

    },

    create: function(){
        this.add.tileSprite(0, 0, 640, 640, 'fairy_bg');
        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tileset');

        // load pla
        this.player = this.add.sprite(75 , 800 , 'player');
        this.player.anchor.setTo(0.5,0.5);
        this.player.animations.add('idle' , [0,1] , 1 , true);
        this.player.animations.add('jump' , [2] , 1 , true);
        this.player.animations.add('run' , [3,4,5,6,7,8,9] , 7 , true);
        this.physics.arcade.enable(this.player);
        this.camera.follow(this.player);
        this.player.body.collideWorldBounds = true ;

        this.rocks = this.factory.create("rocks");
        this.fireballs = this.factory.create("fireballs");

        this.fireballs.x = 0;
        this.fireballs.y = 0;

        this.rocks.x = 0;
        this.rocks.y = 0;

        this.compositeController.add(new Command(this, function (game) {
            var right = game.input.keyboard.addKey(Phaser.Keyboard.D);

            if(right.isDown){
                if(game.player.y < 680)
                    game.player.x += 5;
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            var left = game.input.keyboard.addKey(Phaser.Keyboard.A);

            if(left.isDown){
                if(game.player.x > 0)
                    game.player.x -= 5;
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            if(game.count === 5) {
                game.game.screenStateController.next(game.game);
            }
        }));

        this.compositeController.add(new Command(this, function (game) {
            var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

            if(space.isDown){

                var fireball = game.factory.createFireball(game.fireballs);

                if(fireball) {
                    fireball.reset(game.player.x, game.player.y);
                    fireball.body.velocity.y = -200;
                }
            }
        }));


        this.scoreText = this.add.text(50,0,'Score:' + this.count , {font : '32px Arial' , fill : '#fff'});

        this.scoreText.visible = true;

    },

    collisionHandler : function(fireball , rocks){
        console.log('Collision handler called ');
        fireball.kill();
        rocks.kill() ;
        this.count ++ ;
        console.log("Score " , this.count ) ;
        this.scoreText.text = 'Score:' + this.count;

        if(this.count === 20){
            // winner

        }
    },

    collisionHandlerForPlayer : function(player , rocks){
        console.log("hit!");
        // Reset
        this.count = 0;
        this.scoreText.text = 'Score:' + this.count;
        rocks.kill();
        this.player.x = 0;

        this.rocks.removeAll();

    },


    update: function () {

        this.factory.createRock(this.rocks);

        this.compositeController.update();

        this.rocks.forEach(function (rock) {
            rock.y = rock.y + 1;

            if(rock.y === 680){
                rock.destroy();
            }
        });


        this.physics.arcade.collide(this.player , this.rocks, this.collisionHandlerForPlayer , null , this) ;

        this.physics.arcade.collide(this.fireballs , this.rocks, this.collisionHandler, null, this);
    }


};