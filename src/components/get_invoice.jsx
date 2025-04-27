import React, { useState } from 'react';
import LoginForm from './login_HDDT';
import '../css/Get_invoice.css';

const Get_invoice = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetInvoiceClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLoginSuccess = (data) => {
    // Giả sử data.invoices là mảng các hóa đơn
    setInvoices(data.invoices || []);
  };

  return (
    <div className="get-invoice-container">
      <div className="get-invoice-content">
        <h1>Lấy hóa đơn</h1>
        <div className="button-group">
          <button 
            className="sync-button"
            onClick={handleGetInvoiceClick}
          >
            Lấy hóa đơn
          </button>
        </div>

        {invoices.length > 0 && (
          <div className="invoice-table-container">
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Số hóa đơn</th>
                  <th>Ngày lập</th>
                  <th>Mã số thuế</th>
                  <th>Tên đơn vị</th>
                  <th>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={invoice.id}>
                    <td>{index + 1}</td>
                    <td>{invoice.invoiceNumber}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.taxCode}</td>
                    <td>{invoice.companyName}</td>
                    <td>{invoice.totalAmount.toLocaleString('vi-VN')} VNĐ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showLogin && <LoginForm onClose={handleCloseLogin} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default Get_invoice; 