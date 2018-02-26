var minWidth, maxWidth, minHeight, maxHeightstartTime, score, scanCircleWidth, cursorSize,
	circleBroderSize, circleXpos, circleYpos, circleSize, 
	cursorP, circleP;

function init()
{
	score = 0

	cursorP = document.getElementsByClassName('cursor')[0];
	circleP = document.getElementsByClassName('circle')[0];

	scanCircleWidth = parseInt(getComputedStyle(document.getElementsByClassName('scancircle')[0]).width);
	cursorSize = parseInt(getComputedStyle(document.getElementsByClassName('cursor')[0]).width);
	circleBroderSize = parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).borderWidth);
	circleXpos = parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).left);
	circleYpos = parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).top);
	circleSize = parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).width) + parseInt(getComputedStyle(document.getElementsByClassName('circle')[0]).borderWidth) * 2;
}

function windowResize()
{
	minHeight = 5;
	maxHeight = window.innerHeight - 22;
	minWidth = 5;
	maxWidth = window.innerWidth - 5;

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