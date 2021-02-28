var ship
var flowers = []
var drops = []

function setup() {
  createCanvas(600, 400)
  ship = new Ship()
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i * 80 + 80, 50, 50, 50)
  }
}

function draw() {
  background(51)
  ship.show()
  
  ship.move()

  for (var i = 0; i < drops.length; i++) {
    drops[i].show()
    drops[i].move()
    for (var j = 0; j < flowers.length; j++){
      if (drops[i].hits(flowers[j])){
        console.log("WATERING")
        flowers[j].grow()
        drops[i].evaporate()
      }
    }
  }
  
  for (var i = 0; i < drops.length; i++){
    if (drops[i].toDelete){
      drops.splice(i, 1)
    }
  }
  
  var edge = false
  
  for (var i = 0; i < flowers.length; i++){
    flowers[i].show()
    flowers[i].move()
    if (flowers[i].x > width-20 || flowers[i].x < 20){
      edge = true
    }
  }
  if (edge){
    for (var i = 0; i < flowers.length; i++){
      flowers[i].xdir *= -1
      flowers[i].shiftDown()
    }
  }
}

function keyReleased(){
  if (key != " ")
    ship.xdir = 0
}
function keyPressed() {

  if (key === ' ') {
    var drop = new Drop(ship.x, height, 10,10)
    drops.push(drop)
  }

  if (keyCode === RIGHT_ARROW) {
    ship.direction(1)
  } else if (keyCode === LEFT_ARROW) {
    ship.direction(-1)
  }
  
}