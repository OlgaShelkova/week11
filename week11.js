//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

/*const paragraph = document.getElementById('practicum0');

function makeZero() {
	paragraph.innerText = 'Ты нашёл элемент и изменил его текст!';
}

document.querySelector('.b-0').onclick = makeZero;*/



//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

/*function makeOne() {
	//Ваш код
}

document.querySelector('.b-1').onclick = makeOne;*/

function makeOne() {
	let pElement = document.getElementById('practicum');
	pElement.innerText = 'Привет!';
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
function makeTwo() {
	const span = document.getElementById('practicum2');
	span.innerText = 'Привет, Мир!';
}
	
document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

/*function makeThree() {
	//Ваш код
}

document.querySelector('.b-3').onclick = makeThree;*/
function makeThree() {
	const heading = document.querySelector('#practicum3');
	heading.innerText = 'Заголовок изменен!';
}
	
document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента

/*function makeFour() {
	//Ваш код
}

document.querySelector('.b-4').onclick = makeFour;*/
function makeFour() {
	const div = document.querySelector('#practicum4');
	div.style.backgroundColor = 'red';
}
	
document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

/*function makeFive() {
	//Ваш код
}

document.querySelector('.b-5').onclick = makeFive;*/
function makeFive() {
	const input = document.getElementById('practicum5'); // Находим элемент input с указанным идентификатором 'practicum5'
	input.value = 'Новое значение'; // Устанавливаем значение поля ввода input на 'Новое значение'
}
	
document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

function makeSix() {
	const img = document.getElementById('practicum6');// Находим элемент img с указанным идентификатором 'practicum6'
	img.src = 'newimage.jpg'; // Устанавливаем значение атрибута src изображения на 'newimage.jpg'
	img.alt = 'Новое изображение'; // Устанавливаем значение атрибута alt изображения на 'Новое изображение'
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

/*function makeSeven() {
	//Ваш код
}

document.querySelector('.b-7').onclick = makeSeven;*/

function makeSeven() {
	const link = document.querySelector('#practicum7'); // Находим элемент ссылки с указанным идентификатором 'practicum7'
	link.href = 'https://www.google.com'; // Устанавливаем атрибут 'href' ссылки равным 'https://www.google.com'
	link.textContent = 'Ссылка на Google'; // Устанавливаем текстовое содержимое ссылки равным 'Ссылка на Google'
}
	
document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

/*
function makeEight() {
	//Найдите элемент x
	//Создайте новый пункт списка y
	//Добавьте значение в созданный пункт списка y
	//Добавьте в список х новый элемент y
}

document.querySelector('.b-8').onclick = makeEight;*/


function makeEight() {
	const ul = document.getElementById('practicum8'); // Находим элемент ul с указанным идентификатором 'practicum8'
	const li = document.createElement('li'); // Создаем новый элемент li
	li.textContent = 'Новый элемент'; // Устанавливаем текстовое содержимое нового элемента li
	ul.appendChild(li); // Добавляем новый элемент li в конец элемента ul
}
	
document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.
/*
function makeNine() {
	//Найдите элемент
	//Создайте новый элемент
	//Добавьте текст в созданный эелемент
	//Добавьте новый элемент в выпадающий список
}

document.querySelector('.b-9').onclick = makeNine;*/

function makeNine() {
	const select = document.getElementById('practicum9'); // Находим элемент select с указанным идентификатором 'practicum9'
	const option = document.createElement('option'); // Создаем новый элемент option
	option.textContent = 'Новый вариант'; // Устанавливаем текстовое содержимое нового элемента option
	select.appendChild(option); // Добавляем новый элемент option в конец элемента select
}
	
document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента
/*
function makeTen() {
	//Ваш код
}

document.querySelector('.b-10').onclick = makeTen;*/

function makeTen() {
	const div = document.getElementById('practicum10');
	div.style.display = 'none';
}
	
document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента
/*
function makeEleven() {
	//Ваш код
}

document.querySelector('.b-11').onclick = makeEleven;*/

function makeEleven() {
	const div = document.getElementById('practicum11');
	div.style.width = '400px';
	div.style.height = '200px';
}
	
document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента
/*
function makeTwelve() {
	//Ваш код
}*/

function makeTwelve() {
	const div = document.querySelector('#practicum12'); // Находим элемент с идентификатором 'practicum12' с помощью метода querySelector и сохраняем в переменную div
	div.classList.toggle('resized'); // Переключаем класс 'resized' у элемента div с помощью метода toggle класса
}

//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

/*function makeThirteen() {
	//Ваш код
}

document.querySelector('.b-13').onclick = makeThirteen;*/

function makeThirteen() {
	const ol = document.getElementsByTagName('ol')[0]; // Находим элемент с помощью метода getElementsByTagName и сохраняем первый найденный элемент в переменную ol
	ol.innerText = 'Первый!'; // Устанавливаем текстовое содержимое элемента ol равным 'Первый!' с помощью свойства innerText
}
	
document.querySelector('.b-13').onclick = makeThirteen;

//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.
/*
function makeFourteen() {
	//Найдите все элементы <p>
	//const paragraphs = ваш код;
	paragraphs.forEach(function (paragraph) {
		//Измените их текстовое содержимое у paragraph
	});
}

document.querySelector('.b-14').onclick = makeFourteen;*/

function makeFourteen() {
	// Найдите все элементы <p>
	const paragraphs = document.querySelectorAll('p');
	paragraphs.forEach(function(paragraph) {
	// Измените их текстовое содержимое у paragraph
	paragraph.innerText = 'Огого, что могу!';
	});
}
	
document.querySelector('.b-14').onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента
/*
function makeFifteen() {
	//Ваш код
}

document.querySelector('.b-15').onclick = makeFifteen;*/

function makeFifteen() {
	const div = document.getElementById('practicum15');// Находим элемент div с указанным идентификатором 'practicum15'
	div.classList.remove('practicum15'); // Удаляем класс 'practicum15' у элемента div с помощью метода remove класса
}
	
document.querySelector('.b-15').onclick = makeFifteen;

//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента
/*
function makeSixteen() {
	//Ваш код
}

document.querySelector('.b-16').onclick = makeSixteen;*/

function makeSixteen() {
	const div = document.getElementById('practicum16'); // Находим элемент div с указанным идентификатором 'practicum16'
	div.classList.add('practicum16'); // Добавляем класс 'practicum16' к элементу div с помощью метода add класса
}
	
document.querySelector('.b-16').onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента
/*
function makeSeventeen() {
	//Ваш код
}

document.querySelector('.b-17').onclick = makeSeventeen;*/

function makeSeventeen() {
	const div = document.getElementById('practicum17'); // Находим элемент div с указанным идентификатором 'practicum17'
	div.classList.toggle('color');// Переключаем класс 'color' у элемента div с помощью метода toggle класса
}

document.querySelector('.b-17').onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента
/*
function makeEighteen() {
	//Ваш код
}

document.querySelector('.b-18').onclick = makeEighteen;*/

function makeEighteen() {
	const div = document.getElementById('practicum18'); // Находим элемент div с указанным идентификатором 'practicum18'
	div.classList.toggle('active'); // Переключаем класс 'active' у элемента div с помощью метода toggle класса
}
	
document.querySelector('.b-18').onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента
/*
function makeNineteen() {
	//Ваш код
}

document.querySelector('.b-19').onclick = makeNineteen;*/

function makeNineteen() {
	const div = document.getElementById('practicum19'); // Находим элемент div с указанным идентификатором 'practicum19'
	div.classList.remove('active'); // Удаляем класс 'active' у элемента div с помощью метода remove
}
	
document.querySelector('.b-19').onclick = makeNineteen; // Назначаем функцию makeNineteen в качестве обработчика события клика на кнопке с классом '.b-19'

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

/*function makeTwenty() {
	//Ваш код
}

document.querySelector('.b-20').onclick = makeTwenty;*/

function makeTwenty() {
	const div = document.getElementById('practicum20');// Находим элемент div с указанным идентификатором 'practicum20'
	const newP = document.createElement('p');// Создаем новый элемент
	newP.textContent = 'Добавлено в начало';// Устанавливаем текстовое содержимое нового элемента
	div.prepend(newP); // Добавляем новый элемент в начало элемента div
}

document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>
/*
function makeTwentyOne() {
	//Ваш код
}

document.querySelector('.b-21').onclick = makeTwentyOne;*/

function makeTwentyOne() {
	const div = document.getElementById('practicum21');// Находим элемент div с указанным идентификатором 'practicum21'
	const newP = document.createElement('p');// Создаем новый элемент
	newP.textContent = 'Добавлено в конец'; // Устанавливаем текстовое содержимое нового элемента
	div.appendChild(newP); // Добавляем новый элемент в конец элемента div
	}
	
document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута
/*
function makeTwentyTwo() {
	//1 шаг: Найдите элемент
	//2 шаг: Создайте переменную, которая проверяет наличие атрибута у найденного элемента
	//3 шаг: Найдите элемент, в который нужно вставить значение
	//4 шаг: Добавьте в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
}

document.querySelector('.b-22').onclick = makeTwentyTwo;
*/
function makeTwentyTwo() {
	const img = document.getElementById('practicum22');// Находим элемент картинки с указанным идентификатором 'practicum22'
	const hasSrcAttribute = img.hasAttribute('src'); // Проверяем наличие атрибута 'src' у картинки
	const resultElement = document.getElementById('result22'); // Найдем элемент, в который нужно вывести результат проверки
	resultElement.textContent = 'Атрибут "src" присутствует: ' + hasSrcAttribute; // Записываем результат проверки в элемент
	}
	
	document.querySelector('.b-22').onclick = makeTwentyTwo; // Назначаем функцию makeTwentyTwo в качестве обработчика события клика на кнопке с классом '.b-22'

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута
/*
function makeTwentyThree() {
	//Ваш код
}

document.querySelector('.b-23').onclick = makeTwentyThree;*/

function makeTwentyThree() {
	const link = document.getElementById('practicum23'); // Находим элемент ссылки с указанным идентификатором 'practicum23'
	link.removeAttribute('href'); // Удаляем атрибут 'href' у ссылки с помощью метода removeAttribute
}
	
document.querySelector('.b-23').onclick = makeTwentyThree; // Назначаем функцию makeTwentyThree в качестве обработчика события клика на кнопке с классом '.b-23'

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута
/*
function makeTwentyFour() {
	//Ваш код
}

document.querySelector('.b-24').onclick = makeTwentyFour;*/

function makeTwentyFour() {
	const input = document.getElementById('practicum24');// Находим элемент input с указанным идентификатором 'practicum24'
	input.setAttribute('value', 'Новое значение'); // Устанавливаем значение атрибута 'value' текстового поля на 'Новое значение'
}
	
document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута
/*
function makeTwentyFive() {
	//1 шаг: Найдите элемент
	//2 шаг: Добавьте элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация');
	//3 шаг: Запишите значение атрибута в переменную
	//4 шаг: Найдите элемент, в который нужно вставить значение из 3 шага
	//5 шаг: Добавьте в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
}

document.querySelector('.b-25').onclick = makeTwentyFive;*/

function makeTwentyFive() {
	const div = document.getElementById('practicum25'); /*1 шаг: Найдите элемент*/
	div.setAttribute('data-info', 'Дополнительная информация'); //2 шаг: Добавьте элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация*
	const info = div.getAttribute('data-info'); //3 шаг: Запишите значение атрибута в переменную
	const outputElement = document.getElementById('infoOutput'); //4 шаг: Найдите элемент, в который нужно вставить значение из 3 шага
	outputElement.textContent = 'Добавленный атрибут: ' + info; //5 шаг: Добавьте в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
}
	
document.querySelector('.b-25').onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента
/*
const button = document.querySelector('.b-26');
// const parent = Ваш код;

const makeTwentySix = () => {
	parent.style.backgroundColor = 'red';
};

document.querySelector('.b-26').onclick = makeTwentySix;*/

// Находим кнопку с классом '.b-26' с помощью метода querySelector
const button = document.querySelector('.b-26');
// Находим ближайший родительский элемент с классом '.parent' для кнопки
const parent = button.closest('.parent');
// Создаем функцию makeTwentySix, которая будет вызываться при клике на кнопку
const makeTwentySix = () => {
	parent.style.backgroundColor = 'red';// Устанавливаем цвет фона родительского элемента в красный
};

button.onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.
/*
function makeTwentySeven() {
	//Найдите переменную
	//Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
	//Найдите переменную, в которую нужно вывести результат
	//Запишите результат в переменную
}

document.querySelector('.b-27').onclick = makeTwentySeven;*/

function makeTwentySeven() {
	const div = document.getElementById('practicum27');//Найдите переменную
	const result = div.classList.contains('highlight');//Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
	const resultElement = document.getElementById('result');//Найдите переменную, в которую нужно вывести результат const resultElement = document.getElementById('result');
	resultElement.textContent = 'Результат: ' + result;	//Запишите результат в переменную
}

document.querySelector('.b-27').onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события
/*
const buttonTaskTwentyEight = document.getElementById('button28');

function handleClick() {
	console.log('Кнопка нажата');
}

//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight*/

const buttonTaskTwentyEight = document.getElementById('button28');

function handleClick() {
	console.log('Кнопка нажата');
}

buttonTaskTwentyEight.addEventListener('click', handleClick); //Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight*/

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
/*
function handleChange() {
	console.log('Значение изменено');
}

//Ваш код*/

// Находим элемент input с помощью метода getElementById
const inputTaskTwentyNine = document.getElementById('input29');

// Создаем функцию обработчика события change
function handleChange() {
console.log('Значение изменено');
}

// Добавляем обработчик события change на элемент input с помощью метода addEventListener
inputTaskTwentyNine.addEventListener('change', handleChange);

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
/*
function handleMouseOver() {
	console.log('Курсор наведен на элемент');
}

//Ваш код*/

// Находим элемент div с помощью метода getElementById
const divTaskThirty = document.getElementById('div30');

// Создаем функцию обработчика события mouseover
function handleMouseOver() {
	console.log('Курсор наведен на элемент');
}

// Добавляем обработчик события mouseover на элемент div с помощью метода addEventListener
divTaskThirty.addEventListener('mouseover', handleMouseOver);
