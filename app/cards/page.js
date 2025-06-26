import Link from "next/link";
import cards from "./cardsData.json";

export default function CardsList() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">All Cards</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id} className="mb-4">
            <Link href={`/cards/${card.id}`}>
              <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
