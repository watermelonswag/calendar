import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './pages/Error';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<Home  />}  />

      <Route path="/signin" element= {<Signin  />}  />
      <Route element= {<NotFound  />}  />
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
