import {cleanup, render, screen} from '@testing-library/react'
import { App } from './App'
import axios from "axios";
import {v4 as uuidv4} from "uuid";

jest.mock("axios")
jest.mock('uuid');

beforeEach(() => {
    axios.post.mockResolvedValue({ data: {} });
    axios.get.mockResolvedValue({ data: {} });
    uuidv4.mockReturnValue('test-uuid');
})
afterEach(cleanup);

describe("App", () => {
    it("should render the app", () => {
        render(<App />);
        expect(screen.getByTestId("test-app")).toBeInTheDocument();
    })
})
