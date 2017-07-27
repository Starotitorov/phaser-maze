import TextButton from '../components/TextButton';

export default class GameFinish extends Phaser.State {
    init({ collected, total }) {
        this.collectedCount = collected;
        this.totalCount = total;
    }

    create() {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.background.width = this.game.width;
        this.background.height = this.game.height;

        this.title = new Phaser.Text(
            this.game,
            this.game.world.centerX,
            this.game.world.centerY - 200,
            'Congratulations!',
            {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            }
        );
        this.score = new Phaser.Text(
            this.game,
            this.game.world.centerX,
            this.game.world.centerY - 120,
            `You collect ${this.collectedCount} of ${this.totalCount} flowers`,
            {
                font: '24px Tahoma',
                fill: 'white',
                align: 'center'
            }
        );
        this.title.anchor.setTo(0.5);
        this.score.anchor.set(0.5);

        this.start = new TextButton({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY-30,
            asset: 'button',
            overFrame: 2,
            outFrame: 1,
            downFrame: 0,
            upFrame: 1,
            label: 'Go to menu',
            style: {
                font: '16px Verdana',
                fill: 'white',
                align: 'center'
            }
        });

        this.start.onInputDown.add(()=>{
            this.game.state.start('Menu');
        });

        this.panel = this.add.group();
        this.panel.add(this.title);
        this.panel.add(this.score);
        this.panel.add(this.start);
    }
}
