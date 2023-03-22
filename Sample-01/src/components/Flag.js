import React  from 'react';
import { useFeatureIsOn } from "@growthbook/growthbook-react";


function Flag() {
    const enabled = useFeatureIsOn("test");
    if(enabled) {
        return <div style={{ color: "green" }}><h1>Growthbook Flag On!</h1></div>;
    } else {
        return  <div style={{ color: "red" }}><h1>Growthbook Flag Off</h1></div>;
    }    
}

export default Flag;