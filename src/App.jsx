import React from 'react';
import AccountingSoftware from './components/AccountingSoftware';
import './index.css';
import { InvoiceLoader } from './components/InvoiceLoader';
import LoginForm from './components/login_HDDT';
import InvoiceSync  from './components/Sync_TCT';
import Get_invoice  from './components/get_invoice';

function App() {
  // return <AccountingSoftware />;
  // return <InvoiceLoader />;
  // return <LoginForm />;
  // return <InvoiceSync />;
  return <Get_invoice />;
}

export default App;