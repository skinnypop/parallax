// Initialize Phaser
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){ 
        game.load.image('background100', 'assets/Parallax100.png');
        game.load.image('background80', 'assets/Parallax80.png');
        game.load.image('background60', 'assets/Parallax60.png');
        game.load.image('fighter', 'assets/smalldrone.png');
        game.load.image('ship', 'assets/ship.png');
        game.load.image('planet', 'assets/planets/planet_apocalypse.png');
}
var background;
var midground;
var foreground;
var player;
var planets;
var planet;
var cursors;

function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Parallax backgrounds
    background = game.add.tileSprite(0, 0, game.width, game.height, 'background100');
    midground = game.add.tileSprite(0, 0, game.width, game.height, 'background80');
    foreground = game.add.tileSprite(0, 0, game.width, game.height, 'background60');

    planets = game.add.group();
    planet = planets.create(0,-100,'planet');
   



    // Add spaceship
    player = game.add.sprite(0, game.height - 150, 'fighter');
    player.scale.setTo(0.5, 0.5);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    // controls
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    background.tilePosition.y += 0.05;
    midground.tilePosition.y += 0.3;
    foreground.tilePosition.y += 0.75;

    planet.y += 0.75;

    player.body.velocity.x = 0;
    
    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        //player.animations.play('left');           TODO Add animation
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        //player.animations.play('right');          TODO Add animation
    }
    else
    {
        //  Stand still
        //player.animations.stop();  
    }               
}