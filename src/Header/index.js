import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 112px;
  background: black;
`;

const Tab = styled.div`
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Tab>
        <img src={logo}/>
      </Tab>
      <Tab>
        All
      </Tab>
      <Tab>
        Comic
      </Tab>
      <Tab>
        Magazine
      </Tab>
      <Tab>
        Digital comic
      </Tab>
    </Wrapper>
  );
};

export default Header;
