import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import '../css/home.css';

const InvoiceUpload = () => {
  const [selectedCompany, setSelectedCompany] = useState('CÔNG TY TNHH DU LỊCH');

  return (
    <div className="content-container">
      <div className="table-cell">
        <div className="text">Tải dữ liệu hoá đơn</div>
      </div>

      {/* Company Selector */}
      <div className="company-selector">
        <div className="branch-label">
          <span>Chi nhánh</span>
        </div>
        <select 
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option>CÔNG TY TNHH DU LỊCH</option>
          <option>CÔNG TY CP CÔNG NGHỆ</option>
          <option>CÔNG TY TNHH THƯƠNG MẠI</option>
        </select>
      </div>

      {/* File Upload Buttons */}
      <div className="header-buttons">
        <button>Chọn File</button>
        <button>Thêm File</button>
        <button>Đồng bộ dữ liệu HĐĐT từ TCT</button>
        <button>Phân loại HD không xác định</button>
      </div>

      {/* Invoice Data Table */}
      <div className="table-section">
        <table className="table-content">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input type="checkbox" />
              </th>
              <th>
                Ngày lập hoá đơn
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Mẫu số hoá đơn
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Ký hiệu hoá đơn
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Số hoá đơn
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                MST người bán
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Tên người bán
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Mã vật tư
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Tên hàng hoá
                <ArrowUpDown className="sort-icon" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td className="checkbox-column">
                  <input type="checkbox" />
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
      </div>

      {/* Bottom Actions */}
      <div className="bottom-actions">
        <button>Lưu</button>
        <button>Xoá</button>
      </div>
    </div>
  );
};

export default InvoiceUpload;