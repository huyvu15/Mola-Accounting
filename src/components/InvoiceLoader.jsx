import React from "react";
import "../css/InvoiceLoader.css";

export const InvoiceLoader = () => {
  return (
    <div className="invoice-loader">
      {/* Header with breadcrumb navigation */}
      <div className="header">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Tổng quan</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">Mua hàng</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item">Xử lý tự động chứng từ mua hàng</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">Lấy hoá đơn</span>
        </div>
        <div className="window-controls">
          <button className="control-button minimize"></button>
          <button className="control-button maximize"></button>
          <button className="control-button close"></button>
        </div>
      </div>

      {/* Title bar */}
      <div className="title-bar">
        <div className="title-container">
          <h1 className="title">Tải dữ liệu hoá đơn</h1>
        </div>
        <div className="settings-button">
          <span className="settings-icon"></span>
          <span>Thiết lập</span>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Filter and actions row */}
        <div className="filter-actions-row">
          <div className="branch-selector-container">
            <div className="branch-label">
              <span className="branch-icon"></span>
              <span className="label">Chi nhánh</span>
            </div>
            <div className="company-select">
              <span className="company-name">CÔNG TY TNHH DU LỊCH</span>
              <span className="dropdown-icon"></span>
            </div>
          </div>

          <div className="button-group">
            <button className="file-button">
              <span className="file-icon"></span>
              <span>Chọn File</span>
            </button>
            <button className="file-button">
              <span className="add-icon"></span>
              <span>Thêm File</span>
            </button>
            <button className="sync-button">
              <span>Đồng bộ dữ liệu HĐĐT từ TCT</span>
              <span className="sync-icon"></span>
            </button>
          </div>

          <div className="invoice-type-container">
            <div className="invoice-type-label">Phân loại HĐ không xác định</div>
            <div className="invoice-type-select">
              <span className="dropdown-icon"></span>
            </div>
          </div>
        </div>

        {/* Data table */}
        <div className="invoice-table-container">
          <table className="invoice-table">
            <thead>
              <tr>
                <th className="checkbox-column">
                  <input type="checkbox" />
                </th>
                <th className="index-column"></th>
                <th className="date-column">Ngày lập hoá đơn</th>
                <th className="model-column">Mẫu số hoá đơn</th>
                <th className="symbol-column">Ký hiệu hoá đơn</th>
                <th className="number-column">Số hoá đơn</th>
                <th className="tax-column">MST người bán</th>
                <th className="seller-column">Tên người bán</th>
                <th className="sku-column">Mã vật tư</th>
                <th className="product-column">Tên hàng hoá, dịch vụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="checkbox-column">
                  <input type="checkbox" />
                </td>
                <td className="index-cell">1</td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
                <td className="empty-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};