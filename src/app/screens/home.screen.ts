

import {app} from "../app";
export class HomeScreen extends Phaser.State {
    constructor() {
        super();
    }

    preload() {
        this.load.image('butterfly', 'assets/butterfly.png');
    }

    create() {
        this.add.sprite(0, 0, 'butterfly');
    }

    update() {

    }

    render() {

    }
}