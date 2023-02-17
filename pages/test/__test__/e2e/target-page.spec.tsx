import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Test from '../../index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Test />)
    const el = screen.getByRole<HTMLInputElement>("input")
    console.log(el.innerHTML);
    fireEvent.change(el, { target: { value: "12345678901" } });
    expect(el.value).toEqual("12345678901");
  })
})