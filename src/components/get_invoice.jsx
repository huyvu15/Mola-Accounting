import React, { useState, useRef } from 'react';
import '../css/get_invoice.css';
import LoginForm from './login_HDDT';
import InvoiceSync from './Sync_TCT';

const Get_invoice = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSyncForm, setShowSyncForm] = useState(false);
  const fileInputRef = useRef(null);

  const handleSyncButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginForm(false);
    setShowSyncForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseSyncForm = () => {
    setShowSyncForm(false);
  };

  const handleAddFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      // Handle the selected files here
      console.log('Selected files:', files);
    }
  };

  return (
    <div className="container">
      {/* Header navigation */}
      <div className="header">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Tổng quan</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">Mua hàng</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">Xử lý tự động chứng từ mua hàng</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">Lấy hoá đơn</span>
        </div>
        <div className="header-actions">
          <button className="btn-minimize">—</button>
          <button className="btn-restore">□</button>
          <button className="btn-close">×</button>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Page header with title */}
        <div className="page-header">
          <div className="page-title">Tải dữ liệu hoá đơn</div>
          <button className="btn-settings">
            <span className="settings-icon">⚙</span> Thiết lập
          </button>
        </div>
        
        {/* Control panel */}
        <div className="control-panel">
          <div className="branch-container">
            <div className="folder-icon">📁</div>
            <div className="branch-text">Chi nhánh</div>
            <select className="branch-select">
              <option>CÔNG TY TNHH DU LỊCH</option>
            </select>
          </div>
          
          <button className="btn-choose-file">
            <span className="file-icon">📄</span> Chọn File
          </button>
          
          <button className="btn-add-file" onClick={handleAddFile}>
            <span className="add-icon">+</span> Thêm File
          </button>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            multiple
          />
          
          <button className="btn-sync" onClick={handleSyncButtonClick}>
            <span className="sync-icon">🔄</span> Đồng bộ dữ liệu HĐĐT từ TCT
          </button>
          
          <div className="classification-container">
            <span>Phân loại HĐ không xác định</span>
            <select className="classification-select">
              <option></option>
            </select>
          </div>
        </div>

        {/* Table section */}
        <div className="table-container">
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="checkbox-column">
                    <input type="checkbox" />
                  </th>
                  <th>Ngày lập hoá đơn</th>
                  <th>Mẫu số hoá đơn</th>
                  <th>Ký hiệu hoá đơn</th>
                  <th>Số hoá đơn</th>
                  <th>MST người bán</th>
                  <th>Tên người bán</th>
                  <th>Mã vật tư</th>
                  <th>Tên hàng hoá</th>
                  <th>Đơn vị tính</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th>Thuế suất</th>
                  <th>Tiền thuế</th>
                  <th>Tổng cộng</th>
                  <th>Ghi chú</th>
                </tr>
                <tr className="filter-row">
                  <th className="sort-column">⇅</th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                  <th><div className="filter-cell">&lt;/&gt;</div></th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((rowNum) => (
                  <tr key={rowNum}>
                    <td className="row-number">
                      <input type="checkbox" />
                      <span className="number">{rowNum}</span>
                    </td>
                    <td>01/01/2024</td>
                    <td>01GTKT</td>
                    <td>AB/24E</td>
                    <td>0001234</td>
                    <td>0123456789</td>
                    <td>CÔNG TY TNHH ABC</td>
                    <td>VT001</td>
                    <td>Vật tư A</td>
                    <td>Cái</td>
                    <td>100</td>
                    <td>1,000,000</td>
                    <td>100,000,000</td>
                    <td>10%</td>
                    <td>10,000,000</td>
                    <td>110,000,000</td>
                    <td>Ghi chú {rowNum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>

      {/* Login form overlay */}
      {showLoginForm && (
        <LoginForm 
          onLoginSuccess={handleLoginSuccess} 
          onClose={handleCloseLoginForm}
        />
      )}

      {/* Sync form overlay */}
      {showSyncForm && (
        <InvoiceSync onClose={handleCloseSyncForm} />
      )}
    </div>
  );
};

export default Get_invoice;