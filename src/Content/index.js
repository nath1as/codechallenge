import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Card from "../Card";
import useComics from "../hooks/useComics";

const Wrapper = styled.div`
  height: calc(100vh + 300px);
  overflow-y: scroll;
  flex-wrap: wrap;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = ({ type }) => {
  const fetchNext = true;
  const { comics } = useComics(type, fetchNext);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (!comics?.length) {
      console.log('e', display, comics);
      setDisplay([...display, comics])
    } 
  }, [comics?.length])

  return (
    <Wrapper>
      {display.map((card) => {
        console.log(card);
        if (!card) return;
        return <Card data={card} />;
      })}
    </Wrapper>
  );
};

export default Content;
