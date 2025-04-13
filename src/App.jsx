import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homes from './components/Home';
// import Login from './components/login';
// import PurchasePage from './components/main';
// import LoginForm from './components/login_HDDT';
// import InvoiceSync from './components/Sync_TCT';
// import GetInvoice from './components/get_invoice';
// import Layhoadon from './components/layhoadon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/login-hddt" element={<LoginForm />} />
        <Route path="/sync" element={<InvoiceSync />} />
        <Route path="/get-invoice" element={<GetInvoice />} />
        <Route path="/layhoadon" element={<Layhoadon />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import Homes from './components/Home';
// // import './index.css';
// // import LoginForm from './components/login_HDDT';
// // import InvoiceSync from './components/Sync_TCT';
// // import Get_invoice from './components/get_invoice';
// // import Layhoadon from './components/layhoadon';
// import Login from './components/login';

// import PurchasePage from './components/test';

// function App() {
//   return <PurchasePage />; 
//   // return <Login />;
//   // return <PurchasingUIExact />;
//   // return <Layhoadon />;
//   return <Homes />;
//   // return <LoginForm />;
//   // return <InvoiceSync />;
//   return <Get_invoice />;
//   // return <PurchasePage />;
// }

// export default App;


