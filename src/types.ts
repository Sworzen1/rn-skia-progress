import type { ViewStyle } from "react-native";
import type {
  AnimatedProp,
  Color,
  DataSourceParam,
} from "@shopify/react-native-skia";

export type ProgressProps = {
  animationDuration?: number;
  backgroundColor?: AnimatedProp<Color>;
  fontName?: DataSourceParam;
  fontSize?: number;
  initialProgress?: number;
  maxProgress?: number;
  onAnimationEnd?: () => void;
  progress?: number;
  progressStrokeWidth?: number;
  strokeWidth?: number;
  style?: ViewStyle;
  textColor?: AnimatedProp<Color>;
  valuePrefix?: string;
  valueSufix?: string;
  withText?: boolean;
};

export type ProgressBarProps = ProgressProps & {
  isTouchable?: boolean;
  onProgressChange?: (newProgress: number) => void;
  progressColor?: AnimatedProp<Color[]>;
  strokeCap?: AnimatedProp<"butt" | "round">;
  textStyle?: ViewStyle;
  width?: number;
};

export type ProgressCircleProps = ProgressProps & {
  backgroundDashEffect?: AnimatedProp<number[]>;
  backgroundStrokeCap?: AnimatedProp<"butt" | "round">;
  isDashed?: boolean;
  progressColor?: AnimatedProp<Color>;
  progressDashEffect?: AnimatedProp<number[]>;
  progressStrokeCap?: AnimatedProp<"butt" | "round">;
  r?: number;
};

export type GestureEvent = {
  x: number;
};
