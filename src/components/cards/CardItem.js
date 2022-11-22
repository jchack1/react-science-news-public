import React from "react";
import moment from "moment";
import imageIcon from "../../img/Image-Icon.svg";

const CardItem = ({ item }) => {
  const missing = item.image.includes("missing-image");
  const imgUrl = item.image;
  const imgStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "400px auto",
  };
  return (
    <div className="card">
      {item.image && !missing ? (
        <div className="card-img" style={imgStyle}></div>
      ) : (
        <div className="no-image">
          <img src={imageIcon} alt="icon" className="no-image-icon" />
          No image available
        </div>
      )}

      <h1 className="card-title">{item.title}</h1>

      <p className="card-date">
        {moment(item.publishedAt).format("MMM DD YYYY")}
      </p>

      {item.description ? (
        <p className="card-description">{item.description}</p>
      ) : (
        <p className="card-description">No description available</p>
      )}

      <a href={item.url} className="card-link-wrapper">
        <p className="card-link">See more on {item.source.name}</p>
      </a>
    </div>
  );
};

export default CardItem;
