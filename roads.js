const showRoads = (CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_LENGTH, ROAD_WIDTH) => {
  
  let each_rectangle_length = (CANVAS_WIDTH - ROAD_WIDTH)/2;
  
  let each_rectangle_height = (CANVAS_HEIGHT - ROAD_WIDTH)/2;
  
  let rectangle_topLeft_origin = {
    
    x: 0,
    y: 0
    
  }
  
  let rectangle_topRight_origin = {
    
    x: each_rectangle_length + ROAD_WIDTH,
    y: 0
    
  }
  
  let rectangle_bottomLeft_origin = {
    
    x: 0,
    y: each_rectangle_height + ROAD_WIDTH
    
  }
  
  let rectangle_bottomRight_origin = {
    
    x: each_rectangle_length + ROAD_WIDTH,
    y: each_rectangle_height + ROAD_WIDTH
    
  } 
  
  rect(rectangle_topLeft_origin.x, rectangle_topLeft_origin.y, each_rectangle_length, each_rectangle_height);
  
  
  rect(rectangle_topRight_origin.x, rectangle_topRight_origin.y, each_rectangle_length, each_rectangle_height);
  
  
  rect(rectangle_bottomLeft_origin.x, rectangle_bottomLeft_origin.y, each_rectangle_length, each_rectangle_height);
  
  
  rect(rectangle_bottomRight_origin.x, rectangle_bottomRight_origin.y, each_rectangle_length, each_rectangle_height);
  
  line(CANVAS_WIDTH/2, 0, CANVAS_WIDTH/2, each_rectangle_height);
  line(0, CANVAS_HEIGHT/2, each_rectangle_length, CANVAS_HEIGHT/2);
  line(CANVAS_WIDTH/2, each_rectangle_height + ROAD_WIDTH, CANVAS_WIDTH/2, CANVAS_WIDTH);
  line(each_rectangle_length + ROAD_WIDTH, CANVAS_HEIGHT/2, CANVAS_WIDTH, CANVAS_HEIGHT/2);
  
  
}