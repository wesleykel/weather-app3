import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from '../searchButton';



  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<SearchButton apiCall={handleClick} label={"Click"}/>)
    fireEvent.click(screen.getByText("Click"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })