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
fs.writeFile("pokemon.html", pokemonWithHTML , (err) => {
  if (err){
    console.log(err);
  }
  else {
    console.log("파일 생성완료\n");
    console.log("컨텐츠를 불러왔습니다.");
    console.log(fs.readFileSync("pokemon.html", "utf-8"));
  }
});

// 오류 코드
// PS C:\Users\Ho\Desktop\SCSS> node app.js
//   throw new ERR_INVALID_ARG_TYPE(
// TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received function pokemonHTML
//     at Object.writeFile (node:fs:2271:5)
//     at Module._compile (node:internal/modules/cjs/loader:1256:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//     at Module.load (node:internal/modules/cjs/loader:1119:32)
//     at Module._load (node:internal/modules/cjs/loader:960:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12)
//     at node:internal/main/run_main_module:23:47 {
//   code: 'ERR_INVALID_ARG_TYPE'
// }