import React from 'react';
import { createRoot } from 'react-dom/client';

import Popup from './Popup.jsx';
import "../../global.css"

const container = document.getElementById('popup-root');
const root = createRoot(container); 
root.render(<Popup />);
