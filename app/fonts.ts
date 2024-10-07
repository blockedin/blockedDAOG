import { Poppins, Inter, Freckle_Face } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '600', '700'],  // Add the weights you need
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const freckleFace = Freckle_Face({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-freckle-face',
})