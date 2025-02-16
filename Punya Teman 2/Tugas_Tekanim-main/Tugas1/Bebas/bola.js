function Bola(radius,color){
    if(radius==undefined)(radius=40);
    if(color==undefined)(color="#00000000");
    this.x=0;
    this.y=0;
    this.radius=radius;
    this.color= color;
	this.lineWidth=1;
	this.rotation=0;
	this.scaleX=1;
	this.scaleY=1;
	this.vx=0;
	this.vy=0;
	this.ax=0;
	this.ay=0;
}

Bola.prototype.draw=function(context){
    context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX,this.scaleY);
	context.lineWidth=this.lineWidth;
	context.fillStyle=this.color;
	context.beginPath();
	context.arc(0,0,this.radius,0,(Math.PI*2),true);
	context.closePath();
	context.fill();
	if(this.lineWidth>0){
		context.stroke();
	}
	context.restore();

}