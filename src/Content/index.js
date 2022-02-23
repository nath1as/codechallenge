import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Card from "../Card";

const marvelKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const fetchMarvel = () => fetch(
  'https://gateway.marvel.com:443/v1/public/comics?format=digital%20comic&apikey=${marvelKey}'
).then((res) => res.json());

const Content = ({}) => {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const { isLoading, isError, data, error } = useQuery("comic", fetchMarvel);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(marvelKey, data)

  return (
    <Wrapper>
      {cards.map((card) => (
        <Card data={card} />
      ))}
    </Wrapper>
  );
};

export default Content;
