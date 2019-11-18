import { Sprite } from './Sprite';
import { stage, game } from './App';

export class Bullet extends Sprite {
  speedY = 1;
  constructor() {
      super();
      this.type = Sprite.TYPE.BUBBLE
  }

  update(delta) {
      var vy = delta * this.speedY * -1;
      var dy = this.y + vy;
      if(dy < 0) {
          stage.removeChild(this);
          game.pool.resetBullet(this);
      }
      this.y = dy;
      game.hitCheck(this);
  }

  initStyle() {
      this.div.id = "Bullet";
  }
}