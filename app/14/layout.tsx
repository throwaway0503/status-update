import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Una última vez...'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
