import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/home';

import { Header } from '@sw2.0/design-system/global-components';

import styles from './app.module.scss';

const UserBar = React.lazy(() => import('remote/UserBar'));

export function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Header>
        <UserBar />
      </Header>
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </React.Suspense>
  );
}

export default App;
