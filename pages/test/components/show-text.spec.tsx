import { render, screen } from '@testing-library/react'
import ShowText from './show-text'

describe("ShowText", () => {
  it("", () => {
    const { container } = render(<ShowText text='hello world!'/>);
    const tree = container
    expect(tree).toMatchSnapshot();
  })
})