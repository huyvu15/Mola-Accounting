import React, { useState } from 'react';
import { 
  FileText,
  Search,
  Building
} from 'lucide-react';
import '../css/home.css';
import data from '../data.json';
import Selling from './Selling';
import Buying from './Buying';


const Homes = () => {
  const { sidebar, transactions } = data;
  const [activeTab, setActiveTab] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState('buy');

  const handleButtonClick = React.useCallback((action) => {
    if (action === 'Mua Hàng') {
      setCurrentPage('buy');
    } else if (action === 'Bán Hàng') {
      setCurrentPage('sell');
    }
    console.log(`${action} được nhấn`);
  }, []);

  const handleSearchChange = React.useCallback((e) => {
    const value = e.target.value;
    setSearchInput(value);
    console.log('Tìm kiếm:', value);
  }, []);

  return (
    <div className="m-n-2">
      {/* Topbar with Search */}
      <div className="topbar">
        <div className="search-container">
          <input
            type="text"
            className="box-find"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Nhập tính năng cần tìm kiếm"
          />
          <Search className="search-icon" />
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="button">
          <div className="dashboard">{sidebar.title}</div>
        </div>

        <button 
          className={`table-cell7 ${currentPage === 'buy' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Mua Hàng')}
        >
          <div className="content5">
            <div className="text5">Mua Hàng</div>
          </div>
        </button>

        <button 
          className={`table-cell8 ${currentPage === 'sell' ? 'active' : ''}`}
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

      {/* Breadcrumb */}
      <div className="breadcrumb-box">
        <div className="top-details">
          <span className="tongquan">Tổng quan</span>
          <span className="div2">/</span>
          <span className="tongquan">{currentPage === 'buy' ? 'Mua hàng' : 'Bán hàng'}</span>
          <span className="div2">/</span>
          <span className="tongquan">Xử lý tự động chứng từ {currentPage === 'buy' ? 'mua' : 'bán'} hàng</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {currentPage === 'buy' ? <Buying /> : <Selling />}
      </div>

      {/* Company Info */}
      <div className="chi-nh-nh">Chi nhánh</div>
      <Building className="building-perspective-matte" />
    </div>
  );
};

export default Homes; 