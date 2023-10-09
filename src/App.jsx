import Layout from './ui/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import NotFound from './pages/404'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="contact" element={ <ContactPage /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
