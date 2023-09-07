import React from 'react';
import Navbar from './components/Sidebar';
import '../styles/globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard by Alan Muro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./images/logo.png" />
      <body>
        <div className='flex flex-row'>
          <Navbar/>
          <main className='w-screen h-screen bg-gradient-to-b from-gray-50 to-gray-200'>
            {children}
          </main>
        </div>
        </body>
    </html>
  )
}
