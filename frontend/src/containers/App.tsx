import useWasm from "../hooks/useWasm";

function App() {
  const instance = useWasm();
  console.log(instance);
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;
