export default function Item({ name, quantity }) {
  return (
    <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-50">
      <span className="text-gray-800 font-medium">{name}</span>
      <span className="text-gray-500 ml-4">Qty: {quantity}</span>
    </li>
  );
}
