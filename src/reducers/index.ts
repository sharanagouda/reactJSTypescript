import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Todo } from '../action/todo.action';
import * as todoReducer from './todo.reducer';

export interface RootState {
    todoList: Todo[];
}

export default () =>
    combineReducers({
        form: formReducer,
        ...todoReducer,
    });
