import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const el = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>
// The page is prerendered at build time for search engines; hydrate it if present.
if (el.hasChildNodes()) hydrateRoot(el, app)
else createRoot(el).render(app)
