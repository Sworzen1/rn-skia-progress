# React Native Skia Progress

React Native library which allows use of high quality progress components based on Skia, Reanimated, Gesture Handler

## Examples
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/49881c77-cbf1-4c14-a56f-35c381024c95" width="200" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/3b77f10b-9d2a-49c6-ba89-c6d0fd8c6a90" width="200" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/6e21205b-8e25-49f4-bcb0-bac36980e81b" width="100" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/4ad1abb3-f99c-4535-a741-4d8aaae4dd9b-4671-a9d6-a37b6a2a79b9" width="100" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/0ef67b94-7ad9-4684-b373-b7094a89a604" width="100" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/fd33388f-4722-4443-b063-a9349231e43b" width="100" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/173e7d94-9bc2-48dd-b8df-412a659fa20a" width="100" height="100" />
<img src="https://github.com/Sworzen1/rn-skia-progress/assets/50292667/6bdb3f86-cd15-4b26-86e0-7ba4622e517a" width="100" height="100" />

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
