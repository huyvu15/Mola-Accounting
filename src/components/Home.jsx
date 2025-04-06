import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  CreditCard, 
  Calendar, 
  User, 
  Home, 
  Tag, 
  Search, 
  Save, 
  Trash2, 
  Building,
  ShoppingCart
} from 'lucide-react';
import '../css/home.css';
import data from '../data.json';

// Constants
const COMPANIES = [
  'CÔNG TY TNHH DU LỊCH',
  'CÔNG TY CP CÔNG NGHỆ',
  'CÔNG TY TNHH THƯƠNG MẠI',
];

// Table Header Configuration
const TRANSACTION_HEADERS = [
  { icon: FileText, text: '', className: 'table-cell2' },
  { icon: CreditCard, text: 'Loại giao dịch' },
  { icon: Tag, text: 'Phương thức TT' },
  { icon: User, text: 'STK ngân hàng' },
  { icon: Calendar, text: 'Ngày hạch toán' },
  { icon: Calendar, text: 'Ngày chứng từ' },
  { icon: User, text: 'Mã NCC giao dịch' },
  { icon: User, text: 'Tên NCC giao dịch' },
  { icon: Calendar, text: 'Ngày hoá đơn' },
];

const INVENTORY_HEADERS = [
  'Mã hàng', 'Tên hàng', 'Tính chất', 'Mã kho', 'Tên kho',
  'TK Nợ', 'TK có', 'Đơn vị tính', 'Số liệu', 'Đơn giá'
];

