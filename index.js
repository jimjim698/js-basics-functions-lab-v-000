// Code your solution in this file!

function distanceFromHqInBlocks(street){
  let result 
  switch(street >42){
  case true:
    result = street - 42
    break;
    case false:
      result = 42 - street
      break;
  }
  return result
  
}

function distanceFromHqInFeet(street){
    let result 
  switch(street >42){
  case true:
    result = (street - 42) * 264
    break;
    case false:
      result = (42 - street) * 264
      break;
  }
  return result
}