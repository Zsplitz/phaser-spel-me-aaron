import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Rectangle {
    private walkSpeed: number = 270; // Normal walking speed
    private runSpeed: number = 450; // Increased speed when running
    private jumpStrength: number = 550;
    private acceleration: number = 200;
    private jumpKey: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private rightKey: Phaser.Input.Keyboard.Key;
    private runKey: Phaser.Input.Keyboard.Key;
    private body!: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 40, 40, 0x2277ff);

        this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.runKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Type assertion to ensure body is Arcade Physics Body
        this.body = this.body as Phaser.Physics.Arcade.Body;
    }

    update(): void {
        // Default movement speed is walking speed
        let moveSpeed = this.walkSpeed;

        // If the run key (B) is held, increase speed
        if (this.runKey.isDown) {
            moveSpeed = this.runSpeed;
        }

        // Stop movement by default
        this.body.setVelocityX(0);

        // Left movement
        if (this.leftKey.isDown) {
            this.body.setVelocityX(-moveSpeed); // Use moveSpeed, not acceleration
        }
        // Right movement
        else if (this.rightKey.isDown) {
            this.body.setVelocityX(moveSpeed); // Use moveSpeed, not acceleration
        }

        // Jumping
        if (this.jumpKey.isDown && this.body.blocked.down) {
            this.body.setVelocityY(-this.jumpStrength);
        }
    }
}
