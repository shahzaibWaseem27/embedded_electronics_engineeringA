class Car {
  
  constructor(name, r, movingDirectionAxis, acceleration, targetMergingDirection){
    this.name = name;
    this.origin_x_Coord = 0;
    this.origin_y_Coord = 0;
    this.r = r;
    this.acceleration = acceleration;
    this.movingDirectionAxis = movingDirectionAxis;
    this.targetMergingDirection = targetMergingDirection;
    this.intersectionAreaFactor = 100;
    this.intersectionAreaDetails = [
  
  
              {

                directionAxis: '+y',
                axisPoint: (CANVAS_HEIGHT/2) - this.intersectionAreaDetails

              },
              {

                directionAxis: '-x',
                axisPoint: (CANVAS_WIDTH/2) + this.intersectionAreaDetails

              },
              {

                directionAxis: '-y',
                axisPoint: (CANVAS_HEIGHT/2) + this.intersectionAreaDetails

              },
              {

                directionAxis: '+x',
                axisPoint: (CANVAS_WIDTH/2) - this.intersectionAreaDetails

              }


    ];
    this.mergingMatrix = [
    
    [
      0,
      0,
      {
        
        x: (CANVAS_WIDTH/2) - 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) + 0.25*ROAD_WIDTH
        
      },
      {
        
        x: (CANVAS_WIDTH/2) - 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) - 0.25*ROAD_WIDTH
        
      }
    ],
    [
      0,
      0,
      {
        
        x: (CANVAS_WIDTH/2) + 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) + 0.25*ROAD_WIDTH
      
      },
      {
        
        x: (CANVAS_WIDTH/2) + 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) - 0.25*ROAD_WIDTH
        
      }
    ],
    [
      {
        
        x: (CANVAS_WIDTH/2) - 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) + 0.25*ROAD_WIDTH
        
      },
      {
        
        x: (CANVAS_WIDTH/2) + 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) + 0.25*ROAD_WIDTH
        
      },
      0,
      0
    ],
    [
      {
        
        x: (CANVAS_WIDTH/2) - 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) - 0.25*ROAD_WIDTH
        
      }, 
      {
        
        x: (CANVAS_WIDTH/2) + 0.25*ROAD_WIDTH,
        y: (CANVAS_HEIGHT/2) - 0.25*ROAD_WIDTH
        
      },
      0,
      0
    ]

  ]
  }
  
  show(){
    
   
    
    ellipse(this.origin_x_Coord, this.origin_y_Coord, this.r, this.r);
    
    
    textSize(20)
    
    text(this.name, this.origin_x_Coord-0.15*this.r, this.origin_y_Coord+0.15*this.r);
    
  }
  
  stop(){
    
    this.acceleration = 0;
    
  }
  
  initSpawnPosition(){
    
      let carSpawnPosition = {};
  
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



      for(let possiblePosition of cars_possible_startingPositions){

        if(this.movingDirectionAxis === possiblePosition.movingDirectionAxis){

          carSpawnPosition.x = possiblePosition.x;
          carSpawnPosition.y = possiblePosition.y;

        }

      }

      this.origin_x_Coord = carSpawnPosition.x;
      this.origin_y_Coord = carSpawnPosition.y;
    
  }
  
  insideIntersectionArea(){
    
    
    switch(this.movingDirectionAxis){
        
      case '+y':
        
        
        return this.origin_y_Coord >= this.intersectionAreaDetails[0].axisPoint;
   
        
      case '-y':
        
        return this.origin_y_Coord <= this.intersectionAreaDetails[2].axisPoint;
        
        
      case '-x':
        
        return this.origin_x_Coord <= this.intersectionAreaDetails[1].axisPoint;
           
       
      case '+x':
        
        return this.origin_x_Coord >= this.intersectionAreaDetails[3].axisPoint;
        
        
    }
    
  }
  
  isNearAnotherCar(nearThreshold, cars){
    
    for(let car of cars){
      
      if(this.name !== car.name){
        
        if(Math.abs(this.origin_x_Coord - car.origin_x_Coord) < nearThreshold && Math.abs(this.origin_y_Coord - car.origin_y_Coord) < nearThreshold){
          
          this.acceleration = 0;
          
          return true;
        }
        
      }
      
    }
    
    return false;
    
    
  
    
  }
  
  canMerge(){
    
    let thisRow;
    let thisCol;

    switch(this.targetMergingDirection){


      case '+y':

        thisRow = 0;
        break;

      case '-y':
        thisRow = 1;
        break;

      case '+x':
        thisRow = 2;
        break;

      case '-x':
        thisRow = 3;
        break;


    }

  switch(this.movingDirectionAxis){


      case '+y':

        thisCol = 0;
        break;

      case '-y':
        thisCol = 1;
        break;

      case '+x':
        thisCol = 2;
        break;

      case '-x':
        thisCol = 3;
        break;


    }
    
    if(Math.abs(this.origin_x_Coord - this.mergingMatrix[thisRow][thisCol].x) < 2){
      
      if(Math.abs(this.origin_y_Coord - this.mergingMatrix[thisRow][thisCol].y) < 2){
        
        return true;
        
      } else {
        
        return false;
        
      }
      
    } else {
      
      return false;
      
    }
    
}
  
  merge(){
    
    this.movingDirectionAxis = this.targetMergingDirection;
    
  }
  
  
  accelerate(){
    
    switch(this.movingDirectionAxis){
        
      case '+x':
        
        if(this.origin_x_Coord > CANVAS_WIDTH){
          
          this.origin_x_Coord = 0;
          
        } else {
                      
          this.origin_x_Coord += this.acceleration;
          
        }
        
        break;
        
      case '-x':
        
        if(this.origin_x_Coord < 0) {
          
          this.origin_x_Coord = CANVAS_WIDTH;
          
        } else {
                      
          this.origin_x_Coord -= this.acceleration;
          
        }
        
        break;
        
      case '+y':
        
        if(this.origin_y_Coord > CANVAS_HEIGHT){
          
          this.origin_y_Coord = 0;
          
        } else {
          
          this.origin_y_Coord += this.acceleration;
          
        }
        
        break;
        
      case '-y':
        
        if(this.origin_y_Coord < 0) {
          
          this.origin_y_Coord = CANVAS_HEIGHT;
          
        } else {
          
          this.origin_y_Coord -= this.acceleration;
          
        }
        
        break;
        
    }
    
  }
  
  
}
