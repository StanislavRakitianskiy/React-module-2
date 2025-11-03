import { useState } from "react";
export default function EventClickNumber() {
  const [cli, stClis] = useState<number>(0);
  const hendleClick = () => {
    stClis(cli + 1);
  };
  return (
    <div>
      <div>{cli}</div>
      <button onClick={hendleClick}>Currents</button>
    </div>
  );
}
