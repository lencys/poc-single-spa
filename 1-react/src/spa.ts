import React from 'react';
import ReactDOMClient from 'react-dom/client';
// @ts-ignore
import singleSpaReact from 'single-spa-react';
import App from './App';

const lc = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: App,
    errorBoundary: ():any => null
});

export const { bootstrap, mount, unmount } = lc;
