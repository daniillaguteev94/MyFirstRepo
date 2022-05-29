const title = 'lending';
let screens = "Простые, Сложные, Интерактивные";
const screenPrice = 24;
const rollback = 71;
const fullPrice = 500;
const adaptive = true;

console.log(typeof title);
console.log(typeof adaptive);
console.log(typeof fullPrice);

console.log(screens.length ,screens.toLowerCase() ,screens.split('-' ,3));


console.log('Стоимость верстки экранов ' + screenPrice + ' рубля ');
console.log('Стоимость разаработки сайта ' + fullPrice + ' рублей ');
console.log('Процент отката посреднику за работу ' + fullPrice * (rollback/100));
