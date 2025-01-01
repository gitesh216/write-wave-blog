import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import {login, logout} from "./store/authSlice";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()  

  useEffect(() =>{
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login(userData))
        }
        else{
          dispatch(logout())
        }
      
    })
    .catch((error) => console.log("AppJsx :: getCurrentUser :: ",error))
    // we can also use catch statement here after .then
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-blue-100">
        <Header className="w-full bg-white shadow-md" />
      <main className="flex-grow w-full px-4 py-6 md:px-8 lg:px-12">
        <Outlet /> 
      </main>
        <Footer className="w-full bg-gray-800 text-white py-4"/>
    </div>

  ) : null
}

export default App
