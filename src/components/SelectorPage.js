import React, { useState, useEffect } from 'react';
import { db } from '../firebase';  // Firebase 설정 파일 import
import './App.css';

function SelectorPage() {
  const [menu, setMenu] = useState('');
  const [selectedDish, setSelectedDish] = useState('');

  useEffect(() => {
    setMenu('Sample Menu from Firebase');
  }, []);

  const handleSelectionChange = (e) => {
    setSelectedDish(e.target.value);
  };

  const callKonni = () => {
    console.log('Konni has been called');
  };

  const saveMenu = async () => {
    if (!selectedDish) {
      alert('Please select a dish!');
      return;
    }

    try {
      await db.collection('menus').add({
        dish: selectedDish,
        timestamp: new Date(),
      });
      alert('Menu saved successfully!');
    } catch (error) {
      console.error('Error saving menu: ', error);
      alert('Failed to save menu');
    }
  };

  return (
    <div className="container selector-container">
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
      <button onClick={saveMenu}>Save Menu</button>
      <button onClick={callKonni}>Request Menu Change</button>
    </div>
  );
}

export default SelectorPage;
