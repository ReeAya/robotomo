import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "3px solid #fc8692",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
