import './globals.css'
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';

import '@fontsource/source-serif-4/400.css';
import '@fontsource/source-serif-4/700.css';
import '@fontsource/source-serif-4/900.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elmwood Park Community League',
  description: 'The official website for Elmwood Park Community League.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
