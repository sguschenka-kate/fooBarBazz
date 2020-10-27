// let array = [5, 3, 15, 20, 25, 10, 10, 12, 20, 25, 5, 3, 15, 20, 25,];

let array = [];

function getRandomInt(min, max) {
  let randomInt = Math.floor(Math.random() * (max-min)) + min;
  return randomInt;
}

function pushArray(max) {
  while (array.length < max) {
    array.push(getRandomInt(10, 20));
  }
  console.log(array);
  return array
} 

pushArray(10);

function fooBarBazz(array, num) {
  for (i = 0; i < num; i++) {
    console.log(array[i])
    let element = array[i];
    if (element % 3 === 0) {
      console.log('foo');
      alert('foo');
    } else if (element % 5 === 0) {
      console.log('bar');
      alert('bar');
    } else if (element % 3 === 0 && element % 5 === 0) {
      console.log('FooBazz');
      alert('FooBazz');
    } else {
      console.log('nothing');
    }
  }
}

fooBarBazz(array, 4);