"use client";

import { createContext, useContext, useState } from "react";
import SupportButton from "./SupportButton";

type SupportContextType = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const SupportContext = createContext<SupportContextType | undefined>(undefined);

export function SupportProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <SupportContext.Provider value={{ open, setOpen }}>
      {children}
      <SupportButton open={open} setOpen={setOpen} />
    </SupportContext.Provider>
  );
}

export function useSupport() {
  const ctx = useContext(SupportContext);
  if (!ctx) throw new Error("useSupport must be used within SupportProvider");
  return ctx;
}
