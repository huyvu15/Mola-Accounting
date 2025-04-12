// App.jsx
import React from 'react';
import '../css/test.css';


const PurchasePage = () => {
  return (
    <div className="app-container">
      {/* Header với thanh tìm kiếm */}
      <div className="header">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Nhập tính năng cần tìm kiếm" 
            className="search-input" 
          />
          <div className="search-icon"></div>
        </div>
      </div>
      

      {/* Main Container */}
      <div className="main-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          {/* Main Button */}
          <div className="main-button">Mua Hàng</div>
          
          {/* Menu Container with List and Scrollbar */}
          <div className="menu-container">
            <div className="menu-list">
              {[...Array(6)].map((_, index) => (
                <div className="menu-item" key={index}>
                  <div className="menu-icon"></div>
                  <div className="menu-text">Xử lý tự động chứng từ mua hàng</div>
                </div>
              ))}
            </div>
            
            {/* Custom Scrollbar */}
            <div className="scrollbar">
              <div className="scrollbar-thumb"></div>
            </div>
          </div>
          
          {/* Bottom Menu */}
          <div className="bottom-menu">
            <div className="dotted-line"></div>
            <div className="menu-button active">
              <div className="button-icon"></div>
              <div className="button-text">Mua hàng</div>
            </div>
            <div className="menu-button">
              <div className="button-icon"></div>
              <div className="button-text">Bán hàng</div>
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="content-area">
          {/* Breadcrumb */}
          {/* <div className="breadcrumb">
            <span>Trang chủ</span>
            <span>/</span>
            <span>Mua hàng</span>
          </div> */}
          <div className="main-content">
            {/* Nội dung sẽ được thêm vào đây */}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="footer"></div>
    </div>
  );
};

export default PurchasePage;