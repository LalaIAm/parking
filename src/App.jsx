import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import TermsPage from './pages/terms'
import Layout from './layout/Layout'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Main />} />
        <Route path='/terms' element={<TermsPage />} />
        </Route>
    </Routes>
  )
}

export default App