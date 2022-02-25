import React from "react";
import styled from "styled-components";
import x from "./x.svg";

const Wrapper = styled.div`
  height: 270px;
  width: 643px;
  position: absolute;
  bottom: calc(50% - 135px);
  background: white;
  border: 2px solid #1d1d1d;
  border-radius: 5px;
  z-index: 2;
  padding: 12px;
  overflow: hidden;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Row = styled.div`
  max-width: 430px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
`;
const Img = styled.img`
  width: 161px;
  height: 242px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5px;
  padding: 12px;
`;
const Name = styled.span`
  font-size: 19px;
  text-align: left;
`;
const Data = styled.span`
  font-size: 19px;
  font-weight: 300;
`;
const Title = styled.div`
  font-size: 21px;
  text-align: left;
  overflow: hidden;
  margin-bottom: 15px;
`;
const Price = styled.div`
  margin-top: 5px;
  font-size: 24px;
  padding-bottom: 54px;
`;
const Close = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
`;
const Button = styled.button`
  position: absolute;
  bottom: 14px;
  right: 14px;

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

const transform = (data, type) => data.items
    .map((item) => item.name)
    .join(data.items.length > 1 ? ", " : "");

const Popup = ({ data, setPopup }) => {
  const title = data?.title;
  const path = data?.thumbnail?.path;
  const price = getCheapest(data?.prices);
  const close = () => setPopup({ active: false });
  const imageUrl = path + "/portrait_fantastic." + data?.thumbnail?.extension;
  const year = data.dates
    .map((date) => (date.type === "focDate" ? date.date : ""))
    .map((date) => (!!date ? date.split("-")[0] : ""))
    .join("");

  const char = transform(data.characters);
  const creators = transform(data.creators);

  return (
    <Wrapper>
      <Img src={imageUrl} alt={title + " cover"} />
      <Right>
        <Close onClick={close}>
          <img src={x} alt={"x"} />
        </Close>
        <Title>{title}</Title>
        <Row>
          <Name>Year of release: </Name>
          <Data>{year}</Data>
        </Row>
        <Row>
          <Name>Format: </Name>
          <Data>{data.format}</Data>
        </Row>
        <Row>
          <Name>Pages: </Name>
          <Data>{data.pageCount}</Data>
        </Row>
        <Row>
          <Name>Characters: </Name>
          <Data>{char}</Data>
        </Row>
        <Row>
          <Name>Creators: </Name>
          <Data>{creators}</Data>
        </Row>
        <Row>
          <Name>DiamondCode: </Name>
          <Data>{data.diamondCode}</Data>
        </Row>
        {<Price>{`${price} $`}</Price>}
      </Right>
      <Button onClick={close}>Close</Button>
    </Wrapper>
  );
};

export default Popup;
