import {createStore,applyMiddleware} from 'redux'
import Postreducer from './reducer/Postreducer'
import thunk from 'redux-thunk'
const store = createStore(Postreducer,applyMiddleware(thunk))

export default store