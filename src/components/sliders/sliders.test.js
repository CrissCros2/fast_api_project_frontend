import {render, screen} from '@testing-library/react'
import {Sliders} from './sliders'


describe('Sliders component', () => {
    it('should render the component', () => {
        render(<Sliders />)
        expect(screen.getByTestId("test-sliders")).toBeInTheDocument()
    })
})