import TextButton from '../components/TextButton';

export default class Menu extends Phaser.State {
    create() {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.background.width = this.game.width;
        this.background.height = this.game.height;

        this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Maze', {
            font: '36px Tahoma',
            fill: 'white',
            align: 'center'
        });
        this.title.anchor.setTo(0.5);

        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY-30,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'Play',
            style: {
                font: '16px Verdana',
                fill: 'white',
                align: 'center'
            }
        });

        this.start.onInputDown.add(()=>{
            this.game.state.start('Main');
        });

        this.panel = this.add.group();
        this.panel.add(this.title);
        this.panel.add(this.start);
    }
}