const Homes = () => {
  const { sidebar, transactions, inventory } = data;
  const [activeTab, setActiveTab] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(COMPANIES[0]);

  // Memoized event handlers to prevent unnecessary re-renders
  const handleButtonClick = React.useCallback((action) => {
    console.log(`${action} được nhấn`);
    // Add specific logic for each action
  }, []);

  const handleSearchChange = React.useCallback((e) => {
    const value = e.target.value;
    setSearchInput(value);
    console.log('Tìm kiếm:', value);
  }, []);

  const handleCompanyChange = React.useCallback((e) => {
    const company = e.target.value;
    setSelectedCompany(company);
    console.log('Công ty được chọn:', company);
  }, []);

  const transactionTable = useMemo(() => (
    <div className="table-scroll-container" style={{ width: '100%', overflowX: 'auto' }}>
      <div className="frame-t-1" style={{ minWidth: '1200px' }}> {/* Adjusted minimum width to ensure horizontal scrolling */}
        <div className="t-12">
          {TRANSACTION_HEADERS.map((item, index) => (
            <div key={index} className={item.className || 'table-cell3'}>
              <item.icon className={`frame-2${index}`} />
              <div className={item.text === '' ? 'content2' : 'content3'}>
                <div className={item.text === '' ? 'tick' : 'text3'}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
        {transactions.map((transaction, rowIndex) => (
          <div key={rowIndex} className={`t-${13 + rowIndex}`}>
            {['', transaction.type, transaction.method, transaction.bankAccount, 
              transaction.accountingDate, transaction.documentDate, 
              transaction.supplierCode, transaction.supplierName, 
              transaction.invoiceDate].map((cellData, cellIndex) => (
              <div 
                key={cellIndex} 
                className={cellIndex === 0 ? 'table-cell5' : 'table-cell6'}
              >
                <div className="content3">
                  <div className="text3">{cellData}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ), [transactions]);

  const inventoryTable = useMemo(() => (
    <div className="table-scroll-container" style={{ width: '100%', overflowX: 'auto' }}>
      <div className="frame-t-2" style={{ minWidth: '1200px' }}> {/* Adjusted minimum width to ensure horizontal scrolling */}
        <div className="t-19">
          {INVENTORY_HEADERS.map((text, index) => (
            <div 
              key={index} 
              className={index < 3 || index > 6 ? 'table-cell4' : 'table-cell3'}
            >
              <div className={index === 0 ? 'content4' : 'content3'}>
                <div className="text3">{text}</div>
              </div>
            </div>
          ))}
        </div>
        {inventory.map((item, rowIndex) => (
          <div key={rowIndex} className={`t-${13 + rowIndex}`}>
            {[
              item.itemCode, item.itemName, item.property, 
              item.warehouseCode, item.warehouseName, 
              item.debitAccount, item.creditAccount, 
              item.unit, item.quantity, item.unitPrice
            ].map((cellData, cellIndex) => (
              <div key={cellIndex} className="table-cell6">
                <div className="content3">
                  <div className="text3">{cellData}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ), [inventory]);

  return (
    <div className="m-n-2">
      {/* Header Section */}
      <div className="rectangle-32" />
      
      {/* Main Title */}
      <div className="table-cell">
        <div className="content">
          <div className="text">Xử lý tự động chứng từ mua hàng</div>
        </div>
      </div>

      {/* Transaction Table - Now with Horizontal Scrolling Only */}
      {transactionTable}

      {/* Inventory Table - Now with Horizontal Scrolling Only */}
      {inventoryTable}

      {/* Search Input */}
      <input
        type="text"
        className="box-find"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="Nhập tính năng cần tìm kiếm"
      />
      <Search className="icon" />

      {/* Sidebar */}
      <div className="sidebar">
        <div className="button">
          <div className="dashboard">{sidebar.title}</div>
        </div>

        <button 
          className="table-cell7"
          onClick={() => handleButtonClick('Mua Hàng')}
        >
          <div className="content5">
            <div className="text5">
              <span>
                <span className="text-5-span">{sidebar.title[0]}</span>
                <span className="text-5-span2">{sidebar.title[1]}</span>
                <span className="text-5-span3">{sidebar.title.slice(2)}</span>
              </span>
            </div>
          </div>
        </button>

        <button 
          className="table-cell8"
          onClick={() => handleButtonClick('Bán Hàng')}
        >
          <div className="content5">
            <div className="text5">Bán Hàng</div>
          </div>
        </button>

        {transactions.map((transaction, index) => (
          <div 
            key={index} 
            className={`table-cell${14 + index} ${activeTab === index ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <div className="content6">
              <FileText className="page-perspective-matte" />
              <div className="text7">{`Xử lý chứng từ - ${transaction.supplierCode}`}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Buttons */}
      <div className="controls">
        {[
          { text: 'Thay đổi dữ liệu mặc định', action: 'Thay đổi dữ liệu mặc định', className: 'change-data' },
          { text: 'Lấy hoá đơn', action: 'Lấy hoá đơn', className: 'get-bill' },
          { text: 'Xử lý dữ liệu', action: 'Xử lý dữ liệu', className: 'process-data' },
        ].map((btn, index) => (
          <button 
            key={index}
            className={btn.className}
            onClick={() => handleButtonClick(btn.action)}
          >
            <div className="thay-i-d-li-u-m-c-nh">{btn.text}</div>
          </button>
        ))}

        <button 
          className="frame-1125" 
          onClick={() => handleButtonClick('Xoá')}
        >
          <Trash2 className="basket-perspective-matte" />
          <div className="xo">Xoá</div>
        </button>

        <button 
          className="frame-1126" 
          onClick={() => handleButtonClick('Lưu')}
        >
          <Save className="save-perspective-matte" />
          <div className="xo">Lưu</div>
        </button>
      </div>

      {/* Check Button */}
      <button 
        className="table-cell13" 
        onClick={() => handleButtonClick('Kiểm tra')}
      >
        <div className="content3">
          <div className="text7">Kiểm tra</div>
        </div>
      </button>

      <div className="bg"></div>
      <div className="frame-427319525">
        <select
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          {COMPANIES.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
      <div className="chi-nh-nh">Chi nhánh</div>
      <Building className="building-perspective-matte" />

      {/* Breadcrumb */}
      <div className="breadcrumb-box">
        <div className="top-details">
          <div className="account">
            <div className="tongquan">Tổng quan</div>
          </div>
          <div className="div">
            <div className="div2">/</div>
          </div>
          <div className="david">
            <div className="tongquan">{sidebar.title}</div>
          </div>
          <div className="div">
            <div className="div2">/</div>
          </div>
          <div className="new-card">
            <div className="tongquan">
              Xử lý tự động chứng từ mua hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;