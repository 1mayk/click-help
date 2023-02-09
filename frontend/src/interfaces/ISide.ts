import { MouseEventHandler, ReactNode } from "react";

export interface ISide {
  onDataReturn?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode
}