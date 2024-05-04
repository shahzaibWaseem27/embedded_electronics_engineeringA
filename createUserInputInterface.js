const createUserInputInterface = () => {
  
  newCarMovingDirectionInput = createSelect()
  
  newCarMovingDirectionInput.option("+x")
  newCarMovingDirectionInput.option("+y")
  newCarMovingDirectionInput.option("-x")
  newCarMovingDirectionInput.option("-y")
  
  newCarMovingDirectionInput.selected("+x")
  
  newCarMovingDirectionInput.position(700,200);
  
  newCarMergingDirection = createSelect()
  
  newCarMergingDirection.option("+x")
  newCarMergingDirection.option("+y")
  newCarMergingDirection.option("-x")
  newCarMergingDirection.option("-y")
  
  newCarMergingDirection.selected("-y")
  
  newCarMergingDirection.position(800,200);
  
  newCarAcceleration = createInput();
  
  newCarAcceleration.position(700, 250)
  
  newCarAcceleration.value(1);

  
  newCarSubmitButton = createButton("Create car")
  
  newCarSubmitButton.position(700, 300)
  
  newCarSubmitButton.mousePressed(handleCreatingNewCar)
  
  deleteAllCarsButton = createButton("Delete all cars");
  
  deleteAllCarsButton.position(700, 500)
  
  deleteAllCarsButton.mousePressed(handleDeletingAllCars);
  
}