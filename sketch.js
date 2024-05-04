const CAR_RADIUS = 30
const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 550;
const ROAD_LENGTH = 130;
const ROAD_WIDTH = 120;
const intersectionAreaFactor = 100;

let cars = [];

let carsInsideIntersectionArea = []

let newCarMovingDirectionInput;

let newCarMergingDirection;

let newCarAcceleration;

let newCarSubmitButton;

let deleteAllCarsButton;


function setup() {
  
  
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  
  createUserInputInterface();
  
  let firstCar = new Car('a', CAR_RADIUS, '+x', 1, '-y')
  
  firstCar.initSpawnPosition();
  
  cars.push(firstCar);
  
}
  

function draw() {

  background(220);
  
  showRoads(CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_LENGTH, ROAD_WIDTH);
  
  showIntersectionArea(CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_WIDTH, intersectionAreaFactor);
  
  
  for(let i = cars.length - 1; i >= 0; i--){
    
//     if(car.canMerge()){
      
//       car.merge()
      
//     }
    
    if(cars[i].isNearAnotherCar(60, cars)){
      
      cars[i].stop();
      
    } else if(cars[i].insideIntersectionArea()){
      
      if(!carsInsideIntersectionArea.includes(cars[i].name)){
      
          carsInsideIntersectionArea.push(cars[i].name);
          console.log(carsInsideIntersectionArea);
        
      }
      
      cars[i].accelerate()
      
              
    } else {
      
      cars[i].accelerate()
      
    }
  
    cars[i].show()
    
    
   }
  
  
}


const handleCreatingNewCar = () => {
  
  
  let newCar = new Car(random(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']), CAR_RADIUS, newCarMovingDirectionInput.selected(), parseInt(newCarAcceleration.value()), newCarMergingDirection.selected());
  
  newCar.initSpawnPosition();
    
  cars.push(newCar);
  
}




const handleDeletingAllCars = () => {
  
  for(let i = cars.length - 1; i >= 0; i--){
    
    cars.pop()
    
  }
  
  for(let i = carsInsideIntersectionArea.length - 1; i >= 0; i--){
    
    carsInsideIntersectionArea.pop()
    
  }
  
}

