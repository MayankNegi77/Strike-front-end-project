import { createRoot } from 'react-dom/client'
import App from "./App"
import './index.css'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'auto';
}

createRoot(document.getElementById('root')).render(
  <App />
)
