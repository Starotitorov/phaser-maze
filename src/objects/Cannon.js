import Bullet from './Bullet';

export default class Flower extends Phaser.Sprite {
    constructor({game, x, y, asset, shootInterval}) {
        super(game, x, y, asset);

        this.game = game;

        this.game.physics.arcade.enable(this);

        this.anchor.set(0.5);
        this.body.immovable = true;

        this.shootTime = 0;
        this.shootInterval = shootInterval;
        this.turretCenter = this.y - 3;

        this.bullets = this.game.add.group();

        this.flame = this.game.add.sprite(0, 0, 'flame');
        this.flame.anchor.set(0.5);
        this.flame.reset(this.left, this.turretCenter);
        this.flame.visible = false;
    }

    update() {
        this.shootTime += this.game.time.physicsElapsed;

        if (this.shootTime > this.shootInterval) {
            this._shoot();

            this.shootTime = 0;
        }
    }

    _shoot() {
        let bullet = this.bullets.getFirstExists(false);

        if (!bullet) {
            bullet = new Bullet({
                game: this.game,
                x: this.left,
                y: this.turretCenter,
                asset: 'bullet',
                speed: -200
            });
            this.bullets.add(bullet);
        } else {
            bullet.reset(this.left, this.turretCenter);
            bullet.body.velocity.x = -200;
        }

        this.flame.alpha = 1;
        this.flame.visible = true;
        this.game.add.tween(this.flame).to( { alpha: 0 }, 100, 'Linear', true);
    }

    destroy() {
        this.bullets.destroy();
        this.flame.destroy();

        super.destroy();
    }
}

