function converter(){
    //Преобразовать значение температуры из Цельсия, Кельвина, Фаренгейта соответственно в Цельсий, Кельвин, Фаренгейт.
    //Читаем исходное значение температуры.
    const myForm = document.temperature.elements;
    let inputValue = +myForm[1].value;
    console.log("inputValue = ", inputValue);
    //Определяем исходную шкалу температуры.
    let inputScale = myForm[3].value;
    console.log("imputScale = ", inputScale);
    //Определяем целевую шкалу температуры.
    let outputScale = myForm[4].value;
    console.log("outputScale = ", outputScale);
    //Вычисляем значение температуры.
    let outputValue;
    switch(inputScale+outputScale){
        case "CK":outputValue = inputValue + 273.15;
                  break;
        case "CF":outputValue = (inputValue * 9 / 5) + 32;
                  break;
        case "KC":outputValue = inputValue - 273.15;
                  break;
        case "KF":outputValue = (inputValue - 273.15) * 9/5 + 32;
                  break;
        case "FC":outputValue = (inputValue - 32) * 5/9;
                  break;
        case "FK":outputValue = (inputValue - 32) * 5/9 + 273.15;
                  break;
        case "CC":
        case "KK":
        case "FF":outputValue = inputValue;
                  break;
        default:outputValue = undefined;
        console.log("Не могу перевести шкалу"+outputScale+inputScale);
    }
    //Выводим значение в текстовое поле.
    myForm[2].value = outputValue.toFixed(2);
}