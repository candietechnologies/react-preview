import React, { useState } from "react";

export default function Preview({
  imgStyle,
  innerStyle,
  outerStyle,
  height,
  width,
  alt,
  file,
  multiple = false,
}) {
  const [fileUrl, setFileUrl] = useState([]);

  if (multiple) {
    setFileUrl(file.map((file) => URL.createObjectURL(file)));
  } else {
    setFileUrl([URL.createObjectURL(file)]);
  }

  return (
    <div style={innerStyle}>
      {fileUrl?.map((file, i) => (
        <div key={i} style={outerStyle}>
          <img
            src={file}
            height={height}
            width={width ? width : "100%"}
            style={imgStyle}
            alt={alt ? alt : "preview"}
          />
        </div>
      ))}
    </div>
  );
}
