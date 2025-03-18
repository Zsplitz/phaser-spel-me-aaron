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
        new Platform(this, 0, 500, 5000, 100, this.platforms);
        new Platform(this, 800, 350, 40, 40, this.platforms);
        new Platform(this, 950, 350, 200, 40, this.platforms);
        new Platform(this, 1025, 200, 40, 40, this.platforms);
        new Platform(this, 1280, 420, 80, 100, this.platforms);
        new Platform(this, 1820, 370, 80, 200, this.platforms);
        new Platform(this, 2400, 350, 80, 200, this.platforms);



        this.physics.add.collider(this.player, this.platforms);
    }

    update(): void {
        this.player.update();

        const cameraX = Math.max(this.player.x - 200, 200);
        this.cameras.main.scrollX = cameraX;
    }
}