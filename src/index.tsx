import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import IndexPage from './pages/Index';
import AboutPage from './pages/About';
import ArticlePage from './pages/Article';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Navigation
        links={[
          { children: 'Strona główna', to: '/' },
          { children: 'O mnie', to: '/about' },
        ]}
      />
      <main>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/article/:slug' element={<ArticlePage />} />
        </Routes>
      </main>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
