import PlayerFactory from '../factories/PlayerFactory';
import FlowersFactory from '../factories/FlowersFactory';

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

        this.player = playerFactory.getPlayer();
        this.flowers = flowersFactory.getFlowers();

        this.game.stage.addChild(this.player);
        this.game.stage.addChild(this.flowers);

        this.collectedFlowersCount = 0;
        this.totalFlowersCount = this.flowers.length;
    }

    update() {
        this.physics.arcade.collide(this.player, this.layer);
        this.physics.arcade.collide(this.player, this.flowers, this.collectFlower.bind(this));
        this.physics.arcade.overlap(this.player, this.finishTile, this.finishGame.bind(this));

        this.player.update();
    }

    collectFlower(player, flower) {
        flower.kill();

        this.collectedFlowersCount++;
    }

    finishGame() {
        this.player.kill();
        this.flowers.destroy();

        this.game.state.start(
            'GameFinish',
            true,
            false,
            {
                collected: this.collectedFlowersCount,
                total: this.totalFlowersCount
            }
        );
    }
}

export default Main;
