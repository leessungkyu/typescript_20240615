//anotation.ts
const coffee: string = "아메리카노";
const isIcecream: boolean = true;
const cars: string[] = ["제네시스", "테슬라", "모닝"];
const lotto: number[] = [1, 2, 3, 4, 5, 6];
const cake: { name: string; price: number } = {
  name: "치즈케이크",
  price: 3000,
};

// student: 객체타입 이름, 프로그램 수업들, 나이, 현재재학중
const student: {
  name: string;
  programClass: string[];
  age: number;
  status: boolean;
} = {
  name: "홍길동",
  programClass: ["react", "typescript"],
  age: 10,
  status: true,
};

const test: null = null;
const test1: undefined = undefined;
const test2: any = "모든 타입 적용";

const add = (a: number, b: number): number => a + b;
const add1 = (a: number, b: string): string => a + b;
