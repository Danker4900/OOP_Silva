import React, { useState } from "react";

function ChildComponent({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <p>Лічильник: {count}</p>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React з трьома дочірніми компонентами</h1>
      <ChildComponent initialValue={0} />
      <ChildComponent initialValue={5} />
      <ChildComponent initialValue={10} />
    </div>
  );
}

export default App;
