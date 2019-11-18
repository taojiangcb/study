import { Bullet } from './Bullet';
import { Circle } from './Circle';

export class Pool {

  bulletPool = [];
  circlePool = [];
  
  constructor() { this.initPool(); }

  initPool() {
    var bullet_count = 30;
    for (var i = 0; i < bullet_count; i++) {
      var bullet = new Bullet();
      this.bulletPool.push(bullet);
    }

    var circle_count = 50;
    for (var i = 0; i < circle_count; i++) {
      var circle = new Circle(1, 1);
      this.circlePool.push(circle);
    }
  }

  getCircle(lv, direction) {
    let cir;
    if (this.circlePool.length > 0) {
      cir = this.circlePool.shift();
    }
    else {
      cir = new Circle(1, 1);
    }
    cir.reset(lv, direction);
    return cir;
  }

  resetBullet(cir) {
    this.circlePool.push(cir);
  }

  getBullet() {
    if (this.bulletPool.length > 0) {
      return this.bulletPool.shift();
    }
    else {
      return new Bullet();
    }
  }

  resetBullet(bullet) {
    this.bulletPool.push(bullet);
  }
}
