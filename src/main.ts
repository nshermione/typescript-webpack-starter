import * as $ from 'jquery';
import * as Phaser from 'phaser';
import './scss/app.scss';
import {config} from "./config";
import {Scaler} from "./app/core/scaler";

class App {
    run() {
        var game = new Phaser.Game(
            config.screenSize.w,
            config.screenSize.h,
            Phaser.AUTO,
            config.appSelector,
            {
                preload: preload,
                create: create
            }
        );

        function preload() {
            game.load.image('butterfly', 'assets/butterfly.png');

        }

        function create() {
            let scaler = new Scaler(config.appSelector, config.screenSize.w, config.screenSize.h);
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            game.stage.disableVisibilityChange = true;
            scaler.fitScreenKeepRatio();

            game.add.sprite(0, 0, 'butterfly');
        }

    }
}

var app = new App();
app.run();




