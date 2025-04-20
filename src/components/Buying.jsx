import React, { useState } from 'react';
import { 
  ArrowUpDown,
  Save,
  Trash2
} from 'lucide-react';
import '../css/home.css';

const Buying = () => {
  const [selectedCompany, setSelectedCompany] = useState('CÔNG TY TNHH DU LỊCH');

  return (
    <div className="content-container">
      {/* Header Buttons */}
      <div className="header-buttons">
        <button>Thay đổi dữ liệu mặc định</button>
        <button>Lấy hoá đơn</button>
        <button>Xử lý dữ liệu</button>
        <button>Kiểm tra</button>
        <button className="save-btn">
          <Save size={16} />
          <span>Lưu</span>
        </button>
        <button className="delete-btn">
          <Trash2 size={16} />
          <span>Xoá</span>
        </button>
      </div>

      <div className="table-cell">
           <div className="text">Xử lý tự động chứng từ mua hàng</div>
       </div>


      {/* Company Selector */}
      <div className="company-selector">
        <div className="branch-label">
          {/* <img src="/building-perspective-matte.png" alt="Branch" /> */}
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

      {/* Transaction Information Table */}
      <div className="table-section">
        <h3>Thông tin chung</h3>
        <table className="table-content">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input type="checkbox" />
              </th>
              <th>
                Loại giao dịch
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Phương thức TT
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                STK ngân hàng
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Ngày hạch toán
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Ngày chứng từ
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Mã NCC giao dịch
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Tên NCC giao dịch
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Ngày hoá đơn
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

      {/* Product Details Table */}
      <div className="table-section">
        <h3>Thông tin chi tiết</h3>
        <table className="table-content">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input type="checkbox" />
              </th>
              <th>
                Mã hàng
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Tên hàng
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Tính chất
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Mã kho
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Tên kho
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                TK Nợ
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                TK Có
                <ArrowUpDown className="sort-icon" />
              </th>
              <th>
                Đơn vị tính
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
        <button>Gộp mặt hàng</button>
        <button>Lấy lại dữ liệu gốc</button>
      </div>
    </div>
  );
};

export default Buying; 