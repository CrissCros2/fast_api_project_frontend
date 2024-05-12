import {cleanup, render, screen} from '@testing-library/react'
import {PersonSelect} from './person_select'
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

describe('Person select component', () => {
  it('should render the component', () => {
      const mockHandleChange = jest.fn();
      const mockPersons = [ {name: "test", id: "test-uuid"} ];

      render(<PersonSelect handleChange={mockHandleChange} persons={mockPersons}/>);
      const peopleCard = screen.getByTestId("select-person");
      expect(peopleCard).toBeInTheDocument();
  })
})