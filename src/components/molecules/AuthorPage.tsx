import axios, { AxiosInstance } from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Quote } from "src/types";
import TextQuote from "../atoms/TextQuote";

const AuthorPage = () => {
  const { author } = useParams<string>();
  const [quotesByAuthor, setQuotesByAuthor] = useState([]);

  const client: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
  });

  useEffect(() => {
    const getAllQuotesByAuthor = () => {
      const url: URL = new URL(`${client.defaults.baseURL}`);

      url.searchParams.set("author", author as string);

      const searchParams = url.search;

      client
        .get(`quotes/${searchParams}`)
        .then((response) => setQuotesByAuthor(response?.data?.data));
    };
    getAllQuotesByAuthor();
  }, [author]);

  return (
    <div>
      <h1 className="font-bold"> {author} </h1>
      {quotesByAuthor?.map((quote: Quote, i: number) => {
        return <TextQuote key={i} text={quote?.quoteText} />;
      })}
    </div>
  );
};

export default AuthorPage;
