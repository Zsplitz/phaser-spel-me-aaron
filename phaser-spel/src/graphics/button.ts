import Phaser from 'phaser';
import Text from './text.ts';

export default class Button extends Phaser.GameObjects.Container {
    private background: Phaser.GameObjects.Rectangle;
    private label: Text;
    private color: number = 0xff9933;
    private hoverColor: number = 0xffff00;
    private callback: () => void;

    constructor(scene: Phaser.Scene, text: string, x: number, y: number, width: number, height: number, callback: () => void) {
        super(scene, x, y);

        this.callback = callback;

        this.background = scene.add.rectangle(0, 0, width, height, this.color);
        this.background.setOrigin(0.5);
        this.add(this.background);

        this.label = new Text(scene, 0, 0, text, 32, 'black');
        this.add(this.label);

        this.background.setInteractive();

        scene.add.existing(this);

        this.background.on('pointerover', this.onHover, this);
        this.background.on('pointerout', this.onOut, this);
        this.background.on('pointerdown', this.onClick, this);
    }

    private onHover(): void {
        this.background.setFillStyle(this.hoverColor);
    }

    private onOut(): void {
        this.background.setFillStyle(this.color);
    }

    private onClick(): void {
        this.callback();
    }
}
