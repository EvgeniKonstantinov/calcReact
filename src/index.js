import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MainBodyCalendar} from './MainBodyCalendar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MainBodyCalendar />,
    document.getElementById('root')
)
registerServiceWorker();
