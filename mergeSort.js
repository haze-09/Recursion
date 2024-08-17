function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function mergeSort(array){
    if(array.length === 1){
        return array;
    }
    else{
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0,middle);
        let right = array.slice(middle);

        return merge(mergeSort(left),mergeSort(right));
    }
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(array));