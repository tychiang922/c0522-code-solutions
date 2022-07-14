import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HotButton />);
