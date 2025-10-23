"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider
} from "./color-mode"

import type { ThemeProviderProps } from "next-themes"
import { ThemeProvider } from "next-themes"
interface CustomThemeProviderProps extends ThemeProviderProps {
  defaultTheme?: "dark";
}

export function Provider(props: CustomThemeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      {/*<ThemeProvider {...props} />*/}
      <ThemeProvider {...props} />
	<ColorModeProvider />
    </ChakraProvider>
  )
}
