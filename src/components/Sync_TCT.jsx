import React, { useState, useEffect } from 'react';
import '../css/Sync_TCT.css';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5000';

const InvoiceSync = ({ onClose }) => {
  const [invoiceType, setInvoiceType] = useState('1');
  const [processType, setProcessType] = useState('tongquat');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [outputPath, setOutputPath] = useState('D:/');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSync = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      setError('Vui lòng chọn khoảng thời gian');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/process-invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        
        body: JSON.stringify({
          type: parseInt(invoiceType),
          process_type: processType,
          date_range: {
            start: startDate.split('-').reverse().join('/'),
            end: endDate.split('-').reverse().join('/')
          },
          output_path: outputPath
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        
        // Tải file về
        if (data.file_path) {
          const link = document.createElement('a');
          link.href = data.file_path;
          link.download = `invoice_${processType}_${startDate.replace(/-/g, '')}_${endDate.replace(/-/g, '')}.xlsx`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        if (onClose) {
          onClose();
        }
      } else {
        setError(data.message || 'Đồng bộ hóa thất bại');
      }
    } catch (err) {
      setError('Có lỗi xảy ra khi đồng bộ hóa');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="sync-modal">
        <div className="sync-header">
          <h2>Đồng bộ hóa hóa đơn</h2>
          <button className="close-button" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="sync-body">
          <form onSubmit={handleSync}>
            <div className="form-group">
              <label>Loại hóa đơn</label>
              <select
                value={invoiceType}
                onChange={(e) => setInvoiceType(e.target.value)}
                required
              >
                <option value="1">Hóa đơn bán ra</option>
                <option value="2">Hóa đơn mua vào</option>
              </select>
            </div>

            <div className="form-group">
              <label>Loại xử lý</label>
              <select
                value={processType}
                onChange={(e) => setProcessType(e.target.value)}
                required
              >
                <option value="tongquat">Tổng quát</option>
                <option value="chitiet">Chi tiết</option>
                <option value="xml_html">XML/HTML</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Từ ngày</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Đến ngày</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Đường dẫn lưu file</label>
              <input
                type="text"
                value={outputPath}
                onChange={(e) => setOutputPath(e.target.value)}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            
            <button type="submit" className="sync-button" disabled={isLoading}>
              {isLoading ? 'Đang đồng bộ...' : 'Đồng bộ'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSync;