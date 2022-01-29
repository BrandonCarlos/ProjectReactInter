// Para navegarmos entre ROTAS utilizar o react-router-dom
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

import {
  Routes,
  Route
} from 'react-router-dom';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default AppRouter;