// 포켓몬 모듈 import
const pokemon = require('pokemon');
// 파일 시스템 모듈 import
const fs = require('fs');

// 포켓몬 모듈에서 목록 가져오기
const pokemonKoreanArr = pokemon.all('ko');

// HTML 요소를 ElementHTML로 변수 선언
const ElementHTML_front = `
<html>
  <head>
  </head>
  <body>
    <li>`
    
const ElementHTML_back =    
    `
    </li>
  </body>
  </html>`;
  
// HTML 요소와 포켓몬 하나씩을 합치기
function pokemonHTML(){
  for (i=0; i < pokemonKoreanArr.length; i++){
    pokemonWithHTML = ElementHTML_front + pokemonKoreanArr[i] + ElementHTML_back;
  }
pokemonHTML();
}
// toString() 메서드로 함수를 문자열화할 수 있는지 확인 - 실패

const pokemonString = toString(pokemonHTML());
console.log(typeof(pokemonString));
// fs.writeFile("pokemon.html", pokemonWithHTML , (err) => {
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("파일 생성완료\n");
//     console.log("컨텐츠를 불러왔습니다.");
//     console.log(fs.readFileSync("pokemon.html", "utf-8"));
//   }
// });

