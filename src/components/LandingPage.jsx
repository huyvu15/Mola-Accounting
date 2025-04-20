import React from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Mola Accounting</div>
        <nav className="nav-links">
          <a href="#features">Tính năng</a>
          <a href="#pricing">Bảng giá</a>
          <a href="#contact">Liên hệ</a>
          <a href="/login">Đăng nhập</a>
        </nav>
      </header>

      <main className="main-content">
        <section id="hero">
          <h1 className="section-title">Phần mềm kế toán Mola</h1>
          <div className="card-grid">
            <div className="card">
              <h2 className="card-title">Quản lý hóa đơn</h2>
              <p className="card-content">
                Quản lý và theo dõi hóa đơn điện tử một cách dễ dàng và hiệu quả.
                Tích hợp với hệ thống của Tổng cục Thuế.
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Báo cáo tài chính</h2>
              <p className="card-content">
                Tự động tạo báo cáo tài chính, báo cáo thuế theo quy định mới nhất.
                Xuất báo cáo dưới nhiều định dạng.
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Quản lý kho</h2>
              <p className="card-content">
                Theo dõi hàng tồn kho, nhập xuất hàng hóa. Cảnh báo khi hàng hóa sắp hết.
              </p>
            </div>
          </div>
        </section>

        <section id="features">
          <h2 className="section-title">Tính năng nổi bật</h2>
          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">Đồng bộ hóa đơn</h3>
              <p className="card-content">
                Tự động đồng bộ hóa đơn từ hệ thống của Tổng cục Thuế.
                Hỗ trợ nhiều loại hóa đơn và định dạng.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Bảo mật dữ liệu</h3>
              <p className="card-content">
                Mã hóa dữ liệu theo tiêu chuẩn quốc tế.
                Sao lưu tự động và phục hồi khi cần thiết.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Hỗ trợ 24/7</h3>
              <p className="card-content">
                Đội ngũ hỗ trợ kỹ thuật chuyên nghiệp, sẵn sàng giải đáp mọi thắc mắc.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about">Giới thiệu</a>
            <a href="#terms">Điều khoản</a>
            <a href="#privacy">Chính sách bảo mật</a>
            <a href="#contact">Liên hệ</a>
          </div>
          <div className="copyright">
            © 2024 Mola Accounting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 