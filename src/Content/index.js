import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";
import useComics from "../hooks/useComics";

const Wrapper = styled.div`
  height: calc(100vh - 112px - 45px);
  overflow-y: scroll;
  flex-wrap: wrap;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = ({ type }) => {
  const fetchNext = true;
  const comics = useComics(type, fetchNext);
  const [display, setDisplay] = useState([...Array(20)]);

  useEffect(() => {
    if (!!comics[type]) setDisplay([...comics[type]]);
  }, [type, comics]);

  return (
    <Wrapper>
      {display.map((card) => {
        return <Card data={card} key={card?.id} />;
      })}
    </Wrapper>
  );
};

export default Content;
