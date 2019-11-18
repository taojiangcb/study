import { Circle } from './Circle';
import { CircleVO } from './CircleVO';


export class GameGlobal {
  static instance;
  static inst() {
    if (!GameGlobal.instance) GameGlobal.instance = new GameGlobal();
    return GameGlobal.instance;
  }
  
  levelCfg = new Map();
  constructor() {
    this.levelCfg.set(1, new CircleVO(120, -130, 0.2, 1, 13));
    this.levelCfg.set(2, new CircleVO(120, -130, 0.2, 3, 16));
    this.levelCfg.set(3, new CircleVO(120, -130, 0.2, 5, 20));
    this.levelCfg.set(4, new CircleVO(120, -130, 0.2, 8, 30));
    this.levelCfg.set(5, new CircleVO(120, -130, 0.2, 12, 40));
  }
}
