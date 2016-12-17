import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './jsx/components/app.jsx';

render( <AppContainer><App/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./jsx/components/app.jsx', () => {
    const App = require('./jsx/components/app.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
