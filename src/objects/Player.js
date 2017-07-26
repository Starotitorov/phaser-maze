const PLAYER_SPEED = 150;

export default class Player extends Phaser.Sprite {
    constructor({ game, x, y, asset, frame, speed, animations }) {
        super(game, x, y, asset, frame);

        this.game = game;

        this.anchor.set(0.5);

        this.game.physics.arcade.enable(this);

        this.animations.add('down', animations.down, 10, true);
        this.animations.add('left', animations.left, 10, true);
        this.animations.add('right', animations.right, 10, true);
        this.animations.add('up', animations.up, 10, true);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.speed = speed;
    }

    update() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (this.cursors.left.isDown) {
            this.body.velocity.x = -this.speed;

            this.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            this.body.velocity.x = this.speed;

            this.animations.play('right');
        }
        else if (this.cursors.up.isDown) {
            this.body.velocity.y = -this.speed;

            this.animations.play('up');
        }
        else if (this.cursors.down.isDown) {
            this.body.velocity.y = this.speed;

            this.animations.play('down');
        } else {
            this.animations.stop();
        }
    }
}
