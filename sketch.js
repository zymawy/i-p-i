/*

Final Game Project - Introduction to Programming I





EXTENSIONS:

## Multiple SOUNDS

Play with multiple sounds effects given the player more enjoyable time and long live playing with getting board.
Thus, The multiple sounds effects are randomly generated.

From what I learned the basic understanding of how sound works in a simple game from this exercise and
The meaning of sound effects in the immersion of video games we witness.

## ADVANCED GRAPHICS

By scaling the horizontal translation of different layers with different variables, I added a parallax effect.
This creates an illusion that things like collectables, canyons and characters are close to plants and houses.
Behind them are distant mountains and clouds further down. I introduced stars to the night sky as well, which
If the character moves because they are the farthest away, don't move at all.

And for the entire level of the game, they stay in their place. The sky gradient has also been added.
I found it difficult to make the stars' twinkling believable and to clean up my code into different ones.
Uh, layers.
WHAT I LEARN I learned to use artifacts efficiently from the parallax function to keep my code clean and
I learned how to use a construction feature to generate hundreds of objects by creating stars.
Avoid excessive duplication of the code.



OTHER NOTES:

1.  Changing size property for collectables, clouds and mountains changes their position on canvas as well.
Please fix 'x_pos' and 'y_pos' after you change size.

2.  Width of canyons has been set as object property and then taking that into account when testing if
character is falling into the canyon (see the function at the bottom). This significantly reduces the
chances of bugs if the project is to be developed into a real-world game.

4.  Sounds used in this game are free and did require CC attribution however since the game is not going
to be distributed, I decided to not add the attribution in the game for now.


*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;
var rPressed;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var speed;
var stopIt;
var clouds;
var mountains;
var canyons;
var trees_x;
var collectables;
var decorators;

var game_score;
var flagpole;
var lives;
var stars;

var jumpSound;
var destructSound;
var thudSound;
var moveSound;
var collectSound, isReached, yes, rejected, collectSounds, fallingSounds,
	finsihesSounds, parallax, backgroundActionSound, platforms, enemies;

function preload() {
	soundFormats('mp3');
	//loading sounds to be used in the game
	jumpSound = loadSound('assets/jump.mp3');
	jumpSound.setVolume(0.5);
	destructSound = loadSound('assets/FallingSounds/ouch.mp3');
	destructSound.setVolume(0.5);
	collectSound = loadSound('assets/CollectSounds/boomshakalaka.mp3');
	collectSound.setVolume(1);
	thudSound = loadSound('assets/thud.mp3');
	thudSound.setVolume(0.1);
	moveSound = loadSound('assets/move.mp3');
	moveSound.setVolume(0.5);
	isReached = 0;

	backgroundActionSound = loadSound('assets/playgroundSound.mp3');
	backgroundActionSound.setVolume(0.2);
	// Collect Sounds.
	collectSounds = {
		boomshakalaka: loadSound('assets/CollectSounds/boomshakalaka.mp3'),
		putsBoom: loadSound('assets/CollectSounds/puts-boom.mp3'),
		yes: loadSound('assets/CollectSounds/yes.mp3'),
	}

	// Falling Sounds.
	fallingSounds = {
		fallingName: loadSound('assets/FallingSounds/name.mp3'),
		rejected: loadSound('assets/FallingSounds/rejected.mp3'),
		ouch: loadSound('assets/FallingSounds/ouch.mp3'),

	}

	// Finishes Sounds
	finsihesSounds = {
		kingJames: loadSound('assets/FinishesSounds/king-james.mp3'),
		waffleHouse: loadSound('assets/FinishesSounds/waffle-house.mp3'),
	}

	// Let's Campaign The Sounds And Init The Requirement :)
	for (const [key, sound] of Object.entries({...collectSounds, ...fallingSounds, ...finsihesSounds})) {
		sound.setVolume(random(0.0, 1.0));
	}
}

function setup() {
	textFont('Consolas');

	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	lives = 3;

	startGame();
	backgroundActionSound.play();
}

function draw() {

	// View Is Ready :)
	drawTheView();

	// Draw game character.
	drawGameChar();

	// Init The Logic
	initLogic();

	showScore();

	checkPlayerDie();

	gameChar_world_x = gameChar_x - scrollPos;
}

function startGame() {
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;
	speed = 0.5;
	stopIt = 0;
	game_score = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	rPressed = false;

	// Initialise arrays of scenery objects.
	trees_x = [400, 700, 1300, 1900, 2100, 2600];
	clouds = [
		{
			x_pos: 300,
			y_pos: 50,
			size: 1
		},
		{
			x_pos: 400,
			y_pos: 50,
			size: 1.5
		},
		{
			x_pos: 600,
			y_pos: 50,
			size: 2
		}

	];
	mountains = [
		{
			x_pos: 700,
			y_pos: 432,
			size: 1,
			color: 'rgba(89,62,26,1)'
		}, {
			x_pos: 1400,
			y_pos: 360,
			size: 1.2,
			color: 'rgba(89,62,26,1)'
		}
	];

	canyons = [
		{
			positionX: 180,
			width: 4
		}, {
			positionX: 800,
			width: 5
		}, {
			positionX: 1050,
			width: 7
		}, {
			positionX: 1450,
			width: 8
		}, {
			positionX: 2300,
			width: 6
		}
	];
	collectables = [
		{
			x_pos: 950,
			y_pos: 380,
			size: 30,
			isFound: false,
			type: 'default',
		}, {
			x_pos: 1400,
			y_pos: 360,
			size: 30,
			isFound: false,
			type: 'default',
		}, {
			x_pos: 2200,
			y_pos: 340,
			size: 30,
			isFound: false,
			type: 'default', // TODO:: Make More Types
		}, {
			x_pos: 2500,
			y_pos: 340,
			size: 30,
			isFound: false,
			type: 'default', // TODO:: Make More Types
		}, {
			x_pos: 2700,
			y_pos: 360,
			size: 30,
			isFound: false,
			type: 'default', // TODO:: Make More Types
		}

	];
	decorators = [
		{
			x_pos: 250,
			y_pos: 380,
			size: 30,
		}, {
			x_pos: 650,
			y_pos: 360,
			size: 30,
		}, {
			x_pos: 1500,
			y_pos: 340,
			size: 30,
		}, {
			x_pos: 1900,
			y_pos: 340,
			size: 30,
		}, {
			x_pos: 2200,
			y_pos: 360,
			size: 30,
		}

	];
	flagpole = {
		isReached: false,
		x_pos: 3000
	};
	stars = [];
	for (var i = 0; i < 100; i++) {
		stars.push(
			new Star(
				random(0, width),
				random(0, height),
				random(1, 3),
				random(100, 255)
			)
		);
	}

	platforms = [];
	for (var i = 0; i < 5; i++) {

		platforms.push(
			new Platform(800 * i, floorPos_y - 100, 100,
				"rgba(" + parseInt(random(1, 255)) + "," +
				parseInt(random(1, 255)) + "," +
				parseInt(random(1, 255)) + ", 1)", 3 + i)
		);
	}


	enemies = [];

	for (var e = 0; e <= 5; e++) {

		enemies.push(new Enemy(100 + 800 * e, floorPos_y - 10, 100));
	}

	parallax =
		{
			clouds: 0.2,
			mountains: 0.6,
			trees: 0.8,
		};
}

// Event Listeners
function keyPressed() {

	return getKeyPressed();
}

function keyReleased() {

	return getKeyReleased()
}

function drawGameChar() {
	return getGameChar();
}
