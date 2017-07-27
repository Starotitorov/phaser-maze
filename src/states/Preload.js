class Preload extends Phaser.State {

	preload() {
        this.load.tilemap('map', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles.png');
        this.load.spritesheet('player', 'assets/player.png', 32, 32);
        this.load.spritesheet('flower', 'assets/flower.png', 34, 46);
	}

	create() {
		this.game.state.start('Main');
	}

}

export default Preload;
