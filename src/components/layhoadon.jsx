// Layhoadon.jsx
import React, { useState } from 'react';
import '../css/layhoadon.css';

const Layhoadon = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const handleFileSelect = (e) => {
    // Handle file selection logic
    console.log("Files selected:", e.target.files);
  };

  return (
    <div className="invoice-container">
      {/* Header navigation */}
      <div className="header-nav">
        <div className="breadcrumb">
          <span className="nav-item">Tổng quan</span>
          <span className="separator">/</span>
          <span className="nav-item">Mua hàng</span>
          <span className="separator">/</span>
          <span className="nav-item">Xử lý tự động chứng từ mua hàng</span>
          <span className="separator">/</span>
          <span className="nav-item">Lấy hoá đơn</span>
        </div>
        <div className="window-controls">
          <button className="control-btn minimize">—</button>
          <button className="control-btn maximize">□</button>
          <button className="control-btn close">×</button>
        </div>
      </div>
      
      {/* Green line */}
      <div className="green-line"></div>
      
      {/* Main content */}
      <div className="main-content">
        <div className="title-section">
          <h2>Tải dữ liệu hoá đơn</h2>
        </div>
        
        {/* Top control bar - All elements in a single row */}
        <div className="top-controls-row">
          <div className="branch-controls">
            <div className="branch-icon">📊</div>
            <div className="branch-text">Chi nhánh</div>
            <div className="company-selector">
              <span>CÔNG TY TNHH DU LỊCH</span>
              <span className="dropdown-icon">▼</span>
            </div>
          </div>
          
          <button className="control-btn choose-file">
            <span className="file-icon">📁</span>
            Chọn File
          </button>
          
          <button className="control-btn add-file">
            <span className="file-icon">📄</span>
            Thêm File
          </button>
          
          <button className="control-btn sync-data">
            <span className="sync-icon">🔄</span>
            Đồng bộ dữ liệu HĐĐT từ TCT
          </button>
          
          <div className="filter-dropdown-container">
            <span>Phân loại HĐ không xác định</span>
            <select className="filter-dropdown">
              <option value=""></option>
            </select>
          </div>
        </div>
        
        {/* Table section */}
        <div className="table-container">
          <table className="invoice-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>STT</th>
                <th>Ngày lập hoá đơn</th>
                <th>Mẫu số hoá đơn</th>
                <th>Ký hiệu hoá đơn</th>
                <th>Số hoá đơn</th>
                <th>MST người bán</th>
                <th>Tên người bán</th>
                <th>Mã vật tư</th>
                <th>Tên hàng hoá</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((rowNum) => (
                <tr key={rowNum}>
                  <td><input type="checkbox" /></td>
                  <td>{rowNum}</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                  <td>&lt;/&gt;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer */}
      <div className="footer">
        <div className="footer-spacer"></div>
        <div className="footer-buttons">
          <button className="setup-btn">Thiết lập</button>
          <button className="save-btn">Lưu</button>
          <button className="process-btn">Xử lý dữ liệu</button>
          <button className="close-btn">Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default Layhoadon;