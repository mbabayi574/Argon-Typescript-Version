import { createContext } from "react";

export interface ToggledContextType {
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

export const ToggledContext = createContext<ToggledContextType | null>(null);
