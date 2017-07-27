export default class FlowersFactory {
    constructor(game, map) {
        this.game = game;
        this.map = map;
    }

    getFlowers() {
        const flowers = new Phaser.Group(this.game);
        const tileWidth = this.map.tileWidth;
        const tileHeight = this.map.tileHeight;

        flowers.enableBody = true;

        flowers.create(1.5 * tileWidth, this.game.height - 1.5 * tileHeight, 'flower');
        flowers.create(8.5 * tileWidth, 1.5 * tileHeight, 'flower');
        flowers.create(this.game.width - 5.5 * tileWidth, 5.5 * tileHeight, 'flower');
        flowers.create(3.5 * tileWidth, this.game.height - 7.5 * tileHeight, 'flower');
        flowers.create(this.game.width - 3.5 * tileWidth, this.game.height - 3.5 * tileHeight, 'flower');
        flowers.create(this.game.width - 2.5 * tileWidth, 4.5 * tileHeight, 'flower');

        flowers.setAll('anchor.x', 0.5);
        flowers.setAll('anchor.y', 0.5);

        return flowers;
    }
}
