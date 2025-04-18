import Phaser from 'phaser';

export default class Text extends Phaser.GameObjects.Text {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string,
        fontSize: number = 32,
        color: string = 'white',
        align: 'left' | 'center' | 'right' = 'center',
        verticalAlign: 'top' | 'center' | 'bottom' = 'center'
    ) {
        super(scene, x, y, text, {
            fontFamily: 'Consolas, monospace',
            fontSize: `${fontSize}px`,
            color,
            align
        });

        const originX = align === 'left' ? 0 : align === 'right' ? 1 : 0.5;
        const originY = verticalAlign === 'top' ? 0 : verticalAlign === 'bottom' ? 1 : 0.5;
        this.setOrigin(originX, originY);

        scene.add.existing(this);
    }
}
