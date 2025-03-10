import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-dark-blue-main">
      <div className="bg-dark-blue-card p-6 rounded-lg w-80 text-white h-[93vh]">
        <img src="src/assets/Rectangle Copy.png" alt="Equilibrium" className="w-full rounded-lg mb-6" />
        <h1 className="text-xl font-semibold mb-4">Equilibrium #3429</h1>
        <p className="text-soft-blue mb-6">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="src/assets/Combined Shape.png" alt="Ethereum" className="w-4 h-4 mr-2" />
            <span>0.041 ETH</span>
          </div>
          <div className="flex items-center">
            <img src="src/assets/Clock.png" alt="Clock" className="w-4 h-4 mr-2" />
            <span>3 days left</span>
          </div>
        </div>
        <div className="flex items-center border-t border-dark-blue-line pt-4">
          <img src="src/assets/Oval (6).png" alt="Avatar" className="w-8 h-8 rounded-full mr-4" />
          <span>Creation of <a href="#" className="text-[#8BACD9]">Jules Wyvern</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;