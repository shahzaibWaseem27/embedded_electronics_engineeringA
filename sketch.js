const NUM_OF_CARS = 4
const CAR_RADIUS = 30
const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 500;
const ROAD_LENGTH = 130;
const ROAD_WIDTH = 120;

let cars;

function setup() {
  
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  
  
  cars = createCars(NUM_OF_CARS);
  
}

function draw() {

  background(220);
  
  showRoads(CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_LENGTH, ROAD_WIDTH);
  
  showIntersectionArea(CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_WIDTH);
  
  for(let car of cars){
    
//     if(car.canMerge()){
      
//       car.merge()
      
//     }
    
    if(car.isNearAnotherCar(70, cars)){
      
      car.accelerate(0);
      
    } else {
      
      car.accelerate(1)
      
    }
  
    car.show()
    
    
   }
  
}
