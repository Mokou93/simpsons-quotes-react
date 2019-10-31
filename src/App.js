import React, { useState } from "react";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";

function App() {
  const [quotes, setQuotes] = useState([]);

  async function getSimpsonsQuotes() {
    // au clique
    const response = await fetch(
      "https://quests.wilders.dev/simpsons-quotes/quotes"
    );
    const jsonRes = await response.json();
    setQuotes(jsonRes);
  }
  return (
    <div className="App">
      <Navbar />
      <QuoteList quotes={quotes} />
      <button onClick={getSimpsonsQuotes}>Récupérer des citations</button>
    </div>
  );
}
export default App;
