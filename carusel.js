/*
$(document).ready(function() {
$(".gallery2").jCarouselLite({
btnNext: ".next", 
btnPrev: ".prev", 
mouseWheel: false, 
auto: null, 
speed: null, 
vertical: false, 
circular: true, 
visible: 4, 
start: 0, 
scroll: 1 
});
});


$(document).ready(function() {
$(".gallery1").jCarouselLite({
btnNext: ".next1", 
btnPrev: ".prev1",
mouseWheel: false, 
auto: null, 
speed: null, 
vertical: false, 
circular: true, 
visible: 4, 
start: 0, 
scroll: 1
});
});

$(document).ready(function() {
$(".gallery3").jCarouselLite({
btnNext: ".next3", 
btnPrev: ".prev3", 
mouseWheel: false, 
auto: null,  
speed: null, 
vertical: false, 
circular: true,
visible: 4, 
start: 0, 
scroll: 1 
});
});

$(document).ready(function() {
$(".gallery4").jCarouselLite({
btnNext: ".next4", // класс кнопки перехода вперед, null для отключения
btnPrev: ".prev4", // класс кнопки перехода назад, null для отключения
mouseWheel: false, //если false, то галерея не будет прокручиваться колесом мыши
auto: null, //шаг автопрокрутки в миллисекундах, null для отключения 
speed: null, //скорость прокрутки в миллисекундах
vertical: false, //если true, то галерея будет располагаться вертикально
circular: true, //true - прокрутка по кругу, false - только до последнего изображения
visible: 4, //количество видимых картинок
start: 0, //с какого элемента начинается галерея (первый элемент имеет значение 0)
scroll: 1 //количество элементов, которые одновременно прокручиваются при щелчке по кнопке
});
});
*/

$(document).ready(function() { 
function initSlider(galleryClass, nextBtnClass, previousBtnClass) {
$(galleryClass).jCarouselLite({
btnNext: nextBtnClass, // класс кнопки перехода вперед, null для отключения
btnPrev: previousBtnClass, // класс кнопки перехода назад, null для отключения
mouseWheel: false, //если false, то галерея не будет прокручиваться колесом мыши
auto: null, //шаг автопрокрутки в миллисекундах, null для отключения 
speed: null, //скорость прокрутки в миллисекундах
vertical: false, //если true, то галерея будет располагаться вертикально
circular: true, //true - прокрутка по кругу, false - только до последнего изображения
visible: 4, //количество видимых картинок
start: 0, //с какого элемента начинается галерея (первый элемент имеет значение 0)
scroll: 1 //количество элементов, которые одновременно прокручиваются при щелчке по кнопке
});	
}
initSlider($(".gallery1"), $(".next1"), $(".prev1"));
initSlider($(".gallery2"), $(".next"), $(".prev"));
initSlider($(".gallery3"), $(".next3"), $(".prev3"));
initSlider($(".gallery4"), $(".next4"), $(".prev4"));
});





