//TODO:add negative numbers
//TODO:add decimal handling

const screen = document.querySelector('#screen');
let toOperate=[];
const debugOutput = document.querySelector('#debug');

function operate(operator,a,b){
    if(operator=='add'){ return add(a,b);}
    else if(operator=='subtract'){ return subtract(a,b);}
    else if(operator=='multiply'){ return multiply(a,b);}
    else if(operator=="divide"){return divide(a,b);}
    return 'error';

}

const equals = function (){
    if(toOperate.length<3){return toOperate[0];}
 
    let op;
    const solution=toOperate.reduce(function(a,b,i){
        if(i==0){ return b;  
        }else if(+b!==b){
                op=b;
                return a;
        }else{
            return operate(op,a,b)
            // switch (op) {
            //     case 'add':
            //         return add(a,b);
            //         break;
            //     case 'subtract': 
            //         return subtract(a,b);
            //         break;
            //     case 'multiply': 
            //         return multiply(a,b);
            //         break;
            //     case 'divide': 
            //         return divide(a,b);
            //         break;
            // }
        }

        
    },0)
    
    return solution;
 
}


const clearScreen=function(){
    screen.textContent='';
}

//ASSIGN BUTTONS TO FUNCTIONS
const numButtons=document.querySelectorAll('.numButton')

numButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        const num = e.target.id;
        if(toOperate.length==2){
            clearScreen();
        }
        screen.textContent=`${screen.textContent}${num}`;

    });
});

const operatorButtons=document.querySelectorAll('.operatorButton')

operatorButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        if(screen.textContent==''){return;}
        
        const op = e.target.id;
        if(toOperate.length==0){
            toOperate.push( +Number( screen.textContent));
            toOperate.push(op)
            clearScreen();
            console.table(toOperate);
        }else if(toOperate.length==2){
            toOperate.push( +Number( screen.textContent));
            console.table(toOperate);
        }

        if(toOperate.length == 1){
            clearScreen();
            toOperate.push(op);
            console.table(toOperate);

            return;
        }
        if (toOperate.length==3){
            toOperate=[equals()]
            clearScreen();
            screen.textContent=`${toOperate[0]} ${op}`;
            toOperate.push(op);
            console.table(toOperate);

        }

        
        
    });
});

const clearButton=document.querySelector('#clear')
clearButton.addEventListener('click',()=>{
    clearScreen();
    toOperate=[];
}
);
const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click',function(){
    if(screen.textContent!=='' && toOperate.length==2) {
        toOperate.push( +Number( screen.textContent))
    } else { return; }

    const answer=equals();
    clearScreen();
    toOperate=[answer];
    screen.textContent=answer;
    console.table(toOperate);

});


//MATH FUNCTIONS

function add() {
	let sum = Array.from(arguments).reduce((a,b)=>a+b,0);
    return sum.typeOf='number'?sum:0;
};

function subtract() {
  return Array.from(arguments).reduce((a,b)=>a-b,arguments[0]*2);

};
function multiply() {
  let product= +Array.from(... arguments).reduce((a,b)=>a*b,1);
  return  product.typeOf='number'? product:0; 
};
function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

const sum = function() {
  let sum = +Array.from(... arguments).reduce((a,b)=>a+b,0);
  return sum.typeOf='number'?sum:0; 
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