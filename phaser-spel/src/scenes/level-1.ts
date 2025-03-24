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

    preload(): void {
        
        this.load.spritesheet("player_walk", "assets/player/Run_6.png", { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet("player_idle", "assets/player/dle_4.png", { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet("player_jump", "assets/player/8.png", { frameWidth: 40, frameHeight: 40 });
        
    }

    create(): void {
        
        this.anims.create({
            key: "player_walk",
            frames: this.anims.generateFrameNumbers("player_walk", { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "player_idle",
            frames: this.anims.generateFrameNumbers("player_idle", { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1,
        });

        this.anims.create({
            key: "player_jump",
            frames: [{ key: "player_jump", frame: 0 }],
            frameRate: 1,
            repeat: 0,
        });

        
        this.player = new Player(this, 100, 480); 

        
        this.platforms = this.physics.add.staticGroup();
        new Platform(this, 0, 500, 5000, 100, this.platforms);
        new Platform(this, 800, 350, 40, 40, this.platforms);
        new Platform(this, 950, 350, 200, 40, this.platforms);
        new Platform(this, 1025, 200, 40, 40, this.platforms);
        new Platform(this, 1280, 420, 80, 100, this.platforms);
        new Platform(this, 1820, 370, 80, 200, this.platforms);
        new Platform(this, 2400, 350, 80, 200, this.platforms);

        
        this.physics.add.collider(this.player, this.platforms);

       
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setLerp(0.1, 0); 
    }

    update(): void {
        this.player.update();
    }
}
