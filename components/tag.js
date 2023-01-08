import React from "react";

const TagComponent = ({ children }) => {
  return (
    <p className="btn btn-xs m-0.5 mb-7 rounded text-white cursor-pointer bg-[#e8775be2]">
      {children}
    </p>
  );
};

export default TagComponent;
