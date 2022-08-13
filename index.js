
// const result = alphabet.split('').map((letter, i) =>  [i,letter.toLocaleLowerCase()] ).flat()

// console.log('res', result);


// let myName = 'Nastya';
// let dogsName = 'Kiki';

// console.log(`cześć, jestem ${myName}, a to jest ${dogsName} - mój pies.`);

// let dogsYears = 4;

// console.log(dogsName + ' ma juz ' + dogsYears + ' lat' + '!');

//.......................................................................................................

// const text1 = 'powiększ mnie!'

// console.log(text1.toUpperCase())

// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'

// console.log(text2.toLowerCase())

// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'

// console.log(text3.slice(6))

// const text4 = 'sprawdź, czy zawieram słowo "czy"'

// console.log(text4.includes("czy"))

// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'

// console.log(text5.charAt(2))

// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'

// console.log(text6.replace(/pies/gi, "kot"))

// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text7.split())

//..............................................................................................................

// let x = 50;
// let y = 30;

// if (x > y){
// console.log(`Wartość ${x} jest większe, niz ${y}.`)
// }

//...............................................................................................................

// let color = 'blue';
// let newColor = 'green';

// if (color == newColor) {
//     console.log('Colory się zgadzają.');
// } else {
//     console.log('Colory się nie zgadzają.');
// }

//................................................................................................................

// const x = 100
// const y = 50

// if(x > y) {
//     console.log(`x > y`);
// } else if (x === y) {
//     console.log(`x = y`);
// } else {
//     console.log(`x < y`)
// }

//................................................................................................................

//  const promo = '20%';

//  switch(promo) {
//     case '10%':
//         console.log('Dziś mamy 10% znizki!');
//         break;
//     case '20%':
//         console.log('Dziś mamy 20% znizki!');
//         break;
//     case '30%':
//         console.log('Dziś mamy 30% znizki!');
//         break;
//         default:
//         // console.log('Dziś mamy wiele innych znizek!');
//         console.log(`Dziś mamy ${promo} znizki!`);
//  }

//..................................................................................................................

// const x = 10 

// const newX = 10%3 ? `${x} parzyste` : `${x} nie parzyste`;

// console.log(newX)

//.....................................................................................................................

// const x = 50;
// let text

// if (x >= 100) {
//     text = `x > 100`
// }else if (x < 100 && x > 30) {
//     text = `x jest średniakiem`
// }else {
//     text = `x jest mały`
// }

// console.log(text.toUpperCase)

//........................................................................................................................

// const colors = ['red', 'blue', 'green', 'yellow', 'black']

// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

//................................................................................................................

// let i = 0

// while (i < 5) {
//     i++
//     console.log(i)
// }

// do {
//     i++
//     console.log(i)
// } while (i < 2)

//...................................................................................................................
// const numbers = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < numbers.length; i++) {           kiedy chcemy pracować z konkretnymi indeksami
//     console.log(numbers[1] *2)
// }
// або 

// for (const number of numbers) {                       jezeli chcemy calą tablice bez odzielnych indeksów
//     console.log(number *2)
// }



// ..................................................................................................................

// const city = ['Kyiv', 'Warsaw', 'Lublin', 'Rzeszów']

// for (let i = 0; i < city.length; i++) {
//     console.log(`To miasto nazywa się: ${city[i].toUpperCase}!`)
// } 

//....................................................................................................................

// let x = 0;

// while (x < 10) {
//     x += 2
//     console.log(x)
// }

//......................................................................................................................

// let x = 20;

// console.log(`Przed pętlą: ${x}`);

// do {
//     x -= 3
//     console.log(x)
// } while (x > 0)

// console.log(`Poza pętlą: ${x}`);

//......................................................................................................................

// let numbers = ['5', '8', '10', '23', '48', '60']

// console.log(numbers);

// // for(let number of numbers) {
// //     console.log(number / 5);
// // }

// for(let number of numbers) {
//     if (number % 2) {
//         console.log(`Liczba ${number} jest nieparzysta`)
//     } else {
//         console.log(`Liczba ${number} jest parzysta`)
//     }
// }

//........................................................................................................................

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// let numbers2 = numbers.slice(0, 2);

// let numbers3 = numbers.slice(4,)

// console.log(numbers2)
// console.log(numbers3)

// let randomStuff = colors.splice(3,2)

// console.log(colors)
// console.log(randomStuff)

