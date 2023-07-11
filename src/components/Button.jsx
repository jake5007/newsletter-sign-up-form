import React from "react";

const Button = ({ text, onClick, abs }) => {
  return (
    <button
      type="submit"
      className={`text-nWhite bg-dsGrey px-7 py-3
        rounded-md w-[100%] cursor-pointer hover:bg-pTomato
        hover:shadow-lg hover:shadow-pTomato
        ${
          abs
            ? "absolute bottom-12 left-[50%] translate-x-[-50%] w-[90%] sm:relative sm:bottom-0 sm:w-full"
            : ""
        }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
