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


function distanceTravelledInFeet(start,finish){
  let result 
  let x
  x = start - finish; 
  (x<0) ? x * -1 : x;
  result = x *264
  return result 
  
}




