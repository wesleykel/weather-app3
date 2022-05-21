import { render, screen, fireEvent } from '@testing-library/react';
import Button from "../button"



  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button func={handleClick} label={"Click"}/>)
    fireEvent.click(screen.getByText("Click"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })