import Product from "./Products";
import Mailbox from "./Messages";
import Unred from "./cart";
import TextStyle from "./style-components";
import "../App.css";

export default function App() {
  return (
    <>
      <h1>Products</h1>
      <Product
        name="Tacos"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={14}
      />
      <Product
        name="Nachos"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={16}
      />
      <Product
        name="Tomato"
        imgUrl="https://images.pexels.com/photos/70496/pexels-photo-70496.jpeg?w=640"
        price={7}
      />
      <Mailbox username="Stanislav" message={['Stanislav, Hello']} underMessage={[]}/>
      <Unred></Unred>
      <TextStyle></TextStyle>
    </>
  );
}
