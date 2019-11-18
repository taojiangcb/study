
export class Sprite {
    x;
    y;
    div;
    isAdded = false;
    isCompleted = false;
    cssStyle;

    type = 0;

    static TYPE = {
        CIRCLE: "CIRCLE",
        REACTANGE: "REACTANGE",
        BUBBLE: "BUBBLE",
    }

    constructor(...args) {
        this.div = document.createElement("div");
        this.initStyle();
        this.initComplete();
    }

    initStyle() { }

    initComplete() { this.isCompleted = true; }

    update(delta) { }

    dispose() { this.div = null; }

    drawCall() {
        if (this.isAdded && this.isCompleted) {
            this.div.style = `transform: matrix(1,0,0,1,${this.x},${this.y});`;
        }
    }

    addToStage() {
        this.isAdded = true;
        this.drawCall();
    }

    removeToStage() {
        this.isAdded = false;
    }

    _width;
    get width() {
        if (!this._width) {
            if (!this.cssStyle) this.cssStyle = window.getComputedStyle(this.div);
            let wv = this.cssStyle.getPropertyValue('width');
            if (wv) {
                this._width = wv.slice(0, wv.length - 2);
            }
        }
        return this._width || 0;
    }

    _height;
    get height() {
        if (!this._height) {
            if (!this.cssStyle) this.cssStyle = window.getComputedStyle(this.div);
            let hv = this.cssStyle.getPropertyValue('height');
            if (hv) {
                this._height = hv.slice(0, hv.length - 2);
            }
        }
        return this._height || 0;
    }
}




