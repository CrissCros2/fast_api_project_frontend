import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import {CardSlider} from "../card_slider/card_slider";
import {EventForm} from "./event_create";
import {SliderDirection} from "../../constants";
import {React} from "react";
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

test("Renders event card correctly", () => {
    render(<CardSlider
        Card={EventForm}
        direction={SliderDirection.Down}/>)

    const eventCard = screen.getByTestId("create-event-box");
    expect(eventCard).toBeInTheDocument();
})

describe('EventForm component', () => {
    it('should update inputs state on change', () => {
        render(<EventForm />);
        const titleInput = screen.getByPlaceholderText('Title...');

        fireEvent.change(titleInput, { target: { value: 'Test' }})

        expect(titleInput.value).toBe('Test');
    });

    it('should call slide_out function and axios post method on form submit', async () => {
        const mockSlideOut = jest.fn();

        render(<EventForm slide_out={mockSlideOut} />);
        const titleInput = screen.getByPlaceholderText('Title...'); // Assuming the input has name attribute 'name'
        const descInput = screen.getByPlaceholderText('Description...'); // Assuming the input has name attribute 'name'
        const timeInput = screen.getByPlaceholderText("Time..."); // Assuming the input has name attribute 'name'

        const submitButton = screen.getByText('Create Event'); // Assuming the submit button has text 'Submit'

        fireEvent.change(titleInput, { target: { value: 'Test' } });
        fireEvent.change(descInput, { target: { value: 'Test' } });
        fireEvent.change(timeInput, { target: { value: '2022-05-10T15:30' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockSlideOut).toHaveBeenCalled();
        });
        expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/events/', {
            "description": "Test",
            "id": "test-uuid",
            "persons": [],
            "time": "2022-05-10T15:30",
            "title": "Test",
        });
    });
});