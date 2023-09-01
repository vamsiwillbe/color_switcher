
import { useEffect, useState } from 'react';
import './App.css';
import ColorItem from './itemcolor';
function App() {

  
  const colors= ['#FFCC99','lightblue','#004958','#ffb6c1','#800080','darkblue'];

  const [state,setState] = useState(false)

  useEffect(()=>{
    const currentColor=localStorage.getItem('color')
    setTheme(currentColor);

  },[])

  const setTheme = (color) =>{
    document.documentElement.style.setProperty('--bg-color',color)

  }

  const setColor=(event)=>{
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor)
  


    localStorage.setItem('color',currentColor);

  }


  return (
    <div className="App">
      
      <div className={`color-switcher  ${state && 'color-switcher--open'}`}>
        <button onClick={()=>setState(prevState => !prevState)}><i className="ri-settings-4-fill"></i></button>
        <h1 className='heading'>Select Color</h1>
        <div className="color-list">
          {colors.map((color,idx) => <ColorItem key={idx} setColor={setColor} color={color} />  )}
        </div>
      </div>

    </div>
  );
}

export default App;
