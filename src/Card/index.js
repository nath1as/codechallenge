import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 203px;
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
  width: 161px;
`;
const LoadingImg = styled.div`
  height: 242px;
  width: 161px;
  background: lightgray;
`;
const LoadingTitle = styled.div`
  height: 2rem;
  background: lightgray;
  width: 150px;
  margin-top: 20px;
  font-size: 19px;
  text-align: center;
  overflow: hidden;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 19px;
  text-align: center;
  overflow: hidden;
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
  width: 140px;
  height: 34px;
  background: #dd2c2c;
  color: white;
  font-size: 21px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const getCheapest = (prices) => {
  if (!prices?.length) return 0;

  const pricesArray = prices?.map((price) => price.price) ?? [];
  const cheapest = Math.min(...pricesArray);

  return cheapest;
};

const Card = ({ data }) => {
  const [price, setPrice] = useState(0);
  const title = data?.title;
  const path = data?.thumbnail?.path;
  const imageUrl = path + "/portrait_fantastic." + data?.thumbnail?.extension;

  useEffect(() => {
    setPrice(getCheapest(data?.prices))
  }, [data?.prices])

  return (
    <Wrapper>
      {!!path ? <Img src={imageUrl} /> : <LoadingImg />}
      {!!title ? <Title>{title}</Title> : <LoadingTitle />}
      { <Price>{`${price} $`}</Price>}
      <Button>More Info</Button>
    </Wrapper>
  );
};

export default Card;
