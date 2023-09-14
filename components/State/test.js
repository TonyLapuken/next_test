import { useBearStore } from "./store";

function StateTest() {
    const bears = useBearStore((state) => state.bears)
    var increasePopulation = useBearStore((state) => state.increasePopulation);
    return ( 
        <>
        <h1>Number of cars {bears}</h1>
        <button onClick={increasePopulation}>Click Me</button>
        </>
     );
}

export default StateTest;