// let newCars = cars.splice(2, 4, 'test')

// console.log(cars)
// console.log(newCars)


// slice() – metoda niedestrukcyjna 👍
// pierwszy argument – indeks elementu, od którego wycinamy (włącznie),

// drugi argument – indeks elementu, do którego wycinamy (ale bez tego elementu).



// splice() – metoda destrukcyjna 💣
// pierwszy argument – indeks elementu, od którego wycinamy (włącznie),

// drugi argument – ilość elementów, które wycinamy,

// każdy kolejny argument – nowy element, który chcemy dodać do tablicy w miejsce wyciętego.

// Uwaga! Zarówno przy slice jak i splice, nie musimy podawać wszystkich argumentów. Jeden też zadziała. 😉

//..........................................................................................................

// let letters = ['c', 'd']

// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters)
// console.log(letters.includes('c'))


//..........................................................................................................

// let numbers = [1, 2, 3, 4, 5]
// let meals = ['meat', 'bread','milk', 'banana']

// let newBox = [...numbers, ...meals]

// console.log(newBox)

//..........................................................................................................

// let numbers = [1, 5, 13, 26, 48]

// let newNumbers = numbers.map(numbers => numbers * 5)

// console.log(newNumbers)

// for (let number of newNumbers) {
//     if (number % 2) {
//         console.log(`Liczba nieparzysta: ${number}`)
//     } else {
//         console.log(`Liczba parzysta: ${number}`)
//     }
// }

//..........................................................................................................

// let color = ['green']

// color.unshift('black')
// color.push('red')

// for (let i = 0; i < color.length; i++) {
//     console.log(`My favourite color is ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`)
// }


//..........................................................................................................

// let cars = 'Audi, Mercedes, BMW, Nissan, Dodge';

// let arrayCars = cars.split(' ')

// console.log(arrayCars)

// console.log(arrayCars.length > 3 ? 'Jest OK' : 'Nie jest OK')

// if (arrayCars.includes('Audi')) {
//     arrayCars.unshift('Bentley')
// }else {
//     arrayCars.pop()
// }

// console.log(arrayCars)

//..........................................................................................................


// const count = 10;

// const res = []

// for (let i = 1; i <= count; i++)
//     res.push({[i]: count})

// console.log(res)

// // [{1: 10}, {2: 10} ... {3: 10}]

//..........................................................................................................

// function test(name, age) {
//     console.log(`Cześć, mam na imię ${name} i mam ${age} lat.`)
// }

// test('Nastya', 20)

//..........................................................................................................

// let score 

// function add(x,y) {
//     score = x+y
// if(score % 2) {
//     countable()
// } else {
//     uncountable()
// }
// }

// function countable() {
//     console.log(`Liczba ${score} jest parzysta`);
// }

// function uncountable() {
//     console.log(`Liczba ${score} jest nieparzysta`);
// }
// add(7, 8)

//..........................................................................................................

// let celsius
// let temp

// function fahrenheit(x) {
//     celsius = x
//     temp = celsius * 1.8 + 32
// }

// fahrenheit(20)

// console.log(`${celsius}C = ${temp}F`);

//..........................................................................................................

// let num = 10
// let numbers = []

// for (let i = 0; i < num; i++) {
//     numbers.push(i);
// }

// function chekNumbers(x) {
//     if(x % 3 === 0 && x !== 0) {
//         console.log(`${x} jest podzielnie przez 3.`);
//     }else {
//         console.log(`${x} nie jest podzielnie przez 3 lub ${x} = 0.`);
//     }
// }
// console.log(numbers.forEach(chekNumbers));

//..........................................................................................................

// let createdDiv = document.querySelector('div')

// let newP = document.createElement('p')

// createdDiv.appendChild(newP)


// console.log(createdDiv)

//..........................................................................................................

 let newUlList = document.createElement('ul');
 let ulList = document.body.appendChild(newUlList)
 

for (let i = 1; i <= 10; i++) {
    let newLiItems = document.createElement('li')
    let liItems = ulList.appendChild(newLiItems)
    liItems.textContent = i 
}

let lastElem = newUlList.querySelector('li:last-child')
lastElem.textContent = 'Jestem ostatnim elementem'

lastElem.style.backgroundColor = 'royalblue';
lastElem.style.padding = '20px 40px';
lastElem.style.fontSize = '48px';

//..........................................................................................................







