import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CDS_HIRCDR } from './theme';
import AppRoutes from './Routes';
import { ApplicationErrorBoundary } from './components/ErrorBoundary/ApplicationErrorBoundary';
import './App.css';

function App() {
  const [themeMode, setThemeMode] = useState('light'); // or 'dark'
  const handleThemeToggle = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const headerProps = {
    handleThemeToggle,
    themeMode
  };

  return (
    <ThemeProvider theme={CDS_HIRCDR(themeMode)}>
      <CssBaseline />
      <Router>
        <div className="App">
          <ApplicationErrorBoundary>
            <AppRoutes headerProps={headerProps} />
          </ApplicationErrorBoundary>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
