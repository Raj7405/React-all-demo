import { createStore, compose, applyMiddleware} from "redux";
import { devToolsEnhancer } from '@redux-devtools/extension';
// import createStore from './miniReduxStoreLogic.jsx'
import rootReducer from './Reducer.jsx'
import { includeMeaningOfLife, sayHiOnDispatch } from "./AddOn/enhancers.jsx";
import loggerMiddleware from "./AddOn/middlerware.jsx";

let preloadData;
const persistedTodoString = localStorage.getItem('todos')
console.log(JSON.parse(persistedTodoString));
if(persistedTodoString){
    preloadData = {
        todos: JSON.parse(persistedTodoString)
    }
}
// let composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// let middlewareToLog = applyMiddleware(loggerMiddleware)
let composedEnhancer = compose(applyMiddleware(loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
    rootReducer, 
    preloadData,
    applyMiddleware())

export default store