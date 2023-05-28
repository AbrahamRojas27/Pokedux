import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './styles/styles.scss'
import { store } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import SinglePokemon, { loader } from './pages/SinglePokemon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: 'pokedex',
        element: <Pokedex />,
      },
      {
        path: 'pokedex/:name',
        element: <SinglePokemon />,
        loader: loader,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

