
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import MainLayout from './layouts/MainLayout';
import {UseExample1} from './components/useExample1/Joke';
// import {UseExample1} from './components/useExample1/jokeUseEffect';
 import {UseExample2} from './components/useExample2/Post';
//  import {UseExample2} from './components/useExample2/postUseEffect';
import { UseExample3 } from './components/useExample3/Message';
import './App.css'
function App() {
 

  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> {/* Default child route */}
        <Route path='use-example-1' element={<UseExample1 />} />
        <Route path='use-example-2' element={<UseExample2 />} />
        <Route path='use-example-3' element={<UseExample3 />} />
        {/*
        <Route path='use-example-2' element={<UseExample2 />} />
        <Route path='use-example-3' element={<UseExample3 />} /> */}
        </Route>
      
        
    </Routes>
  )
}

export default App
