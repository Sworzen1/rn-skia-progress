import { useEffect, useMemo } from "react";
import {
  Canvas,
  LinearGradient,
  Path,
  Skia,
  Text,
  useFont,
  vec,
} from "@shopify/react-native-skia";
import {
  Easing,
  runOnJS,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import type { ProgressBarProps, GestureEvent } from "./types";

export const ProgressBar = ({
  animationDuration = 500,
  backgroundColor = "#333333",
  fontName,
  fontSize = 24,
  initialProgress,
  isTouchable = false,
  maxProgress = 100,
  onAnimationEnd,
  onProgressChange,
  progress: value = 0,
  progressColor = ["#fe2e2e"],
  progressStrokeWidth = 16,
  strokeCap = "butt",
  strokeWidth = 16,
  style,
  textColor = "black",
  textStyle,
  valuePrefix = "",
  valueSufix = "%",
  width = 200,
  withText = true,
}: ProgressBarProps) => {
  const font = useFont(fontName, fontSize);

  const additionalStrokeWidth = useMemo(
    () =>
      progressStrokeWidth >= strokeWidth ? progressStrokeWidth : strokeWidth,
    [progressStrokeWidth, strokeWidth]
  );

  const additionalWidthForStrokeCap = useMemo(
    () => (strokeCap !== "butt" ? additionalStrokeWidth / 2 : 0),
    [strokeCap, additionalStrokeWidth]
  );

  const path = Skia.Path.Make();
  path.moveTo(additionalWidthForStrokeCap, additionalStrokeWidth / 2);
  path.lineTo(width, additionalStrokeWidth / 2);

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

  const onProgressChangeWrapper = (newProgress: number) => {
    onProgressChange && onProgressChange(newProgress);
  };

  const pan = isTouchable
    ? Gesture.Pan()
        .onBegin(({ x }: GestureEvent) => {
          let newProgress;
          if (x >= width) {
            newProgress = 1;
          } else if (x <= 0) {
            newProgress = 0;
          } else {
            newProgress = x / width;
          }
          progress.value = withTiming(newProgress, { duration: 500 });
          runOnJS(onProgressChangeWrapper)(newProgress * maxProgress);
        })
        .onUpdate(({ x }: GestureEvent) => {
          let newProgress;
          if (x >= width) {
            newProgress = 1;
          } else if (x <= 0) {
            newProgress = 0;
          } else {
            newProgress = x / width;
          }
          progress.value = newProgress;
          runOnJS(onProgressChangeWrapper)(newProgress * maxProgress);
        })
    : Gesture.Pan();

  const text = useDerivedValue(
    () =>
      `${valuePrefix}${Math.floor(progress.value * maxProgress)}${valueSufix}`
  );

  const textX = useDerivedValue(() => {
    const size = font?.measureText(text.value)?.width;

    return width / 2 - size! / 2;
  });

  return (
    <>
      {withText && font && (
        <Canvas
          style={{
            height: fontSize + 12,
            width,
            ...textStyle,
          }}
        >
          <Text
            x={textX}
            y={fontSize + 4}
            text={text}
            font={font}
            color={textColor}
          />
        </Canvas>
      )}
      <GestureDetector gesture={pan}>
        <Canvas
          style={{
            height: additionalStrokeWidth,
            width: width + additionalWidthForStrokeCap,
            ...style,
          }}
        >
          <Path
            color={backgroundColor}
            path={path}
            style="stroke"
            strokeCap={strokeCap}
            strokeWidth={strokeWidth}
            start={0}
            end={1}
          />
          <Path
            color="red"
            path={path}
            style="stroke"
            strokeCap={strokeCap}
            strokeWidth={progressStrokeWidth}
            start={0}
            end={progress}
          >
            <LinearGradient
              start={vec(width, 0)}
              end={vec(width, strokeWidth)}
              colors={progressColor}
            />
          </Path>
        </Canvas>
      </GestureDetector>
    </>
  );
};
