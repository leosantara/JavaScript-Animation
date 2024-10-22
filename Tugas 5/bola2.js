function Box(width, height, color) {
    if (width === undefined) { width = 40; }
    if (height === undefined) { height = 40; }
    if (color === undefined) { color = "#ffff00"; }
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
}

Box.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    if (this.lineWidth > 0) {
        context.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }
    context.restore();
};

Box.prototype.getBounds = function () {
    return {
        x: this.x - this.width / 2,
        y: this.y - this.height / 2,
        width: this.width,
        height: this.height
    };
};
