import React, { lazy, createElement } from "react";
import type { ComponentType } from "react";

const DISABLE_LAZY = import.meta.env.VITE_DISABLE_LAZY === "true";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function safeLazy<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): T | ReturnType<typeof lazy> {
  if (DISABLE_LAZY) {
    let Component: T | null = null;
    importFn().then((mod) => {
      Component = mod.default;
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((props: any) => {
      if (!Component) return null;
      return createElement(Component!, props);
    }) as T;
  }
  return lazy(importFn as () => Promise<{ default: ComponentType<any> }>);
}
