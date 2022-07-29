import React, { useState } from "react";

const Hotel = ({ id, image, info, name, price, removeHotel }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="hotel">
      <img src={image} alt={name} />
      <footer>
        <div className="intel">
          <h4>{name}</h4>
          <h4 className="hotel-price">kshs.{price}</h4>
        </div>
        <p> 
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeHotel(id)}>
          Decline
        </button>
      </footer>
    </article>
  );
};

export default Hotel;