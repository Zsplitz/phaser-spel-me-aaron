import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
     walkSpeed: number = 270; 
    runSpeed: number = 450; 
     jumpStrength: number = 550;
     jumpKey: Phaser.Input.Keyboard.Key;
    leftKey: Phaser.Input.Keyboard.Key;
     rightKey: Phaser.Input.Keyboard.Key;
    runKey: Phaser.Input.Keyboard.Key;
    body!: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "player_idle"); 

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body = this.body as Phaser.Physics.Arcade.Body;
        this.body.setCollideWorldBounds(true); 

       
        this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.runKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    }

    update(): void {
        let moveSpeed = this.walkSpeed;

        if (this.runKey.isDown) {
            moveSpeed = this.runSpeed;
        }

        this.body.setVelocityX(0);

        
        if (this.leftKey.isDown) {
            this.body.setVelocityX(-moveSpeed);
            this.setFlipX(true); 
            this.play("player_walk", true);
        } else if (this.rightKey.isDown) {
            this.body.setVelocityX(moveSpeed);
            this.setFlipX(false);
            this.play("player_walk", true);
        } else {
            this.play("player_idle", true); 
        }

        // Jumping
        if (this.jumpKey.isDown && this.body.blocked.down) {
            this.body.setVelocityY(-this.jumpStrength);
            this.play("player_jump", true);
        }
    }
}
