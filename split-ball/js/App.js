import { Game } from './Game';

export var game;
export var tip;
export var tipContent;
export var stage;
export var span_life;
export var span_result;

window.onload = function () {
    game = new Game();
    stage = game.stage;
    tipContent = document.getElementById('tipContent');
    tip = document.getElementById('tip');
    document.getElementById('btn_start').onclick = () => {
        game.gameStart();
        game.setLife(5);
        game.setResult(0);
        closeTip();
    }
}

export function openTip() {
    tip && (tip.style = 'display:block');
}

export function closeTip() {
    tip && (tip.style = 'display:none');
}

export function win() {
    openTip();
    tipContent && (tipContent.innerHTML = "恭喜游戏胜利");
}

export function over() {
    openTip();
    tipContent && (tipContent.innerHTML = "!闯关失败 凸-_-凸!");
}

export function setLife(life) {
    if (!span_life) {
        span_life = document.getElementById('span_life');
    }
    span_life.innerHTML = life;
}

export function setResult(result) {
    if (!span_result) {
        span_result = document.getElementById('span_result');
    }
    span_result.innerHTML = result;
}

export default { game, tip, tipContent, stage }