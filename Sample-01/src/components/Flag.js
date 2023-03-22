import React from "react";
import { useFeatureFlagEnabled } from 'posthog-js/react'

const Flag = () => {
  return useFeatureFlagEnabled('test') ? <div style={{ color: "green" }}><h1>Posthog Flag On!</h1></div> : <div style={{ color: "red" }}><h1>Posthog Flag Off</h1></div>;
};

export default Flag;
