import {MessageDialog} from "../dialogs/message.dialog";
import {app} from "../app";

export class DialogService {

    showMessage(msg) {
        var screen = app.screens.getCurrentScreen();
        var dlg = new MessageDialog(screen.game, screen.world);
        dlg.init();

        return new Promise(resolve => {
            dlg.onClose.subscribe((data) => {
                resolve(data);
            });
        });
    }
}