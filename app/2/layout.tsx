import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'adsadsadaNext.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
