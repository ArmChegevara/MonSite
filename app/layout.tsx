import React from 'react'

export const metadata = {
  title: 'Tadevosyan IT',
  description: 'Expert en automatisation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, background: '#020203', color: 'white' }}>
        {children}
      </body>
    </html>
  )
}