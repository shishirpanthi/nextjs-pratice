import React from "react";

export default function CardDetail({ card }) {
  if (!card)
    return <div className="text-center text-red-500">Card not found</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{card.title}</h2>
      <p className="mt-2 text-gray-700">{card.description}</p>
    </div>
  );
}
