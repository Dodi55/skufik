import { useState } from 'react'
import { Header } from './header/Header'
import './App.sass'
import { chengeTheme } from './chengeTheme';

function App() {
  const [theme, setTheme] = useState('white');
  const [themeFon, setThemeFon] = useState('black');

  console.log(setTheme);
  console.log('ban');
  return (
    <>
    <div className='container'>
        <button onClick={() => chengeTheme(setTheme())}>Тема</button>
        <div className='main' style={{backgroundColor: themeFon}}>
          <Header theme={theme}/>
          <Header theme={theme}/>
          <Header theme={theme}/>
          <Header theme={theme}/>
        </div>
      </div>
    </>
  )

}

export default App
