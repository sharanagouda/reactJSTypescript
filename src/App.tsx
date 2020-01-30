import React from 'react';
import { Provider } from 'react-redux';
// import { createEpicMiddleware } from "redux-observable";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './config/Store';

import Main from './Main';

const { persistor, store } = configureStore();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    );
};

export default App;
