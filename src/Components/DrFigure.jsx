import React from "react";

const DrFigure = ({ background, name, post }) => {
  const style = {
    backgroundImage: url({ background }),
  };

  return (
    <div className="container" style={style}>
      <div className="infos">
        <p className="name">{name}</p>
        <p className="profession">{post}</p>
      </div>
    </div>
  );
};

export default DrFigure;
