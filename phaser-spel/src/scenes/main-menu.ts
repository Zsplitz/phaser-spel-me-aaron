import Button from '../graphics/button';
import Phaser from 'phaser';
import Text from '../graphics/text';
import Level1Scene from './level-1';

export default class MainMenuScene extends Phaser.Scene {
    static KEY = 'main-menu';

    constructor() {
        super({ key: MainMenuScene.KEY });
    }

    create(): void {
        new Text(this, Number(this.game.config.width) / 2, 100, 'PHASER DASH', 60);

        new Button(this, 'Level 1', Number(this.game.config.width) / 2, 200, 160, 60, () => {
            this.scene.start(Level1Scene.KEY);
        });
        new Button(this, 'Level 2', Number(this.game.config.width) / 2, 300, 160, 60, () => {
            console.log('change to level 2');
        });
        new Button(this, 'Level 3', Number(this.game.config.width) / 2, 400, 160, 60, () => {
            console.log('change to level 3');
        });
    }
}