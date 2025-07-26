import useProducts from "./hook/useProducts";

const App = () => {
  const { titles, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="p-4">
      {titles.map((title, index) => (
        <li key={index} className="mb-2 border p-2 rounded shadow-sm">
          {title}
        </li>
      ))}
    </ul>
  );
};

export default App;
