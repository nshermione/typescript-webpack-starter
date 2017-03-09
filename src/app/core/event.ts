import {Subject} from "rxjs/Rx";

export class EventEmitter {
    subject: Subject<any>;

    constructor() {
        this.subject = new Subject<any>();
    }

    emit(data?) {
        this.subject.next(data);
    }

    subscribe(next) {
        this.subject.subscribe(next);
    }
}