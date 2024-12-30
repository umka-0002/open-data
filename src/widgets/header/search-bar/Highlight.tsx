import React from "react";
import { HighlightProps } from "entities/search/model/types";
import { Link } from "react-router-dom";

export const Highlight: React.FC<HighlightProps> = ({ text, query }) => {
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <Link to="/organization">
            <span key={index} className="text-blue-500 font-semibold">
              {part}
            </span>
          </Link>
        ) : (
          part
        )
      )}
    </>
  );
};
