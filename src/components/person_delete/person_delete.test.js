import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {CardSlider} from "../card_slider/card_slider";
import {SliderDirection} from "../../constants";
import {React} from "react";
import {PersonDelete} from "./person_delete";
import axios from "axios";

// Mock persons data
const mockPersons = [
    { id: '1-person', name: 'John Doe' },
    { id: '2-person', name: 'Jane Doe' },
];

test("Renders people card correctly", () => {
    const mockSetPersonsUpdated = jest.fn();
    const mockPersons = [ {name: "test", id: "test-uuid"} ];
    render(<CardSlider
        Card={PersonDelete}
        direction={SliderDirection.Left}
        show_text={"Delete Person"}
        testid={"test-person"}
        setPersonsUpdated={mockSetPersonsUpdated}
        persons={mockPersons}
    />)

    const peopleCard = screen.getByTestId("delete-person-box");
    expect(peopleCard).toBeInTheDocument();
})

describe('Delete persons component', () => {
    it('should call slide_out function and axios post method on form submit', async () => {
        const mockSlideOut = jest.fn();
        const mockSetPersonsUpdated = jest.fn();

        render(<PersonDelete slide_out={mockSlideOut} setPersonsUpdated={mockSetPersonsUpdated} persons={mockPersons}/>);
        const submitButton = screen.getByText('Delete Person'); // Assuming the submit button has text 'Submit'
        const AutoComplete = screen.getByRole('combobox');

        // Click on autocomplete to open the dropdown
        fireEvent.mouseDown(AutoComplete);

        // Simulate selecting a person
        fireEvent.keyDown(AutoComplete, { key: 'ArrowDown' });
        fireEvent.keyDown(AutoComplete, { key: 'Enter' });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockSlideOut).toHaveBeenCalled();
        });
        expect(axios.delete).toHaveBeenCalledWith('http://localhost:8000/persons/' + mockPersons[0].id);
    });
});