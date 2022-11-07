import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import Character from './pages/Character';
import CharacterDetail from './pages/CharacterDetail';
import NotFound from './pages/NotFound';

function App() {
  return (  
    <div className="App">
      <nav>
        <Link to=''>Home</Link>
        <Link to='about'> About</Link>
        <Link to='characters'> Characters</Link>
      </nav>
      {/* <Routes>
        <Route path='' element={<Home/>}></Route>
        Dos componentes en la misma ruta
        <Route path='' element={<><Home/><About/></>}></Route> 
        <Route path='about' element={<About/>}></Route>
        <Route path='characters' element={<Character/>}></Route>
        <Route path='characters/:name' element={<CharacterDetail/>}></Route>
      </Routes> */}
      <img className='logo' src="/img/logo.png" alt="logo" />
      <Routes>

        <Route path=''>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>

          <Route path='characters'>
            <Route index element={<Character/>}/>
            <Route path=':name' element={<CharacterDetail/>}/>
          </Route>

          <Route path='*' element={<NotFound/>}/>
          
        </Route>

      </Routes>
    </div>
  );
}

export default App;
