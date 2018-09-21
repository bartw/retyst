import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface Theme {
  primaryColor: string;
  primaryColorInverted: string;
}

interface StyledProps {
  className?: string;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, StyledProps };
export default styled;
