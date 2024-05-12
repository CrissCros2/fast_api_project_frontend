import {render, screen} from '@testing-library/react'
import {PersonSelect} from './person_select'


describe('Person select component', () => {
  it('should render the component', () => {
      const mockSetInputs = jest.fn();
      const mockPersons = [ {name: "test", id: "test-uuid"} ];

      render(<PersonSelect setInputs={mockSetInputs} persons={mockPersons}/>);
      const peopleCard = screen.getByTestId("select-persons");
      expect(peopleCard).toBeInTheDocument();
  })
})