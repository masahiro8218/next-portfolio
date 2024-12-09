import { M_PLUS_2 } from 'next/font/google';
import './globals.css';

const mPlus2 = M_PLUS_2({
  subsets: ['latin'],
  variable: '--font-m-plus-2',
});

export const metadata = {
  title: 'Mesluz Portfolio',
  description: 'Mesluzのポートフォリオサイトです',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body className={`${mPlus2.variable} antialiased`}>{children}</body>
    </html>
  );
}
