import React, { Suspense } from 'react';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<>Hello world</>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
