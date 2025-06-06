import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './global.css'
import './style/index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/Store/index.js'
import App from './Pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)