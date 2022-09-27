import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Search from './pages/Search';
import Browse from './pages/Browse';
import Tools from './pages/Tools';
import Peptide from './pages/Peptide';
import Submit from './pages/Submit';
import Admin from './pages/Admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/peptide/:id' element={<Peptide />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
