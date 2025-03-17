import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Rectangle {
    private speed: number = 300;
    private jumpStrength: number = 400;
    private jumpKey: Phaser.Input.Keyboard.Key;
    private body!: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 40, 40, 0x2277ff);

        this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Type assertion to ensure body is Arcade Physics Body
        this.body = this.body as Phaser.Physics.Arcade.Body;
    }

    update(): void {
        this.body.setVelocityX(this.speed);

        if (this.jumpKey.isDown && this.body.blocked.down) {
            this.body.setVelocityY(-this.jumpStrength);
        }
    }
}
