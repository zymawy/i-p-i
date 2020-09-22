var gameChar_x;
var gameChar_y;
var groundColor = 'rgba(43,148,100,1)';
var skyColor = 'rgba(31,110,212,1)';
var canyonSecondaryColor = 'rgba(57,186,232,1)';
var treeColor = 'rgba(60, 35, 25, 1)';
var branchesColor = 'rgba(9, 60, 10,1)';
var mainColor = 'rgb(208, 139, 91)';
var secondColor = 'rgba(65,65,65,1)';

function drawFrontCharacter() {
	push();

	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	fill(secondColor);
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	fill('white');
	rect(gameChar_x - 5, gameChar_y - 34, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x - 2, gameChar_y - 30, 2);
	circle(gameChar_x + 1, gameChar_y - 30, 2);
	fill('white');
	circle(gameChar_x - 3, gameChar_y - 33, 4);
	circle(gameChar_x + 2, gameChar_y - 33, 4);
	stroke(secondColor);
	line(gameChar_x - 1, gameChar_y - 27, gameChar_x + 2, gameChar_y - 28);

	// Let's Drew The Eyes
	// The Left Line
	line(gameChar_x - 8, gameChar_y - 54, gameChar_x - 13, gameChar_y - 57);
	// The Middle Line
	line(gameChar_x - 2, gameChar_y - 52, gameChar_x + 1, gameChar_y - 52);
	// The Right Line
	line(gameChar_x + 13, gameChar_y - 57, gameChar_x + 8, gameChar_y - 54);
	// The Moth
	strokeWeight(3);
	line(gameChar_x - 4, gameChar_y - 42, gameChar_x + 5, gameChar_y - 44);
	strokeWeight(7);
	point(gameChar_x - 5, gameChar_y - 52);
	point(gameChar_x + 5, gameChar_y - 52);

	noStroke();
	// Let's Start With The Hands
	fill(mainColor);
	rect(gameChar_x - 15, gameChar_y - 32, 9, 26, 10);
	rect(gameChar_x + 9, gameChar_y - 32, 9, 26, 10);

	// Let's Build The Feats
	rect(gameChar_x + 4, gameChar_y - 6, 9, 9);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 9);
	fill(secondColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 4);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 5);

	noStroke();
	strokeWeight(1);
	pop();
}

function drawForwardCharacter() {
	push();
	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	fill(secondColor);
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	fill('white');
	rect(gameChar_x - 5, gameChar_y - 34, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x - 2, gameChar_y - 30, 2);
	circle(gameChar_x + 1, gameChar_y - 30, 2);
	fill('white');
	circle(gameChar_x - 3, gameChar_y - 33, 4);
	circle(gameChar_x + 2, gameChar_y - 33, 4);
	stroke(secondColor);
	line(gameChar_x - 1, gameChar_y - 27, gameChar_x + 2, gameChar_y - 28);

	// Let's Drew The Eyes
	// The Left Line
	line(gameChar_x - 8, gameChar_y - 54, gameChar_x - 13, gameChar_y - 57);
	// The Middle Line
	line(gameChar_x - 2, gameChar_y - 52, gameChar_x + 1, gameChar_y - 52);
	// The Right Line
	line(gameChar_x + 13, gameChar_y - 57, gameChar_x + 8, gameChar_y - 54);
	// The Moth
	strokeWeight(3);
	line(gameChar_x - 4, gameChar_y - 42, gameChar_x + 5, gameChar_y - 44);
	strokeWeight(7);
	point(gameChar_x - 5, gameChar_y - 52);
	point(gameChar_x + 5, gameChar_y - 52);

	noStroke();
	// Let's Start With The Hands
	stroke(mainColor);
	strokeWeight(9);
	line(259, 100, 263, 111);
	line(235, 100, 230, 111);
	noStroke();

	// Let's Build The Feats
	fill(mainColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 5);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 9);
	fill(secondColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 3);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 5);

	noStroke();
	strokeWeight(1);
	pop();
}


