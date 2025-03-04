function counter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  const add = counter();
  add(); // 0
  add(); // 1
  add(); // 2
  add(); // 3