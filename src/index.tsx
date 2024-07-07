import React from "react";

import { ProgressBar } from "./ProgressBar";
import { ProgressCircle } from "./ProgressCircle";

type ProgressComposition = {
  ProgressBar: typeof ProgressBar;
  ProgressCircle: typeof ProgressCircle;
};

const Progress: ProgressComposition = ({
  children,
}: {
  children: React.ReactNode;
}) => <>{children}</>;

Progress.ProgressBar = ProgressBar;
Progress.ProgressCircle = ProgressCircle;

export { Progress };
