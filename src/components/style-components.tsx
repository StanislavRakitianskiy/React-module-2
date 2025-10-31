import '../css/alert.css'
import css from '../css/aletr.module.css'
export default function TextStyle() {
  return (
    <>
      <p style={{ color: "red", fontSize: "24px" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
        fugiat.
      </p>
      <p className="alert">Lorem ipsum dolor sit amet.</p>
      <p className={css.alert}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat iure libero ut similique repellendus provident. Alias dicta iste odio illo eveniet incidunt fuga.</p>
    </>
  );
}
