// React 19 type augmentations
// This file fixes compatibility issues between React 19 and TypeScript

import 'react';

declare module 'react' {
  // Re-export these explicitly for React 19 compatibility
  export const Suspense: React.ExoticComponent<{
    children?: React.ReactNode;
    fallback?: React.ReactNode;
  }>;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function lazy<T extends ComponentType<any>>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    factory: () => Promise<{ default: T }>
  ): LazyExoticComponent<T>;

  // Add ComponentType, ComponentClass, FunctionComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type ComponentType<P = any> = ComponentClass<P> | FunctionComponent<P>;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface ComponentClass<P = any> {
    new (props: P): Component<P>;
    displayName?: string;
    name?: string;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface FunctionComponent<P = any> {
    (props: P): ReactElement | null;
    displayName?: string;
    name?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type FC<P = any> = FunctionComponent<P>;
  
  export type ReactNode = 
    | React.ReactElement
    | string
    | number
    | boolean
    | null
    | undefined
    | Iterable<ReactNode>;

  export interface ErrorInfo {
    componentStack: string;
  }

  // ChangeEvent type
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  // createElement function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function createElement<P extends object>(
    type: ComponentType<P> | string,
    props?: P | null,
    ...children: ReactNode[]
  ): ReactElement<P>;

  // Fix forwardRef types for React 19
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function forwardRef<T, P = any>(
    render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;

  export type ForwardedRef<T> = React.Ref<T>;
  export type RefCallback<T> = (instance: T | null) => void;
  export type Ref<T> = RefCallback<T> | React.RefObject<T> | null;
}

// Extend Window for third-party scripts
declare global {
  interface Window {
    ezstandalone?: {
      enabled?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cmd?: Array<() => void>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      define?: (...args: unknown[]) => void;
      enable?: () => void;
      display?: () => void;
      refresh?: () => void;
    };
    adsbygoogle?: Array<Record<string, unknown>>;
    __ADSENSE_LOADED__?: boolean;
  }
}

export {};
