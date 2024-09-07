import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import './App.css';

const LunchSelector = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      const querySnapshot = await getDocs(collection(db, 'menus'));
      setMenus(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    fetchMenus();
  }, []);

  const handleSubmit = async () => {
    if (selectedMenu) {
      await addDoc(collection(db, 'selections'), {
        menu: selectedMenu,
        user: "user@example.com", 
        timestamp: new Date()
      });
      alert('선택이 저장되었습니다!');
    } else {
      alert('메뉴를 선택하세요.');
    }
  };

  return (
    <div className="container">
      <h1>도시락 선택</h1>
      {loading ? <p>로딩 중...</p> : (
        <div>
          <ul>
            {menus.map(menu => (
              <li key={menu.id}>
                <input
                  type="radio"
                  value={menu.name}
                  checked={selectedMenu === menu.name}
                  onChange={() => setSelectedMenu(menu.name)}
                />
                {menu.name}
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit}>제출</button>
        </div>
      )}
    </div>
  );
};

export default LunchSelector;
