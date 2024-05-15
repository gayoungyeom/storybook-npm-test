"use client"

import React from "react"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material"
import theme from "@styles/theme"
import globalStyles from "@styles/globalStyles"

const queryClient = new QueryClient()
const inputGlobalStyles = <GlobalStyles styles={globalStyles} />

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {inputGlobalStyles}
        <CssBaseline />
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
