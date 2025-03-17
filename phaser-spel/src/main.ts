import Level1Scene from './scenes/level-1';
import MainMenuScene from './scenes/main-menu';
import Phaser from 'phaser';
import './style.css';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: document.querySelector('#app') as HTMLElement,
  scene: [
    MainMenuScene,
    Level1Scene
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 900 }
    }
  }
};

const game = new Phaser.Game(config);