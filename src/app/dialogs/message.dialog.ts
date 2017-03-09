import {EventEmitter} from "../core/event";

export class MessageDialog extends Phaser.Group {

    onClose = new EventEmitter();

    init() {

    }

    close() {
        this.onClose.emit();
    }
}