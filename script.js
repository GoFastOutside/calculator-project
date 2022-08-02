const add = function() {
	let sum = Array.from(arguments).reduce((a,b)=>a+b,0);
  return sum.typeOf='number'?sum:0;
};

const subtract = function() {
  return Array.from(arguments).reduce((a,b)=>a-b,arguments[0]*2);

};

const sum = function() {
  let sum = +Array.from(... arguments).reduce((a,b)=>a+b,0);
  return sum.typeOf='number'?sum:0; 
};

const multiply = function() {
  let product= +Array.from(... arguments).reduce((a,b)=>a*b,1);
  return  product.typeOf='number'? product:0; 
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if(n===0){return 1;}
  let total=1;
  for (let i=1;i<=n;i++){
    total=total*i;
  }
  return total;
};