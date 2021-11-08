import React from "react"

import { Home } from "."
import { render } from "../../lib/testingLibrary"

describe("Home", () => {
  it("renders", () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
