import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

function SelectorPage() {
  const [menu, setMenu] = useState('');
  const [selectedDish, setSelectedDish] = useState('');

  useEffect(() => {
    // Firebase에서 메뉴를 가져오는 코드
    setMenu('Sample Menu from Firebase');
  }, []);

  const handleSelectionChange = (e) => {
    setSelectedDish(e.target.value);
  };

  const callKonni = () => {
    // Konni에게 메뉴 변경 요청을 보내는 코드
    console.log('Konni has been called');
  };

  return (
    <div className="selector-container">
      <h1>Select Your Lunch</h1>
      <div className="menu-display">
        <h2>{menu}</h2>
        <select value={selectedDish} onChange={handleSelectionChange}>
          <option value="" disabled>Select your dish</option>
          <option value="Dish 1">Dish 1</option>
          <option value="Dish 2">Dish 2</option>
          <option value="Dish 3">Dish 3</option>
        </select>
      </div>
      <button onClick={callKonni}>Request Menu Change</button>
    </div>
  );
}

export default SelectorPage;
