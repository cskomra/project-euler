const numArray = Array(1000).fill().map((_, i) => i+1);

const printNumArray = array => {
  var numSum = 0;
  for(num in array){
    if(num % 3 === 0 || num % 5 === 0){
      numSum += parseInt(num);
      console.log(num);
    }
  }
  console.log(numSum);
}

printNumArray(numArray);