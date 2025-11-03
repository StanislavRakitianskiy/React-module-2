import { useState } from "react";
export default function ClicksIsOpen() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClicks = () => setClicks(clicks + 1);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div>{clicks}</div>
      <button onClick={handleClicks}>Handle-Clicks</button>
      <button onClick={handleIsOpen}>
        {isOpen ? "Hide message" : "Show message"}
      </button>
      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
    </>
  );
}
