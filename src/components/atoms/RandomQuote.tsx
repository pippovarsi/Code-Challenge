import React from "react";
import { useNavigate } from "react-router-dom";
import { Quote } from "src/types";
import { Refresh } from "tabler-icons-react";
import TextQuote from "./TextQuote";

type RandomQuoteProps = {
  randomQuote: Quote[];
  setGenerateRandomQuote?: React.Dispatch<React.SetStateAction<boolean>>;
  isGenerateRandomQuote: boolean;
};

const RandomQuote = ({
  randomQuote,
  setGenerateRandomQuote,
  isGenerateRandomQuote,
}: RandomQuoteProps) => {
  const navigate = useNavigate();
  const redirectToAuthorPage = (author: string) => {
    navigate(`author/${author}`);
  };
  return (
    <div>
      {randomQuote?.map((quote: Quote, index: number) => {
        return (
          <div className="max-w-md flex-col mt-16" key={index}>
            <TextQuote text={quote?.quoteText} />
            <div className="ml-10 flex justify-between bg-black rounded h-32 text-white items-center px-6">
              <div
                className="cursor-pointer"
                onClick={() => redirectToAuthorPage(quote?.quoteAuthor)}
              >
                <h1 className="font-bold">{quote?.quoteAuthor}</h1>
                <h1>{quote?.quoteGenre}</h1>
              </div>

              <div
                className="flex cursor-pointer"
                onClick={() => setGenerateRandomQuote(!isGenerateRandomQuote)}
              >
                <h1>random</h1>
                <Refresh size={18} strokeWidth={2} color={"white"} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomQuote;
