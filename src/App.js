import { Layout } from './components/Layout';
import AppRouter from './routes';
import CreateStyle from './styles/global';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Note que dentro de LAYOUT tem código HTML, por isso la no layout coloquei CHILDREN */}
      <Layout>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <CreateStyle />
      </Layout>
    </div>
  );
}

export default App;
