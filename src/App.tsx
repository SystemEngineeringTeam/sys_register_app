import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/participant" element={<NewBlog />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
