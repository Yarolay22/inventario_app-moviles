import React from 'react';
import { createRoot } from 'react-dom/client';
import InventarioApp from './InventarioApp';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <InventarioApp />
  </React.StrictMode>
);