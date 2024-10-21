import Navbar from './components/Navbar';
import './globals.css';
import { AuthProvider } from './models/userModels';  // Import the AuthProvider

export const metadata = {
  title: 'Build a Block',
  description: 'Build a Block',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="custom-container">{children}</main>
        </AuthProvider>
        
      </body>
    </html>
  );
}
