import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Moviedetails from './pages/Moviedetails'
import Seat from './pages/Seat'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Addshow from './pages/admin/Addshow'
import Listshow from './pages/admin/Listshow'
import Listbookings from './pages/admin/Listbookings'
function App() {
  const isAdminroute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    { !isAdminroute && <NavBar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies/:id' element={<Moviedetails/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id/:date' element={<Seat/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
      <Route path='/admin/*' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='add-shows' element={<Addshow/>}/>
        <Route path='list-shows' element={<Listshow/>}/>
        <Route path='list-bookings' element={<Listbookings/>}/>
      </Route>
     </Routes>
     { !isAdminroute && <Footer/>}
    </>
  )
}

export default App