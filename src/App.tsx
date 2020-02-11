import React from 'react';
import { Provider } from 'react-redux';
// import { createEpicMiddleware } from "redux-observable";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './config/Store';
import { BrowserRouter } from 'react-router-dom';
// import Main from './Main';
import TodoComponent from "./class_components/TodoProject/TodoComponent";


const { persistor, store } = configureStore();

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <TodoComponent />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
