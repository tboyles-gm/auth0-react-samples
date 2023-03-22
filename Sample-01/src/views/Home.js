import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Flag from "../components/Flag";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <Flag />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
