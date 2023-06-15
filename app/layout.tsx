import './styles/globals.css';

export const metadata = {
  title: 'Alain Christe | Developer',
  description: `Powered by Next.js`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overscroll-none">
      <body>{children}</body>
    </html>
  )
}
