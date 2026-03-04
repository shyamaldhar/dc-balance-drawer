import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DrawerBalancing from './drawer-balancing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrawerBalancing />
  </StrictMode>
)
