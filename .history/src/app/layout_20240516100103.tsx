export const metadata = {
    title: 'First project',
    description : "A beginner's project on Next.js"
}

import '../global.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <Na
            {children}</body>
      </html>
    )
  }