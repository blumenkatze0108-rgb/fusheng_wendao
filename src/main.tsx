import React from 'react';import{createRoot}from'react-dom/client';import './styles/tokens.css';import {Router} from './app/router';import {ErrorBoundary} from './components/common/ErrorBoundary';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ErrorBoundary><Router/></ErrorBoundary></React.StrictMode>);
