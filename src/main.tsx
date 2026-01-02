import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './HomePage.tsx'
import SecretPage from './SecretPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secret" element={<SecretPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
