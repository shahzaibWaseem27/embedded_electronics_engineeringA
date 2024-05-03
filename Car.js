class Car {
  
  constructor(name, CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_WIDTH, origin_x_Coord, origin_y_Coord, r, movingDirectionAxis, targetMergingDirection){
    this.name = name;
    this.origin_x_Coord = origin_x_Coord;
    this.origin_y_Coord = origin_y_Coord;
    this.insideIntersectionArea = false;
    this.r = r;
    this.acceleration = random(0, 1);
    this.movingDirectionAxis = movingDirectionAxis;
    this.targetMergingDirection = targetMergingDirection;
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
    
    if(this.origin_x_Coord === this.mergingMatrix[thisRow][thisCol].x){
      
      if(this.origin_y_Coord === this.mergingMatrix[thisRow][thisCol].y){
        
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
  
  
  accelerate(targetVeloctiy){
    
    switch(this.movingDirectionAxis){
        
      case '+x':
        
        if(this.origin_x_Coord > CANVAS_WIDTH){
          
          this.origin_x_Coord = 0;
          
        } else {
                      
          this.origin_x_Coord += targetVeloctiy + this.acceleration;
          
        }
        
        break;
        
      case '-x':
        
        if(this.origin_x_Coord < 0) {
          
          this.origin_x_Coord = CANVAS_WIDTH;
          
        } else {
                      
          this.origin_x_Coord -= targetVeloctiy + this.acceleration;
          
        }
        
        break;
        
      case '+y':
        
        if(this.origin_y_Coord > CANVAS_HEIGHT){
          
          this.origin_y_Coord = 0;
          
        } else {
          
          this.origin_y_Coord += targetVeloctiy + this.acceleration;
          
        }
        
        break;
        
      case '-y':
        
        if(this.origin_y_Coord < 0) {
          
          this.origin_y_Coord = CANVAS_HEIGHT;
          
        } else {
          
          this.origin_y_Coord -= targetVeloctiy + this.acceleration;
          
        }
        
        break;
        
    }
    
  }
  
  
}