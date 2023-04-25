function destructureObject(obj) {
  const { name, age, address: { city } } = obj;
  const hobby = obj.hobby || "nohobbies";
  return [name, age, city, hobby];
}

const step = {
  name: "Stephen",
  surName: "Curry",
  age: 35,
  address: {
    country: "United States",
    city: "San Francisco",
  },
};

const harrry = {
  id: 1,
  name: "Harry",
  surName: "Houdini",
  age: 25,
  address: {
    country: "United States",
    city: "New York",
  },
  hobby: "Magic",
};

console.log(destructureObject(step)); 
console.log(destructureObject(harrry)); 