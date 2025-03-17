import Phaser from "phaser";

export default class Platform extends Phaser.GameObjects.Rectangle {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        staticCollisionGroup: Phaser.Physics.Arcade.StaticGroup
    ) {
        super(scene, x, y, width, height, 0xeeeeee); // Removed extra numbers in super()

        this.setOrigin(0, 0);

        scene.add.existing(this);
        staticCollisionGroup.add(this);
    }
}
