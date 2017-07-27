import PlayerFactory from '../factories/PlayerFactory';
import FlowersFactory from '../factories/FlowersFactory';

class Main extends Phaser.State {
    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tiles', 'tiles');
        this.layer = this.map.createLayer('layer');

        this.map.setCollision(10, true, this.layer);

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
        this.physics.arcade.collide(this.player, this.flowers, this.collectFlower);

        this.player.update();
    }

    collectFlower(player, flower) {
        flower.kill();

        this.collectedFlowersCount++;
    }
}

export default Main;
