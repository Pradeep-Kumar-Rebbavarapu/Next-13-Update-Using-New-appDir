
import Navbar from "@/components/Navbar"
import '../styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  
  return (
      <html lang="en">
        <head>
          <title>Pradeeps Website</title>
        </head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
     
  )
}
