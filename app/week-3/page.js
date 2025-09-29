import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
