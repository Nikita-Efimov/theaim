init();
window.addEventListener("mousemove", cursorMove, false);
window.addEventListener("resize", windowResize);
windowResize();
setInterval(checkTime, 100);