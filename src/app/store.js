import {createStore} from "redux";

import mainReducer from './reducers/main';

export default createStore(mainReducer);