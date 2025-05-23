import Layout from './ui/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import NotFound from './pages/404'
import About from './pages/about'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/portfolio" element={ <HomePage /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/portfolio/about" element={ <About /> } />
          <Route path="*" element={<NotFound />} />
          <Route path='/portfolio/contact' element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
