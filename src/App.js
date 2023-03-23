import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Search from './pages/Search';
import Browse from './pages/Browse';
import Tools from './pages/Tools';
import Blast from './pages/Blast';
import Overview from './pages/Overview';
import Peptide from './pages/Peptide';
import Submit from './pages/Submit';
import Admin from './pages/Admin';
import Guide from './pages/Guide';

const App = () => {
  return (
    <BrowserRouter basename='/antiprotoz'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/tools/composition' element={<Tools />} />
        <Route path='/tools/blast' element={<Blast />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/peptide/:id' element={<Peptide />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