function drawTurnedLeftCharacter() {
	push();
	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	// Fist Hand
	fill(secondColor);
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x + 5, gameChar_y - 28, gameChar_x - 12, gameChar_y - 18);
	// First Feet
	strokeWeight(9);
	stroke(mainColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x + 7, gameChar_y - 2);
	stroke(secondColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x + 6, gameChar_y - 5);

	// Second Feet
	strokeWeight(9);
	stroke(mainColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x - 4, gameChar_y - 2);
	stroke(secondColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x - 2, gameChar_y - 4);

	noStroke();
	strokeWeight(1);
	// The Chest
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	// The Logo :)
	fill('white');
	rect(gameChar_x - 10, gameChar_y - 33, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x - 8, gameChar_y - 30, 2);
	circle(gameChar_x - 5, gameChar_y - 30, 2);
	fill('white');
	circle(gameChar_x - 8, gameChar_y - 32, 2);
	circle(gameChar_x - 6, gameChar_y - 33, 2);

	stroke(secondColor);
	line(gameChar_x - 8, gameChar_y - 27, gameChar_x - 5, gameChar_y - 28);


	line(gameChar_x - 14, gameChar_y - 54, gameChar_x + 1, gameChar_y - 59);
	strokeWeight(5);
	point(gameChar_x - 14, gameChar_y - 53);
	// The Moth
	strokeWeight(3);
	line(gameChar_x - 13, gameChar_y - 45, gameChar_x - 10, gameChar_y - 47);

	// Second Hand
	fill(mainColor);
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x + 5, gameChar_y - 28, gameChar_x + 17, gameChar_y - 15);

	noStroke();
	strokeWeight(1);
	pop();
}

function drawTurnedRightCharacter() {
	push();
	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	// Fist Hand
	fill(secondColor);
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x + 5, gameChar_y - 28, gameChar_x + 16, gameChar_y - 17);
	// First Feet
	strokeWeight(9);
	stroke(mainColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x + 7, gameChar_y - 2);
	stroke(secondColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x + 6, gameChar_y - 5);

	// Second Feet
	strokeWeight(9);
	stroke(mainColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x - 4, gameChar_y - 2);
	stroke(secondColor);
	line(gameChar_x + 4, gameChar_y - 10, gameChar_x - 2, gameChar_y - 4);

	noStroke();
	strokeWeight(1);
	// The Chest
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	// The Logo :)
	fill('white');
	rect(gameChar_x + 5, gameChar_y - 32, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x + 12, gameChar_y - 29, 2);
	circle(gameChar_x + 9, gameChar_y - 29, 2);
	fill('white');
	circle(gameChar_x + 12, gameChar_y - 32, 2);
	circle(gameChar_x + 9, gameChar_y - 32, 2);

	stroke(secondColor);
	line(gameChar_x + 12, gameChar_y - 26, gameChar_x + 8, gameChar_y - 27);


	line(gameChar_x + 12, gameChar_y - 55, gameChar_x + 1, gameChar_y - 59);
	strokeWeight(5);
	point(gameChar_x + 13, gameChar_y - 54);
	// The Moth
	strokeWeight(3);
	line(gameChar_x + 12, gameChar_y - 45, gameChar_x + 9, gameChar_y - 47);

	// Second Hand
	fill(mainColor);
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x - 1, gameChar_y - 30, gameChar_x - 14, gameChar_y - 16);

	noStroke();
	strokeWeight(1);

	pop();
}

