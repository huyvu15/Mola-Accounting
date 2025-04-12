import React, { useState } from 'react';
import '../css/auth.css';
// import googleIcon from './assets/google-icon.svg';
import bgImage from '../assets/bg.png';
import illustrationImage from '../assets/bg1.png';


const Authentication = () => {
  // States to control which screen is shown
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'login', 'register', 'forgotPassword', 'verifyEmail', 'resetPassword'
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  
  // State for verification code inputs
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);

  // Handle verification code input
  const handleVerificationCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input if current is filled
      if (value !== '' && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  // Navigation handlers
  const navigateToLogin = () => setCurrentScreen('login');
  const navigateToRegister = () => setCurrentScreen('register');
  const navigateToHome = () => setCurrentScreen('home');
  const navigateToForgotPassword = () => setCurrentScreen('forgotPassword');
  const navigateToVerifyEmail = () => setCurrentScreen('verifyEmail');
  const navigateToResetPassword = () => setCurrentScreen('resetPassword');

  return (
    <div className="auth-container">
      <div className="background-layer">
        <img src={bgImage} alt="Background" className="background-image" />
      </div>
      
      <div className="content-container">
        <div className="left-section">
          <h1 className="title">PHẦN MỀM KẾ TOÁN MOLA</h1>
          
          <button className="register-button" onClick={navigateToRegister}>
            Đăng ký dùng thử miễn phí
          </button>
        </div>

        {/* Home screen - no modal */}
        {currentScreen === 'home' && null}

        {/* Login Modal */}
        {currentScreen === 'login' && (
          <div className="modal-overlay">
            <div className="auth-modal">
              <div className="modal-header">
                <h2>Đăng Nhập</h2>
                <button className="close-button" onClick={navigateToHome}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="#84818A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="register-prompt">
                <span>Bạn chưa có tài khoản?</span>
                <a href="#" className="register-link" onClick={(e) => { e.preventDefault(); navigateToRegister(); }}>Đăng Ký</a>
              </div>

              <form className="auth-form">
                <div className="form-group">
                  <input type="text" id="username" className="form-input" placeholder=" " />
                  <label htmlFor="username" className="form-label">Tên đăng nhập</label>
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

                <div className="forgot-password">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToForgotPassword(); }}>Quên mật khẩu?</a>
                </div>

                <button type="submit" className="submit-button">Đăng Nhập</button>

                <div className="divider">
                  <span>or</span>
                </div>

                <button type="button" className="google-login-button">
                  <span>Đăng nhập với Google</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8055 10.2298C19.8055 9.51986 19.7485 8.83521 19.6227 8.17578H10.2002V11.8743H15.6109C15.3816 13.0929 14.7078 14.1275 13.7102 14.7787V17.2395H16.9575C18.8422 15.5262 19.8055 13.1135 19.8055 10.2298Z" fill="#4285F4"/>
                    <path d="M10.2002 20.0006C12.897 20.0006 15.1718 19.1151 16.9613 17.2397L13.714 14.7789C12.8088 15.3921 11.6247 15.7498 10.2041 15.7498C7.58063 15.7498 5.37266 14.0403 4.57698 11.7458H1.22266V14.2867C3.0527 17.7338 6.50658 20.0006 10.2002 20.0006Z" fill="#34A853"/>
                    <path d="M4.57296 11.7456C4.15106 10.5393 4.15106 9.22325 4.57296 8.01697V5.47607H1.22256C-0.154117 8.28574 -0.154117 11.4768 1.22256 14.2865L4.57296 11.7456Z" fill="#FBBC05"/>
                    <path d="M10.2002 4.25125C11.6252 4.23254 13.005 4.73618 14.0558 5.67697L16.9459 2.78688C15.096 1.06897 12.6835 0.0338439 10.2002 0.0525356C6.50658 0.0525356 3.0527 2.31938 1.22266 5.7665L4.57305 8.30741C5.36481 5.99881 7.58063 4.25125 10.2002 4.25125Z" fill="#EA4335"/>
                  </svg>
                </button>
              </form>

              <div className="recaptcha-notice">
                <span>Protected by reCAPTCHA and subject to the Prism </span>
                <a href="#" className="policy-link">Privacy Policy</a>
                <span> and </span>
                <a href="#" className="policy-link">Terms of Service</a>
              </div>
            </div>
          </div>
        )}

        {/* Registration Modal */}
        {currentScreen === 'register' && (
          <div className="modal-overlay">
            <div className="auth-modal">
              <div className="modal-header">
                <h2>Đăng Ký</h2>
                <button className="close-button" onClick={navigateToHome}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="#84818A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="login-prompt">
                <span>Bạn đã có tài khoản?</span>
                <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); navigateToLogin(); }}>Đăng Nhập</a>
              </div>

              <form className="auth-form">
                <div className="form-group">
                  <input type="text" id="reg-username" className="form-input" placeholder=" " />
                  <label htmlFor="reg-username" className="form-label">Tên đăng nhập</label>
                </div>

                <div className="form-group">
                  <input type="email" id="reg-email" className="form-input" placeholder=" " />
                  <label htmlFor="reg-email" className="form-label">Email</label>
                </div>

                <div className="form-group">
                  <input type="tel" id="reg-phone" className="form-input" placeholder=" " />
                  <label htmlFor="reg-phone" className="form-label">Số điện thoại</label>
                </div>

                <div className="form-group">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="reg-password" 
                    className="form-input" 
                    placeholder=" " 
                  />
                  <label htmlFor="reg-password" className="form-label">Mật khẩu</label>
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

                <button type="submit" className="submit-button">Đăng Ký</button>

                <div className="divider">
                  <span>or</span>
                </div>

                <button type="button" className="google-login-button">
                  <span>Đăng nhập với Google</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8055 10.2298C19.8055 9.51986 19.7485 8.83521 19.6227 8.17578H10.2002V11.8743H15.6109C15.3816 13.0929 14.7078 14.1275 13.7102 14.7787V17.2395H16.9575C18.8422 15.5262 19.8055 13.1135 19.8055 10.2298Z" fill="#4285F4"/>
                    <path d="M10.2002 20.0006C12.897 20.0006 15.1718 19.1151 16.9613 17.2397L13.714 14.7789C12.8088 15.3921 11.6247 15.7498 10.2041 15.7498C7.58063 15.7498 5.37266 14.0403 4.57698 11.7458H1.22266V14.2867C3.0527 17.7338 6.50658 20.0006 10.2002 20.0006Z" fill="#34A853"/>
                    <path d="M4.57296 11.7456C4.15106 10.5393 4.15106 9.22325 4.57296 8.01697V5.47607H1.22256C-0.154117 8.28574 -0.154117 11.4768 1.22256 14.2865L4.57296 11.7456Z" fill="#FBBC05"/>
                    <path d="M10.2002 4.25125C11.6252 4.23254 13.005 4.73618 14.0558 5.67697L16.9459 2.78688C15.096 1.06897 12.6835 0.0338439 10.2002 0.0525356C6.50658 0.0525356 3.0527 2.31938 1.22266 5.7665L4.57305 8.30741C5.36481 5.99881 7.58063 4.25125 10.2002 4.25125Z" fill="#EA4335"/>
                  </svg>
                </button>

                <div className="terms-checkbox">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={isTermsChecked}
                      onChange={() => setIsTermsChecked(!isTermsChecked)}
                    />
                    <span className="checkmark"></span>
                    <span className="terms-text">
                      By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.
                    </span>
                  </label>
                </div>
              </form>

              <div className="recaptcha-notice">
                <span>Protected by reCAPTCHA and subject to the Prism </span>
                <a href="#" className="policy-link">Privacy Policy</a>
                <span> and </span>
                <a href="#" className="policy-link">Terms of Service</a>
              </div>
            </div>
          </div>
        )}

        {/* Forgot Password Modal */}
        {currentScreen === 'forgotPassword' && (
          <div className="modal-overlay">
            <div className="auth-modal">
              <div className="modal-header">
                <h2>Quên Mật Khẩu?</h2>
                <button className="close-button" onClick={navigateToLogin}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="#84818A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <p className="forgot-password-desc">
                Đừng lo lắng! Chỉ cần nhập email của bạn và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu.
              </p>

              <form className="auth-form">
                <div className="form-group">
                  <input type="email" id="reset-email" className="form-input" placeholder=" " />
                  <label htmlFor="reset-email" className="form-label">Email</label>
                </div>

                <button 
                  type="button" 
                  className="submit-button"
                  onClick={navigateToVerifyEmail}
                >
                  Gửi Email Khôi Phục
                </button>
              </form>

              <div className="register-prompt center-align">
                <a href="#" className="register-link" onClick={(e) => { e.preventDefault(); navigateToRegister(); }}>Tạo mới? Đăng Ký</a>
              </div>
            </div>
          </div>
        )}

        {/* Email Verification Modal */}
        {currentScreen === 'verifyEmail' && (
          <div className="modal-overlay">
            <div className="auth-modal">
              <div className="modal-header">
                <h2>Khôi phục mật khẩu</h2>
                <button className="close-button" onClick={navigateToForgotPassword}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="#84818A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <h3 className="verification-title">Xác minh Email</h3>
              
              <p className="verification-desc">
                Vui lòng nhập mã 6 chữ số đã được gửi đến địa chỉ email của bạn
              </p>

              <form className="auth-form">
                <div className="verification-code-container">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      className="verification-input"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                    />
                  ))}
                </div>

                <button 
                  type="button" 
                  className="submit-button"
                  onClick={navigateToResetPassword}
                >
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Reset Password Modal */}
        {currentScreen === 'resetPassword' && (
          <div className="modal-overlay">
            <div className="auth-modal">
              <div className="modal-header">
                <h2>Đổi Mật Khẩu</h2>
                <button className="close-button" onClick={navigateToVerifyEmail}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="#84818A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              
              <p className="verification-desc">
                Vui lòng tạo mật khẩu mới
              </p>

              <form className="auth-form">
                <div className="form-group">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="new-password" 
                    className="form-input" 
                    placeholder=" " 
                  />
                  <label htmlFor="new-password" className="form-label">Mật khẩu mới</label>
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

                <div className="form-group">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    id="confirm-password" 
                    className="form-input" 
                    placeholder=" " 
                  />
                  <label htmlFor="confirm-password" className="form-label">Nhập lại mật khẩu mới</label>
                  <button 
                    type="button" 
                    className="show-password-button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 4.5C6.5 4.5 2.73 7.61 1 12C2.73 16.39 6.5 19.5 11 19.5C15.5 19.5 19.27 16.39 21 12C19.27 7.61 15.5 4.5 11 4.5ZM11 17C8.24 17 6 14.76 6 12C6 9.24 8.24 7 11 7C13.76 7 16 9.24 16 12C16 14.76 13.76 17 11 17ZM11 9C9.34 9 8 10.34 8 12C8 13.66 9.34 15 11 15C12.66 15 14 13.66 14 12C14 10.34 12.66 9 11 9Z" fill={showConfirmPassword ? "#227447" : "#d1d1d1"}/>
                    </svg>
                  </button>
                </div>

                <button 
                  type="button" 
                  className="submit-button"
                  onClick={navigateToLogin}
                >
                  Xác nhận
                </button>
              </form>

              <div className="register-prompt center-align">
                <a href="#" className="register-link" onClick={(e) => { e.preventDefault(); navigateToRegister(); }}>Tạo mới? Đăng Ký</a>
              </div>
            </div>
          </div>
        )}
        <div className="right-section">
          <img 
            src={illustrationImage} 
            alt="MOLA Accounting Software Illustration" 
            className="illustration-image" 
          />
        </div>

      </div>
    </div>
  );
};

export default Authentication;