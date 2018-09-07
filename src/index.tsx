import * as React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { createStore } from "redux";
// tslint:disable-next-line:no-implicit-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
// import App from "./containers/App";
import "./index.css";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

export const store = createStore(reducer, composeWithDevTools());
const AppComponent = Loadable({
  loader: () => import("./containers/App"),
  loading: () => <div>Loading...</div>
});

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();


/*

  odm (mocking) {
    Room: {
        name,
        _id,
        bookedDays: [{
            day: booked?,
            idofbookedguy
        }]
    }
  }

  storeState: {
    week,
    rooms: [id1, id2]
    addMode,
    bookedRooms: {
        id1(ofroom): {
            nameofroom,
            0: {
              booked: boolean;
              day
              number
              // can expand i guess
            }
        },
        id2(ofroom): {
            nameofroom,
            0: {
              booked: boolean;
              day
              number
              // can expand i guess
            }
        }
    }

  }
*/
