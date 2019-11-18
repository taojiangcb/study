import { Sprite } from './Sprite';

export class Stage extends Sprite {
    children = [];
    fps = 1000 / 45;
    delta = 0;
    prevtime = 0;

    constructor(cirVO) {
        super();
        this.prevtime = Date.now();
        setInterval(() => { this.render(); }, this.fps);
    }

    render() {
        var nTime = Date.now();
        this.delta = nTime - this.prevtime;
        this.prevtime = nTime;
        this.children.forEach(child => {
            child.update(this.delta);
            child.drawCall();
        });
    }

    initStyle() {
        this.div.id = "Stage";
    }

    initComplete() {
        document.body.appendChild(this.div);
    }

    addChild(spr) {
        if (!this.children.includes(spr)) {
            this.div.appendChild(spr.div);
            this.children.push(spr);
            spr.addToStage();
        }
    }

    removeChild(spr) {
        if (this.children.includes(spr)) {
            this.div.removeChild(spr.div);
            this.children.splice(this.children.indexOf(spr), 1);
            spr.removeToStage();
        }
    }
}