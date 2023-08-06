
import Home from './componets/Home/Home';
import CartContent from './componets/CartContent/CartContent';
import DataProvider from './componets/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Se importan las librerias BrowserRouter, Routes, Route para crear el enrutamiento de la aplicación

function App() {
  return (
    //Contenedor de aplicación
    <DataProvider >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home/> } /> 
            <Route path='/cart' element={ <CartContent/> } />
          </Routes>
      </BrowserRouter>
   </DataProvider>
  );
}

export default App;
