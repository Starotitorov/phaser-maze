import Player from '../objects/Player';

const PLAYER_SPEED = 150;

export default class PlayerFactory {
    constructor(game) {
        this.game = game;
    }

    getPlayer() {
        return new Player({
            game: this.game,
            x: 72,
            y: 72,
            asset: 'player',
            frame: 0,
            speed: PLAYER_SPEED,
            animations: {
                down: [0, 1, 2],
                left: [3, 4, 5],
                right: [6, 7, 8],
                up: [9, 10, 11],
            }
        });
    }
}
