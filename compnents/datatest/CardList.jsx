"use client";

import Link from "next/link";
import cards from "./Data.json"; // Adjust the path as needed

const CardList = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {cards.map((card) => (
        <Link key={card.id} href={`/cards/${card.id}`} className="w-72 block">
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
