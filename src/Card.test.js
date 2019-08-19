import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer"; //takes snapshot

//SMOKE TEST
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//SNAPSHOT TEST
//create() method takes the component to be rendered and performs a render on it
//toJSON() method creates the JSON file
it("renders the UI as expected", () => {
  const tree = renderer
    .create(<Card title="Card" content="Lorem Ipsum" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
