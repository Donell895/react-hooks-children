import React from "react";
import Container from "./Container";

function App() {
  const exampleContent = Array.from({ length: 7 }, (_, index) => (
    <div key={index}>This is an example!</div>
  ));

  const exampleImages = Array.from({ length: 4 }, (_, index) => (
    <img
      key={index}
      alt="turtle"
      src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
    />
  ));

  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        {exampleContent}
      </Container>
      <Container header="Example header" textPosition="center">
        {exampleImages}
      </Container>
    </div>
  );
}

export default App;
