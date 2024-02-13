import { useState } from "react";
import Page from "./Page";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show ? (
        <Page />
      ) : (
        <>
          <button
          className="border-2 rounded-[30px] p-5 font-semibold
            
          	hover:bg-violet-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          onClick={() => setShow(!show)}
        >
          For my favourite person
        </button>
        <p className="font-semibold">Our first velentine together as a couple, Love you eternity Mr. Gorai 😘</p>
        </>
      )}
    </div>
  );
}

export default App;
