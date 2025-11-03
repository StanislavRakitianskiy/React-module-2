import { useState } from "react";
export default function ClickCounter() {
    const [click, setClick] = useState<number>(0)
    const handleClick = () => {
        setClick(click + 1)
    }
    return (
        <>
        <div>{click}</div>
        <button onClick={handleClick}>Click-Counter</button>
        </>
    )
}