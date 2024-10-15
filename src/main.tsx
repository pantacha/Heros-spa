import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HerosApp from './HerosApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HerosApp />
  </StrictMode>,
)
