class Game extends Phaser.Game {
  constructor(parent) {
      /**
       * Define
       */
    super(480, 480,
          Phaser.AUTO, parent, undefined, undefined, false);

    this.loadStates();

    this.concatLevels();

    // this is where the application starts
    this.startGame( 'state-boot' );
  }


  loadStates(){
      // 1.
      this.state.add('state-boot', InitialState, false);
      // 2.
      this.state.add('state-preloader', PreloaderState, false);

      // 3.
      this.state.add('state-intro', IntroState, false);

      // 4.

      this.state.add('state-main-menu', MainMenuState, false);



  }

  concatLevels(){
      var i = 1;

      while (i <= 1){
          this.state.add('state-level-'.concat(i.toString()), (eval('Stage' + i)), false);
          i += 1;
      }
  }

  startGame(name){

      this.state.start(name);
  }
}
