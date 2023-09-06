import "./App.css";

import { useGetAllProductsQuery } from "./redux/dataSlice";

function App() {
  const { data: allProductsData, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading</div>;
  return (
    <div className="App">
      <h1>Data:</h1>
      {allProductsData.products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;
