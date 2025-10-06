

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 rounded-xl shadow-md bg-white border border-gray-200 flex justify-between items-center hover:shadow-lg transition">
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800">{name}</span>
        <span className="text-xs text-gray-500">Category: {category}</span>
      </div>
      
    </li>
  );
}
