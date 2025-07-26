import { RouterProvider } from 'react-router-dom'
import { router } from './routes/appRoutes.tsx'
import './App.css'
import '../src/style/style.css'

function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
