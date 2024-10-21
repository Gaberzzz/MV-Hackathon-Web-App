import './globals.css';

export const metadata = {
  title: 'Build a Block',
  description: 'Build a Block',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
