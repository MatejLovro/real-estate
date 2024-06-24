import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header'


function App() {
  
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element = {<HomePage/>}/>
      <Route path="/about" element = {<AboutPage/>}/>
      <Route path="/sign-in" element = {<SignInPage/>}/>
      <Route path="/sign-up" element = {<SignUpPage/>}/>
    </Routes> 
  </BrowserRouter>    
  )
}

export default App
