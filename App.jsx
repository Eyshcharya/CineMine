import Error from './src/Components/Error';
import Home from './src/Components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='' />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
