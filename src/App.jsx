import './css/App.css'
import Home from './pages/Home';
import Fav from './pages/Fav';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';
function App() {
  const movienumber=2
//conditional rendering in react
  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Fav' element={<Fav/>}/>
      </Routes>
    </main>
    </MovieProvider>
    
  );
}

export default App
