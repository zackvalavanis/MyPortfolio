import { RouterProvider } from 'react-router-dom'
import { router } from './routes/appRoutes.tsx'
import './App.css'
import '../src/style/style.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  
  return (
  <>
    <RouterProvider router={router}/>
    <Analytics />
  </>
  )
}

export default App
