import "styled-components"
import { TColor } from "./theme"

declare module "styled-components" {
  export interface DefaultTheme {
    color: TColor
  }
}
