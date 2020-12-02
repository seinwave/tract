import React from "react";
import SideBar from "./SideBar";
import renderer from "react-test-renderer";

it("renders as expected", () => {
  const tree = renderer
    .create(
      <SideBar>
        <div className="testNavChild">Item</div>
        <div className="testNavChild2">Item2</div>
      </SideBar>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
