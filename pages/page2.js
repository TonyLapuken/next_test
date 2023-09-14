import { useBearStore } from "../components/State/store";

function page2() {
    var increasePopulation = useBearStore((state) => state.increasePopulation);
    return ( 
        <>
            <button onClick={increasePopulation}>Add</button>
        </>
     );
}

export default page2;