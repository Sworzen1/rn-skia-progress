# React Native Skia Progress

React Native library which allows use of high quality progress components based on Skia, Reanimated, Gesture Handler

## Examples

## Installation

npm:

```sh
npm install rn-skia-progress
```

Yarn:

```sh
yarn add rn-skia-progress
```

## Dependencies Installation

1. [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)
2. [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)
3. [React Native Skia](https://shopify.github.io/react-native-skia/docs/getting-started/installation)

## Propoerties with default values and types

### Progress Bar

| Name                | Default     | Type                            |
| ------------------- | ----------- | ------------------------------- |
| animationDuration   | 500         | number                          |
| backgroundColor     | "#333333"   | AnimatedProp<Color>             |
| fontName            | undefined   | DataSourceParam                 |
| fontSize            | 24          | number                          |
| initialProgress     | undefined   | number                          |
| isTouchable         | false       | boolean                         |
| maxProgress         | 100         | number                          |
| onAnimationEnd      | undefined   | () => void                      |
| onProgressChange    | undefined   | (newProgress:string) => void    |
| progress            | 0           | number                          |
| progressColor       | ["#fe2e2e"] | AnimatedProp<Color[]>           |
| progressStrokeWidth | 16          | number                          |
| strokeCap           | "butt"      | AnimatedProp<"butt" or "round"> |
| strokeWidth         | 16          | number                          |
| style               | undefined   | ViewStyle                       |
| textColor           | "black      | AnimatedProp<Color>             |
| valuePrefix         | ""          | string                          |
| valueSufix          | "%"         | string                          |
| width               | 200         | number                          |
| withText            | true        | boolean                         |

### Progress Circle

| Name                 | Default   | Type                            |
| -------------------- | --------- | ------------------------------- |
| animationDuration    | 500       | number                          |
| backgroundColor      | "#333333" | AnimatedProp<Color>             |
| backgroundDashEffect | [20,2]    | AnimatedProp<number[]>          |
| fontName             | undefined | DataSourceParam                 |
| fontSize             | 32        | number                          |
| initialProgress      | 0         | number                          |
| isDashed             | false     | boolean                         |
| maxProgress          | 100       | number                          |
| onAnimationEnd       | undefined | () => void                      |
| progress             | 0         | number                          |
| progressColor        | "fe2e2e"  | AnimatedProp<Color[]>           |
| progressDashEffect   | [20,2]    | AnimatedProp<number[]>          |
| progressStrokeCap    | "butt"    | AnimatedProp<"butt" or "round"> |
| progressStrokeWidth  | 16        | number                          |
| r                    | 70        | number                          |
| strokeWidth          | 16        | number                          |
| style                | undefined | ViewStyle                       |
| textColor            | "black"   | AnimatedProp<Color>             |
| valuePrefix          | ""        | string                          |
| valueSufix           | "%"       | string                          |
| withText             | true      | boolean                         |

## Usage

```js
import { Progress } from "rn-skia-progress";

<Progress.ProgressBar progress={50} maxProgress={100} />;
<Progress.ProgressCircle progress={50} maxProgress={100} />;
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
