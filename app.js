import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled befor it reaches the JS) - PARCEL - Babel
// JSX => Bable trasnpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// JSX - is not HTML in JS- It is HTML like syntax
const Title = () => <h1 className="head">Namaste React using JSX</h1>;

// React Component
// Class Component- old way
// Functional Component- new way
// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
