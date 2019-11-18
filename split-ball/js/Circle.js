import { GameGlobal } from './GameGlobal';
import { Sprite } from './Sprite';
import { stage, game } from './App';

export class Circle extends Sprite {

  level = 1;
  circleVO;

  up = false;
  gravity = 0;
  bounce = 0;

  constructor(lv, direction) {
    super();
    this.type = Sprite.TYPE.CIRCLE;
    this.level = lv || 1;
    this.reset(lv, direction);


  }

  /**充值样式 */
  reset(lv, direction) {
    this.level = lv;
    var voCfg = GameGlobal.inst().levelCfg.get(this.level);
    this.circleVO = Object.assign({}, voCfg);
    this.circleVO.speedX *= direction;
    this.initStyle();
  }

  initStyle() {
    if (this.isCompleted) {
      this.div.classList = [`level${this.level}`];
      this.div.id = "Circle";
    }
  }

  update(delta) {
    var vx = this.circleVO.speedX * delta / 1000;
    var vy = this.circleVO.speedY * delta / 1000;
    if (this.up) {
      this.bounce *= 0.9;
      vy += this.bounce * -1;
      if (this.bounce < 0.5) {
        this.up = false;
      }
    }
    else {
      this.gravity += this.circleVO.gravity;
      vy += this.gravity;
    }

    var dx = this.x + vx;
    var dy = this.y + vy;

    if (this.collisionBottom(dy) && !this.up) {
      this.up = true;
      // this.circleVO.speedY *= -1;
      this.bounce = this.circleVO.bounce;
      this.gravity = 0;
    }

    if (this.collisionSide(dx)) {
      this.circleVO.speedX *= -1;
      if (dx > stage.width - this.width / 2) {
        dx = stage.width - this.width / 2
      }

      if (dx < this.width / 2) {
        dx = this.width / 2;
      }
    }

    this.x = dx;
    this.y = dy;

    let rect_dia = parseInt(game.rectangle.width / 2);
    let dist_2 = game.mesualDist(this, game.rectangle)
    if (dist_2 < rect_dia) {
      game.catLife();
    }
  }

  collisionBottom(dy) {
    return (dy + this.width / 2) > stage.height;
  }

  collisionSide(dx) {
    return (dx < this.width / 2 || dx > stage.width - this.width / 2);
  }

  drawCall() {
    if (this.isAdded && this.isCompleted) {
      super.drawCall();
      this.div.innerHTML = `${this.circleVO.life}`;
    }
  }

  hit() {
    if (this.circleVO.life > 1) {
      this.circleVO.life--;
    }
    else {
      if (this.level > 1) {
        this.spit();
      }
      else {
        this.die(); //死亡得分
      }
    }
  }

  spit() {
    let cir1 = game.pool.getCircle(this.level - 1, 1);
    let cir2 = game.pool.getCircle(this.level - 1, -1);
    cir1.x = cir2.x = this.x;
    cir1.y = cir2.y = this.y;

    game.addCircle(cir1);
    game.addCircle(cir2);

    this.die();
  }

  die() {
    game.addResult();
    game.removeCircle(this);
  }
}