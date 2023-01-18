import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <div className="imp-message">
        It is only for the mobile
    </div>
    <App />
    <script src="./Include/js/jquery.js"></script>
    <script src="./Include/js/chart.min.js"></script>
    </Provider>
  </React.StrictMode>
);
function appendScripts(scriptName) {
  const script = document.createElement("script");
  script.src = scriptName;
  document.body.appendChild(script);
}
window.addEventListener("load", function() {
  appendScripts("https://demo-designprojects.com/html/sigma-bank/js/particles.min.js")
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
