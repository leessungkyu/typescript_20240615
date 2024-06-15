//optional
//substract 함수(a, b)
// '?'는 정해진 타입이거나 undefined이다라는 저의
const substrct = (a: number, b?: number): number => {
  if (b === undefined) {
    return 0;
  } else {
    return a - b;
  }
};

// optional: ? undefined 일수 도 있다는 뜻\
type Food = {
  name?: string;
  price?: number;
  kcal?: number;
};

const lunch: Food = {
  name: "냉면",
  price: 9000,
  kcal: 300,
};

//keyof
//obj {k:v}
type Course = {
  name: string;
  classroom: "A" | "B" | "C" | "D";
};

type A = keyof Course;
const test111: A = "name";
