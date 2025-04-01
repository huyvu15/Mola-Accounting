import React from 'react';
import '../css/get_invoice.css';
import LoginForm from './login_HDDT';

const Get_invoice = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSyncButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
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
          
          <button className="btn-sync">
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
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((rowNum) => (
                <tr key={rowNum}>
                  <td className="row-number">
                    <input type="checkbox" />
                    <span className="number">{rowNum}</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="footer">
        <div className="footer-actions">
          <button className="btn-save">
            <span className="save-icon">💾</span> Lưu
          </button>
          <button className="btn-process">
            <span className="process-icon">⚙</span> Xử lý dữ liệu
          </button>
          <button className="btn-close">
            <span className="close-icon">✖</span> Đóng
          </button>
        </div>
      </div>

      {/* Login form overlay */}
      {showLoginForm && (
        <div className="login-overlay">
          <LoginForm onClose={handleCloseLoginForm} />
        </div>
      )}

      {/* CSS style for overlay */}
      <style jsx>{`
        .login-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .close-login-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Get_invoice;