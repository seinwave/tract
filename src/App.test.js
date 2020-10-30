import React from "react";
import { App, DataContext, fetchData } from "./App";
import axios from "axios";
import renderer from "react-test-renderer";

jest.mock("axios");

describe("state and context tests", () => {
  test("DataContext exists", () => {
    expect(DataContext).not.toBeNull();
  });

  test("Data successfully fetched", async () => {
    const projects = [{ name: "Belize" }];
    const resp = { data: projects };
    axios.get.mockResolvedValue(resp);

    return fetchData().then((data) => expect(data).toEqual(resp));
  });
});

describe("snapshot testing", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
