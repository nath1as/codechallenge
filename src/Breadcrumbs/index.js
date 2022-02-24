import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const crumbNames = {
  "/": "",
  "/comic": "> Comics",
  "/magazine": "> Magazines",
  "/digital-comic": "> Digital Comics",
};

const Crumbs = styled.div`
  color: #666;
  padding-left: 23px;
  padding-top: 25px;
`;

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  return <Crumbs>{`Home ${crumbNames[pathname]}`}</Crumbs>;
};

export default Breadcrumbs;
