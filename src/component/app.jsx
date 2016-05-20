import React from 'react';
import Layout from './layout';
import { connect } from 'react-redux';
import { matrixOsszehasonlitas } from '../core/index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Grafilogika</h1>
        <Layout />
        { this.props.vege ? <p>Nyertél</p> : null }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    vege: matrixOsszehasonlitas(state.abra, state.matrix),
  };
}

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;