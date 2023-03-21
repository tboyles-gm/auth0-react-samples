import React, { Fragment } from "react";
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import Hero from "../components/Hero";
import Content from "../components/Content";
import Flag from "../components/Flag";

const Home = ({ flags }) => (
  <Fragment>
    <Hero />
    <Flag />
    <hr />
    <Content />
  </Fragment>
);

export default withLDConsumer()(Home);
