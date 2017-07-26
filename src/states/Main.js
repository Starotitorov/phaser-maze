import PlayerFactory from '../factories/PlayerFactory';

class Main extends Phaser.State {
    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tiles', 'tiles');

        this.layer = this.map.createLayer('layer');

        this.map.setCollision(10, true, this.layer);
        
        this.player = new PlayerFactory(this.game).getPlayer();

        this.game.stage.addChild(this.player);
	}

	update() {
        this.physics.arcade.collide(this.player, this.layer);

        this.player.update();
    }
}

export default Main;
