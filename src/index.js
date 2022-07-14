import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container)
const RootComponent = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
root.render(<RootComponent />);
