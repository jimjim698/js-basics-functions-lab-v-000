// Code your solution in this file!

function distanceFromHqInBlocks(street){
  let result 
  switch(street){
  case street > 42:
    result = street - 42
    break;
    case street < 42:
      result = 42 - street
      break;
  }
  
  
}