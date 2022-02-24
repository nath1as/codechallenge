import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useComics from "../hooks/useComics";
import Card from "../Card";
import Popup from "../Popup";

const Wrapper = styled.div`
  height: calc(100vh - 112px - 45px);
  overflow-y: scroll;
  flex-wrap: wrap;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = ({ type }) => {
  const [display, setDisplay] = useState([...Array(20)]);
  const [popup, setPopup] = useState(() => ({ active: false }));
  const fetchNext = true;
  const comics = useComics(type, fetchNext);

  useEffect(() => {
    if (!!comics[type]) setDisplay([...comics[type]]);
  }, [type, comics]);

  useEffect(() => {
    console.log(popup);
  }, [popup]);

  console.log(popup);

  return (
    <Wrapper >
      {!!popup.active && <Popup data={popup.data} setPopup={setPopup} />}
      {display.map((card, idx) => {
        return <Card data={card} key={card?.id ?? idx} setPopup={setPopup} />;
      })}
    </Wrapper>
  );
};

export default Content;
