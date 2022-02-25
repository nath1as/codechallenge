import React, { useState, useEffect, useCallback } from "react";
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
  const [display, setDisplay] = useState(() => [...Array(limit)]);
  const [popup, setPopup] = useState(() => ({ active: false }));
  const [fetchNext, setFetchNext] = useState(true);
  const { comics, isLoading } = useComics(type, limit, fetchNext, setFetchNext);

  useEffect(() => {
    if (!isLoading && !!comics[type].length) setDisplay([...comics[type]]);
  }, [type, comics, isLoading]);

  const loadMore = useCallback(() => {
    if (!fetchNext?.[display.length]) {
      setFetchNext({ [display.length]: true });
    }
    // eslint-disable-next-line
  }, [display.length]);

  const { loaderRef } = useInfiniteLoader({ loadMore, canLoadMore: true });


  return (
    <Wrapper>
      {!!popup.active && <Popup data={popup.data} setPopup={setPopup} />}
      {display.map((card, idx) => {
        const trigger = display.length - 11 === idx;
        const key = `${card?.id ?? "loader"}-${idx}`;

        return (
          <>
            <Card data={card} key={key} setPopup={setPopup} />
            {trigger && <div ref={loaderRef} key={"trigger"} />}
          </>
        );
      })}
    </Wrapper>
  );
};

export default Content;
