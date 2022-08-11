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

let x = 0;

while (x < 10) {
    x += 2
    console.log(x)
}

//......................................................................................................................

 