class Stage1 extends BaseLevel {
  constructor() {
    super();

    this.editorText = `/**
 * I've been lost in these woods for days
 * before I stumbled upon a house that looked 
 * abandoned. Something about it felt wrong.
 *
 * The last bit of light was soon to disappear,
 * I had little choice but to stay the night.
 */
    
    
moveRight();
moveDown();`;
  }

  create() {
    super.create();

    this.player.scale.set(1.25);
    this.player.faceDown();

    this.objectives.push(new Objective('Get inside the house'));
  }

  update() {
    super.update();

    if (this._playerAtEnd) this.objectives[0].complete();
  }

  _loadMap() {
    const map = this.game.add.tilemap(Constants.STATES.LEVEL_PREFIX + 1);
    map.addTilesetImage(Constants.ASSET_KEYS.TILESET_IMAGE_FIELD_1_DARK);

    map.createLayer('ground1').resizeWorld();
    ['ground2', 'wall1', 'wall2'].forEach(layer => map.createLayer(layer));

    return map;
  }
}