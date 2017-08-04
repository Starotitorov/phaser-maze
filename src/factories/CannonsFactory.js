import Cannon from '../objects/Cannon';

export default class CannonsFactory {
    constructor(game, map) {
        this.game = game;
        this.map = map;
    }

    getCannons() {
        const cannons = new Phaser.Group(this.game);
        const gameWidth = this.game.width;
        const gameHeight = this.game.height;
        const tileWidth = this.map.tileWidth;
        const tileHeight = this.map.tileHeight;

        cannons.add(this._createCannon(gameWidth - 3.5 * tileWidth, gameHeight - 3.5 * tileHeight));
        cannons.add(this._createCannon(gameWidth - 5.5 * tileWidth, 3.5 * tileHeight));

        return cannons;
    }

    _createCannon(x, y) {
        return new Cannon({
            game: this.game,
            x,
            y,
            asset: 'cannon',
            shootInterval: 4
        });
    }
}
