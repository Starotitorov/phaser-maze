class Preload extends Phaser.State {

	preload() {
        this.load.tilemap('map', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles.png');
        this.load.spritesheet('player', 'assets/player.png', 32, 32);
        this.load.spritesheet('flower', 'assets/flower.png', 34, 46);
        this.load.atlasJSONArray('button', 'assets/button.png', 'assets/button.json');
        this.load.image('background', 'assets/background.jpg');
	}

	create() {
		this.game.state.start('Menu');
	}

}

export default Preload;
