import { useEffect, useMemo } from "react";
import {
  Canvas,
  DashPathEffect,
  Path,
  Skia,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import {
  Easing,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import type { ProgressCircleProps } from "./types";

export const ProgressCircle = ({
  animationDuration = 500,
  backgroundColor = "#333333",
  backgroundDashEffect = [20, 2],
  backgroundStrokeCap = "butt",
  fontName,
  fontSize = 32,
  initialProgress,
  isDashed = false,
  maxProgress = 100,
  onAnimationEnd,
  progress: value = 0,
  progressColor = "#fe2e2e",
  progressDashEffect = [20, 2],
  progressStrokeCap = "butt",
  progressStrokeWidth = 16,
  r = 70,
  strokeWidth = 16,
  style,
  textColor = "black",
  valuePrefix = "",
  valueSufix = "%",
  withText = true,
}: ProgressCircleProps) => {
  const font = useFont(fontName, fontSize);

  const additionalStrokeWidth = useMemo(
    () =>
      progressStrokeWidth >= strokeWidth ? progressStrokeWidth : strokeWidth,
    [progressStrokeWidth, strokeWidth]
  );

  const path = Skia.Path.Make();
  path.addCircle(
    r + additionalStrokeWidth / 2,
    r + additionalStrokeWidth / 2,
    r
  );

  const progress = useSharedValue(value / maxProgress);

  useEffect(() => {
    if (initialProgress !== undefined)
      progress.value = withTiming(
        initialProgress / maxProgress,
        {
          duration: animationDuration,
          easing: Easing.linear,
        },
        (finished: boolean | undefined) => {
          if (finished && onAnimationEnd) runOnJS(onAnimationEnd)();
        }
      );
  }, [initialProgress]);

  const text = useDerivedValue(
    () =>
      `${valuePrefix}${Math.round(progress.value * maxProgress)}${valueSufix}`
  );

  const textX = useDerivedValue(() => {
    const size = font?.measureText(text.value)?.width;

    return r + additionalStrokeWidth / 2 - size! / 2;
  });

  return (
    <Canvas
      style={{
        height: r * 2 + additionalStrokeWidth,
        width: r * 2 + additionalStrokeWidth,
        ...style,
      }}
    >
      <Path
        color={backgroundColor}
        path={path}
        style="stroke"
        strokeWidth={strokeWidth}
        strokeCap={backgroundStrokeCap}
        start={0}
        end={1}
        children={
          isDashed && <DashPathEffect intervals={backgroundDashEffect} />
        }
      />
      <Path
        color={progressColor}
        path={path}
        style="stroke"
        strokeCap={progressStrokeCap}
        strokeJoin={progressStrokeCap === "round" ? "round" : undefined}
        strokeWidth={progressStrokeWidth}
        start={0}
        end={progress}
        children={isDashed && <DashPathEffect intervals={progressDashEffect} />}
      />
      {withText && font && (
        <Text
          x={textX}
          y={(r * 2 + additionalStrokeWidth) / 2 + fontSize / 3}
          text={text}
          font={font}
          color={textColor}
        />
      )}
    </Canvas>
  );
};
