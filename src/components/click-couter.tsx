interface ClickCounterProps {
    value: number;
    onUpdate: () => void;
}
export default function ClickCounter({value, onUpdate}: ClickCounterProps) {
    return (
        <>
        <div>{value}</div>
        <button onClick={onUpdate}>Click up</button>
        </>
    )
}