import React from "react";
import Header from "../components/header";
import Container from "../components/container";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
      </Container>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  );
}
