// 포켓몬 모듈 import
const pokemon = require('pokemon');
// 파일 시스템 모듈 import
const fs = require('fs');

// 포켓몬 모듈에서 목록 가져오기
const pokemonKorean = pokemon.all('ko');

fs.writeFile("pokemon.html", data, );
// HTML 요소와 한글화된 목록을 pokemonData로 변수 선언
const pokemonData = `<html><head></head><body><li>`+ pokemonKorean +`</li></body></html>`
