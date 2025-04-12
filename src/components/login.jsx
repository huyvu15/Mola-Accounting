// import React from 'react';
import '../css/login.css';
import bgImage from '../assets/bg.png';
import illustrationImage from '../assets/bg1.png';

import React, { useState } from 'react';
// import './Login.css';
// import googleIcon from './assets/google-icon.svg';

const Login = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleShowModal = () => {
    setShowRegistrationModal(true);
  };

  const handleCloseModal = () => {
    setShowRegistrationModal(false);
  };

  return (
    <div className="login-container">
      <div className="background-layer">
        <img src={bgImage} alt="Background" className="background-image" />
      </div>
      
      <div className="content-container">
        <div className="left-section">
          <h1 className="title">PHẦN MỀM KẾ TOÁN MOLA</h1>
          
          <button className="register-button" onClick={handleShowModal}>
            Đăng ký dùng thử miễn phí
          </button>
        </div>
      </div>

      {showRegistrationModal && (
        <div className="modal-overlay">
          <div className="registration-modal">
            <div className="modal-header">
              <h2>Đăng Ký</h2>
              <button className="close-button" onClick={handleCloseModal}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="#84818A" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="login-prompt">
              <span>Bạn đã có tài khoản?</span>
              <a href="#" className="login-link">Đăng Nhập</a>
            </div>

            <form className="registration-form">
              <div className="form-group">
                <input type="text" id="username" className="form-input" placeholder=" " />
                <label htmlFor="username" className="form-label">Tên đăng nhập</label>
              </div>

              <div className="form-group">
                <input type="email" id="email" className="form-input" placeholder=" " />
                <label htmlFor="email" className="form-label">Email</label>
              </div>

              <div className="form-group">
                <input type="tel" id="phone" className="form-input" placeholder=" " />
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
              </div>

              <div className="form-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  className="form-input" 
                  placeholder=" " 
                />
                <label htmlFor="password" className="form-label">Mật khẩu</label>
                <button 
                  type="button" 
                  className="show-password-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4.5C6.5 4.5 2.73 7.61 1 12C2.73 16.39 6.5 19.5 11 19.5C15.5 19.5 19.27 16.39 21 12C19.27 7.61 15.5 4.5 11 4.5ZM11 17C8.24 17 6 14.76 6 12C6 9.24 8.24 7 11 7C13.76 7 16 9.24 16 12C16 14.76 13.76 17 11 17ZM11 9C9.34 9 8 10.34 8 12C8 13.66 9.34 15 11 15C12.66 15 14 13.66 14 12C14 10.34 12.66 9 11 9Z" fill={showPassword ? "#227447" : "#d1d1d1"}/>
                  </svg>
                </button>
              </div>

              <button type="submit" className="register-submit-button">Đăng Ký</button>

              <div className="divider">
                <span>or</span>
              </div>

              <button type="button" className="google-login-button">
                <span>Đăng nhập với Google</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.16 10.45H19.2V10.4H12V13.6H16.68C15.9 15.43 14.1 16.7 12 16.7C9.24 16.7 7 14.46 7 11.7C7 8.94 9.24 6.7 12 6.7C13.3 6.7 14.47 7.19 15.36 7.98L17.67 5.67C16.15 4.27 14.18 3.4 12 3.4C7.4 3.4 3.7 7.1 3.7 11.7C3.7 16.3 7.4 20 12 20C16.6 20 20.3 16.3 20.3 11.7C20.3 11.27 20.25 10.84 20.16 10.45Z" fill="#4285F4"/>
                  <path d="M4.40002 7.54L7.03002 9.5C7.75002 7.86 9.73002 6.7 12 6.7C13.3 6.7 14.47 7.19 15.36 7.98L17.67 5.67C16.15 4.27 14.18 3.4 12 3.4C8.74002 3.4 5.87002 5.11 4.40002 7.54Z" fill="#EA4335"/>
                  <path d="M12 20C14.13 20 16.05 19.17 17.56 17.84L15.05 15.71C14.2 16.33 13.17 16.7 12 16.7C9.91002 16.7 8.12002 15.45 7.33002 13.63L4.72002 15.7C6.18002 18.27 8.92002 20 12 20Z" fill="#34A853"/>
                  <path d="M20.16 10.45H19.2V10.4H12V13.6H16.68C16.3 14.46 15.69 15.2 14.9 15.71L14.91 15.7L17.42 17.83C17.25 17.99 20.3 15.7 20.3 11.7C20.3 11.27 20.25 10.84 20.16 10.45Z" fill="#FBBC05"/>
                </svg>
              </button>

              <div className="terms-checkbox">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className="checkmark"></span>
                  <span className="terms-text">
                    By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.
                  </span>
                </label>
              </div>

              <div className="recaptcha-notice">
                <span>Protected by reCAPTCHA and subject to the Prism </span>
                <a href="#" className="policy-link">Privacy Policy</a>
                <span> and </span>
                <a href="#" className="policy-link">Terms of Service.</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;