import styles from '../../less/index.less';
import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>Enjoy!</p>
        <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
      </div>
    )
  }
}
