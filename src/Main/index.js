import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import Content from "../Content";

const Main = () => (
  <>
    <Header />
    <Breadcrumbs />
    <Routes>
      <Route index element={<Content type="all" />} />
      <Route path="comic" element={<Content type="comic" />} />
      <Route path="magazine" element={<Content type="magazine" />} />
      <Route
        path="digital-comic"
        element={<Content type="digital%20comic" />}
      />
    </Routes>
  </>
);

export default Main;
