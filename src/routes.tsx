import Footer from 'Components/Footer';
import Menu from 'Components/Menu';
import Characters from 'pages/characters';
import Planets from 'pages/planets';
import Vehicles from 'pages/vehicles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/'>
            <Route index/>
            <Route path='/characters' element={<Characters />} />
            <Route path='/planets' element={<Planets/>} />
            <Route path='/vehicles' element={<Vehicles />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  )
}