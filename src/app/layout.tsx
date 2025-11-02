import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "Print Queen 3D | Professional NFC + 3D Printing Services Los Angeles",
  description: "Premium NFC payment stands, QR code displays, and custom 3D printing services for businesses in Los Angeles. Fast turnaround, precision printing, expert design support.",
  keywords: ["3D Printing Services Los Angeles", "NFC Payment Stands", "Custom QR Code Displays", "NFC Keychains for Business", "Custom 3D Printing"],
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=Exo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
