// src/App.jsx
import React from 'react';
import { Layout } from './components/layout/Layout';
import { HolidayList } from './components/holidays/HolidayList';

function App() {
  return (
    <Layout>
      <HolidayList />
    </Layout>
  );
}

export default App;