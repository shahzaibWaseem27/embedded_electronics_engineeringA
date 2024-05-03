const showIntersectionArea = (CANVAS_WIDTH, CANVAS_HEIGHT, ROAD_WIDTH) => {
  
  let areaIncreaseFactor = 1.8;

  
  line(

        CANVAS_WIDTH/2 - areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 - areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_WIDTH/2 + areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 - areaIncreaseFactor*(ROAD_WIDTH/2)
  );
  
  line(

        CANVAS_WIDTH/2 - areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 - areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_WIDTH/2 - areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 + areaIncreaseFactor*(ROAD_WIDTH/2)
  
  );
  
  line(

        CANVAS_WIDTH/2 - areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 + areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_WIDTH/2 + areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 + areaIncreaseFactor*(ROAD_WIDTH/2)
  
  );
  
  line(

        CANVAS_WIDTH/2 + areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 + areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_WIDTH/2 + areaIncreaseFactor*(ROAD_WIDTH/2),
        CANVAS_HEIGHT/2 - areaIncreaseFactor*(ROAD_WIDTH/2)
  
  );
  

  
  
  
  
}