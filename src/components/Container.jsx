import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className="bg-nWhite font-roboto h-full 
        sm:h-auto sm:rounded-xl sm:flex sm:p-5 sm:gap-7"
    >
      {children}
    </div>
  );
};

export default Container;
