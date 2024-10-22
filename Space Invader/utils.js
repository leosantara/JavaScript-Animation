window.utils={};
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  function (callback) {
                                    return window.setTimeout(callback, 17 /*~ 1000/60*/);
                                  });
}


window.utils.captureMouse = function (element) {
  var mouse = {x: 0, y: 0, event: null},
    body_scrollLeft = document.body.scrollLeft,
    element_scrollLeft = document.documentElement.scrollLeft,
    body_scrollTop = document.body.scrollTop,
    element_scrollTop = document.documentElement.scrollTop,
    offsetLeft = element.offsetLeft,
    offsetTop = element.offsetTop;

  element.addEventListener('mousemove', function (event) {
    var x, y;
    if (event.pageX || event.pageY) {
      x = event.pageX;
      y = event.pageY;
    } else {
      x = event.clientX + body_scrollLeft + element_scrollLeft;
      y = event.clientY + body_scrollTop + element_scrollTop;
    }
    x -= offsetLeft;
    y -= offsetTop;
    mouse.x = x;
    mouse.y = y;
    mouse.event = event;
  }, false);
    return mouse;
};

function keyboardControl(){
  window.addEventListener('keydown', function(event){
      if (event.keyCode === 37) {
          ax = -3; // Move left
      } else if (event.keyCode === 39) {
          ax = 3; // Move right
      }
  }, false);
  
  window.addEventListener('keyup', function(){
      ax = 0;
      ay = 0;
    }, false);
}