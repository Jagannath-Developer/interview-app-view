
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Course from './components/Course';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course/:id' element={<Course/>}/>
      <Route path='/*' element={<div className='alert alert-danger'><p>No page found</p></div>}/>
     </Routes>
    </div>
  );
}

export default App;
