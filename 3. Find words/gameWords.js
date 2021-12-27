/* Игра "Слова". При загрузке документа отображаем 25 игровых кнопок c буквами. Эти буквы составляют 5 слов. Слова нужно найти. Щелчком по букве выбираем букву в слово. В слове 5 букв. Если получилось правильное слово - оно записывается в список слов, а поле для ввода нового слова очищается. Угаданная буква гасится, на её месте появляется пробел. */
/* Определяем набор слов.*/
let words = ["spine","dwarf","level","cargo","board"]; 

let allLetters = words.join(""); /* Строка содержит только буквы всех слов */

let maxNumber = 24;
let tmp = "";
for(let i = 0; i < 25; i++){
  let rValue = Math.round(Math.random()*maxNumber);
  tmp += '<input type = "button" value = "'+allLetters[rValue]+'">';
  maxNumber--;
  //выбрасываем из строки найденную букву
/* Метод .slice() для строк выбирает из исходной строки часть начиная с символа номер которого задан первым аргументом и заканчивая символом, который располагается перед тем символом, номер которого задан вторым аргументом */
  allLetters = allLetters.slice(0,rValue)+allLetters.slice(rValue+1);
}

document.getElementById("field").innerHTML = tmp;

const myForm = document.gameLetters.elements;
let swapButton;
for(let i = 1; i <= 25; i++){
  myForm[i].onclick = function(){
      setLetter(i);
      
  }
}
//********************************************************************************************* 
//Буква на Кнопке,с номером "n" по которой выполнился щелчек, переходит в текстовую строку и исчезает.
//Ищем пустую кнопку и удаляем.
//********************************************************************************************* /@\_< 
let letters = "";
const text = document.getElementById("words");
const list = document.getElementById("list");
const btn = document.getElementById("btn");
let saveData = [];

//Повесили события onclick на кнопку btn
btn.onclick = verified;


//Записывает букву, проверяет 
function setLetter(n){
  letters += myForm[n].value; //Записываем значения(букву)
  if (letters.length < 6){ // проверем чтоб слово было не больше 5 букв
    text.innerHTML = letters; //записываем эти буквы в блок words
    const tempData = [n,myForm[n].value]; //записываем позицию и значения после нажатия
    myForm[n].value = "";//очищаем эту букву
    saveData.push(tempData);//записываем в массив данные о позиции и значении этой буквы
  } 
  console.log(myForm[n].value);
}

//
function verified(){
   words.map((item)=>{//перебираем массив со словами
    if(item == letters){//проверяем если слово с массива words совпдает набранным словом 
    list.innerHTML += '<li>'+letters+'</li>';//тогда вписываем в список отгаданных это слово
    
    text.innerHTML = "";//очищаем блок words
    saveData = [];//очищаем массив с данными(позициями, значиниеми)
    } 
  });
  removeElement(letters);
  console.log(letters);
  letters = "";//обнуляем само слово
  if(saveData.length!=0){//если массив с данными(позиция, значения) не пустой; Если не было совпадения с массивом words.
    console.log(saveData);
    for(let i = 0; i < saveData.length; i++){//тогда перебираем этот массив 
      let position = saveData[i][0];//забираем позицию
      let value = saveData[i][1];//забираем значение
     myForm[position].value = value;//присваиваем старую позицию,значение с этого массива
     letters = "";//очищаем вписанное слово
    }
  }
  if(words.length===0){
    alert('Congratulations! You did it!');
  }
}
function removeElement(word){
  
  words=words.filter((item)=>item!==word);
  console.log(words);
}
