import React  from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';

function Flag() {
    //const flags = useFlags(['test']); // only causes re-render if specified flag values / traits change
    const flagsmith = useFlagsmith();
    if(flagsmith.hasFeature('test')) {
        return <div style={{ color: "green" }}><h1>Flagsmith Flag On!</h1></div>;
    } else {
        return  <div style={{ color: "red" }}><h1>Flagsmith Flag Off</h1></div>;
    }    
}

export default Flag;