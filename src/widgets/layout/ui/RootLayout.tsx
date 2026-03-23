import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="layout-container">
      <header style={{ padding: '20px', background: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
        <strong>LMS Industrial Template</strong>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer
        style={{
          padding: '20px',
          background: '#f8f9fa',
          borderTop: '1px solid #dee2e6',
          marginTop: '40px',
          fontSize: '0.85rem',
        }}
      >
        &copy; {new Date().getFullYear()} LMS Engineering.
      </footer>
    </div>
  );
}
