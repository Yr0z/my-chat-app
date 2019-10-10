import React from 'react';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className="App">
      <Contact 
        avatar="https://randomuser.me/api/portraits/women/79.jpg"
        name="Danielle Hudson"
        status
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/33.jpg"
        name="Kent Brewer"
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/95.jpg"
        name="Same Knight"
        status
      />
    </div>
  );
}

export default App;
