import React from "react";
import "../css/man2.css";

export const Mn = () => {
  return (
    <div className="mn">
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
          <div className="filter-group">
            <div className="branch-selector">
              <span className="branch-icon"></span>
              <span className="label">Chi nhánh</span>
              <div className="select-box">
                <span className="company-name">CÔNG TY TNHH DU LỊCH</span>
                <span className="dropdown-icon"></span>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="file-button choose-file">
              <span className="button-icon"></span>
              <span>Chọn File</span>
            </button>
            <button className="file-button add-file">
              <span className="button-icon"></span>
              <span>Thêm File</span>
            </button>
            <button className="sync-button">
              <span>Đồng bộ dữ liệu HĐĐT từ TCT</span>
              <span className="sync-icon"></span>
            </button>
          </div>

          <div className="hd-selector">
            <span className="label">Phân loại HĐ không xác định</span>
            <div className="select-box">
              <span className="dropdown-icon"></span>
            </div>
          </div>
        </div>

        {/* Data table */}
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th className="checkbox-column">
                  <input type="checkbox" />
                </th>
                <th className="sort-column"></th>
                <th>Ngày lập hoá đơn</th>
                <th>Mẫu số hoá đơn</th>
                <th>Ký hiệu hoá đơn</th>
                <th>Số hoá đơn</th>
                <th>MST người bán</th>
                <th>Tên người bán</th>
                <th>Mã vật tư</th>
                <th>Tên hàng hoá, dịch vụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="checkbox-column">
                  <input type="checkbox" />
                </td>
                <td className="row-number">1</td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
                <td className="code-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};