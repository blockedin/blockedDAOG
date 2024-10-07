import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Define desired weights
  display: 'swap', // Add display option
  variable: '--font-poppins', // Create a CSS variable
});
