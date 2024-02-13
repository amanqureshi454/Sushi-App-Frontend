import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import BookTable from './components/BookTable';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Menu" Component={Menu} />
          <Route path="/bookatable" Component={BookTable} />
           <Route path="/About" Component={About} /> 
          <Route path="/blog" Component={BlogPage} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
