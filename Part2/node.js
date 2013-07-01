#!/usr/bin/env node
var fs = require('fs');

function isPrime(n, primes) {
  var max = Math.sqrt(n);
  for(var i = 0;  i < primes.length  &&  primes[i] <= max;  i++ ) {
        if( n % primes[i] === 0 )
            return false;
    }
    return true;
}

function findPrimes(max) {
  var i = 3, j, primes = [2];
  
  while (primes.length <= max) {
    if (isPrime(i, primes)){
      primes.push(i);
    }
    i = i + 2;
  }
  return primes + "";
}

function checkAndFindPrimes(max){
  if (max < 2) {return "max should be greater then 2. \n";}
  return findPrimes(max);
}

var outfile = "primes.txt";
var out = checkAndFindPrimes(100);
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

