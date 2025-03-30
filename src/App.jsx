import React from 'react';
import AccountingSoftware from './components/AccountingSoftware';
import './index.css';
import { Mn } from './components/man2';
import LoginForm from './components/login_HDDT';
import InvoiceSync  from './components/Sync_TCT';


function App() {
  // return <AccountingSoftware />;
  // return <Mn />;
  // return <LoginForm />;
  return <InvoiceSync />;
}

export default App;