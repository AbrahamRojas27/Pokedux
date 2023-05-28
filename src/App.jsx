import Header from './containers/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <Header/>
      <main className='main-container'>
        <Outlet />
      </main>
    </div>  
  )
}
export default App
