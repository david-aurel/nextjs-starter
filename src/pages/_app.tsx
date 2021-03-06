import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import { theme } from "../lib/theme/theme"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
