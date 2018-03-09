function checkMouseOver(mouseX, mouseY, circle)
{
	var x = circle.xpos + circle.scanCircleWidth/2 + circle.borderWidth;
	var y = circle.ypos + circle.scanCircleWidth/2 + circle.borderWidth;

	var r = (x - mouseX)*(x - mouseX) + (y - mouseY)*(y - mouseY);

	// debug info
	// p3.innerHTML = 'x: ' + mouseX + ' y: ' + mouseY + ' x1: ' + x + ' y1: ' + y + ' r: ' + r;

	if (r <= 576)
	{
		score++;
		circle.changePos();
	}
}