import {fireEvent, render, screen} from "@testing-library/react";
import {CardSlider, get_direction_class_names, slide_onto_screen, slide_out_of_screen} from "./card_slider";
import {React} from "react";
import {SliderDirection} from "../../constants";


describe('CardSlider component', () => {
    test('show_slider should trigger sliding onto the screen', () => {
        // Render the component
        render(<CardSlider Card={() => {}} direction={0} />);

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
        render(<CardSlider Card={() => {}} direction={0} />);

        // Find the "Show Slider" button and click it
        const hideSliderButton = screen.getByTestId('Hide Slider');
        fireEvent.click(hideSliderButton);

        // Verify that the slider is visible and has the correct class after the click
        const slider = screen.getByTestId('slider');
        expect(slider).toHaveClass('slide_up_to_top');

        // Test passes if the slider animation behaves as expected
    });

    test('clicking the card should do nothing', () => {
        // Render the component
        render(<CardSlider Card={() => {}} direction={0} />);

        // Find the card and click it
        const card = screen.getByTestId("slider");
        fireEvent.click(card);

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
        render(<CardSlider Card={() => {}} direction={0} />);
        expect(get_direction_class_names(SliderDirection.Up)).toStrictEqual(["slide_up_to_top", 'slide_down_from_top'])
    });

    test("Down", () => {
        render(<CardSlider Card={() => {}} direction={0} />);
        expect(get_direction_class_names(SliderDirection.Down)).toStrictEqual(['slide_down_to_bottom', 'slide_up_from_bottom'])
    });

    test("Left", () => {
        render(<CardSlider Card={() => {}} direction={0} />);
        expect(get_direction_class_names(SliderDirection.Left)).toStrictEqual(["slide_right_to_left", "slide_left_from_right"])
    });

    test("Right", () => {
        render(<CardSlider Card={() => {}} direction={0} />);
        expect(get_direction_class_names(SliderDirection.Right)).toStrictEqual(["slide_left_to_right", "slide_right_from_left"])
    });

    test("Default", () => {
        render(<CardSlider Card={() => {}} direction={0} />);
        expect(get_direction_class_names(5)).toStrictEqual(["slide_up_to_top", 'slide_down_from_top'])
    })
})