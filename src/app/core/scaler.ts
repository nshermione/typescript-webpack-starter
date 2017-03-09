import * as $ from 'jquery';

export class Scaler {
    ratio = 1;
    selector;
    width;
    height;

    constructor(selector, width, height) {
        this.ratio = width/height;
        this.selector = "#"+selector;
        this.width = width;
        this.height = height;
    }

    private resize() {
        let screenWidth = $(window).width();
        let screenHeight = $(window).height();
        let screenRatio = screenWidth / screenHeight;

        let scale = 1;
        if (this.ratio < screenRatio) {
            // fit height
            scale = screenHeight/this.height;
        } else {
            // fit width
            scale = screenWidth/this.width;
        }

        $(this.selector).css({
            width: this.width * scale,
            height: this.height * scale
        })
    }

    fitScreenKeepRatio() {
        $(window).ready(this.resize.bind(this));
        $(window).on("resize load orientationchange", this.resize.bind(this));
    }
}