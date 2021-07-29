class Cannon{
    constructor(x, y, w, h, angle){
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.angle = angle;
    }
    display(){
        fill("grey");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
       rect(-10, -20, this.w, this.y);
       pop();
       arc(this.x-30, this.y+90, 140, 200, PI, TWO_PI);
       noFill();

    }

}