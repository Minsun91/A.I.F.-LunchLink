import React, { useState } from 'react';
import './App.css';  // CSS 파일을 import

function KonniPage() {
  const [menu, setMenu] = useState('');

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  const uploadMenu = () => {
    console.log('Menu uploaded:', menu);
  };

  return (
    <div className="container konni-container">
      <h1>Upload Lunch Menu</h1>
      <textarea
        placeholder="Enter the lunch menu"
        value={menu}
        onChange={handleMenuChange}
      />
      <button onClick={uploadMenu}>Upload Menu</button>
    </div>
  );
}

export default KonniPage;
