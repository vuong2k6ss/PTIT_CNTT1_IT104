import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'

import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai1/store.ts'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai2/store.ts'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai3/store.ts'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai4/store.ts'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai5/store.ts'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai6/store.ts'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai7/store.ts'
import { BrowserRouter } from 'react-router-dom'
// import { store } from './components/PTIT_CNTT1_IT104_Session31_Bai8/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter >
               <App /> 
      </BrowserRouter>

    </Provider>

  </StrictMode>,
)
