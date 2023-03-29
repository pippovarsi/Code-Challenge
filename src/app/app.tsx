import axios from "axios";
import AuthorPage from "components/atoms/AuthorPage";
import RandomQuote from "components/atoms/RandomQuote";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {
  const [randomQuote, setRandomQuote] = useState([]);
  const [generateRandomQuote, setGenerateRandomQuote] =
    useState<boolean>(false);

  const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
  });
  useEffect(() => {
    const getRandomQuote = () => {
      client
        .get("quotes/random")
        .then((response) => setRandomQuote(response?.data?.data));
    };
    getRandomQuote();
  }, [generateRandomQuote]);

  return (
    <div className="h-screen flex justify-items-center justify-center ">
      <Routes>
        <Route
          path="/"
          element={
            <RandomQuote
              randomQuote={randomQuote}
              setGenerateRandomQuote={setGenerateRandomQuote}
              isGenerateRandomQuote={generateRandomQuote}
            />
          }
        />
        <Route path="/author/:author" element={<AuthorPage />} />
      </Routes>
    </div>
  );
};

export default App;
