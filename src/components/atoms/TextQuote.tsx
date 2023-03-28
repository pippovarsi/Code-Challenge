import React from "react";

type TextQuoteProps = {
  text: string;
};

const TextQuote = ({ text }: TextQuoteProps) => {
  return (
    <div className="max-w-md flex-col mt-16">
      <div className="border-l-8 border-amber-300 pl-8 mb-8 font-semibold">
        {text}
      </div>
    </div>
  );
};

export default TextQuote;
