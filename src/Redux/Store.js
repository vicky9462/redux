import { createStore ,applyMiddleware} from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import logger from "redux-logger";
import rootReducer from "./RootReducer";


const Store=createStore(rootReducer);



export default Store;