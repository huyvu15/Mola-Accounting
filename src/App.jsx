import React from 'react';
import AccountingSoftware from './components/AccountingSoftware';
import './index.css';
import { Mn } from './components/man2';
import LoginForm from './components/login_HDDT';
import InvoiceSync  from './components/Sync_TCT';
import Get_invoice  from './components/get_invoice';

function App() {
  // return <AccountingSoftware />;
  // return <Mn />;
  // return <LoginForm />;
  // return <InvoiceSync />;
  return <Get_invoice />;
}

export default App;