import './App.css';
import Login from './Login';
import Signup from './Signup';
import Resetpassword from './Reset-password';
import Accesstoken from './Access-token';
import Newpassword from './Newpassword';
import Returntologin from './Returntologin';
import Shortlink from './compontents/Shortlink';
import Data from './compontents/Data';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Data />}>
        <Route path='/#' element={<Data />} />
        <Route path='Shortlink' element={<Shortlink />} />
      </Route>
      <Route path="/signin" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/Reset" title="Reset password" element={<Resetpassword />} />
      <Route path="/auth" element={<Accesstoken />} />
      <Route path="/New" element={<Newpassword />} />
      <Route path='/return' element={<Returntologin />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>

}

export default App;
