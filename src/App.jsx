
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import MainLayout from './layouts/MainLayout';
import {UseExample1} from './components/useExample1/Joke';
// import {UseExample1} from './components/useExample1/jokeUseEffect';
 import {UseExample2} from './components/useExample2/Post';
//  import {UseExample2} from './components/useExample2/postUseEffect';
import { UseExample3 } from './components/useExample3/Message';
import { UseExampleContext } from './components/useExampleContext/Theme';
import { ActionExample1 } from './components/actionExample1/Posts';
import { ActionExample2 } from './components/actionExample2/ShoppingCart';
import { UseFormStatusExample } from './components/useFormStatus/Posts';
import AddToCartForm from './components/useFormStateExample/AddToCartForm';
import { UseOptimisticExample } from './components/useoptimisticExample/Message';
import './App.css'
function App() {
 

  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> {/* Default child route */}
        <Route path='use-example-1' element={<UseExample1 />} />
        <Route path='use-example-2' element={<UseExample2 />} />
        <Route path='use-example-3' element={<UseExample3 />} />
        <Route path='use-example-context' element={<UseExampleContext />} />
        <Route path='action-example-1' element={<ActionExample1 />} />
        <Route path='action-example-2' element={<ActionExample2 />} />
        <Route
          path='useformstatus-example'
          element={<UseFormStatusExample />}
        />
         <Route
          path='useformstate-example'
          element={
            <>
              <AddToCartForm
                itemID='1'
                itemTitle='JavaScript: The Definitive Guide'
              />
              <AddToCartForm
                itemID='2'
                itemTitle='JavaScript: The Good Parts'
              />
            </>
          }
        />
        <Route
          path='useoptimistic-example'
          element={<UseOptimisticExample />}
        />
        </Route>
      
        
    </Routes>
  )
}

export default App
