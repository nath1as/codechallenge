import React, { useState, useEffect, useRef, useCallback } from "react";
import useInfiniteLoader from "react-use-infinite-loader";
import styled from "styled-components";
import useComics from "../hooks/useComics";
import Card from "../Card";
import Popup from "../Popup";

const Wrapper = styled.div`
  height: calc(100vh - 112px - 45px);
  overflow-y: scroll;
  flex-wrap: wrap;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = ({ type }) => {
  const limit = 20;
  const ref = useRef(null);
  const [display, setDisplay] = useState([...Array(limit)]);
  const [popup, setPopup] = useState(() => ({ active: false }));
  const [fetchNext, setFetchNext] = useState(false);
  const { comics } = useComics(type, limit, fetchNext, setFetchNext);
  const loadMore = useCallback(() => {
    if (!fetchNext?.[display.length]) setFetchNext({ [display.length]: true });
    // eslint-disable-next-line
  }, [display.length]);
  const { loaderRef } = useInfiniteLoader({ loadMore, canLoadMore: true });

  useEffect(() => {
    if (!!comics[type]) setDisplay([...comics[type]]);
  }, [type, comics]);

  return (
    <Wrapper
      onScroll={() => {
        return null;
      }}
    >
      {!!popup.active && <Popup data={popup.data} setPopup={setPopup} />}
      {display.map((card, idx) => {
        const trigger = display.length - 11 === idx;

        return (
          <>
            <Card
              data={card}
              key={card?.id + idx ?? idx}
              setPopup={setPopup}
              ref={ref}
            />
            {trigger && <div ref={loaderRef} />}
          </>
        );
      })}
    </Wrapper>
  );
};

export default Content;
