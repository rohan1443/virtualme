import styles from '../../less/index.less';
import React from 'react';
import { ButtonToolbar, Button, Grid, Row, Col } from 'react-bootstrap';

 

export default class App extends React.Component {
  render() {
    return (
     <Grid fluid={true}  >
       <Row className={styles.appContainer } > 
        <Col md={9} sm={9} >Left Col</Col>
        <Col md={3} sm={3} xs={12} className={`${styles.columnRight} ${styles.columnFont} ` } >Right Col</Col>
       </Row>
       <Row className={styles.navContainer } > 
        <Col md={9} sm={9} >Left Col</Col>
        <Col md={3} sm={3} xs={12} className={`${styles.columnRight} ${styles.columnFont} ` } >Right Col</Col>
       </Row>
      </Grid>
    )
  }
}
