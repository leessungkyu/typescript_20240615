// Hybrid Type (타입과 타입의 교집합)
// type Cogge = Bean & Liquid

// Literal Type
type Direction = "north" | "south" | "west" | "east";

const destination: Direction = "north";

type PrimaryColor = "#05141F" | "#FFFFFF";
type SecondaryColor = "#5D7D2B" | "#4C5B35" | "#589000";
type FontSzie = 11 | 12 | 13 | 14 | 15 | 20 | 24;

const sectionBg: SecondaryColor = "#589000";
const component: {
  color: PrimaryColor | SecondaryColor;
  fontSize: FontSzie;
}[] = [
  { color: "#05141F", fontSize: 13 },
  { color: "#FFFFFF", fontSize: 14 },
  { color: "#5D7D2B", fontSize: 20 },
];

component.forEach(({ color, fontSize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontSize + "px";
});
