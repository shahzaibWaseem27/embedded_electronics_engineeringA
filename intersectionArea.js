const showIntersectionArea = (CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_WIDTH, intersectionAreaFactor) => {
  
  let intersectionAreaDetails = [
  
  
              {

                directionAxis: '+y',
                axisPoint: (CANVAS_HEIGHT/2) - intersectionAreaFactor

              },
              {

                directionAxis: '-x',
                axisPoint: (CANVAS_WIDTH/2) + intersectionAreaFactor

              },
              {

                directionAxis: '-y',
                axisPoint: (CANVAS_HEIGHT/2) + intersectionAreaFactor

              },
              {

                directionAxis: '+x',
                axisPoint: (CANVAS_WIDTH/2) - intersectionAreaFactor

              }


    ];
  

  let rect_x_coord;
  let rect_y_coord;
  
  
  for(let detail of intersectionAreaDetails){
    
    if(detail.directionAxis === '+y'){
      rect_y_coord = detail.axisPoint;
    }
    
    if(detail.directionAxis === '+x'){
      rect_x_coord = detail.axisPoint;
    }
    
  }
  
  rect(rect_x_coord, rect_y_coord, 2*intersectionAreaFactor);
  
  
  
  
}