export default class Bullet extends Phaser.Sprite {
    constructor({game, x, y, asset, speed}) {
        super(game, x, y, asset);

        this.game = game;

        this.game.physics.arcade.enable(this);

        this.anchor.set(0.5);
        this.body.velocity.x = speed;
    }
}
