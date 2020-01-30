import React from 'react';
import { Provider } from 'react-redux';
// import { createEpicMiddleware } from "redux-observable";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './config/Store';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

const { persistor, store } = configureStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