function drawJumpingRightCharacter() {
	push();


	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	fill(secondColor);
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	fill('white');
	rect(gameChar_x - 5, gameChar_y - 34, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x - 2, gameChar_y - 30, 2);
	circle(gameChar_x + 1, gameChar_y - 30, 2);
	fill('white');
	circle(gameChar_x - 3, gameChar_y - 33, 4);
	circle(gameChar_x + 2, gameChar_y - 33, 4);
	stroke(secondColor);
	line(gameChar_x - 1, gameChar_y - 27, gameChar_x + 2, gameChar_y - 28);

	// Let's Drew The Eyes
	// The Left Line
	line(gameChar_x - 8, gameChar_y - 54, gameChar_x - 13, gameChar_y - 57);
	// The Middle Line
	line(gameChar_x - 2, gameChar_y - 52, gameChar_x + 1, gameChar_y - 52);
	// The Right Line
	line(gameChar_x + 13, gameChar_y - 57, gameChar_x + 8, gameChar_y - 54);
	// The Moth
	strokeWeight(3);
	line(gameChar_x - 4, gameChar_y - 42, gameChar_x + 5, gameChar_y - 44);
	strokeWeight(7);
	point(gameChar_x - 5, gameChar_y - 52);
	point(gameChar_x + 5, gameChar_y - 52);

	noStroke();
	// Let's Start With The Hands
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x + 1, gameChar_y - 46, gameChar_x + 12, gameChar_y - 29);
	line(gameChar_x - 10, gameChar_y - 31, gameChar_x - 24, gameChar_y - 34);
	noStroke();

	// Let's Build The Feats
	fill(mainColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 4);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 9);
	fill(secondColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 2);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 5);

	noStroke();
	strokeWeight(1);
	pop();
}

function drawJumpingLeftCharacter() {
	push();
	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	fill(secondColor);
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	fill('white');
	rect(gameChar_x - 5, gameChar_y - 34, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x - 2, gameChar_y - 30, 2);
	circle(gameChar_x + 1, gameChar_y - 30, 2);
	fill('white');
	circle(gameChar_x - 3, gameChar_y - 33, 4);
	circle(gameChar_x + 2, gameChar_y - 33, 4);
	stroke(secondColor);
	line(gameChar_x - 1, gameChar_y - 27, gameChar_x + 2, gameChar_y - 28);

	// Let's Drew The Eyes
	// The Left Line
	line(gameChar_x - 8, gameChar_y - 54, gameChar_x - 13, gameChar_y - 57);
	// The Middle Line
	line(gameChar_x - 2, gameChar_y - 52, gameChar_x + 1, gameChar_y - 52);
	// The Right Line
	line(gameChar_x + 13, gameChar_y - 57, gameChar_x + 8, gameChar_y - 54);
	// The Moth
	strokeWeight(3);
	line(gameChar_x - 4, gameChar_y - 42, gameChar_x + 5, gameChar_y - 44);
	strokeWeight(7);
	point(gameChar_x - 5, gameChar_y - 52);
	point(gameChar_x + 5, gameChar_y - 52);

	noStroke();
	// Let's Start With The Hands
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x + 28, gameChar_y - 40, gameChar_x + 12, gameChar_y - 29);
	line(gameChar_x - 2, gameChar_y - 47, gameChar_x - 10, gameChar_y - 29);
	noStroke();

	// Let's Build The Feats
	fill(mainColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 9);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 4);
	fill(secondColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 5);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 2);

	noStroke();
	strokeWeight(1);
	pop();
}

