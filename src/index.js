import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from "./App"

const store = configureStore();


render(

    <div className="container">
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.getElementById("root")
);