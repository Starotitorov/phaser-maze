import PlayerFactory from '../factories/PlayerFactory';
import FlowersFactory from '../factories/FlowersFactory';
import CannonsFactory from '../factories/CannonsFactory';

class Main extends Phaser.State {
    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tiles', 'tiles');
        this.layer = this.map.createLayer('layer');

        this.finishTileBitmap = this.add.bitmapData(48, 48);
        this.finishTileBitmap.ctx.fillStyle = '#000';
        this.finishTileBitmap.ctx.fillRect(
            0,
            0,
            this.finishTileBitmap.width,
            this.finishTileBitmap.height
        );

        this.finishTile = this.add.sprite(this.game.width - 24, 216, this.finishTileBitmap);
        this.finishTile.anchor.set(0.5);
        this.finishTile.alpha = 0;
        this.game.physics.arcade.enable(this.finishTile);

        this.map.setCollision(71, true, this.layer);

        const playerFactory = new PlayerFactory(this.game);
        const flowersFactory = new FlowersFactory(this.game, this.map);
        const cannonsFactory = new CannonsFactory(this.game, this.map);

        this.player = playerFactory.getPlayer();
        this.flowers = flowersFactory.getFlowers();
        this.cannons = cannonsFactory.getCannons();

        this.game.stage.addChild(this.player);
        this.game.stage.addChild(this.flowers);
        this.game.stage.addChild(this.cannons);

        this.collectedFlowersCount = 0;
        this.totalFlowersCount = this.flowers.length;
    }

    update() {
        this.physics.arcade.collide(this.player, this.layer);
        this.physics.arcade.collide(this.player, this.flowers, this._collectFlower.bind(this));
        this.physics.arcade.overlap(this.player, this.finishTile, this._finishGame.bind(this));
        this.physics.arcade.collide(this.player, this.cannons);
        this.cannons.forEach(
            cannon => {
                this.game.physics.arcade.overlap(
                    this.player,
                    cannon.bullets,
                    this._crashPlayer.bind(this),
                );
                this.game.physics.arcade.collide(this.layer, cannon.bullets, this._removeBullet.bind(this));
            }
        );
    }

    _collectFlower(player, flower) {
        flower.destroy();

        this.collectedFlowersCount++;
    }

    _removeBullet(bullet) {
        bullet.kill();
    }

    _crashPlayer(player, bullet) {
        this.player.destroy();
        bullet.kill();

        let timer = this.game.time.create(this.game, true);
        timer.add(3000, () => {
            this.flowers.destroy();
            this.cannons.destroy();

            this._goToGameFinish('Game over');
        });
        timer.start();
    }

    _finishGame() {
        this.player.destroy();
        this.flowers.destroy();
        this.cannons.destroy();

        this._goToGameFinish('You win!');
    }

    _goToGameFinish(result) {
        this.game.state.start(
            'GameFinish',
            true,
            false,
            {
                collected: this.collectedFlowersCount,
                total: this.totalFlowersCount,
                result
            }
        );
    }
}

export default Main;
