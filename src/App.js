import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './Components/Book/Book';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.displayName}</p>
      <BrowserRouter>
        <Header/>
        <Routes>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/book/:bedType" element={<PrivateRoute>
            <Book/>
         </PrivateRoute>} >          
        </Route>
         {/* <Route path="/book/:bedType" element={<Book/>}></Route> */}
         <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>     
    </userContext.Provider>
  );
}

export default App;
