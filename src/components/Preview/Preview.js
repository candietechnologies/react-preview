import React from "react";

export function Preview({ imgStyle, outerStyle, height, width, alt, file }) {
  return (
    <div style={outerStyle}>
      <img
        src={file ? URL.createObjectURL(file) : ""}
        height={height}
        width={width ? width : "100%"}
        style={imgStyle}
        alt={alt ? alt : "preview"}
      />
    </div>
  );
}
