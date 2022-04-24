import Home from './Components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
