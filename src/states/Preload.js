class Preload extends Phaser.State {

	preload() {
        this.load.tilemap('map', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles.png');
        this.load.spritesheet('player', 'assets/player.png', 32, 32);
        this.load.spritesheet('flower', 'assets/flower.png', 34, 46);
        this.load.spritesheet('cannon', 'assets/cannon.png', 48, 32);
        this.load.spritesheet('bullet', 'assets/bullet.png', 28, 18);
        this.load.spritesheet('flame', 'assets/flame.png', 27, 32);
        this.load.spritesheet('bam', 'assets/bam.png', 54, 54);
        this.load.atlasJSONArray('button', 'assets/button.png', 'assets/button.json');
        this.load.image('background', 'assets/background.jpg');
	}

	create() {
		this.game.state.start('Menu');
	}

}

export default Preload;
