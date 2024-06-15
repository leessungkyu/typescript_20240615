//typealias : 별칭, 별명
type Test = string | string[];
const test11: Test = "디카페인 아아";

//Coffee :name, kcal, shot, hasDecaffien, ingredients
type TCoffee = {
  name: string;
  kcal: number;
  shot: number;
  hasDecaffien: boolean;
  ingredients: string[];
};

//beverage: name, kcal, ingredients
type Tbeverage = {
  name: string;
  kcal: number;
  ingredients: string[];
};

type Bean = {
  shot: number;
  hasDecaffien: boolean;
};

type Liquid = {
  name: string;
  kcal: number;
  ingredients: string[];
};

type Carbonated = {
  isZero: boolean;
};

type Milk = {
  isLowFat: boolean;
  isSoy: boolean;
};

type Coffee1 = Bean & Liquid;
type Beverage1 = Carbonated & Liquid;
type LatteCoffe = Bean & Liquid & Milk;

//const americano: Coffee1 = {}
//const Coke: Beverratge = {}

type MyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};
type MyButton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  click: () => void;
};

//const newButton: MyTypograph & MyButton = {}
