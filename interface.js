var minWidth, maxWidth, minHeight, maxHeight, startTime;

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

	circles.nextCircle();
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