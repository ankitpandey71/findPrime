import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isPrime(input)) {
      setResult(`${input} is a prime number.`);
    } else {
      setResult(`${input} is not a prime number.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Check Prime</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default App;
