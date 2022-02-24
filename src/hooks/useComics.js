import React, { useState, useEffect } from "react";
const marvelKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const comicsDefault = {
  all: [],
  magazine: [],
  comic: [],
  "digital%20comic": [],
};

const useComics = (type, fetchNext) => {
  const [comics, setComics] = useState(() => comicsDefault);
  const [isLoading, setIsLoading] = useState(false);
  const [newComics, setNewComics] = useState([]);
  const offset = comics?.[type]?.length;
  const format = type !== "all" ? "format=" + type : "";
  const url = `https://gateway.marvel.com:443/v1/public/comics?${format}&limit=20&offset=${offset}&apikey=${marvelKey}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!!data) {
          setNewComics(data?.data?.results);
          setIsLoading(false);
        }
      });
  }, [type]);

  useEffect(() => {
    if (!isLoading) {
      const payload = [];
      const oldData = comics ?? [];
      newComics.forEach((comic) => {
        if (!comics[type].includes(comic)) {
          payload.push(comic);
        }
      });
      const update = {
        ...oldData,
        [type]: payload,
      };

      setComics(update);
    }
  }, [newComics, isLoading]);

  return { comics, isLoading };
};

export default useComics;
