import './globals.css'

export const metadata = {
  title: 'DAOG NFT Collection',
  description: 'Exclusive NFT collection for dog lovers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}
