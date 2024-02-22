import React from 'react';
import { createRoot } from 'react-dom/client';

import Newtab from './Newtab';
import "../../global.css"

const container = document.getElementById('newtab-root');
const root = createRoot(container); 
root.render(<Newtab />);
