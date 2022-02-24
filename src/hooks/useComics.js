import { useState, useEffect } from "react";
const marvelKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const filledArray = [...Array(20)];
const comicsDefault = {
  all: filledArray,
  magazine: filledArray,
  comic: filledArray,
  "digital%20comic": filledArray,
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
  }, [type, url]);

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
    // eslint-disable-next-line
  }, [newComics, isLoading]);

  return comics;
};

export default useComics;
