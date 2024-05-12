import {cleanup, render, screen} from '@testing-library/react'
import {Sliders} from './sliders'
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

describe('Sliders component', () => {
    it('should render the component', () => {
        render(<Sliders />)
        expect(screen.getByTestId("test-sliders")).toBeInTheDocument()
    })
})