function drawJumpingFacingForwards() {
	push();
	// Let's Draw The Head :)
	fill(mainColor);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	fill(secondColor);
	rect(gameChar_x - 13, gameChar_y - 36, 30, 30, 10, 10, 0, 0);
	fill('white');
	rect(gameChar_x - 5, gameChar_y - 34, 10, 10, 20);
	fill(secondColor);
	circle(gameChar_x - 2, gameChar_y - 30, 2);
	circle(gameChar_x + 1, gameChar_y - 30, 2);
	fill('white');
	circle(gameChar_x - 3, gameChar_y - 33, 4);
	circle(gameChar_x + 2, gameChar_y - 33, 4);
	stroke(secondColor);
	line(gameChar_x - 1, gameChar_y - 27, gameChar_x + 2, gameChar_y - 28);

	// Let's Drew The Eyes
	// The Left Line
	line(gameChar_x - 8, gameChar_y - 54, gameChar_x - 13, gameChar_y - 57);
	// The Middle Line
	line(gameChar_x - 2, gameChar_y - 52, gameChar_x + 1, gameChar_y - 52);
	// The Right Line
	line(gameChar_x + 13, gameChar_y - 57, gameChar_x + 8, gameChar_y - 54);
	// The Moth
	strokeWeight(3);
	line(gameChar_x - 4, gameChar_y - 42, gameChar_x + 5, gameChar_y - 44);
	strokeWeight(7);
	point(gameChar_x - 5, gameChar_y - 52);
	point(gameChar_x + 5, gameChar_y - 52);

	noStroke();
	// Let's Start With The Hands
	stroke(mainColor);
	strokeWeight(9);
	line(gameChar_x - 10, gameChar_y - 29, gameChar_x - 19, gameChar_y - 17);
	line(gameChar_x + 13, gameChar_y - 30, gameChar_x + 22, gameChar_y - 18);
	noStroke();

	// Let's Build The Feats
	fill(mainColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 5);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 9);
	fill(secondColor);
	rect(gameChar_x + 4, gameChar_y - 6, 9, 3);
	rect(gameChar_x - 10, gameChar_y - 6, 9, 5);

	noStroke();
	strokeWeight(1);

	pop();
}

/*
	Dynamically Draw The Canyons
 */
function drawCanyons() {


	canyons.map((canyons, key) => {

		drawCanyon({
			positionX: canyons.positionX,
			positionY: floorPos_y,
			width: canyons.width,
			height: 150,
		});
	});
}

/*
	Determine If The Game Char Is Over Some Of The Canyons
 */
function isOverCanyon(canyons) {

	return canyons.some((canyon, key) => {

		return gameChar_x > canyon.positionX + scrollPos &&
			gameChar_x < canyon.positionX + scrollPos + canyon.width * 20;
	});
}

/*
	Determine If The Game Char Is Over Some Of The Collect-able
 */
function determineCollectAble() {

	for (var i = 0; i < collectables.length; i++) {
		if (calculateDistention({
			firstX: gameChar_x,
			firstY: gameChar_y,
			secondX: collectables[i].x_pos + scrollPos,
			secondY: collectables[i].y_pos
		}) < 60) {
			collectables[i].isFound = true;
		}
	}
}

function drawCanyon(canyon = {}) {

	fill(skyColor);
	rect(canyon.positionX, canyon.positionY, canyon.width * 20, canyon.height);
	fill(canyonSecondaryColor);
	beginShape();
	vertex(canyon.positionX, height);
	for (let i = 0; i < canyon.width; i++) {
		vertex(canyon.positionX + (i + 1) * 20 - 10, height - 50);
		vertex(canyon.positionX + (i + 1) * 20, height);
	}
	endShape(CLOSE);
}

function drawTree(tree) {
	// Draw A Tree
	fill(treeColor);
	rect(trees_x[tree] + 75, -200 / 2 + floorPos_y, 50, 200 / 2);
	// Draw Branches
	fill(branchesColor);
	triangle(
		trees_x[tree] + 25,
		-200 / 4 + floorPos_y,
		trees_x[tree] + 100,
		-200 + floorPos_y,
		trees_x[tree] + 175,
		-200 / 4 + floorPos_y
	);

	triangle(
		trees_x[tree] + 25,
		-200 / 6 + floorPos_y,
		trees_x[tree] + 100,
		-200 + floorPos_y,
		trees_x[tree] + 200,
		-200 / 6 + floorPos_y
	);

	triangle(
		trees_x[tree] + 25,
		-200 / 8 + floorPos_y,
		trees_x[tree] + 100,
		-200 + floorPos_y,
		trees_x[tree] + 200,
		-200 / 8 + floorPos_y
	);
}

function drawTrees() {
	for (let i = 0; i < trees_x.length; i++) {
		drawTree(i);
	}
}

