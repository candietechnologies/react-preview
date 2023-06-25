import React from "react";

export function Preview({
  imgStyle,
  outerStyle,
  height,
  width,
  alt,
  file,
  onClick,
}: any) {
  return (
    <div onClick={onClick} style={outerStyle ? outerStyle : { width: "50px" }}>
      <img
        src={file ? URL.createObjectURL(file) : ""}
        height={height ? height : "50px"}
        width={width ? width : "100%"}
        style={imgStyle}
        alt={alt ? alt : "preview"}
      />
    </div>
  );
}
