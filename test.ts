console.log("타입스크립트다~");

const cookie = {
  name: "화이트쿠키비키",
  price: 2500,
};

console.log(`${cookie.name}은(는) 가격이 ${cookie.price}원이다`);
//typescript가 설치되어 있어야 작동
//npm[실행] [설치] [전역] [타스]
//npm install -g typescript
//tsc test.ts   : tsc는 typescript를 javascript로 변환하는 명령어(test.ts -> test.js)
//ts-node 사용시 설치안되었으면 다음 명령어로 설치 npm install -g ts-node
