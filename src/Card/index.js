import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
width: 207px;
height: 395px;
border: 2px solid #1D1D1D;
border-radius: 5px;
`

const Card = ({data}) => {

  return (
    <Wrapper>
      {data}
    </Wrapper>
  );
};

export default Card;
