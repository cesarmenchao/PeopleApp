import "styled-components";
import dark from "./dark";
import light from "./light";

declare module "styled-components" {
  type ThemeType = typeof light;

  export interface DefaultTheme extends ThemeType {}
}
