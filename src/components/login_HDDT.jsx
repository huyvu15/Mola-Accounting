import React, { useState } from 'react';
import '../css/LoginForm.css';

const LoginForm = ({ onLoginSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [isChecked, setIsChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked && username && password && captcha) {
      onLoginSuccess();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <div className="login-header">
          <div className="header-title">Đăng Nhập HDDT</div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="login-body">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Tên đăng nhập</label>
              <div className="input-container">
                <input 
                  type="text" 
                  placeholder="MST Doanh Nghiệp"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <label>Mật khẩu</label>
              <div className="input-container">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {showPassword ? (
                      <path d="M11 4C4 4 1 11 1 11C1 11 4 18 11 18C18 18 21 11 21 11C21 11 18 4 11 4Z M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    ) : (
                      <path d="M11 4C4 4 1 11 1 11C1 11 4 18 11 18C18 18 21 11 21 11C21 11 18 4 11 4Z M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z M3 3L19 19" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="form-row">
              <label>Mã capcha</label>
              <div className="input-container">
                <div className="captcha-box">
                  {/* Captcha image will be here */}
                </div>
                <button type="button" className="refresh-captcha">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 4.16667L12.5 7.5M14.1667 10C14.1667 12.3012 12.3012 14.1667 10 14.1667C7.69881 14.1667 5.83333 12.3012 5.83333 10C5.83333 7.69881 7.69881 5.83333 10 5.83333C12.3012 5.83333 14.1667 7.69881 14.1667 10ZM10 1.66667V3.33333M16.6667 10H18.3333M10 16.6667V18.3333M3.33333 10H1.66667M4.16667 4.16667L2.5 2.5M15.8333 15.8333L17.5 17.5M4.16667 15.8333L2.5 17.5" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="form-row">
              <label>Nhập mã capcha</label>
              <div className="input-container">
                <input 
                  type="text"
                  placeholder="••••••••••"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="checkbox-row">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="checkmark"></span>
                <span className="checkbox-label">
                  Chúng tôi đồng ý uỷ quyền cho TAXBOT hỗ trợ tải hoá đơn của doanh nghiệp mình từ TCT
                </span>
              </label>
            </div>
            
            <button type="submit" className="login-button" disabled={!isChecked}>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;