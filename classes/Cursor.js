class Cursor 
{
    constructor() 
    {
        var cursor = document.createElement('div');
        cursor.setAttribute('class', 'cursor');
        document.body.appendChild(cursor);

        this.p = cursor;
        this.size = parseInt(getComputedStyle(cursor).width);
    }

    move(e)
    {
        var x = e.clientX;
        var y = e.clientY;
        var left = x - this.size/2;
        var top = y - this.size/2;
        this.p.style.left = left + "px";
        this.p.style.top = top + "px";

        circles.checkMouseOver(x, y);
    }
};