// import React from 'react';
import image from '../assets/news.jpg'

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} alt={title} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title.length > 50 ? `${title.slice(0, 47)}...` : title}</h5>
        <p className="card-text">
          {description ? (description.length > 90 ? `${description.slice(0, 87)}...` : description) : "This is a brief summary of the news item."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
