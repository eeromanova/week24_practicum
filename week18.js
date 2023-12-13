//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.

function makeOne() {
  localStorage.setItem("games", 11);
  //Ваш код
}

document.querySelector(".b-1").addEventListener("click", makeOne);
//добавьте слушатель события

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.

function makeTwo() {
  //Ваш код
  localStorage.setItem("numbers", "7,6,5");
  console.log(localStorage.getItem("numbers"));
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//добавьте слушатель события

//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.

function makeThree() {
  //Ваш код
  localStorage.setItem("dataJohn", "name=John, age=25");
  console.log(localStorage.getItem("dataJohn"));
}
document.querySelector(".b-3").addEventListener("click", makeThree);

//добавьте слушатель события

//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.

function makeFour() {
  //Ваш код
  localStorage.setItem("boolean", true);
  console.log(localStorage.getItem("boolean"));
}

document.querySelector(".b-4").addEventListener("click", makeFour);
//добавьте слушатель события

//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.

function makeFive() {
  //Ваш код
  localStorage.setItem("nothing", null);
  console.log(localStorage.getItem("nothing"));
}
document.querySelector(".b-5").addEventListener("click", makeFive);

//добавьте слушатель события

//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSix() {
  //Ваш код
  const obj = { name: "Алиса", age: 30 };
  const objString = JSON.stringify(obj);
  localStorage.setItem("objectSix", objString);
  console.log("Объект obj был записан в Local Storage.");
}

document.querySelector(".b-6").addEventListener("click", makeSix);
//добавьте слушатель события

//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSeven() {
  //Ваш код
  obj = {
    city: "Лондон",
    country: "Великобритания",
    population: 8900000,
    language: "английский",
  };
  const objString = JSON.stringify(obj);
  localStorage.setItem("objectSeven", objString);
  console.log("Объект obj был записан в Local Storage.");
}
document.querySelector(".b-7").addEventListener("click", makeSeven);
//добавьте слушатель события

//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeEight() {
  //Ваш код
  obj = {
    fruit: "Яблоко",
    color: "красное",
    quantity: 10,
    price: 199,
  };
  const objString = JSON.stringify(obj);
  localStorage.setItem("objectEight", objString);
  console.log("Объект obj был записан в Local Storage.");
}
document.querySelector(".b-8").addEventListener("click", makeEight);
//добавьте слушатель события

//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeNine() {
  //Ваш код
  arr = [1, 2, 3, 4, 5];
  const objString = JSON.stringify(arr);
  localStorage.setItem("arrayNine", objString);
  console.log("Массив arr был записан в Local Storage.");
}
document.querySelector(".b-9").addEventListener("click", makeNine);
//добавьте слушатель события

//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeTen() {
  //Ваш код
  arr = ["яблоко", "банан", "апельсин"];
  const objString = JSON.stringify(arr);
  localStorage.setItem("arrayTen", objString);
  console.log("Массив arr был записан в Local Storage.");
}
document.querySelector(".b-10").addEventListener("click", makeTen);
//добавьте слушатель события

//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeEleven() {
  //Ваш код
  arr = [
    { name: "Алиса", age: 30 },
    { name: "Филин", age: 35 },
    { name: "Кот", age: 40 },
  ];
  const objString = JSON.stringify(arr);
  localStorage.setItem("arrayEleven", objString);
  console.log("Массив arr был записан в Local Storage.");
}
document.querySelector(".b-11").addEventListener("click", makeEleven);

//добавьте слушатель события

//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven. Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()

function showEleven() {
  //Ваш код
  const arrayEleven = JSON.parse(localStorage.getItem("arrayEleven"));
  let output = "";
  for (let i = 0; i < arrayEleven.length; i++) {
    const object = arrayEleven[i];
    for (let key in object) {
      output += `${key} ${object[key]}`;
    }
  }
  document.querySelector(".practicum12").textContent = output;
}
document.querySelector(".b-12").addEventListener("click", showEleven);
//добавьте слушатель события

