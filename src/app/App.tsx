import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { AppRouter } from '@/app/providers/Router';
import '@/shared/config/env'; // Fails fast if env vars are missing
import '@/app/styles/App.css';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
