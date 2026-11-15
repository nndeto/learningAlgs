//helper function to find the smallest item
const smallestFind = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

//actual sort implementation
const selectionSort = (arr) => {
  let sortedArr = [];
  let unsortedArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let smallest = smallestFind(unsortedArr);
    sortedArr.push(unsortedArr[smallest]);
    unsortedArr.splice(smallest, 1);
  }

  return sortedArr;
};
