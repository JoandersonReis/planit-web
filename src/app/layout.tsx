import type { Metadata } from "next"
import { Roboto_Slab, SUSE } from "next/font/google"
import "./globals.css"

const suseMono = SUSE({
  variable: "--font-suse-mono",
  subsets: ["latin"],
})

const robotoSlab = Roboto_Slab({
  variable: "--font-slab-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Plan.it",
  description: "Melhor gerenciador de dividas e planos para sua vida!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${suseMono.variable} ${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
