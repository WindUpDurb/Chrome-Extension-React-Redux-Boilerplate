"use strict";

import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {Store} from "react-chrome-redux";

import App from './components/app/App';

const anchor = document.createElement('div');
anchor.id = 'jobCE-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

const proxyStore = new Store({portName: "example-port"});

render(
    <Provider store={proxyStore}>
        <App/>
    </Provider>, document.getElementById('jobCE-anchor'));