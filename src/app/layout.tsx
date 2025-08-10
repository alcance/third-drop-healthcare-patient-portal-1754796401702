import './globals.css'

export const metadata = {
  title: 'third-drop-healthcare-patient-portal-1754796401702 - Healthcare Portal',
  description: 'Third drop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}