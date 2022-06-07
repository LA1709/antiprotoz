import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Search from './pages/Search';
import Browse from './pages/Browse';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
