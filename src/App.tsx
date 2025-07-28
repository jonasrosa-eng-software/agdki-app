import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/public/index'
import { Home } from './pages/private/home'
import Login from './pages/public/login'
import CreateUser from './pages/public/createUser'
import { Auth } from './class/auth'

function App() {
  const auth = new Auth()
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<CreateUser />} path="/signup" />

      {/* rotas Privadas Gestor */}

      {auth.user.isClient ? (
        <Route element={<Home auth={auth} />} path="/client/main" />
      ) : (
        <Route element={<Home auth={auth} />} path="/gestor/main" />
      )}
    </Routes>
  )
}

export default App
