const pokemon = require('pokemon');

// 포켓몬 전체 리스트를 확인할 변수를 선언
let pokemonList = pokemon.all();

console.log(pokemonList); 

// 포켓몬 이름을 한글화 하는 변수 선언
let pokemonToKorean = pokemon.all('ko');