function drawMountain(mountain) {
	// Draw Mountain
	push();
	// Draw Mountain
	fill(mountain.color);
	scale(mountain.size);
	beginShape();
	triangle(mountain.x_pos, mountain.y_pos - 232, mountain.x_pos - 250, mountain.y_pos, mountain.x_pos + 270, mountain.y_pos);
	triangle(mountain.x_pos - 150, mountain.y_pos - 232, mountain.x_pos - 400, mountain.y_pos, mountain.x_pos + 200, mountain.y_pos);
	endShape(CLOSE);
	pop();
}

function drawMountains() {

	mountains.forEach(function (mountain) {
		drawMountain(mountain);
	});
}

function drawPlatforms() {

	platforms.map(function (platform) {

		platform.draw();
	});
}

function drawEnemies() {

	enemies.forEach(function (enmy) {

		enmy.drow();

		if (enmy.checkContanct(gameChar_world_x, gameChar_y)) {
			if (lives > 0) {
				startGame();
				lives--;
				playRandomly(fallingSounds).play();
			}
		}
	});
}

function drawPlatforms() {

	platforms.map(function (platform) {

		platform.draw();
	});
}

function drawCloud(cloud) {
	push();
	fill('white');
	scale(cloud.size);
	beginShape();
	rect(cloud.x_pos, cloud.y_pos, 100, 40);
	ellipse(cloud.x_pos, cloud.y_pos + 20, 40, 40);
	ellipse(cloud.x_pos + 100, cloud.y_pos + 20, 40, 40);
	ellipse(cloud.x_pos + 30, cloud.y_pos, 50, 50);
	ellipse(cloud.x_pos + 70, cloud.y_pos, 70, 70);
	endShape();
	pop();
}

function drawClouds() {

	clouds.map(function (cloud) {
		drawCloud(cloud);
	});
}

function calculateDistention(params = {}) {

	if (Object.keys(params).length == 0) return;

	return parseInt(
		dist(params.firstX,
			params.firstY,
			params.secondX,
			params.secondY
		));
}

/**
 * Draw The Hole View Ready
 */
function drawTheView() {

	background(groundColor); // fill the sky blue
	skyful();

	noStroke();

	drawStars()

	fill(0, 155, 0);

	rect(0, floorPos_y, width, height / 4); // draw some green ground

	//Parallax Layer 1
	push();
	translate(scrollPos * parallax.clouds, 0);
	// Draw clouds.
	drawClouds()
	pop();

	//Parallax Layer 2
	push();
	translate(scrollPos * parallax.mountains, 0);
	// Draw mountains.
	drawMountains();
	pop();

	//Parallac Layer 3
	push();
	translate(scrollPos * parallax.trees, 0);
	// Draw trees.
	drawTrees()
	pop();

	//Parallax Layer 4
	push();
	translate(scrollPos, 0);
	// Draw canyons.
	drawCanyons()

	// Draw collectable items.
	drawCollectAble()

	determineCollectAble()

	// Some Decorators
	drawFlowers();

	drawFlagpole()

	determineFlagpole()

	// Drow The PLatform.
	drawPlatforms();

	drawEnemies();
	pop();


}

function drawCollect(collect) {
	if (collect.type === "default") {
		defaultGun(collect);
	} else if (collect.type === 'klash') {
		// TODO:: Impalemnt Klash
	}
}


function drawCollectAble() {
	// Collect-able
	collectables.map(function (collect) {

		// In Case The Collect Not Found Yat
		if (!collect.isFound) {
			drawCollect(collect);
		}
	});
}


function defaultGun(collectable = {}) {

	fill(mainColor);
	rect(collectable.x_pos, collectable.y_pos, 30, 5);
	rect(collectable.x_pos, collectable.y_pos, 5, 20);

}

function flower(flower = {}) {
	fill('white');
	//#e42c64
	fill('#E86850');
	ellipse(flower.x_pos - flower.size * 0.65, flower.y_pos, flower.size, flower.size);
	ellipse(flower.x_pos + flower.size * 0.65, flower.y_pos, flower.size, flower.size);
	ellipse(flower.x_pos, flower.y_pos - flower.size * 0.65, flower.size, flower.size);
	ellipse(flower.x_pos, flower.y_pos + flower.size * 0.65, flower.size, flower.size);
	fill('#0087cb');
	ellipse(flower.x_pos, flower.y_pos, flower.size, flower.size);

}

