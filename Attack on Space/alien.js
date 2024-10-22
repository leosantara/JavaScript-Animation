function Alien(imageSrc, scale) { 
  this.x=0;
  this.y=0;
  this.lineWidth=1;
  this.rotation=0;
  this.scaleX=1;
  this.scaleY=1;
  this.vx=0;
  this.vy=0;
  this.ax=0;
  this.ay=0;
  this.alive = false;
  this.scale = scale

  // Load the image if an image source is provided
  if (imageSrc) {
      this.image = new Image();
      this.image.src = imageSrc;
  this.image.onload = () => {
          this.width = this.image.naturalWidth * this.scale;
          this.height = this.image.naturalHeight * this.scale;
  };
  } else {
      this.image = null;
  }
}

Alien.prototype.update = function() {
}

Alien.prototype.draw = function (context) { 
  context.save(); 
  context.translate(this.x, this.y); 
  context.rotate(this.rotation); 
  context.scale(this.scaleX, this.scaleY);
  context.lineWidth = this.lineWidth; 

  if (this.image) {
      // Draw the image if it exists
      context.drawImage(this.image,0,0, this.width, this.height);
  } else {
      // Fallback to drawing a rectangle if no image is provided
      context.fillStyle = this.color; 
      context.beginPath(); 
      context.rect(0, 0, this.width, this.height); 
      context.closePath(); 
      context.fill(); 
      if (this.lineWidth > 0) { 
          context.stroke(); 
      }
  }

  context.restore(); 
};