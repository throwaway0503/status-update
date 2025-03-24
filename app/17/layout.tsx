import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you very much for a-to playing my game!'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
