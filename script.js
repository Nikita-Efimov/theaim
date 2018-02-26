document.body.addEventListener("mousemove", cursorMove, true);
window.addEventListener("resize", windowResize);

var minWidth, maxWidth, minHeight, maxHeight, startTime, score;

init();

function checkMouseOver(mouseX, mouseY)
{
	var p1 = document.getElementsByClassName('scancircle')[0];
	var width = parseInt(getComputedStyle(p1).width);
	var p2 = document.getElementsByClassName('circle')[0];
	var x = parseInt(getComputedStyle(p1).left) + parseInt(getComputedStyle(p2).left) + width/2 + parseInt(getComputedStyle(p2).borderWidth);
	var y = parseInt(getComputedStyle(p1).top) + parseInt(getComputedStyle(p2).top) + width/2 + parseInt(getComputedStyle(p2).borderWidth);

	var r = (x - mouseX)*(x - mouseX) + (y - mouseY)*(y - mouseY);
	var p4 = document.getElementsByClassName('cursor')[0];
	var n = width*width - parseInt(getComputedStyle(p4).width)*parseInt(getComputedStyle(p4).width);
	// p3.innerHTML = 'x: ' + mouseX + ' y: ' + mouseY + ' x1: ' + x + ' y1: ' + y + ' r: ' + r;
	if (r <= 576)
	{
		score++;
		changePos();
	}
}

function init()
{
	score = 0

	windowResize();
	changePos();

	setInterval(checkTime, 20);
}

function windowResize()
{
	minHeight = 5;
	maxHeight = window.innerHeight - 30;
	minWidth = 5;
	maxWidth = window.innerWidth - 15;

	var p = document.getElementsByClassName('area')[0];
	p.style.top = minHeight + 'px';
	p.style.height = maxHeight - minHeight + 'px';
	p.style.left = minWidth + 'px';
	p.style.width = maxWidth - minWidth + 'px';

	p = document.getElementsByClassName('stats')[0];
	p.style.top = maxHeight + 2 + "px";

	changePos();
}

function checkTime()
{
	if (score == 0)
		startTime = new Date;

	var p = document.getElementById('avgTime');
	var currentTime = new Date;
	var avgt = (currentTime - startTime) / 1000 / score;
	p.innerHTML = avgt.toFixed(2);
	p = document.getElementById('score');
	p.innerHTML = score;
}

function getRandomInt(min, max)
{
	return Math.floor((Math.random()) * (max - min + 1)) + min;
}

function changePos()
{
	var p = document.getElementsByClassName('circle')[0];
	var circleSize = parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).width) + parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).borderWidth);
	p.style.top = getRandomInt(minHeight + circleSize, maxHeight - circleSize) + "px";
	p.style.left = getRandomInt(minWidth + circleSize, maxWidth - circleSize) + "px";
}

function cursorMove(e)
{
	var p = document.getElementsByClassName('cursor')[0];
	var cursorSize = parseInt(getComputedStyle(document.getElementsByClassName('cursor')[0]).width)
	var left = e.clientX - cursorSize/2;
	var top = e.clientY - cursorSize/2;
	p.style.left = left + "px";
	p.style.top = top + "px";
	checkMouseOver(e.clientX, e.clientY);
}