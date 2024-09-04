import React, { useState } from 'react';

function KonniPage() {
  const [menu, setMenu] = useState('');

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  const uploadMenu = () => {
    // Firebase에 메뉴 업로드하는 코드
    console.log('Menu uploaded:', menu);
  };

  return (
    <div className="konni-container">
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
