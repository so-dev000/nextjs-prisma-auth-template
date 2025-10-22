"use client";

import React, { ReactNode, useState } from "react";
import { MantineProvider } from "@mantine/core";

type Props = {
  children: ReactNode;
};

/**
 * Simple client-side provider that supplies Mantine theme (light / dark)
 * using component state. Minimal implementation intended for a template.
 *
 * NOTE: Theme prop is cast to `any` to avoid strict typing mismatches
 * with different Mantine ESM builds during the template build step.
 */
export default function MantineProviders({ children }: Props) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  return (
    <MantineProvider theme={{ colorScheme } as any}>{children}</MantineProvider>
  );
}
