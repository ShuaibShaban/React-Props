import React from "react";

const Card = ({name, img, alt, tel, email}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={img}
        alt={alt}
      />
      <p>{tel}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