//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayTen. Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showTen = () => {
const arrayTenString = localStorage.getItem("arrayTen");
  if (arrayTenString) {
    const arrayTen=JSON.parse(arrayTenString);
	//Ваш код
    const resultElement = document.querySelector(".practicum13");
    for (const key in arrayTen) {
      const value = arrayTen[key];
      resultElement.innerHTML += `${key}: ${value}<br>`;
    }
  } else {
    console.log("Массив arrayTen не найден в Local Storage.");
  }
};
document.querySelector(".b-13").addEventListener("click", showTen);
//добавьте слушатель события

//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showNine = () => {
  arrayNineString = localStorage.getItem("arrayNine");
  if (arrayNineString) {
	const arrayNine=JSON.parse(arrayNineString);
	const resultElement = document.querySelector(".practicum14");
	for (const key in arrayNine) {
		const value = arrayNine[key];
		resultElement.innerHTML += `${key}: ${value}<br>`;
	  }
    //Ваш код
  } else {
    console.log("Массив arrayNine не найден в Local Storage.");
  }
};

document.querySelector(".b-14").addEventListener("click", showNine);

//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.

const showEight = () => {
	objectEight = localStorage.getItem("objectEight");
  if (objectEight) {
	const obj=JSON.parse(objectEight);
	const resultElement = document.querySelector(".practicum15");
	for (const key in obj) {
		const value = obj[key];
		resultElement.innerHTML += `${value}; `;
	  }
    //Ваш код
  } else {
    console.log("Объект objectEight не найден в Local Storage.");
  }
  //Ваш код
};

document.querySelector(".b-15").addEventListener("click", showEight);

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.

const showSeven = () => {
	objectSeven = localStorage.getItem("objectSeven");
  if (objectSeven) {
	const obj=JSON.parse(objectSeven);
	const resultElement = document.querySelector(".practicum16");
	resultElement.innerHTML = `В ${obj['city']}е живёт ${obj['population']} человек`;
	  }
  else {
    console.log("Объект objectSeven не найден в Local Storage.");
  }
  //Ваш код;
}

document.querySelector(".b-16").addEventListener("click", showSeven);

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. Вызывается функция по кнопке Задание 17.

const showSix = () => {
  //Ваш код
  objectSix = localStorage.getItem("objectSix");
  if (objectSix) {
	const obj=JSON.parse(objectSix);
	const resultElement = document.querySelector(".practicum17");
	resultElement.innerHTML = `Привет! Я ${obj['name']}. Мне ${obj['age']} лет.`;
	  }
  else {
    console.log("Объект objectSix не найден в Local Storage.");
  }
};

document.querySelector(".b-17").addEventListener("click", showSix);

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.

const clearLocalStorage = () => {
  //Ваш код
  localStorage.clear();
  console.log("Local Storage очищен.");
};
document.querySelector(".b-18").addEventListener("click", clearLocalStorage);
//добавьте слушатель события

//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?

let numbers = [];

const addToNumbers = () => {
  const numberInput = document.getElementById("numberInput");
  const number = parseInt(numberInput.value);
  numbers.push(number);
  const numbersString=JSON.stringify(numbers);
  localStorage.setItem('task19', numbersString);

  //Ваш код
};

document.querySelector(".b-19").addEventListener("click", addToNumbers);

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.

const removeLastElement = () => {
	const numbersString = localStorage.getItem("task19");
	numbers=JSON.parse(numbersString);
  if (numbers.length > 0) {
	numbers.pop();
  const numbersString=JSON.stringify(numbers);
  localStorage.setItem('task19', numbersString);
    //Ваш код
    console.log(
      "Последний элемент удален из массива numbers и сохранен в Local Storage."
    );
  } else {
    console.log("Массив numbers пуст.");
  }
};
document.querySelector(".b-20").addEventListener("click", removeLastElement);
//добавьте слушатель события

