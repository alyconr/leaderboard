import { initGame } from './modules/popupwindow.js';
import { menu } from './modules/menu.js';
import './assets/images/cancel.svg';
import './assets/images/icons8-user-default-64.png';
import { inputScore } from './modules/inputScore.js';
import { renderScore } from './modules/renderScores.js';

initGame();
menu();
inputScore();
renderScore();