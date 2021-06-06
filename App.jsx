import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Header/>
       <Note/>
       <Note/>
       <Note/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;