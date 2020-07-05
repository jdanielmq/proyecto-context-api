import React from 'react';
import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeProvider'
import Principal from './components/Principal';
import HolaProvider from './context/HolaProvider'

function App() {
  return (
    <HolaProvider>
      <ThemeProvider>
        <Navbar/>
        <Principal/>
      </ThemeProvider>
    </HolaProvider>

    
  );
}

export default App;
