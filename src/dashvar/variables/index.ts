import { borderRadiusVariables } from "./border-radius";
import { boxShadowVariables } from "./box-shadow";
import { colorVariables } from "./colors";
import { fontFamilyVariables } from "./font-family";
import { fontSizeVariables } from "./font-size";
import { fontWeightVariables } from "./font-weight";
import { letterSpacingVariables } from "./letter-spacing";
import { lineHeightVariables } from "./line-height";
import { opacityVariables } from "./opacity";
import { sizeVariables } from "./size";

export const variables = [
  ...sizeVariables,
  ...boxShadowVariables,
  ...borderRadiusVariables,
  ...opacityVariables,
  ...fontFamilyVariables,
  ...fontWeightVariables,
  ...fontSizeVariables,
  ...lineHeightVariables,
  ...letterSpacingVariables,
  ...colorVariables,
];
