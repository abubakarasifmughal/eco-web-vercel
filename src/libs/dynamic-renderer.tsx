import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const DynamicRenderer = (key: string): ComponentType => {
  const DynamicButton = dynamic(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => import("shiphouse-toolkit").then((lib) => (lib as any)[key]),
    {
      ssr: true,
      loading: () => <p>Loading...</p>,
    }
  );
  return DynamicButton;
};
