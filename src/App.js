import React from 'react';

function App({ version, date }) {
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>React Application</h1>
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>Build Information:</h3>
        <p><strong>Version:</strong> {version}</p>
        <p><strong>Build Date:</strong> {date}</p>
        <p><strong>Current Time:</strong> {new Date().toLocaleString()}</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Статус сборки:</h3>
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          ✅ Production сборка успешно создана!
        </p>
      </div>
    </div>
  );
}

export default App;