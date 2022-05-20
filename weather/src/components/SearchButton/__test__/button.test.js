import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from '..';



  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<SearchButton apiCall={handleClick} label={"Click me"}/>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })