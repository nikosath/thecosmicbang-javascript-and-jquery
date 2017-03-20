console.log('hello');
function functionName(index, sum) {
  if (index > 0) {
    index -= 1;
    sum += 3;
    functionName(index, sum);
  } else {
    return sum;
  }
}
function functionName(index, sum) {
  if (index > 0) {
    index -= 1;
    sum += 3;
    functionName(index, sum);
  } else {
    return sum;
  }
}
