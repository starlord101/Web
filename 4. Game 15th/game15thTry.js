//Игра "пятнашки".
const values = getRandomArray();
let indexElement = values.indexOf(16);
values[indexElement] = " ";


let maxNumber = 15;
let tmp = "";
for(let i = 0; i < 16; i++){

  let rValue = Math.round(Math.random()*maxNumber);
  tmp += '<input type = "button" value = "'+values[rValue]+'">';
  let tmp1 = values[rValue];
  values[rValue] = values[maxNumber];
  values[maxNumber--] = tmp1; 
}


document.getElementById("field").innerHTML = tmp;
const myForm = document.game15th.elements;
let counterLabel = document.getElementById("counter-label");
let swapButton;
let counter = 0;

for(let i = 1; i <= 16; i++){
  myForm[i].onclick = function(){
      play15th(i);
      counter++;
      counterLabel.innerHTML = counter;
  }
}

/* *********************************************************************************** */
function play15th(n){
  
  const myButton = document.game15th.elements;//Все элементы формы, кнопки начинаются с номера 1.
  //Проверим кнопку вверху
  
   if((n>4)&&(myButton[n-4].value==" ")){
    swap(n, n-4);
    }
  
  //Проверим кнопку справа
    if((n%4!=0)&&(myButton[n+1].value==" ")){
    swap(n, n+1);
    }
  
  //Проверим кнопку внизу
    if((n<13)&&(myButton[n+4].value==" ")){
    swap(n, n+4);
    } 
  
  //Проверим кнопку слева
    if((n%4!=1)&&(myButton[n-1].value==" ")){
    swap(n, n-1);
   }
  
}
/* ******************************* */
function swap(n, m){
  //Функция меняет значение value на кнопках с номерами n и m.
  const myButton = document.game15th.elements;//Все элементы формы, кнопки начинаются с номера 1.
  let tmp = myButton[n].value;
  myButton[n].value = myButton[m].value;
  myButton[m].value = tmp;
  
  }
/* ******************************************************************************* */

function getRandomArray(){
  const myArr = [];
  for(i=0; i<16; i++){
    let rNumber = Math.round(Math.random()*15+1);
    while(myArr.indexOf(rNumber)>=0){
      rNumber = Math.round(Math.random()*15+1);
    }
    myArr.push(rNumber);
  }
  return myArr;
}
/* ******************************************************************************* */
function resetGame(){
  location.reload();
}