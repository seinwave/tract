import React from "react";
import TopBar from "./TopBar";
import renderer from "react-test-renderer";

it("renders as expected", () => {
  const tree = renderer.create(<TopBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
