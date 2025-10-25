/**
 *
 * <div id="parent">
 *    <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *   </div>
 * <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *   </div>
 * </div>
 *
 * ReactElement(object) => HTML(Browser Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
// JSX
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
