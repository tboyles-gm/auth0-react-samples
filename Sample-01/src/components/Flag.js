import React from "react";
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const Flag = ({ flags }) => {
  return flags.test ? <div style={{ color: "green" }}><h1>LaunchDarkly Flag On!</h1></div> : <div style={{ color: "red" }}><h1>LaunchDarkly Flag Off</h1></div>;
};

export default withLDConsumer()(Flag);
