import Home from './Components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
