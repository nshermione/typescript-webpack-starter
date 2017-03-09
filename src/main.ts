/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />

import * as $ from 'jquery';
import './scss/app.scss';
import {config} from "./config";
import {Scaler} from "./app/core/scaler";
import {app} from "./app/app";

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

}

function create() {
    let scaler = new Scaler(config.appSelector, config.screenSize.w, config.screenSize.h);
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.stage.disableVisibilityChange = true;
    scaler.fitScreenKeepRatio();

    app.game = game;
    app.screens.loadScreens();
    app.screens.showHome();
}



