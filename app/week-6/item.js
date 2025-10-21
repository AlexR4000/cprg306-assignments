

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b border-gray-300">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-600">
        Quantity: {quantity} | Category: {category}
      </div>
    </li>
  );
}
