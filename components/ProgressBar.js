import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";


function TestProgressBar() {
    const [move,setMove] = useState(0);


  return (
    <>
      <h1>
        Hi
      </h1>
      <ProgressBar completed={move} isLabelVisible={false} maxCompleted={100}/>
      <button onClick={()=> setMove(move + 10)}>Click</button>
    </>
  );
}

export default TestProgressBar;
