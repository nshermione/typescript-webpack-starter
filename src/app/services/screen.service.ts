import {HomeScreen} from "../screens/home.screen";
import {PlayScreen} from "../screens/play.screen";
import {app} from "../app";

let screenNames = {
    HOME: "HOME",
    PLAY: "PLAY"
};

let screens = {
    [screenNames.HOME]: new HomeScreen(),
    [screenNames.PLAY]: new PlayScreen()
};

export class ScreenService {

    loadScreens() {
        for (let screenName in screens) {
            let screen = screens[screenName];
            app.game.state.add(screenName, screen);
        }
    }

    showHome() {
        app.game.state.start(screenNames.HOME);
    }

    showPlay() {
        app.game.state.start(screenNames.PLAY);
    }

    replay() {
        let currrentScreen = app.game.state.getCurrentState();
        if (currrentScreen === screens[screenNames.PLAY]) {
            app.game.state.restart();
        }
    }

    getCurrentScreen() {
        return app.game.state.getCurrentState();
    }
}