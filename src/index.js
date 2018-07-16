import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppContainer from "./containers/AppContainer"

const store = configureStore();


render(
    <div className="container">
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </div>,
    document.getElementById("root")
);