import React, { useState } from 'react';
import '../css/Sync_TCT.css';

const InvoiceSync = () => {
  const [username, setUsername] = useState('');
  const [startMonth, setStartMonth] = useState('01');
  const [startDay, setStartDay] = useState('01');
  const [startYear, setStartYear] = useState('2025');
  const [endMonth, setEndMonth] = useState('01');
  const [endDay, setEndDay] = useState('01');
  const [endYear, setEndYear] = useState('2025');
  const [invoiceType, setInvoiceType] = useState('Hoá đơn mua vào');
  const [invoiceFormat, setInvoiceFormat] = useState('Hoá đơn điện tử');

  return (
    <div className="invoice-sync-container">
      <div className="header">
        <div className="header-title">Đồng bộ dữ liệu HĐĐT từ TCT</div>
        <button className="close-button">×</button>
      </div>
      
      <div className="form-container">
        <div className="form-group">
          <label className="form-label">Tên đăng nhập</label>
          <input
            type="text"
            className="form-input"
            placeholder="MST Doanh Nghiệp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Ngày lập hoá đơn</label>
          <div className="date-container">
            <div className="date-group">
              <select 
                className="date-select"
                value={startDay}
                onChange={(e) => setStartDay(e.target.value)}
              >
                <option value="01">01</option>
                {/* Add more day options */}
              </select>
              <select 
                className="date-select"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="01">01</option>
                {/* Add more month options */}
              </select>
              <select 
                className="date-select wide-select"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              >
                <option value="2025">2025</option>
                {/* Add more year options */}
              </select>
            </div>
            
            <div className="arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="date-group">
              <select 
                className="date-select"
                value={endDay}
                onChange={(e) => setEndDay(e.target.value)}
              >
                <option value="01">01</option>
                {/* Add more day options */}
              </select>
              <select 
                className="date-select"
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                <option value="01">01</option>
                {/* Add more month options */}
              </select>
              <select 
                className="date-select wide-select"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              >
                <option value="2025">2025</option>
                {/* Add more year options */}
              </select>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label className="form-label">Loại hoá đơn</label>
          <select 
            className="form-select"
            value={invoiceType}
            onChange={(e) => setInvoiceType(e.target.value)}
          >
            <option value="Hoá đơn mua vào">Hoá đơn mua vào</option>
            {/* Add more invoice type options */}
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">Hoá đơn</label>
          <div className="invoice-select-container">
            <select 
              className="form-select"
              value={invoiceFormat}
              onChange={(e) => setInvoiceFormat(e.target.value)}
            >
              <option value="Hoá đơn điện tử">Hoá đơn điện tử</option>
              {/* Add more invoice format options */}
            </select>
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="divider"></div>
      
      <div className="footer">
        <button className="sync-button">Đồng bộ</button>
        <button className="switch-account-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8C9.76731 8 11.2 6.56731 11.2 4.8C11.2 3.03269 9.76731 1.6 8 1.6C6.23269 1.6 4.8 3.03269 4.8 4.8C4.8 6.56731 6.23269 8 8 8Z" fill="#7F7F7F"/>
            <path d="M2.4 14.4C2.4 11.7491 4.9072 9.6 8 9.6C11.0928 9.6 13.6 11.7491 13.6 14.4" stroke="#7F7F7F" strokeWidth="1.6"/>
          </svg>
          Chuyển tài khoản khác
        </button>
      </div>
    </div>
  );
};

export default InvoiceSync;