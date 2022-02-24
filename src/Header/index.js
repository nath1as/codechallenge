import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 112px;
  background: black;
  color: white;
  font-weight: bold;
  padding: 0 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  padding-right: 60px;
`;
const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 23px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Tab = styled.div`
  padding-right: 80px;
  & > a {
    color: ${({ active }) => (active ? "red" : "white")};
  }
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt={"WHOOSH!"} />
      </Logo>
      <Tabs>
        <Tab active={pathname === "/"}>
          <Link to={"/"}>All</Link>
        </Tab>
        <Tab active={pathname === "/comic"}>
          <Link to={"/comic"}>Comic</Link>
        </Tab>
        <Tab active={pathname === "/magazine"}>
          <Link to={"/magazine"}>Magazine</Link>
        </Tab>
        <Tab active={pathname === "/digital-comic"}>
          <Link to={"/digital-comic"}>Digital comic</Link>
        </Tab>
      </Tabs>
    </Wrapper>
  );
};

export default Header;
