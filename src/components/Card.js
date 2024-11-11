import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Card;



