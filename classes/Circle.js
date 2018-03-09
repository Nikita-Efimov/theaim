class Circle
{
    constructor() 
    {
        var circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        var scancircle = document.createElement('div');
        scancircle.setAttribute('class', 'scancircle');
        var circlekernel = document.createElement('div');
        circlekernel.setAttribute('class', 'circlekernel');
        circle.appendChild(scancircle);
        circle.appendChild(circlekernel);
        document.body.appendChild(circle);

        this.p = circle;
        this.scanCircleWidth = parseInt(getComputedStyle(scancircle).width);
        this.xpos = parseInt(getComputedStyle(circle).left);
        this.ypos = parseInt(getComputedStyle(circle).top);
        this.borderWidth = parseInt(getComputedStyle(circle).borderWidth);
        this.size = parseInt(getComputedStyle(circle).width) + this.borderWidth * 2;
        this.visibil = 1;
    }

    changePos()
    {
        this.xpos = this.getRandomInt(minWidth + this.size, maxWidth - this.size);
        this.ypos = this.getRandomInt(minHeight + this.size, maxHeight - this.size);
        this.p.style.left = this.xpos + "px";
        this.p.style.top = this.ypos + "px";
    }

    checkMouseOver(mouseX, mouseY)
    {
        var x = this.xpos + this.scanCircleWidth/2 + this.borderWidth;
        var y = this.ypos + this.scanCircleWidth/2 + this.borderWidth;

        var r = (x - mouseX)*(x - mouseX) + (y - mouseY)*(y - mouseY);

        // debug info
        // p3.innerHTML = 'x: ' + mouseX + ' y: ' + mouseY + ' x1: ' + x + ' y1: ' + y + ' r: ' + r;

        if (r <= 576)
            return 1;

        return 0;
    }

    get visibility()
    {
        return this.visibil;
    }

    set visibility(visibility)
    {
        var arrswitch = ['hidden', 'visible'];
        if (visibility != this.visibil)
        {
            this.p.style.visibility = arrswitch[visibility];
            this.visibil = visibility;
        }
    }

    getRandomInt(min, max) { return Math.floor((Math.random()) * (max - min + 1)) + min; }
};