import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Dicky DNS | %s",
    default: "Dicky DNS | Web Developer",
  },
  description:
    "A web developer and a passionate programmer.",
  metadataBase: new URL("http://localhost"),
  openGraph: {
    title: {
      template: "Dicky DNS | %s",
      default: "Dicky DNS | Web Developer",
    },
    description:
      "A web developer and a passionate programmer.",
    url: "http://localhost",
    siteName: "Dicky DNS",
    images: [
      {
        url: "/public/images/profile.png",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Dicky Dwi Nur Setyo",
    "dickydns",
    "web developer",
    "web programmer",
    "react",
    "nextjs",
    "creative",
    "creative developer",
    "creative frontend developer",
    "web developer",
    "web engineer",
    "tech",
    "indonesia",
    "indonesian",
    "indonesian developer",
    "indonesian web developer",
    "indonesian frontend developer",
    "indonesian web engineer",
    "indonesian frontend engineer",
    "indonesian creative developer",
    "portfolio",
    "portfolio website",
    "portfolio web",
    "portfolio web developer",
    "portfolio frontend developer",
    "portfolio web engineer",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Dicky DNS | %s",
      default: "Dicky DNS | Web Developer",
    },
    description:
      "A web developer and a passionate programmer.",
    creator: "@dickydns",
    images: [
      {
        url: "/public/images/profile.png",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
