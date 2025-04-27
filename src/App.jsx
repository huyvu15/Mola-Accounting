import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './components/Home';
import './index.css';
import LoginForm from './components/login_HDDT';
import InvoiceSync from './components/Sync_TCT';
import Get_invoice from './components/get_invoice';
import Layhoadon from './components/layhoadon';
import Login from './components/login';
// import PurchasePage from './components/test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-hddt" element={<LoginForm />} />
        <Route path="/get-invoice" element={<Get_invoice />} />
        <Route path="/sync" element={<InvoiceSync />} />
        <Route path="/layhoadon" element={<Layhoadon />} />
        {/* <Route path="/test" element={<PurchasePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


