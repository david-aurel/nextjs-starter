import { render } from "@testing-library/react"
import React from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "./theme/theme"

type RenderFunction = typeof render
const Providers: React.ComponentType = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = ((ui, options) =>
  render(ui, { wrapper: Providers, ...options })) as RenderFunction

// eslint-disable-next-line import/export
export * from "@testing-library/react"
// eslint-disable-next-line import/export
export { customRender as render }
