import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {CardSlider} from "../card_slider/card_slider";
import {PersonForm} from "./person_create";
import {SliderDirection} from "../../constants";
import axios from "axios";
import {React} from "react";


test("Renders people card correctly", () => {
    render(<CardSlider
        Card={PersonForm}
        direction={SliderDirection.Up}
        show_text={"Test"}
        setPersonsUpdated={() => {}}/>)

    const peopleCard = screen.getByTestId("create-person-box");
    expect(peopleCard).toBeInTheDocument();
})

describe('PersonForm component', () => {
    it('should update inputs state on change', () => {
        render(<PersonForm />);
        const nameInput = screen.getByPlaceholderText('Name...');

        fireEvent.change(nameInput, { target: { value: 'John' }})

        expect(nameInput.value).toBe('John');
    });

    it('should call slide_out function and axios post method on form submit', async () => {
        const mockSlideOut = jest.fn();
        const mockSetPersonsUpdated = jest.fn();

        render(<PersonForm slide_out={mockSlideOut} setPersonsUpdated={mockSetPersonsUpdated} />);
        const nameInput = screen.getByPlaceholderText('Name...'); // Assuming the input has name attribute 'name'
        const submitButton = screen.getByText('Create Person'); // Assuming the submit button has text 'Submit'

        fireEvent.change(nameInput, { target: { value: 'John' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockSlideOut).toHaveBeenCalled();
        });
        expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/persons/?person_name=John', {});
    });
});
