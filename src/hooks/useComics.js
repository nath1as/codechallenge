import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
const marvelKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const useComics = (type, fetchNext) => {
  const [comics, setComics] = useState([]);
  const offset = comics.length;
  const format = !!type ? "format=" + type : "";
  const { isLoading, isError, data, error } = useQuery(type ?? "all", () =>
    fetch(
      `https://gateway.marvel.com:443/v1/public/comics?&limit=20&offset=${offset}${format}&apikey=${marvelKey}`
    ).then((res) => res.json())
  );


  useEffect(() => {
    if (!isLoading && !!comics.length && !!data?.data?.results) {
      setComics([...comics, ...data.data.results]);
    }
  }, [data?.data?.results]);

  //useEffect(() => {
    //if (!!fetchNext && !isLoading && !!data?.data?.results) {
      //setComics([...comics, ...data.data.results]);
    //}
  //}, [data, fetchNext]);
  console.log('hook', type, format, data?.data.results);

  return { comics: data?.data?.results, isLoading, error };
};

export default useComics;
