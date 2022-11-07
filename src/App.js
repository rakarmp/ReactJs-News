import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './page/Blog';
import Home from './page/Home';
import BlogDetail from './page/BlogDetail';
import NotFound from './page/NotFound';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='blog'>Berita</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:id' element={<BlogDetail />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
