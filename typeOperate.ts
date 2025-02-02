//Union 연산자 [| : 합집합]
const a1: string | number = " 문자,숫자 가능";
const a2: Element | null = document.querySelector(".box");
const a3: () => number = () => 1;

// 마라탕: {재료들:string[], 가격:string or number}
const mara: { receip: string[]; price: string | number } = {
  receip: ["숙주", "푸주", "버섯"],
  price: 15000,
};

//Intersection 연산자 [& : 교집합]
const pizza: { size: string } & { topping: string[] } & { eat: () => void } = {
  size: "L",
  topping: ["버섯", "치즈", "페퍼로니"],
  eat: () => {
    console.log("피자 존맛탱구리");
  },
};
