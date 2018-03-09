class Circles
{
    constructor() 
    {
        this.circle1 = new Circle;
        this.circle2 = new Circle;
        this.circle2.visibility = 0;
    }

    nextCircle()
    {
        switch (this.circle1.visibility)
        {
            case 0:
                this.circle2.visibility = 0;
                this.circle1.visibility = 1;
                this.circle2.changePos();
            break;
            case 1:
                this.circle1.visibility = 0;
                this.circle2.visibility = 1;
                this.circle1.changePos();
            break;
        }
    }

    checkMouseOver(mouseX, mouseY)
    {
        if (this.circle1.visibility && this.circle1.checkMouseOver(mouseX, mouseY) || this.circle2.visibility && this.circle2.checkMouseOver(mouseX, mouseY))
        {
            score++;
            this.nextCircle();
        }
    }
};