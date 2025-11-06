'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '500px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          background: 'white',
          color: 'black',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        Go Back Home
      </Link>
    </div>
  )
}
