import React from "react";
import ReactDOM from 'react-dom';
import { App, DataContext, fetchData } from "./App";
import axios from "axios";
import {act} from 'react-dom/test-utils'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.mock("axios");

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



