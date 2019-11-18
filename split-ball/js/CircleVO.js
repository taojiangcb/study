export class CircleVO {
  speedX = 0;
  speedY = 0;
  gravity = 0;
  life = 1;
  bounce = 1000;
  constructor(sx, sy, g = 10, l, b = 1) {
    this.speedX = sx;
    this.speedY = sy;
    this.gravity = g;
    this.life = l;
    this.bounce = b;
  }
}