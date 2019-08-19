import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
//import renderer from "react-test-renderer"; //takes snapshot

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
        cards={[(key = "1"), (title = "Title"), (content = "Lorem Ipsum")]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
