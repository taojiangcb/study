import { Stage } from './Stage';
import { Rectangle } from './Rectangle';
import { Pool } from './Pool';
import { openTip, setLife, setResult, win, over } from './App';

export class Game {
  stage;
  pool;
  rectangle;
  circles = [];

  rect_life = 5;
  game_result = 0;


  constructor() {
    this.stage = new Stage();
    this.pool = new Pool();
  }

  gameStop() {
    this.stage.removeChild(this.rectangle);
    this.clearCircle();
    openTip();
  }

  gameStart() {

    let cir_1 = this.pool.getCircle(4, 1)
    let cir_2 = this.pool.getCircle(5, -1)

    if (!this.rectangle) {
      this.rectangle = new Rectangle();
    }

    this.addCircle(cir_1);
    this.addCircle(cir_2);

    this.stage.addChild(this.rectangle);

    cir_1.x = 200;
    cir_1.y = 100;

    cir_2.x = 500;
    cir_2.y = 100;

    this.rectangle.x = this.stage.width - this.rectangle.width >> 1;
    this.rectangle.y = this.stage.height - this.rectangle.height;
  }

  addCircle(cir) {
    if (!this.circles.includes(cir)) { this.circles.push(cir); }
    this.stage.addChild(cir);
  }

  removeCircle(cir) {
    this.stage.removeChild(cir);
    let delIndex = this.circles.indexOf(cir);
    if (delIndex > -1) {
      this.circles.splice(delIndex, 1);
    }

    if (this.circles.length == 0 && this.rect_life > 0) {
      this.win()
    }
  }

  //发射子弹
  shoot() {
    let bullet = this.pool.getBullet();
    bullet.x = this.rectangle.x + this.rectangle.width / 2;
    bullet.y = this.rectangle.y;
    this.stage.addChild(bullet);
  }

  //碰撞监测
  hitCheck(bullet) {
    this.circles.forEach(element => {
      let dia = parseInt(element.width / 2) + parseInt(bullet.width / 2);
      let dist = this.mesualDist(element, bullet);
      if (dist < dia) {
        this.hitCircle(bullet, element);
        element.hit();
      }
    })
  }

  mesualDist(tag, src) {
    let vx = src.x - tag.x;
    let vy = src.y - tag.y;
    let dist = Math.sqrt(vx * vx + vy * vy);
    return dist;
  }

  //命中
  hitCircle(bullet, circle) {
    this.stage.removeChild(bullet);
    this.pool.resetBullet(bullet);
    console.log(`hit circle`);
  }

  clearCircle() {
    var removeList = this.circles.concat();
    removeList.forEach(element => {
      this.removeCircle(element);
    });
  }

  setLife(life) {
    this.rect_life = life;
    setLife(this.rect_life);
  }

  setResult(result) {
    this.game_result = result;
    setResult(this.game_result);
  }

  addResult() {
    this.game_result += 1;
    setResult(this.game_result);
  }

  win() {
    win();
    this.stage.removeChild(this.rectangle);
  }

  gameOver() {
    over();
    this.clearCircle();
    this.stage.removeChild(this.rectangle);
  }

  catLife() {
    this.rect_life = Math.max(0, this.rect_life - 1);
    setLife(this.rect_life);
    if (this.rect_life == 0) {
      this.gameOver();
    }
  }
}