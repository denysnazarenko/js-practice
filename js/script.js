"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

/////start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



// Вирішення задачі трьома різниим циклами 
// Цикл for
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних посмотреных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

//////rememberMyFilms();

// Цикл while
// let i = 0;

// while (i < 2){
//   const a = prompt('Один из последних посмотреных фильмов?', ''),
//         b = +prompt('На сколько оцените его?', '');
//   i++

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
// }

// Цикл do
// let i = 0;

// do {
//   const a = prompt('Один из последних посмотреных фильмов?', ''),
//         b = +prompt('На сколько оцените его?', '');
//     i++

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
// } while (i < 2);


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрень довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

////////detectPersonalLevel();



// Я виконав ось так, теж правильний варіант
// function showMyDB() {
//   if (personalMovieDB.privat === false) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB();

// но можна ще ось так
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();