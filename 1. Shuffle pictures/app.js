showRandomPictures();

function randomPictures(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
/* ********************************************************** */
function showRandomPictures(){
    let pics =["leo.png","raph.png","mike.png","don.png"];
    let block = document.querySelector(`.random-pictures`);/* Определем родительский элемент */
    let imgs = randomPictures(pics);/* Imgs перемешанный массив картинок */
    imgs.forEach(elem=>{
        let myImg = document.createElement('img');/* Создаем элемент img */
        myImg.setAttribute('src',`images/${elem}`); /* Назначем атрибут src */
        myImg.addEventListener("click",function(){changeSrc(pics,'random-pictures')});/* Можно назначать каждому элементу несколько обработчиков событий */
        myImg.addEventListener("click",function(){console.log('click')});
        block.append(myImg);/* Присоединяем новый элемент к родительскому */
    });
}
/* ********************************************************** */
function changeSrc(array,className){
    /* Изменяем отображенные картинки с помощью замены свойства src тега img */
    let imgs = document.querySelectorAll(`.${className} img`);/* Все картинки */
    const src = randomPictures(array);/* Перемешиваем картинки */
    src.forEach((element,index) => {
        imgs[index].src = `images/${element}`
    });
}