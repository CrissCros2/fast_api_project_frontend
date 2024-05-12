// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {cleanup} from "@testing-library/react";

jest.mock("axios")
jest.mock('uuid');

beforeEach(() => {
    axios.post.mockResolvedValue({ data: {} });
    axios.get.mockResolvedValue({ data: {} });
    axios.delete.mockResolvedValue({ data: {} });
    uuidv4.mockReturnValue('test-uuid');
    jest.spyOn(console, 'error')
    jest.spyOn(console, 'warn')
    // @ts-ignore jest.spyOn adds this functionallity
    console.error.mockImplementation(() => null);
    console.warn.mockImplementation(() => null);
})

afterEach(cleanup);

