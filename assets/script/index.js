"use strict";

// Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
console.log(alphabet.length);

// Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
let randomNum1 = Math.floor(Math.random() * (alphabet.length - 1));
console.log(randomNum1);
let randomNum2 = Math.floor(Math.random() * (alphabet.length - 1));
console.log(randomNum2);
let randomNum3 = Math.floor(Math.random() * (alphabet.length - 1));
console.log(randomNum3);
let randomNum4 = Math.floor(Math.random() * (alphabet.length - 1));
console.log(randomNum4);

// Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
const newWord =
  alphabet[randomNum1] +
  alphabet[randomNum2] +
  alphabet[randomNum3] +
  alphabet[randomNum4];
console.log(newWord);

// Выведи полученное случайное слово на экран, чтобы проверить результат.
const randText = document.querySelector(".main__title");
randText.innerHTML = `Случайное слово: ${newWord}`;
