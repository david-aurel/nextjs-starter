// import original module declarations
// eslint-disable-next-line import/no-unassigned-import
import "styled-components"
import { theme } from "./src/lib/theme/theme"

type CustomTheme = typeof theme
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
