import React from "react";
import { App, DataContext, fetchData } from "./App";
import axios from "axios";
import renderer from "react-test-renderer";
import {act} from 'react-dom/test-utils'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.mock("axios");

const mockFetch = jest.fn()

describe("state and context tests", () => {
  test("DataContext exists", () => {
    expect(DataContext).not.toBeNull();
  });

  test("fetch function works", async () => {
    const projects = [{ name: "Belize" }];
    const resp = { data: projects };
    await axios.get.mockResolvedValue(resp);
    return act(()=>fetchData().then((data) => expect(data).toEqual(resp)));
  });
});

// describe("snapshot testing", () => {
//   it("renders as expected", async () => {
//     await waitFor(() => screen.getByText('Tickets by'))
//     const tree = await act(() => renderer.create(<App />).toJSON());
//     expect(tree).toMatchSnapshot();
//   });
// });
