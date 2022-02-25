import { useState, useEffect } from "react";
const marvelKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const filledArray = [...Array(20)];

const comicsDefault = {
  default: true,
  all: filledArray,
  magazine: filledArray,
  comic: filledArray,
  "digital%20comic": filledArray,
};
const comicsEmpty = {
  all: [],
  magazine: [],
  comic: [],
  "digital%20comic": [],
};

const useComics = (type, limit, fetchNext, setFetchNext) => {
  const [comics, setComics] = useState(() => comicsDefault);
  const [isLoading, setIsLoading] = useState(false);
  const [newComics, setNewComics] = useState([]);
  const offset = !!comics?.default
    ? comics?.[type]?.length - limit
    : comics?.[type]?.length;
  const format = type !== "all" ? "format=" + type : "";
  const url = `https://gateway.marvel.com:443/v1/public/comics?${format}&limit=${limit}&offset=${offset}&apikey=${marvelKey}`;

  useEffect(() => {
    setIsLoading(true);
    if (!comics.default && !fetchNext?.[offset] && !!comics[type]?.length)
      return;
    setFetchNext(false);
    fetch(url)
      ?.then((response) => response.json())
      ?.then((data) => {
        if (!!data) {
          setNewComics(data?.data?.results);
          setIsLoading(false);
        }
      });
    // eslint-disable-next-line
  }, [type, url, fetchNext, comics]);

  useEffect(() => {
    if (!isLoading) {
      const payload = [];
      const oldData = !!comics?.default ? comicsEmpty : comics;
      newComics?.forEach((comic) => {
        if (!comics[type].some((oldComic) => oldComic?.id === comic.id)) {
          payload.push(comic);
        }
      });
      const update = {
        ...oldData,
        [type]: [...oldData[type], ...payload],
      };

      setComics(update);
    }
    // eslint-disable-next-line
  }, [newComics, isLoading]);

  return { comics, isLoading };
};

export default useComics;
