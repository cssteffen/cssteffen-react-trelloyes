import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer"; //takes snapshot

//  ReactDOM.render(<List-cards />, section);

//SMOKE TEST//
it("renders without crashing", () => {
  const section = document.createElement("section");
  ReactDOM.render(<List cards={[]} />, section);
  ReactDOM.unmountComponentAtNode(section);
});

//SNAPSHOT TEST
//create() method takes the component to be rendered and performs a render on it
//toJSON() method creates the JSON file
it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <List
        cards={[
          { id: "a", title: "First card", content: "lorem ipsum Lum" },
          { id: "b", title: "Second card", content: "lorem ipsum" }
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
