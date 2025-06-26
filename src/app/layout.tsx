import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aether Analytics',
  description: 'Clarity in Complexity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background-dark text-text-primary">
        {children}
      </body>
    </html>
  )
}