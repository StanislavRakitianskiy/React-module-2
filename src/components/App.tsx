import { useState } from "react";
import Product from "./Products";
import Mailbox from "./Messages";
import Unred from "./cart";
import TextStyle from "./style-components";
import AlertClsx from "./clsx";
import ButtonUsual from "./button";
import IconsAi from "./icons";
import EventClick from "./events";
import EventClickNumber from "./sevents-number";
import ClickCounter from "./click-couter";
import ClicksIsOpen from "./clicks-open-counter";
import ValuesXY from "./values-X-Y";
import "../App.css";

export default function App() {
  const [click, setClick] = useState<number>(0);
  const handleClicksCouter = () => {
    setClick(click + 1);
  };
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
      <Mailbox
        username="Stanislav"
        message={["Stanislav, Hello"]}
        underMessage={[]}
      />
      <Unred></Unred>
      <TextStyle></TextStyle>
      <AlertClsx></AlertClsx>
      <AlertClsx type="success"></AlertClsx>
      <AlertClsx type="error"></AlertClsx>
      <ButtonUsual variant="dis" text="Open"></ButtonUsual>
      <IconsAi name=""></IconsAi>
      <EventClick></EventClick>
      <EventClickNumber></EventClickNumber>
      <ClickCounter value={click} onUpdate={handleClicksCouter}></ClickCounter>
      <ClickCounter value={click} onUpdate={handleClicksCouter}></ClickCounter>
      <ClicksIsOpen></ClicksIsOpen>
      <ValuesXY></ValuesXY>
    </>
  );
}
