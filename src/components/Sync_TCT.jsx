import React, { useState, useEffect } from 'react';
import '../css/Sync_TCT.css';
import Get_invoice from './get_invoice';
import LoginForm from './login_HDDT';

const API_BASE_URL = 'http://localhost:5000';

const Sync_TCT = ({ onClose }) => {
  const [invoiceType, setInvoiceType] = useState('1');
  const [processType, setProcessType] = useState('tongquat');
  const [startDay, setStartDay] = useState('01');
  const [startMonth, setStartMonth] = useState('01');
  const [startYear, setStartYear] = useState('2025');
  const [endDay, setEndDay] = useState('31');
  const [endMonth, setEndMonth] = useState('01');
  const [endYear, setEndYear] = useState('2025');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [outputPath, setOutputPath] = useState('D:/');

  // Generate days based on month and year
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => String(i + 1).padStart(2, '0'));
  };

  // Generate months (1-12)
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));

  // Generate years (2020-2025)
  const years = Array.from({ length: 6 }, (_, i) => String(2020 + i));

  // Get available days for start date
  const startDays = getDaysInMonth(parseInt(startMonth), parseInt(startYear));
  // Get available days for end date
  const endDays = getDaysInMonth(parseInt(endMonth), parseInt(endYear));

  const handleSync = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/process-invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({
          type: parseInt(invoiceType),
          process_type: processType,
          date_range: {
            start: `${startDay}/${startMonth}/${startYear}`,
            end: `${endDay}/${endMonth}/${endYear}`
          },
          output_path: outputPath
        })
      });

      const data = await response.json();

      if (data.success) {
        // Create a file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';
        
        // Set the file name
        const fileName = `invoice_${processType}_${startDay}${startMonth}${startYear}_${endDay}${endMonth}${endYear}.csv`;
        
        // Create a blob from the data
        const blob = new Blob([data.content], { type: 'text/csv' });
        
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        
        // Append to body, click, and cleanup
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        // Close the modal and return to main page
        onClose();
      } else {
        setError(data.message || 'Có lỗi xảy ra khi xử lý hóa đơn');
      }
    } catch (err) {
      setError('Có lỗi xảy ra khi kết nối đến server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sync-modal">
      <div className="sync-content">
        <div className="sync-header">
          <h2>Đồng bộ dữ liệu HĐĐT từ TCT</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="sync-body">
          <div className="form-group">
            <label>Loại hóa đơn</label>
            <select 
              value={invoiceType} 
              onChange={(e) => setInvoiceType(e.target.value)}
              className="form-select"
            >
              <option value="1">Hóa đơn đầu vào</option>
              <option value="2">Hóa đơn đầu ra</option>
            </select>
          </div>

          <div className="form-group">
            <label>Loại xử lý</label>
            <select 
              value={processType} 
              onChange={(e) => setProcessType(e.target.value)}
              className="form-select"
            >
              <option value="tongquat">Tổng quát</option>
              <option value="chitiet">Chi tiết</option>
              <option value="xml_html">XML/HTML</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ngày lập hóa đơn</label>
            <div className="date-range">
              <div className="date-inputs">
                <select 
                  value={startDay} 
                  onChange={(e) => setStartDay(e.target.value)}
                  className="form-select"
                >
                  {startDays.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select 
                  value={startMonth} 
                  onChange={(e) => setStartMonth(e.target.value)}
                  className="form-select"
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select 
                  value={startYear} 
                  onChange={(e) => setStartYear(e.target.value)}
                  className="form-select"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <span className="date-separator">đến</span>
              <div className="date-inputs">
                <select 
                  value={endDay} 
                  onChange={(e) => setEndDay(e.target.value)}
                  className="form-select"
                >
                  {endDays.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select 
                  value={endMonth} 
                  onChange={(e) => setEndMonth(e.target.value)}
                  className="form-select"
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select 
                  value={endYear} 
                  onChange={(e) => setEndYear(e.target.value)}
                  className="form-select"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Nơi lưu file</label>
            <input
              type="text"
              value={outputPath}
              onChange={(e) => setOutputPath(e.target.value)}
              className="form-select"
              placeholder="Nhập đường dẫn lưu file"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="sync-actions">
            <button 
              className="sync-button" 
              onClick={handleSync}
              disabled={isLoading}
            >
              {isLoading ? 'Đang xử lý...' : 'Đồng bộ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sync_TCT;