function drawFlowers() {
	decorators.forEach(function (singleFlower) {
		flower(singleFlower);
	});
}

function skyful() {
	let baseColor = [43, 148, 100];
	let neatColor = [23, 112, 110];
	for (var i = 0; i < height; i++) {
		var weight1 = i;
		var weight2 = height - i;
		var total = weight1 + weight2;
		var r = baseColor[0] * weight1 / total + neatColor[0] * weight2 / total;
		var g = baseColor[1] * weight1 / total + neatColor[1] * weight2 / total;
		var b = baseColor[2] * weight1 / total + neatColor[2] * weight2 / total;
		var a = baseColor[3] * weight1 / total + neatColor[3] * weight2 / total;
		stroke(r, g, b);
		noFill();
		strokeWeight(1);
		line(0, i, width, i);
	}
}


function getKeyPressed() {

	// if statements to control the animation of the character when
	// keys are pressed.
	if (keyCode == RIGHT_ARROW && !isPlummeting) {
		gameChar_x += speed;
		isRight = true;
		moveSound.loop();
	} else if (keyCode == LEFT_ARROW && !isPlummeting) {
		gameChar_x -= speed;
		isLeft = true;
		moveSound.loop();
		// backgroundActionSound.loop();
	} else if (keyCode == 32 && gameChar_y == floorPos_y) {
		gameChar_y -= 100;
	}


	if (keyCode === 82) {
		rPressed = true;
	}

	return false;
}

function getKeyReleased() {

	// if statements to control the animation of the character when
	// keys are released.
	if (keyCode == RIGHT_ARROW) {
		isRight = false;
		moveSound.stop();
	} else if (keyCode == LEFT_ARROW) {
		isLeft = false;
		moveSound.stop();
	}

	return false;
}


//Draw flagpole
function drawFlagpole() {
	stroke(200);
	strokeWeight(5);
	line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 200);
	noStroke();

	if (flagpole.isReached) {
		fill(0, 155, 0);
		rect(flagpole.x_pos, floorPos_y - 160, 50, -40);
		textAlign(CENTER);
		fill(0, 155, 0);
		textSize(64);
		text('LEVEL COMPLETE', flagpole.x_pos, height / 2 - 100);
		backgroundActionSound.stop();

	} else {
		fill(255, 255, 0);
		rect(flagpole.x_pos, floorPos_y, 50, -40);
	}
}


//Raises flag on completion of level
function determineFlagpole() {
	var isReacheded = isReached;
	isReached = 0;
	if (gameChar_x + 50 > flagpole.x_pos + scrollPos) {
		flagpole.isReached = true;
		isReached++
	}

	if (isReached > isReacheded) {
		playRandomly(finsihesSounds).play();
	}
}


function gameReset() {
	for (var i = 0; i < collectables.length; i++) {
		collectables[i].isFound = false;
	}
	lives = 3;
	scrollPos = 0;
	gameChar_x = 50;
	gameChar_y = floorPos_y;
	flagpole.isReached = false;
}

/*
	Determine If The Player Die Or Not
*/
function checkPlayerDie() {

	fill(255);
	textAlign(LEFT);
	textSize(32);
	text("Lives: " + lives, 10, 32);
	if (gameChar_y > 535 && lives > 1) {
		lives--;
		scrollPos = 0;
		gameChar_x = 50;
		gameChar_y = floorPos_y;
		playRandomly(fallingSounds).play();
	} else if (gameChar_y > 535 && lives == 1) {
		lives--;
		playRandomly(fallingSounds).play();
	} else if (lives == 0) {
		textAlign(CENTER);
		fill(200, 0, 0);
		textSize(96);
		text('GAME OVER', width / 2, height / 2);
		textSize(32);
		text('Press R to restart the game.', width / 2, height / 2 + 100);
		if (rPressed) {
			gameReset();
			rPressed = false;
		}
	}
}


