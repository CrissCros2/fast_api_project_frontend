import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';
import {CardSlider, slide_onto_screen, slide_out_of_screen, get_direction_class_names} from "./components/card_slider/card_slider.jsx";
import {CreatePerson} from "./components/person_create/person_create";
import {SliderDirection} from "./constants";
import {CreateEvent} from "./components/event_create/event_create";
import { React } from "react";

test('renders app correctly', () => {
  render(<App />);
});

test("Renders people card correctly", () => {
  render(<CardSlider
      card={CreatePerson()}
      direction={SliderDirection.Up}/>)

  const peopleCard = screen.getByTestId("create-person-box");
  expect(peopleCard).toBeInTheDocument();
})

test("Renders event card correctly", () => {
  render(<CardSlider
      card={CreateEvent()}
      direction={SliderDirection.Down}/>)

  const eventCard = screen.getByTestId("create-event-box");
  expect(eventCard).toBeInTheDocument();
})

describe('CardSlider component', () => {
  test('show_slider should trigger sliding onto the screen', () => {
    // Render the component
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);

    // Find the "Show Slider" button and click it
    const showSliderButton = screen.getByTestId('Show Slider');
    fireEvent.click(showSliderButton);

    // Verify that the slider is visible and has the correct class after the click
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveClass('slide_down_from_top');

    // Test passes if the slider animation behaves as expected
  });

  test('hide_slider should trigger sliding off the screen', () => {
    // Render the component
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);

    // Find the "Show Slider" button and click it
    const hideSliderButton = screen.getByTestId('Hide Slider');
    fireEvent.click(hideSliderButton);

    // Verify that the slider is visible and has the correct class after the click
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveClass('slide_up_to_top');

    // Test passes if the slider animation behaves as expected
  });

  describe('Slide onto and off screen functions', () => {
    test('should correctly slide onto the screen', () => {
      // Create a mock DOM element
      const mockSlider = document.createElement('div');
      mockSlider.classList.add('mockSliderClass');
      document.body.appendChild(mockSlider);

      // Call the function
      slide_onto_screen('mockSliderClass', 'newSliderClass');

      // Assert that the class has been removed and replaced
      expect(mockSlider.classList.contains('mockSliderClass')).toBe(false);
      expect(mockSlider.classList.contains('newSliderClass')).toBe(true);

      // Clean up
      document.body.removeChild(mockSlider);
    });

    test('should correctly slide off the screen', () => {
      // Create a mock DOM element
      const mockSlider = document.createElement('div');
      mockSlider.classList.add('mockSliderClass');
      document.body.appendChild(mockSlider);

      // Call the function
      slide_out_of_screen('mockSliderClass', 'newSliderClass');

      // Assert that the class has been removed and replaced
      expect(mockSlider.classList.contains('mockSliderClass')).toBe(false);
      expect(mockSlider.classList.contains('newSliderClass')).toBe(true);

      // Clean up
      document.body.removeChild(mockSlider);
    });

    test('should handle null slider gracefully', () => {
      // Call the function with null
      slide_onto_screen('nonExistentClass', 'newSliderClass');
      slide_out_of_screen('mockSliderClass', 'newSliderClass');
      // Test passes if no error occurs
    });
  });
});

describe("Test get direction class names", () => {
  test("Up", () => {
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);
    expect(get_direction_class_names(SliderDirection.Up)).toStrictEqual(["slide_up_to_top", 'slide_down_from_top'])
    });

  test("Down", () => {
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);
    expect(get_direction_class_names(SliderDirection.Down)).toStrictEqual(['slide_down_to_bottom', 'slide_up_from_bottom'])
    });

  test("Left", () => {
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);
    expect(get_direction_class_names(SliderDirection.Left)).toStrictEqual(["slide_right_to_left", "slide_left_from_right"])
    });

  test("Right", () => {
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);
    expect(get_direction_class_names(SliderDirection.Right)).toStrictEqual(["slide_left_to_right", "slide_right_from_left"])
  });

  test("Default", () => {
    render(<CardSlider card={<div>Mock Card</div>} direction={0} />);
    expect(get_direction_class_names(5)).toStrictEqual(["slide_up_to_top", 'slide_down_from_top'])
  })
})
