import { borderRadiusVariables } from "./border-radius";
import { borderWidthVariables } from "./border-width";
import { boxShadowVariables } from "./box-shadow";
import { colorVariables } from "./colors";
import { fontFamilyVariables } from "./font-family";
import { fontSizeVariables } from "./font-size";
import { fontWeightVariables } from "./font-weight";
import { letterSpacingVariables } from "./letter-spacing";
import { lineHeightVariables } from "./line-height";
import { opacityVariables } from "./opacity";
import { outlineVariables } from "./outline";
import { outlineOffsetVariables } from "./outline-offset";
import { sizeVariables } from "./size";
import { transitionVariables } from "./transition";
import { transitionDelayVariables } from "./transition-delay";
import { transitionDurationVariables } from "./transition-duration";
import { transitionTimingFunctionVariables } from "./transition-timing-funtion";
import { zIndexVariables } from "./z-index";

export const variables = [
  ...sizeVariables,
  ...boxShadowVariables,
  ...borderRadiusVariables,
  ...borderWidthVariables,
  ...zIndexVariables,
  ...outlineVariables,
  ...outlineOffsetVariables,
  ...opacityVariables,
  ...fontFamilyVariables,
  ...fontWeightVariables,
  ...fontSizeVariables,
  ...lineHeightVariables,
  ...letterSpacingVariables,
  ...colorVariables,
  ...transitionDelayVariables,
  ...transitionDurationVariables,
  ...transitionTimingFunctionVariables,
  ...transitionVariables,
];
