import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Test from '../../index'

describe('Home', () => {
  it.skip('renders a heading', () => {
    const { container } = render(<Test />)
    const el = screen.getByRole<HTMLInputElement>("input")
    fireEvent.change(el, { target: { value: "123456789012345678901234" } });
    expect(el.value).toEqual("123456789012345678901234");

    const errorMsg = screen.getByRole<HTMLSpanElement>("errorMsg")
    console.log(errorMsg);
    expect(errorMsg.innerText).toEqual("너무김");
  })
})