import { useEffect, useState } from "react";
import "./App.scss";
import Box from "./components/Box";
import { useData } from "./contexts/DataContext";

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [boxes, setBoxes] = useState([]);
  const { opened, setOpened, status, setStatus, searchNum, setSearchNum }: any =
    useData();

  function init() {
    const numbers: any = Array(100)
      .fill([])
      .map((_, index) => index + 1);
    numbers.sort(() => Math.random() - 0.5);
    setBoxes(numbers);
    setSearchNum(getRndInteger(1, 100));
    setOpened([]);
    setStatus(0);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <div className="search">Find the hidden number: {searchNum}</div>

      {status === 0 && (
        <div className="opened">{50 - opened.length} attempts left</div>
      )}

      {status === 1 && (
        <div className="free">You win! {opened.length} attempts.</div>
      )}
      {status === 2 && <div className="lost">You lost!</div>}

      <button onClick={init}>Start over</button>

      <div className="boxes">
        {boxes.map((num, int) => (
          <Box key={int} num={num} int={int + 1} />
        ))}
      </div>
    </div>
  );
}

export default App;
