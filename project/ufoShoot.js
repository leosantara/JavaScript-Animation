class UfoShoot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.vy = 5;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = "#FF0000";
        context.fill();
        context.closePath();
    }

    update() {
        this.y += this.vy;
    }
}