function getGameChar() {
	//the game character
	if (isLeft && isFalling)
		drawJumpingLeftCharacter()
	else if (isRight && isFalling)
		drawJumpingRightCharacter()
	else if (isLeft)
		drawTurnedLeftCharacter()
	else if (isRight)
		drawTurnedRightCharacter()
	else if (isFalling || isPlummeting)
		drawJumpingFacingForwards()
	else
		drawFrontCharacter();
}

/**
 * Init The Logic Movement Of The Game G
 */
function initLogic() {

	// Logic to make the game character move or the background scroll.
	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= 5;
		} else {
			scrollPos += 5;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += 5;
		} else {
			scrollPos -= 5; // negative for moving against the background
		}
	}

	if (gameChar_y != floorPos_y) {

		let isContect = false;

		platforms.forEach(function (platform) {

			if (platform.determine(gameChar_world_x, gameChar_y)) {
				isContect = true;
				return true;
			}
		});

		if (!isContect) {
			gameChar_y += 1;
			isFalling = true;
			if (stopIt < 1) {
				stopIt++;
			}
		}
	} else if (isOverCanyon(canyons)) {
		isPlummeting = true;
		gameChar_y += speed + 41;
	} else {
		isFalling = false;
		isPlummeting = false;
		stopIt = 0;
	}

	if (gameChar_y == floorPos_y - 1 && !isOverCanyon(canyons)) {
		thudSound.play();
	}

	// Moving The Char Accordingly
	if (keyIsDown(RIGHT_ARROW) && !isPlummeting) {
		gameChar_x += speed;
		isRight = true;
	} else if (keyIsDown(LEFT_ARROW) && !isPlummeting) {
		gameChar_x -= speed;
		isLeft = true;
	} else {
		isLeft = false;
		isRight = false;
	}

	// Increment Score Game
	var playCollectSound = game_score;
	game_score = 0;
	for (var i = 0; i < collectables.length; i++) {
		if (collectables[i].isFound) {
			game_score++;
		}
	}
	// Let's Play Collected.

	if (game_score > playCollectSound) {
		playRandomly(collectSounds).play();
	}
}

// Show Score

function showScore() {
	fill(255);
	textAlign(RIGHT);
	textSize(32);
	text("Guns: " + game_score, width - 16, 32);
}


function Star(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.twinkle = random(0, 255);
	if (size > 2.5) {
		this.twinkle = 255;
	}

}

function drawStars() {
	for (var i = 0; i < stars.length; i++) {
		noStroke();
		fill(random(stars[i].twinkle, 255));
		ellipse(stars[i].x, stars[i].y, stars[i].size);
	}
}

/**
 *  Randomly Play Different Sounds For Any Given
 *  Gategory.
 * @param object
 * @returns {*}
 */

function playRandomly(object) {

	let keys = Object.keys(object);

	return object[keys[keys.length * Math.random() << 0]];
}


function Platform(x, y, length, color, size) {
	this.x = x;
	this.y = y;
	this.length = length;
	this.color = color;
	this.size = size;

	this.draw = function () {
		fill(this.color);
		rect(this.x, this.y, this.length, 20);
	},

		this.determine = function (gcX, gcY) {
			if (gcX > this.x && gcX < this.y + this.length) {

				let d = this.y - gcY;

				return d >= 0 && d < 5;
			}

			return false;
		}
}


function Enemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.range = range;

	this.currentX = x;
	this.inc = 1;

	this.update = function () {
		this.currentX += this.inc;
		if (this.currentX >= this.x + this.range) {
			this.inc = -1;
		} else if (this.currentX < this.x) {
			this.inc = 1;
		}
	}

	this.drow = function () {
		// TODO:: Make More Enmy
		this.update();
		fill(255, 0, 0);
		ellipse(this.currentX, this.y, 20, 20);
		// drawTurnedRightCharacter();
	}

	this.checkContanct = function (game_cur_x, game_car_y) {
		return dist(game_cur_x, game_car_y, this.currentX, this.y) < 20;
	}
}
