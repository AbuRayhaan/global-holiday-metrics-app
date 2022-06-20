import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// State: i. https://api.openweathermap.org/geo/1.0/reverse?lat=20&lon=30&limit=5&appid=ab0573603a519765828faf48655343cd
// Pollution: https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=20&lon=30&appid=ab0573603a519765828faf48655343cd

//Holidays API
// Country: https://holidayapi.com/v1/countries?pretty&key=1b53bd42-1ccd-44a8-9d52-4ac475e29c0f
// Number: https://holidayapi.com/v1/holidays?pretty&key=1b53bd42-1ccd-44a8-9d52-4ac475e29c0f&country=AL&year=2021