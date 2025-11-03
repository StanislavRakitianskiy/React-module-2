import { useState } from "react";
interface Values {
  x: number;
  y: number;
}
export default function ValuesXY() {
  const [value, setValue] = useState<Values>({ x: 0, y: 0 });
  const updateValue = (key: keyof Values) => {
    setValue({
      ...value,
      [key]: value[key] + 1,
    });
  };
  return (
    <>
      <p>
        x: {value.x} y: {value.y}
      </p>
      <button onClick={() => updateValue("x")}>Update x</button>
      <button onClick={() => updateValue("y")}>Update y</button>
    </>
  );
}
