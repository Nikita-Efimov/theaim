var score = 0;

var cursor = new Cursor;
var circles = new Circles;

windowResize();

circles.nextCircle();

setInterval(checkTime, 100);

window.addEventListener("mousemove", cursor.move.bind(cursor), false);
window.addEventListener("resize", windowResize);