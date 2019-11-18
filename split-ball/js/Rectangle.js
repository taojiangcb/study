import { Sprite } from './Sprite';
import { stage, game } from './App';

export class Rectangle extends Sprite {

  ms_donw_flag = false;
  shoot_space = 100;
  shoot_speed = 500;
  process_time = 0;

  constructor() {
    super();
    this.type = Sprite.TYPE.REACTANGE;
    this.listener();    
  }

  listener() {
    this.div.onmousedown = event => {
      this.ms_donw_flag = true;
    }

    document.body.onmousemove = event => {
      if (this.ms_donw_flag) {
        let mx = event.screenX - this.width / 2;
        var dx = mx;
        if (dx > stage.width - this.width) { dx = stage.width - this.width; }
        if (dx < 0) { dx = 0; }
        this.x = dx;
      }
    }

    document.body.onmouseup = event => {
      this.ms_donw_flag = false;
    }
  }

  removeList() {
    this.div.onmousedown = null;
    document.body.onmousemove = null;
    document.body.onmouseup = null;
  }

  update(delta) {
    let block = this.shoot_speed * delta / 1000;
    this.process_time += block;
    if (this.process_time >= this.shoot_space) {
      this.process_time -= this.shoot_space;
      game.shoot();
    }
  }

  dispose() {
    super.dispose();
    this.removeList();
  }

  drawCall() {
    if (this.isAdded && this.isCompleted && game) {
      super.drawCall();
      this.div.innerHTML = `${game.rect_life}`;
    }
  }

  initStyle() { this.div.id = "Rectangle"; }
}