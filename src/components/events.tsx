export default function EventClick() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked", event);
    console.log("Target:", event.target);
  };
  return (
    <>
      <button onClick={handleClick}>Click me please</button>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          console.log("Clicked", event);
          console.log("Target:", event.target);
        }}
      >
        Click me please
      </button>
    </>
  );
}
