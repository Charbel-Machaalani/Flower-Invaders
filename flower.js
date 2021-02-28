function Flower(x,y, r, r){
  this.x = x
  this.y = y
  this.r = r
  
  this.xdir = 1
  this.ydir = 0
  
  this.show = function(){
    fill(255,0,200)
    ellipse(this.x, this.y, this.r, this.r)
  }
  
  this.move = function(){
    this.x += this.xdir
    this.y += this.ydir
  }
  
  this.grow = function(){
    this.r += 2
  }
  
  this.shiftDown = function(){
    this.y +=    +20
  }
}