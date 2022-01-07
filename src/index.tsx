// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';

// Contexts
import { DataProvider } from './contexts/Data';
import { AuthProvider } from './contexts/Auth';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
