const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// The map will take all number in the originalArray and multiply each by 3. The value of tripledArray will be [3, 9, 6, 15,
// 30]
const tripledArray = originalArray.map(data => data * 3);
console.log(tripledArray);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// The map will check each number in the originalArray to see if they are either even or odd. The value of oddOrEven will be
// ['odd', 'odd', 'even', 'odd', 'even'];
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
console.log(oddOrEven);
