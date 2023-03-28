import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TextQuote from "./TextQuote";

const AuthorPage = () => {
  let { author }: string | undefined = useParams();
  const [quotesByAuthor, setQuotesByAuthor] = useState([]);

  const client = axios.create({
    baseURL: "https://quote-garden.onrender.com/api/v3/",
  });

  useEffect(() => {
    const getAllQuotesByAuthor = () => {
      const url = new URL(`${client.defaults.baseURL}`);

      url.searchParams.set("author", author);

      const searchParams = url.search;

      const response = client
        .get(`quotes/${searchParams}`)
        .then((response) => setQuotesByAuthor(response?.data?.data));
    };
    getAllQuotesByAuthor();
  }, [author]);

  console.log(quotesByAuthor);

  return (
    <div>
      <h1 className="font-bold"> {author} </h1>
      {quotesByAuthor?.map((quote, i) => {
        return <TextQuote key={i} text={quote?.quoteText} />;
      })}
    </div>
  );
};

export default AuthorPage;
