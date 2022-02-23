import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import Content from "../Content";

const MainWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;

const Main = () => (
  <MainWrapper>
    <Header />
    <Breadcrumbs />
    <Routes>
      <Route index element={<Content />} />
      <Route path="comic" element={<Content />} />
      <Route path="magazine" element={<Content />} />
      <Route path="digital-comic" element={<Content />} />
    </Routes>
  </MainWrapper>
);

export default Main;
