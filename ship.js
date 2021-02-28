function Ship(){
  this.x=width/2
  this.xdir = 0
  
  this.show = function(){
    fill(255);
    rectMode(CENTER)
    rect(this.x, height-20,20, 60)
  }
  
  this.direction = function(dir){
    this.xdir = dir
  }
  
  this.move = function(){
    this.x += 1 * this.xdir
  }
}