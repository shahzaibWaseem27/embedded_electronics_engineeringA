function createCars(NUM_OF_CARS){
  
  let cars = [];
  
  let usedCarNames = [];

  let trafficAxisDirections = ['+y', '-y', '+x', '-x'];
  
  let cars_possible_startingPositions = [
  
    
    {
      movingDirectionAxis: '+y',
      x: (CANVAS_WIDTH/2) - 0.25*ROAD_WIDTH,
      y: 0
    },
    {
      movingDirectionAxis: '-x',
      x: CANVAS_WIDTH,
      y: (CANVAS_HEIGHT/2) - 0.25*ROAD_WIDTH
    },
    {
      movingDirectionAxis: '-y',
      x:(CANVAS_WIDTH/2) + 0.25*ROAD_WIDTH,
      y: CANVAS_HEIGHT
    },
    {
      movingDirectionAxis: '+x',
      x: 0,
      y: (CANVAS_HEIGHT/2) + 0.25*ROAD_WIDTH
    }

  ];
  
  let usedNames = [];
  
  for(let i = 0; i < NUM_OF_CARS; i++){
            
        let thisRandomCarStartingPos = random(cars_possible_startingPositions);
    
    let thisDirection = thisRandomCarStartingPos.movingDirectionAxis;
    
    let randomTargetAxisDir = thisDirection
    
    while(randomTargetAxisDir === thisDirection){
      randomTargetAxisDir = random(trafficAxisDirections)
    }
    
    
    let thisOriginXCoord = thisRandomCarStartingPos.x
    let thisOriginYCoord = thisRandomCarStartingPos.y
    
    let thisCarName = random(['a', 'b', 'c', 'd']);
    
    while(usedCarNames.includes(thisCarName)){
      thisCarName = random(['a', 'b', 'c', 'd']);
    }
    
    usedCarNames.push(thisCarName);
    
    cars[i] = new Car(thisCarName,CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_WIDTH, thisOriginXCoord, thisOriginYCoord, CAR_RADIUS, thisDirection, randomTargetAxisDir)
    
  }
 
  
  return cars;
  
  
}