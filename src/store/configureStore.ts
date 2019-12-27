/*
 *   File:           configureStore.ts
 *   Description:    this is where the store comes together:
 *                   It contains the createStore() => store, rootReducers, rootSagas, logger and other middleware
 *   Author:         RK
 */
import { Store, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware  } from "connected-react-router"; // `react-router-redux` is deprecated use `connected-react-router`
import { initialGlobalState, ApplicationState } from "./root/applicationState";

import createRootReducer from "./root/rootReducer";
import { rootSaga } from "./root/rootSaga";
import { History } from "history";

export default function configureStore(history: History): Store<ApplicationState> {
  // Custom redux logger
  const logger = createLogger({
    collapsed: true
  });

  // Build Saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Build ALL Middleware
  let middlewareList = [sagaMiddleware,  routerMiddleware(history)]
  if (process.env.NODE_ENV !== "production") {
    middlewareList = [...middlewareList, logger];
  }

  const middleware = applyMiddleware(
    ...middlewareList
  )

  // Create store
  const store = createStore(
    createRootReducer(history),
    initialGlobalState,
    middleware
  );

  // Run the root saga
  sagaMiddleware.run(rootSaga);

  // Return the store object.
  return store;
}
