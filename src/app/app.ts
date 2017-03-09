import {ScreenService} from "./services/screen.service";
import {DialogService} from "./services/dialog.service";
import * as Phaser from 'phaser';

class Application {
    screens = new ScreenService();
    dialogs = new DialogService();
    game:Phaser.Game;
}

var app = new Application();

export {
    app
}


