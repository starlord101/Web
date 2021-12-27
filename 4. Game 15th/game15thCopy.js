//Игра "пятнашки". При загрузке документа отображаем 16 игровых кнопок.
const values = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"," "]; /* Содержит значения распологаемые на кнопках */
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
let swapButton;
for(let i = 1; i <= 16; i++){
  myForm[i].onclick = function(){
      play15th(i);
  }
}

tmp = "";
for(let i = 1; i <= 16; i++){
  let nValue = Math.round(Math.random()*15+1);
  tmp += nValue + ",";
}
document.getElementById("test").innerHTML = tmp;
//********************************************************************************************* 
//Кнопка,с номером "n" по которой выполнился щелчек, переходит на ближайшее свободное место
//Ищем пустую кнопку
//********************************************************************************************* /@\_<  
/* Иследовать алгоритм перемешивания порядка следования значений на кнопках. 
Реализовать функцию, которая сначала заполняет массив из 16-ти чисел. Элемент массива может иметь значение от 1 до 16. Числа в массиве повторятся не должны. Вывести массив с помощью этой функции в консоль.
Если полученное случайное число уже есть в массиве, оно отбрасывается и выбирается другое. Наличие соответсвуещего элемента в массиве определяем с помощью метода .indexOf()   */
function play15th(n){
  
  const myButton = document.game15th.elements;//Все элементы формы, кнопки начинаются с номера 1.
  //Проверем кнопку вверху
  
   if((n>4)&&(myButton[n-4].value==" ")){
    swap(n, n-4);
    }
  
  //Проверем кнопку справа
    if((n%4!=0)&&(myButton[n+1].value==" ")){
    swap(n, n+1);
    }
  
  //Проверем кнопку внизу
    if((n<13)&&(myButton[n+4].value==" ")){
    swap(n, n+4);
    } 
  
  //Проверем кнопку слева
    if((n%4!=1)&&(myButton[n-1].value==" ")){
    swap(n, n-1);
   }
  
}
//********************************************************************************************* */
function swap(n, m){
//Функция меняет значение value на кнопках с номерами n и m.
const myButton = document.game15th.elements;//Все элементы формы, кнопки начинаются с номера 1.
let tmp = myButton[n].value;
myButton[n].value = myButton[m].value;
myButton[m].value = tmp;

}
//********************************************************************************************* */
//Clicker
var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}