function Drop(x,y,r){
  this.x = x
  this.y = y
  this.r = r
  this.toDelete = false
  
  this.show = function(){
    fill(50,0,200)
    ellipse(this.x, this.y, this.r, this.r)
  }
  
  this.hits = function(flower){
    var d = dist(this.x,this.y, flower.x, flower.y)
      if (d < (this.r + flower.r) ){
        return true
      } else {
        return false
      }
  }
  
  this.evaporate = function(){
    this.toDelete = true
  }
  
  this.move = function(){
    this.y += -5
  }
}