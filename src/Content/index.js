import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Card from "../Card";

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
`

const Content = ({}) => {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Wrapper>
      {cards.map(card => (
        <Card data={card} />
      ))}
    </Wrapper>
  );
};

export default Content;
