function fiboEvenSum(n) {
  const fibonacciSequence = fibonacci(n);
  return fibonacciSequence.filter((number => number % 2 === 0)).reduce((accumulator, current) => (accumulator + current));
}

function fibonacci(limit){
  let solution = [1,2];
  let[a,b] = [0,1];
  for(let i =2; i < limit; i++){
    solution.push(solution[a] + solution[b]);
    a++;
    b++;
  }
  return solution;
}
