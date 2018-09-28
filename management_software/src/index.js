/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
import store, { addGuest,removeGuest,cleanRoom,dirtyRoom,bookGuest,checkoutGuest } from './store'


store.dispatch(addGuest("olmo"))
store.dispatch(addGuest("anna"))

store.dispatch(cleanRoom("[1]"))
store.dispatch(cleanRoom("[2]"))

store.dispatch(bookGuest("olmo", "[1]"))

store.dispatch(bookGuest("anna", "[2]"))




