import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./reducers";
import {createStore} from "redux";
import { Provider } from "react-redux";

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

console.log(store.getState());

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

