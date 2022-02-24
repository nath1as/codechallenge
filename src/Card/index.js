import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 207px;
  height: 395px;
  border: 2px solid #1d1d1d;
  border-radius: 5px;
  margin: 20px;
  padding: 12px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Img = styled.img`
  height: 242px;
  width: 161px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 19px;
  text-align: center;
`;
const Price = styled.div`
  margin-top: 5px;
  font-size: 24px;
  padding-bottom: 54px;
`;
const Button = styled.button`
  position: absolute;
  bottom: 10px;
  left: 40px;
  width: 139px;
  height: 34px;
  background: #dd2c2c;
  color: white;
  font-size: 21px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Card = ({ data }) => {
  const title = data.title;
  const price = data.prices[0]?.price; // TODO: find cheapest
  const imageUrl = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <Wrapper>
      <Img src={imageUrl} />
      <Title>{title}</Title>
      <Price>{`${price} $`}</Price>
      <Button>More Info</Button>
    </Wrapper>
  );
};

export default Card;
