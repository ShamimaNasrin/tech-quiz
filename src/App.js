import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            // fetch('https://openapi.programming-hero.com/api/quiz')
            //   .then(res => res.json())
            //   .then(data => console.log(data.data));
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },

        {
          path: 'statistics',

          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        }

      ]
    },
    {
      path: '*', element: <h5>page not found: 404</h5>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
