import './globals.css'
import { poppins } from './fonts'

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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
