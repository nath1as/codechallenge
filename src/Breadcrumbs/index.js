import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Crumbs = styled.div`
`;

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  return (
    <Crumbs>
      {pathname}
    </Crumbs>
  );
};

export default Breadcrumbs;
