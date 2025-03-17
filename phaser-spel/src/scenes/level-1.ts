import Phaser from "phaser";
import Player from "../entities/player";
import Platform from "../entities/platform";

export default class Level1Scene extends Phaser.Scene {
    static KEY = 'level-1';

    private player!: Player;
    private platforms!: Phaser.Physics.Arcade.StaticGroup;

    constructor() {
        super({ key: Level1Scene.KEY });
    }

    create(): void {
        this.player = new Player(this, 0, 480);

        this.platforms = this.physics.add.staticGroup();
        new Platform(this, 0, 500, 600, 40, this.platforms);
        new Platform(this, 750, 500, 1000, 40, this.platforms);
        new Platform(this, 1400, 500, 1000, 40, this.platforms);

        this.physics.add.collider(this.player, this.platforms);
    }

    update(): void {
        this.player.update();

        const cameraX = Math.max(this.player.x - 200, 200);
        this.cameras.main.scrollX = cameraX;
    }
}