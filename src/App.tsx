import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { AppRouter } from '@/Router';
import '@/env'; // Fails fast if env vars are missing
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
