import Flower from '../objects/Flower';

export default class FlowersFactory {
    constructor(game, map) {
        this.game = game;
        this.map = map;
    }

    getFlowers() {
        const flowers = new Phaser.Group(this.game);
        const gameWidth = this.game.width;
        const gameHeight = this.game.height;
        const tileWidth = this.map.tileWidth;
        const tileHeight = this.map.tileHeight;

        flowers.add(this._createFlower(1.5 * tileWidth, gameHeight - 1.5 * tileHeight));
        flowers.add(this._createFlower(8.5 * tileWidth, 1.5 * tileHeight));
        flowers.add(this._createFlower(gameWidth - 5.5 * tileWidth, 5.5 * tileHeight));
        flowers.add(this._createFlower(3.5 * tileWidth, gameHeight - 7.5 * tileHeight));
        flowers.add(this._createFlower(gameWidth - 3.5 * tileWidth, gameHeight - 3.5 * tileHeight));
        flowers.add(this._createFlower(gameWidth - 2.5 * tileWidth, 4.5 * tileHeight));

        return flowers;
    }

    _createFlower(x, y) {
        return new Flower({
            game: this.game,
            x,
            y,
            asset: 'flower'
        });
    }
}
