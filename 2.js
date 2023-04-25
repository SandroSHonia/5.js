function animal(mew, gaf) {
    return Object.assign({}, mew, gaf);
  }
  
  const mew = {
    animal: "cat",
    age: 2,
    name: "gracy",
  };
  
  const gaf = {
    animal: "dog",
    hobby: "walking",
    bark() {
      console.log('WAF');
    }
  };
  
  console.log(animal(mew, gaf));
  