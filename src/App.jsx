import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Base from './component/layout/Base';
import Home from './pages/Home';
// import Hero from './component/element/Hero';
import Swap from './component/element/Swap';
import Account from './component/element/Account';
import Dash from './component/element/Dash';
import Docs from './component/element/Docs';


function App() {
  return (
   
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    {/* <Route path='/' index element ={ <Home/>} /> */}
    <Route path='/Dash' index element ={<Dash/>} />
    <Route path='/Account' index element ={ <Account/>} />
    <Route path='/Swap' index element ={ <Swap/>} />
    <Route path='/Docs' index element ={ <Docs/>} />

   </Routes>
   
   </Base>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
