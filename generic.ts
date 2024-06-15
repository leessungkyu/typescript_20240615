//generic.ts -> generalize[일반화하다]

type GG<T, K> = {
  first: T;
  second: K;
};

const testG: GG<string, number> = {
  first: "문자열",
  second: 111,
};

type AA = {
  first: string;
  second: number;
};

type BB = {
  first: boolean;
  second: number;
};

type CC = {
  first: number;
  second: number;
};

// type HaburgerSet<> = {main, side, drink}

type HamburgerSet<T, K, L> = {
  main: T;
  side: K;
  drink: L;
};

type Moning = "머핀";
type NotMoning = "참꺠빵";
type rice = "라이스";

type Hamburger<T> = {
  bread: T;
  content: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};

type Side = "감자튀김" | "코우슬로" | "맥너겟" | "소프트아이스크림";
type Coffee = "드립커피" | "아메리카노" | "디카페인" | "라뗴";
type Beverage = "콜라" | "스프라이트" | "제로콜라" | "환타";

const Macmorning: HamburgerSet<
  Hamburger<rice | Moning>,
  Side,
  Coffee | Beverage
> = {
  main: {
    bread: "라이스",
    content: "토마토에그",
  },
  side: "감자튀김",
  drink: "드립커피",
};

type Succes<T> = {
  result: "success";
  value: T;
};

type Fail = {
  result: "fail";
  value: "error";
};

type AAA<T> = Succes<T> | Fail;

const getResponse = (_B_: AAA<string>) => {
  if (_B_.result == "success") {
    console.log(_B_.value + "성공");
  } else {
    console.log(_B_.value);
  }
};