//Задание 21
//Создайте функцию addToCart, которая при нажатии кнопки Задание 21 получает из Local Storage сохранённый массив cartItems. Затем добавляет новый элемент в массив, представляющий товар, введённый вами в поле ввода. Массив cartItems должен сохраняться в Local Storage с ключом task21. Вызывается функция по кнопке Задание 21.
//Подсказка: необходимо проверить существует ли значение и не является пустым. Если значение в хранилище есть, то оно преобразуется из JSON в массив. В противном случае, устанавливается пустой массив.

const addToCart = () => {
  const productInput = document.getElementById("productInput");
  const product = productInput.value;

  if (product.trim() !== "") {
    let cartItems = localStorage.getItem("cartItems");
    cartItems = cartItems ? JSON.parse(cartItems) : []; //код из подсказки
	cartItems.push(product);
	localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //Ваш код

    console.log(
      `Товар "${product}" добавлен в корзину и сохранен в Local Storage.`
    );
  } else {
    console.log("Введите название товара.");
  }
};

document.querySelector(".b-21").addEventListener("click", addToCart);

//Задание 22
//Создайте функцию removeFromCart, которая при нажатии кнопки Задание 22 получает из Local Storage сохранённый массив cartItems. Затем удаляет последний элемент из массива. Массив cartItems должен сохраняться в Local Storage с ключом cartItems. Вызывается функция по кнопке Задание 22.
//Подсказка: необходимо проверить, существует ли значение и не является ли оно пустым. Это может вызвать ошибку, если cartItems не существует в Local Storage или является пустым.

const removeFromCart = () => {
	const cartItems = JSON.parse(localStorage.getItem("cartItems"));
	if(!cartItems[cartItems.length-1]==''){
		cartItems.pop();
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}
	else {
		console.log("Массив пустой");
	  }
  //Ваш код
};

document.querySelector(".b-22").addEventListener("click", removeFromCart);

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems. Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.

const showCart = () => {
	const cartItems = JSON.parse(localStorage.getItem("cartItems"));
	const resultElement = document.querySelector(".practicum23");
	for (let item of cartItems){
		resultElement.innerHTML +=`${item} `;
	}
	 
  //Ваш код
};

document.querySelector(".b-23").addEventListener("click", showCart);

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.

const updateCartCount = () => {
	const cartItems = JSON.parse(localStorage.getItem("cartItems"));
	const resultElement = document.querySelector(".practicum24");
	resultElement.innerHTML=`Количество товаров в корзине ${cartItems.length}`;
  //Ваш код
};

document.querySelector(".b-24").addEventListener("click", updateCartCount);

//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
  //Ваш код
  localStorage.removeItem('cartItems');
  console.log("Корзина очищена.");
};

document.querySelector(".b-25").addEventListener("click", clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

//Ваш код
document.cookie='username=Кот Учёный';
console.log("Cookie 'username' установлен.");
console.log(document.cookie);

//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".

const getCookie = (name) => {
  const cookieContainer = document.querySelector(".practicum27");
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      const value = cookie[1] || "";
	  cookieContainer.textContent=value;
	  return value;
      //Ваш код
    }
  }
  //Ваш код
};

document.querySelector(".b-27").addEventListener("click", () => {
  getCookie("username");
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = () => {
	const username=getCookie("username");
  //Ваш код
  if (username !== "") {
	console.log(username);
    //Ваш код
  } else {
	console.log("Cookie с именем 'username' не найден.");
    //Ваш код
  }
};
document.querySelector(".b-28").addEventListener("click", () => {
	checkCookie ();
  });
// добавьте слушатель события

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
  document.cookie = `${name}=${value}`;
  console.log(document.cookie);
  //Ваш код
};

document.querySelector(".b-29").addEventListener("click", () => {
  setCookie("testCookie", "Hello");
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  const string=`Cookie ${name} удален`;
  console.log(string);
  //Ваш код
};
console.log(document.cookie);

document.querySelector(".b-30").addEventListener("click", () => {
  deleteCookie("testCookie");
});
