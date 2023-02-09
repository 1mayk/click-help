import { ChangeEventHandler } from "react";

export interface IInput {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}
