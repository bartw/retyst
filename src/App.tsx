import React from "react";
import resetCss from "./resetCss";
import Page from "./Page";
import Title from "./Title";
import SubTitle from "./SubTitle";

resetCss();

const App = () => (
  <Page>
    <Title>Retyst</Title>
    <SubTitle>A React Typescript Starter</SubTitle>
  </Page>
);

export default App;
