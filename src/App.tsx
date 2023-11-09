import { Home } from 'Pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routes';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md m-auto pt-2 px-2">
        <Routes>
          <Route path={`${routes.matches}/:date?`} element={<Home />} />
          <Route path="*" element={<Navigate to={routes.matches} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
