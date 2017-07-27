import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Main from 'states/Main';
import GameFinish from 'states/GameFinish';
import Menu from 'states/Menu';

class Game extends Phaser.Game {

	constructor() {

		super(960, 720, Phaser.AUTO);

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Main', Main, false);
        this.state.add('Menu', Menu, false);
		this.state.add('GameFinish', GameFinish, false);

		this.state.start('Boot');
	}

}

new Game();
