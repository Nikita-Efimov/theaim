function checkMouseOver(mouseX, mouseY)
{
	var x = circleXpos + scanCircleWidth/2 + circleBroderSize;
	var y = circleYpos + scanCircleWidth/2 + circleBroderSize;

	var r = (x - mouseX)*(x - mouseX) + (y - mouseY)*(y - mouseY);
	var n = scanCircleWidth*scanCircleWidth - cursorSize*cursorSize;

	// p3.innerHTML = 'x: ' + mouseX + ' y: ' + mouseY + ' x1: ' + x + ' y1: ' + y + ' r: ' + r;

	if (r <= 576)
	{
		score++;
		changePos();
	}
}

function changePos()
{
	circleXpos = getRandomInt(minWidth + circleSize, maxWidth - circleSize);
	circleYpos = getRandomInt(minHeight + circleSize, maxHeight - circleSize);
	circleP.style.left = circleXpos + "px";
	circleP.style.top = circleYpos + "px";
}

function cursorMove(e)
{
	var x = e.clientX;
	var y = e.clientY;
	var left = x - cursorSize/2;
	var top = y - cursorSize/2;
	cursorP.style.left = left + "px";
	cursorP.style.top = top + "px";
	checkMouseOver(x, y);
}

function getRandomInt(min, max) { return Math.floor((Math.random()) * (max - min + 1)) + min;}