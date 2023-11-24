import { Fragment } from 'react';
import './App.css';
import Home from './Asstes/pages/Home';
import Navbars from './Asstes/componet/Nav/NavBar';
import Foter from './Asstes/componet/Footer/Footer';
import Main from './Asstes/Main/main';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements ,createHashRouter } from 'react-router-dom';
import Layout from './Asstes/componet/Layout/Layout';
import Contact from './Asstes/pages/Contact';

const routes = createHashRouter (createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route index path='/home' element={<Home />} />
       <Route path='/Contact' element={<Contact />} />
       
    </Route>
))
function App() {
  return (
    <Fragment>
          <RouterProvider router={routes} />
      </Fragment>
  );
}

export default App;
 