interface Book {
  id: number;
  name: string;
}
const books: Book[] = [
  { id: 1, name: "Canada" },
  { id: 2, name: "Golme" },
  { id: 3, name: "React ease" },
];
export default function Unred() {
  return (
    <>
      <h2>Books of the week</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  );
}
