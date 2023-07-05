import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateGreeting from './pages/CreateGreeting/CreateGreeting';
import Home from './pages/Home/Home';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:actor" element={<CreateGreeting/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
