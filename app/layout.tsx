import './globals.css'
import { poppins, inter, freckleFace } from './fonts'

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
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${freckleFace.variable}`}>
      <body>{children}</body>
    </html>
  )
}
