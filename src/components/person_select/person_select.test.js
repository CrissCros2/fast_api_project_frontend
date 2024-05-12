import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {PersonSelect} from './person_select'

beforeEach(() => {
    mockSetInputs.mockClear();
});

// Mock setInputs function
const mockSetInputs = jest.fn();

// Mock persons data
const mockPersons = [
    { id: '1-person', name: 'John Doe' },
    { id: '2-person', name: 'Jane Doe' },
];

test('renders the PersonSelect component', () => {
    render(<PersonSelect setInputs={mockSetInputs} persons={mockPersons} />);

    // Check if the select element is rendered
    const selectElement = screen.getByTestId('select-persons');
    expect(selectElement).toBeInTheDocument();
});

test('updates selected options when a person is selected', async () => {
    render(<PersonSelect setInputs={mockSetInputs} persons={mockPersons} />);
    const AutoComplete = screen.getByRole('combobox');

    // Click on autocomplete to open the dropdown
    fireEvent.mouseDown(AutoComplete);

    // Simulate selecting a person
    fireEvent.keyDown(AutoComplete, { key: 'ArrowDown' });
    fireEvent.keyDown(AutoComplete, { key: 'Enter' });

    // Check if the selected option is updated
    await waitFor(() => {
        // Once at mount once at update
        expect(mockSetInputs).toHaveBeenCalledTimes(2);
    });


});