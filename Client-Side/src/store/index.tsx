
import studentReducer from './reducers/studentReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';


// const middlewares = [thunkMiddleware, loggerMiddleware];

const store = createStore(studentReducer,applyMiddleware(thunk) );
export default store;