import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Build a Block',
  description: 'Build a Block',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="custom-container">{children}</main>
      </body>
    </html>
  );
}
