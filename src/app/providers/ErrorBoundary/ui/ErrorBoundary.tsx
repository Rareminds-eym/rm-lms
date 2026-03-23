import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return (
    <div style={{ padding: '20px', color: 'red', fontFamily: 'sans-serif' }}>
      <h2>Something went wrong:</h2>
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          background: '#ffebee',
          padding: '10px',
          borderRadius: '4px',
        }}
      >
        {errorMessage}
      </pre>
      <button
        onClick={resetErrorBoundary}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          background: '#d32f2f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app so the error doesn't happen again
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
