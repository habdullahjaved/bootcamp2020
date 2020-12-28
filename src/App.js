import React from 'react';
import './App.css';
import Dinner from './dinner.js'

function App() {
  return (
    <div className="App">
     <Dinner dishName="Chicken Karahi"  sweetDish="Kheer"/>
      <hr/>
     <Dinner dishName="Nihaari"  sweetDish="Jalebi"/>
     <hr/>
     <Dinner dishName="Chicken Biryani"  sweetDish="Gajar Ka Halwa"/>
    </div>
  );
}

export default App;
