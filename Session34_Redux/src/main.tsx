import './index.css';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux"
import store from './redux/store/index.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
