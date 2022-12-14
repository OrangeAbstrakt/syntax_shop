import React from 'react';
import FilterSidebar from './components/FilterSidebar';
import ShopGrid from './components/ShopGrid';
import './index.css';

function App() {
  return (
    <div className='hold'>
      <FilterSidebar />
      <ShopGrid />
    </div>
  );
}

export default App;
