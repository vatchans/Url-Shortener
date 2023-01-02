import { Routes,Route } from 'react-router-dom';
import './App.css';
import Data from './compontents/Data';
import Shortlink from './compontents/Shortlink';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Data/>}>
        <Route path='/#' element={<Data/>}/>
         <Route path='Shortlink' element={<Shortlink/>}/>
        </Route>
      </Routes>
      {/* <Data></Data>
      <Shortlink></Shortlink> */}
    </div>
  );
}

export default App;
