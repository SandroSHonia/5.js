function returnTruthy(a, b) {
    if (a === undefined || b === null) {
      return b;
    } else {
      return a;
    }
  }
  
  console.log(returnTruthy(2, "hi")); 
  console.log(returnTruthy(undefined, "hi")); 
  console.log(returnTruthy(false, 4)); 
  