//Игра "пятнашки". При загрузке документа отображаем 16 игровых кнопок.
let tmp = "";
for(let i = 0; i < 15; i++){
  /* if((i%4)==0){
    tmp+="<br>";
  } */
  tmp += '<input type = "button" value = "'+(i+1)+'">';
}
document.getElementById("field").innerHTML = tmp + '<input type = "button" value = " ">';
const myForm = document.game15th.elements;
let swapButton;
for(let i = 1; i <= 16; i++){
  myForm[i].onclick = function(){
      play15th(i);
  }
}
//********************************************************************************************* 
//Кнопка,с номером "n" по которой выполнился щелчек, переходит на ближайшее свободное место
//Ищем пустую кнопку
//********************************************************************************************* /@\_< 
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