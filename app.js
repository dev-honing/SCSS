// 포켓몬 모듈 import
const pokemon = require('pokemon');
// 파일 시스템 모듈 import
const fs = require('fs');

// 포켓몬 모듈에서 목록 가져오기
const pokemonKoreanArr = pokemon.all('ko');

// 문자열로 HTML 요소를 변수 선언
const ElementHTML = 
`
<html>
  <head>
  </head>
  <body>
  <h1>
  </h1>
  </body>
</html>
`
console.log(ElementHTML); // 확인





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
