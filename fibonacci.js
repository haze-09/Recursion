function fibs(n) {
  let sequence = [];
  let a = 0;
  let b = 1;
  let c;

  if (n <= 0) {
    return "Enter a positive number";
  } else if (n === 1) {
    sequence.push(a);
  } else if (n === 2) {
    sequence.push(a);
    sequence.push(b);
  } else {
    sequence.push(a);
    sequence.push(b);

    for (i = 0; i < n - 2; i++) {
      c = a + b;
      sequence.push(c);
      a = b;
      b = c;
    }
  }

  return sequence;
}


function fibsRec(n) {

  if (n <= 0) {
    return "Enter a positive number";
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let sequence = fibsRec(n-1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
}

console.log(fibsRec(10));
