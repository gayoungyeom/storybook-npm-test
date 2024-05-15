import React from "react"
import type { Metadata } from "next"
import Providers from "./providers"

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "Next.js App Router Boilerplate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
